System.register(["jimu-core","jimu-core/react","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: "Get Map Coordinates",
    latLon: "Lat/Lon",
    zoom: "Zoom",
    latLonWillBeHere: "Lat/Lon (None - please mouse over map)"
});


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
/******/ 			// no module.id needed
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
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts");
/** @jsx jsx */
/**
  Licensing

  Copyright 2021 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
    var _a;
    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [scale, setScale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [mapViewReady, setMapViewReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            // When the extent moves, update the state with all the updated values.
            jmv.view.watch("extent", evt => {
                setLatitude(jmv.view.center.latitude.toFixed(3));
                setLongitude(jmv.view.center.longitude.toFixed(3));
                setScale(Math.round(jmv.view.scale * 1) / 1);
                setZoom(jmv.view.zoom);
                // this is set to false initially, then once we have the first set of data (and all subsequent) it's set
                // to true, so that we can hide the text until everything is ready:
                setMapViewReady(true);
            });
            // When the pointer moves, take the pointer location and create a Point
            // Geometry out of it (`view.toMap(...)`), then update the state.
            jmv.view.on("pointer-move", evt => {
                const point = jmv.view.toMap({
                    x: evt.x,
                    y: evt.y
                });
                setLatitude(point.latitude.toFixed(3));
                setLongitude(point.longitude.toFixed(3));
                setScale(Math.round(jmv.view.scale * 1) / 1);
                setZoom(jmv.view.zoom);
                setMapViewReady(true);
            });
        }
    };
    let sections = [];
    sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
        _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].latLon,
        " ",
        latitude,
        ", ",
        longitude));
    if (props.config.showZoom === true) {
        sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
            "Zoom ",
            zoom.toFixed(0)));
    }
    if (props.config.showScale === true) {
        sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
            "Scale 1:",
            scale));
    }
    // We have 1, 2, or 3 JSX Elements in our array, we want to join them
    // with " | " between them. You cannot use `sections.join(" | ")`, sadly.
    // So we use array.reduce(...) to return an array of JSX elements.
    const allSections = sections.reduce((previousValue, currentValue) => {
        return previousValue === null
            ? [currentValue]
            : [...previousValue, " | ", currentValue];
    }, null);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-get-map-coordinates jimu-widget m-2" },
        props.hasOwnProperty("useMapWidgetIds") &&
            props.useMapWidgetIds &&
            props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, mapViewReady === true ? allSections : _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].latLonWillBeHere)));
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsTUFBTSxFQUFFLFNBQVM7SUFDakIsSUFBSSxFQUFFLE1BQU07SUFDWixnQkFBZ0IsRUFBRSx3Q0FBd0M7Q0FDM0QsRUFBQzs7Ozs7Ozs7Ozs7O0FDTEY7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUM4QztBQUNmO0FBRStCO0FBSVg7QUFFckQsNkJBQWUsb0NBQVUsS0FBK0I7O0lBQ3RELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsK0NBQVEsQ0FBUyxFQUFFLENBQUM7SUFDcEQsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRywrQ0FBUSxDQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsK0NBQVEs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QyxHQUFHLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVQsT0FBTyxDQUNMLHdEQUFLLFNBQVMsRUFBQyw0Q0FBNEM7UUFDeEQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QyxLQUFLLENBQUMsZUFBZTtZQUNyQixLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FDcEMsK0NBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFDMUMsa0JBQWtCLEVBQUUsdUJBQXVCLEdBQzNDLENBQ0g7UUFHSCwwREFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLDhFQUFnQyxDQUFLLENBQzNFLENBQ1AsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZ2V0LW1hcC1jb29yZGluYXRlcy9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZ2V0LW1hcC1jb29yZGluYXRlcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiBcIkdldCBNYXAgQ29vcmRpbmF0ZXNcIixcbiAgbGF0TG9uOiBcIkxhdC9Mb25cIixcbiAgem9vbTogXCJab29tXCIsXG4gIGxhdExvbldpbGxCZUhlcmU6IFwiTGF0L0xvbiAoTm9uZSAtIHBsZWFzZSBtb3VzZSBvdmVyIG1hcClcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMSBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgQWxsV2lkZ2V0UHJvcHMsIGpzeCB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcblxuaW1wb3J0IFBvaW50IGZyb20gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCI7XG5cbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSBcIi4vdHJhbnNsYXRpb25zL2RlZmF1bHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgW2xhdGl0dWRlLCBzZXRMYXRpdHVkZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXG4gIGNvbnN0IFtsb25naXR1ZGUsIHNldExvbmdpdHVkZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbc2NhbGUsIHNldFNjYWxlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFttYXBWaWV3UmVhZHksIHNldE1hcFZpZXdSZWFkeV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmIChqbXYpIHtcblxuICAgICAgLy8gV2hlbiB0aGUgZXh0ZW50IG1vdmVzLCB1cGRhdGUgdGhlIHN0YXRlIHdpdGggYWxsIHRoZSB1cGRhdGVkIHZhbHVlcy5cbiAgICAgIGptdi52aWV3LndhdGNoKFwiZXh0ZW50XCIsIGV2dCA9PiB7XG4gICAgICAgIHNldExhdGl0dWRlKGptdi52aWV3LmNlbnRlci5sYXRpdHVkZS50b0ZpeGVkKDMpKTtcbiAgICAgICAgc2V0TG9uZ2l0dWRlKGptdi52aWV3LmNlbnRlci5sb25naXR1ZGUudG9GaXhlZCgzKSk7XG4gICAgICAgIHNldFNjYWxlKE1hdGgucm91bmQoam12LnZpZXcuc2NhbGUgKiAxKSAvIDEpO1xuICAgICAgICBzZXRab29tKGptdi52aWV3Lnpvb20pO1xuXG4gICAgICAgIC8vIHRoaXMgaXMgc2V0IHRvIGZhbHNlIGluaXRpYWxseSwgdGhlbiBvbmNlIHdlIGhhdmUgdGhlIGZpcnN0IHNldCBvZiBkYXRhIChhbmQgYWxsIHN1YnNlcXVlbnQpIGl0J3Mgc2V0XG4gICAgICAgIC8vIHRvIHRydWUsIHNvIHRoYXQgd2UgY2FuIGhpZGUgdGhlIHRleHQgdW50aWwgZXZlcnl0aGluZyBpcyByZWFkeTpcbiAgICAgICAgc2V0TWFwVmlld1JlYWR5KHRydWUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFdoZW4gdGhlIHBvaW50ZXIgbW92ZXMsIHRha2UgdGhlIHBvaW50ZXIgbG9jYXRpb24gYW5kIGNyZWF0ZSBhIFBvaW50XG4gICAgICAvLyBHZW9tZXRyeSBvdXQgb2YgaXQgKGB2aWV3LnRvTWFwKC4uLilgKSwgdGhlbiB1cGRhdGUgdGhlIHN0YXRlLlxuICAgICAgam12LnZpZXcub24oXCJwb2ludGVyLW1vdmVcIiwgZXZ0ID0+IHtcbiAgICAgICAgY29uc3QgcG9pbnQ6IFBvaW50ID0gam12LnZpZXcudG9NYXAoe1xuICAgICAgICAgIHg6IGV2dC54LFxuICAgICAgICAgIHk6IGV2dC55XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRMYXRpdHVkZShwb2ludC5sYXRpdHVkZS50b0ZpeGVkKDMpKTtcbiAgICAgICAgc2V0TG9uZ2l0dWRlKHBvaW50LmxvbmdpdHVkZS50b0ZpeGVkKDMpKTtcbiAgICAgICAgc2V0U2NhbGUoTWF0aC5yb3VuZChqbXYudmlldy5zY2FsZSAqIDEpIC8gMSk7XG4gICAgICAgIHNldFpvb20oam12LnZpZXcuem9vbSk7XG4gICAgICAgIHNldE1hcFZpZXdSZWFkeSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBsZXQgc2VjdGlvbnMgPSBbXTtcblxuICBzZWN0aW9ucy5wdXNoKFxuICAgIDxzcGFuPlxuICAgICAge2RlZmF1bHRNZXNzYWdlcy5sYXRMb259IHtsYXRpdHVkZX0sIHtsb25naXR1ZGV9XG4gICAgPC9zcGFuPlxuICApO1xuXG4gIGlmIChwcm9wcy5jb25maWcuc2hvd1pvb20gPT09IHRydWUpIHtcbiAgICBzZWN0aW9ucy5wdXNoKDxzcGFuPlpvb20ge3pvb20udG9GaXhlZCgwKX08L3NwYW4+KTtcbiAgfVxuXG4gIGlmIChwcm9wcy5jb25maWcuc2hvd1NjYWxlID09PSB0cnVlKSB7XG4gICAgc2VjdGlvbnMucHVzaCg8c3Bhbj5TY2FsZSAxOntzY2FsZX08L3NwYW4+KTtcbiAgfVxuXG4gIC8vIFdlIGhhdmUgMSwgMiwgb3IgMyBKU1ggRWxlbWVudHMgaW4gb3VyIGFycmF5LCB3ZSB3YW50IHRvIGpvaW4gdGhlbVxuICAvLyB3aXRoIFwiIHwgXCIgYmV0d2VlbiB0aGVtLiBZb3UgY2Fubm90IHVzZSBgc2VjdGlvbnMuam9pbihcIiB8IFwiKWAsIHNhZGx5LlxuICAvLyBTbyB3ZSB1c2UgYXJyYXkucmVkdWNlKC4uLikgdG8gcmV0dXJuIGFuIGFycmF5IG9mIEpTWCBlbGVtZW50cy5cbiAgY29uc3QgYWxsU2VjdGlvbnMgPSBzZWN0aW9ucy5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlID09PSBudWxsXG4gICAgICA/IFtjdXJyZW50VmFsdWVdXG4gICAgICA6IFsuLi5wcmV2aW91c1ZhbHVlLCBcIiB8IFwiLCBjdXJyZW50VmFsdWVdO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWdldC1tYXAtY29vcmRpbmF0ZXMgamltdS13aWRnZXQgbS0yXCI+XG4gICAgICB7cHJvcHMuaGFzT3duUHJvcGVydHkoXCJ1c2VNYXBXaWRnZXRJZHNcIikgJiZcbiAgICAgICAgcHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICB7LyogT25seSBzaG93IHRoZSBkYXRhIG9uY2UgdGhlIE1hcFZpZXcgaXMgcmVhZHkgKi99XG4gICAgICA8cD57bWFwVmlld1JlYWR5ID09PSB0cnVlID8gYWxsU2VjdGlvbnMgOiBkZWZhdWx0TWVzc2FnZXMubGF0TG9uV2lsbEJlSGVyZX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=