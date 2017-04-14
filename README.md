# generate-docs

function to generate markdown documentation from markdown comments.

any jsdoc-style comment (starts with `/**`) is treated as straight-up markdown.

example:

```javascript
// docs.js

const generateDocs = require('generate-docs')

generateDocs({
  paths: ['index.js'],
  output: 'README.md'
})
```

```javascript
// index.js

/**
 * # add
 * add(1, 2) // => 3
 */

const add = (a, b) => a + b
```

