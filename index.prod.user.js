// ==UserScript==
// @name          Stash Checker
// @name:en       Stash Checker
// @description   Add checkmarks to scenes/performers on porn websites that are present in your own Stash instance.
// @icon          https://docs.stashapp.cc/favicon.ico
// @version       0.6.6
// @author        timo95 <24251362+timo95@users.noreply.github.com>
// @source        https://github.com/timo95/stash-checker
// @license       WTFPL
// @match         *://adultanime.dbsearch.net/*
// @match         *://coomer.party/*
// @match         *://erommdtube.com/*
// @match         *://fansdb.cc/*
// @match         *://fansdb.xyz/*
// @match         *://gayeroticvideoindex.com/*
// @match         *://kemono.party/*
// @match         *://metadataapi.net/*
// @match         *://onlyfans.com/*
// @match         *://oreno3d.com/*
// @match         *://pmvstash.org/*
// @match         *://r18.dev/*
// @match         *://shemalestardb.com/*
// @match         *://stashdb.org/*
// @match         *://www.animecharactersdatabase.com/*
// @match         *://www.babepedia.com/*
// @match         *://www.data18.com/*
// @match         *://www.freeones.com/*
// @match         *://www.iafd.com/*
// @match         *://www.indexxx.com/*
// @match         *://www.iwara.tv/*
// @match         *://www.javlibrary.com/*
// @match         *://www.minnano-av.com/*
// @match         *://www.pornteengirl.com/*
// @match         *://www.thenude.com/*
// @match         *://xslist.org/*
// @grant         GM.xmlHttpRequest
// @grant         GM.getValue
// @grant         GM.setValue
// @grant         GM.deleteValue
// @grant         GM.listValues
// @grant         GM.registerMenuCommand
// @connect       localhost
// @connect       *
// @run-at        document-end
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.stashCheckerTooltip {
  z-index: 99999 !important;
  position: fixed !important;
  color: black !important;
  text-align: left !important;
  font-size: medium !important;
  line-height: normal !important;
  background-color: white !important;
  border: 0.1em solid black !important;
  border-radius: 0.5em !important;
  padding: 0.5em !important;
  margin-top: -0.5em !important;
}
.stashCheckerTooltip hr {
  margin-top: 0.5em !important;
  margin-bottom: 0.5em !important;
}
.stashCheckerTooltip hr + br {
  display: none !important;
}
.stashCheckerFile {
  color: black !important;
  text-align: left !important;
  font-size: medium !important;
  line-height: normal !important;
  background-color: lightgrey !important;
  margin: 0.5em !important;
  padding: 0.5em !important;
}
.stashCheckerFile + br {
  display: none !important;
}
.stashCheckerSymbol {
  font-size: inherit !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less
var main = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less");
;// CONCATENATED MODULE: ./src/style/main.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.Z, options);




       /* harmony default export */ const style_main = (main/* default */.Z && main/* default */.Z.locals ? main/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/tooltip.ts
let handle;
let tooltipWindow = document.createElement("div");
tooltipWindow.style.display = "none";
tooltipWindow.classList.add("stashCheckerTooltip");
tooltipWindow.addEventListener("mouseover", function () {
    window.clearTimeout(handle);
});
tooltipWindow.addEventListener("mouseout", function () {
    handle = window.setTimeout(function () {
        tooltipWindow.style.display = "none";
    }, 500);
});
document.body.append(tooltipWindow);
/**
 * recursive (dfs) first non empty text node child, undefined if none available
 */
function firstTextChild(node) {
    if (node.nodeType === Node.TEXT_NODE &&
        node.textContent.match(/^[\s<>]*$/) === null // exclude whitespace
    ) {
        return node;
    }
    else {
        return Array.from(node.childNodes)
            .filter(n => !["svg"].includes(n.nodeName.toLowerCase())) // element tag exceptions
            .filter(n => n.nodeType === Node.ELEMENT_NODE ? n.getAttribute("data-type") !== "stash-symbol" : true) // exclude checkmark
            .map(firstTextChild)
            .find(n => n); // first truthy
    }
}
/**
 * find existing span recursively, undefined if none available
 */
function getExistingSpan(element) {
    if (element.getAttribute("data-type") === "stash-symbol") {
        return element;
    }
    else {
        return Array.from(element.childNodes)
            .filter(n => n.nodeType === Node.ELEMENT_NODE)
            .map(n => n)
            .map(getExistingSpan)
            .find(n => n); // first truthy
    }
}
function getUrl(stashUrl, target, id) {
    let path;
    if (target == "gallery") {
        path = "galleries";
    }
    else {
        path = target + "s";
    }
    return `${stashUrl}/${path}/${id}`;
}
function secondsToReadable(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds / 60) % 60;
    let s = Math.floor(seconds) % 60;
    return [h, m, s]
        .map(v => v.toString().padStart(2, "0"))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
}
function bytesToReadable(bytes) {
    let labels = ["KB", "MB", "GB", "TB", "PB"];
    let label;
    for (label of labels) {
        bytes /= 1000;
        if (bytes < 1000) {
            break;
        }
    }
    return bytes.toFixed(2) + label;
}
function formatFileData(files) {
    let propertyStrings = [
        ["path", (v) => `Path: ${v}`],
        ["video_codec", (v) => `<br>Codec: ${v}`],
        ["width", (v) => ` (${v}`],
        ["height", (v) => `x${v})`],
        ["size", (v) => `&nbsp;&nbsp;&nbsp;&nbsp;Size: ${bytesToReadable(v)}`],
        ["bit_rate", (v) => `&nbsp;&nbsp;&nbsp;&nbsp;Bitrate: ${(v / 1000000).toFixed(2)}Mbit/s`],
        ["duration", (v) => `&nbsp;&nbsp;&nbsp;&nbsp;Duration: ${secondsToReadable(v)}`],
    ];
    return files.map((file) => "<div class='stashCheckerFile'>" + propertyStrings
        .filter(e => file[e[0]])
        .map(e => e[1](file[e[0]]))
        .join("") + "</div>").join("");
}
function formatEntryData(target, data, stashUrl) {
    let propertyStrings = [
        ["id", (v) => `<br><a target="_blank" href="${getUrl(stashUrl, target, v)}">${getUrl(stashUrl, target, v)}</a>`],
        ["title", (v) => `<br>Title: ${v}`],
        ["name", (v) => `<br>Name: ${v}`],
        ["favorite", (v) => "&emsp;&#10084;&#65039;"],
        ["disambiguation", (v) => ` <span style="color: grey">(${v})</span>`],
        ["alias_list", (v) => `<br>Aliases: ${v.join(", ")}`],
        ["studio", (v) => `<br>Studio: ${v.name}`],
        ["code", (v) => `<br>Code: ${v}`],
        ["date", (v) => `<br>Date: ${v}`],
        ["queries", (v) => `<br>Matched: ${v.join(", ")}`],
        ["files", (v) => `${formatFileData(v)}`],
    ];
    return data.map((entry) => "<hr>" + propertyStrings
        .filter((e) => entry[e[0]])
        .map((e) => e[1](entry[e[0]]))
        .join("")).join("");
}
function mouseoverListener() {
    window.clearTimeout(handle);
    let margin = 10;
    let symbolPos = this.getBoundingClientRect();
    tooltipWindow.innerHTML = this.getAttribute("data-info");
    tooltipWindow.style.display = "";
    // show tooltip above or below
    let north = tooltipWindow.clientHeight + margin < symbolPos.top;
    if (north) {
        tooltipWindow.style.top = `${(Math.max(margin, // upper border
        symbolPos.top - tooltipWindow.clientHeight // wanted position
        )).toFixed(0)}px`;
    }
    else {
        tooltipWindow.style.top = `${(Math.min(window.innerHeight - tooltipWindow.clientHeight - margin, // lower border
        symbolPos.top + symbolPos.height + margin // wanted position
        )).toFixed(0)}px`;
    }
    tooltipWindow.style.left = `${(Math.max(margin, Math.min(window.innerWidth - tooltipWindow.clientWidth - margin, // left/right borders
    symbolPos.left + symbolPos.width / 2 - tooltipWindow.clientWidth / 2 // wanted position
    ))).toFixed(0)}px`;
}
function mouseoutListener() {
    handle = window.setTimeout(function () {
        tooltipWindow.style.display = "none";
    }, 500);
}
/**
 * Similar to object.assign(), but also merges the children of the objects.
 *
 * @param target
 * @param source
 */
function mergeData(target, source) {
    let mapTarget = new Map(target.map(e => [e.id, e]));
    let mapSource = new Map(source.map(e => [e.id, e]));
    mapSource.forEach((value, key) => {
        if (mapTarget.has(key)) {
            // merge which queries were successful
            let set = new Set(value["queries"]);
            mapTarget.get(key)["queries"].forEach((query) => {
                set.add(query);
            });
            value["queries"] = [...set].sort();
        }
        mapTarget.set(key, value);
    });
    return Array.from(mapTarget.values());
}
/**
 * Prepends depending on the data the checkmark or cross to the selected element.
 * Also populates tooltip window.
 *
 * @param element
 * @param target
 * @param data
 * @param stashUrl
 * @param queryType
 * @param color
 */
function prefixSymbol(element, target, data, stashUrl, queryType, color) {
    let queries = [queryType];
    // Query for each found entry
    data.forEach((entry) => {
        entry["queries"] = queries;
    });
    // Look for existing check spans
    let span = getExistingSpan(element);
    if (span) {
        // Merge new result with existing results
        queries = [...new Set(JSON.parse(span.getAttribute("data-queries"))).add(queryType)].sort();
        data = mergeData(JSON.parse(span.getAttribute("data-data")), data);
        span.setAttribute("data-count", (parseInt(span.getAttribute("data-count")) + 1).toString());
    }
    else {
        // Create new span
        span = document.createElement("span");
        span.classList.add("stashCheckerSymbol");
        span.setAttribute("data-type", "stash-symbol");
        span.setAttribute("data-count", "1");
        span.addEventListener("mouseover", mouseoverListener);
        span.addEventListener("mouseout", mouseoutListener);
        // insert before first text because css selectors cannot select text nodes directly
        // it works with cases were non text elements (images) are inside the selected element
        let text = firstTextChild(element);
        if (text) {
            // If node contains text, insert span before the text
            text.parentNode.insertBefore(span, text);
        }
        else {
            return; // abort if no text in span
        }
    }
    // Store merged query results on span
    span.setAttribute("data-queries", JSON.stringify(queries));
    span.setAttribute("data-data", JSON.stringify(data));
    // Set symbol and tooltip content based on query results
    let count = data.length;
    let tooltip = "";
    let targetP = target.charAt(0).toUpperCase() + target.slice(1);
    if (count === 0) {
        span.textContent = "✗ ";
        span.style.color = "red";
        tooltip = `${targetP} not in Stash<br>`;
    }
    else if (count === 1) {
        span.textContent = "✓ ";
        span.style.color = color(data[0]);
    }
    else {
        span.textContent = "! ";
        span.style.color = "orange";
        tooltip = `${targetP} has duplicate matches<br>`;
    }
    tooltip += `Queries: ${queries.join(", ")}`;
    tooltip += formatEntryData(target, data, stashUrl);
    // Store tooltip content on span
    span.setAttribute("data-info", tooltip);
}

;// CONCATENATED MODULE: ./src/config.ts
const DEFAULT_STASH_URL = "http://localhost:9999";
const BLOCKED_SITE_KEY = `blocked_${window.location.host}`.replace(/[.\-]/, "_");
async function initMenu() {
    GM.registerMenuCommand("Set Stash Url", setStashUrl, "u");
    GM.registerMenuCommand("Set API key", setApiKey, "k");
    if (await isSiteBlocked()) {
        GM.registerMenuCommand(`Activate for ${window.location.host}`, unblockSite, "a");
    }
    else {
        GM.registerMenuCommand(`Deactivate for ${window.location.host}`, blockSite, "d");
    }
}
async function isSiteBlocked() {
    return await GM.getValue(BLOCKED_SITE_KEY, false);
}
async function blockSite() {
    await GM.setValue(BLOCKED_SITE_KEY, true);
    window.location.reload();
}
async function unblockSite() {
    await GM.deleteValue(BLOCKED_SITE_KEY);
    window.location.reload();
}
async function setStashUrl() {
    let stashUrl = await GM.getValue("stashUrl", undefined);
    stashUrl = prompt("Stash URL:", stashUrl ?? DEFAULT_STASH_URL)?.trim()?.replace("\/$", "");
    if (stashUrl !== undefined) {
        await GM.setValue("stashUrl", stashUrl);
    }
}
async function setApiKey() {
    let apiKey = await GM.getValue("apiKey", undefined);
    apiKey = prompt("API Key:", apiKey ?? "")?.trim()?.replace("\/$", "");
    if (apiKey !== undefined) {
        await GM.setValue("apiKey", apiKey);
    }
}
async function getConfig() {
    let stashUrl = await GM.getValue("stashUrl", undefined);
    let apiKey = await GM.getValue("apiKey", undefined);
    if (stashUrl === undefined) {
        stashUrl = prompt("Stash URL:", DEFAULT_STASH_URL)?.trim()?.replace("\/$", "");
        if (stashUrl !== undefined) {
            await GM.setValue("stashUrl", stashUrl);
        }
    }
    if (apiKey === undefined) {
        apiKey = prompt("API Key:")?.trim()?.replace("\/$", "");
        if (apiKey !== undefined) {
            await GM.setValue("apiKey", apiKey);
        }
    }
    return [stashUrl ?? "", apiKey ?? ""];
}

;// CONCATENATED MODULE: ./src/check.ts


// Ask for stash url/key on load
let configPromise = getConfig();
async function request(queryString, onload, target, type, { stashIdEndpoint }) {
    let criterion;
    let query;
    let access = (d) => d;
    // Build filter
    switch (type) {
        case "stash_id":
            criterion = `{stash_id_endpoint:{endpoint:"${stashIdEndpoint}",stash_id:"${queryString}",modifier:EQUALS}}`;
            break;
        default:
            criterion = `{${type}:{value:"${queryString}",modifier:EQUALS}}`;
            break;
    }
    // Build query
    switch (target) {
        case "scene":
            query = `{findScenes(scene_filter:${criterion}){scenes{id,title,code,studio{name},date,files{path,duration,video_codec,width,height,size,bit_rate}}}}`;
            access = (d) => d.findScenes.scenes;
            break;
        case "performer":
            query = `{findPerformers(performer_filter:${criterion}){performers{id,name,disambiguation,alias_list,favorite}}}`;
            access = (d) => d.findPerformers.performers;
            break;
        case "gallery":
            query = `{findGalleries(gallery_filter:${criterion}){galleries{id,title,date,files{path}}}}`;
            access = (d) => d.findGalleries.galleries;
            break;
        case "movie":
            query = `{findMovies(movie_filter:${criterion}){movies{id,name,date}}}`;
            access = (d) => d.findMovies.movies;
            break;
        case "studio":
            query = `{findStudios(studio_filter:${criterion}){studios{id,name}}}`;
            access = (d) => d.findStudios.studios;
            break;
        case "tag":
            query = `{findTags(tag_filter:${criterion}){tags{id,name}}}`;
            access = (d) => d.findTags.tags;
            break;
        default:
            return;
    }
    // Get config values or wait for popup if it is not stored
    let [stashUrl, apiKey] = await configPromise;
    GM.xmlHttpRequest({
        method: "GET",
        url: `${stashUrl}/graphql?query=${encodeURIComponent(query)}`, // encode query (important for url and some titles)
        headers: {
            "Content-Type": "application/json",
            ApiKey: apiKey,
        },
        onload: function (response) {
            try {
                let r = JSON.parse(response.responseText);
                if ("errors" in r) {
                    r.errors.forEach((e) => {
                        console.log(`Stash returned "${e.extensions.code}" error: ${e.message}`);
                    });
                }
                else {
                    onload(target, access(r.data), stashUrl);
                }
            }
            catch (e) {
                console.log("Exception: " + e);
                console.log("Failed to parse response: " + response.responseText);
            }
        },
    });
}
/**
 * For a given element query stash with each configured query.
 * Default selectors for most queries are defined here.
 *
 * @param target
 * @param element
 * @param currentSite
 * @param prepareUrl
 * @param urlSelector
 * @param codeSelector
 * @param stashIdSelector
 * @param stashIdEndpoint
 * @param nameSelector
 * @param titleSelector
 * @param color
 */
async function checkElement(target, element, { currentSite = false, prepareUrl = url => url, urlSelector = currentSite ?
    () => decodeURI(window.location.href) :
    (e) => decodeURI(e.closest("a").href), codeSelector, stashIdSelector, stashIdEndpoint = `https://${window.location.host}/graphql`, nameSelector = e => firstTextChild(e)?.textContent?.trim(), titleSelector = e => firstTextChild(e)?.textContent?.trim(), color = () => "green", }) {
    if (urlSelector && prepareUrl) {
        let url = prepareUrl(urlSelector(element));
        if (url) {
            console.debug(`URL: ${url}`);
            await request(url, (...args) => prefixSymbol(element, ...args, "URL", color), target, "url", { stashIdEndpoint });
        }
        else {
            console.log(`No URL for ${target} found.`);
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.debug(`Code: ${code}`);
            await request(code, (...args) => prefixSymbol(element, ...args, "Code", color), target, "code", { stashIdEndpoint });
        }
        else {
            console.log(`No Code for ${target} found.`);
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
            console.debug(`StashId: ${id}`);
            await request(id, (...args) => prefixSymbol(element, ...args, "StashId", color), target, "stash_id", { stashIdEndpoint });
        }
        else {
            console.log(`No StashId for ${target} found.`);
        }
    }
    if (["performer", "movie"].includes(target) && nameSelector) {
        let name = nameSelector(element);
        // Do not use single names
        let nameCount = name?.split(/\s+/)?.length;
        if (name && nameCount > 1) {
            console.debug(`Name: ${name}`);
            await request(name, (...args) => prefixSymbol(element, ...args, "Name", color), target, "name", { stashIdEndpoint });
        }
        else if (name && nameCount === 1) {
            console.log(`Ignore single name: ${name}`);
        }
        else {
            console.log(`No Name for ${target} found.`);
        }
    }
    if (["scene", "gallery"].includes(target) && titleSelector) {
        let title = titleSelector(element);
        if (title) {
            console.debug(`Title: ${title}`);
            await request(title, (...args) => prefixSymbol(element, ...args, "Title", color), target, "title", { stashIdEndpoint });
        }
        else {
            console.log(`No Title for ${target} found.`);
        }
    }
}
/**
 * Run callback when a new element added to the document matches the selector.
 *
 * @param selector css selector string
 * @param callback callback function
 */
function onAddition(selector, callback) {
    // Run on each element addition
    let observer = new MutationObserver((mutations) => {
        let addedElements = mutations
            .flatMap(m => Array.from(m.addedNodes))
            .filter(n => n.nodeType === Node.ELEMENT_NODE)
            .map(n => n);
        addedElements
            .filter(e => e.matches(selector))
            .concat(addedElements.flatMap(e => Array.from(e.querySelectorAll(selector))))
            .filter(e => !e.parentElement.matches(".stashCheckerTooltip"))
            .forEach(callback);
    });
    let body = document.querySelector("body");
    observer.observe(body, { childList: true, subtree: true });
}
/**
 * Queries for each selected element
 *
 * The selected element should be [a descendant of] the link that will be compared with stash urls.
 * The first text inside the selected element will be prepended with the symbol.
 */
function check(target, elementSelector, { observe = false, ...checkConfig } = {}) {
    // Run query on addition of new elements fitting the selector
    if (observe) {
        onAddition(elementSelector, (element) => checkElement(target, element, checkConfig));
    }
    document.querySelectorAll(elementSelector).forEach((e) => checkElement(target, e, checkConfig));
}

;// CONCATENATED MODULE: ./src/index.ts




(async function () {
    // Register menu items
    await initMenu();
    // Stop, if site block is configured
    if (await isSiteBlocked()) {
        console.log("Userscript is deactivated for this site. Activate in userscript menu.");
        return;
    }
    // Main area
    console.log("Running Stash Checker");
    switch (window.location.host) {
        case "www.iwara.tv": {
            let color = (d) => d.files.some((f) => f.path.endsWith("_Source.mp4")) ? "green" : "blue";
            // Video code in the URL
            let codeRegex = /(?<=video\/)([a-zA-Z0-9]+)(?=\/|$)/;
            // Cut URL after code off
            let prepareUrl = (url) => {
                let match = url.match(codeRegex);
                return url.substring(0, match.index + match.at(0).length);
            };
            check("scene", ".page-video__details > .text--h1", {
                observe: true,
                currentSite: true,
                color: color,
                prepareUrl,
                codeSelector: () => window.location.pathname.match(codeRegex).at(0)
            });
            check("scene", "a.videoTeaser__title", {
                observe: true,
                color: color,
                prepareUrl,
                codeSelector: (e) => e.getAttribute("href").match(codeRegex).at(0)
            });
            break;
        }
        case "oreno3d.com": {
            let color = (d) => d.files.some((f) => f.path.endsWith("_Source.mp4")) ? "green" : "blue";
            check("scene", "h1.video-h1", { color: color, currentSite: true, titleSelector: null });
            check("scene", "a h2.box-h2", { color: color, titleSelector: null });
            break;
        }
        case "erommdtube.com": {
            let color = (d) => d.files.some((f) => f.path.endsWith("_Source.mp4")) ? "green" : "blue";
            check("scene", "h1.show__h1", { color: color, currentSite: true, titleSelector: null });
            check("scene", "h2.main__list-title", { color: color, titleSelector: null });
            break;
        }
        case "kemono.party":
            check("scene", "h1.post__title", { currentSite: true, titleSelector: null });
            check("scene", ".post-card > a[href*='/post/']", { titleSelector: null });
            break;
        case "coomer.party":
            check("scene", "h1.post__title", { currentSite: true, titleSelector: null });
            check("scene", ".post-card h2 > a[href*='/post/']", { titleSelector: null });
            break;
        case "adultanime.dbsearch.net":
            if (document.querySelector("article > section[id='info-table']") !== null) {
                check("scene", "div[id='main-inner'] > article > h2", {
                    currentSite: true,
                    codeSelector: (_) => document.evaluate("//dt[text()='規格品番']/following-sibling::dd[1]/p/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim()
                });
            }
            check("scene", "div.item-info > h4 > a, div.item-info > h5 > a");
            break;
        case "xslist.org":
            check("performer", "span[itemprop='name']", { currentSite: true });
            check("performer", "a[href*='/model/']");
            check("scene", "table#movices td > strong", {
                urlSelector: null,
                codeSelector: e => e.textContent.trim(),
                titleSelector: null,
            });
            break;
        case "www.animecharactersdatabase.com":
            check("performer", "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
            break;
        case "www.iafd.com": {
            let prepareUrl = (url) => url.replaceAll("'", "%27").replace(/^http:/, "https:");
            if (window.location.pathname.startsWith("/person.rme/perfid=")) {
                check("performer", "h1", { prepareUrl: prepareUrl, currentSite: true });
            }
            else if (window.location.pathname.startsWith("/title.rme/title=")) {
                check("scene", "h1", { prepareUrl: prepareUrl, currentSite: true, titleSelector: null });
            }
            check("performer", "a[href*='/person.rme/perfid=']", { prepareUrl: prepareUrl });
            check("scene", "a[href*='/title.rme/title=']", { prepareUrl: prepareUrl, titleSelector: null });
            break;
        }
        case "metadataapi.net": {
            let stashIdSelector = (_) => document.evaluate("//div[text()='TPDB UUID']/following-sibling::div/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim();
            // Alternative endpoint url. Query both the default and this one.
            let stashIdEndpoint = "https://api.metadataapi.net/graphql";
            if (window.location.pathname.startsWith("/performers/")) {
                check("performer", "div.pl-4 > h2", { observe: true, currentSite: true, stashIdSelector });
                check("performer", "div.pl-4 > h2", { observe: true, currentSite: true, urlSelector: null, nameSelector: null, stashIdSelector, stashIdEndpoint });
            }
            else if (window.location.pathname.startsWith("/scenes/")) {
                check("scene", "div.flex.justify-between > h2", { observe: true, currentSite: true, stashIdSelector });
                check("scene", "div.flex.justify-between > h2", { observe: true, currentSite: true, titleSelector: null, stashIdSelector, stashIdEndpoint });
            }
            else if (window.location.pathname.startsWith("/movies/")) {
                check("movie", "div.flex.justify-between > h2", { observe: true, currentSite: true, stashIdSelector });
                check("movie", "div.flex.justify-between > h2", { observe: true, currentSite: true, nameSelector: null, stashIdSelector, stashIdEndpoint });
            }
            check("performer", "a[href^='https://metadataapi.net/performers/']", { observe: true });
            check("scene", "a[href^='https://metadataapi.net/scenes/'], a[href^='https://metadataapi.net/jav/']", { observe: true });
            check("movie", "a[href^='https://metadataapi.net/movies/']", { observe: true });
            break;
        }
        case "www.javlibrary.com":
            check("scene", "div[id='video_title']", {
                currentSite: true,
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
                titleSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
            });
            // generic video links
            check("scene", ".video a[href^='./?v=jav']", {
                prepareUrl: url => url.replace(/&.*$/, ""),
                codeSelector: e => e.querySelector("div.id")?.textContent?.trim(),
            });
            // best reviews
            check("scene", ".comment strong > a[href^='videoreviews.php?v=jav']", {
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0],
                titleSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0],
            });
            break;
        case "r18.dev":
            check("scene", "#video-info > #title", {
                observe: true,
                currentSite: true,
                codeSelector: _ => firstTextChild(document.querySelector("#dvd-id"))?.textContent?.trim(),
            });
            check("scene", ".video-label > a[href*='/movies/detail/']", {
                observe: true,
                codeSelector: e => firstTextChild(e)?.textContent?.trim(),
            });
            break;
        case "www.minnano-av.com":
            if (/actress\d{1,6}/.test(window.location.pathname)) {
                check("performer", "h1", {
                    prepareUrl: url => url.split("?")[0],
                    currentSite: true,
                });
            }
            check("performer", "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
                prepareUrl: url => url.split("?")[0],
            });
            break;
        case "www.indexxx.com":
            check("performer", "h1[id='model-name']", { currentSite: true });
            check("performer", "a.modelLink[href*='https://www.indexxx.com/m/'] > span");
            break;
        case "www.thenude.com":
            check("performer", "span.model-name", { currentSite: true });
            check("performer", "a.model-name, a.model-title, a[data-img*='/models/']", { observe: true });
            break;
        case "www.data18.com":
            check("scene", "a[href^='https://www.data18.com/scenes/']:not([href*='#'])", { observe: true, titleSelector: null });
            check("performer", "a[href^='https://www.data18.com/name/']:not([href*='/pairings']):not([href*='/studio']):not([href*='/virtual-reality']):not([href*='/scenes']):not([href*='/movies']):not([href*='/tags']):not([title$=' Home'])", { observe: true });
            break;
        case "www.babepedia.com":
            check("performer", "h1#babename", { currentSite: true });
            check("performer", "a[href*='/babe/']", { observe: true });
            break;
        case "www.freeones.com":
            check("performer", "a[href$='/feed'] [data-test='subject-name'], a[href$='/feed'] .profile-image + p", {
                prepareUrl: url => url.replace(/\/feed$/, "").replace(/\/[a-z]{2}\//, "/")
            });
            break;
        case "shemalestardb.com":
            check("performer", "h2[id='star-name']", { currentSite: true });
            check("performer", "figcaption > a[href*='/stars/']");
            break;
        case "onlyfans.com":
            check("performer", "div.b-username > div.g-user-name", { observe: true, currentSite: true });
            check("performer", "a.b-username > div.g-user-name", { observe: true });
            break;
        case "www.pornteengirl.com":
            check("performer", "a[href*='/model/']", {
                nameSelector: e => firstTextChild(e)?.textContent?.trim()?.replace(/\([^()]*\)$/, "")?.trimEnd()
            });
            break;
        case "gayeroticvideoindex.com":
            if (window.location.pathname.startsWith("/performer/")) {
                check("performer", "[id='data'] h1", { currentSite: true });
            }
            else if (window.location.pathname.startsWith("/episode/")) {
                check("scene", "[id='data'] h1", { currentSite: true });
            }
            else if (window.location.pathname.startsWith("/video/")) {
                check("movie", "[id='data'] h1", { currentSite: true });
            }
            check("performer", "a[href*='performer/']", { observe: true });
            check("scene", "a[href*='episode/']", { observe: true });
            check("movie", "a[href*='video/']", { observe: true });
            break;
        case "fansdb.cc":
        case "fansdb.xyz":
        case "pmvstash.org":
        case "stashdb.org":
            // These buttons are only visible with edit permissions.
            let exclude = ":not(a[href$='/edit']):not(a[href$='/merge']):not(a[href$='/delete'])";
            if (window.location.pathname.startsWith("/scenes/")) {
                check("scene", "div.scene-info.card h3 > span", {
                    observe: true,
                    currentSite: true,
                    urlSelector: null,
                    stashIdSelector: () => window.location.href.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
                    titleSelector: null,
                });
            }
            check("scene", `a[href^='/scenes/']${exclude}, a[href^='https://${window.location.host}/scenes/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.getAttribute("href")?.replace(/^.*\/scenes\//, "")?.split(/[?#]/)[0],
                titleSelector: null,
            });
            if (window.location.pathname.startsWith("/performers/")) {
                check("performer", "div.PerformerInfo div.card-header h3 > span", {
                    observe: true,
                    currentSite: true,
                    urlSelector: null,
                    stashIdSelector: () => window.location.href.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
                    nameSelector: null,
                });
            }
            check("performer", `a[href^='/performers/']${exclude}, a[href^='https://${window.location.host}/performers/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/performers\//, "")?.split(/[?#]/)[0],
                nameSelector: null,
            });
            if (window.location.pathname.startsWith("/studios/")) {
                check("studio", ".studio-title > h3 > span", {
                    observe: true,
                    currentSite: true,
                    urlSelector: null,
                    stashIdSelector: () => window.location.href.replace(/^.*\/studios\//, "").split(/[?#]/)[0],
                    nameSelector: null,
                });
            }
            check("studio", `a[href^='/studios/']${exclude}, a[href^='https://${window.location.host}/studios/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/studios\//, "")?.split(/[?#]/)[0],
                nameSelector: null,
            });
            if (window.location.pathname.startsWith("/tags/")) {
                check("tag", ".MainContent > .NarrowPage h3 > span", {
                    observe: true,
                    currentSite: true,
                    urlSelector: null,
                    stashIdSelector: () => window.location.href.replace(/^.*\/tags\//, "").split(/[?#]/)[0],
                    nameSelector: null,
                });
            }
            else if (window.location.pathname === "/tags") {
                check("tag", `a[href^='/tags/']${exclude}, a[href^='https://${window.location.host}/tags/']${exclude}`, {
                    observe: true,
                    urlSelector: null,
                    stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/tags\//, "")?.split(/[?#]/)[0],
                    nameSelector: null,
                });
            }
            break;
        default:
            console.log("No configuration for website found.");
            break;
    }
})();

})();

/******/ })()
;