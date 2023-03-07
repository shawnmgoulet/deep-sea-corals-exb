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
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/map-update-status/src/runtime/widget.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/** @jsx jsx */



function Widget(props) {
    var _a;
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isUpdating, setIsUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const timeoutId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const timeoutForMapUpdate = 30000;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!view) {
            return;
        }
        function setMapUpdateTimeout() {
            timeoutId.current = setTimeout(overrideMapStatus, timeoutForMapUpdate);
        }
        function overrideMapStatus() {
            console.warn(`forcing MapView 'updating' status to 'false' after waiting for ${timeoutForMapUpdate / 1000} seconds`);
            setIsUpdating(false);
        }
        const mapView = view.view;
        const updatingWatchHandle = mapView.watch('updating', (newStatus) => {
            // don't allow isUpdating to remain true for > 30 secs
            if (newStatus) {
                setMapUpdateTimeout();
            }
            else {
                clearTimeout(timeoutId.current);
            }
            setIsUpdating(newStatus);
        });
        return () => {
            // remove at time componment is destroyed
            if (updatingWatchHandle) {
                updatingWatchHandle.remove();
            }
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, [view]);
    // only called when widget first loaded
    const activeViewChangeHandler = (jmv) => {
        if (!jmv) {
            throw new Error('no MapView');
        }
        setView(jmv);
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-use-map-view", style: { width: '100%', height: '100%', overflow: 'hidden' } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { overflowY: 'auto', height: '100%', paddingLeft: '5px' } },
            (!view)
                ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "MapView must be configured"))
                : '',
            (!isUpdating)
                ? ''
                : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 'medium', color: 'red' } }, "map is updating..."))));
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdXBkYXRlLXN0YXR1cy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQUNnQztBQUNJO0FBQ1k7QUFJaEQsU0FBUyxNQUFNLENBQUUsS0FBK0I7O0lBQzdELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsK0NBQVEsQ0FBYyxJQUFJLENBQUM7SUFDbkQsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUNuRCxNQUFNLFNBQVMsR0FBRyw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUM5QixNQUFNLG1CQUFtQixHQUFHLEtBQUs7SUFFakMsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBTTtTQUFFO1FBRXJCLFNBQVMsbUJBQW1CO1lBQzFCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO1FBQ3hFLENBQUM7UUFFRCxTQUFTLGlCQUFpQjtZQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLGtFQUFrRSxtQkFBbUIsR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUNwSCxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSTtRQUV6QixNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQ3ZDLFVBQVUsRUFDVixDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ1osc0RBQXNEO1lBQ3RELElBQUksU0FBUyxFQUFFO2dCQUNiLG1CQUFtQixFQUFFO2FBQ3RCO2lCQUFNO2dCQUNMLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO2FBQ2hDO1lBQ0QsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDLENBQUM7UUFFSixPQUFPLEdBQUcsRUFBRTtZQUNWLHlDQUF5QztZQUN6QyxJQUFJLG1CQUFtQixFQUFFO2dCQUN2QixtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7YUFDN0I7WUFDRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7YUFBRTtRQUM1RCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFVix1Q0FBdUM7SUFDdkMsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLEdBQWdCLEVBQUUsRUFBRTtRQUNuRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FBRTtRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ2QsQ0FBQztJQUVELE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMscUJBQXFCLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7UUFDL0YsK0NBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFDMUMsa0JBQWtCLEVBQUUsdUJBQXVCLEdBQ3RCO1FBRXZCLHdEQUFLLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO1lBQ2xFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sQ0FBQyxDQUFDO29CQUNFLDBGQUF1QyxDQUNuQztnQkFDUixDQUFDLENBQUMsRUFBRTtZQUVMLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLEVBQUU7Z0JBQ0osQ0FBQyxDQUFDLHlEQUFNLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSx5QkFBMkIsQ0FFNUUsQ0FDRixDQUNQO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdXBkYXRlLXN0YXR1cy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEFsbFdpZGdldFByb3BzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuLy8gaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVSU1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXG4gIGNvbnN0IFtpc1VwZGF0aW5nLCBzZXRJc1VwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0aW1lb3V0SWQgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgdGltZW91dEZvck1hcFVwZGF0ZSA9IDMwMDAwXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZpZXcpIHsgcmV0dXJuIH1cblxuICAgIGZ1bmN0aW9uIHNldE1hcFVwZGF0ZVRpbWVvdXQgKCkge1xuICAgICAgdGltZW91dElkLmN1cnJlbnQgPSBzZXRUaW1lb3V0KG92ZXJyaWRlTWFwU3RhdHVzLCB0aW1lb3V0Rm9yTWFwVXBkYXRlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG92ZXJyaWRlTWFwU3RhdHVzICgpIHtcbiAgICAgIGNvbnNvbGUud2FybihgZm9yY2luZyBNYXBWaWV3ICd1cGRhdGluZycgc3RhdHVzIHRvICdmYWxzZScgYWZ0ZXIgd2FpdGluZyBmb3IgJHt0aW1lb3V0Rm9yTWFwVXBkYXRlIC8gMTAwMH0gc2Vjb25kc2ApXG4gICAgICBzZXRJc1VwZGF0aW5nKGZhbHNlKVxuICAgIH1cblxuICAgIGNvbnN0IG1hcFZpZXcgPSB2aWV3LnZpZXdcblxuICAgIGNvbnN0IHVwZGF0aW5nV2F0Y2hIYW5kbGUgPSBtYXBWaWV3LndhdGNoKFxuICAgICAgJ3VwZGF0aW5nJyxcbiAgICAgIChuZXdTdGF0dXMpID0+IHtcbiAgICAgICAgLy8gZG9uJ3QgYWxsb3cgaXNVcGRhdGluZyB0byByZW1haW4gdHJ1ZSBmb3IgPiAzMCBzZWNzXG4gICAgICAgIGlmIChuZXdTdGF0dXMpIHtcbiAgICAgICAgICBzZXRNYXBVcGRhdGVUaW1lb3V0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkLmN1cnJlbnQpXG4gICAgICAgIH1cbiAgICAgICAgc2V0SXNVcGRhdGluZyhuZXdTdGF0dXMpXG4gICAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIHJlbW92ZSBhdCB0aW1lIGNvbXBvbm1lbnQgaXMgZGVzdHJveWVkXG4gICAgICBpZiAodXBkYXRpbmdXYXRjaEhhbmRsZSkge1xuICAgICAgICB1cGRhdGluZ1dhdGNoSGFuZGxlLnJlbW92ZSgpXG4gICAgICB9XG4gICAgICBpZiAodGltZW91dElkLmN1cnJlbnQpIHsgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZC5jdXJyZW50KSB9XG4gICAgfVxuICB9LCBbdmlld10pXG5cbiAgLy8gb25seSBjYWxsZWQgd2hlbiB3aWRnZXQgZmlyc3QgbG9hZGVkXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBpZiAoIWptdikgeyB0aHJvdyBuZXcgRXJyb3IoJ25vIE1hcFZpZXcnKSB9XG4gICAgc2V0VmlldyhqbXYpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXVzZS1tYXAtdmlld1wiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfT5cbiAgICAgIDwvSmltdU1hcFZpZXdDb21wb25lbnQ+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIGhlaWdodDogJzEwMCUnLCBwYWRkaW5nTGVmdDogJzVweCcgfX0+XG4gICAgICAgIHsoIXZpZXcpXG4gICAgICAgICAgPyA8ZGl2PlxuICAgICAgICAgICAgICA8c3Bhbj5NYXBWaWV3IG11c3QgYmUgY29uZmlndXJlZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICB7KCFpc1VwZGF0aW5nKVxuICAgICAgICAgID8gJydcbiAgICAgICAgICA6IDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnbWVkaXVtJywgY29sb3I6ICdyZWQnIH19Pm1hcCBpcyB1cGRhdGluZy4uLjwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==