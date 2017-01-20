## Deprecated: This transformer is now part of [transformime](https://github.com/nteract/transformime)

[![Greenkeeper badge](https://badges.greenkeeper.io/nteract/transformime-commonmark.svg)](https://greenkeeper.io/)

Transformer using commonmark.js

```
npm install transformime-commonmark
```

Usage with transformime:

```
> markdownTransform = require('transformime-commonmark');

> el = mdt.transform("text/markdown", "```python\nimport this\n```\n", document);
> el.innerHTML
'<pre><code class="language-python">import this\n</code></pre>\n'
```
