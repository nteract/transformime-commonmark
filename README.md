# transformime-commonmark

Transformer using commonmark.js

```
npm install transformime-commonmark
```

Usage with transformime:

```
> MarkdownTransformer = require('transformime-commonmark');
> mdt = new MarkdownTransformer();

> el = mdt.transform("```python\nimport this\n```\n", document);
> el.innerHTML
'<pre><code class="language-python">import this\n</code></pre>\n'
```
