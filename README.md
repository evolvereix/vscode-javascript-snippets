# JavaScript Snippets

## VS Code JavaScript Snippets

This extension contains code snippets for JavaScript in ES6 syntax for VS Code editor.

**Note**

All the snippets not include the final semicolon `;`.

### Suggestions

Add `"editor.snippetSuggestions": "top"` to your user settings to see these snippets on top in the suggestion popover.

## Snippets

Below is a list of all available snippets and the triggers of each one. Remember to use tab key.

### Declarations

<details>
<summary>Table</summary>

| Trigger | Content                   |
| ------- | ------------------------- |
| `v`     | `var statement`           |
| `v=`    | `var statement = value`   |
| `l`     | `let statement`           |
| `l=`    | `let statement = value`   |
| `ld`    | `let {} = value`          |
| `c`     | `const statement`         |
| `c=`    | `const statement = value` |
| `cd`    | `const {} = value`        |
| `len`   | `length`                  |
| `br`    | `break`                   |
| `ct`    | `continue`                |
| `def`   | `default`                 |
| `deb`   | `debugger`                |
| `emp`   | `empty`                   |
| `ret`   | `return`                  |
| `thr`   | `throw`                   |
| `yie`   | `yield`                   |
| `next`  | `next()`                  |
| `as`    | `as`                      |
| `kv`    | `key: value`              |

</details>

### Loops

<details>
<summary>Table</summary>

| Trigger | Content                         |
| ------- | ------------------------------- |
| `for`   | `for (; i++) {}`                |
| `forr`  | `for (: i--) {}`                |
| `do`    | `do {} while ()`                |
| `while` | `while () {}`                   |
| `fori`  | `for (const item in object) {}` |
| `foro`  | `for (const i of object) {}`    |

</details>

### Flow Control

<details>
<summary>Table</summary>

| Trigger  | Content                         |
| -------- | ------------------------------- |
| `if`     | `if () statement`               |
| `el`     | `else {}`                       |
| `ife`    | `if () {} else {}`              |
| `eli`    | `else if () {}`                 |
| `ter`    | `? :`                           |
| `switch` | `switch () { case break }`      |
| `case`   | `case break`                    |
| `try`    | `try {} catch () {}`            |
| `tryc`   | `catch () {}`                   |
| `tryf`   | `finally {}`                    |
| `trycf`  | `try {} catch () {} finally {}` |

</details>

### Functions

<details>
<summary>Table</summary>

| Trigger | Content                   |
| ------- | ------------------------- |
| `func`  | `function name(args) {}`  |
| `af`    | `() => {}`                |
| `iife`  | `(() => {})()`            |
| `afn`   | `const name = () => {}`   |
| `funcg` | `function* name(args) {}` |
| `call`  | `call(this, args)`        |
| `apply` | `apply(this, args)`       |
| `bind`  | `bind(this, args)`        |

</details>

### Common Methods

<details>
<summary>Table</summary>

| Trigger | Content         |
| ------- | --------------- |
| `cc`    | `concat()`      |
| `inc`   | `includes()`    |
| `io`    | `indexOf()`     |
| `la`    | `lastIndexOf()` |
| `sl`    | `slice()`       |
| `tos`   | `toString()`    |

</details>

### Array

<details>
<summary>Table</summary>

| Trigger | Content                 |
| ------- | ----------------------- |
| `from`  | `Array.from()`          |
| `isa`   | `Array.isArray()`       |
| `of`    | `Array.of()`            |
| `cw`    | `copyWithin()`          |
| `ent`   | `entries()`             |
| `eve`   | `every()`               |
| `fi`    | `fill()`                |
| `filt`  | `filter(() => {})`      |
| `find`  | `find(() => {})`        |
| `findi` | `findIndex()`           |
| `flat`  | `flat()`                |
| `flatm` | `flatMap(() => {})`     |
| `fore`  | `forEach(() => {})`     |
| `jo`    | `join()`                |
| `keys`  | `keys()`                |
| `map`   | `map(() => {})`         |
| `po`    | `pop()`                 |
| `pu`    | `push()`                |
| `red`   | `reduce(() => {})`      |
| `redr`  | `reduceRight(() => {})` |
| `rev`   | `reverse()`             |
| `shi`   | `shift()`               |
| `som`   | `some(() => {})`        |
| `sor`   | `sort(() => {})`        |
| `sp`    | `splice()`              |
| `tls`   | `toLocaleString()`      |
| `un`    | `unshift()`             |
| `val`   | `values()`              |

</details>

### String

<details>
<summary>Table</summary>

| Trigger   | Content                  |
| --------- | ------------------------ |
| `fromch`  | `String.fromCharCode()`  |
| `fromco`  | `String.fromCodePoint()` |
| `raw`     | `String.raw()`           |
| `chara`   | `charAt()`               |
| `charc`   | `charCodeAt()`           |
| `codep`   | `codePointAt()`          |
| `endsw`   | `endsWith()`             |
| `localec` | `localeCompare()`        |
| `match`   | `match()`                |
| `matcha`  | `matchAll()`             |
| `norm`    | `normalize()`            |
| `pade`    | `padEnd()`               |
| `pads`    | `padStart()`             |
| `repe`    | `repeat()`               |
| `repl`    | `replace()`              |
| `sear`    | `search()`               |
| `split`   | `split()`                |
| `startsw` | `startsWith()`           |
| `subs`    | `substring()`            |
| `tll`     | `toLocaleLowerCase()`    |
| `tlu`     | `toLocaleUpperCase()`    |
| `tlc`     | `toLowerCase()`          |
| `tou`     | `toUpperCase()`          |
| `trim`    | `trim()`                 |
| `trime`   | `trimEnd()`              |
| `trims`   | `trimStart()`            |
| `valueof` | `valueOf()`              |

</details>

### Object

<details>
<summary>Table</summary>

| Trigger   | Content                              |
| --------- | ------------------------------------ |
| `ass`     | `Object.assign()`                    |
| `crea`    | `Object.create()`                    |
| `dp`      | `Object.defineProperties()`          |
| `dp`      | `Object.defineProperty()`            |
| `entri`   | `Object.entries()`                   |
| `free`    | `Object.freeze()`                    |
| `frome`   | `Object.fromEntries()`               |
| `gopd`    | `Object.getOwnPropertyDescriptor()`  |
| `gopd`    | `Object.getOwnPropertyDescriptors()` |
| `gopn`    | `Object.getOwnPropertyNames()`       |
| `gops`    | `Object.getOwnPropertySymbols()`     |
| `gpo`     | `Object.getPrototypeOf()`            |
| `is`      | `Object.is()`                        |
| `ise`     | `Object.isExtensible()`              |
| `isf`     | `Object.isFrozen()`                  |
| `iss`     | `Object.isSealed()`                  |
| `keys`    | `Object.keys()`                      |
| `pe`      | `Object.preventExtensions()`         |
| `seal`    | `Object.seal()`                      |
| `setp`    | `Object.setPrototypeOf()`            |
| `values`  | `Object.values()`                    |
| `haso`    | `hasOwnProperty()`                   |
| `isp`     | `isPrototypeOf()`                    |
| `pi`      | `propertyIsEnumerable()`             |
| `tls`     | `toLocaleString()`                   |
| `valueof` | `valueOf()`                          |

</details>

### Classes

<details>
<summary>Table</summary>

| Trigger | Content                                                 |
| ------- | ------------------------------------------------------- |
| `class` | `class name { constructor() {} }`                       |
| `cs`    | `constructor() { }`                                     |
| `ext`   | `class name extends base { constructor() { super() } }` |
| `ss`    | `static name = value`                                   |
| `sm`    | `static name() {}`                                      |
| `pt`    | `Class.prototype.method = function() {}`                |
| `get`   | `get property() {}`                                     |
| `set`   | `set property(value) {}`                                |

</details>

### Types

<details>
<summary>Table</summary>

| Trigger | Content                         |
| ------- | ------------------------------- |
| typ     | `typeof source === 'undefined'` |
| ins     | `instanceof Object`             |

</details>

### Promise

<details>
<summary>Table</summary>

| Trigger | Content                                       |
| ------- | --------------------------------------------- |
| `retp`  | `return new Promise((resolve, reject) => {})` |
| `pro`   | `new Promise((resolve, reject) => {})`        |
| `prot`  | `promise.then(() => {})`                      |
| `proc`  | `promise.catch(() => {})`                     |
| `prof`  | `promise.finally(() => {})`                   |
| `all`   | `Promise.all()`                               |
| `alls`  | `Promise.allSettled()`                        |
| `race`  | `Promise.race()`                              |
| `rej`   | `promise.reject()`                            |
| `res`   | `promise.resolve()`                           |
| `asy`   | `async`                                       |
| `aw`    | `await`                                       |

</details>

### ES6 Module

<details>
<summary>Table</summary>

| Trigger | Content                        |
| ------- | ------------------------------ |
| `exp`   | `export member`                |
| `expd`  | `export default member`        |
| `expf`  | `export const name = () => {}` |
| `imp`   | `import \* from 'module'`      |
| `impd`  | `import { \* } from 'module'`  |

</details>

### Node.js

<details>
<summary>Table</summary>

| Trigger | Content                 |
| ------- | ----------------------- |
| `me`    | `module.exports = name` |
| `meo`   | `module.exports = {}`   |
| `req`   | `require('module')`     |
| `ctx`   | `(ctx, next) => {}`     |

</details>

### Timer

<details>
<summary>Table</summary>

| Trigger | Content                        |
| ------- | ------------------------------ |
| `sett`  | `setTimeout(() => {}, delay)`  |
| `seti`  | `setInterval(() => {}, delay)` |
| `setim` | `setImmediate(() => {})`       |
| `nt`    | `process.nextTick(() => {})`   |

</details>

### Miscellaneous

<details>
<summary>Table</summary>

| Trigger | Content        |
| ------- | -------------- |
| `us`    | `'use strict'` |

</details>

### Console

<details>
<summary>Table</summary>

| Trigger | Content                       |
| ------- | ----------------------------- |
| `log`   | `console.log()`               |
| `err`   | `console.error('Error: ', e)` |
| `warn`  | `console.warn()`              |
| `dir`   | `console.dir()`               |

</details>
