# generate-docs

function to generate a documentation file from source files.

any jsdoc-style comment (starts with `/**`) is extracted and concatenated into the output file.

example:

```javascript
// docs.js

const generateDocs = require("generate-docs").default;

generateDocs({
  paths: ["readme.src.md", "*.js"],
  output: "README.md"
});
```

```markdown
<!-- readme.src.md -->

# My Cool Project

## API

<!-- TOC -->
```

```javascript
// index.js

/**
 * ## add
 * add(1, 2) // => 3
 */

const add = (a, b) => a + b;
```

```markdown
<!-- README.md -->

# My Cool Project

## API

<!-- toc -->

* [add](#add)

<!-- tocstop -->

## add

add(1, 2) // => 3
```
