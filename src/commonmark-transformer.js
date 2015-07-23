"use strict";

export class MarkdownTransformer {
    get mimetype() {
        return "text/markdown";
    }

    transform(data, doc) {
        var div = doc.createElement("div");

        // Hand off to commonmark.js

        return div;
    }
}
