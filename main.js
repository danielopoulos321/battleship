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
  _game__WEBPACK_IMPORTED_MODULE_0__.p1.ships.forEach((ship) => {
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

  ships = [
    { shipName: "carrier", length: 5 },
    { shipName: "cargo", length: 4 },
    { shipName: "cruiser", length: 3 },
    { shipName: "patrol", length: 3 },
    { shipName: "tugboat", length: 2 },
  ];

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
    const shipsLeft = this.ships.filter(
      (ship) =>
        // Check if a ship with the same shipName already exists in the fleet
        !this.gameboard.placedShips.some(
          (existingShip) => existingShip.shipName === ship.shipName
        )
    );

    // Generate ships for the remaining ones
    shipsLeft.forEach((ship) => {
      this.generateShip(ship.shipName, ship.length);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYm90QUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZHJhZ2FuZGRyb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2Nyb3NzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0cy9kb3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tc2hpcC1jb2xvcjogI2IzZDNlYTtcbiAgICAtLWNyb3NzLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvOTAlIG5vLXJlcGVhdDtcbiAgICAtLWRvdC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgY2VudGVyLzkwJSBuby1yZXBlYXQ7XG4gICAgLS1mb250LWZpcmE6ICdGaXJhIENvZGUnLCBtb25vc3BhY2U7XG59XG5cbmJvZHl7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTAsIDI1NSk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmlyYSlcbn1cblxuYnV0dG9ue1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZpcmEpO1xufVxuXG4jaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDUlO1xufVxuXG4jbG9nb3tcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbSA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuXG4uY29udGFpbmVyLCBcbi5zaGlwLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2JvYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGhlaWdodDogOTUlO1xufVxuXG4jYm9hcmQxLCAjYm9hcmQye1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3MCwgNjksIDY5KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI3NoaXBze1xuICAgIGhlaWdodDogMjcxcHg7XG4gICAgd2lkdGg6IDMxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4ucm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jZWxsLXAxLFxuLmNlbGwtcDJ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMTYyLCAxOTksIDIxMSk7XG59XG5cbi5jZWxsLXAyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLnNoaXB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG4gICAgYm9yZGVyOi41cHggc29saWQgcmdiKDM2LCAzNiwgMTY4KTtcbn1cblxuLnNoaXAtaGl0e1xuICAgIGJhY2tncm91bmQ6dmFyKC0tY3Jvc3MtaWNvbikgO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlcjouNXB4IHNvbGlkIHJnYigzNiwgMzYsIDE2OCk7XG59XG5cbi5taXNze1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRvdC1pY29uKTtcbn1cblxuLmRyYWdnYWJsZS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAuMWVtO1xufVxuXG4uZHJhZy1jb250YWluZXItdmVydGljYWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZHJhZy1jb250YWluZXItaG9yaXpvbnRhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZHJhZy1zaGlwe1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcbiAgICBib3JkZXI6LjVweCBzb2xpZCByZ2IoNjcsIDY3LCAxNTApO1xuICAgIGN1cnNvcjogbW92ZTtcbn1cblxuLmNlbGwtcDEtLW92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG59XG5cbi5ibHVycnl7XG4gICAgZmlsdGVyOiBibHVyKDNweCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxufVxuXG4vKiBDU1MgKi9cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWVjZjQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YWE3Yzc7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgMCAxcHggMCAwIGluc2V0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICMzOTczOWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1maXJhKTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xNTM4NTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IC44ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlcixcbiAgLmJ1dHRvbjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZDNlYTtcbiAgICBjb2xvcjogIzJjNTc3NztcbiAgfVxuICBcbiAgLmJ1dHRvbjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMCwgMTQ5LCAyNTUsIC4xNSk7XG4gIH1cbiAgXG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjN2U0O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6ICMyYzU3Nzc7XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLHFCQUFxQjtJQUNyQiwwRUFBMEQ7SUFDMUQsd0VBQXNEO0lBQ3RELG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isc0NBQXNDO0lBQ3RDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQSxRQUFRO0FBQ1I7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtREFBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdHtcXG4gICAgLS1zaGlwLWNvbG9yOiAjYjNkM2VhO1xcbiAgICAtLWNyb3NzLWljb246IHVybCgnYXNzZXRzL2Nyb3NzLnN2ZycpIGNlbnRlci85MCUgbm8tcmVwZWF0O1xcbiAgICAtLWRvdC1pY29uOiB1cmwoJ2Fzc2V0cy9kb3Quc3ZnJykgY2VudGVyLzkwJSBuby1yZXBlYXQ7XFxuICAgIC0tZm9udC1maXJhOiAnRmlyYSBDb2RlJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1MCwgMjU1KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmlyYSlcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1maXJhKTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiA1JTtcXG59XFxuXFxuI2xvZ297XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbSA7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcblxcbi5jb250YWluZXIsIFxcbi5zaGlwLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2JvYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiA5NSU7XFxufVxcblxcbiNib2FyZDEsICNib2FyZDJ7XFxuICAgIG1hcmdpbjogMWVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNzAsIDY5LCA2OSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI3NoaXBze1xcbiAgICBoZWlnaHQ6IDI3MXB4O1xcbiAgICB3aWR0aDogMzE0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4ucm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2VsbC1wMSxcXG4uY2VsbC1wMntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigxNjIsIDE5OSwgMjExKTtcXG59XFxuXFxuLmNlbGwtcDI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5zaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG4gICAgYm9yZGVyOi41cHggc29saWQgcmdiKDM2LCAzNiwgMTY4KTtcXG59XFxuXFxuLnNoaXAtaGl0e1xcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWNyb3NzLWljb24pIDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICAgIGJvcmRlcjouNXB4IHNvbGlkIHJnYigzNiwgMzYsIDE2OCk7XFxufVxcblxcbi5taXNze1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kb3QtaWNvbik7XFxufVxcblxcbi5kcmFnZ2FibGUtY29udGFpbmVye1xcbiAgICBtYXJnaW46IC4xZW07XFxufVxcblxcbi5kcmFnLWNvbnRhaW5lci12ZXJ0aWNhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRyYWctY29udGFpbmVyLWhvcml6b250YWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcmFnLXNoaXB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgICBib3JkZXI6LjVweCBzb2xpZCByZ2IoNjcsIDY3LCAxNTApO1xcbiAgICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5jZWxsLXAxLS1vdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmJsdXJyeXtcXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcXG59XFxuXFxuLyogQ1NTICovXFxuLmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWVjZjQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdhYTdjNztcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNykgMCAxcHggMCAwIGluc2V0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogIzM5NzM5ZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZpcmEpO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1Mzg1O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHggLjhlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB9XFxuICBcXG4gIC5idXR0b246aG92ZXIsXFxuICAuYnV0dG9uOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZDNlYTtcXG4gICAgY29sb3I6ICMyYzU3Nzc7XFxuICB9XFxuICBcXG4gIC5idXR0b246Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgwLCAxNDksIDI1NSwgLjE1KTtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjN2U0O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBjb2xvcjogIzJjNTc3NztcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaXRlcmF0ZSB0aHJvdWdoIGNlbGxzIHRvcC9yaWdodC9sZWZ0L2JvdHRvbSBmb3IgZmlyc3QgdmFsaWRcbi8vIGlmIG5vbmUgYXJlIHZhbGlkIG1vdmUgb24gdG8gcmFuZG9tIHNwb3Rcbi8vIHdoZW4gY29uc3RydWN0aW5nIGEgbmV3IHBsYXllciwgQm90QWkgaXMgYXR0YWNoZWQgdG8gaGF2ZSBhY2Nlc3MgdG8gYm9hcmQgc3RhdGVcbi8vIGZvciBkZXBlbmRhbnQgY2xhc3MsIHBhc3MgaW4gdGhlIGdhbWVib2FyZCBhcnJheVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90QUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxhc3RTdWNjZXNzZnVsSGl0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYWlNb3ZlKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IHggPSB0aGlzLmxhc3RTdWNjZXNzZnVsSGl0WzBdO1xuICAgIGNvbnN0IHkgPSB0aGlzLmxhc3RTdWNjZXNzZnVsSGl0WzFdO1xuICAgIGlmICh4ICsgMSA8IDEwICYmIGdhbWVib2FyZFt4ICsgMV1beV0uaGl0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5jbGVhclN1Y2Nlc3NmdWxIaXQoKTtcbiAgICAgIHJldHVybiBbeCArIDEsIHldO1xuICAgIH1cblxuICAgIGlmICh5ICsgMSA8IDEwICYmIGdhbWVib2FyZFt4XVt5ICsgMV0uaGl0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5jbGVhclN1Y2Nlc3NmdWxIaXQoKTtcbiAgICAgIHJldHVybiBbeCwgeSArIDFdO1xuICAgIH1cblxuICAgIGlmICh4IC0gMSA+PSAwICYmIGdhbWVib2FyZFt4IC0gMV1beV0uaGl0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5jbGVhclN1Y2Nlc3NmdWxIaXQoKTtcbiAgICAgIHJldHVybiBbeCAtIDEsIHldO1xuICAgIH1cblxuICAgIGlmICh4IC0gMSA+PSAwICYmIGdhbWVib2FyZFt4XVt5IC0gMV0uaGl0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5jbGVhclN1Y2Nlc3NmdWxIaXQoKTtcbiAgICAgIHJldHVybiBbeCwgeSAtIDFdO1xuICAgIH1cblxuICAgIHRoaXMuY2xlYXJTdWNjZXNzZnVsSGl0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2V0U3VjY2Vzc2Z1bEhpdChjb29yZHMpIHtcbiAgICB0aGlzLmxhc3RTdWNjZXNzZnVsSGl0ID0gY29vcmRzO1xuICB9XG5cbiAgY2xlYXJTdWNjZXNzZnVsSGl0KCkge1xuICAgIHRoaXMubGFzdFN1Y2Nlc3NmdWxIaXQgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluaXRHYW1lLCBwMSwgcDIgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmluaXRHYW1lKCk7XG5cbmNvbnN0IHJhbmRvbVBsYWNlbWVudEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZG9tUGxhY2VtZW50XCIpO1xuY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydFwiKTtcbmZ1bmN0aW9uIHBsYXllclJlbmRlcihwbGF5ZXIxKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbC1wMVwiKS5mb3JFYWNoKChlLCBqKSA9PiB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgY29uc3QgcG9zID0gYCR7an1gO1xuICAgIGlmIChqIDwgMTApIHtcbiAgICAgIHggPSAwO1xuICAgICAgeSA9IGo7XG4gICAgfSBlbHNlIHtcbiAgICAgIFt4LCB5XSA9IHBvcy5zcGxpdChcIlwiKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgIXBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLnNoaXBOYW1lICYmXG4gICAgICBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFt4XVt5XS5oaXRcbiAgICApIHtcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLnNoaXBOYW1lICYmXG4gICAgICBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFt4XVt5XS5oaXRcbiAgICApIHtcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcInNoaXAtaGl0XCIpO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbeF1beV0uc2hpcE5hbWUpIHtcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5lbXlSZW5kZXIocGxheWVyMikge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGwtcDJcIikuZm9yRWFjaCgoZSwgaikgPT4ge1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGNvbnN0IHBvcyA9IGAke2p9YDtcbiAgICBpZiAoaiA8IDEwKSB7XG4gICAgICB4ID0gMDtcbiAgICAgIHkgPSBqO1xuICAgIH0gZWxzZSB7XG4gICAgICBbeCwgeV0gPSBwb3Muc3BsaXQoXCJcIik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHBsYXllcjIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLnNoaXBOYW1lICYmXG4gICAgICBwbGF5ZXIyLmdhbWVib2FyZC5ib2FyZFt4XVt5XS5oaXRcbiAgICApIHtcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcInNoaXAtaGl0XCIpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhcGxheWVyMi5nYW1lYm9hcmQuYm9hcmRbeF1beV0uc2hpcE5hbWUgJiZcbiAgICAgIHBsYXllcjIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLmhpdFxuICAgICkge1xuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldEJvYXJkKCkge1xuICBjb25zdCBib2FyZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkMVwiKTtcbiAgY29uc3QgYm9hcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZDJcIik7XG4gIGJvYXJkMS5pbm5lckhUTUwgPSBcIlwiO1xuICBib2FyZDIuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxucmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tb2RhbFwiKTtcbiAgbW9kYWwuY2xvc2UoKTtcbiAgcmVzZXRCb2FyZCgpO1xuICBpbml0R2FtZSgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgYm9hcmRSZW5kZXIoKTtcbiAgY29uc3QgcmVzdGFydEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwicmVzdGFydGVkXCIpO1xuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHJlc3RhcnRFdmVudCk7XG4gIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtY29udGFpbmVyXCIpO1xuICBzaGlwRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG5mdW5jdGlvbiByZW5kZXJXaW5uZXIocGxheWVyKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1vZGFsXCIpO1xuICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbm5lclwiKTtcbiAgd2lubmVyLmlubmVySFRNTCA9IGAke3BsYXllci5uYW1lfSBXb24hYDtcbiAgbW9kYWwuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2luKG9wcG9uZW50LCBwbGF5ZXIpIHtcbiAgaWYgKG9wcG9uZW50LmdhbWVib2FyZC5wbGFjZWRTaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSkpIHtcbiAgICByZW5kZXJXaW5uZXIocGxheWVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxheShtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoMik7XG4gICAgfSwgbXMpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyQ29tcHV0ZXJBdHRhY2socGxheWVyMSwgcGxheWVyMikge1xuICBhd2FpdCBkZWxheSg1MDApO1xuICBsZXQgc3dpdGNoVHVybiA9IDE7XG4gIHdoaWxlIChzd2l0Y2hUdXJuID09PSAxKSB7XG4gICAgc3dpdGNoVHVybiA9IHBsYXllcjIucGNBdHRhY2socGxheWVyMSk7XG4gICAgcGxheWVyUmVuZGVyKHBsYXllcjEpO1xuICAgIGNoZWNrV2luKHBsYXllcjEsIHBsYXllcjIpO1xuICB9XG4gIHBsYXllcjIuZW5kVHVybihwbGF5ZXIxKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxheWVyQXR0YWNrKHBsYXllcjEsIHBsYXllcjIsIHgsIHkpIHtcbiAgY29uc3Qgc3dpdGNoVHVybiA9IHBsYXllcjEuYXR0YWNrKHBsYXllcjIsIFt4LCB5XSk7XG4gIGVuZW15UmVuZGVyKHBsYXllcjIpO1xuICBjaGVja1dpbihwbGF5ZXIyLCBwbGF5ZXIxKTtcbiAgaWYgKHN3aXRjaFR1cm4gPT09IDApIHtcbiAgICBwbGF5ZXIxLmVuZFR1cm4ocGxheWVyMik7XG4gICAgcmVuZGVyQ29tcHV0ZXJBdHRhY2socGxheWVyMSwgcGxheWVyMik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQmx1cigpIHtcbiAgY29uc3QgZW5lbXlCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQyXCIpO1xuICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBzXCIpO1xuICBpZiAoc2hpcHMuaW5uZXJIVE1MID09PSBcIlwiKSB7XG4gICAgc2hpcERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZW5lbXlCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1cnJ5XCIpO1xuICB9IGVsc2Uge1xuICAgIGVuZW15Qm9hcmQuY2xhc3NMaXN0LmFkZChcImJsdXJyeVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBib2FyZFJlbmRlcigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICByb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHAxLXJvdyR7aX1gKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkMVwiKS5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgcDEuZ2FtZWJvYXJkLmJvYXJkW2ldLmZvckVhY2goKGUsIGopID0+IHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1wMVwiKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHAxLXJvdyR7aX0tY2VsbCR7an1gKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBsYXllclJlbmRlcihwMSk7XG5cbiAgY29uc3QgZW5lbXlCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmQyXCIpO1xuICBlbmVteUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJibHVycnlcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgcm93LnNldEF0dHJpYnV0ZShcImlkXCIsIGBwMi1yb3cke2l9YCk7XG4gICAgZW5lbXlCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgcDIuZ2FtZWJvYXJkLmJvYXJkW2ldLmZvckVhY2goKGUsIGopID0+IHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1wMlwiKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHAyLXJvdyR7aX0tY2VsbCR7an1gKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIGNlbGwuY2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmICghcDEudHVybikgcmV0dXJuO1xuICAgICAgICBpZiAoIWNlbGwuY2xpY2tlZCkge1xuICAgICAgICAgIHJlbmRlclBsYXllckF0dGFjayhwMSwgcDIsIGksIGopO1xuICAgICAgICAgIGNlbGwuY2xpY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbnJhbmRvbVBsYWNlbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwMS5wY0dlbmVyYXRlRmxlZXQoKTtcbiAgcGxheWVyUmVuZGVyKHAxKTtcbiAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1jb250YWluZXJcIik7XG4gIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwc1wiKTtcbiAgc2hpcHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgc2hpcERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRvZ2dsZUJsdXIoKTtcbn0pO1xuXG5leHBvcnQgeyBib2FyZFJlbmRlciwgcmVzZXRCb2FyZCwgdG9nZ2xlQmx1ciB9O1xuIiwiaW1wb3J0IHsgcDEgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyBib2FyZFJlbmRlciwgcmVzZXRCb2FyZCwgdG9nZ2xlQmx1ciB9IGZyb20gXCIuL2RvbVwiO1xuXG5sZXQgY2xpY2tlZE9mZnNldDtcblxuZnVuY3Rpb24gY2VsbENsaWNrSGFuZGxlcihlKSB7XG4gIGNsaWNrZWRPZmZzZXQgPSBlLnRhcmdldC5kYXRhc2V0Lm9mZnNldDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gXCIwLjRcIjtcblxuICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW5kKCkge1xuICB0aGlzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJvcChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBzaGlwSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcblxuICBjb25zdCBzaGlwSW5mbyA9IHNoaXBJZC5zcGxpdChcIi1cIik7XG4gIGNvbnN0IHNoaXBOYW1lID0gc2hpcEluZm9bMF07XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBOdW1iZXIoc2hpcEluZm9bMV0pO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBJZCk7XG4gIGNvbnN0IGNvb3JkcyA9IGUudGFyZ2V0LmlkLm1hdGNoKC9yb3coXFxkKyktY2VsbChcXGQrKS8pLnNsaWNlKDEpO1xuICBsZXQgZGlyZWN0aW9uID0gZmFsc2U7XG4gIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJhZy1jb250YWluZXItdmVydGljYWxcIikpIHtcbiAgICBkaXJlY3Rpb24gPSB0cnVlO1xuICAgIGNvb3Jkc1swXSA9IE51bWJlcihjb29yZHNbMF0pIC0gY2xpY2tlZE9mZnNldDtcbiAgfSBlbHNlIHtcbiAgICBjb29yZHNbMV0gPSBOdW1iZXIoY29vcmRzWzFdKSAtIGNsaWNrZWRPZmZzZXQ7XG4gIH1cbiAgY29uc3Qgc3VjY2VzcyA9IHAxLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgc2hpcE5hbWUsXG4gICAgc2hpcExlbmd0aCxcbiAgICBjb29yZHMsXG4gICAgZGlyZWN0aW9uXG4gICk7XG4gIGlmIChzdWNjZXNzKSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBJZCkucmVtb3ZlKCk7XG4gICAgcmVzZXRCb2FyZCgpO1xuICAgIGJvYXJkUmVuZGVyKCk7XG4gICAgdG9nZ2xlQmx1cigpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIHByZXBhcmVUYXJnZXRCb2FyZCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVGFyZ2V0Qm9hcmQoKSB7XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsLXAxXCIpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLXAxLS1vdmVyXCIpO1xuICAgIH0pO1xuXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbC1wMS0tb3ZlclwiKTtcbiAgICB9KTtcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtcDEtLW92ZXJcIik7XG4gICAgICBoYW5kbGVEcm9wKGUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmxpcFNoaXAoc2hpcElkKSB7XG4gIGNvbnN0IGRyYWdnYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBJZCk7XG4gIGlmIChkcmFnZ2FibGVDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJhZy1jb250YWluZXItdmVydGljYWxcIikpIHtcbiAgICBkcmFnZ2FibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyYWctY29udGFpbmVyLWhvcml6b250YWxcIik7XG4gICAgZHJhZ2dhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLWNvbnRhaW5lci12ZXJ0aWNhbFwiKTtcbiAgfSBlbHNlIHtcbiAgICBkcmFnZ2FibGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctY29udGFpbmVyLWhvcml6b250YWxcIik7XG4gICAgZHJhZ2dhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcmFnLWNvbnRhaW5lci12ZXJ0aWNhbFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJTaGlwKHNoaXBOYW1lLCBsZW5ndGgpIHtcbiAgY29uc3Qgc2hpcERvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHNcIik7XG4gIGNvbnN0IG5ld1NoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdTaGlwLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGUtY29udGFpbmVyXCIpO1xuICBuZXdTaGlwLmNsYXNzTGlzdC5hZGQoXCJkcmFnLWNvbnRhaW5lci12ZXJ0aWNhbFwiKTtcbiAgbmV3U2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1zaGlwXCIpO1xuICAgIGNlbGwuZGF0YXNldC5vZmZzZXQgPSBpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjZWxsQ2xpY2tIYW5kbGVyKTtcbiAgICBuZXdTaGlwLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG4gIG5ld1NoaXAuaWQgPSBgJHtzaGlwTmFtZX0tJHtsZW5ndGh9YDtcbiAgbmV3U2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGhhbmRsZURyYWdTdGFydCk7XG4gIG5ld1NoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgaGFuZGxlRHJhZ0VuZCk7XG4gIG5ld1NoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmbGlwU2hpcChuZXdTaGlwLmlkKTtcbiAgfSk7XG4gIHNoaXBEb20uYXBwZW5kQ2hpbGQobmV3U2hpcCk7XG4gIHByZXBhcmVUYXJnZXRCb2FyZCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UGxheWVyU2hpcHMoKSB7XG4gIHAxLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICByZW5kZXJTaGlwKHNoaXAuc2hpcE5hbWUsIHNoaXAubGVuZ3RoKTtcbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXN0YXJ0ZWRcIiwgKCkgPT4ge1xuICBpbml0UGxheWVyU2hpcHMoKTtcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxubGV0IHAxO1xubGV0IHAyO1xuXG5mdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgcDEgPSBuZXcgUGxheWVyKFwiWW91XCIpO1xuICBwMiA9IG5ldyBQbGF5ZXIoXCJFbmVteVwiKTtcbiAgcDIucGNHZW5lcmF0ZUZsZWV0KCk7XG4gIHAxLnRha2VUdXJuKCk7XG59XG5cbmV4cG9ydCB7IGluaXRHYW1lLCBwMSwgcDIgfTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgYm9hcmQgPSBuZXcgQXJyYXkoMTApXG4gICAgLmZpbGwoKVxuICAgIC5tYXAoKCkgPT4gbmV3IEFycmF5KDEwKS5maWxsKHsgc2hpcE5hbWU6IG51bGwsIGhpdDogZmFsc2UgfSkpO1xuXG4gIHBsYWNlZFNoaXBzID0gW107XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZHMpIHtcbiAgICBjb25zdCB4ID0gY29vcmRzWzBdO1xuICAgIGNvbnN0IHkgPSBjb29yZHNbMV07XG5cbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwTmFtZSAhPT0gbnVsbCAmJiB0aGlzLmJvYXJkW3hdW3ldLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSB7IC4uLnRoaXMuYm9hcmRbeF1beV0sIGhpdDogdHJ1ZSB9O1xuICAgICAgdGhpcy5wbGFjZWRTaGlwc1xuICAgICAgICAuZmluZCgoc2hpcCkgPT4gc2hpcC5zaGlwTmFtZSA9PT0gdGhpcy5ib2FyZFt4XVt5XS5zaGlwTmFtZSlcbiAgICAgICAgLmhpdCgpO1xuICAgICAgcmV0dXJuIDE7IC8vICAxIGZvciBoaXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwTmFtZSA9PT0gbnVsbCAmJiB0aGlzLmJvYXJkW3hdW3ldLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSB7IC4uLnRoaXMuYm9hcmRbeF1beV0sIGhpdDogdHJ1ZSB9O1xuICAgICAgcmV0dXJuIDA7IC8vICAwIGZvciBtaXNzXG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwTmFtZSwgbGVuZ3RoLCBjb29yZHMsIGhvcml6b250YWwpIHtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGNvb3Jkc1swXSk7XG4gICAgY29uc3QgeSA9IE51bWJlcihjb29yZHNbMV0pO1xuICAgIGlmICh0aGlzLmlzVmFsaWRQbGFjZW1lbnQobGVuZ3RoLCB4LCB5LCBob3Jpem9udGFsKSkge1xuICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgc2hpcE5hbWUpO1xuICAgICAgdGhpcy5wbGFjZWRTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0gPSB7XG4gICAgICAgICAgICAuLi50aGlzLmJvYXJkW3ggKyBpXVt5XSxcbiAgICAgICAgICAgIHNoaXBOYW1lOiBzaGlwLnNoaXBOYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldID0ge1xuICAgICAgICAgICAgLi4udGhpcy5ib2FyZFt4XVt5ICsgaV0sXG4gICAgICAgICAgICBzaGlwTmFtZTogc2hpcC5zaGlwTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1ZhbGlkUGxhY2VtZW50KGxlbmd0aCwgeCwgeSwgaG9yaXpvbnRhbCkge1xuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3ggKyBpXVt5XS5zaGlwTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3kgKyBpXS5zaGlwTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnBsYWNlZFNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmxlbmd0aCA9PT0gc2hpcC5oaXRzKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBCb3RBSSBmcm9tIFwiLi9ib3RBSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5haSA9IG5ldyBCb3RBSSgpO1xuICAgIHRoaXMudHVybiA9IGZhbHNlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzaGlwcyA9IFtcbiAgICB7IHNoaXBOYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1IH0sXG4gICAgeyBzaGlwTmFtZTogXCJjYXJnb1wiLCBsZW5ndGg6IDQgfSxcbiAgICB7IHNoaXBOYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiAzIH0sXG4gICAgeyBzaGlwTmFtZTogXCJwYXRyb2xcIiwgbGVuZ3RoOiAzIH0sXG4gICAgeyBzaGlwTmFtZTogXCJ0dWdib2F0XCIsIGxlbmd0aDogMiB9LFxuICBdO1xuXG4gIHRha2VUdXJuKCkge1xuICAgIHRoaXMudHVybiA9IHRydWU7XG4gIH1cblxuICBlbmRUdXJuKHBsYXllcikge1xuICAgIHRoaXMudHVybiA9IGZhbHNlO1xuICAgIHBsYXllci50YWtlVHVybigpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgYXR0YWNrKHBsYXllciwgY29vcmRzKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSAtMTtcbiAgICB3aGlsZSAoc3VjY2VzcyA8IDApIHtcbiAgICAgIHN1Y2Nlc3MgPSBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBwY0F0dGFjayhwbGF5ZXIpIHtcbiAgICBsZXQgc3VjY2VzcyA9IC0xO1xuICAgIGxldCBjb29yZHM7XG4gICAgd2hpbGUgKHN1Y2Nlc3MgPCAwKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuYWkubGFzdFN1Y2Nlc3NmdWxIaXQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY29vcmRzID0gdGhpcy5yYW5kb21Qb3MoKTtcbiAgICAgICAgc3VjY2VzcyA9IHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmRzID0gdGhpcy5haS5haU1vdmUodGhpcy5nYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgICBpZiAoY29vcmRzID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvb3JkcyA9IHRoaXMucmFuZG9tUG9zKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3VjY2VzcyA9IHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VjY2VzcyA+IDApIHtcbiAgICAgICAgdGhpcy5haS5zZXRTdWNjZXNzZnVsSGl0KGNvb3Jkcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgcGNHZW5lcmF0ZUZsZWV0KCkge1xuICAgIGNvbnN0IHNoaXBzTGVmdCA9IHRoaXMuc2hpcHMuZmlsdGVyKFxuICAgICAgKHNoaXApID0+XG4gICAgICAgIC8vIENoZWNrIGlmIGEgc2hpcCB3aXRoIHRoZSBzYW1lIHNoaXBOYW1lIGFscmVhZHkgZXhpc3RzIGluIHRoZSBmbGVldFxuICAgICAgICAhdGhpcy5nYW1lYm9hcmQucGxhY2VkU2hpcHMuc29tZShcbiAgICAgICAgICAoZXhpc3RpbmdTaGlwKSA9PiBleGlzdGluZ1NoaXAuc2hpcE5hbWUgPT09IHNoaXAuc2hpcE5hbWVcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICAvLyBHZW5lcmF0ZSBzaGlwcyBmb3IgdGhlIHJlbWFpbmluZyBvbmVzXG4gICAgc2hpcHNMZWZ0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTaGlwKHNoaXAuc2hpcE5hbWUsIHNoaXAubGVuZ3RoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdlbmVyYXRlU2hpcChzaGlwTmFtZSwgbGVuZ3RoKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB3aGlsZSAoIXN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gICAgICBjb25zdCBjb29yZHMgPSB0aGlzLnJhbmRvbVBvcygpO1xuICAgICAgc3VjY2VzcyA9IHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwTmFtZSwgbGVuZ3RoLCBjb29yZHMsIGRpcmVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgcmFuZG9tUG9zKCkge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBzaGlwTmFtZSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwTmFtZSA9IHNoaXBOYW1lO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYm9hcmRSZW5kZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiO1xuaW1wb3J0IGluaXRQbGF5ZXJTaGlwcyBmcm9tIFwiLi9tb2R1bGVzL2RyYWdhbmRkcm9wXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5cbmJvYXJkUmVuZGVyKCk7XG5pbml0UGxheWVyU2hpcHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==