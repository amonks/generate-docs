# generate-docs

function to generate a documentation file from source files.

any jsdoc-style comment (starts with `/**`) is extracted and concatenated into the output file.

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
