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

/***/ "./your-extensions/widgets/h3-layer/src/actions/update-layer-action.ts":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/h3-layer/src/actions/update-layer-action.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UpdateLayerAction)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n\nclass UpdateLayerAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {\n    filterMessageDescription(messageDescription) {\n        // TODO limit to DataSourceFilterChangeMessage, ExtentChangeMessage, DataRecordsSelectionChange\n        return true;\n    }\n    filterMessage(message) {\n        // TODO limit to DataSourceFilterChangeMessage, ExtentChangeMessage, DataRecordsSelectionChange\n        return true;\n    }\n    //set action setting uri\n    getSettingComponentUri(messageType, messageWidgetId) {\n        return 'actions/update-layer-action-setting';\n    }\n    onExecute(message, actionConfig) {\n        switch (message.type) {\n            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:\n                const dsFilterChangeMessage = message;\n                // console.log('MessageHandlerAction: got DataSourceFilterChangeMessage', message, actionConfig)\n                // construct DataSource and get the query parameters\n                const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsFilterChangeMessage.dataSourceId);\n                const queryParams = dataSource.getCurrentQueryParams();\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.widgetId, 'queryParams', queryParams.where));\n                break;\n            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:\n                // console.log('MessageHandlerAction: got ExtentChangeMessage', message, actionConfig)\n                const extentChangeMessage = message;\n                //\n                // until we start drawing tiles just for the current view extent, no need to update and trigger a re-render\n                //\n                // trigger an update for the widget when Extent is different from previous.\n                // Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)\n                // getAppStore().dispatch(appActions.widgetStatePropChange(\n                //   this.widgetId,\n                //   'extent',\n                //   {\n                //     xmin: extentChangeMessage.extent.xmin,\n                //     ymin: extentChangeMessage.extent.ymin,\n                //     xmax: extentChangeMessage.extent.xmax,\n                //     ymax: extentChangeMessage.extent.ymax\n                //   })\n                // )\n                break;\n            // TODO may be able to use this message to identify the selected polygon\n            // but currently return empty array for selected feature on client-side layer\n            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:\n                // console.log('MessageHandlerAction: got DataRecordsSelectionChangeMessage', message, actionConfig)\n                const dataRecordsChangeMessage = message;\n                break;\n        }\n        return true;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9oMy1sYXllci9zcmMvYWN0aW9ucy91cGRhdGUtbGF5ZXItYWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9oMy1sYXllci9zcmMvYWN0aW9ucy91cGRhdGUtbGF5ZXItYWN0aW9uLnRzP2EzOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWJzdHJhY3RNZXNzYWdlQWN0aW9uLFxuICBNZXNzYWdlVHlwZSxcbiAgTWVzc2FnZSxcbiAgZ2V0QXBwU3RvcmUsXG4gIGFwcEFjdGlvbnMsXG4gIE1lc3NhZ2VEZXNjcmlwdGlvbixcbiAgRXh0ZW50Q2hhbmdlTWVzc2FnZSxcbiAgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsXG4gIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSxcbiAgRGF0YVNvdXJjZU1hbmFnZXIsXG4gIFNxbFF1ZXJ5UGFyYW1zLFxuICBRdWVyaWFibGVEYXRhU291cmNlXG59IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlTGF5ZXJBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24ge1xuICBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24gKG1lc3NhZ2VEZXNjcmlwdGlvbjogTWVzc2FnZURlc2NyaXB0aW9uKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETyBsaW1pdCB0byBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSwgRXh0ZW50Q2hhbmdlTWVzc2FnZSwgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE8gbGltaXQgdG8gRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsIEV4dGVudENoYW5nZU1lc3NhZ2UsIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vc2V0IGFjdGlvbiBzZXR0aW5nIHVyaVxuICBnZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdhY3Rpb25zL3VwZGF0ZS1sYXllci1hY3Rpb24tc2V0dGluZydcbiAgfVxuXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogYW55KTogUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2U6XG4gICAgICAgIGNvbnN0IGRzRmlsdGVyQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2VcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01lc3NhZ2VIYW5kbGVyQWN0aW9uOiBnb3QgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UnLCBtZXNzYWdlLCBhY3Rpb25Db25maWcpXG5cbiAgICAgICAgLy8gY29uc3RydWN0IERhdGFTb3VyY2UgYW5kIGdldCB0aGUgcXVlcnkgcGFyYW1ldGVyc1xuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRzRmlsdGVyQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlSWQpIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXM6IFNxbFF1ZXJ5UGFyYW1zID0gZGF0YVNvdXJjZS5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKVxuICAgICAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHRoaXMud2lkZ2V0SWQsICdxdWVyeVBhcmFtcycsIHF1ZXJ5UGFyYW1zLndoZXJlKSlcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2U6XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNZXNzYWdlSGFuZGxlckFjdGlvbjogZ290IEV4dGVudENoYW5nZU1lc3NhZ2UnLCBtZXNzYWdlLCBhY3Rpb25Db25maWcpXG4gICAgICAgIGNvbnN0IGV4dGVudENoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIEV4dGVudENoYW5nZU1lc3NhZ2VcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdW50aWwgd2Ugc3RhcnQgZHJhd2luZyB0aWxlcyBqdXN0IGZvciB0aGUgY3VycmVudCB2aWV3IGV4dGVudCwgbm8gbmVlZCB0byB1cGRhdGUgYW5kIHRyaWdnZXIgYSByZS1yZW5kZXJcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdHJpZ2dlciBhbiB1cGRhdGUgZm9yIHRoZSB3aWRnZXQgd2hlbiBFeHRlbnQgaXMgZGlmZmVyZW50IGZyb20gcHJldmlvdXMuXG4gICAgICAgIC8vIE11c3QgYmUgYSBwbGFpbiBKYXZhU2NyaXB0IE9iamVjdCAoc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2V4cGVyaWVuY2UtYnVpbGRlci9ndWlkZS93aWRnZXQtY29tbXVuaWNhdGlvbi8pXG4gICAgICAgIC8vIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXG4gICAgICAgIC8vICAgdGhpcy53aWRnZXRJZCxcbiAgICAgICAgLy8gICAnZXh0ZW50JyxcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICB4bWluOiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC54bWluLFxuICAgICAgICAvLyAgICAgeW1pbjogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueW1pbixcbiAgICAgICAgLy8gICAgIHhtYXg6IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnhtYXgsXG4gICAgICAgIC8vICAgICB5bWF4OiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC55bWF4XG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gKVxuICAgICAgICBicmVha1xuICAgICAgLy8gVE9ETyBtYXkgYmUgYWJsZSB0byB1c2UgdGhpcyBtZXNzYWdlIHRvIGlkZW50aWZ5IHRoZSBzZWxlY3RlZCBwb2x5Z29uXG4gICAgICAvLyBidXQgY3VycmVudGx5IHJldHVybiBlbXB0eSBhcnJheSBmb3Igc2VsZWN0ZWQgZmVhdHVyZSBvbiBjbGllbnQtc2lkZSBsYXllclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZTpcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01lc3NhZ2VIYW5kbGVyQWN0aW9uOiBnb3QgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlJywgbWVzc2FnZSwgYWN0aW9uQ29uZmlnKVxuICAgICAgICBjb25zdCBkYXRhUmVjb3Jkc0NoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/h3-layer/src/actions/update-layer-action.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/h3-layer/src/actions/update-layer-action.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});