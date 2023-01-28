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

/***/ "./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    _widgetLabel: \"Get Map Coordinates\",\n    latLon: \"Lat/Lon\",\n    zoom: \"Zoom\",\n    latLonWillBeHere: \"Lat/Lon (None - please mouse over map)\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZ2V0LW1hcC1jb29yZGluYXRlcy9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cz8wY2Q3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiBcIkdldCBNYXAgQ29vcmRpbmF0ZXNcIixcbiAgbGF0TG9uOiBcIkxhdC9Mb25cIixcbiAgem9vbTogXCJab29tXCIsXG4gIGxhdExvbldpbGxCZUhlcmU6IFwiTGF0L0xvbiAoTm9uZSAtIHBsZWFzZSBtb3VzZSBvdmVyIG1hcClcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts\");\n/** @jsx jsx */\n/**\n  Licensing\n\n  Copyright 2021 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    var _a;\n    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [scale, setScale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mapViewReady, setMapViewReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const activeViewChangeHandler = (jmv) => {\n        if (jmv) {\n            // When the extent moves, update the state with all the updated values.\n            jmv.view.watch(\"extent\", evt => {\n                setLatitude(jmv.view.center.latitude.toFixed(3));\n                setLongitude(jmv.view.center.longitude.toFixed(3));\n                setScale(Math.round(jmv.view.scale * 1) / 1);\n                setZoom(jmv.view.zoom);\n                // this is set to false initially, then once we have the first set of data (and all subsequent) it's set\n                // to true, so that we can hide the text until everything is ready:\n                setMapViewReady(true);\n            });\n            // When the pointer moves, take the pointer location and create a Point\n            // Geometry out of it (`view.toMap(...)`), then update the state.\n            jmv.view.on(\"pointer-move\", evt => {\n                const point = jmv.view.toMap({\n                    x: evt.x,\n                    y: evt.y\n                });\n                setLatitude(point.latitude.toFixed(3));\n                setLongitude(point.longitude.toFixed(3));\n                setScale(Math.round(jmv.view.scale * 1) / 1);\n                setZoom(jmv.view.zoom);\n                setMapViewReady(true);\n            });\n        }\n    };\n    let sections = [];\n    sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", null,\n        _translations_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"].latLon,\n        \" \",\n        latitude,\n        \", \",\n        longitude));\n    if (props.config.showZoom === true) {\n        sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", null,\n            \"Zoom \",\n            zoom.toFixed(0)));\n    }\n    if (props.config.showScale === true) {\n        sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", null,\n            \"Scale 1:\",\n            scale));\n    }\n    // We have 1, 2, or 3 JSX Elements in our array, we want to join them\n    // with \" | \" between them. You cannot use `sections.join(\" | \")`, sadly.\n    // So we use array.reduce(...) to return an array of JSX elements.\n    const allSections = sections.reduce((previousValue, currentValue) => {\n        return previousValue === null\n            ? [currentValue]\n            : [...previousValue, \" | \", currentValue];\n    }, null);\n    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-get-map-coordinates jimu-widget m-2\" },\n        props.hasOwnProperty(\"useMapWidgetIds\") &&\n            props.useMapWidgetIds &&\n            props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", null, mapViewReady === true ? allSections : _translations_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"].latLonWillBeHere)));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBQUE7O0FBQUE7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2dldC1tYXAtY29vcmRpbmF0ZXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeD9hN2RjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuLyoqXG4gIExpY2Vuc2luZ1xuXG4gIENvcHlyaWdodCAyMDIxIEVzcmlcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXG4gIExJQ0VOU0UgZmlsZS5cbiovXG5pbXBvcnQgeyBBbGxXaWRnZXRQcm9wcywganN4IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuXG5pbXBvcnQgUG9pbnQgZnJvbSBcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIjtcblxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW21hcFZpZXdSZWFkeSwgc2V0TWFwVmlld1JlYWR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYgKGptdikge1xuXG4gICAgICAvLyBXaGVuIHRoZSBleHRlbnQgbW92ZXMsIHVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBhbGwgdGhlIHVwZGF0ZWQgdmFsdWVzLlxuICAgICAgam12LnZpZXcud2F0Y2goXCJleHRlbnRcIiwgZXZ0ID0+IHtcbiAgICAgICAgc2V0TGF0aXR1ZGUoam12LnZpZXcuY2VudGVyLmxhdGl0dWRlLnRvRml4ZWQoMykpO1xuICAgICAgICBzZXRMb25naXR1ZGUoam12LnZpZXcuY2VudGVyLmxvbmdpdHVkZS50b0ZpeGVkKDMpKTtcbiAgICAgICAgc2V0U2NhbGUoTWF0aC5yb3VuZChqbXYudmlldy5zY2FsZSAqIDEpIC8gMSk7XG4gICAgICAgIHNldFpvb20oam12LnZpZXcuem9vbSk7XG5cbiAgICAgICAgLy8gdGhpcyBpcyBzZXQgdG8gZmFsc2UgaW5pdGlhbGx5LCB0aGVuIG9uY2Ugd2UgaGF2ZSB0aGUgZmlyc3Qgc2V0IG9mIGRhdGEgKGFuZCBhbGwgc3Vic2VxdWVudCkgaXQncyBzZXRcbiAgICAgICAgLy8gdG8gdHJ1ZSwgc28gdGhhdCB3ZSBjYW4gaGlkZSB0aGUgdGV4dCB1bnRpbCBldmVyeXRoaW5nIGlzIHJlYWR5OlxuICAgICAgICBzZXRNYXBWaWV3UmVhZHkodHJ1ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gV2hlbiB0aGUgcG9pbnRlciBtb3ZlcywgdGFrZSB0aGUgcG9pbnRlciBsb2NhdGlvbiBhbmQgY3JlYXRlIGEgUG9pbnRcbiAgICAgIC8vIEdlb21ldHJ5IG91dCBvZiBpdCAoYHZpZXcudG9NYXAoLi4uKWApLCB0aGVuIHVwZGF0ZSB0aGUgc3RhdGUuXG4gICAgICBqbXYudmlldy5vbihcInBvaW50ZXItbW92ZVwiLCBldnQgPT4ge1xuICAgICAgICBjb25zdCBwb2ludDogUG9pbnQgPSBqbXYudmlldy50b01hcCh7XG4gICAgICAgICAgeDogZXZ0LngsXG4gICAgICAgICAgeTogZXZ0LnlcbiAgICAgICAgfSk7XG4gICAgICAgIHNldExhdGl0dWRlKHBvaW50LmxhdGl0dWRlLnRvRml4ZWQoMykpO1xuICAgICAgICBzZXRMb25naXR1ZGUocG9pbnQubG9uZ2l0dWRlLnRvRml4ZWQoMykpO1xuICAgICAgICBzZXRTY2FsZShNYXRoLnJvdW5kKGptdi52aWV3LnNjYWxlICogMSkgLyAxKTtcbiAgICAgICAgc2V0Wm9vbShqbXYudmlldy56b29tKTtcbiAgICAgICAgc2V0TWFwVmlld1JlYWR5KHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBzZWN0aW9ucyA9IFtdO1xuXG4gIHNlY3Rpb25zLnB1c2goXG4gICAgPHNwYW4+XG4gICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmxhdExvbn0ge2xhdGl0dWRlfSwge2xvbmdpdHVkZX1cbiAgICA8L3NwYW4+XG4gICk7XG5cbiAgaWYgKHByb3BzLmNvbmZpZy5zaG93Wm9vbSA9PT0gdHJ1ZSkge1xuICAgIHNlY3Rpb25zLnB1c2goPHNwYW4+Wm9vbSB7em9vbS50b0ZpeGVkKDApfTwvc3Bhbj4pO1xuICB9XG5cbiAgaWYgKHByb3BzLmNvbmZpZy5zaG93U2NhbGUgPT09IHRydWUpIHtcbiAgICBzZWN0aW9ucy5wdXNoKDxzcGFuPlNjYWxlIDE6e3NjYWxlfTwvc3Bhbj4pO1xuICB9XG5cbiAgLy8gV2UgaGF2ZSAxLCAyLCBvciAzIEpTWCBFbGVtZW50cyBpbiBvdXIgYXJyYXksIHdlIHdhbnQgdG8gam9pbiB0aGVtXG4gIC8vIHdpdGggXCIgfCBcIiBiZXR3ZWVuIHRoZW0uIFlvdSBjYW5ub3QgdXNlIGBzZWN0aW9ucy5qb2luKFwiIHwgXCIpYCwgc2FkbHkuXG4gIC8vIFNvIHdlIHVzZSBhcnJheS5yZWR1Y2UoLi4uKSB0byByZXR1cm4gYW4gYXJyYXkgb2YgSlNYIGVsZW1lbnRzLlxuICBjb25zdCBhbGxTZWN0aW9ucyA9IHNlY3Rpb25zLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgPT09IG51bGxcbiAgICAgID8gW2N1cnJlbnRWYWx1ZV1cbiAgICAgIDogWy4uLnByZXZpb3VzVmFsdWUsIFwiIHwgXCIsIGN1cnJlbnRWYWx1ZV07XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtZ2V0LW1hcC1jb29yZGluYXRlcyBqaW11LXdpZGdldCBtLTJcIj5cbiAgICAgIHtwcm9wcy5oYXNPd25Qcm9wZXJ0eShcInVzZU1hcFdpZGdldElkc1wiKSAmJlxuICAgICAgICBwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgIHsvKiBPbmx5IHNob3cgdGhlIGRhdGEgb25jZSB0aGUgTWFwVmlldyBpcyByZWFkeSAqL31cbiAgICAgIDxwPnttYXBWaWV3UmVhZHkgPT09IHRydWUgPyBhbGxTZWN0aW9ucyA6IGRlZmF1bHRNZXNzYWdlcy5sYXRMb25XaWxsQmVIZXJlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});