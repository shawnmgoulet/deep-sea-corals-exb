/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/filtered-record-count/src/actions/extent-change-action.ts":
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/filtered-record-count/src/actions/extent-change-action.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ExtentChangeAction)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n\nclass ExtentChangeAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {\n    // new in v1.9, replaces filterMessageDescription. used in builder\n    filterMessageDescription(messageDescription) {\n        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange;\n    }\n    filterMessage(message) {\n        return message.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange;\n    }\n    //set action setting uri\n    getSettingComponentUri(messageType, messageWidgetId) {\n        return 'actions/extent-change-action-setting';\n    }\n    onExecute(message, actionConfig) {\n        switch (message.type) {\n            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:\n                // console.log('ExtentChangeAction: got ExtentChangeMessage', message, actionConfig)\n                const extentChangeMessage = message;\n                // trigger an update for the widget when Extent is different from previous. Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)\n                // getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'extent', this.formatExtent(extentChangeMessage.extent)))\n                // getAppStore().dispatch(appActions.widgetStatePropChange(\n                //   this.widgetId,\n                //   'extent',\n                //   {\n                //     xmin: extentChangeMessage.extent.xmin,\n                //     ymin: extentChangeMessage.extent.ymin,\n                //     xmax: extentChangeMessage.extent.xmax,\n                //     ymax: extentChangeMessage.extent.ymax\n                //   })\n                // )\n                break;\n        }\n        return true;\n    }\n    formatExtent(extent) {\n        if (!extent) {\n            return 'extent not available';\n        }\n        // VSCode does not recognize isLinear argument is optional and defaults to false\n        // TODO calling webMercatorToGeographic() causing \"Load module error. TypeError: window.require is not a function\"\n        // const geoExtent = webMercatorUtils.webMercatorToGeographic(extent, false) as Extent\n        // return `${geoExtent.xmin}, ${geoExtent.ymin}, ${geoExtent.xmax}, ${geoExtent.ymax}`\n        return `${extent.xmin}, ${extent.ymin}, ${extent.xmax}, ${extent.ymax}`;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0ZXJlZC1yZWNvcmQtY291bnQvc3JjL2FjdGlvbnMvZXh0ZW50LWNoYW5nZS1hY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdGVyZWQtcmVjb3JkLWNvdW50L3NyYy9hY3Rpb25zL2V4dGVudC1jaGFuZ2UtYWN0aW9uLnRzP2ZjMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWJzdHJhY3RNZXNzYWdlQWN0aW9uLFxuICBNZXNzYWdlVHlwZSxcbiAgTWVzc2FnZSxcbiAgZ2V0QXBwU3RvcmUsXG4gIGFwcEFjdGlvbnMsXG4gIE1lc3NhZ2VEZXNjcmlwdGlvbixcbiAgRXh0ZW50Q2hhbmdlTWVzc2FnZVxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgRXh0ZW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvRXh0ZW50J1xuaW1wb3J0IHdlYk1lcmNhdG9yVXRpbHMgZnJvbSAnZXNyaS9nZW9tZXRyeS9zdXBwb3J0L3dlYk1lcmNhdG9yVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dGVudENoYW5nZUFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XG4gIC8vIG5ldyBpbiB2MS45LCByZXBsYWNlcyBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24uIHVzZWQgaW4gYnVpbGRlclxuICBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24gKG1lc3NhZ2VEZXNjcmlwdGlvbjogTWVzc2FnZURlc2NyaXB0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlXG4gIH1cblxuICBmaWx0ZXJNZXNzYWdlIChtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1lc3NhZ2UudHlwZSA9PT0gTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlXG4gIH1cblxuICAvL3NldCBhY3Rpb24gc2V0dGluZyB1cmlcbiAgZ2V0U2V0dGluZ0NvbXBvbmVudFVyaSAobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBtZXNzYWdlV2lkZ2V0SWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYWN0aW9ucy9leHRlbnQtY2hhbmdlLWFjdGlvbi1zZXR0aW5nJ1xuICB9XG5cbiAgb25FeGVjdXRlIChtZXNzYWdlOiBNZXNzYWdlLCBhY3Rpb25Db25maWc/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlOlxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRXh0ZW50Q2hhbmdlQWN0aW9uOiBnb3QgRXh0ZW50Q2hhbmdlTWVzc2FnZScsIG1lc3NhZ2UsIGFjdGlvbkNvbmZpZylcbiAgICAgICAgY29uc3QgZXh0ZW50Q2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRXh0ZW50Q2hhbmdlTWVzc2FnZVxuICAgICAgICAvLyB0cmlnZ2VyIGFuIHVwZGF0ZSBmb3IgdGhlIHdpZGdldCB3aGVuIEV4dGVudCBpcyBkaWZmZXJlbnQgZnJvbSBwcmV2aW91cy4gTXVzdCBiZSBhIHBsYWluIEphdmFTY3JpcHQgT2JqZWN0IChzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vZXhwZXJpZW5jZS1idWlsZGVyL2d1aWRlL3dpZGdldC1jb21tdW5pY2F0aW9uLylcbiAgICAgICAgLy8gZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSh0aGlzLndpZGdldElkLCAnZXh0ZW50JywgdGhpcy5mb3JtYXRFeHRlbnQoZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQpKSlcblxuICAgICAgICAvLyBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFxuICAgICAgICAvLyAgIHRoaXMud2lkZ2V0SWQsXG4gICAgICAgIC8vICAgJ2V4dGVudCcsXG4gICAgICAgIC8vICAge1xuICAgICAgICAvLyAgICAgeG1pbjogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueG1pbixcbiAgICAgICAgLy8gICAgIHltaW46IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnltaW4sXG4gICAgICAgIC8vICAgICB4bWF4OiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC54bWF4LFxuICAgICAgICAvLyAgICAgeW1heDogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueW1heFxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vIClcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZm9ybWF0RXh0ZW50IChleHRlbnQ6IEV4dGVudCk6IHN0cmluZyB7XG4gICAgaWYgKCFleHRlbnQpIHsgcmV0dXJuICdleHRlbnQgbm90IGF2YWlsYWJsZScgfVxuICAgIC8vIFZTQ29kZSBkb2VzIG5vdCByZWNvZ25pemUgaXNMaW5lYXIgYXJndW1lbnQgaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgLy8gVE9ETyBjYWxsaW5nIHdlYk1lcmNhdG9yVG9HZW9ncmFwaGljKCkgY2F1c2luZyBcIkxvYWQgbW9kdWxlIGVycm9yLiBUeXBlRXJyb3I6IHdpbmRvdy5yZXF1aXJlIGlzIG5vdCBhIGZ1bmN0aW9uXCJcbiAgICAvLyBjb25zdCBnZW9FeHRlbnQgPSB3ZWJNZXJjYXRvclV0aWxzLndlYk1lcmNhdG9yVG9HZW9ncmFwaGljKGV4dGVudCwgZmFsc2UpIGFzIEV4dGVudFxuICAgIC8vIHJldHVybiBgJHtnZW9FeHRlbnQueG1pbn0sICR7Z2VvRXh0ZW50LnltaW59LCAke2dlb0V4dGVudC54bWF4fSwgJHtnZW9FeHRlbnQueW1heH1gXG4gICAgcmV0dXJuIGAke2V4dGVudC54bWlufSwgJHtleHRlbnQueW1pbn0sICR7ZXh0ZW50LnhtYXh9LCAke2V4dGVudC55bWF4fWBcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/filtered-record-count/src/actions/extent-change-action.ts\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/filtered-record-count/src/actions/extent-change-action.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});