/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-ui","esri/geometry/Extent","esri/geometry/SpatialReference","esri/geometry/support/webMercatorUtils"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__[key] = module[key];
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

/***/ "./your-extensions/widgets/erddap-query/src/runtime/widget.tsx":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/erddap-query/src/runtime/widget.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/* harmony import */ var esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/geometry/Extent */ \"esri/geometry/Extent\");\n/* harmony import */ var esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/SpatialReference */ \"esri/geometry/SpatialReference\");\n/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ \"esri/geometry/support/webMercatorUtils\");\n/** @jsx jsx */\n\n\n\n\n\nconst { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux;\nfunction Widget(props) {\n    //TODO get URL from Settings panel\n    const CSVfileUrl = 'https://noaa.maps.arcgis.com/home/item.html?id=f465861aecac410980a7c601cfec7850';\n    // get state for this widget\n    const widgetState = useSelector((state) => {\n        return state.widgetsState[props.widgetId];\n    });\n    const extent = convertExtentToGeographic(widgetState.extent);\n    // flag for antimeridian-crossing extent\n    const validBbox = extent && (extent.xmin < extent.xmax);\n    const queryString = widgetState.queryString ? widgetState === null || widgetState === void 0 ? void 0 : widgetState.queryString : '1=1';\n    const erddapUrl = buildErddapUrl();\n    function convertExtentToGeographic(coords) {\n        const webmercExtent = new esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            xmin: coords.xmin,\n            ymin: coords.ymin,\n            xmax: coords.xmax,\n            ymax: coords.ymax,\n            spatialReference: new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({ wkid: 102100 })\n        });\n        return esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].webMercatorToGeographic(webmercExtent, false);\n    }\n    function buildErddapUrl() {\n        // console.log('inside buildErddapUrl. queryString = ', widgetState?.queryString)\n        const stdFields = 'ShallowFlag,DatasetID,CatalogNumber,SampleID,ImageURL,Repository,ScientificName,VernacularNameCategory,TaxonRank,IdentificationQualifier,Locality,latitude,longitude,DepthInMeters,DepthMethod,ObservationDate,SurveyID,Station,EventID,SamplingEquipment,LocationAccuracy,RecordType,DataProvider';\n        let url = `${props.config.erddapBaseUrl}.html?${stdFields}&latitude>=${extent.ymin.toFixed(4)}&latitude<=${extent.ymax.toFixed(4)}&longitude>=${extent.xmin.toFixed(4)}&longitude<=${extent.xmax.toFixed(4)}`;\n        if (queryString !== '1=1') {\n            url += '&' + convertSqlToErddapParams(queryString);\n        }\n        return url;\n    }\n    function convertSqlToErddapParams(sql) {\n        // console.log('inside convertSqlToErddapParams with ', sql)\n        const params = [];\n        // manipulate SQL string into list of 3-element lists (field, operator, value)\n        const clauses = sql\n            .replace(/\\(+?/g, '') // replace left parens\n            .replace(/\\)+?/g, '') // replace right parens\n            .replace(/LOWER/g, '') // remove the LOWER() function\n            .split(/ and /i)\n            .map(elem => {\n            const t = elem.split(/\\s+/);\n            // construct 3-element array with field, operator, value. Value may have multiple words which need\n            // to be rejoined and replace single quotes with double quotes\n            return t.slice(0, 2).concat(t.slice(2).join(' ').replace(/'/g, '\"'));\n        });\n        // console.log(clauses)\n        // build key/value pairs for specified parameters\n        clauses.filter(elem => elem[0].toLowerCase() === 'vernacularnamecategory').forEach(elem => {\n            params.push(`VernacularNameCategory=${elem[2]}`);\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'imageurl').forEach(elem => {\n            params.push('ImageURL!=\"NA\"');\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'depthinmeters').forEach(elem => {\n            params.push(`DepthInMeters ${elem[1]} ${elem[2]}`);\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'scientificname').forEach(elem => {\n            params.push(`ScientificName=${elem[2]}`);\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'observationyear').forEach(elem => {\n            params.push(`ObservationYear ${elem[1]} ${elem[2]}`);\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'fishcouncilregion').forEach(elem => {\n            params.push(`FishCouncilRegion=${elem[2]}`);\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'ocean').forEach(elem => {\n            params.push(`Ocean=\"${findOceanNameByCode(elem[2])}\"`);\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'phylum').forEach(elem => {\n            params.push(`Phylum=${elem[2]}`);\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'class').forEach(elem => {\n            params.push(`Class=${elem[2]}`);\n        });\n        // Order is a reserved word and renamed in the hosted feature layer\n        clauses.filter(elem => elem[0].toLowerCase() === 'order_').forEach(elem => {\n            params.push(`Order=${elem[2]}`);\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'family').forEach(elem => {\n            params.push(`Family=${elem[2]}`);\n        });\n        clauses.filter(elem => elem[0].toLowerCase() === 'genus').forEach(elem => {\n            params.push(`Genus=${elem[2]}`);\n        });\n        return params.join('&');\n    }\n    function findOceanNameByCode(code) {\n        const values = {\n            0: 'Arctic',\n            1: 'Indian',\n            2: 'North Atlantic',\n            3: 'North Pacific',\n            4: 'South Atlantic',\n            5: 'South Pacific',\n            6: 'Southern'\n        };\n        return values[code] ? values[code] : '';\n    }\n    function copyUrlBtn() {\n        navigator.clipboard.writeText(erddapUrl).then(() => console.debug('copied to clipboard'));\n    }\n    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-demo jimu-widget m-2\" },\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { style: { position: 'absolute', right: '15px' } },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { placement: \"top\", title: \"Copy URL to clipboard\" },\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { \"aria-label\": \"Button\", icon: true, onClick: copyUrlBtn },\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M16 10H8.723l1.602 1.602-.707.707L6.808 9.5l2.81-2.81.707.708L8.723 9H16zM3 13h4v-1H3zm8-12v1h2v6h-1V3h-1v1H3V3H2v12h10v-4h1v5H1V2h2V1h2.277a1.984 1.984 0 0 1 3.446 0zm-1 1H8v-.318A.682.682 0 0 0 7.318 1h-.636A.682.682 0 0 0 6 1.682V2H4v1h6zM7 6H3v1h4zm-4 4h2V9H3z\"/><path fill=\"none\" d=\"M0 0h16v16H0z\"/></svg>' })))),\n        validBbox\n            ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { placement: \"top\", title: \"open ERDDAP console to customize output\" },\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: \"primary\", tag: \"a\", href: erddapUrl, target: \"_blank\", style: { marginRight: '20px' } }, \"Customize\")),\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { placement: \"top\", title: \"Download standard CSV file with current filters applied\" },\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: \"primary\", tag: \"a\", href: erddapUrl === null || erddapUrl === void 0 ? void 0 : erddapUrl.replace('deep_sea_corals.html', 'deep_sea_corals.csvp'), target: \"_blank\" }, \"Download\")))\n            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { style: { width: '80%', alignContent: 'center' } },\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", null, \"Warning: missing or invalid spatial extent. Please ensure area of interest does not cross the antimeridian (i.e. international date line)\")),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { placement: \"top\", title: \"Download the entire database in a CSV format\" },\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: \"primary\", tag: \"a\", href: CSVfileUrl, target: \"_blank\", style: { width: '230px', marginTop: '20px' } }, \"Download Entire Database\"))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { style: { margin: '20px' } },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", null, \"Note that ERDDAP may take a few minutes to respond to your request\"))));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2VyZGRhcC1xdWVyeS9zcmMvcnVudGltZS93aWRnZXQudHN4PzcyMmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICBBbGxXaWRnZXRQcm9wcyxcbiAganN4LFxuICBJTVN0YXRlLFxuICBSZWFjdFJlZHV4XG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgVG9vbHRpcCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgRXh0ZW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvRXh0ZW50J1xuaW1wb3J0IFNwYXRpYWxSZWZlcmVuY2UgZnJvbSAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJ1xuaW1wb3J0IHdlYk1lcmNhdG9yVXRpbHMgZnJvbSAnZXNyaS9nZW9tZXRyeS9zdXBwb3J0L3dlYk1lcmNhdG9yVXRpbHMnXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG4vLyBpbXBvcnQgeyBMYWJlbCwgUmFkaW8sIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgeyB1c2VTZWxlY3RvciB9ID0gUmVhY3RSZWR1eFxuXG5pbnRlcmZhY2UgQ29vcmRzT2JqZWN0IHtcbiAgeG1pbjogbnVtYmVyXG4gIHltaW46IG51bWJlclxuICB4bWF4OiBudW1iZXJcbiAgeW1heDogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICAvL1RPRE8gZ2V0IFVSTCBmcm9tIFNldHRpbmdzIHBhbmVsXG4gIGNvbnN0IENTVmZpbGVVcmwgPSAnaHR0cHM6Ly9ub2FhLm1hcHMuYXJjZ2lzLmNvbS9ob21lL2l0ZW0uaHRtbD9pZD1mNDY1ODYxYWVjYWM0MTA5ODBhN2M2MDFjZmVjNzg1MCdcblxuICAvLyBnZXQgc3RhdGUgZm9yIHRoaXMgd2lkZ2V0XG4gIGNvbnN0IHdpZGdldFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLndpZGdldHNTdGF0ZVtwcm9wcy53aWRnZXRJZF1cbiAgfSlcblxuICBjb25zdCBleHRlbnQgPSBjb252ZXJ0RXh0ZW50VG9HZW9ncmFwaGljKHdpZGdldFN0YXRlLmV4dGVudClcbiAgLy8gZmxhZyBmb3IgYW50aW1lcmlkaWFuLWNyb3NzaW5nIGV4dGVudFxuICBjb25zdCB2YWxpZEJib3ggPSBleHRlbnQgJiYgKGV4dGVudC54bWluIDwgZXh0ZW50LnhtYXgpXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2lkZ2V0U3RhdGUucXVlcnlTdHJpbmcgPyB3aWRnZXRTdGF0ZT8ucXVlcnlTdHJpbmcgOiAnMT0xJ1xuICBjb25zdCBlcmRkYXBVcmwgPSBidWlsZEVyZGRhcFVybCgpXG5cbiAgZnVuY3Rpb24gY29udmVydEV4dGVudFRvR2VvZ3JhcGhpYyAoY29vcmRzOiBDb29yZHNPYmplY3QpIHtcbiAgICBjb25zdCB3ZWJtZXJjRXh0ZW50ID0gbmV3IEV4dGVudCh7XG4gICAgICB4bWluOiBjb29yZHMueG1pbixcbiAgICAgIHltaW46IGNvb3Jkcy55bWluLFxuICAgICAgeG1heDogY29vcmRzLnhtYXgsXG4gICAgICB5bWF4OiBjb29yZHMueW1heCxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHsgd2tpZDogMTAyMTAwIH0pXG4gICAgfSlcbiAgICByZXR1cm4gKHdlYk1lcmNhdG9yVXRpbHMud2ViTWVyY2F0b3JUb0dlb2dyYXBoaWMod2VibWVyY0V4dGVudCwgZmFsc2UpIGFzIEV4dGVudClcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRXJkZGFwVXJsICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zaWRlIGJ1aWxkRXJkZGFwVXJsLiBxdWVyeVN0cmluZyA9ICcsIHdpZGdldFN0YXRlPy5xdWVyeVN0cmluZylcbiAgICBjb25zdCBzdGRGaWVsZHMgPSAnU2hhbGxvd0ZsYWcsRGF0YXNldElELENhdGFsb2dOdW1iZXIsU2FtcGxlSUQsSW1hZ2VVUkwsUmVwb3NpdG9yeSxTY2llbnRpZmljTmFtZSxWZXJuYWN1bGFyTmFtZUNhdGVnb3J5LFRheG9uUmFuayxJZGVudGlmaWNhdGlvblF1YWxpZmllcixMb2NhbGl0eSxsYXRpdHVkZSxsb25naXR1ZGUsRGVwdGhJbk1ldGVycyxEZXB0aE1ldGhvZCxPYnNlcnZhdGlvbkRhdGUsU3VydmV5SUQsU3RhdGlvbixFdmVudElELFNhbXBsaW5nRXF1aXBtZW50LExvY2F0aW9uQWNjdXJhY3ksUmVjb3JkVHlwZSxEYXRhUHJvdmlkZXInXG4gICAgbGV0IHVybCA9IGAke3Byb3BzLmNvbmZpZy5lcmRkYXBCYXNlVXJsfS5odG1sPyR7c3RkRmllbGRzfSZsYXRpdHVkZT49JHtleHRlbnQueW1pbi50b0ZpeGVkKDQpfSZsYXRpdHVkZTw9JHtleHRlbnQueW1heC50b0ZpeGVkKDQpfSZsb25naXR1ZGU+PSR7ZXh0ZW50LnhtaW4udG9GaXhlZCg0KX0mbG9uZ2l0dWRlPD0ke2V4dGVudC54bWF4LnRvRml4ZWQoNCl9YFxuICAgIGlmIChxdWVyeVN0cmluZyAhPT0gJzE9MScpIHtcbiAgICAgIHVybCArPSAnJicgKyBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMocXVlcnlTdHJpbmcpXG4gICAgfVxuICAgIHJldHVybiB1cmxcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRTcWxUb0VyZGRhcFBhcmFtcyAoc3FsOiBzdHJpbmcpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zaWRlIGNvbnZlcnRTcWxUb0VyZGRhcFBhcmFtcyB3aXRoICcsIHNxbClcbiAgICBjb25zdCBwYXJhbXMgPSBbXVxuXG4gICAgLy8gbWFuaXB1bGF0ZSBTUUwgc3RyaW5nIGludG8gbGlzdCBvZiAzLWVsZW1lbnQgbGlzdHMgKGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpXG4gICAgY29uc3QgY2xhdXNlcyA9IHNxbFxuICAgICAgLnJlcGxhY2UoL1xcKCs/L2csICcnKSAvLyByZXBsYWNlIGxlZnQgcGFyZW5zXG4gICAgICAucmVwbGFjZSgvXFwpKz8vZywgJycpIC8vIHJlcGxhY2UgcmlnaHQgcGFyZW5zXG4gICAgICAucmVwbGFjZSgvTE9XRVIvZywgJycpIC8vIHJlbW92ZSB0aGUgTE9XRVIoKSBmdW5jdGlvblxuICAgICAgLnNwbGl0KC8gYW5kIC9pKVxuICAgICAgLm1hcChlbGVtID0+IHtcbiAgICAgICAgY29uc3QgdCA9IGVsZW0uc3BsaXQoL1xccysvKVxuICAgICAgICAvLyBjb25zdHJ1Y3QgMy1lbGVtZW50IGFycmF5IHdpdGggZmllbGQsIG9wZXJhdG9yLCB2YWx1ZS4gVmFsdWUgbWF5IGhhdmUgbXVsdGlwbGUgd29yZHMgd2hpY2ggbmVlZFxuICAgICAgICAvLyB0byBiZSByZWpvaW5lZCBhbmQgcmVwbGFjZSBzaW5nbGUgcXVvdGVzIHdpdGggZG91YmxlIHF1b3Rlc1xuICAgICAgICByZXR1cm4gdC5zbGljZSgwLCAyKS5jb25jYXQodC5zbGljZSgyKS5qb2luKCcgJykucmVwbGFjZSgvJy9nLCAnXCInKSlcbiAgICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coY2xhdXNlcylcblxuICAgIC8vIGJ1aWxkIGtleS92YWx1ZSBwYWlycyBmb3Igc3BlY2lmaWVkIHBhcmFtZXRlcnNcbiAgICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3Zlcm5hY3VsYXJuYW1lY2F0ZWdvcnknKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goYFZlcm5hY3VsYXJOYW1lQ2F0ZWdvcnk9JHtlbGVtWzJdfWApXG4gICAgfSlcblxuICAgIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnaW1hZ2V1cmwnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goJ0ltYWdlVVJMIT1cIk5BXCInKVxuICAgIH0pXG5cbiAgICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2RlcHRoaW5tZXRlcnMnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goYERlcHRoSW5NZXRlcnMgJHtlbGVtWzFdfSAke2VsZW1bMl19YClcbiAgICB9KVxuXG4gICAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdzY2llbnRpZmljbmFtZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBwYXJhbXMucHVzaChgU2NpZW50aWZpY05hbWU9JHtlbGVtWzJdfWApXG4gICAgfSlcblxuICAgIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnb2JzZXJ2YXRpb255ZWFyJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIHBhcmFtcy5wdXNoKGBPYnNlcnZhdGlvblllYXIgJHtlbGVtWzFdfSAke2VsZW1bMl19YClcbiAgICB9KVxuXG4gICAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdmaXNoY291bmNpbHJlZ2lvbicpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBwYXJhbXMucHVzaChgRmlzaENvdW5jaWxSZWdpb249JHtlbGVtWzJdfWApXG4gICAgfSlcblxuICAgIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnb2NlYW4nKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goYE9jZWFuPVwiJHtmaW5kT2NlYW5OYW1lQnlDb2RlKGVsZW1bMl0pfVwiYClcbiAgICB9KVxuXG4gICAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdwaHlsdW0nKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goYFBoeWx1bT0ke2VsZW1bMl19YClcbiAgICB9KVxuXG4gICAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdjbGFzcycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBwYXJhbXMucHVzaChgQ2xhc3M9JHtlbGVtWzJdfWApXG4gICAgfSlcblxuICAgIC8vIE9yZGVyIGlzIGEgcmVzZXJ2ZWQgd29yZCBhbmQgcmVuYW1lZCBpbiB0aGUgaG9zdGVkIGZlYXR1cmUgbGF5ZXJcbiAgICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29yZGVyXycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBwYXJhbXMucHVzaChgT3JkZXI9JHtlbGVtWzJdfWApXG4gICAgfSlcblxuICAgIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZmFtaWx5JykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIHBhcmFtcy5wdXNoKGBGYW1pbHk9JHtlbGVtWzJdfWApXG4gICAgfSlcblxuICAgIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZ2VudXMnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goYEdlbnVzPSR7ZWxlbVsyXX1gKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyYW1zLmpvaW4oJyYnKVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZE9jZWFuTmFtZUJ5Q29kZSAoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAwOiAnQXJjdGljJyxcbiAgICAgIDE6ICdJbmRpYW4nLFxuICAgICAgMjogJ05vcnRoIEF0bGFudGljJyxcbiAgICAgIDM6ICdOb3J0aCBQYWNpZmljJyxcbiAgICAgIDQ6ICdTb3V0aCBBdGxhbnRpYycsXG4gICAgICA1OiAnU291dGggUGFjaWZpYycsXG4gICAgICA2OiAnU291dGhlcm4nXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXNbY29kZV0gPyB2YWx1ZXNbY29kZV0gOiAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gY29weVVybEJ0biAoKSB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZXJkZGFwVXJsKS50aGVuKCgpID0+IGNvbnNvbGUuZGVidWcoJ2NvcGllZCB0byBjbGlwYm9hcmQnKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtZGVtbyBqaW11LXdpZGdldCBtLTJcIj5cbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAncmlnaHQnIH19PlxuICAgICAgICA8VGV4dEFyZWEgc3R5bGU9e3t3aWR0aDpcIjg1JVwifX0gcmVhZE9ubHk9XCJ0cnVlXCIgdmFsdWU9e2VyZGRhcFVybH0gLz5cbiAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtlcmRkYXBVcmx9IHN0eWxlPXt7IHdpZHRoOiAnODUlJywgaGVpZ2h0OiAnMjUwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19IHJlYWRPbmx5PXt0cnVlfS8+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiQ29weSBVUkwgdG8gY2xpcGJvYXJkXCI+XG4gICAgICAgICAgPEJ1dHRvbiBhcmlhLWxhYmVsPVwiQnV0dG9uXCIgaWNvbiBvbkNsaWNrPXtjb3B5VXJsQnRufSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cbiAgICAgICAgICAgIDxJY29uIGljb249JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTE2IDEwSDguNzIzbDEuNjAyIDEuNjAyLS43MDcuNzA3TDYuODA4IDkuNWwyLjgxLTIuODEuNzA3LjcwOEw4LjcyMyA5SDE2ek0zIDEzaDR2LTFIM3ptOC0xMnYxaDJ2NmgtMVYzaC0xdjFIM1YzSDJ2MTJoMTB2LTRoMXY1SDFWMmgyVjFoMi4yNzdhMS45ODQgMS45ODQgMCAwIDEgMy40NDYgMHptLTEgMUg4di0uMzE4QS42ODIuNjgyIDAgMCAwIDcuMzE4IDFoLS42MzZBLjY4Mi42ODIgMCAwIDAgNiAxLjY4MlYySDR2MWg2ek03IDZIM3YxaDR6bS00IDRoMlY5SDN6XCIvPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMTZ2MTZIMHpcIi8+PC9zdmc+J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcxNXB4JyB9fT5cbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkNvcHkgVVJMIHRvIGNsaXBib2FyZFwiPlxuICAgICAgICAgIDxCdXR0b24gYXJpYS1sYWJlbD1cIkJ1dHRvblwiIGljb24gb25DbGljaz17Y29weVVybEJ0bn0+XG4gICAgICAgICAgICA8SWNvbiBpY29uPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk0xNiAxMEg4LjcyM2wxLjYwMiAxLjYwMi0uNzA3LjcwN0w2LjgwOCA5LjVsMi44MS0yLjgxLjcwNy43MDhMOC43MjMgOUgxNnpNMyAxM2g0di0xSDN6bTgtMTJ2MWgydjZoLTFWM2gtMXYxSDNWM0gydjEyaDEwdi00aDF2NUgxVjJoMlYxaDIuMjc3YTEuOTg0IDEuOTg0IDAgMCAxIDMuNDQ2IDB6bS0xIDFIOHYtLjMxOEEuNjgyLjY4MiAwIDAgMCA3LjMxOCAxaC0uNjM2QS42ODIuNjgyIDAgMCAwIDYgMS42ODJWMkg0djFoNnpNNyA2SDN2MWg0em0tNCA0aDJWOUgzelwiLz48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDE2djE2SDB6XCIvPjwvc3ZnPidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICAge3ZhbGlkQmJveFxuICAgICAgICA/IDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIm9wZW4gRVJEREFQIGNvbnNvbGUgdG8gY3VzdG9taXplIG91dHB1dFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiB0YWc9XCJhXCIgaHJlZj17ZXJkZGFwVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzIwcHgnIH19PkN1c3RvbWl6ZTwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiRG93bmxvYWQgc3RhbmRhcmQgQ1NWIGZpbGUgd2l0aCBjdXJyZW50IGZpbHRlcnMgYXBwbGllZFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiB0YWc9XCJhXCIgaHJlZj17ZXJkZGFwVXJsPy5yZXBsYWNlKCdkZWVwX3NlYV9jb3JhbHMuaHRtbCcsICdkZWVwX3NlYV9jb3JhbHMuY3N2cCcpfSB0YXJnZXQ9XCJfYmxhbmtcIiA+RG93bmxvYWQ8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+XG4gICAgICAgIDogPGRpdiBzdHlsZT17eyB3aWR0aDogJzgwJScsIGFsaWduQ29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8cD5XYXJuaW5nOiBtaXNzaW5nIG9yIGludmFsaWQgc3BhdGlhbCBleHRlbnQuIFBsZWFzZSBlbnN1cmUgYXJlYSBvZiBpbnRlcmVzdCBkb2VzIG5vdCBjcm9zcyB0aGUgYW50aW1lcmlkaWFuXG4gICAgICAgICAgICAgIChpLmUuIGludGVybmF0aW9uYWwgZGF0ZSBsaW5lKTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICB9XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJEb3dubG9hZCB0aGUgZW50aXJlIGRhdGFiYXNlIGluIGEgQ1NWIGZvcm1hdFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiB0YWc9XCJhXCIgaHJlZj17Q1NWZmlsZVVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgd2lkdGg6ICcyMzBweCcsIG1hcmdpblRvcDogJzIwcHgnIH19PkRvd25sb2FkIEVudGlyZSBEYXRhYmFzZTwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcyMHB4JyB9fT5cbiAgICAgICAgPHNwYW4+Tm90ZSB0aGF0IEVSRERBUCBtYXkgdGFrZSBhIGZldyBtaW51dGVzIHRvIHJlc3BvbmQgdG8geW91ciByZXF1ZXN0PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/erddap-query/src/runtime/widget.tsx\n");

/***/ }),

/***/ "esri/geometry/Extent":
/*!***************************************!*\
  !*** external "esri/geometry/Extent" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__;

/***/ }),

/***/ "esri/geometry/SpatialReference":
/*!*************************************************!*\
  !*** external "esri/geometry/SpatialReference" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__;

/***/ }),

/***/ "esri/geometry/support/webMercatorUtils":
/*!*********************************************************!*\
  !*** external "esri/geometry/support/webMercatorUtils" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/erddap-query/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});