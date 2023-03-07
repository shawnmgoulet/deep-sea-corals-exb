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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/h3-layer/src/actions/update-layer-action.ts ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateLayerAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class UpdateLayerAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        // TODO limit to DataSourceFilterChangeMessage, ExtentChangeMessage, DataRecordsSelectionChange
        return true;
    }
    filterMessage(message) {
        // TODO limit to DataSourceFilterChangeMessage, ExtentChangeMessage, DataRecordsSelectionChange
        return true;
    }
    //set action setting uri
    getSettingComponentUri(messageType, messageWidgetId) {
        return 'actions/update-layer-action-setting';
    }
    onExecute(message, actionConfig) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:
                const dsFilterChangeMessage = message;
                // console.log('MessageHandlerAction: got DataSourceFilterChangeMessage', message, actionConfig)
                // construct DataSource and get the query parameters
                const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsFilterChangeMessage.dataSourceId);
                const queryParams = dataSource.getCurrentQueryParams();
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.widgetId, 'queryParams', queryParams.where));
                break;
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:
                // console.log('MessageHandlerAction: got ExtentChangeMessage', message, actionConfig)
                const extentChangeMessage = message;
                //
                // until we start drawing tiles just for the current view extent, no need to update and trigger a re-render
                //
                // trigger an update for the widget when Extent is different from previous.
                // Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)
                // getAppStore().dispatch(appActions.widgetStatePropChange(
                //   this.widgetId,
                //   'extent',
                //   {
                //     xmin: extentChangeMessage.extent.xmin,
                //     ymin: extentChangeMessage.extent.ymin,
                //     xmax: extentChangeMessage.extent.xmax,
                //     ymax: extentChangeMessage.extent.ymax
                //   })
                // )
                break;
            // TODO may be able to use this message to identify the selected polygon
            // but currently return empty array for selected feature on client-side layer
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                // console.log('MessageHandlerAction: got DataRecordsSelectionChangeMessage', message, actionConfig)
                const dataRecordsChangeMessage = message;
                break;
        }
        return true;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9oMy1sYXllci9kaXN0L2FjdGlvbnMvdXBkYXRlLWxheWVyLWFjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDT2tCO0FBRUgsTUFBTSxpQkFBa0IsU0FBUSw0REFBcUI7SUFDbEUsd0JBQXdCLENBQUUsa0JBQXNDO1FBQzlELCtGQUErRjtRQUMvRixPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQsYUFBYSxDQUFFLE9BQWdCO1FBQzdCLCtGQUErRjtRQUMvRixPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQsd0JBQXdCO0lBQ3hCLHNCQUFzQixDQUFFLFdBQXdCLEVBQUUsZUFBd0I7UUFDeEUsT0FBTyxxQ0FBcUM7SUFDOUMsQ0FBQztJQUVELFNBQVMsQ0FBRSxPQUFnQixFQUFFLFlBQWtCO1FBQzdDLFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQixLQUFLLHlFQUFrQztnQkFDckMsTUFBTSxxQkFBcUIsR0FBRyxPQUF3QztnQkFDdEUsZ0dBQWdHO2dCQUVoRyxvREFBb0Q7Z0JBQ3BELE1BQU0sVUFBVSxHQUFHLG9FQUE2QixFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBd0I7Z0JBQzNILE1BQU0sV0FBVyxHQUFtQixVQUFVLENBQUMscUJBQXFCLEVBQUU7Z0JBQ3RFLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUVBQWdDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6RyxNQUFLO1lBRVAsS0FBSywrREFBd0I7Z0JBQzNCLHNGQUFzRjtnQkFDdEYsTUFBTSxtQkFBbUIsR0FBRyxPQUE4QjtnQkFDMUQsRUFBRTtnQkFDRiwyR0FBMkc7Z0JBQzNHLEVBQUU7Z0JBQ0YsMkVBQTJFO2dCQUMzRSx1SEFBdUg7Z0JBQ3ZILDJEQUEyRDtnQkFDM0QsbUJBQW1CO2dCQUNuQixjQUFjO2dCQUNkLE1BQU07Z0JBQ04sNkNBQTZDO2dCQUM3Qyw2Q0FBNkM7Z0JBQzdDLDZDQUE2QztnQkFDN0MsNENBQTRDO2dCQUM1QyxPQUFPO2dCQUNQLElBQUk7Z0JBQ0osTUFBSztZQUNQLHdFQUF3RTtZQUN4RSw2RUFBNkU7WUFDN0UsS0FBSyw2RUFBc0M7Z0JBQ3pDLG9HQUFvRztnQkFDcEcsTUFBTSx3QkFBd0IsR0FBRyxPQUE0QztnQkFDN0UsTUFBSztTQUNSO1FBRUQsT0FBTyxJQUFJO0lBQ2IsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2gzLWxheWVyL3NyYy9hY3Rpb25zL3VwZGF0ZS1sYXllci1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgQWJzdHJhY3RNZXNzYWdlQWN0aW9uLFxuICBNZXNzYWdlVHlwZSxcbiAgTWVzc2FnZSxcbiAgZ2V0QXBwU3RvcmUsXG4gIGFwcEFjdGlvbnMsXG4gIE1lc3NhZ2VEZXNjcmlwdGlvbixcbiAgRXh0ZW50Q2hhbmdlTWVzc2FnZSxcbiAgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsXG4gIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSxcbiAgRGF0YVNvdXJjZU1hbmFnZXIsXG4gIFNxbFF1ZXJ5UGFyYW1zLFxuICBRdWVyaWFibGVEYXRhU291cmNlXG59IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlTGF5ZXJBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24ge1xuICBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24gKG1lc3NhZ2VEZXNjcmlwdGlvbjogTWVzc2FnZURlc2NyaXB0aW9uKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETyBsaW1pdCB0byBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSwgRXh0ZW50Q2hhbmdlTWVzc2FnZSwgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE8gbGltaXQgdG8gRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsIEV4dGVudENoYW5nZU1lc3NhZ2UsIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vc2V0IGFjdGlvbiBzZXR0aW5nIHVyaVxuICBnZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdhY3Rpb25zL3VwZGF0ZS1sYXllci1hY3Rpb24tc2V0dGluZydcbiAgfVxuXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogYW55KTogUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2U6XG4gICAgICAgIGNvbnN0IGRzRmlsdGVyQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2VcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01lc3NhZ2VIYW5kbGVyQWN0aW9uOiBnb3QgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UnLCBtZXNzYWdlLCBhY3Rpb25Db25maWcpXG5cbiAgICAgICAgLy8gY29uc3RydWN0IERhdGFTb3VyY2UgYW5kIGdldCB0aGUgcXVlcnkgcGFyYW1ldGVyc1xuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRzRmlsdGVyQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlSWQpIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXM6IFNxbFF1ZXJ5UGFyYW1zID0gZGF0YVNvdXJjZS5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKVxuICAgICAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHRoaXMud2lkZ2V0SWQsICdxdWVyeVBhcmFtcycsIHF1ZXJ5UGFyYW1zLndoZXJlKSlcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2U6XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNZXNzYWdlSGFuZGxlckFjdGlvbjogZ290IEV4dGVudENoYW5nZU1lc3NhZ2UnLCBtZXNzYWdlLCBhY3Rpb25Db25maWcpXG4gICAgICAgIGNvbnN0IGV4dGVudENoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIEV4dGVudENoYW5nZU1lc3NhZ2VcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdW50aWwgd2Ugc3RhcnQgZHJhd2luZyB0aWxlcyBqdXN0IGZvciB0aGUgY3VycmVudCB2aWV3IGV4dGVudCwgbm8gbmVlZCB0byB1cGRhdGUgYW5kIHRyaWdnZXIgYSByZS1yZW5kZXJcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdHJpZ2dlciBhbiB1cGRhdGUgZm9yIHRoZSB3aWRnZXQgd2hlbiBFeHRlbnQgaXMgZGlmZmVyZW50IGZyb20gcHJldmlvdXMuXG4gICAgICAgIC8vIE11c3QgYmUgYSBwbGFpbiBKYXZhU2NyaXB0IE9iamVjdCAoc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2V4cGVyaWVuY2UtYnVpbGRlci9ndWlkZS93aWRnZXQtY29tbXVuaWNhdGlvbi8pXG4gICAgICAgIC8vIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXG4gICAgICAgIC8vICAgdGhpcy53aWRnZXRJZCxcbiAgICAgICAgLy8gICAnZXh0ZW50JyxcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICB4bWluOiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC54bWluLFxuICAgICAgICAvLyAgICAgeW1pbjogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueW1pbixcbiAgICAgICAgLy8gICAgIHhtYXg6IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnhtYXgsXG4gICAgICAgIC8vICAgICB5bWF4OiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC55bWF4XG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gKVxuICAgICAgICBicmVha1xuICAgICAgLy8gVE9ETyBtYXkgYmUgYWJsZSB0byB1c2UgdGhpcyBtZXNzYWdlIHRvIGlkZW50aWZ5IHRoZSBzZWxlY3RlZCBwb2x5Z29uXG4gICAgICAvLyBidXQgY3VycmVudGx5IHJldHVybiBlbXB0eSBhcnJheSBmb3Igc2VsZWN0ZWQgZmVhdHVyZSBvbiBjbGllbnQtc2lkZSBsYXllclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZTpcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01lc3NhZ2VIYW5kbGVyQWN0aW9uOiBnb3QgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlJywgbWVzc2FnZSwgYWN0aW9uQ29uZmlnKVxuICAgICAgICBjb25zdCBkYXRhUmVjb3Jkc0NoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==