# transformime-commonmark

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
