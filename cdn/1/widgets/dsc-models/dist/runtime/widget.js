/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-arcgis","jimu-core/react","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
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

/***/ "./your-extensions/widgets/dsc-models/src/runtime/widget.tsx":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/dsc-models/src/runtime/widget.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/** @jsx jsx */\n\n\n// import defaultMessages from './translations/default'\n// import { defaultMessages as jimuUIMessages } from 'jimu-ui'\n\n\nfunction Widget(props) {\n    var _a;\n    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].useState(true);\n    const [optionsList, setOptionsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedLayerId, setSelectedLayerId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [mapLayer, setMapLayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const graphicsLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // TODO should sync of map w/ Select be in useEffect? if so, why doesn't the following work?\n    // useEffect(() => {\n    //   if (!selectedLayerId || !mapLayer) { return }\n    //   mapLayer.allSublayers.forEach(it => {\n    //     if (it.id !== selectedLayerId && !it.sublayers) {\n    //       it.visible = false\n    //     } else if (it.id === selectedLayerId) {\n    //       it.visible = true\n    //     }\n    //   })\n    // }, [selectedLayerId, mapLayer])\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n        if (!view) {\n            return;\n        }\n        const graphicsLayer = view.view.map.layers.find(it => it.type === 'graphics');\n        if (!graphicsLayer) {\n            return;\n        }\n        if (checked && selectedLayerId) {\n            graphicsLayer.visible = false;\n        }\n        else {\n            graphicsLayer.visible = true;\n        }\n    }, [view, selectedLayerId, checked]);\n    // runs once\n    const activeViewChangeHandler = (jmv) => {\n        if (!jmv) {\n            console.warn('no MapView');\n            return;\n        }\n        setView(jmv);\n        const modelLayerView = jmv.view.layerViews.find(it => it.layer.title === props.config.modelsLayerName && it.layer.type === 'map-image');\n        if (!modelLayerView) {\n            console.warn('DSC Model layer not found!');\n        }\n        const modelLayer = modelLayerView.layer;\n        setMapLayer(modelLayer);\n        // hack to ensure all models layers are initially off\n        modelLayer.allSublayers.forEach(it => {\n            if (!it.sublayers) {\n                it.visible = false;\n            }\n        });\n        const alllayers = modelLayer.allSublayers.map(sublayer => {\n            return { id: sublayer.id, label: sublayer.title, parent: !!sublayer.sublayers };\n        });\n        alllayers.sort((a, b) => a.id - b.id);\n        setOptionsList(alllayers.toArray());\n    };\n    function hideAllButtonHandler(e) {\n        mapLayer.allSublayers.forEach(it => {\n            if (!it.sublayers) {\n                it.visible = false;\n            }\n        });\n        setSelectedLayerId(null);\n    }\n    function modelLayerChangeHandler(e) {\n        console.log('inside modelLayerChangeHandler with ', e.target.value);\n        const selectedId = parseInt(e.target.value);\n        setSelectedLayerId(selectedId);\n        mapLayer.allSublayers.forEach(it => {\n            // don't change visibility of group layers\n            if (it.id !== selectedId && !it.sublayers) {\n                it.visible = false;\n            }\n            else if (it.id === selectedId) {\n                it.visible = true;\n            }\n        });\n    }\n    function checkboxHandler(evt, checked) {\n        setChecked(checked);\n    }\n    function buildSelect() {\n        if (!optionsList) {\n            return '';\n        }\n        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { onChange: modelLayerChangeHandler, placeholder: \"Select a model layer...\", value: selectedLayerId }, optionsList.map(item => {\n            if (item.parent) {\n                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { header: true }, item.label);\n            }\n            else {\n                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item.id }, item.label);\n            }\n        })));\n    }\n    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-demo jimu-widget\", style: { width: '90%' } },\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { style: { width: '90%', paddingLeft: '10px', paddingRight: '10px' } }, buildSelect()),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { style: { width: '90%', padding: '10px' } },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: checked, onChange: checkboxHandler, \"aria-label\": \"Hide Hexbins\" }),\n            \" Hide Hexbins\"),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { style: { width: '90%' } },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: hideAllButtonHandler, style: { margin: '10px' } }, \"Reset\"))));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kc2MtbW9kZWxzL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQVFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZHNjLW1vZGVscy9zcmMvcnVudGltZS93aWRnZXQudHN4PzE4MTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5cbmltcG9ydCB7XG4gIEFsbFdpZGdldFByb3BzLFxuICBqc3hcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyBDYWxjaXRlU2VsZWN0LCBDYWxjaXRlT3B0aW9uLCBDYWxjaXRlT3B0aW9uR3JvdXAgfSBmcm9tICdjYWxjaXRlLWNvbXBvbmVudHMnXG4vLyBpbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG4vLyBpbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJTWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgTWFwSW1hZ2VMYXllciBmcm9tICdlc3JpL2xheWVycy9NYXBJbWFnZUxheWVyJ1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcidcbmltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0LCBPcHRpb24sIENoZWNrYm94IH0gZnJvbSAnamltdS11aSdcblxuaW50ZXJmYWNlIE1vZGVsT3B0aW9uIHtcbiAgaWQ6IG51bWJlclxuICBsYWJlbDogc3RyaW5nXG4gIHBhcmVudD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PihudWxsKVxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbb3B0aW9uc0xpc3QsIHNldE9wdGlvbnNMaXN0XSA9IHVzZVN0YXRlPE1vZGVsT3B0aW9uW10+KFtdKVxuICBjb25zdCBbc2VsZWN0ZWRMYXllcklkLCBzZXRTZWxlY3RlZExheWVySWRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW21hcExheWVyLCBzZXRNYXBMYXllcl0gPSB1c2VTdGF0ZTxNYXBJbWFnZUxheWVyPigpXG4gIGNvbnN0IGdyYXBoaWNzTGF5ZXJSZWYgPSB1c2VSZWY8R3JhcGhpY3NMYXllcj4oKVxuXG4gIC8vIFRPRE8gc2hvdWxkIHN5bmMgb2YgbWFwIHcvIFNlbGVjdCBiZSBpbiB1c2VFZmZlY3Q/IGlmIHNvLCB3aHkgZG9lc24ndCB0aGUgZm9sbG93aW5nIHdvcms/XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKCFzZWxlY3RlZExheWVySWQgfHwgIW1hcExheWVyKSB7IHJldHVybiB9XG5cbiAgLy8gICBtYXBMYXllci5hbGxTdWJsYXllcnMuZm9yRWFjaChpdCA9PiB7XG4gIC8vICAgICBpZiAoaXQuaWQgIT09IHNlbGVjdGVkTGF5ZXJJZCAmJiAhaXQuc3VibGF5ZXJzKSB7XG4gIC8vICAgICAgIGl0LnZpc2libGUgPSBmYWxzZVxuICAvLyAgICAgfSBlbHNlIGlmIChpdC5pZCA9PT0gc2VsZWN0ZWRMYXllcklkKSB7XG4gIC8vICAgICAgIGl0LnZpc2libGUgPSB0cnVlXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfSwgW3NlbGVjdGVkTGF5ZXJJZCwgbWFwTGF5ZXJdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2aWV3KSB7IHJldHVybiB9XG4gICAgY29uc3QgZ3JhcGhpY3NMYXllcjogR3JhcGhpY3NMYXllciA9IHZpZXcudmlldy5tYXAubGF5ZXJzLmZpbmQoaXQgPT4gaXQudHlwZSA9PT0gJ2dyYXBoaWNzJykgYXMgR3JhcGhpY3NMYXllclxuICAgIGlmICghZ3JhcGhpY3NMYXllcikgeyByZXR1cm4gfVxuICAgIGlmIChjaGVja2VkICYmIHNlbGVjdGVkTGF5ZXJJZCkge1xuICAgICAgZ3JhcGhpY3NMYXllci52aXNpYmxlID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JhcGhpY3NMYXllci52aXNpYmxlID0gdHJ1ZVxuICAgIH1cbiAgfSwgW3ZpZXcsIHNlbGVjdGVkTGF5ZXJJZCwgY2hlY2tlZF0pXG5cbiAgLy8gcnVucyBvbmNlXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBpZiAoIWptdikge1xuICAgICAgY29uc29sZS53YXJuKCdubyBNYXBWaWV3JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRWaWV3KGptdilcbiAgICBjb25zdCBtb2RlbExheWVyVmlldyA9IGptdi52aWV3LmxheWVyVmlld3MuZmluZChpdCA9PiBpdC5sYXllci50aXRsZSA9PT0gcHJvcHMuY29uZmlnLm1vZGVsc0xheWVyTmFtZSAmJiBpdC5sYXllci50eXBlID09PSAnbWFwLWltYWdlJylcbiAgICBpZiAoIW1vZGVsTGF5ZXJWaWV3KSB7IGNvbnNvbGUud2FybignRFNDIE1vZGVsIGxheWVyIG5vdCBmb3VuZCEnKSB9XG4gICAgY29uc3QgbW9kZWxMYXllciA9IG1vZGVsTGF5ZXJWaWV3LmxheWVyIGFzIE1hcEltYWdlTGF5ZXJcbiAgICBzZXRNYXBMYXllcihtb2RlbExheWVyKVxuXG4gICAgLy8gaGFjayB0byBlbnN1cmUgYWxsIG1vZGVscyBsYXllcnMgYXJlIGluaXRpYWxseSBvZmZcbiAgICBtb2RlbExheWVyLmFsbFN1YmxheWVycy5mb3JFYWNoKGl0ID0+IHtcbiAgICAgIGlmICghaXQuc3VibGF5ZXJzKSB7XG4gICAgICAgIGl0LnZpc2libGUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBhbGxsYXllcnMgPSBtb2RlbExheWVyLmFsbFN1YmxheWVycy5tYXAoc3VibGF5ZXIgPT4ge1xuICAgICAgcmV0dXJuIHsgaWQ6IHN1YmxheWVyLmlkLCBsYWJlbDogc3VibGF5ZXIudGl0bGUsIHBhcmVudDogISFzdWJsYXllci5zdWJsYXllcnMgfVxuICAgIH0pXG4gICAgYWxsbGF5ZXJzLnNvcnQoKGEsIGIpID0+IGEuaWQgLSBiLmlkKVxuICAgIHNldE9wdGlvbnNMaXN0KGFsbGxheWVycy50b0FycmF5KCkpXG4gIH1cblxuICBmdW5jdGlvbiBoaWRlQWxsQnV0dG9uSGFuZGxlciAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pIHtcbiAgICBtYXBMYXllci5hbGxTdWJsYXllcnMuZm9yRWFjaChpdCA9PiB7XG4gICAgICBpZiAoIWl0LnN1YmxheWVycykge1xuICAgICAgICBpdC52aXNpYmxlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIHNldFNlbGVjdGVkTGF5ZXJJZChudWxsKVxuICB9XG5cbiAgZnVuY3Rpb24gbW9kZWxMYXllckNoYW5nZUhhbmRsZXIgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgbW9kZWxMYXllckNoYW5nZUhhbmRsZXIgd2l0aCAnLCBlLnRhcmdldC52YWx1ZSlcbiAgICBjb25zdCBzZWxlY3RlZElkID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgc2V0U2VsZWN0ZWRMYXllcklkKHNlbGVjdGVkSWQpXG4gICAgbWFwTGF5ZXIuYWxsU3VibGF5ZXJzLmZvckVhY2goaXQgPT4ge1xuICAgICAgLy8gZG9uJ3QgY2hhbmdlIHZpc2liaWxpdHkgb2YgZ3JvdXAgbGF5ZXJzXG4gICAgICBpZiAoaXQuaWQgIT09IHNlbGVjdGVkSWQgJiYgIWl0LnN1YmxheWVycykge1xuICAgICAgICBpdC52aXNpYmxlID0gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoaXQuaWQgPT09IHNlbGVjdGVkSWQpIHtcbiAgICAgICAgaXQudmlzaWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tib3hIYW5kbGVyIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgc2V0Q2hlY2tlZChjaGVja2VkKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRTZWxlY3QgKCkge1xuICAgIGlmICghb3B0aW9uc0xpc3QpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17bW9kZWxMYXllckNoYW5nZUhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgbW9kZWwgbGF5ZXIuLi5cIlxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRMYXllcklkfVxuICAgICAgPlxuICAgICAgICB7b3B0aW9uc0xpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gaGVhZGVyPntpdGVtLmxhYmVsfTwvT3B0aW9uPlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17aXRlbS5pZH0+e2l0ZW0ubGFiZWx9PC9PcHRpb24+XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgPC9TZWxlY3Q+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1kZW1vIGppbXUtd2lkZ2V0XCIgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19PlxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgIC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnOTAlJywgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ1JpZ2h0OiAnMTBweCcgfX0+XG4gICAgICB7YnVpbGRTZWxlY3QoKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnOTAlJywgcGFkZGluZzogJzEwcHgnIH19PlxuICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9e2NoZWNrYm94SGFuZGxlcn0gYXJpYS1sYWJlbD1cIkhpZGUgSGV4Ymluc1wiLz4gSGlkZSBIZXhiaW5zXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzkwJScgfX0+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hpZGVBbGxCdXR0b25IYW5kbGVyfSBzdHlsZT17eyBtYXJnaW46ICcxMHB4JyB9fT5SZXNldDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/dsc-models/src/runtime/widget.tsx\n");

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

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/dsc-models/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});