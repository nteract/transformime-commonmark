"use strict";

var commonmark = require("commonmark");

export class MarkdownTransformer {
    constructor() {
        this.reader = new commonmark.Parser();
        this.writer = new commonmark.HtmlRenderer({
            safe: true
        });
    }

    get mimetype() {
        return "text/markdown";
    }

    transform(data, doc) {
        var div = doc.createElement("div");
        var parsed = this.reader.parse(data);

        // TODO: Any other transformations on the parsed object
        // See https://github.com/jgm/commonmark.js#usage

        div.innerHTML = this.writer.render(parsed);

        return div;
    }
}
