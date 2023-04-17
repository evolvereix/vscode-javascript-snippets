const vscode = require('vscode')

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

const insertConsoleLogStatementDown = vscode.commands.registerCommand(
  'extension.insertConsoleLogStatementDown',
  () => {
    const editor = vscode.window.activeTextEditor
    if (!editor) return

    const selection = editor.selection
    const text = editor.document.getText(selection)

    text
      ? vscode.commands
          .executeCommand('editor.action.insertLineAfter')
          .then(() => {
            const logToInsert = `console.log('[JS Snips Log]: ${text}:', ${text})`
            insertText(logToInsert)
          })
      : insertText(`console.log('[JS Snips Log]: ')`)
  }
)

const insertConsoleLogStatementUp = vscode.commands.registerCommand(
  'extension.insertConsoleLogStatementUp',
  () => {
    const editor = vscode.window.activeTextEditor
    if (!editor) return

    const selection = editor.selection
    const text = editor.document.getText(selection)

    text
      ? vscode.commands
          .executeCommand('editor.action.insertLineBefore')
          .then(() => {
            const logToInsert = `console.log('[JS Snips Log]: ${text}:', ${text})`

            insertText(logToInsert)
          })
      : insertText(`console.log('[JS Snips Log]: ')`)
  }
)

function activate(context) {
  console.log(
    '[JS Snips Log]: The algorizen.javascript-snippets extension has been activated.'
  )
  context.subscriptions.push(insertConsoleLogStatementDown)
  context.subscriptions.push(insertConsoleLogStatementUp)
}

exports.activate = activate

function deactivate() {}

exports.deactivate = deactivate
