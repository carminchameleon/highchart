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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ \"./node_modules/highcharts/highstock.js\");\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-react-official */ \"./node_modules/highcharts-react-official/dist/highcharts-react.min.js\");\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/eunjihwang/Desktop/2021 Dev/chart/components/DataZoomChart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar options = {\n  title: {\n    text: \"My stock chart\"\n  },\n  series: [{\n    data: [\n    /* Jan 2017 */\n    [1483401600000, 22948], [1483488000000, 22956], [1483574400000, 22850], [1483660800000, 23109] // [1483401600000, 115.8, 116.33, 114.76, 116.15],\n    // [1483488000000, 115.85, 116.51, 115.75, 116.02],\n    // [1483574400000, 115.92, 116.86, 115.81, 116.61],\n    // [1483660800000, 116.78, 118.16, 116.47, 117.91],\n    // [1483920000000, 117.95, 119.43, 117.94, 118.99],\n    ]\n  }]\n};\n\nvar MyStockChart = function MyStockChart(data) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      loading = _useState[0],\n      isLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      chartOption = _useState2[0],\n      setChartOption = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setChartOption(setOption(data));\n  }, [data]);\n  console.log(data.data);\n\n  var setOption = function setOption(chartData) {\n    var options = {\n      title: {\n        text: \"My stock chart\"\n      },\n      series: [{\n        data: chartData.data\n      }]\n    };\n    isLoading(false);\n    return options;\n  };\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 23\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default()), {\n    highcharts: (highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default()),\n    constructorType: \"stockChart\",\n    options: chartOption\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MyStockChart, \"JodU6rfuJsdnTKUYXiNm3mHqK0I=\");\n\n_c = MyStockChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyStockChart); // [\n//   /* Jan 2017 */\n//   [1483401600000, 22948],\n//   [1483488000000, 22956],\n//   [1483574400000, 22850],\n//   [1483660800000, 23109],\n//   // [1483401600000, 115.8, 116.33, 114.76, 116.15],\n//   // [1483488000000, 115.85, 116.51, 115.75, 116.02],\n//   // [1483574400000, 115.92, 116.86, 115.81, 116.61],\n//   // [1483660800000, 116.78, 118.16, 116.47, 117.91],\n//   // [1483920000000, 117.95, 119.43, 117.94, 118.99],\n// ],\n\nvar _c;\n\n$RefreshReg$(_c, \"MyStockChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXRhWm9vbUNoYXJ0LnRzeD9lOTZmIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJ0aXRsZSIsInRleHQiLCJzZXJpZXMiLCJkYXRhIiwiTXlTdG9ja0NoYXJ0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwiaXNMb2FkaW5nIiwiY2hhcnRPcHRpb24iLCJzZXRDaGFydE9wdGlvbiIsInVzZUVmZmVjdCIsInNldE9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjaGFydERhdGEiLCJIaWdoY2hhcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUU7QUFERCxHQURPO0FBSWRDLFFBQU0sRUFBRSxDQUNOO0FBQ0VDLFFBQUksRUFBRTtBQUNKO0FBQ0EsS0FBQyxhQUFELEVBQWdCLEtBQWhCLENBRkksRUFHSixDQUFDLGFBQUQsRUFBZ0IsS0FBaEIsQ0FISSxFQUlKLENBQUMsYUFBRCxFQUFnQixLQUFoQixDQUpJLEVBS0osQ0FBQyxhQUFELEVBQWdCLEtBQWhCLENBTEksQ0FPSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEk7QUFEUixHQURNO0FBSk0sQ0FBaEI7O0FBdUJBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNELElBQUQsRUFBVTtBQUFBOztBQUFBLGtCQUNBRSwrQ0FBUSxDQUFDLElBQUQsQ0FEUjtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFNBRGE7O0FBQUEsbUJBRVNGLCtDQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXRCRyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBSTdCQyxrREFBUyxDQUFDLFlBQU07QUFDZEQsa0JBQWMsQ0FBQ0UsU0FBUyxDQUFDUixJQUFELENBQVYsQ0FBZDtBQUNELEdBRlEsRUFFTixDQUFDQSxJQUFELENBRk0sQ0FBVDtBQUdBUyxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsSUFBSSxDQUFDQSxJQUFqQjs7QUFFQSxNQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRyxTQUFELEVBQWU7QUFDL0IsUUFBTWYsT0FBTyxHQUFHO0FBQ2RDLFdBQUssRUFBRTtBQUNMQyxZQUFJLEVBQUU7QUFERCxPQURPO0FBSWRDLFlBQU0sRUFBRSxDQUNOO0FBQ0VDLFlBQUksRUFBRVcsU0FBUyxDQUFDWDtBQURsQixPQURNO0FBSk0sS0FBaEI7QUFXQUksYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBLFdBQU9SLE9BQVA7QUFDRCxHQWREOztBQWdCQSxNQUFJTyxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUViLHNCQUNFLDhEQUFDLGtFQUFEO0FBQ0UsY0FBVSxFQUFFUyw2REFEZDtBQUVFLG1CQUFlLEVBQUUsWUFGbkI7QUFHRSxXQUFPLEVBQUVQO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FsQ0Q7O0dBQU1KLFk7O0tBQUFBLFk7QUFtQ04sK0RBQWVBLFlBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGF0YVpvb21DaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhpZ2hjaGFydHMgZnJvbSBcImhpZ2hjaGFydHMvaGlnaHN0b2NrXCI7XG5pbXBvcnQgSGlnaGNoYXJ0c1JlYWN0IGZyb20gXCJoaWdoY2hhcnRzLXJlYWN0LW9mZmljaWFsXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHRpdGxlOiB7XG4gICAgdGV4dDogXCJNeSBzdG9jayBjaGFydFwiLFxuICB9LFxuICBzZXJpZXM6IFtcbiAgICB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIC8qIEphbiAyMDE3ICovXG4gICAgICAgIFsxNDgzNDAxNjAwMDAwLCAyMjk0OF0sXG4gICAgICAgIFsxNDgzNDg4MDAwMDAwLCAyMjk1Nl0sXG4gICAgICAgIFsxNDgzNTc0NDAwMDAwLCAyMjg1MF0sXG4gICAgICAgIFsxNDgzNjYwODAwMDAwLCAyMzEwOV0sXG5cbiAgICAgICAgLy8gWzE0ODM0MDE2MDAwMDAsIDExNS44LCAxMTYuMzMsIDExNC43NiwgMTE2LjE1XSxcbiAgICAgICAgLy8gWzE0ODM0ODgwMDAwMDAsIDExNS44NSwgMTE2LjUxLCAxMTUuNzUsIDExNi4wMl0sXG4gICAgICAgIC8vIFsxNDgzNTc0NDAwMDAwLCAxMTUuOTIsIDExNi44NiwgMTE1LjgxLCAxMTYuNjFdLFxuICAgICAgICAvLyBbMTQ4MzY2MDgwMDAwMCwgMTE2Ljc4LCAxMTguMTYsIDExNi40NywgMTE3LjkxXSxcbiAgICAgICAgLy8gWzE0ODM5MjAwMDAwMDAsIDExNy45NSwgMTE5LjQzLCAxMTcuOTQsIDExOC45OV0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBNeVN0b2NrQ2hhcnQgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgaXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY2hhcnRPcHRpb24sIHNldENoYXJ0T3B0aW9uXSA9IHVzZVN0YXRlKHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENoYXJ0T3B0aW9uKHNldE9wdGlvbihkYXRhKSk7XG4gIH0sIFtkYXRhXSk7XG4gIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XG5cbiAgY29uc3Qgc2V0T3B0aW9uID0gKGNoYXJ0RGF0YSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZToge1xuICAgICAgICB0ZXh0OiBcIk15IHN0b2NrIGNoYXJ0XCIsXG4gICAgICB9LFxuICAgICAgc2VyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBjaGFydERhdGEuZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGlzTG9hZGluZyhmYWxzZSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8SGlnaGNoYXJ0c1JlYWN0XG4gICAgICBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfVxuICAgICAgY29uc3RydWN0b3JUeXBlPXtcInN0b2NrQ2hhcnRcIn1cbiAgICAgIG9wdGlvbnM9e2NoYXJ0T3B0aW9ufVxuICAgIC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTXlTdG9ja0NoYXJ0O1xuXG4vLyBbXG4vLyAgIC8qIEphbiAyMDE3ICovXG4vLyAgIFsxNDgzNDAxNjAwMDAwLCAyMjk0OF0sXG4vLyAgIFsxNDgzNDg4MDAwMDAwLCAyMjk1Nl0sXG4vLyAgIFsxNDgzNTc0NDAwMDAwLCAyMjg1MF0sXG4vLyAgIFsxNDgzNjYwODAwMDAwLCAyMzEwOV0sXG5cbi8vICAgLy8gWzE0ODM0MDE2MDAwMDAsIDExNS44LCAxMTYuMzMsIDExNC43NiwgMTE2LjE1XSxcbi8vICAgLy8gWzE0ODM0ODgwMDAwMDAsIDExNS44NSwgMTE2LjUxLCAxMTUuNzUsIDExNi4wMl0sXG4vLyAgIC8vIFsxNDgzNTc0NDAwMDAwLCAxMTUuOTIsIDExNi44NiwgMTE1LjgxLCAxMTYuNjFdLFxuLy8gICAvLyBbMTQ4MzY2MDgwMDAwMCwgMTE2Ljc4LCAxMTguMTYsIDExNi40NywgMTE3LjkxXSxcbi8vICAgLy8gWzE0ODM5MjAwMDAwMDAsIDExNy45NSwgMTE5LjQzLCAxMTcuOTQsIDExOC45OV0sXG4vLyBdLFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DataZoomChart.tsx\n");

/***/ })

});