"use strict";

var commonmark = require("commonmark");

export default function MarkdownTransformer(mimetype, data, document) {
    var div = document.createElement("div");
    var parsed = this.reader.parse(data);

    // TODO: Any other transformations on the parsed object
    // See https://github.com/jgm/commonmark.js#usage

    div.innerHTML = this.writer.render(parsed);

    return div;
}

MarkdownTransformer.mimetype = 'text/markdown';
