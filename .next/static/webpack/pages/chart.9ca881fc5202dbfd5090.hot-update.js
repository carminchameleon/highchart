/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chart",{

/***/ "./components/DataZoomChart.tsx":
/*!**************************************!*\
  !*** ./components/DataZoomChart.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ \"./node_modules/highcharts/highstock.js\");\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-react-official */ \"./node_modules/highcharts-react-official/dist/highcharts-react.min.js\");\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/eunjihwang/Desktop/2021 Dev/chart/components/DataZoomChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar options = {\n  title: {\n    text: \"My stock chart\"\n  },\n  series: [{\n    data: [\n    /* Jan 2017 */\n    [1483401600000, 22948], [1483488000000, 22956], [1483574400000, 22850], [1483660800000, 23109] // [1483401600000, 115.8, 116.33, 114.76, 116.15],\n    // [1483488000000, 115.85, 116.51, 115.75, 116.02],\n    // [1483574400000, 115.92, 116.86, 115.81, 116.61],\n    // [1483660800000, 116.78, 118.16, 116.47, 117.91],\n    // [1483920000000, 117.95, 119.43, 117.94, 118.99],\n    ]\n  }]\n};\n\nvar MyStockChart = function MyStockChart(data) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      loading = _useState[0],\n      isLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      chartOption = _useState2[0],\n      setChartOption = _useState2[1];\n\n  var setOption = function setOption(chartData) {\n    var options = {\n      title: {\n        text: \"My stock chart\"\n      },\n      series: [{\n        data: chartData\n      }]\n    };\n    console.log(options);\n    return options;\n    isLoading(true);\n  };\n\n  var makeOption = {};\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default()), {\n    highcharts: (highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default()),\n    constructorType: \"stockChart\",\n    options: options\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyStockChart, \"TMAoky04By4mtkk3B3bzQLkcUQc=\");\n\n_c = MyStockChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyStockChart); // [\n//   /* Jan 2017 */\n//   [1483401600000, 22948],\n//   [1483488000000, 22956],\n//   [1483574400000, 22850],\n//   [1483660800000, 23109],\n//   // [1483401600000, 115.8, 116.33, 114.76, 116.15],\n//   // [1483488000000, 115.85, 116.51, 115.75, 116.02],\n//   // [1483574400000, 115.92, 116.86, 115.81, 116.61],\n//   // [1483660800000, 116.78, 118.16, 116.47, 117.91],\n//   // [1483920000000, 117.95, 119.43, 117.94, 118.99],\n// ],\n\nvar _c;\n\n$RefreshReg$(_c, \"MyStockChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXRhWm9vbUNoYXJ0LnRzeD9lOTZmIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJ0aXRsZSIsInRleHQiLCJzZXJpZXMiLCJkYXRhIiwiTXlTdG9ja0NoYXJ0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwiaXNMb2FkaW5nIiwiY2hhcnRPcHRpb24iLCJzZXRDaGFydE9wdGlvbiIsInNldE9wdGlvbiIsImNoYXJ0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlT3B0aW9uIiwiSGlnaGNoYXJ0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFO0FBREQsR0FETztBQUlkQyxRQUFNLEVBQUUsQ0FDTjtBQUNFQyxRQUFJLEVBQUU7QUFDSjtBQUNBLEtBQUMsYUFBRCxFQUFnQixLQUFoQixDQUZJLEVBR0osQ0FBQyxhQUFELEVBQWdCLEtBQWhCLENBSEksRUFJSixDQUFDLGFBQUQsRUFBZ0IsS0FBaEIsQ0FKSSxFQUtKLENBQUMsYUFBRCxFQUFnQixLQUFoQixDQUxJLENBT0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhJO0FBRFIsR0FETTtBQUpNLENBQWhCOztBQXVCQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRCxJQUFELEVBQVU7QUFBQTs7QUFBQSxrQkFDQUUsK0NBQVEsQ0FBQyxLQUFELENBRFI7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxTQURhOztBQUFBLG1CQUVTRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUV0QkcsV0FGc0I7QUFBQSxNQUVUQyxjQUZTOztBQUk3QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxTQUFELEVBQWU7QUFDL0IsUUFBTVosT0FBTyxHQUFHO0FBQ2RDLFdBQUssRUFBRTtBQUNMQyxZQUFJLEVBQUU7QUFERCxPQURPO0FBSWRDLFlBQU0sRUFBRSxDQUNOO0FBQ0VDLFlBQUksRUFBRVE7QUFEUixPQURNO0FBSk0sS0FBaEI7QUFVQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlkLE9BQVo7QUFDQSxXQUFPQSxPQUFQO0FBQ0FRLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxHQWREOztBQWdCQSxNQUFNTyxVQUFVLEdBQUcsRUFBbkI7QUFDQSxzQkFDRSw4REFBQyxrRUFBRDtBQUNFLGNBQVUsRUFBRUMsNkRBRGQ7QUFFRSxtQkFBZSxFQUFFLFlBRm5CO0FBR0UsV0FBTyxFQUFFaEI7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQTVCRDs7R0FBTUssWTs7S0FBQUEsWTtBQTZCTiwrREFBZUEsWUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EYXRhWm9vbUNoYXJ0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGlnaGNoYXJ0cyBmcm9tIFwiaGlnaGNoYXJ0cy9oaWdoc3RvY2tcIjtcbmltcG9ydCBIaWdoY2hhcnRzUmVhY3QgZnJvbSBcImhpZ2hjaGFydHMtcmVhY3Qtb2ZmaWNpYWxcIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgdGl0bGU6IHtcbiAgICB0ZXh0OiBcIk15IHN0b2NrIGNoYXJ0XCIsXG4gIH0sXG4gIHNlcmllczogW1xuICAgIHtcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgLyogSmFuIDIwMTcgKi9cbiAgICAgICAgWzE0ODM0MDE2MDAwMDAsIDIyOTQ4XSxcbiAgICAgICAgWzE0ODM0ODgwMDAwMDAsIDIyOTU2XSxcbiAgICAgICAgWzE0ODM1NzQ0MDAwMDAsIDIyODUwXSxcbiAgICAgICAgWzE0ODM2NjA4MDAwMDAsIDIzMTA5XSxcblxuICAgICAgICAvLyBbMTQ4MzQwMTYwMDAwMCwgMTE1LjgsIDExNi4zMywgMTE0Ljc2LCAxMTYuMTVdLFxuICAgICAgICAvLyBbMTQ4MzQ4ODAwMDAwMCwgMTE1Ljg1LCAxMTYuNTEsIDExNS43NSwgMTE2LjAyXSxcbiAgICAgICAgLy8gWzE0ODM1NzQ0MDAwMDAsIDExNS45MiwgMTE2Ljg2LCAxMTUuODEsIDExNi42MV0sXG4gICAgICAgIC8vIFsxNDgzNjYwODAwMDAwLCAxMTYuNzgsIDExOC4xNiwgMTE2LjQ3LCAxMTcuOTFdLFxuICAgICAgICAvLyBbMTQ4MzkyMDAwMDAwMCwgMTE3Ljk1LCAxMTkuNDMsIDExNy45NCwgMTE4Ljk5XSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmNvbnN0IE15U3RvY2tDaGFydCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBpc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hhcnRPcHRpb24sIHNldENoYXJ0T3B0aW9uXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBzZXRPcHRpb24gPSAoY2hhcnREYXRhKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHRleHQ6IFwiTXkgc3RvY2sgY2hhcnRcIixcbiAgICAgIH0sXG4gICAgICBzZXJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgICBpc0xvYWRpbmcodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgbWFrZU9wdGlvbiA9IHt9O1xuICByZXR1cm4gKFxuICAgIDxIaWdoY2hhcnRzUmVhY3RcbiAgICAgIGhpZ2hjaGFydHM9e0hpZ2hjaGFydHN9XG4gICAgICBjb25zdHJ1Y3RvclR5cGU9e1wic3RvY2tDaGFydFwifVxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE15U3RvY2tDaGFydDtcblxuLy8gW1xuLy8gICAvKiBKYW4gMjAxNyAqL1xuLy8gICBbMTQ4MzQwMTYwMDAwMCwgMjI5NDhdLFxuLy8gICBbMTQ4MzQ4ODAwMDAwMCwgMjI5NTZdLFxuLy8gICBbMTQ4MzU3NDQwMDAwMCwgMjI4NTBdLFxuLy8gICBbMTQ4MzY2MDgwMDAwMCwgMjMxMDldLFxuXG4vLyAgIC8vIFsxNDgzNDAxNjAwMDAwLCAxMTUuOCwgMTE2LjMzLCAxMTQuNzYsIDExNi4xNV0sXG4vLyAgIC8vIFsxNDgzNDg4MDAwMDAwLCAxMTUuODUsIDExNi41MSwgMTE1Ljc1LCAxMTYuMDJdLFxuLy8gICAvLyBbMTQ4MzU3NDQwMDAwMCwgMTE1LjkyLCAxMTYuODYsIDExNS44MSwgMTE2LjYxXSxcbi8vICAgLy8gWzE0ODM2NjA4MDAwMDAsIDExNi43OCwgMTE4LjE2LCAxMTYuNDcsIDExNy45MV0sXG4vLyAgIC8vIFsxNDgzOTIwMDAwMDAwLCAxMTcuOTUsIDExOS40MywgMTE3Ljk0LCAxMTguOTldLFxuLy8gXSxcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DataZoomChart.tsx\n");

/***/ })

});