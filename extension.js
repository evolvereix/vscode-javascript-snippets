const vscode = require('vscode')
const path = require('path')

const insertText = (val) => {
  const editor = vscode.window.activeTextEditor

  if (!editor) {
    const errorMsg = 'Unable to insert log as no Document is currently open.'
    vscode.window.showErrorMessage(errorMsg)
    return
  }
  const selection = editor.selection
  const range = new vscode.Range(selection.start, selection.end)
  editor.edit((editBuilder) => {
    editBuilder.replace(range, val)
  })
}

const insertConsoleLogStatement = (command) => {
  if (!command) return

  const editor = vscode.window.activeTextEditor
  if (!editor) return

  const selection = editor.selection
  const text = editor.document.getText(selection)

  const fileName = path.parse(editor.document.fileName).name
  const name = fileName.includes('Untitled') ? '' : ` ${fileName}`

  text
    ? vscode.commands.executeCommand(command).then(() => {
        const logToInsert = `console.log('JSS log${name} ${text}:', ${text})`
        insertText(logToInsert)
      })
    : insertText(`console.log('JSS log${name} :', )`)
}

const insertConsoleLogStatementDown = vscode.commands.registerCommand(
  'extension.insertConsoleLogStatementDown',
  () => insertConsoleLogStatement('editor.action.insertLineAfter')
)

const insertConsoleLogStatementUp = vscode.commands.registerCommand(
  'extension.insertConsoleLogStatementUp',
  () => insertConsoleLogStatement('editor.action.insertLineBefore')
)

function activate(context) {
  console.log(
    '[JSS log]: The algorizen.javascript-snippets extension has been activated.'
  )
  context.subscriptions.push(insertConsoleLogStatementDown)
  context.subscriptions.push(insertConsoleLogStatementUp)
}

exports.activate = activate

function deactivate() {}

exports.deactivate = deactivate
