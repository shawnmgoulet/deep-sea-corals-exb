/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
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

/***/ "./jimu-core/lib/set-public-path.ts":
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.\n * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.\n * */\n// eslint-disable-next-line\n// @ts-ignore\n__webpack_require__.p = window.jimuConfig.baseUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHM/OGQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./jimu-core/lib/set-public-path.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/map-update-status/src/runtime/widget.tsx":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/map-update-status/src/runtime/widget.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/** @jsx jsx */\n\n\n\nfunction Widget(props) {\n    var _a;\n    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isUpdating, setIsUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const timeoutId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const timeoutForMapUpdate = 30000;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        if (!view) {\n            return;\n        }\n        function setMapUpdateTimeout() {\n            timeoutId.current = setTimeout(overrideMapStatus, timeoutForMapUpdate);\n        }\n        function overrideMapStatus() {\n            console.warn(`forcing MapView 'updating' status to 'false' after waiting for ${timeoutForMapUpdate / 1000} seconds`);\n            setIsUpdating(false);\n        }\n        const mapView = view.view;\n        const updatingWatchHandle = mapView.watch('updating', (newStatus) => {\n            // don't allow isUpdating to remain true for > 30 secs\n            if (newStatus) {\n                setMapUpdateTimeout();\n            }\n            else {\n                clearTimeout(timeoutId.current);\n            }\n            setIsUpdating(newStatus);\n        });\n        return () => {\n            // remove at time componment is destroyed\n            if (updatingWatchHandle) {\n                updatingWatchHandle.remove();\n            }\n            if (timeoutId.current) {\n                clearTimeout(timeoutId.current);\n            }\n        };\n    }, [view]);\n    // only called when widget first loaded\n    const activeViewChangeHandler = (jmv) => {\n        if (!jmv) {\n            throw new Error('no MapView');\n        }\n        setView(jmv);\n    };\n    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-use-map-view\", style: { width: '100%', height: '100%', overflow: 'hidden' } },\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { style: { overflowY: 'auto', height: '100%', paddingLeft: '5px' } },\n            (!view)\n                ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", null,\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", null, \"MapView must be configured\"))\n                : '',\n            (!isUpdating)\n                ? ''\n                : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { style: { fontSize: 'medium', color: 'red' } }, \"map is updating...\"))));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdXBkYXRlLXN0YXR1cy9zcmMvcnVudGltZS93aWRnZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdXBkYXRlLXN0YXR1cy9zcmMvcnVudGltZS93aWRnZXQudHN4PzFlNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBBbGxXaWRnZXRQcm9wcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcydcbi8vIGltcG9ydCB7IGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PihudWxsKVxuICBjb25zdCBbaXNVcGRhdGluZywgc2V0SXNVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdGltZW91dElkID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IHRpbWVvdXRGb3JNYXBVcGRhdGUgPSAzMDAwMFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2aWV3KSB7IHJldHVybiB9XG5cbiAgICBmdW5jdGlvbiBzZXRNYXBVcGRhdGVUaW1lb3V0ICgpIHtcbiAgICAgIHRpbWVvdXRJZC5jdXJyZW50ID0gc2V0VGltZW91dChvdmVycmlkZU1hcFN0YXR1cywgdGltZW91dEZvck1hcFVwZGF0ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdmVycmlkZU1hcFN0YXR1cyAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oYGZvcmNpbmcgTWFwVmlldyAndXBkYXRpbmcnIHN0YXR1cyB0byAnZmFsc2UnIGFmdGVyIHdhaXRpbmcgZm9yICR7dGltZW91dEZvck1hcFVwZGF0ZSAvIDEwMDB9IHNlY29uZHNgKVxuICAgICAgc2V0SXNVcGRhdGluZyhmYWxzZSlcbiAgICB9XG5cbiAgICBjb25zdCBtYXBWaWV3ID0gdmlldy52aWV3XG5cbiAgICBjb25zdCB1cGRhdGluZ1dhdGNoSGFuZGxlID0gbWFwVmlldy53YXRjaChcbiAgICAgICd1cGRhdGluZycsXG4gICAgICAobmV3U3RhdHVzKSA9PiB7XG4gICAgICAgIC8vIGRvbid0IGFsbG93IGlzVXBkYXRpbmcgdG8gcmVtYWluIHRydWUgZm9yID4gMzAgc2Vjc1xuICAgICAgICBpZiAobmV3U3RhdHVzKSB7XG4gICAgICAgICAgc2V0TWFwVXBkYXRlVGltZW91dCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZC5jdXJyZW50KVxuICAgICAgICB9XG4gICAgICAgIHNldElzVXBkYXRpbmcobmV3U3RhdHVzKVxuICAgICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyByZW1vdmUgYXQgdGltZSBjb21wb25tZW50IGlzIGRlc3Ryb3llZFxuICAgICAgaWYgKHVwZGF0aW5nV2F0Y2hIYW5kbGUpIHtcbiAgICAgICAgdXBkYXRpbmdXYXRjaEhhbmRsZS5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgaWYgKHRpbWVvdXRJZC5jdXJyZW50KSB7IGNsZWFyVGltZW91dCh0aW1lb3V0SWQuY3VycmVudCkgfVxuICAgIH1cbiAgfSwgW3ZpZXddKVxuXG4gIC8vIG9ubHkgY2FsbGVkIHdoZW4gd2lkZ2V0IGZpcnN0IGxvYWRlZFxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYgKCFqbXYpIHsgdGhyb3cgbmV3IEVycm9yKCdubyBNYXBWaWV3JykgfVxuICAgIHNldFZpZXcoam12KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC11c2UtbWFwLXZpZXdcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0+XG4gICAgICA8L0ppbXVNYXBWaWV3Q29tcG9uZW50PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93WTogJ2F1dG8nLCBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ0xlZnQ6ICc1cHgnIH19PlxuICAgICAgICB7KCF2aWV3KVxuICAgICAgICAgID8gPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4+TWFwVmlldyBtdXN0IGJlIGNvbmZpZ3VyZWQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgeyghaXNVcGRhdGluZylcbiAgICAgICAgICA/ICcnXG4gICAgICAgICAgOiA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJ21lZGl1bScsIGNvbG9yOiAncmVkJyB9fT5tYXAgaXMgdXBkYXRpbmcuLi48L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/map-update-status/src/runtime/widget.tsx\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./jimu-core/lib/set-public-path.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/map-update-status/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});