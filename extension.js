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

const insertConsoleLogStatement = vscode.commands.registerCommand(
  'extension.insertConsoleLogStatement',
  () => {
    const editor = vscode.window.activeTextEditor
    if (!editor) return

    const selection = editor.selection
    const text = editor.document.getText(selection)

    text
      ? vscode.commands
          .executeCommand('editor.action.insertLineAfter')
          .then(() => {
            const logToInsert = `console.log('${text}: ', ${text})`
            insertText(logToInsert)
          })
      : insertText('console.log()')
  }
)

function activate(context) {
  console.log('The algorizen.javascript-snippets extension has been activated.')
  context.subscriptions.push(insertConsoleLogStatement)
}

exports.activate = activate

function deactivate() {}

exports.deactivate = deactivate
