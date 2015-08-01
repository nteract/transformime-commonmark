import {assert} from 'chai';

import {jsdom} from 'jsdom';

var markdownTransform = require('../src/commonmark.transformer');

describe('text transformer', function() {
    beforeEach(function() {
        this.document = jsdom();
    });

    it('should have the text/markdown mimetype', function() {
        assert.equal(markdownTransform.mimetype, "text/markdown");
    });
    describe('#transform', function() {
        it('should create a div with some happy markdown', function() {
            let text = `#Ratification of Markdown Association

We are present here because we believe in unification
across all markdowns, whether common, flavored like
GitHub, or used to help an undergrad do their homework
via StackOverflow. It is of *great importance* that we
unify for the [sake of the sciences](https://jupyter.org),
the arts, and be able to express in rich text our thoughts,
feelings, and desires.

## Speaking for some

We need markdown to work

* On the web
* On your hard drive
* Hanging upside down from a bridge
* In letters to your lovers`;
            text = text + "\n\n```bash\nnpm install transformime-commonmark\n```\n";

            let el = markdownTransform('text/markdown', text, this.document);

            assert.equal(el.innerHTML, '<p>#Ratification of Markdown Association</p>\n<p>We are present here because we believe in unification\nacross all markdowns, whether common, flavored like\nGitHub, or used to help an undergrad do their homework\nvia StackOverflow. It is of <em>great importance</em> that we\nunify for the <a href="https://jupyter.org">sake of the sciences</a>,\nthe arts, and be able to express in rich text our thoughts,\nfeelings, and desires.</p>\n<h2>Speaking for some</h2>\n<p>We need markdown to work</p>\n<ul>\n<li>On the web</li>\n<li>On your hard drive</li>\n<li>Hanging upside down from a bridge</li>\n<li>In letters to your lovers</li>\n</ul>\n<pre><code class="language-bash">npm install transformime-commonmark\n</code></pre>\n');

        });
    });
});
