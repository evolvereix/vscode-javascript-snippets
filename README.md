# JavaScript Snippets

## VS Code JavaScript Snippets

This extension contains code snippets for JavaScript in ES6 syntax for VS Code editor.

**Note**

All the snippets not include the final semicolon `;`.

**Suggestions**

- Add `"editor.snippetSuggestions": "top",` to your user settings to see these snippets on top in the suggestion popover.

### Snippets

Below is a list of all available snippets and the triggers of each one. The ⇥ means the TAB key.

**Declarations**

| Trigger | Content |
| --- | --- |
| `var→` | `var statement` |
| `v=→` | `var statement = value` |
| `let→` | `let statement` |
| `l=→` | `let statement = value` |
| `letd→` | `let {} = value` |
| `const→` | `const statement` |
| `const=→` | `const statement = value` |
| `constd→` | `const {} = value` |


**Flow Control**

| Trigger | Content |
| --- | --- |
| `if→` | `if () {}` |
| `el→` | `else {}` |
| `ife→` | `if () {} else {}` |
| `eli→` | `else if () {}` |
| `ter→` | ` ?  :  ` |
| `for→` | `for (; i++) {}` |
| `forr→` | `for (: i--) {}` |
| `forin→` | `for (const item in object) {}` |
| `while→` | `while () {}` |
| `try→` | `try {} catch () {}` |
| `tryf→` | `try {} finally {}` |
| `trycf→` | `try {} catch () {} finally {}` |
| `switch→` | `switch () { case return}` |

**Functions**

| Trigger | Content |
| --- | --- |
| `func→` | `function name(args) {}` |
| `af→` | `() => {}` |
| `af→` | `() => {}` |
| `iife→` | `(() => {})()` |
| `afn→` | `const name = () => {}` |
| `gf→` | `function* name(args) {}` |
| `call→` | `.call(this, args)` |
| `apply→` | `.apply(this, args)` |
| `bind→` | `.bind(this, args)` |
| `forof→` | `for (const item of object) {}` |
| `fore→` | `.forEach(() => {})` |
| `map→` | `.map(() => {})` |
| `reduce→` | `.reduce(() => {})` |
| `filter→` | `.filter(() => {})` |
| `find→` | `.find(() => {})` |
| `some→` | `.some(() => {})` |
| `sort→` | `.sort((a, b) => { return a -b })` |
| `key→` | `key: value` |

**Classes**

| Trigger | Content |
| --- | --- |
| `class→` | `class name { constructor() {} }` |
| `constructor→` | `constructor() { super() }` |
| `extends→` | `class name extends base { constructor() { super() } }` |
| `staticstatement→` | `static name = ` |
| `staticsmethod→` | `static name() {}` |
| `prototype→` | `Class.prototype.method = function(args) {}` |
| `get→` | `get property() {}` |
| `get→` | `set property(value) {}` |
| `assign→` | `Object.assign(dest, source)` |

**Types**

| Trigger | Content |
| --- | --- |
| `typeof→` | `typeof source === 'undefined'` |
| `instanceof→` | `source instanceof Object` |

**Promise**

| Trigger | Content |
| --- | --- |
| `retp→` | `return new Promise((resolve, reject) => {}` |
| `pro→` | `new Promise((resolve, reject) => {}` |
| `then→` | `promise.then(() => {})` |
| `catch→` | `promise.catch(() => {})` |

**ES6 Module**

| Trigger | Content |
| --- | --- |
| `exp→` | `export member` |
| `expd→` | `export default member` |
| `expf→` | `export const name = () => {}` |
| `imp→` | `import * from 'module'` |

**Node.js**

| Trigger | Content |
| --- | --- |
| `me→` | `module.exports = name` |
| `meo→` | `module.exports = {}` |
| `req→` | `const module = require('module')` |
| `ctx→` | `(ctx, next) => {$1}` |

**Timer**

| Trigger | Content |
| --- | --- |
| `sett→` | `setTimeout(() => {}, dealy)` |
| `seti→` | `setInterval(() => {}, dealy)` |
| `nt→` | `process.nextTick(() => {}` |

**Miscellaneous**

| Trigger | Content |
| --- | --- |
| `us→` | `'use strict'` |

**Console**

| Trigger | Content |
| --- | --- |
| `log→` | `console.log('--> : ', )` |
| `err→` | `console.error('--> Error: ', )` |
