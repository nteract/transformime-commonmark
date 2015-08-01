"use strict";

var commonmark = require("commonmark");

function markdownTransform(mimetype, data, document) {
    var div = document.createElement("div");

    let reader = new commonmark.Parser();
    let writer = new commonmark.HtmlRenderer({
        safe: true
    });

    var parsed = reader.parse(data);

    // TODO: Any other transformations on the parsed object
    // See https://github.com/jgm/commonmark.js#usage

    div.innerHTML = writer.render(parsed);

    return div;
}

markdownTransform.mimetype = 'text/markdown';

export default markdownTransform;
