# `casekeys`

For working with Ruby servers, etc. 

```js
var casekeys = require("casekeys")

var object = {
  options: [
    { snake_case: "snake case" },
    { camelCase: "camel case" }
  ]
}

casekeys.camelCase(object)

// {
//   options: [
//     { snakeCase: "snake case" },
//     { camelCase: "camel case" }
//   ]
// }

casekeys.snakeCase(object)

// {
//   options: [
//     { snake_case: "snake case" },
//     { camel_case: "camel case" }
//   ]
// }
```

It uses three lodash functions, but packages independently, so should be safe to include in client builds. Install on with npm and git.

```
$ npm install --save casekeys
```

**MIT License**
