/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/cross.svg */ "./src/styles/assets/cross.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/dot.svg */ "./src/styles/assets/dot.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --ship-color: #b3d3ea;
    --cross-icon: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/90% no-repeat;
    --dot-icon: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center/90% no-repeat;
    --font-fira: 'Fira Code', monospace;
}

body{
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: rgb(240, 250, 255);
    font-family: var(--font-fira)
}

button{
    font-family: var(--font-fira);
}

#header {
    display: flex;
    justify-content: space-between;
    height: 5%;
}

#logo{
    padding: 1em;
    margin-bottom: .5em ;
    font-size: 1.2em;
}


.container, 
.ship-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#boards{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 95%;
}

#board1, #board2{
    margin: 1em;
    border: 2px solid rgb(70, 69, 69);
    box-sizing: border-box;
    border-radius: 3px;
}

#ships{
    height: 271px;
    width: 314px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 1em;
}

.row{
    display: flex;
}

.cell-p1,
.cell-p2{
    width: 30px;
    height: 30px;
    border: .5px solid rgb(162, 199, 211);
}

.cell-p2:hover{
    background-color: rgba(211, 211, 211, 0.5);
    cursor: crosshair;
}

.ship{
    background-color: var(--ship-color);
    border:.5px solid rgb(36, 36, 168);
}

.ship-hit{
    background:var(--cross-icon) ;
    background-color: rgba(255, 0, 0, 0.5);
    border:.5px solid rgb(36, 36, 168);
}

.miss{
    background: var(--dot-icon);
}

.draggable-container{
    margin: .1em;
}

.drag-container-vertical{
    display: flex;
    flex-direction: column;
}

.drag-container-horizontal{
    display: flex;
}

.drag-ship{
    width: 30px;
    height: 30px;
    background-color: var(--ship-color);
    border:.5px solid rgb(67, 67, 150);
    cursor: move;
}

.cell-p1--over{
    background-color: var(--ship-color);
}

.blurry{
    filter: blur(3px);
    pointer-events: none; 
}

/* CSS */
.button {
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #39739d;
    cursor: pointer;
    display: inline-block;
    font-family: var(--font-fira);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.15385;
    margin-top: 10px;
    outline: none;
    padding: 8px .8em;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    white-space: nowrap;
  }
  
  .button:hover,
  .button:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }
  
  .button:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
  }
  
  .button:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AACA;IACI,qBAAqB;IACrB,0EAA0D;IAC1D,wEAAsD;IACtD,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,UAAU;IACV,oCAAoC;IACpC;AACJ;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;AACpB;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,WAAW;IACX,iCAAiC;IACjC,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,qCAAqC;AACzC;;AAEA;IACI,0CAA0C;IAC1C,iBAAiB;AACrB;;AAEA;IACI,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;IACtC,kCAAkC;AACtC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA,QAAQ;AACR;IACI,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;IACzB,mDAAmD;IACnD,sBAAsB;IACtB,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,yBAAyB;IACzB,0BAA0B;IAC1B,wBAAwB;IACxB,mBAAmB;EACrB;;EAEA;;IAEE,yBAAyB;IACzB,cAAc;EAChB;;EAEA;IACE,4CAA4C;EAC9C;;EAEA;IACE,yBAAyB;IACzB,gBAAgB;IAChB,cAAc;EAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap');\n:root{\n    --ship-color: #b3d3ea;\n    --cross-icon: url('assets/cross.svg') center/90% no-repeat;\n    --dot-icon: url('assets/dot.svg') center/90% no-repeat;\n    --font-fira: 'Fira Code', monospace;\n}\n\nbody{\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    background-color: rgb(240, 250, 255);\n    font-family: var(--font-fira)\n}\n\nbutton{\n    font-family: var(--font-fira);\n}\n\n#header {\n    display: flex;\n    justify-content: space-between;\n    height: 5%;\n}\n\n#logo{\n    padding: 1em;\n    margin-bottom: .5em ;\n    font-size: 1.2em;\n}\n\n\n.container, \n.ship-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#boards{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    height: 95%;\n}\n\n#board1, #board2{\n    margin: 1em;\n    border: 2px solid rgb(70, 69, 69);\n    box-sizing: border-box;\n    border-radius: 3px;\n}\n\n#ships{\n    height: 271px;\n    width: 314px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    margin: 1em;\n}\n\n.row{\n    display: flex;\n}\n\n.cell-p1,\n.cell-p2{\n    width: 30px;\n    height: 30px;\n    border: .5px solid rgb(162, 199, 211);\n}\n\n.cell-p2:hover{\n    background-color: rgba(211, 211, 211, 0.5);\n    cursor: crosshair;\n}\n\n.ship{\n    background-color: var(--ship-color);\n    border:.5px solid rgb(36, 36, 168);\n}\n\n.ship-hit{\n    background:var(--cross-icon) ;\n    background-color: rgba(255, 0, 0, 0.5);\n    border:.5px solid rgb(36, 36, 168);\n}\n\n.miss{\n    background: var(--dot-icon);\n}\n\n.draggable-container{\n    margin: .1em;\n}\n\n.drag-container-vertical{\n    display: flex;\n    flex-direction: column;\n}\n\n.drag-container-horizontal{\n    display: flex;\n}\n\n.drag-ship{\n    width: 30px;\n    height: 30px;\n    background-color: var(--ship-color);\n    border:.5px solid rgb(67, 67, 150);\n    cursor: move;\n}\n\n.cell-p1--over{\n    background-color: var(--ship-color);\n}\n\n.blurry{\n    filter: blur(3px);\n    pointer-events: none; \n}\n\n/* CSS */\n.button {\n    background-color: #e1ecf4;\n    border-radius: 3px;\n    border: 1px solid #7aa7c7;\n    box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;\n    box-sizing: border-box;\n    color: #39739d;\n    cursor: pointer;\n    display: inline-block;\n    font-family: var(--font-fira);\n    font-size: 13px;\n    font-weight: 400;\n    line-height: 1.15385;\n    margin-top: 10px;\n    outline: none;\n    padding: 8px .8em;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: baseline;\n    white-space: nowrap;\n  }\n  \n  .button:hover,\n  .button:focus {\n    background-color: #b3d3ea;\n    color: #2c5777;\n  }\n  \n  .button:focus {\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);\n  }\n  \n  .button:active {\n    background-color: #a0c7e4;\n    box-shadow: none;\n    color: #2c5777;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ }),

/***/ "./src/modules/botAI.js":
/*!******************************!*\
  !*** ./src/modules/botAI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BotAI)
/* harmony export */ });
// iterate through cells top/right/left/bottom for first valid
// if none are valid move on to random spot
// when constructing a new player, BotAi is attached to have access to board state
// for dependant class, pass in the gameboard array
class BotAI {
  constructor() {
    this.lastSuccessfulHit = undefined;
  }

  aiMove(gameboard) {
    const x = this.lastSuccessfulHit[0];
    const y = this.lastSuccessfulHit[1];
    if (x + 1 < 10 && gameboard[x + 1][y].hit === false) {
      this.clearSuccessfulHit();
      return [x + 1, y];
    }

    if (y + 1 < 10 && gameboard[x][y + 1].hit === false) {
      this.clearSuccessfulHit();
      return [x, y + 1];
    }

    if (x - 1 >= 0 && gameboard[x - 1][y].hit === false) {
      this.clearSuccessfulHit();
      return [x - 1, y];
    }

    if (x - 1 >= 0 && gameboard[x][y - 1].hit === false) {
      this.clearSuccessfulHit();
      return [x, y - 1];
    }

    this.clearSuccessfulHit();
    return false;
  }

  setSuccessfulHit(coords) {
    this.lastSuccessfulHit = coords;
  }

  clearSuccessfulHit() {
    this.lastSuccessfulHit = undefined;
  }
}


/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardRender: () => (/* binding */ boardRender),
/* harmony export */   resetBoard: () => (/* binding */ resetBoard),
/* harmony export */   toggleBlur: () => (/* binding */ toggleBlur)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");


(0,_game__WEBPACK_IMPORTED_MODULE_0__.initGame)();

const randomPlacementButton = document.getElementById("randomPlacement");
const restartButton = document.getElementById("restart");
function playerRender(player1) {
  document.querySelectorAll(".cell-p1").forEach((e, j) => {
    let x;
    let y;
    const pos = `${j}`;
    if (j < 10) {
      x = 0;
      y = j;
    } else {
      [x, y] = pos.split("");
    }
    if (
      !player1.gameboard.board[x][y].shipName &&
      player1.gameboard.board[x][y].hit
    ) {
      e.classList.add("miss");
    }
    if (
      player1.gameboard.board[x][y].shipName &&
      player1.gameboard.board[x][y].hit
    ) {
      e.classList.add("ship-hit");
    } else if (player1.gameboard.board[x][y].shipName) {
      e.classList.add("ship");
    }
  });
}

function enemyRender(player2) {
  document.querySelectorAll(".cell-p2").forEach((e, j) => {
    let x;
    let y;
    const pos = `${j}`;
    if (j < 10) {
      x = 0;
      y = j;
    } else {
      [x, y] = pos.split("");
    }
    if (
      player2.gameboard.board[x][y].shipName &&
      player2.gameboard.board[x][y].hit
    ) {
      e.classList.add("ship-hit");
    } else if (
      !player2.gameboard.board[x][y].shipName &&
      player2.gameboard.board[x][y].hit
    ) {
      e.classList.add("miss");
    }
  });
}

function resetBoard() {
  const board1 = document.getElementById("board1");
  const board2 = document.getElementById("board2");
  board1.innerHTML = "";
  board2.innerHTML = "";
}

restartButton.addEventListener("click", () => {
  const modal = document.querySelector("[data-modal");
  modal.close();
  resetBoard();
  (0,_game__WEBPACK_IMPORTED_MODULE_0__.initGame)();
  // eslint-disable-next-line no-use-before-define
  boardRender();
  const restartEvent = new CustomEvent("restarted");
  document.dispatchEvent(restartEvent);
  const shipDiv = document.querySelector(".ship-container");
  shipDiv.style.display = "flex";
});

function renderWinner(player) {
  const modal = document.querySelector("[data-modal");
  const winner = document.getElementById("winner");
  winner.innerHTML = `${player.name} Won!`;
  modal.showModal();
}

function checkWin(opponent, player) {
  if (opponent.gameboard.placedShips.every((ship) => ship.isSunk())) {
    renderWinner(player);
  }
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, ms);
  });
}

async function renderComputerAttack(player1, player2) {
  await delay(500);
  let switchTurn = 1;
  while (switchTurn === 1) {
    switchTurn = player2.pcAttack(player1);
    playerRender(player1);
    checkWin(player1, player2);
  }
  player2.endTurn(player1);
}

function renderPlayerAttack(player1, player2, x, y) {
  const switchTurn = player1.attack(player2, [x, y]);
  enemyRender(player2);
  checkWin(player2, player1);
  if (switchTurn === 0) {
    player1.endTurn(player2);
    renderComputerAttack(player1, player2);
  }
}

function toggleBlur() {
  const enemyBoard = document.getElementById("board2");
  const shipDiv = document.querySelector(".ship-container");
  const ships = document.getElementById("ships");
  if (ships.innerHTML === "") {
    shipDiv.style.display = "none";
    enemyBoard.classList.remove("blurry");
  } else {
    enemyBoard.classList.add("blurry");
  }
}

function boardRender() {
  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("board1").appendChild(row);

    _game__WEBPACK_IMPORTED_MODULE_0__.p1.gameboard.board[i].forEach((e, j) => {
      const cell = document.createElement("div");
      cell.classList.add("cell-p1");
      cell.setAttribute("id", `p1-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }

  playerRender(_game__WEBPACK_IMPORTED_MODULE_0__.p1);

  const enemyBoard = document.getElementById("board2");
  enemyBoard.classList.add("blurry");
  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", `p2-row${i}`);
    enemyBoard.appendChild(row);

    _game__WEBPACK_IMPORTED_MODULE_0__.p2.gameboard.board[i].forEach((e, j) => {
      const cell = document.createElement("div");
      cell.classList.add("cell-p2");
      cell.setAttribute("id", `p2-row${i}-cell${j}`);
      row.appendChild(cell);
      cell.clicked = false;

      cell.addEventListener("click", () => {
        if (!_game__WEBPACK_IMPORTED_MODULE_0__.p1.turn) return;
        if (!cell.clicked) {
          renderPlayerAttack(_game__WEBPACK_IMPORTED_MODULE_0__.p1, _game__WEBPACK_IMPORTED_MODULE_0__.p2, i, j);
          cell.clicked = true;
        }
      });
    });
  }
}

randomPlacementButton.addEventListener("click", () => {
  _game__WEBPACK_IMPORTED_MODULE_0__.p1.pcGenerateFleet();
  playerRender(_game__WEBPACK_IMPORTED_MODULE_0__.p1);
  const shipDiv = document.querySelector(".ship-container");
  const ships = document.getElementById("ships");
  ships.innerHTML = "";
  shipDiv.style.display = "none";
  toggleBlur();
});




/***/ }),

/***/ "./src/modules/draganddrop.js":
/*!************************************!*\
  !*** ./src/modules/draganddrop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPlayerShips)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");



let clickedOffset;

const ships = [
  { shipName: "carrier", length: 5 },
  { shipName: "cargo", length: 4 },
  { shipName: "cruiser", length: 3 },
  { shipName: "patrol", length: 3 },
  { shipName: "tugboat", length: 2 },
];

function cellClickHandler(e) {
  clickedOffset = e.target.dataset.offset;
}

function handleDragStart(e) {
  this.style.opacity = "0.4";

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", this.id);
}

function handleDragEnd() {
  this.style.opacity = "1";
}

function handleDrop(e) {
  e.preventDefault();

  const shipId = e.dataTransfer.getData("text/plain");

  const shipInfo = shipId.split("-");
  const shipName = shipInfo[0];
  const shipLength = Number(shipInfo[1]);

  const container = document.getElementById(shipId);
  const coords = e.target.id.match(/row(\d+)-cell(\d+)/).slice(1);
  let direction = false;
  if (container.classList.contains("drag-container-vertical")) {
    direction = true;
    coords[0] = Number(coords[0]) - clickedOffset;
  } else {
    coords[1] = Number(coords[1]) - clickedOffset;
  }
  const success = _game__WEBPACK_IMPORTED_MODULE_0__.p1.gameboard.placeShip(
    shipName,
    shipLength,
    coords,
    direction
  );
  if (success) {
    e.dataTransfer.dropEffect = "move";
    document.getElementById(shipId).remove();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.resetBoard)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.boardRender)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleBlur)();
    // eslint-disable-next-line no-use-before-define
    prepareTargetBoard();
    return true;
  }

  return false;
}

function prepareTargetBoard() {
  const cells = document.querySelectorAll(".cell-p1");
  cells.forEach((cell) => {
    cell.addEventListener("dragenter", (e) => {
      e.preventDefault();
      cell.classList.add("cell-p1--over");
    });

    cell.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    cell.addEventListener("dragleave", (e) => {
      e.preventDefault();
      cell.classList.remove("cell-p1--over");
    });

    cell.addEventListener("drop", (e) => {
      cell.classList.remove("cell-p1--over");
      handleDrop(e);
    });
  });
}

function flipShip(shipId) {
  const draggableContainer = document.getElementById(shipId);
  if (draggableContainer.classList.contains("drag-container-vertical")) {
    draggableContainer.classList.add("drag-container-horizontal");
    draggableContainer.classList.remove("drag-container-vertical");
  } else {
    draggableContainer.classList.remove("drag-container-horizontal");
    draggableContainer.classList.add("drag-container-vertical");
  }
}

function renderShip(shipName, length) {
  const shipDom = document.getElementById("ships");
  const newShip = document.createElement("div");
  newShip.classList.add("draggable-container");
  newShip.classList.add("drag-container-vertical");
  newShip.draggable = true;
  for (let i = 0; i < length; i += 1) {
    const cell = document.createElement("div");
    cell.classList.add("drag-ship");
    cell.dataset.offset = i;
    cell.addEventListener("mousedown", cellClickHandler);
    newShip.appendChild(cell);
  }
  newShip.id = `${shipName}-${length}`;
  newShip.addEventListener("dragstart", handleDragStart);
  newShip.addEventListener("dragend", handleDragEnd);
  newShip.addEventListener("click", () => {
    flipShip(newShip.id);
  });
  shipDom.appendChild(newShip);
  prepareTargetBoard();
}

function initPlayerShips() {
  ships.forEach((ship) => {
    renderShip(ship.shipName, ship.length);
  });
}

document.addEventListener("restarted", () => {
  initPlayerShips();
});


/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGame: () => (/* binding */ initGame),
/* harmony export */   p1: () => (/* binding */ p1),
/* harmony export */   p2: () => (/* binding */ p2)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* eslint-disable import/no-mutable-exports */


let p1;
let p2;

function initGame() {
  p1 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("You");
  p2 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("Enemy");
  p2.pcGenerateFleet();
  p1.takeTurn();
}




/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");


class Gameboard {
  board = new Array(10)
    .fill()
    .map(() => new Array(10).fill({ shipName: null, hit: false }));

  placedShips = [];

  receiveAttack(coords) {
    const x = coords[0];
    const y = coords[1];

    if (this.board[x][y].shipName !== null && this.board[x][y].hit === false) {
      this.board[x][y] = { ...this.board[x][y], hit: true };
      this.placedShips
        .find((ship) => ship.shipName === this.board[x][y].shipName)
        .hit();
      return 1; //  1 for hit
    }

    if (this.board[x][y].shipName === null && this.board[x][y].hit === false) {
      this.board[x][y] = { ...this.board[x][y], hit: true };
      return 0; //  0 for miss
    }
    return -1;
  }

  placeShip(shipName, length, coords, horizontal) {
    const x = Number(coords[0]);
    const y = Number(coords[1]);
    if (this.isValidPlacement(length, x, y, horizontal)) {
      const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length, shipName);
      this.placedShips.push(ship);
      if (horizontal) {
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x + i][y] = {
            ...this.board[x + i][y],
            shipName: ship.shipName,
          };
        }
      } else {
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x][y + i] = {
            ...this.board[x][y + i],
            shipName: ship.shipName,
          };
        }
      }

      return true;
    }
    return false;
  }

  isValidPlacement(length, x, y, horizontal) {
    if (horizontal) {
      if (x + length > 10) return false;
      for (let i = 0; i < length; i += 1) {
        if (this.board[x + i][y].shipName !== null) {
          return false;
        }
      }
    } else {
      if (y + length > 10) return false;
      for (let i = 0; i < length; i += 1) {
        if (this.board[x][y + i].shipName !== null) {
          return false;
        }
      }
    }

    return true;
  }

  allShipsSunk() {
    return this.placedShips.every((ship) => ship.length === ship.hits);
  }
}


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _botAI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./botAI */ "./src/modules/botAI.js");



class Player {
  constructor(name) {
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.ai = new _botAI__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.turn = false;
    this.name = name;
  }

  takeTurn() {
    this.turn = true;
  }

  endTurn(player) {
    this.turn = false;
    player.takeTurn();
  }

  // eslint-disable-next-line class-methods-use-this
  attack(player, coords) {
    let success = -1;
    while (success < 0) {
      success = player.gameboard.receiveAttack(coords);
    }
    return success;
  }

  pcAttack(player) {
    let success = -1;
    let coords;
    while (success < 0) {
      if (typeof this.ai.lastSuccessfulHit === "undefined") {
        coords = this.randomPos();
        success = player.gameboard.receiveAttack(coords);
      } else {
        coords = this.ai.aiMove(this.gameboard.board);
        if (coords === false) {
          coords = this.randomPos();
        }
        success = player.gameboard.receiveAttack(coords);
      }

      if (success > 0) {
        this.ai.setSuccessfulHit(coords);
      }
    }
    return success;
  }

  pcGenerateFleet() {
    this.generateShip("carrier", 5);
    this.generateShip("cargo", 4);
    this.generateShip("cruiser", 3);
    this.generateShip("patrol", 3);
    this.generateShip("tugboat", 2);
  }

  generateShip(shipName, length) {
    let success = false;
    while (!success) {
      const direction = Math.random() < 0.5;
      const coords = this.randomPos();
      success = this.gameboard.placeShip(shipName, length, coords, direction);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  randomPos() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }
}


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, shipName) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.shipName = shipName;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}


/***/ }),

/***/ "./src/styles/assets/cross.svg":
/*!*************************************!*\
  !*** ./src/styles/assets/cross.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27671b97e638e69cf676.svg";

/***/ }),

/***/ "./src/styles/assets/dot.svg":
/*!***********************************!*\
  !*** ./src/styles/assets/dot.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bae9a24a2d57df0ed7a.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
/* harmony import */ var _modules_draganddrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/draganddrop */ "./src/modules/draganddrop.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");




(0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.boardRender)();
(0,_modules_draganddrop__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNRO0FBQ3ZCOztBQUU3Qix5REFBVztBQUNYLGdFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2JvdEFJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RyYWdhbmRkcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9jcm9zcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJhc3NldHMvZG90LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLXNoaXAtY29sb3I6ICNiM2QzZWE7XG4gICAgLS1jcm9zcy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyLzkwJSBuby1yZXBlYXQ7XG4gICAgLS1kb3QtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGNlbnRlci85MCUgbm8tcmVwZWF0O1xuICAgIC0tZm9udC1maXJhOiAnRmlyYSBDb2RlJywgbW9ub3NwYWNlO1xufVxuXG5ib2R5e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjUwLCAyNTUpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZpcmEpXG59XG5cbmJ1dHRvbntcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1maXJhKTtcbn1cblxuI2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiA1JTtcbn1cblxuI2xvZ297XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW0gO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cblxuLmNvbnRhaW5lciwgXG4uc2hpcC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNib2FyZHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDk1JTtcbn1cblxuI2JvYXJkMSwgI2JvYXJkMntcbiAgICBtYXJnaW46IDFlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNzAsIDY5LCA2OSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbiNzaGlwc3tcbiAgICBoZWlnaHQ6IDI3MXB4O1xuICAgIHdpZHRoOiAzMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2VsbC1wMSxcbi5jZWxsLXAye1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IC41cHggc29saWQgcmdiKDE2MiwgMTk5LCAyMTEpO1xufVxuXG4uY2VsbC1wMjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5zaGlwe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xuICAgIGJvcmRlcjouNXB4IHNvbGlkIHJnYigzNiwgMzYsIDE2OCk7XG59XG5cbi5zaGlwLWhpdHtcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWNyb3NzLWljb24pIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbiAgICBib3JkZXI6LjVweCBzb2xpZCByZ2IoMzYsIDM2LCAxNjgpO1xufVxuXG4ubWlzc3tcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kb3QtaWNvbik7XG59XG5cbi5kcmFnZ2FibGUtY29udGFpbmVye1xuICAgIG1hcmdpbjogLjFlbTtcbn1cblxuLmRyYWctY29udGFpbmVyLXZlcnRpY2Fse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRyYWctY29udGFpbmVyLWhvcml6b250YWx7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRyYWctc2hpcHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgYm9yZGVyOi41cHggc29saWQgcmdiKDY3LCA2NywgMTUwKTtcbiAgICBjdXJzb3I6IG1vdmU7XG59XG5cbi5jZWxsLXAxLS1vdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xufVxuXG4uYmx1cnJ5e1xuICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbn1cblxuLyogQ1NTICovXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlY2Y0O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2FhN2M3O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpIDAgMXB4IDAgMCBpbnNldDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjMzk3MzlkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmlyYSk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTUzODU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDhweCAuOGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXIsXG4gIC5idXR0b246Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2QzZWE7XG4gICAgY29sb3I6ICMyYzU3Nzc7XG4gIH1cbiAgXG4gIC5idXR0b246Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDAsIDE0OSwgMjU1LCAuMTUpO1xuICB9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYzdlNDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiAjMmM1Nzc3O1xuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSxxQkFBcUI7SUFDckIsMEVBQTBEO0lBQzFELHdFQUFzRDtJQUN0RCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7OztBQUdBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUEsUUFBUTtBQUNSO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbURBQW1EO0lBQ25ELHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuOnJvb3R7XFxuICAgIC0tc2hpcC1jb2xvcjogI2IzZDNlYTtcXG4gICAgLS1jcm9zcy1pY29uOiB1cmwoJ2Fzc2V0cy9jcm9zcy5zdmcnKSBjZW50ZXIvOTAlIG5vLXJlcGVhdDtcXG4gICAgLS1kb3QtaWNvbjogdXJsKCdhc3NldHMvZG90LnN2ZycpIGNlbnRlci85MCUgbm8tcmVwZWF0O1xcbiAgICAtLWZvbnQtZmlyYTogJ0ZpcmEgQ29kZScsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTAsIDI1NSk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZpcmEpXFxufVxcblxcbmJ1dHRvbntcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmlyYSk7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogNSU7XFxufVxcblxcbiNsb2dve1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC41ZW0gO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyLCBcXG4uc2hpcC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNib2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogOTUlO1xcbn1cXG5cXG4jYm9hcmQxLCAjYm9hcmQye1xcbiAgICBtYXJnaW46IDFlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDcwLCA2OSwgNjkpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbiNzaGlwc3tcXG4gICAgaGVpZ2h0OiAyNzFweDtcXG4gICAgd2lkdGg6IDMxNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLnJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNlbGwtcDEsXFxuLmNlbGwtcDJ7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMTYyLCAxOTksIDIxMSk7XFxufVxcblxcbi5jZWxsLXAyOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxuICAgIGJvcmRlcjouNXB4IHNvbGlkIHJnYigzNiwgMzYsIDE2OCk7XFxufVxcblxcbi5zaGlwLWhpdHtcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1jcm9zcy1pY29uKSA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbiAgICBib3JkZXI6LjVweCBzb2xpZCByZ2IoMzYsIDM2LCAxNjgpO1xcbn1cXG5cXG4ubWlzc3tcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZG90LWljb24pO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luOiAuMWVtO1xcbn1cXG5cXG4uZHJhZy1jb250YWluZXItdmVydGljYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kcmFnLWNvbnRhaW5lci1ob3Jpem9udGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJhZy1zaGlwe1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG4gICAgYm9yZGVyOi41cHggc29saWQgcmdiKDY3LCA2NywgMTUwKTtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uY2VsbC1wMS0tb3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5ibHVycnl7XFxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXFxufVxcblxcbi8qIENTUyAqL1xcbi5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlY2Y0O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YWE3Yzc7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpIDAgMXB4IDAgMCBpbnNldDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgY29sb3I6ICMzOTczOWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1maXJhKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTM4NTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4IC44ZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uOmhvdmVyLFxcbiAgLmJ1dHRvbjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2QzZWE7XFxuICAgIGNvbG9yOiAjMmM1Nzc3O1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMCwgMTQ5LCAyNTUsIC4xNSk7XFxuICB9XFxuICBcXG4gIC5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYzdlNDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgY29sb3I6ICMyYzU3Nzc7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGl0ZXJhdGUgdGhyb3VnaCBjZWxscyB0b3AvcmlnaHQvbGVmdC9ib3R0b20gZm9yIGZpcnN0IHZhbGlkXG4vLyBpZiBub25lIGFyZSB2YWxpZCBtb3ZlIG9uIHRvIHJhbmRvbSBzcG90XG4vLyB3aGVuIGNvbnN0cnVjdGluZyBhIG5ldyBwbGF5ZXIsIEJvdEFpIGlzIGF0dGFjaGVkIHRvIGhhdmUgYWNjZXNzIHRvIGJvYXJkIHN0YXRlXG4vLyBmb3IgZGVwZW5kYW50IGNsYXNzLCBwYXNzIGluIHRoZSBnYW1lYm9hcmQgYXJyYXlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdEFJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sYXN0U3VjY2Vzc2Z1bEhpdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFpTW92ZShnYW1lYm9hcmQpIHtcbiAgICBjb25zdCB4ID0gdGhpcy5sYXN0U3VjY2Vzc2Z1bEhpdFswXTtcbiAgICBjb25zdCB5ID0gdGhpcy5sYXN0U3VjY2Vzc2Z1bEhpdFsxXTtcbiAgICBpZiAoeCArIDEgPCAxMCAmJiBnYW1lYm9hcmRbeCArIDFdW3ldLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY2xlYXJTdWNjZXNzZnVsSGl0KCk7XG4gICAgICByZXR1cm4gW3ggKyAxLCB5XTtcbiAgICB9XG5cbiAgICBpZiAoeSArIDEgPCAxMCAmJiBnYW1lYm9hcmRbeF1beSArIDFdLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY2xlYXJTdWNjZXNzZnVsSGl0KCk7XG4gICAgICByZXR1cm4gW3gsIHkgKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoeCAtIDEgPj0gMCAmJiBnYW1lYm9hcmRbeCAtIDFdW3ldLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY2xlYXJTdWNjZXNzZnVsSGl0KCk7XG4gICAgICByZXR1cm4gW3ggLSAxLCB5XTtcbiAgICB9XG5cbiAgICBpZiAoeCAtIDEgPj0gMCAmJiBnYW1lYm9hcmRbeF1beSAtIDFdLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY2xlYXJTdWNjZXNzZnVsSGl0KCk7XG4gICAgICByZXR1cm4gW3gsIHkgLSAxXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyU3VjY2Vzc2Z1bEhpdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNldFN1Y2Nlc3NmdWxIaXQoY29vcmRzKSB7XG4gICAgdGhpcy5sYXN0U3VjY2Vzc2Z1bEhpdCA9IGNvb3JkcztcbiAgfVxuXG4gIGNsZWFyU3VjY2Vzc2Z1bEhpdCgpIHtcbiAgICB0aGlzLmxhc3RTdWNjZXNzZnVsSGl0ID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbml0R2FtZSwgcDEsIHAyIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5pbml0R2FtZSgpO1xuXG5jb25zdCByYW5kb21QbGFjZW1lbnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbVBsYWNlbWVudFwiKTtcbmNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG5mdW5jdGlvbiBwbGF5ZXJSZW5kZXIocGxheWVyMSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGwtcDFcIikuZm9yRWFjaCgoZSwgaikgPT4ge1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGNvbnN0IHBvcyA9IGAke2p9YDtcbiAgICBpZiAoaiA8IDEwKSB7XG4gICAgICB4ID0gMDtcbiAgICAgIHkgPSBqO1xuICAgIH0gZWxzZSB7XG4gICAgICBbeCwgeV0gPSBwb3Muc3BsaXQoXCJcIik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgICFwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFt4XVt5XS5zaGlwTmFtZSAmJlxuICAgICAgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbeF1beV0uaGl0XG4gICAgKSB7XG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFt4XVt5XS5zaGlwTmFtZSAmJlxuICAgICAgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbeF1beV0uaGl0XG4gICAgKSB7XG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWhpdFwiKTtcbiAgICB9IGVsc2UgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLnNoaXBOYW1lKSB7XG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuZW15UmVuZGVyKHBsYXllcjIpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsLXAyXCIpLmZvckVhY2goKGUsIGopID0+IHtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBjb25zdCBwb3MgPSBgJHtqfWA7XG4gICAgaWYgKGogPCAxMCkge1xuICAgICAgeCA9IDA7XG4gICAgICB5ID0gajtcbiAgICB9IGVsc2Uge1xuICAgICAgW3gsIHldID0gcG9zLnNwbGl0KFwiXCIpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBwbGF5ZXIyLmdhbWVib2FyZC5ib2FyZFt4XVt5XS5zaGlwTmFtZSAmJlxuICAgICAgcGxheWVyMi5nYW1lYm9hcmQuYm9hcmRbeF1beV0uaGl0XG4gICAgKSB7XG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWhpdFwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIXBsYXllcjIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLnNoaXBOYW1lICYmXG4gICAgICBwbGF5ZXIyLmdhbWVib2FyZC5ib2FyZFt4XVt5XS5oaXRcbiAgICApIHtcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRCb2FyZCgpIHtcbiAgY29uc3QgYm9hcmQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZDFcIik7XG4gIGNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQyXCIpO1xuICBib2FyZDEuaW5uZXJIVE1MID0gXCJcIjtcbiAgYm9hcmQyLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbnJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbW9kYWxcIik7XG4gIG1vZGFsLmNsb3NlKCk7XG4gIHJlc2V0Qm9hcmQoKTtcbiAgaW5pdEdhbWUoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGJvYXJkUmVuZGVyKCk7XG4gIGNvbnN0IHJlc3RhcnRFdmVudCA9IG5ldyBDdXN0b21FdmVudChcInJlc3RhcnRlZFwiKTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChyZXN0YXJ0RXZlbnQpO1xuICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWNvbnRhaW5lclwiKTtcbiAgc2hpcERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcblxuZnVuY3Rpb24gcmVuZGVyV2lubmVyKHBsYXllcikge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tb2RhbFwiKTtcbiAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5uZXJcIik7XG4gIHdpbm5lci5pbm5lckhUTUwgPSBgJHtwbGF5ZXIubmFtZX0gV29uIWA7XG4gIG1vZGFsLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBjaGVja1dpbihvcHBvbmVudCwgcGxheWVyKSB7XG4gIGlmIChvcHBvbmVudC5nYW1lYm9hcmQucGxhY2VkU2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpKSB7XG4gICAgcmVuZGVyV2lubmVyKHBsYXllcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKDIpO1xuICAgIH0sIG1zKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckNvbXB1dGVyQXR0YWNrKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgYXdhaXQgZGVsYXkoNTAwKTtcbiAgbGV0IHN3aXRjaFR1cm4gPSAxO1xuICB3aGlsZSAoc3dpdGNoVHVybiA9PT0gMSkge1xuICAgIHN3aXRjaFR1cm4gPSBwbGF5ZXIyLnBjQXR0YWNrKHBsYXllcjEpO1xuICAgIHBsYXllclJlbmRlcihwbGF5ZXIxKTtcbiAgICBjaGVja1dpbihwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgfVxuICBwbGF5ZXIyLmVuZFR1cm4ocGxheWVyMSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllckF0dGFjayhwbGF5ZXIxLCBwbGF5ZXIyLCB4LCB5KSB7XG4gIGNvbnN0IHN3aXRjaFR1cm4gPSBwbGF5ZXIxLmF0dGFjayhwbGF5ZXIyLCBbeCwgeV0pO1xuICBlbmVteVJlbmRlcihwbGF5ZXIyKTtcbiAgY2hlY2tXaW4ocGxheWVyMiwgcGxheWVyMSk7XG4gIGlmIChzd2l0Y2hUdXJuID09PSAwKSB7XG4gICAgcGxheWVyMS5lbmRUdXJuKHBsYXllcjIpO1xuICAgIHJlbmRlckNvbXB1dGVyQXR0YWNrKHBsYXllcjEsIHBsYXllcjIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJsdXIoKSB7XG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkMlwiKTtcbiAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1jb250YWluZXJcIik7XG4gIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwc1wiKTtcbiAgaWYgKHNoaXBzLmlubmVySFRNTCA9PT0gXCJcIikge1xuICAgIHNoaXBEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVuZW15Qm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJyeVwiKTtcbiAgfSBlbHNlIHtcbiAgICBlbmVteUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJibHVycnlcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYm9hcmRSZW5kZXIoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgcm93LnNldEF0dHJpYnV0ZShcImlkXCIsIGBwMS1yb3cke2l9YCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZDFcIikuYXBwZW5kQ2hpbGQocm93KTtcblxuICAgIHAxLmdhbWVib2FyZC5ib2FyZFtpXS5mb3JFYWNoKChlLCBqKSA9PiB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtcDFcIik7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwMS1yb3cke2l9LWNlbGwke2p9YCk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfSk7XG4gIH1cblxuICBwbGF5ZXJSZW5kZXIocDEpO1xuXG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkMlwiKTtcbiAgZW5lbXlCb2FyZC5jbGFzc0xpc3QuYWRkKFwiYmx1cnJ5XCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcDItcm93JHtpfWApO1xuICAgIGVuZW15Qm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcblxuICAgIHAyLmdhbWVib2FyZC5ib2FyZFtpXS5mb3JFYWNoKChlLCBqKSA9PiB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtcDJcIik7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwMi1yb3cke2l9LWNlbGwke2p9YCk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICBjZWxsLmNsaWNrZWQgPSBmYWxzZTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIXAxLnR1cm4pIHJldHVybjtcbiAgICAgICAgaWYgKCFjZWxsLmNsaWNrZWQpIHtcbiAgICAgICAgICByZW5kZXJQbGF5ZXJBdHRhY2socDEsIHAyLCBpLCBqKTtcbiAgICAgICAgICBjZWxsLmNsaWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5yYW5kb21QbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcDEucGNHZW5lcmF0ZUZsZWV0KCk7XG4gIHBsYXllclJlbmRlcihwMSk7XG4gIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtY29udGFpbmVyXCIpO1xuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHNcIik7XG4gIHNoaXBzLmlubmVySFRNTCA9IFwiXCI7XG4gIHNoaXBEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0b2dnbGVCbHVyKCk7XG59KTtcblxuZXhwb3J0IHsgYm9hcmRSZW5kZXIsIHJlc2V0Qm9hcmQsIHRvZ2dsZUJsdXIgfTtcbiIsImltcG9ydCB7IHAxIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgYm9hcmRSZW5kZXIsIHJlc2V0Qm9hcmQsIHRvZ2dsZUJsdXIgfSBmcm9tIFwiLi9kb21cIjtcblxubGV0IGNsaWNrZWRPZmZzZXQ7XG5cbmNvbnN0IHNoaXBzID0gW1xuICB7IHNoaXBOYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1IH0sXG4gIHsgc2hpcE5hbWU6IFwiY2FyZ29cIiwgbGVuZ3RoOiA0IH0sXG4gIHsgc2hpcE5hbWU6IFwiY3J1aXNlclwiLCBsZW5ndGg6IDMgfSxcbiAgeyBzaGlwTmFtZTogXCJwYXRyb2xcIiwgbGVuZ3RoOiAzIH0sXG4gIHsgc2hpcE5hbWU6IFwidHVnYm9hdFwiLCBsZW5ndGg6IDIgfSxcbl07XG5cbmZ1bmN0aW9uIGNlbGxDbGlja0hhbmRsZXIoZSkge1xuICBjbGlja2VkT2Zmc2V0ID0gZS50YXJnZXQuZGF0YXNldC5vZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKSB7XG4gIHRoaXMuc3R5bGUub3BhY2l0eSA9IFwiMC40XCI7XG5cbiAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCB0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZCgpIHtcbiAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyb3AoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qgc2hpcElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XG5cbiAgY29uc3Qgc2hpcEluZm8gPSBzaGlwSWQuc3BsaXQoXCItXCIpO1xuICBjb25zdCBzaGlwTmFtZSA9IHNoaXBJbmZvWzBdO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gTnVtYmVyKHNoaXBJbmZvWzFdKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwSWQpO1xuICBjb25zdCBjb29yZHMgPSBlLnRhcmdldC5pZC5tYXRjaCgvcm93KFxcZCspLWNlbGwoXFxkKykvKS5zbGljZSgxKTtcbiAgbGV0IGRpcmVjdGlvbiA9IGZhbHNlO1xuICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImRyYWctY29udGFpbmVyLXZlcnRpY2FsXCIpKSB7XG4gICAgZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICBjb29yZHNbMF0gPSBOdW1iZXIoY29vcmRzWzBdKSAtIGNsaWNrZWRPZmZzZXQ7XG4gIH0gZWxzZSB7XG4gICAgY29vcmRzWzFdID0gTnVtYmVyKGNvb3Jkc1sxXSkgLSBjbGlja2VkT2Zmc2V0O1xuICB9XG4gIGNvbnN0IHN1Y2Nlc3MgPSBwMS5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgIHNoaXBOYW1lLFxuICAgIHNoaXBMZW5ndGgsXG4gICAgY29vcmRzLFxuICAgIGRpcmVjdGlvblxuICApO1xuICBpZiAoc3VjY2Vzcykge1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwSWQpLnJlbW92ZSgpO1xuICAgIHJlc2V0Qm9hcmQoKTtcbiAgICBib2FyZFJlbmRlcigpO1xuICAgIHRvZ2dsZUJsdXIoKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICBwcmVwYXJlVGFyZ2V0Qm9hcmQoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRhcmdldEJvYXJkKCkge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbC1wMVwiKTtcbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1wMS0tb3ZlclwiKTtcbiAgICB9KTtcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtcDEtLW92ZXJcIik7XG4gICAgfSk7XG5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLXAxLS1vdmVyXCIpO1xuICAgICAgaGFuZGxlRHJvcChlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZsaXBTaGlwKHNoaXBJZCkge1xuICBjb25zdCBkcmFnZ2FibGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwSWQpO1xuICBpZiAoZHJhZ2dhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImRyYWctY29udGFpbmVyLXZlcnRpY2FsXCIpKSB7XG4gICAgZHJhZ2dhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcmFnLWNvbnRhaW5lci1ob3Jpem9udGFsXCIpO1xuICAgIGRyYWdnYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1jb250YWluZXItdmVydGljYWxcIik7XG4gIH0gZWxzZSB7XG4gICAgZHJhZ2dhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLWNvbnRhaW5lci1ob3Jpem9udGFsXCIpO1xuICAgIGRyYWdnYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJhZy1jb250YWluZXItdmVydGljYWxcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyU2hpcChzaGlwTmFtZSwgbGVuZ3RoKSB7XG4gIGNvbnN0IHNoaXBEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBzXCIpO1xuICBjb25zdCBuZXdTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3U2hpcC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dhYmxlLWNvbnRhaW5lclwiKTtcbiAgbmV3U2hpcC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1jb250YWluZXItdmVydGljYWxcIik7XG4gIG5ld1NoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImRyYWctc2hpcFwiKTtcbiAgICBjZWxsLmRhdGFzZXQub2Zmc2V0ID0gaTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2VsbENsaWNrSGFuZGxlcik7XG4gICAgbmV3U2hpcC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxuICBuZXdTaGlwLmlkID0gYCR7c2hpcE5hbWV9LSR7bGVuZ3RofWA7XG4gIG5ld1NoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBoYW5kbGVEcmFnU3RhcnQpO1xuICBuZXdTaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGhhbmRsZURyYWdFbmQpO1xuICBuZXdTaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZmxpcFNoaXAobmV3U2hpcC5pZCk7XG4gIH0pO1xuICBzaGlwRG9tLmFwcGVuZENoaWxkKG5ld1NoaXApO1xuICBwcmVwYXJlVGFyZ2V0Qm9hcmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFBsYXllclNoaXBzKCkge1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgcmVuZGVyU2hpcChzaGlwLnNoaXBOYW1lLCBzaGlwLmxlbmd0aCk7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzdGFydGVkXCIsICgpID0+IHtcbiAgaW5pdFBsYXllclNoaXBzKCk7XG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmxldCBwMTtcbmxldCBwMjtcblxuZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gIHAxID0gbmV3IFBsYXllcihcIllvdVwiKTtcbiAgcDIgPSBuZXcgUGxheWVyKFwiRW5lbXlcIik7XG4gIHAyLnBjR2VuZXJhdGVGbGVldCgpO1xuICBwMS50YWtlVHVybigpO1xufVxuXG5leHBvcnQgeyBpbml0R2FtZSwgcDEsIHAyIH07XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGJvYXJkID0gbmV3IEFycmF5KDEwKVxuICAgIC5maWxsKClcbiAgICAubWFwKCgpID0+IG5ldyBBcnJheSgxMCkuZmlsbCh7IHNoaXBOYW1lOiBudWxsLCBoaXQ6IGZhbHNlIH0pKTtcblxuICBwbGFjZWRTaGlwcyA9IFtdO1xuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XG4gICAgY29uc3QgeCA9IGNvb3Jkc1swXTtcbiAgICBjb25zdCB5ID0gY29vcmRzWzFdO1xuXG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uc2hpcE5hbWUgIT09IG51bGwgJiYgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0geyAuLi50aGlzLmJvYXJkW3hdW3ldLCBoaXQ6IHRydWUgfTtcbiAgICAgIHRoaXMucGxhY2VkU2hpcHNcbiAgICAgICAgLmZpbmQoKHNoaXApID0+IHNoaXAuc2hpcE5hbWUgPT09IHRoaXMuYm9hcmRbeF1beV0uc2hpcE5hbWUpXG4gICAgICAgIC5oaXQoKTtcbiAgICAgIHJldHVybiAxOyAvLyAgMSBmb3IgaGl0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uc2hpcE5hbWUgPT09IG51bGwgJiYgdGhpcy5ib2FyZFt4XVt5XS5oaXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0geyAuLi50aGlzLmJvYXJkW3hdW3ldLCBoaXQ6IHRydWUgfTtcbiAgICAgIHJldHVybiAwOyAvLyAgMCBmb3IgbWlzc1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcE5hbWUsIGxlbmd0aCwgY29vcmRzLCBob3Jpem9udGFsKSB7XG4gICAgY29uc3QgeCA9IE51bWJlcihjb29yZHNbMF0pO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIoY29vcmRzWzFdKTtcbiAgICBpZiAodGhpcy5pc1ZhbGlkUGxhY2VtZW50KGxlbmd0aCwgeCwgeSwgaG9yaXpvbnRhbCkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIHNoaXBOYW1lKTtcbiAgICAgIHRoaXMucGxhY2VkU2hpcHMucHVzaChzaGlwKTtcbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldID0ge1xuICAgICAgICAgICAgLi4udGhpcy5ib2FyZFt4ICsgaV1beV0sXG4gICAgICAgICAgICBzaGlwTmFtZTogc2hpcC5zaGlwTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXSA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuYm9hcmRbeF1beSArIGldLFxuICAgICAgICAgICAgc2hpcE5hbWU6IHNoaXAuc2hpcE5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNWYWxpZFBsYWNlbWVudChsZW5ndGgsIHgsIHksIGhvcml6b250YWwpIHtcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgaWYgKHggKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0uc2hpcE5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5ICsgaV0uc2hpcE5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGFjZWRTaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5sZW5ndGggPT09IHNoaXAuaGl0cyk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgQm90QUkgZnJvbSBcIi4vYm90QUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuYWkgPSBuZXcgQm90QUkoKTtcbiAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgdGFrZVR1cm4oKSB7XG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcbiAgfVxuXG4gIGVuZFR1cm4ocGxheWVyKSB7XG4gICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgcGxheWVyLnRha2VUdXJuKCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBhdHRhY2socGxheWVyLCBjb29yZHMpIHtcbiAgICBsZXQgc3VjY2VzcyA9IC0xO1xuICAgIHdoaWxlIChzdWNjZXNzIDwgMCkge1xuICAgICAgc3VjY2VzcyA9IHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICAgIH1cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHBjQXR0YWNrKHBsYXllcikge1xuICAgIGxldCBzdWNjZXNzID0gLTE7XG4gICAgbGV0IGNvb3JkcztcbiAgICB3aGlsZSAoc3VjY2VzcyA8IDApIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5haS5sYXN0U3VjY2Vzc2Z1bEhpdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjb29yZHMgPSB0aGlzLnJhbmRvbVBvcygpO1xuICAgICAgICBzdWNjZXNzID0gcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb29yZHMgPSB0aGlzLmFpLmFpTW92ZSh0aGlzLmdhbWVib2FyZC5ib2FyZCk7XG4gICAgICAgIGlmIChjb29yZHMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29vcmRzID0gdGhpcy5yYW5kb21Qb3MoKTtcbiAgICAgICAgfVxuICAgICAgICBzdWNjZXNzID0gcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWNjZXNzID4gMCkge1xuICAgICAgICB0aGlzLmFpLnNldFN1Y2Nlc3NmdWxIaXQoY29vcmRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBwY0dlbmVyYXRlRmxlZXQoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZVNoaXAoXCJjYXJyaWVyXCIsIDUpO1xuICAgIHRoaXMuZ2VuZXJhdGVTaGlwKFwiY2FyZ29cIiwgNCk7XG4gICAgdGhpcy5nZW5lcmF0ZVNoaXAoXCJjcnVpc2VyXCIsIDMpO1xuICAgIHRoaXMuZ2VuZXJhdGVTaGlwKFwicGF0cm9sXCIsIDMpO1xuICAgIHRoaXMuZ2VuZXJhdGVTaGlwKFwidHVnYm9hdFwiLCAyKTtcbiAgfVxuXG4gIGdlbmVyYXRlU2hpcChzaGlwTmFtZSwgbGVuZ3RoKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB3aGlsZSAoIXN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gICAgICBjb25zdCBjb29yZHMgPSB0aGlzLnJhbmRvbVBvcygpO1xuICAgICAgc3VjY2VzcyA9IHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwTmFtZSwgbGVuZ3RoLCBjb29yZHMsIGRpcmVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgcmFuZG9tUG9zKCkge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBzaGlwTmFtZSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwTmFtZSA9IHNoaXBOYW1lO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYm9hcmRSZW5kZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiO1xuaW1wb3J0IGluaXRQbGF5ZXJTaGlwcyBmcm9tIFwiLi9tb2R1bGVzL2RyYWdhbmRkcm9wXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5cbmJvYXJkUmVuZGVyKCk7XG5pbml0UGxheWVyU2hpcHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==