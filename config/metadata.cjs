const {
    author,
    repository,
    version,
    description,
} = require("../package.json");

module.exports = {
    name: {
        "": "Stash Checker",
        en: "Stash Checker",
    },
    description: description,
    icon: "https://docs.stashapp.cc/favicon.ico",
    version: version,
    author: author,
    // source: repository.url,
    // 'license': 'MIT',
    match: [
        "*://adultanime.dbsearch.net/*",
        "*://ecchi.iwara.tv/*",
        "*://erommdtube.com/*",
        "*://oreno3d.com/*",
        "*://stashdb.org/*",
        "*://www.animecharactersdatabase.com/*",
        "*://www.iafd.com/*",
        "*://www.indexxx.com/*",
        "*://www.iwara.tv/*",
        "*://www.javlibrary.com/*",
        "*://www.minnano-av.com/*",
        "*://xslist.org/*",
    ],
    require: [],
    grant: [
        "GM.xmlHttpRequest",
        "GM.getValue",
        "GM.setValue",
        "GM.registerMenuCommand",
    ],
    "run-at": "document-end",
};
