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
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/dsc-models/src/runtime/widget.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */


// import defaultMessages from './translations/default'
// import { defaultMessages as jimuUIMessages } from 'jimu-ui'


function Widget(props) {
    var _a;
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_2__["default"].useState(true);
    const [optionsList, setOptionsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [selectedLayerId, setSelectedLayerId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [mapLayer, setMapLayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const graphicsLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    // TODO should sync of map w/ Select be in useEffect? if so, why doesn't the following work?
    // useEffect(() => {
    //   if (!selectedLayerId || !mapLayer) { return }
    //   mapLayer.allSublayers.forEach(it => {
    //     if (it.id !== selectedLayerId && !it.sublayers) {
    //       it.visible = false
    //     } else if (it.id === selectedLayerId) {
    //       it.visible = true
    //     }
    //   })
    // }, [selectedLayerId, mapLayer])
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!view) {
            return;
        }
        const graphicsLayer = view.view.map.layers.find(it => it.type === 'graphics');
        if (!graphicsLayer) {
            return;
        }
        if (checked && selectedLayerId) {
            graphicsLayer.visible = false;
        }
        else {
            graphicsLayer.visible = true;
        }
    }, [view, selectedLayerId, checked]);
    // runs once
    const activeViewChangeHandler = (jmv) => {
        if (!jmv) {
            console.warn('no MapView');
            return;
        }
        setView(jmv);
        const modelLayerView = jmv.view.layerViews.find(it => it.layer.title === props.config.modelsLayerName && it.layer.type === 'map-image');
        if (!modelLayerView) {
            console.warn('DSC Model layer not found!');
        }
        const modelLayer = modelLayerView.layer;
        setMapLayer(modelLayer);
        // hack to ensure all models layers are initially off
        modelLayer.allSublayers.forEach(it => {
            if (!it.sublayers) {
                it.visible = false;
            }
        });
        const alllayers = modelLayer.allSublayers.map(sublayer => {
            return { id: sublayer.id, label: sublayer.title, parent: !!sublayer.sublayers };
        });
        alllayers.sort((a, b) => a.id - b.id);
        setOptionsList(alllayers.toArray());
    };
    function hideAllButtonHandler(e) {
        mapLayer.allSublayers.forEach(it => {
            if (!it.sublayers) {
                it.visible = false;
            }
        });
        setSelectedLayerId(null);
    }
    function modelLayerChangeHandler(e) {
        console.log('inside modelLayerChangeHandler with ', e.target.value);
        const selectedId = parseInt(e.target.value);
        setSelectedLayerId(selectedId);
        mapLayer.allSublayers.forEach(it => {
            // don't change visibility of group layers
            if (it.id !== selectedId && !it.sublayers) {
                it.visible = false;
            }
            else if (it.id === selectedId) {
                it.visible = true;
            }
        });
    }
    function checkboxHandler(evt, checked) {
        setChecked(checked);
    }
    function buildSelect() {
        if (!optionsList) {
            return '';
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { onChange: modelLayerChangeHandler, placeholder: "Select a model layer...", value: selectedLayerId }, optionsList.map(item => {
            if (item.parent) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { header: true }, item.label);
            }
            else {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item.id }, item.label);
            }
        })));
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-demo jimu-widget", style: { width: '90%' } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '90%', paddingLeft: '10px', paddingRight: '10px' } }, buildSelect()),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '90%', padding: '10px' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: checked, onChange: checkboxHandler, "aria-label": "Hide Hexbins" }),
            " Hide Hexbins"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '90%' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: hideAllButtonHandler, style: { margin: '10px' } }, "Reset"))));
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9kc2MtbW9kZWxzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm5ELGVBQWU7QUFLRztBQUM2QztBQUUvRCx1REFBdUQ7QUFDdkQsOERBQThEO0FBQ0o7QUFJQTtBQVEzQyxTQUFTLE1BQU0sQ0FBRSxLQUErQjs7SUFDN0QsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRywrQ0FBUSxDQUFjLElBQUksQ0FBQztJQUNuRCxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLHNEQUFjLENBQUMsSUFBSSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsK0NBQVEsQ0FBZ0IsRUFBRSxDQUFDO0lBQ2pFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsR0FBRywrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUM1RCxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxH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Q0FBQztJQUVELE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMseUJBQXlCLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtRQUM5RCwrQ0FBQyw2REFBb0IsSUFDbkIsY0FBYyxFQUFFLFdBQUssQ0FBQyxlQUFlLDBDQUFHLENBQUMsQ0FBQyxFQUMxQyxrQkFBa0IsRUFBRSx1QkFBdUIsR0FDM0M7UUFDRix3REFBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxJQUN0RSxXQUFXLEVBQUUsQ0FDUjtRQUVOLHdEQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtZQUMzQywrQ0FBQyw2Q0FBUSxJQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsZ0JBQWEsY0FBYyxHQUFFOzRCQUM5RTtRQUVOLHdEQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDNUIsK0NBQUMsMkNBQU0sSUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFnQixDQUMxRSxDQUNGLENBQ1A7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2RzYy1tb2RlbHMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cblxuaW1wb3J0IHtcbiAgQWxsV2lkZ2V0UHJvcHMsXG4gIGpzeFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IENhbGNpdGVTZWxlY3QsIENhbGNpdGVPcHRpb24sIENhbGNpdGVPcHRpb25Hcm91cCB9IGZyb20gJ2NhbGNpdGUtY29tcG9uZW50cydcbi8vIGltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbi8vIGltcG9ydCB7IGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBNYXBJbWFnZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL01hcEltYWdlTGF5ZXInXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJ1xuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QsIE9wdGlvbiwgQ2hlY2tib3ggfSBmcm9tICdqaW11LXVpJ1xuXG5pbnRlcmZhY2UgTW9kZWxPcHRpb24ge1xuICBpZDogbnVtYmVyXG4gIGxhYmVsOiBzdHJpbmdcbiAgcGFyZW50PzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtvcHRpb25zTGlzdCwgc2V0T3B0aW9uc0xpc3RdID0gdXNlU3RhdGU8TW9kZWxPcHRpb25bXT4oW10pXG4gIGNvbnN0IFtzZWxlY3RlZExheWVySWQsIHNldFNlbGVjdGVkTGF5ZXJJZF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbWFwTGF5ZXIsIHNldE1hcExheWVyXSA9IHVzZVN0YXRlPE1hcEltYWdlTGF5ZXI+KClcbiAgY29uc3QgZ3JhcGhpY3NMYXllclJlZiA9IHVzZVJlZjxHcmFwaGljc0xheWVyPigpXG5cbiAgLy8gVE9ETyBzaG91bGQgc3luYyBvZiBtYXAgdy8gU2VsZWN0IGJlIGluIHVzZUVmZmVjdD8gaWYgc28sIHdoeSBkb2Vzbid0IHRoZSBmb2xsb3dpbmcgd29yaz9cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoIXNlbGVjdGVkTGF5ZXJJZCB8fCAhbWFwTGF5ZXIpIHsgcmV0dXJuIH1cblxuICAvLyAgIG1hcExheWVyLmFsbFN1YmxheWVycy5mb3JFYWNoKGl0ID0+IHtcbiAgLy8gICAgIGlmIChpdC5pZCAhPT0gc2VsZWN0ZWRMYXllcklkICYmICFpdC5zdWJsYXllcnMpIHtcbiAgLy8gICAgICAgaXQudmlzaWJsZSA9IGZhbHNlXG4gIC8vICAgICB9IGVsc2UgaWYgKGl0LmlkID09PSBzZWxlY3RlZExheWVySWQpIHtcbiAgLy8gICAgICAgaXQudmlzaWJsZSA9IHRydWVcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyB9LCBbc2VsZWN0ZWRMYXllcklkLCBtYXBMYXllcl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZpZXcpIHsgcmV0dXJuIH1cbiAgICBjb25zdCBncmFwaGljc0xheWVyOiBHcmFwaGljc0xheWVyID0gdmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChpdCA9PiBpdC50eXBlID09PSAnZ3JhcGhpY3MnKSBhcyBHcmFwaGljc0xheWVyXG4gICAgaWYgKCFncmFwaGljc0xheWVyKSB7IHJldHVybiB9XG4gICAgaWYgKGNoZWNrZWQgJiYgc2VsZWN0ZWRMYXllcklkKSB7XG4gICAgICBncmFwaGljc0xheWVyLnZpc2libGUgPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBncmFwaGljc0xheWVyLnZpc2libGUgPSB0cnVlXG4gICAgfVxuICB9LCBbdmlldywgc2VsZWN0ZWRMYXllcklkLCBjaGVja2VkXSlcblxuICAvLyBydW5zIG9uY2VcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmICgham12KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ25vIE1hcFZpZXcnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFZpZXcoam12KVxuICAgIGNvbnN0IG1vZGVsTGF5ZXJWaWV3ID0gam12LnZpZXcubGF5ZXJWaWV3cy5maW5kKGl0ID0+IGl0LmxheWVyLnRpdGxlID09PSBwcm9wcy5jb25maWcubW9kZWxzTGF5ZXJOYW1lICYmIGl0LmxheWVyLnR5cGUgPT09ICdtYXAtaW1hZ2UnKVxuICAgIGlmICghbW9kZWxMYXllclZpZXcpIHsgY29uc29sZS53YXJuKCdEU0MgTW9kZWwgbGF5ZXIgbm90IGZvdW5kIScpIH1cbiAgICBjb25zdCBtb2RlbExheWVyID0gbW9kZWxMYXllclZpZXcubGF5ZXIgYXMgTWFwSW1hZ2VMYXllclxuICAgIHNldE1hcExheWVyKG1vZGVsTGF5ZXIpXG5cbiAgICAvLyBoYWNrIHRvIGVuc3VyZSBhbGwgbW9kZWxzIGxheWVycyBhcmUgaW5pdGlhbGx5IG9mZlxuICAgIG1vZGVsTGF5ZXIuYWxsU3VibGF5ZXJzLmZvckVhY2goaXQgPT4ge1xuICAgICAgaWYgKCFpdC5zdWJsYXllcnMpIHtcbiAgICAgICAgaXQudmlzaWJsZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGFsbGxheWVycyA9IG1vZGVsTGF5ZXIuYWxsU3VibGF5ZXJzLm1hcChzdWJsYXllciA9PiB7XG4gICAgICByZXR1cm4geyBpZDogc3VibGF5ZXIuaWQsIGxhYmVsOiBzdWJsYXllci50aXRsZSwgcGFyZW50OiAhIXN1YmxheWVyLnN1YmxheWVycyB9XG4gICAgfSlcbiAgICBhbGxsYXllcnMuc29ydCgoYSwgYikgPT4gYS5pZCAtIGIuaWQpXG4gICAgc2V0T3B0aW9uc0xpc3QoYWxsbGF5ZXJzLnRvQXJyYXkoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVBbGxCdXR0b25IYW5kbGVyIChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50Pikge1xuICAgIG1hcExheWVyLmFsbFN1YmxheWVycy5mb3JFYWNoKGl0ID0+IHtcbiAgICAgIGlmICghaXQuc3VibGF5ZXJzKSB7XG4gICAgICAgIGl0LnZpc2libGUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0pXG4gICAgc2V0U2VsZWN0ZWRMYXllcklkKG51bGwpXG4gIH1cblxuICBmdW5jdGlvbiBtb2RlbExheWVyQ2hhbmdlSGFuZGxlciAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBtb2RlbExheWVyQ2hhbmdlSGFuZGxlciB3aXRoICcsIGUudGFyZ2V0LnZhbHVlKVxuICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRTZWxlY3RlZExheWVySWQoc2VsZWN0ZWRJZClcbiAgICBtYXBMYXllci5hbGxTdWJsYXllcnMuZm9yRWFjaChpdCA9PiB7XG4gICAgICAvLyBkb24ndCBjaGFuZ2UgdmlzaWJpbGl0eSBvZiBncm91cCBsYXllcnNcbiAgICAgIGlmIChpdC5pZCAhPT0gc2VsZWN0ZWRJZCAmJiAhaXQuc3VibGF5ZXJzKSB7XG4gICAgICAgIGl0LnZpc2libGUgPSBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChpdC5pZCA9PT0gc2VsZWN0ZWRJZCkge1xuICAgICAgICBpdC52aXNpYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjaGVja2JveEhhbmRsZXIgKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBzZXRDaGVja2VkKGNoZWNrZWQpXG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFNlbGVjdCAoKSB7XG4gICAgaWYgKCFvcHRpb25zTGlzdCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXttb2RlbExheWVyQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBtb2RlbCBsYXllci4uLlwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZExheWVySWR9XG4gICAgICA+XG4gICAgICAgIHtvcHRpb25zTGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gPE9wdGlvbiBoZWFkZXI+e2l0ZW0ubGFiZWx9PC9PcHRpb24+XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtpdGVtLmlkfT57aXRlbS5sYWJlbH08L09wdGlvbj5cbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICA8L1NlbGVjdD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWRlbW8gamltdS13aWRnZXRcIiBzdHlsZT17eyB3aWR0aDogJzkwJScgfX0+XG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc5MCUnLCBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nUmlnaHQ6ICcxMHB4JyB9fT5cbiAgICAgIHtidWlsZFNlbGVjdCgpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc5MCUnLCBwYWRkaW5nOiAnMTBweCcgfX0+XG4gICAgICAgIDxDaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17Y2hlY2tib3hIYW5kbGVyfSBhcmlhLWxhYmVsPVwiSGlkZSBIZXhiaW5zXCIvPiBIaWRlIEhleGJpbnNcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fT5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGlkZUFsbEJ1dHRvbkhhbmRsZXJ9IHN0eWxlPXt7IG1hcmdpbjogJzEwcHgnIH19PlJlc2V0PC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9