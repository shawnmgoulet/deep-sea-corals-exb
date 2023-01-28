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

/***/ "./your-extensions/widgets/erddap-query/src/actions/filter-change-action.ts":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/erddap-query/src/actions/filter-change-action.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterAction)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n\nclass FilterAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {\n    filterMessageDescription(messageDescription) {\n        return (messageDescription.messageType === 'DATA_SOURCE_FILTER_CHANGE' ||\n            messageDescription.messageType === 'EXTENT_CHANGE');\n    }\n    // replaced by filterMessageDescription in v1.9\n    // filterMessageType (messageType: MessageType, messageWidgetId?: string): boolean {\n    //   return [MessageType.DataSourceFilterChange].includes(messageType)\n    // }\n    filterMessage(message) {\n        return true;\n    }\n    //set action setting uri\n    getSettingComponentUri(messageType, messageWidgetId) {\n        return 'actions/filter-change-action-setting';\n    }\n    onExecute(message, actionConfig) {\n        switch (message.type) {\n            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:\n                const dsFilterChangeMessage = message;\n                // console.log('erddap-query: filter-change-action. got DataSourceFilterChangeMessage', dsFilterChangeMessage, actionConfig)\n                const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsFilterChangeMessage.dataSourceId);\n                const queryParams = ds.getCurrentQueryParams();\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.widgetId, 'queryString', queryParams.where));\n                break;\n            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:\n                // console.log('MessageHandlerAction: got ExtentChangeMessage', message, actionConfig)\n                const extentChangeMessage = message;\n                // trigger an update for the widget when Extent is different from previous.\n                // Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)\n                // console.log('inside actionHandler. spatialReference: ', extentChangeMessage.extent.spatialReference)\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.widgetId, 'extent', {\n                    xmin: extentChangeMessage.extent.xmin,\n                    ymin: extentChangeMessage.extent.ymin,\n                    xmax: extentChangeMessage.extent.xmax,\n                    ymax: extentChangeMessage.extent.ymax\n                }));\n                break;\n        }\n        return true;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL2FjdGlvbnMvZmlsdGVyLWNoYW5nZS1hY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL2FjdGlvbnMvZmlsdGVyLWNoYW5nZS1hY3Rpb24udHM/MThhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sXG4gIE1lc3NhZ2VUeXBlLFxuICBNZXNzYWdlLFxuICBnZXRBcHBTdG9yZSxcbiAgYXBwQWN0aW9ucyxcbiAgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsXG4gIEV4dGVudENoYW5nZU1lc3NhZ2UsXG4gIERhdGFTb3VyY2VNYW5hZ2VyLFxuICBRdWVyaWFibGVEYXRhU291cmNlLFxuICBTcWxRdWVyeVBhcmFtcyxcbiAgTWVzc2FnZURlc2NyaXB0aW9uXG59IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RNZXNzYWdlQWN0aW9uIHtcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09ICdEQVRBX1NPVVJDRV9GSUxURVJfQ0hBTkdFJyB8fFxuICAgICAgbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlID09PSAnRVhURU5UX0NIQU5HRSdcbiAgICApXG4gIH1cblxuICAvLyByZXBsYWNlZCBieSBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24gaW4gdjEuOVxuICAvLyBmaWx0ZXJNZXNzYWdlVHlwZSAobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBtZXNzYWdlV2lkZ2V0SWQ/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gICByZXR1cm4gW01lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VdLmluY2x1ZGVzKG1lc3NhZ2VUeXBlKVxuICAvLyB9XG5cbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvL3NldCBhY3Rpb24gc2V0dGluZyB1cmlcbiAgZ2V0U2V0dGluZ0NvbXBvbmVudFVyaSAobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBtZXNzYWdlV2lkZ2V0SWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYWN0aW9ucy9maWx0ZXItY2hhbmdlLWFjdGlvbi1zZXR0aW5nJ1xuICB9XG5cbiAgb25FeGVjdXRlIChtZXNzYWdlOiBNZXNzYWdlLCBhY3Rpb25Db25maWc/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZTpcbiAgICAgICAgY29uc3QgZHNGaWx0ZXJDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZXJkZGFwLXF1ZXJ5OiBmaWx0ZXItY2hhbmdlLWFjdGlvbi4gZ290IERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlJywgZHNGaWx0ZXJDaGFuZ2VNZXNzYWdlLCBhY3Rpb25Db25maWcpXG4gICAgICAgIGNvbnN0IGRzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRzRmlsdGVyQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlSWQpIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXM6IFNxbFF1ZXJ5UGFyYW1zID0gZHMuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zKClcbiAgICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSh0aGlzLndpZGdldElkLCAncXVlcnlTdHJpbmcnLCBxdWVyeVBhcmFtcy53aGVyZSkpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlOlxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWVzc2FnZUhhbmRsZXJBY3Rpb246IGdvdCBFeHRlbnRDaGFuZ2VNZXNzYWdlJywgbWVzc2FnZSwgYWN0aW9uQ29uZmlnKVxuICAgICAgICBjb25zdCBleHRlbnRDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBFeHRlbnRDaGFuZ2VNZXNzYWdlXG4gICAgICAgIC8vIHRyaWdnZXIgYW4gdXBkYXRlIGZvciB0aGUgd2lkZ2V0IHdoZW4gRXh0ZW50IGlzIGRpZmZlcmVudCBmcm9tIHByZXZpb3VzLlxuICAgICAgICAvLyBNdXN0IGJlIGEgcGxhaW4gSmF2YVNjcmlwdCBPYmplY3QgKHNlZSBodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9leHBlcmllbmNlLWJ1aWxkZXIvZ3VpZGUvd2lkZ2V0LWNvbW11bmljYXRpb24vKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5zaWRlIGFjdGlvbkhhbmRsZXIuIHNwYXRpYWxSZWZlcmVuY2U6ICcsIGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnNwYXRpYWxSZWZlcmVuY2UpXG4gICAgICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXG4gICAgICAgICAgdGhpcy53aWRnZXRJZCxcbiAgICAgICAgICAnZXh0ZW50JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB4bWluOiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC54bWluLFxuICAgICAgICAgICAgeW1pbjogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueW1pbixcbiAgICAgICAgICAgIHhtYXg6IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnhtYXgsXG4gICAgICAgICAgICB5bWF4OiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC55bWF4XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/erddap-query/src/actions/filter-change-action.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/erddap-query/src/actions/filter-change-action.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});