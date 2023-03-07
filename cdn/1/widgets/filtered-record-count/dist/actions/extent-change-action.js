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
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/filtered-record-count/src/actions/extent-change-action.ts ***!
  \*******************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExtentChangeAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class ExtentChangeAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    // new in v1.9, replaces filterMessageDescription. used in builder
    filterMessageDescription(messageDescription) {
        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange;
    }
    filterMessage(message) {
        return message.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange;
    }
    //set action setting uri
    getSettingComponentUri(messageType, messageWidgetId) {
        return 'actions/extent-change-action-setting';
    }
    onExecute(message, actionConfig) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:
                // console.log('ExtentChangeAction: got ExtentChangeMessage', message, actionConfig)
                const extentChangeMessage = message;
                // trigger an update for the widget when Extent is different from previous. Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)
                // getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'extent', this.formatExtent(extentChangeMessage.extent)))
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
        }
        return true;
    }
    formatExtent(extent) {
        if (!extent) {
            return 'extent not available';
        }
        // VSCode does not recognize isLinear argument is optional and defaults to false
        // TODO calling webMercatorToGeographic() causing "Load module error. TypeError: window.require is not a function"
        // const geoExtent = webMercatorUtils.webMercatorToGeographic(extent, false) as Extent
        // return `${geoExtent.xmin}, ${geoExtent.ymin}, ${geoExtent.xmax}, ${geoExtent.ymax}`
        return `${extent.xmin}, ${extent.ymin}, ${extent.xmax}, ${extent.ymax}`;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXJlZC1yZWNvcmQtY291bnQvZGlzdC9hY3Rpb25zL2V4dGVudC1jaGFuZ2UtYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNFa0I7QUFJSCxNQUFNLGtCQUFtQixTQUFRLDREQUFxQjtJQUNuRSxrRUFBa0U7SUFDbEUsd0JBQXdCLENBQUUsa0JBQXNDO1FBQzlELE9BQU8sa0JBQWtCLENBQUMsV0FBVyxLQUFLLCtEQUF3QjtJQUNwRSxDQUFDO0lBRUQsYUFBYSxDQUFFLE9BQWdCO1FBQzdCLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSywrREFBd0I7SUFDbEQsQ0FBQztJQUVELHdCQUF3QjtJQUN4QixzQkFBc0IsQ0FBRSxXQUF3QixFQUFFLGVBQXdCO1FBQ3hFLE9BQU8sc0NBQXNDO0lBQy9DLENBQUM7SUFFRCxTQUFTLENBQUUsT0FBZ0IsRUFBRSxZQUFrQjtRQUM3QyxRQUFRLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDcEIsS0FBSywrREFBd0I7Z0JBQzNCLG9GQUFvRjtnQkFDcEYsTUFBTSxtQkFBbUIsR0FBRyxPQUE4QjtnQkFDMUQsZ01BQWdNO2dCQUNoTSxtSUFBbUk7Z0JBRW5JLDJEQUEyRDtnQkFDM0QsbUJBQW1CO2dCQUNuQixjQUFjO2dCQUNkLE1BQU07Z0JBQ04sNkNBQTZDO2dCQUM3Qyw2Q0FBNkM7Z0JBQzdDLDZDQUE2QztnQkFDN0MsNENBQTRDO2dCQUM1QyxPQUFPO2dCQUNQLElBQUk7Z0JBQ0osTUFBSztTQUNSO1FBRUQsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELFlBQVksQ0FBRSxNQUFjO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLHNCQUFzQjtTQUFFO1FBQzlDLGdGQUFnRjtRQUNoRixrSEFBa0g7UUFDbEgsc0ZBQXNGO1FBQ3RGLHNGQUFzRjtRQUN0RixPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRTtJQUN6RSxDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdGVyZWQtcmVjb3JkLWNvdW50L3NyYy9hY3Rpb25zL2V4dGVudC1jaGFuZ2UtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbixcbiAgTWVzc2FnZVR5cGUsXG4gIE1lc3NhZ2UsXG4gIGdldEFwcFN0b3JlLFxuICBhcHBBY3Rpb25zLFxuICBNZXNzYWdlRGVzY3JpcHRpb24sXG4gIEV4dGVudENoYW5nZU1lc3NhZ2Vcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IEV4dGVudCBmcm9tICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcbmltcG9ydCB3ZWJNZXJjYXRvclV0aWxzIGZyb20gJ2VzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRlbnRDaGFuZ2VBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24ge1xuICAvLyBuZXcgaW4gdjEuOSwgcmVwbGFjZXMgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uLiB1c2VkIGluIGJ1aWxkZXJcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZVxuICB9XG5cbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlLnR5cGUgPT09IE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZVxuICB9XG5cbiAgLy9zZXQgYWN0aW9uIHNldHRpbmcgdXJpXG4gIGdldFNldHRpbmdDb21wb25lbnRVcmkgKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgbWVzc2FnZVdpZGdldElkPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FjdGlvbnMvZXh0ZW50LWNoYW5nZS1hY3Rpb24tc2V0dGluZydcbiAgfVxuXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogYW55KTogUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZTpcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0V4dGVudENoYW5nZUFjdGlvbjogZ290IEV4dGVudENoYW5nZU1lc3NhZ2UnLCBtZXNzYWdlLCBhY3Rpb25Db25maWcpXG4gICAgICAgIGNvbnN0IGV4dGVudENoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIEV4dGVudENoYW5nZU1lc3NhZ2VcbiAgICAgICAgLy8gdHJpZ2dlciBhbiB1cGRhdGUgZm9yIHRoZSB3aWRnZXQgd2hlbiBFeHRlbnQgaXMgZGlmZmVyZW50IGZyb20gcHJldmlvdXMuIE11c3QgYmUgYSBwbGFpbiBKYXZhU2NyaXB0IE9iamVjdCAoc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2V4cGVyaWVuY2UtYnVpbGRlci9ndWlkZS93aWRnZXQtY29tbXVuaWNhdGlvbi8pXG4gICAgICAgIC8vIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UodGhpcy53aWRnZXRJZCwgJ2V4dGVudCcsIHRoaXMuZm9ybWF0RXh0ZW50KGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50KSkpXG5cbiAgICAgICAgLy8gZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcbiAgICAgICAgLy8gICB0aGlzLndpZGdldElkLFxuICAgICAgICAvLyAgICdleHRlbnQnLFxuICAgICAgICAvLyAgIHtcbiAgICAgICAgLy8gICAgIHhtaW46IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnhtaW4sXG4gICAgICAgIC8vICAgICB5bWluOiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC55bWluLFxuICAgICAgICAvLyAgICAgeG1heDogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueG1heCxcbiAgICAgICAgLy8gICAgIHltYXg6IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnltYXhcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyApXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvcm1hdEV4dGVudCAoZXh0ZW50OiBFeHRlbnQpOiBzdHJpbmcge1xuICAgIGlmICghZXh0ZW50KSB7IHJldHVybiAnZXh0ZW50IG5vdCBhdmFpbGFibGUnIH1cbiAgICAvLyBWU0NvZGUgZG9lcyBub3QgcmVjb2duaXplIGlzTGluZWFyIGFyZ3VtZW50IGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBmYWxzZVxuICAgIC8vIFRPRE8gY2FsbGluZyB3ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYygpIGNhdXNpbmcgXCJMb2FkIG1vZHVsZSBlcnJvci4gVHlwZUVycm9yOiB3aW5kb3cucmVxdWlyZSBpcyBub3QgYSBmdW5jdGlvblwiXG4gICAgLy8gY29uc3QgZ2VvRXh0ZW50ID0gd2ViTWVyY2F0b3JVdGlscy53ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyhleHRlbnQsIGZhbHNlKSBhcyBFeHRlbnRcbiAgICAvLyByZXR1cm4gYCR7Z2VvRXh0ZW50LnhtaW59LCAke2dlb0V4dGVudC55bWlufSwgJHtnZW9FeHRlbnQueG1heH0sICR7Z2VvRXh0ZW50LnltYXh9YFxuICAgIHJldHVybiBgJHtleHRlbnQueG1pbn0sICR7ZXh0ZW50LnltaW59LCAke2V4dGVudC54bWF4fSwgJHtleHRlbnQueW1heH1gXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==