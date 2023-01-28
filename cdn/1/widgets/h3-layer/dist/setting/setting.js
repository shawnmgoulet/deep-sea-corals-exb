/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
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

/***/ "./your-extensions/widgets/h3-layer/src/setting/setting.tsx":
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/h3-layer/src/setting/setting.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Setting)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ \"jimu-ui/advanced/setting-components\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/** @jsx jsx */\n\n// import {JimuMapViewSelector} from 'jimu-ui/advanced/setting-components'\n\n\nfunction Setting(props) {\n    const onMapSelected = (useMapWidgetIds) => {\n        props.onSettingChange({\n            id: props.id,\n            useMapWidgetIds: useMapWidgetIds\n        });\n    };\n    const onLayerNameChange = (event) => {\n        props.onSettingChange({\n            id: props.id,\n            config: props.config.set('layerName', event.target.value)\n        });\n    };\n    const onSidePanelChange = (event) => {\n        console.log(event);\n        props.onSettingChange({\n            id: props.id,\n            config: props.config.set('sidePanelId', event.target.value)\n        });\n    };\n    const onSectionChange = (event) => {\n        console.log(event);\n        props.onSettingChange({\n            id: props.id,\n            config: props.config.set('sectionId', event.target.value)\n        });\n    };\n    const onDetailsViewChange = (event) => {\n        console.log(event);\n        props.onSettingChange({\n            id: props.id,\n            config: props.config.set('detailsViewId', event.target.value)\n        });\n    };\n    const onSummaryViewChange = (event) => {\n        console.log(event);\n        props.onSettingChange({\n            id: props.id,\n            config: props.config.set('summaryViewId', event.target.value)\n        });\n    };\n    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: 'widget-setting-demo p-3' },\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: \"Map\" },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: onMapSelected, useMapWidgetIds: props.useMapWidgetIds }))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: \"FeatureLayer Name\" },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { type: \"text\", placeholder: \"layer name\", htmlSize: 28, value: props.config.layerName, onChange: onLayerNameChange }))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: \"Sidepanel\" },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { type: \"text\", placeholder: \"widgetId\", htmlSize: 28, value: props.config.sidePanelId, onChange: onSidePanelChange }))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: \"Section\" },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { type: \"text\", placeholder: \"sectionId\", htmlSize: 28, value: props.config.sectionId, onChange: onSectionChange }))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: \"Details View\" },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { type: \"text\", placeholder: \"viewId\", htmlSize: 28, value: props.config.detailsViewId, onChange: onDetailsViewChange }))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: \"Summary View\" },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { type: \"text\", placeholder: \"viewId\", htmlSize: 28, value: props.config.summaryViewId, onChange: onSummaryViewChange })))));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9oMy1sYXllci9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2gzLWxheWVyL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4PzNlY2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbi8vIGltcG9ydCB7SmltdU1hcFZpZXdTZWxlY3Rvcn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBNYXBXaWRnZXRTZWxlY3RvciwgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZyAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3Qgb25NYXBTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIHVzZU1hcFdpZGdldElkczogdXNlTWFwV2lkZ2V0SWRzXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9uTGF5ZXJOYW1lQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ2xheWVyTmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25TaWRlUGFuZWxDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnc2lkZVBhbmVsSWQnLCBldmVudC50YXJnZXQudmFsdWUpXG4gICAgfSlcbiAgfVxuICBjb25zdCBvblNlY3Rpb25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnc2VjdGlvbklkJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gIH1cbiAgY29uc3Qgb25EZXRhaWxzVmlld0NoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdkZXRhaWxzVmlld0lkJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gIH1cbiAgY29uc3Qgb25TdW1tYXJ5Vmlld0NoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdzdW1tYXJ5Vmlld0lkJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtc2V0dGluZy1kZW1vIHAtMyc+XG4gICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiTWFwXCI+XG4gICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yIG9uU2VsZWN0PXtvbk1hcFNlbGVjdGVkfSB1c2VNYXBXaWRnZXRJZHM9e3Byb3BzLnVzZU1hcFdpZGdldElkc30vPlxuICAgICAgPC9TZXR0aW5nUm93PlxuICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJGZWF0dXJlTGF5ZXIgTmFtZVwiPlxuICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImxheWVyIG5hbWVcIiBodG1sU2l6ZT17Mjh9IHZhbHVlPXtwcm9wcy5jb25maWcubGF5ZXJOYW1lfSBvbkNoYW5nZT17b25MYXllck5hbWVDaGFuZ2V9Lz5cbiAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIlNpZGVwYW5lbFwiPlxuICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIndpZGdldElkXCIgaHRtbFNpemU9ezI4fSB2YWx1ZT17cHJvcHMuY29uZmlnLnNpZGVQYW5lbElkfSBvbkNoYW5nZT17b25TaWRlUGFuZWxDaGFuZ2V9Lz5cbiAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIlNlY3Rpb25cIj5cbiAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICA8VGV4dElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJzZWN0aW9uSWRcIiBodG1sU2l6ZT17Mjh9IHZhbHVlPXtwcm9wcy5jb25maWcuc2VjdGlvbklkfSBvbkNoYW5nZT17b25TZWN0aW9uQ2hhbmdlfS8+XG4gICAgICA8L1NldHRpbmdSb3c+XG4gICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJEZXRhaWxzIFZpZXdcIj5cbiAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICA8VGV4dElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ2aWV3SWRcIiBodG1sU2l6ZT17Mjh9IHZhbHVlPXtwcm9wcy5jb25maWcuZGV0YWlsc1ZpZXdJZH0gb25DaGFuZ2U9e29uRGV0YWlsc1ZpZXdDaGFuZ2V9Lz5cbiAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIlN1bW1hcnkgVmlld1wiPlxuICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInZpZXdJZFwiIGh0bWxTaXplPXsyOH0gdmFsdWU9e3Byb3BzLmNvbmZpZy5zdW1tYXJ5Vmlld0lkfSBvbkNoYW5nZT17b25TdW1tYXJ5Vmlld0NoYW5nZX0vPlxuICAgICAgPC9TZXR0aW5nUm93PlxuICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/h3-layer/src/setting/setting.tsx\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/h3-layer/src/setting/setting.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});