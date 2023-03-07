System.register(["jimu-core","jimu-arcgis","jimu-core/react","esri/geometry/support/webMercatorUtils","esri/geometry/Extent","esri/core/reactiveUtils"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/filtered-record-count/src/runtime/widget.css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/filtered-record-count/src/runtime/widget.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./your-extensions/widgets/filtered-record-count/src/runtime/widget.css":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/filtered-record-count/src/runtime/widget.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./widget.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/filtered-record-count/src/runtime/widget.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "esri/core/reactiveUtils":
/*!******************************************!*\
  !*** external "esri/core/reactiveUtils" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__;

/***/ }),

/***/ "esri/geometry/Extent":
/*!***************************************!*\
  !*** external "esri/geometry/Extent" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__;

/***/ }),

/***/ "esri/geometry/support/webMercatorUtils":
/*!*********************************************************!*\
  !*** external "esri/geometry/support/webMercatorUtils" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/filtered-record-count/src/runtime/widget.tsx ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/* harmony import */ var esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/geometry/Extent */ "esri/geometry/Extent");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/core/reactiveUtils */ "esri/core/reactiveUtils");
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget.css */ "./your-extensions/widgets/filtered-record-count/src/runtime/widget.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */







// const { useSelector } = ReactRedux
// since we cannot pass Extent object from MessageAction and cannot convert to
// geographic in MessageAction due to load error using webMercatorUtils
function convertAndFormatCoordinates(coords, dp = 5) {
    // clone incoming coords Object and augment with spatialReference
    const extentProps = Object.assign({ spatialReference: { wkid: 102100 } }, coords);
    const extent = new esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_4__["default"](extentProps);
    const geoExtent = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_3__["default"].webMercatorToGeographic(extent, false);
    return `${geoExtent.xmin.toFixed(dp)}, ${geoExtent.ymin.toFixed(dp)}, ${geoExtent.xmax.toFixed(dp)}, ${geoExtent.ymax.toFixed(dp)}`;
}
function countAllSamples(dataSource) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!dataSource) {
            throw new Error('DataSource cannot be null');
        }
        const startTime = new Date();
        const searchParams = new URLSearchParams([
            ['where', '1=1'],
            ['returnCountOnly', 'true'],
            ['f', 'json']
        ]);
        // TODO replace w/ FeatureLayer query
        const response = yield fetch(dataSource.url + '/query', {
            method: 'POST',
            body: searchParams
        });
        if (!response.ok) {
            console.error('failed to count total records from ' + dataSource.url);
            return;
        }
        // TODO replace with FeatureDataSource#queryCount?
        // dataSource.queryCount({}).then(result => {
        //   return result.count
        // })
        // console.log(`Total record count complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`)
        return response.json();
    });
}
function Widget(props) {
    var _a, _b;
    // console.log('re-rendering filtered-record-count...')
    const [totalRecordCount, setTotalRecordCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [filteredRecordCount, setFilteredRecordCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [serverError, setServerError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const abortControllerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const [mapExtent, setMapExtent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [layerDefinition, setLayerDefinition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const mapLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const layerViewRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!view) {
            return;
        }
        const mapView = view.view;
        // dataSource.getCurrentQueryParams().where and mapview layer.definitionExpression should be equal
        const layer = mapView.map.layers.find(lyr => lyr.title === dataSource.layer.title);
        const jimuLayerView = Object.values(view.jimuLayerViews).find(view => view.layerDataSourceId === dataSource.id);
        let layerView;
        // __esri.LayerView == esri/views/layers/LayerView?
        if (jimuLayerView.view.layer.type === 'feature') {
            layerView = jimuLayerView.view;
        }
        else {
            console.error(`expected FeatureLayerView, but found ${jimuLayerView.view.layer.type}`);
        }
        // use FeatureLayer#queryFeatureCount
        function serverSideFeatureCount() {
            // cancel any running request
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
            abortControllerRef.current = new AbortController();
            const startTime = new Date();
            layer.queryFeatureCount({
                geometry: mapView.extent,
                where: layer.definitionExpression
            }, { signal: abortControllerRef.current.signal }).then(result => {
                console.log(`serverSideFeatureCount complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`);
                console.log('serverSideFeatureCount: ', result);
                setFilteredRecordCount(result);
            }).catch((reason) => {
                if (reason.name === 'AbortError') {
                    console.log('cancelled running request');
                }
                else {
                    console.error('serverSideFeatureCount failed: ', reason);
                    setServerError(true);
                }
            }).finally(() => {
                abortControllerRef.current = null;
            });
        }
        // client-side query only reports on visible features are visible so doesn't work when Webmap scale dependency set
        function clientSideFeatureCount() {
            const startTime = new Date();
            const q = {
                where: layer.definitionExpression || '1=1',
                geometry: mapView.extent
            };
            layerView.queryFeatureCount(q).then(count => {
                console.log(`clientSideFeatureCount complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`);
                console.log('clientSideFeatureCount: ', count);
                setFilteredRecordCount(count);
            }).catch((reason) => {
                console.log('clientSideFeatureCount error: ', reason);
            });
        }
        /*
        // alternate way of performing server-side count using FeatureLayerDataSource#loadCount.
        // Often a little faster than FeatureLayer#queryFeatureCount but no way to cancel
        function dataSourceFeatureCount () {
          // async request timeout idea taken from  Faraz K. Kelhini, "Modern Asynchronous JavaScript"
          const timeOut = 20000
          const failure = new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error(`server failed to respond in ${timeOut} milliseconds`))
            }, timeOut)
          })
    
          const startTime = new Date()
          const queryParams = dataSource?.getCurrentQueryParams()
          Promise.race([
            dataSource.loadCount(queryParams, { widgetId: props.id }),
            failure
          ]).then((count) => {
            console.log(`dataSourceFeatureCount complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`)
            console.log(count)
            setFilteredRecordCount(count)
          }).catch((reason) => {
            console.error('datasourceFeatureCount failed: ', reason)
            setServerError(true)
          })
        }
        */
        setFilteredRecordCount(null);
        setServerError(false);
        if (layerView.suspended) {
            serverSideFeatureCount();
            // dataSourceFeatureCount()
        }
        else {
            // clientSideFeatureCount only produces results when scale threshold has 
            // been crossed and points display
            clientSideFeatureCount();
        }
    }, [mapExtent, layerDefinition]);
    // get state for this widget. Any change in widgetState, e.g. change of map extent
    // or datasource filter, causes widget to re-render
    // const widgetState = useSelector((state: IMState) => {
    //   return state.widgetsState[props.widgetId]
    // })
    // console.log(`rendering filtered-record-count. extent: ${convertAndFormatCoordinates(widgetState?.extent)}, queryParams: ${widgetState?.queryParams}`)
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!view) {
            return;
        }
        // used in server-side query
        mapLayerRef.current = view.view.map.layers.find(lyr => lyr.title === dataSource.layer.title);
        // used in client-side query
        const jimuLayerView = Object.values(view.jimuLayerViews).find(view => view.layerDataSourceId === dataSource.id);
        if (jimuLayerView.view.layer.type === 'feature') {
            layerViewRef.current = jimuLayerView.view;
        }
        else {
            console.error(`expected FeatureLayerView, but found ${jimuLayerView.view.layer.type}`);
        }
        // map redraws graphics layer for most map clicks, so useEffect ensures counts
        // are only updated for extent, filter changes
        const watchHandle = esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__["default"].when(() => !view.view.updating, () => {
            setMapExtent(view.view.extent);
            setLayerDefinition(mapLayerRef.current.definitionExpression);
        });
        return () => {
            // console.log('cleaning up watchHandle...')
            watchHandle.remove();
        };
    }, [view, dataSource]);
    // runs once
    function onDataSourceCreated(ds) {
        if (!ds) {
            throw new Error('no DataSource');
        }
        const featureLayerDataSource = ds;
        setDataSource(featureLayerDataSource);
        countAllSamples(featureLayerDataSource).then((response) => {
            // console.log(`counted ${response.count} total records in ${featureLayerDataSource.url}`)
            setTotalRecordCount(response.count);
        });
    }
    const activeViewChangeHandler = (jmv) => {
        if (!jmv) {
            throw new Error('no MapView');
        }
        setView(jmv);
    };
    function formatCounts() {
        if (totalRecordCount !== null && filteredRecordCount !== null) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
                filteredRecordCount.toLocaleString('en-US'),
                " out of ",
                totalRecordCount.toLocaleString('en-US'),
                " records in view");
        }
        else if (serverError) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "Server Error - please try again");
        }
        else {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "updating...");
        }
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { paddingLeft: '10px' } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onActiveViewChange: activeViewChangeHandler }),
        formatCounts()));
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXJlZC1yZWNvcmQtY291bnQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtFQUFrRTtBQUNuSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQWdUO0FBQ2hUO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNk9BQU87Ozs7QUFJMFA7QUFDbFIsT0FBTyxpRUFBZSw2T0FBTyxJQUFJLG9QQUFjLEdBQUcsb1BBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2ZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQVdHO0FBQ3FFO0FBQ3BDO0FBQ2tCO0FBQzVCO0FBS3FCO0FBR3pDO0FBRXJCLHFDQUFxQztBQUVyQyw4RUFBOEU7QUFDOUUsdUVBQXVFO0FBQ3ZFLFNBQVMsMkJBQTJCLENBQUUsTUFBYyxFQUFFLEtBQWEsQ0FBQztJQUNsRSxpRUFBaUU7SUFDakUsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDO0lBQ2pGLE1BQU0sTUFBTSxHQUFHLElBQUksNERBQU0sQ0FBQyxXQUFXLENBQUM7SUFDdEMsTUFBTSxTQUFTLEdBQUcsc0dBQXdDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBVztJQUNuRixPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDckksQ0FBQztBQUVELFNBQWUsZUFBZSxDQUFFLFVBQStCOztRQUM3RCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztTQUM3QztRQUNELE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFO1FBQzVCLE1BQU0sWUFBWSxHQUFHLElBQUksZUFBZSxDQUFDO1lBQ3ZDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztZQUNoQixDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7U0FDZCxDQUFDO1FBQ0YscUNBQXFDO1FBQ3JDLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsUUFBUSxFQUFFO1lBQ3RELE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLFlBQVk7U0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUNyRSxPQUFNO1NBQ1A7UUFDRCxrREFBa0Q7UUFDbEQsNkNBQTZDO1FBQzdDLHdCQUF3QjtRQUN4QixLQUFLO1FBQ0wsK0dBQStHO1FBQy9HLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRTtJQUN4QixDQUFDO0NBQUE7QUFFYyxTQUFTLE1BQU0sQ0FBRSxLQUErQjs7SUFDN0QsdURBQXVEO0lBQ3ZELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQzlELE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3BFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsK0NBQVEsRUFBMEI7SUFDdEUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRywrQ0FBUSxDQUFjLElBQUksQ0FBQztJQUNuRCxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3JELE1BQU0sa0JBQWtCLEdBQUcsNkNBQU0sRUFBbUI7SUFDcEQsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRywrQ0FBUSxFQUFVO0lBQ3BELE1BQU0sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsR0FBRywrQ0FBUSxFQUFVO0lBQ2hFLE1BQU0sV0FBVyxHQUFHLDZDQUFNLEVBQWdCO0lBQzFDLE1BQU0sWUFBWSxHQUFHLDZDQUFNLEVBQW9CO0lBRS9DLGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU07U0FBRTtRQUVyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN6QixrR0FBa0c7UUFDbEcsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBaUI7UUFDbEcsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixLQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDL0csSUFBSSxTQUEyQjtRQUMvQixtREFBbUQ7UUFDbkQsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQy9DLFNBQVMsR0FBRyxhQUFhLENBQUMsSUFBd0I7U0FDbkQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZGO1FBRUQscUNBQXFDO1FBQ3JDLFNBQVMsc0JBQXNCO1lBQzdCLDZCQUE2QjtZQUM3QixJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDOUIsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTthQUNuQztZQUVELGtCQUFrQixDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQWUsRUFBRTtZQUNsRCxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRTtZQUM1QixLQUFLLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3RCLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDeEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0I7YUFDbEMsRUFDRCxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQztnQkFDaEgsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUM7Z0JBQy9DLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztpQkFDekM7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUM7b0JBQ3hELGNBQWMsQ0FBQyxJQUFJLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsSUFBSTtZQUNuQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQsa0hBQWtIO1FBQ2xILFNBQVMsc0JBQXNCO1lBQzdCLE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFO1lBRTVCLE1BQU0sQ0FBQyxHQUFHO2dCQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLElBQUksS0FBSztnQkFDMUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2FBQ3pCO1lBQ0QsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDO2dCQUNoSCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQztnQkFDOUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sQ0FBQztZQUN2RCxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBMEJFO1FBQ0Ysc0JBQXNCLENBQUMsSUFBSSxDQUFDO1FBQzVCLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckIsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLHNCQUFzQixFQUFFO1lBQ3hCLDJCQUEyQjtTQUM1QjthQUFNO1lBQ0wseUVBQXlFO1lBQ3pFLGtDQUFrQztZQUNsQyxzQkFBc0IsRUFBRTtTQUN6QjtJQUNILENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUVoQyxrRkFBa0Y7SUFDbEYsbURBQW1EO0lBQ25ELHdEQUF3RDtJQUN4RCw4Q0FBOEM7SUFDOUMsS0FBSztJQUNMLHdKQUF3SjtJQUV4SixnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFNO1NBQUU7UUFDckIsNEJBQTRCO1FBQzVCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQWlCO1FBRTVHLDRCQUE0QjtRQUM1QixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEtBQUssVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUMvRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDL0MsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBd0I7U0FDOUQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZGO1FBRUQsOEVBQThFO1FBQzlFLDhDQUE4QztRQUM5QyxNQUFNLFdBQVcsR0FBRyxvRUFBa0IsQ0FDcEMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDekIsR0FBRyxFQUFFO1lBQ0gsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzlCLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDOUQsQ0FBQyxDQUNGO1FBRUQsT0FBTyxHQUFHLEVBQUU7WUFDViw0Q0FBNEM7WUFDNUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtRQUN0QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRXRCLFlBQVk7SUFDWixTQUFTLG1CQUFtQixDQUFFLEVBQWM7UUFDMUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDO1NBQUU7UUFFN0MsTUFBTSxzQkFBc0IsR0FBRyxFQUE0QjtRQUMzRCxhQUFhLENBQUMsc0JBQXNCLENBQUM7UUFDckMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDeEQsMEZBQTBGO1lBQzFGLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDckMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxHQUFnQixFQUFFLEVBQUU7UUFDbkQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDO1NBQUU7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTLFlBQVk7UUFDbkIsSUFBSSxnQkFBZ0IsS0FBSyxJQUFJLElBQUksbUJBQW1CLEtBQUssSUFBSSxFQUFFO1lBQzdELE9BQU87Z0JBQU8sbUJBQW1CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7Z0JBQVUsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzttQ0FBd0I7U0FDcEk7YUFBTSxJQUFJLFdBQVcsRUFBRTtZQUN0QixPQUFPLCtGQUE0QztTQUNwRDthQUFNO1lBQ0wsT0FBTywyRUFBd0I7U0FDaEM7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUNMLHdEQUFLLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7UUFDakMsK0NBQUMsMERBQW1CLElBQ2xCLGFBQWEsRUFBRSxXQUFLLENBQUMsY0FBYywwQ0FBRyxDQUFDLENBQUMsRUFDeEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQ2xCLG1CQUFtQixFQUFFLG1CQUFtQixHQUN4QztRQUNGLCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLHVCQUF1QixHQUMzQztRQUVELFlBQVksRUFBRSxDQUNYLENBQ1A7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRlcmVkLXJlY29yZC1jb3VudC9zcmMvcnVudGltZS93aWRnZXQuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdGVyZWQtcmVjb3JkLWNvdW50L3NyYy9ydW50aW1lL3dpZGdldC5jc3M/ODlmZiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvRXh0ZW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRlcmVkLXJlY29yZC1jb3VudC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi93aWRnZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi93aWRnZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2NvcmVfcmVhY3RpdmVVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X0V4dGVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X3N1cHBvcnRfd2ViTWVyY2F0b3JVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICBBbGxXaWRnZXRQcm9wcyxcbiAganN4LFxuICBJTVN0YXRlLFxuICBSZWFjdFJlZHV4LFxuICBRdWVyaWFibGVEYXRhU291cmNlLFxuICBEYXRhU291cmNlLFxuICBEYXRhU291cmNlQ29tcG9uZW50LFxuICBGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgU3FsUXVlcnlQYXJhbXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50LCBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3ZWJNZXJjYXRvclV0aWxzIGZyb20gJ2VzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzJ1xuaW1wb3J0IEV4dGVudCBmcm9tICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuaW1wb3J0IEZlYXR1cmVMYXllclZpZXcgZnJvbSAnZXNyaS92aWV3cy9sYXllcnMvRmVhdHVyZUxheWVyVmlldydcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xuaW1wb3J0IHJlYWN0aXZlVXRpbHMsIHsgd2F0Y2ggfSBmcm9tICdlc3JpL2NvcmUvcmVhY3RpdmVVdGlscydcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldydcbmltcG9ydCBMYXllclZpZXcgZnJvbSAnZXNyaS92aWV3cy9sYXllcnMvTGF5ZXJWaWV3J1xuaW1wb3J0ICcuL3dpZGdldC5jc3MnXG5cbi8vIGNvbnN0IHsgdXNlU2VsZWN0b3IgfSA9IFJlYWN0UmVkdXhcblxuLy8gc2luY2Ugd2UgY2Fubm90IHBhc3MgRXh0ZW50IG9iamVjdCBmcm9tIE1lc3NhZ2VBY3Rpb24gYW5kIGNhbm5vdCBjb252ZXJ0IHRvXG4vLyBnZW9ncmFwaGljIGluIE1lc3NhZ2VBY3Rpb24gZHVlIHRvIGxvYWQgZXJyb3IgdXNpbmcgd2ViTWVyY2F0b3JVdGlsc1xuZnVuY3Rpb24gY29udmVydEFuZEZvcm1hdENvb3JkaW5hdGVzIChjb29yZHM6IG9iamVjdCwgZHA6IG51bWJlciA9IDUpIHtcbiAgLy8gY2xvbmUgaW5jb21pbmcgY29vcmRzIE9iamVjdCBhbmQgYXVnbWVudCB3aXRoIHNwYXRpYWxSZWZlcmVuY2VcbiAgY29uc3QgZXh0ZW50UHJvcHMgPSBPYmplY3QuYXNzaWduKHsgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfSB9LCBjb29yZHMpXG4gIGNvbnN0IGV4dGVudCA9IG5ldyBFeHRlbnQoZXh0ZW50UHJvcHMpXG4gIGNvbnN0IGdlb0V4dGVudCA9IHdlYk1lcmNhdG9yVXRpbHMud2ViTWVyY2F0b3JUb0dlb2dyYXBoaWMoZXh0ZW50LCBmYWxzZSkgYXMgRXh0ZW50XG4gIHJldHVybiBgJHtnZW9FeHRlbnQueG1pbi50b0ZpeGVkKGRwKX0sICR7Z2VvRXh0ZW50LnltaW4udG9GaXhlZChkcCl9LCAke2dlb0V4dGVudC54bWF4LnRvRml4ZWQoZHApfSwgJHtnZW9FeHRlbnQueW1heC50b0ZpeGVkKGRwKX1gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvdW50QWxsU2FtcGxlcyAoZGF0YVNvdXJjZTogUXVlcmlhYmxlRGF0YVNvdXJjZSkge1xuICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGFTb3VyY2UgY2Fubm90IGJlIG51bGwnKVxuICB9XG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKClcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgWyd3aGVyZScsICcxPTEnXSxcbiAgICBbJ3JldHVybkNvdW50T25seScsICd0cnVlJ10sXG4gICAgWydmJywgJ2pzb24nXVxuICBdKVxuICAvLyBUT0RPIHJlcGxhY2Ugdy8gRmVhdHVyZUxheWVyIHF1ZXJ5XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVNvdXJjZS51cmwgKyAnL3F1ZXJ5Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IHNlYXJjaFBhcmFtc1xuICB9KVxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGNvdW50IHRvdGFsIHJlY29yZHMgZnJvbSAnICsgZGF0YVNvdXJjZS51cmwpXG4gICAgcmV0dXJuXG4gIH1cbiAgLy8gVE9ETyByZXBsYWNlIHdpdGggRmVhdHVyZURhdGFTb3VyY2UjcXVlcnlDb3VudD9cbiAgLy8gZGF0YVNvdXJjZS5xdWVyeUNvdW50KHt9KS50aGVuKHJlc3VsdCA9PiB7XG4gIC8vICAgcmV0dXJuIHJlc3VsdC5jb3VudFxuICAvLyB9KVxuICAvLyBjb25zb2xlLmxvZyhgVG90YWwgcmVjb3JkIGNvdW50IGNvbXBsZXRlIGluICR7KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwfSBzZWNvbmRzYClcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgLy8gY29uc29sZS5sb2coJ3JlLXJlbmRlcmluZyBmaWx0ZXJlZC1yZWNvcmQtY291bnQuLi4nKVxuICBjb25zdCBbdG90YWxSZWNvcmRDb3VudCwgc2V0VG90YWxSZWNvcmRDb3VudF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZmlsdGVyZWRSZWNvcmRDb3VudCwgc2V0RmlsdGVyZWRSZWNvcmRDb3VudF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSB1c2VTdGF0ZTxGZWF0dXJlTGF5ZXJEYXRhU291cmNlPigpXG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PihudWxsKVxuICBjb25zdCBbc2VydmVyRXJyb3IsIHNldFNlcnZlckVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBhYm9ydENvbnRyb2xsZXJSZWYgPSB1c2VSZWY8QWJvcnRDb250cm9sbGVyPigpXG4gIGNvbnN0IFttYXBFeHRlbnQsIHNldE1hcEV4dGVudF0gPSB1c2VTdGF0ZTxFeHRlbnQ+KClcbiAgY29uc3QgW2xheWVyRGVmaW5pdGlvbiwgc2V0TGF5ZXJEZWZpbml0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxuICBjb25zdCBtYXBMYXllclJlZiA9IHVzZVJlZjxGZWF0dXJlTGF5ZXI+KClcbiAgY29uc3QgbGF5ZXJWaWV3UmVmID0gdXNlUmVmPEZlYXR1cmVMYXllclZpZXc+KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmlldykgeyByZXR1cm4gfVxuXG4gICAgY29uc3QgbWFwVmlldyA9IHZpZXcudmlld1xuICAgIC8vIGRhdGFTb3VyY2UuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zKCkud2hlcmUgYW5kIG1hcHZpZXcgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gc2hvdWxkIGJlIGVxdWFsXG4gICAgY29uc3QgbGF5ZXIgPSBtYXBWaWV3Lm1hcC5sYXllcnMuZmluZChseXIgPT4gbHlyLnRpdGxlID09PSBkYXRhU291cmNlLmxheWVyLnRpdGxlKSBhcyBGZWF0dXJlTGF5ZXJcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3ID0gT2JqZWN0LnZhbHVlcyh2aWV3LmppbXVMYXllclZpZXdzKS5maW5kKHZpZXcgPT4gdmlldy5sYXllckRhdGFTb3VyY2VJZCA9PT0gZGF0YVNvdXJjZS5pZClcbiAgICBsZXQgbGF5ZXJWaWV3OiBGZWF0dXJlTGF5ZXJWaWV3XG4gICAgLy8gX19lc3JpLkxheWVyVmlldyA9PSBlc3JpL3ZpZXdzL2xheWVycy9MYXllclZpZXc/XG4gICAgaWYgKGppbXVMYXllclZpZXcudmlldy5sYXllci50eXBlID09PSAnZmVhdHVyZScpIHtcbiAgICAgIGxheWVyVmlldyA9IGppbXVMYXllclZpZXcudmlldyBhcyBGZWF0dXJlTGF5ZXJWaWV3XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYGV4cGVjdGVkIEZlYXR1cmVMYXllclZpZXcsIGJ1dCBmb3VuZCAke2ppbXVMYXllclZpZXcudmlldy5sYXllci50eXBlfWApXG4gICAgfVxuXG4gICAgLy8gdXNlIEZlYXR1cmVMYXllciNxdWVyeUZlYXR1cmVDb3VudFxuICAgIGZ1bmN0aW9uIHNlcnZlclNpZGVGZWF0dXJlQ291bnQgKCkge1xuICAgICAgLy8gY2FuY2VsIGFueSBydW5uaW5nIHJlcXVlc3RcbiAgICAgIGlmIChhYm9ydENvbnRyb2xsZXJSZWYuY3VycmVudCkge1xuICAgICAgICBhYm9ydENvbnRyb2xsZXJSZWYuY3VycmVudC5hYm9ydCgpXG4gICAgICB9XG5cbiAgICAgIGFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50ID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpXG4gICAgICBsYXllci5xdWVyeUZlYXR1cmVDb3VudCh7XG4gICAgICAgIGdlb21ldHJ5OiBtYXBWaWV3LmV4dGVudCxcbiAgICAgICAgd2hlcmU6IGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uXG4gICAgICB9LFxuICAgICAgeyBzaWduYWw6IGFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50LnNpZ25hbCB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzZXJ2ZXJTaWRlRmVhdHVyZUNvdW50IGNvbXBsZXRlIGluICR7KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwfSBzZWNvbmRzYClcbiAgICAgICAgY29uc29sZS5sb2coJ3NlcnZlclNpZGVGZWF0dXJlQ291bnQ6ICcsIHJlc3VsdClcbiAgICAgICAgc2V0RmlsdGVyZWRSZWNvcmRDb3VudChyZXN1bHQpXG4gICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgIGlmIChyZWFzb24ubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbGxlZCBydW5uaW5nIHJlcXVlc3QnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NlcnZlclNpZGVGZWF0dXJlQ291bnQgZmFpbGVkOiAnLCByZWFzb24pXG4gICAgICAgICAgc2V0U2VydmVyRXJyb3IodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBjbGllbnQtc2lkZSBxdWVyeSBvbmx5IHJlcG9ydHMgb24gdmlzaWJsZSBmZWF0dXJlcyBhcmUgdmlzaWJsZSBzbyBkb2Vzbid0IHdvcmsgd2hlbiBXZWJtYXAgc2NhbGUgZGVwZW5kZW5jeSBzZXRcbiAgICBmdW5jdGlvbiBjbGllbnRTaWRlRmVhdHVyZUNvdW50ICgpIHtcbiAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKClcblxuICAgICAgY29uc3QgcSA9IHtcbiAgICAgICAgd2hlcmU6IGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uIHx8ICcxPTEnLFxuICAgICAgICBnZW9tZXRyeTogbWFwVmlldy5leHRlbnRcbiAgICAgIH1cbiAgICAgIGxheWVyVmlldy5xdWVyeUZlYXR1cmVDb3VudChxKS50aGVuKGNvdW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWVudFNpZGVGZWF0dXJlQ291bnQgY29tcGxldGUgaW4gJHsobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDB9IHNlY29uZHNgKVxuICAgICAgICBjb25zb2xlLmxvZygnY2xpZW50U2lkZUZlYXR1cmVDb3VudDogJywgY291bnQpXG4gICAgICAgIHNldEZpbHRlcmVkUmVjb3JkQ291bnQoY291bnQpXG4gICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGllbnRTaWRlRmVhdHVyZUNvdW50IGVycm9yOiAnLCByZWFzb24pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qXG4gICAgLy8gYWx0ZXJuYXRlIHdheSBvZiBwZXJmb3JtaW5nIHNlcnZlci1zaWRlIGNvdW50IHVzaW5nIEZlYXR1cmVMYXllckRhdGFTb3VyY2UjbG9hZENvdW50LlxuICAgIC8vIE9mdGVuIGEgbGl0dGxlIGZhc3RlciB0aGFuIEZlYXR1cmVMYXllciNxdWVyeUZlYXR1cmVDb3VudCBidXQgbm8gd2F5IHRvIGNhbmNlbFxuICAgIGZ1bmN0aW9uIGRhdGFTb3VyY2VGZWF0dXJlQ291bnQgKCkge1xuICAgICAgLy8gYXN5bmMgcmVxdWVzdCB0aW1lb3V0IGlkZWEgdGFrZW4gZnJvbSAgRmFyYXogSy4gS2VsaGluaSwgXCJNb2Rlcm4gQXN5bmNocm9ub3VzIEphdmFTY3JpcHRcIlxuICAgICAgY29uc3QgdGltZU91dCA9IDIwMDAwXG4gICAgICBjb25zdCBmYWlsdXJlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBzZXJ2ZXIgZmFpbGVkIHRvIHJlc3BvbmQgaW4gJHt0aW1lT3V0fSBtaWxsaXNlY29uZHNgKSlcbiAgICAgICAgfSwgdGltZU91dClcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKClcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gZGF0YVNvdXJjZT8uZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zKClcbiAgICAgIFByb21pc2UucmFjZShbXG4gICAgICAgIGRhdGFTb3VyY2UubG9hZENvdW50KHF1ZXJ5UGFyYW1zLCB7IHdpZGdldElkOiBwcm9wcy5pZCB9KSxcbiAgICAgICAgZmFpbHVyZVxuICAgICAgXSkudGhlbigoY291bnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGRhdGFTb3VyY2VGZWF0dXJlQ291bnQgY29tcGxldGUgaW4gJHsobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDB9IHNlY29uZHNgKVxuICAgICAgICBjb25zb2xlLmxvZyhjb3VudClcbiAgICAgICAgc2V0RmlsdGVyZWRSZWNvcmRDb3VudChjb3VudClcbiAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignZGF0YXNvdXJjZUZlYXR1cmVDb3VudCBmYWlsZWQ6ICcsIHJlYXNvbilcbiAgICAgICAgc2V0U2VydmVyRXJyb3IodHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuICAgICovXG4gICAgc2V0RmlsdGVyZWRSZWNvcmRDb3VudChudWxsKVxuICAgIHNldFNlcnZlckVycm9yKGZhbHNlKVxuICAgIGlmIChsYXllclZpZXcuc3VzcGVuZGVkKSB7XG4gICAgICBzZXJ2ZXJTaWRlRmVhdHVyZUNvdW50KClcbiAgICAgIC8vIGRhdGFTb3VyY2VGZWF0dXJlQ291bnQoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjbGllbnRTaWRlRmVhdHVyZUNvdW50IG9ubHkgcHJvZHVjZXMgcmVzdWx0cyB3aGVuIHNjYWxlIHRocmVzaG9sZCBoYXMgXG4gICAgICAvLyBiZWVuIGNyb3NzZWQgYW5kIHBvaW50cyBkaXNwbGF5XG4gICAgICBjbGllbnRTaWRlRmVhdHVyZUNvdW50KClcbiAgICB9XG4gIH0sIFttYXBFeHRlbnQsIGxheWVyRGVmaW5pdGlvbl0pXG5cbiAgLy8gZ2V0IHN0YXRlIGZvciB0aGlzIHdpZGdldC4gQW55IGNoYW5nZSBpbiB3aWRnZXRTdGF0ZSwgZS5nLiBjaGFuZ2Ugb2YgbWFwIGV4dGVudFxuICAvLyBvciBkYXRhc291cmNlIGZpbHRlciwgY2F1c2VzIHdpZGdldCB0byByZS1yZW5kZXJcbiAgLy8gY29uc3Qgd2lkZ2V0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHtcbiAgLy8gICByZXR1cm4gc3RhdGUud2lkZ2V0c1N0YXRlW3Byb3BzLndpZGdldElkXVxuICAvLyB9KVxuICAvLyBjb25zb2xlLmxvZyhgcmVuZGVyaW5nIGZpbHRlcmVkLXJlY29yZC1jb3VudC4gZXh0ZW50OiAke2NvbnZlcnRBbmRGb3JtYXRDb29yZGluYXRlcyh3aWRnZXRTdGF0ZT8uZXh0ZW50KX0sIHF1ZXJ5UGFyYW1zOiAke3dpZGdldFN0YXRlPy5xdWVyeVBhcmFtc31gKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2aWV3KSB7IHJldHVybiB9XG4gICAgLy8gdXNlZCBpbiBzZXJ2ZXItc2lkZSBxdWVyeVxuICAgIG1hcExheWVyUmVmLmN1cnJlbnQgPSB2aWV3LnZpZXcubWFwLmxheWVycy5maW5kKGx5ciA9PiBseXIudGl0bGUgPT09IGRhdGFTb3VyY2UubGF5ZXIudGl0bGUpIGFzIEZlYXR1cmVMYXllclxuXG4gICAgLy8gdXNlZCBpbiBjbGllbnQtc2lkZSBxdWVyeVxuICAgIGNvbnN0IGppbXVMYXllclZpZXcgPSBPYmplY3QudmFsdWVzKHZpZXcuamltdUxheWVyVmlld3MpLmZpbmQodmlldyA9PiB2aWV3LmxheWVyRGF0YVNvdXJjZUlkID09PSBkYXRhU291cmNlLmlkKVxuICAgIGlmIChqaW11TGF5ZXJWaWV3LnZpZXcubGF5ZXIudHlwZSA9PT0gJ2ZlYXR1cmUnKSB7XG4gICAgICBsYXllclZpZXdSZWYuY3VycmVudCA9IGppbXVMYXllclZpZXcudmlldyBhcyBGZWF0dXJlTGF5ZXJWaWV3XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYGV4cGVjdGVkIEZlYXR1cmVMYXllclZpZXcsIGJ1dCBmb3VuZCAke2ppbXVMYXllclZpZXcudmlldy5sYXllci50eXBlfWApXG4gICAgfVxuXG4gICAgLy8gbWFwIHJlZHJhd3MgZ3JhcGhpY3MgbGF5ZXIgZm9yIG1vc3QgbWFwIGNsaWNrcywgc28gdXNlRWZmZWN0IGVuc3VyZXMgY291bnRzXG4gICAgLy8gYXJlIG9ubHkgdXBkYXRlZCBmb3IgZXh0ZW50LCBmaWx0ZXIgY2hhbmdlc1xuICAgIGNvbnN0IHdhdGNoSGFuZGxlID0gcmVhY3RpdmVVdGlscy53aGVuKFxuICAgICAgKCkgPT4gIXZpZXcudmlldy51cGRhdGluZyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgc2V0TWFwRXh0ZW50KHZpZXcudmlldy5leHRlbnQpXG4gICAgICAgIHNldExheWVyRGVmaW5pdGlvbihtYXBMYXllclJlZi5jdXJyZW50LmRlZmluaXRpb25FeHByZXNzaW9uKVxuICAgICAgfVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2xlYW5pbmcgdXAgd2F0Y2hIYW5kbGUuLi4nKVxuICAgICAgd2F0Y2hIYW5kbGUucmVtb3ZlKClcbiAgICB9XG4gIH0sIFt2aWV3LCBkYXRhU291cmNlXSlcblxuICAvLyBydW5zIG9uY2VcbiAgZnVuY3Rpb24gb25EYXRhU291cmNlQ3JlYXRlZCAoZHM6IERhdGFTb3VyY2UpIHtcbiAgICBpZiAoIWRzKSB7IHRocm93IG5ldyBFcnJvcignbm8gRGF0YVNvdXJjZScpIH1cblxuICAgIGNvbnN0IGZlYXR1cmVMYXllckRhdGFTb3VyY2UgPSBkcyBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXG4gICAgc2V0RGF0YVNvdXJjZShmZWF0dXJlTGF5ZXJEYXRhU291cmNlKVxuICAgIGNvdW50QWxsU2FtcGxlcyhmZWF0dXJlTGF5ZXJEYXRhU291cmNlKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coYGNvdW50ZWQgJHtyZXNwb25zZS5jb3VudH0gdG90YWwgcmVjb3JkcyBpbiAke2ZlYXR1cmVMYXllckRhdGFTb3VyY2UudXJsfWApXG4gICAgICBzZXRUb3RhbFJlY29yZENvdW50KHJlc3BvbnNlLmNvdW50KVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYgKCFqbXYpIHsgdGhyb3cgbmV3IEVycm9yKCdubyBNYXBWaWV3JykgfVxuICAgIHNldFZpZXcoam12KVxuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0Q291bnRzKCkge1xuICAgIGlmICh0b3RhbFJlY29yZENvdW50ICE9PSBudWxsICYmIGZpbHRlcmVkUmVjb3JkQ291bnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiA8c3Bhbj57ZmlsdGVyZWRSZWNvcmRDb3VudC50b0xvY2FsZVN0cmluZygnZW4tVVMnKX0gb3V0IG9mIHt0b3RhbFJlY29yZENvdW50LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfSByZWNvcmRzIGluIHZpZXc8L3NwYW4+XG4gICAgfSBlbHNlIGlmIChzZXJ2ZXJFcnJvcikge1xuICAgICAgcmV0dXJuIDxzcGFuPlNlcnZlciBFcnJvciAtIHBsZWFzZSB0cnkgYWdhaW48L3NwYW4+XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8c3Bhbj51cGRhdGluZy4uLjwvc3Bhbj5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JyB9fT5cbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3Byb3BzLnVzZURhdGFTb3VyY2VzPy5bMF19XG4gICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17b25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgIC8+XG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgLz5cblxuICAgICAge2Zvcm1hdENvdW50cygpfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=