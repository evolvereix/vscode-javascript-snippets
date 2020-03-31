# JavaScript Snippets

## VS Code JavaScript Snippets

This extension contains code snippets for JavaScript in ES6 syntax for VS Code editor.

**Note**

All the snippets not include the final semicolon `;`.

#### Suggestions

- Add `"editor.snippetSuggestions": "top"` to your user settings to see these snippets on top in the suggestion popover.
- Install `Control Snippets` VS Code extensions. Open Command Palette writer `Control Snippets` and disable **JavaScript Snippets** from extensions.

### Snippets

Below is a list of all available snippets and the triggers of each one. The `⇥` means the TAB key.

#### Declarations

| Trigger | Content |
| --- | --- |
| `v⇥` | `var statement` |
| `v=⇥` | `var statement = value` |
| `l⇥` | `let statement` |
| `l=⇥` | `let statement = value` |
| `ld⇥` | `let {} = value` |
| `c⇥` | `const statement` |
| `c=⇥` | `const statement = value` |
| `cd⇥` | `const {} = value` |
| `len⇥` | `length` |
| `br⇥` | `break` |
| `ct⇥` | `continue` |
| `def⇥` | `default` |
| `deb⇥` | `debugger` |
| `emp⇥` | `empty` |
| `ret⇥` | `return` |
| `thr⇥` | `throw` |
| `yie⇥` | `yield` |
| `next⇥` | `next()` |
| `as⇥` | `as` |

#### Loops

| Trigger | Content |
| --- | --- |
| `for⇥` | `for (; i++) {}` |
| `forr⇥` | `for (: i--) {}` |
| `do⇥` | `do {} while ()` |
| `while⇥` | `while () {}` |
| `forin⇥` | `for (const item in object) {}` |
| `forof⇥` | `for (const i of object) {}` |
| `fore⇥` | `.forEach(() => {})` |

#### Flow Control

| Trigger | Content |
| --- | --- |
| `if⇥` | `if () statement` |
| `el⇥` | `else {}` |
| `ife⇥` | `if () {} else {}` |
| `eli⇥` | `else if () {}` |
| `ter⇥` | ` ?  :  ` |
| `switch⇥` | `switch () { case break }` |
| `case⇥` | `case break` |
| `try⇥` | `try {} catch () {}` |
| `tryc⇥` | `catch () {}` |
| `tryf⇥` | `try {} finally {}` |
| `trycf⇥` | `try {} catch () {} finally {}` |

#### Functions

| Trigger | Content |
| --- | --- |
| `func⇥` | `function name(args) {}` |
| `af⇥` | `() => {}` |
| `iife⇥` | `(() => {})()` |
| `afn⇥` | `const name = () => {}` |
| `gf⇥` | `function* name(args) {}` |
| `call⇥` | `call(this, args)` |
| `apply⇥` | `apply(this, args)` |
| `bind⇥` | `bind(this, args)` |

#### Methods
| Trigger | Content |
| --- | --- |
| `key⇥` | `keys()` |
| `val⇥` | `values()` |
| `ent⇥` | `entries()` |
| `tos⇥` | `toString()` |
| `from⇥` | `from()` |
| `isa⇥` | `isArray()` |
| `cc⇥` | `concat()` |
| `cw⇥` | `copyWithin()` |
| `eve⇥` | `every()` |
| `fi⇥` | `fill()` |
| `filt⇥` | `filter()` |
| `find⇥` | `find()` |
| `findi⇥` | `findIndex()` |
| `inc⇥` | `includes()` |
| `ind⇥` | `indexOf()` |
| `jo⇥` | `join()` |
| `la⇥` | `lastIndexOf()` |
| `map⇥` | `map(() => {})` |
| `po⇥` | `pop()` |
| `pu⇥` | `push()` |
| `red⇥` | `reduce(() => {})` |
| `redr⇥` | `reduceRight(() => {})` |
| `rev⇥` | `reverse()` |
| `shi⇥` | `shift()` |
| `sl⇥` | `slice()` |
| `som⇥` | `some()` |
| `sor⇥` | `sort()` |
| `sp⇥` | `splice()` |
| `un⇥` | `unshift()` |
| `ass⇥` | `Object.assign()` |
| `cre⇥` | `Object.create()` |
| `defp⇥` | `Object.defineProperty()` |
| `free⇥` | `Object.freeze()` |
| `frome⇥` | `Object.fromEntries()` |
| `getd⇥` | `Object.getOwnPropertyDescriptor()` |
| `getds⇥` | `Object.getOwnPropertyDescriptors()` |
| `getn⇥` | `Object.getOwnPropertyNames()` |
| `gets⇥` | `Object.getOwnPropertySymbols()` |
| `geto⇥` | `Object.getPrototypeOf()` |
| `is⇥` | `Object.is()` |
| `ise⇥` | `Object.isExtensible()` |
| `isf⇥` | `Object.isFrozen()` |
| `iss⇥` | `Object.isSealed()` |
| `pe⇥` | `Object.preventExtensions()` |
| `has⇥` | `Object.hasOwnProperty()` |
| `isp⇥` | `Object.isPrototypeOf()` |
| `pen⇥` | `Object.propertyIsEnumerable()` |
| `se⇥` | `Object.seal()` |
| `setp⇥` | `Object.setPrototypeOf()` |
| `kv⇥` | `key: value` |

#### Classes

| Trigger | Content |
| --- | --- |
| `class⇥` | `class name { constructor() {} }` |
| `cs⇥` | `constructor() { }` |
| `ext⇥` | `class name extends base { constructor() { super() } }` |
| `ss⇥` | `static name = ` |
| `sm⇥` | `static name() {}` |
| `pt⇥` | `Class.prototype.method = function() {}` |
| `get⇥` | `get property() {}` |
| `get⇥` | `set property(value) {}` |

#### Types

| Trigger | Content |
| --- | --- |
| `typ` | `typeof source === 'undefined'` |
| `ins` | `source instanceof Object` |

#### Promise

| Trigger | Content |
| --- | --- |
| `retp⇥` | `return new Promise((resolve, reject) => {}` |
| `pro⇥` | `new Promise((resolve, reject) => {}` |
| `prot⇥` | `promise.then(() => {})` |
| `proc⇥` | `promise.catch(() => {})` |
| `prof⇥` | `promise.finally(() => {})` |
| `all⇥` | `Promise.all()` |
| `alls⇥` | `Promise.allSettled()` |
| `race⇥` | `Promise.race()` |
| `rej⇥` | `promise.reject()` |
| `res⇥` | `promise.resolve()` |

#### ES6 Module

| Trigger | Content |
| --- | --- |
| `exp⇥` | `export member` |
| `expd⇥` | `export default member` |
| `expf⇥` | `export const name = () => {}` |
| `imp⇥` | `import * from 'module'` |
| `impd⇥` | `import { * } from 'module'` |

#### Node.js

| Trigger | Content |
| --- | --- |
| `me⇥` | `module.exports = name` |
| `meo⇥` | `module.exports = {}` |
| `req⇥` | `const module = require('module')` |
| `ctx⇥` | `(ctx, next) => {}` |

#### Timer

| Trigger | Content |
| --- | --- |
| `sett⇥` | `setTimeout(() => {}, dealy)` |
| `seti⇥` | `setInterval(() => {}, dealy)` |
| `setim⇥` | `setImmediate(() => {})` |
| `nt⇥` | `process.nextTick(() => {}` |

#### Miscellaneous

| Trigger | Content |
| --- | --- |
| `us⇥` | `'use strict'` |

#### Console

| Trigger | Content |
| --- | --- |
| `log⇥` | `console.log()` |
| `err⇥` | `console.error('Error: ', )` |
| `warn⇥` | `console.warn()` |
| `dir⇥` | `console.dir()` |