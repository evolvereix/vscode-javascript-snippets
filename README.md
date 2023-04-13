<br>
<h1>JavaScript Snippets<sup><em> for VS Code</em></sup></h1>

<samp>This extension contains code snippets for JavaScript in ES6 syntax for VS Code editor.</samp>

<a href="https://marketplace.visualstudio.com/items?itemName=algorizen.javascript-snippets" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/algorizen.javascript-snippets.svg?color=blue&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>

### Recommended VS Code Settings

```json
{
  "editor.suggestSelection": "recentlyUsedByPrefix",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue"
}
```

## Insert console.log()

Keyboard Shortcut: 

- Down: `Ctrl + Cmd + L`
- Up: `Shift + Ctrl + Cmd + L`

Output:

```js
console.log('variable: ', variable) // selection
console.log() // without selection
```

## Snippets

Below is a list of all available snippets and the triggers of each one. Remember to use `Tab` key.

**Note**

- Excluding VS Code built-in snippets.
- Excluding the final semicolon `;`.
- Use single quotes(`''`) instead of double quotes(`""`).

| Trigger                   | Content                                              |
| ------------------------- | ---------------------------------------------------- |
| <samp>func</samp>         | <samp>function name() {}</samp>                      |
| <samp>af</samp>           | <samp>() => {}</samp>                                |
| <samp>iife</samp>         | <samp>;(() => {})()</samp>                           |
| <samp>sort</samp>         | <samp>sort((a, b) => a - b)</samp>                   |
| <samp>assign</samp>       | <samp>Object.assign()</samp>                         |
| <samp>pt/prototype</samp> | <samp>Class.prototype.method = function () {}</samp> |
| <samp>rep/retp</samp>     | <samp>return new Promise(() => {})</samp>            |
| <samp>exp</samp>          | <samp>export member</samp>                           |
| <samp>expa</samp>         | <samp>export \* from Module</samp>                   |
| <samp>expd</samp>         | <samp>export default member</samp>                   |
| <samp>expf</samp>         | <samp>export function name(args) {}</samp>           |
| <samp>expaf</samp>        | <samp>export const name = () => {}</samp>            |
| <samp>imp</samp>          | <samp>import \* from Module</samp>                   |
| <samp>mod</samp>          | <samp>module.exports = \*</samp>                     |
| <samp>req</samp>          | <samp>require(Module)</samp>                         |
| <samp>setim</samp>        | <samp>setImmediate(() => {})</samp>                  |
| <samp>typeof</samp>       | <samp>typeof source</samp>                           |
| <samp>instanceof</samp>   | <samp>instanceof Object</samp>                       |
| <samp>call</samp>         | <samp>Object.prototype.toString.call()</samp>        |
| <samp>nextt</samp>        | <samp>nextTick()</samp>                              |
| <samp>proc</samp>         | <samp>process</samp>                                 |
| <samp>us</samp>           | <samp>'use strict'</samp>                            |
| <samp>dir</samp>          | <samp>console.dir()</samp>                           |

## License

MIT
