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

/***/ "./your-extensions/widgets/get-map-coordinates/src/setting/translations/default.ts":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/setting/translations/default.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    selectMapWidget: "Select Map Widget",
    settings: "Settings",
    showScale: "Show Scale",
    showZoom: "Show Zoom"
});


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
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/setting/setting.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/get-map-coordinates/src/setting/translations/default.ts");
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
    const onShowScalePropertyChange = (evt) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set("showScale", evt.currentTarget.checked)
        });
    };
    const onShowZoomPropertyChange = (evt) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set("showZoom", evt.currentTarget.checked)
        });
    };
    const onMapWidgetSelected = (useMapWidgetIds) => {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      .widget-setting-get-map-coordinates {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: style },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-get-map-coordinates" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { className: "map-selector-section", title: props.intl.formatMessage({
                    id: "mapWidgetLabel",
                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].selectMapWidget
                }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: props.useMapWidgetIds }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: props.intl.formatMessage({
                    id: "settingsLabel",
                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].settings
                }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 showZoom" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "checkbox-row" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "showZoom", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].showZoom })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: (props.config && props.config.showZoom) || false, onChange: onShowZoomPropertyChange })))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 showScale" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "checkbox-row" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "showScale", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].showScale })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: (props.config && props.config.showScale) ||
                                    false, onChange: onShowScalePropertyChange }))))))));
}
;

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixlQUFlLEVBQUUsbUJBQW1CO0lBQ3BDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFFBQVEsRUFBRSxXQUFXO0NBQ3RCLEVBQUM7Ozs7Ozs7Ozs7OztBQ0xGOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDNEQ7QUFNakI7QUFDWjtBQUV3QjtBQUV6RCw2QkFBZSxvQ0FBVSxLQUFzQztJQUU3RCxNQUFNLHlCQUF5QixHQUFHLENBQUMsR0FBc0MsRUFBRSxFQUFFO1FBQzNFLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztTQUNqRSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixNQUFNLHdCQUF3QixHQUFHLENBQUMsR0FBc0MsRUFBRSxFQUFFO1FBQzFFLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztTQUNoRSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixNQUFNLG1CQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBRSxFQUFFO1FBQ3hELEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osZUFBZSxFQUFFLGVBQWU7U0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsTUFBTSxLQUFLLEdBQUcsMENBQUc7Ozs7Ozs7O0tBUWQsQ0FBQztJQUNKLE9BQU8sQ0FDTCx3REFBSyxHQUFHLEVBQUUsS0FBSztRQUNiLHdEQUFLLFNBQVMsRUFBQyxvQ0FBb0M7WUFDakQsK0NBQUMsK0VBQWMsSUFDYixTQUFTLEVBQUMsc0JBQXNCLEVBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDOUIsRUFBRSxFQUFFLGdCQUFnQjtvQkFDcEIsY0FBYyxFQUFFLDZFQUFtQztpQkFDcEQsQ0FBQztnQkFFRiwrQ0FBQywyRUFBVTtvQkFDVCwrQ0FBQyxrRkFBaUIsSUFDaEIsUUFBUSxFQUFFLG1CQUFtQixFQUM3QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWUsR0FDdEMsQ0FDUyxDQUNFO1lBRWpCLCtDQUFDLCtFQUFjLElBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUM5QixFQUFFLEVBQUUsZUFBZTtvQkFDbkIsY0FBYyxFQUFFLHNFQUE0QjtpQkFDN0MsQ0FBQztnQkFFRiwrQ0FBQywyRUFBVTtvQkFDVCx3REFBSyxTQUFTLEVBQUMsZ0JBQWdCO3dCQUM3Qix3REFBSyxTQUFTLEVBQUMsY0FBYzs0QkFDM0I7Z0NBQ0UsK0NBQUMsdURBQWdCLElBQ2YsRUFBRSxFQUFDLFVBQVUsRUFDYixjQUFjLEVBQUUsc0VBQTRCLEdBQzVDLENBQ0k7NEJBQ1IsK0NBQUMsMkNBQU0sSUFDTCxPQUFPLEVBQ0wsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxFQUVsRCxRQUFRLEVBQUUsd0JBQXdCLEdBQ2xDLENBQ0UsQ0FDRixDQUNLO2dCQUViLCtDQUFDLDJFQUFVO29CQUNULHdEQUFLLFNBQVMsRUFBQyxpQkFBaUI7d0JBQzlCLHdEQUFLLFNBQVMsRUFBQyxjQUFjOzRCQUMzQjtnQ0FDRSwrQ0FBQyx1REFBZ0IsSUFDZixFQUFFLEVBQUMsV0FBVyxFQUNkLGNBQWMsRUFBRSx1RUFBNkIsR0FDN0MsQ0FDSTs0QkFDUiwrQ0FBQywyQ0FBTSxJQUNMLE9BQU8sRUFDTCxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7b0NBQ3hDLEtBQUssRUFFUCxRQUFRLEVBQUUseUJBQXlCLEdBQ25DLENBQ0UsQ0FDRixDQUNLLENBQ0UsQ0FDYixDQUNGLENBQ1AsQ0FBQztBQUNKLENBQUM7QUFBQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2dldC1tYXAtY29vcmRpbmF0ZXMvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgc2VsZWN0TWFwV2lkZ2V0OiBcIlNlbGVjdCBNYXAgV2lkZ2V0XCIsXG4gIHNldHRpbmdzOiBcIlNldHRpbmdzXCIsXG4gIHNob3dTY2FsZTogXCJTaG93IFNjYWxlXCIsXG4gIHNob3dab29tOiBcIlNob3cgWm9vbVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG4vKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjEgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmltcG9ydCB7IFJlYWN0LCBGb3JtYXR0ZWRNZXNzYWdlLCBjc3MsIGpzeCB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XG5pbXBvcnQge1xuICBNYXBXaWRnZXRTZWxlY3RvcixcbiAgU2V0dGluZ1NlY3Rpb24sXG4gIFNldHRpbmdSb3dcbn0gZnJvbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgZGVmYXVsdEkxOG5NZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pIHtcblxuICBjb25zdCBvblNob3dTY2FsZVByb3BlcnR5Q2hhbmdlID0gKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldChcInNob3dTY2FsZVwiLCBldnQuY3VycmVudFRhcmdldC5jaGVja2VkKVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uU2hvd1pvb21Qcm9wZXJ0eUNoYW5nZSA9IChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoXCJzaG93Wm9vbVwiLCBldnQuY3VycmVudFRhcmdldC5jaGVja2VkKVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0eWxlID0gY3NzYFxuICAgICAgLndpZGdldC1zZXR0aW5nLWdldC1tYXAtY29vcmRpbmF0ZXMge1xuICAgICAgICAuY2hlY2tib3gtcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtzdHlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWdldC1tYXAtY29vcmRpbmF0ZXNcIj5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFwLXNlbGVjdG9yLXNlY3Rpb25cIlxuICAgICAgICAgIHRpdGxlPXtwcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaWQ6IFwibWFwV2lkZ2V0TGFiZWxcIixcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0STE4bk1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uTWFwV2lkZ2V0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICAgICAgdGl0bGU9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogXCJzZXR0aW5nc0xhYmVsXCIsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdEkxOG5NZXNzYWdlcy5zZXR0aW5nc1xuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHNob3dab29tXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtcm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaG93Wm9vbVwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLnNob3dab29tfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAocHJvcHMuY29uZmlnICYmIHByb3BzLmNvbmZpZy5zaG93Wm9vbSkgfHwgZmFsc2VcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNob3dab29tUHJvcGVydHlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG5cbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgc2hvd1NjYWxlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtcm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaG93U2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5zaG93U2NhbGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy5jb25maWcgJiYgcHJvcHMuY29uZmlnLnNob3dTY2FsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNob3dTY2FsZVByb3BlcnR5Q2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==