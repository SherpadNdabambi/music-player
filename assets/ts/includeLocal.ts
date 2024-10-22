function includeLocalCSS(filename) {
    document.write(`<link href='css/vendor/${filename}' rel="stylesheet">`);
}

function includeLocalJS(name) {
    document.write(`<script type='text/javascript' src='js/vendor/${name}'><\/script>`);
}
