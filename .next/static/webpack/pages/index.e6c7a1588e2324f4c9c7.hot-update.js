/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_eunjihwang_Desktop_2021_Dev_chart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ \"./node_modules/highcharts/highcharts.js\");\n/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-react-official */ \"./node_modules/highcharts-react-official/dist/highcharts-react.min.js\");\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/eunjihwang/Desktop/2021 Dev/chart/pages/index.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_eunjihwang_Desktop_2021_Dev_chart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.h1.withConfig({\n  displayName: \"pages__Title\",\n  componentId: \"sc-1ymgopj-0\"\n})([\"font-size:30px;color:\", \";\"], function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.primary;\n}); // const options: Highcharts.Options = {\n//   title: {\n//     text: \"My chart\",\n//   },\n//   series: [\n//     {\n//       type: \"line\",\n//       data: [1, 2, 3],\n//     },\n//   ],\n// };\n\n_c = Title;\nvar options = {\n  title: {\n    text: \"Monthly Average Rainfall\"\n  },\n  subtitle: {\n    text: \"Source: WorldClimate.com\"\n  },\n  xAxis: {\n    categories: [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"],\n    crosshair: true\n  },\n  yAxis: {\n    min: 0,\n    title: {\n      text: \"Rainfall (mm)\"\n    }\n  },\n  tooltip: {\n    headerFormat: '<span style=\"font-size:10px\">{point.key}</span><table>',\n    pointFormat: '<tr><td style=\"color:{series.color};padding:0\">{series.name}: </td>' + '<td style=\"padding:0\"><b>{point.y:.1f} mm</b></td></tr>',\n    footerFormat: \"</table>\",\n    shared: true,\n    useHTML: true\n  },\n  plotOptions: {\n    column: {\n      pointPadding: 0.2,\n      borderWidth: 0\n    }\n  },\n  series: [{\n    type: \"column\",\n    name: \"Tokyo\",\n    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],\n    events: {\n      click: function click(event) {\n        console.log(\"honvered\");\n        this.chart.series[1].points[event.point.x].setState(\"hover\");\n      }\n    }\n  } // {\n  //   name: \"New York\",\n  //   data: [\n  //     83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6,\n  //     92.3,\n  //   ],\n  // },\n  // {\n  //   name: \"London\",\n  //   data: [\n  //     48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2,\n  //   ],\n  // },\n  // {\n  //   name: \"Berlin\",\n  //   data: [\n  //     42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1,\n  //   ],\n  // },\n  ]\n};\n\nvar Home = function Home(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n    children: [\"chart\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((highcharts_react_official__WEBPACK_IMPORTED_MODULE_4___default()), _objectSpread({\n      highcharts: highcharts__WEBPACK_IMPORTED_MODULE_3__,\n      options: options,\n      constructorType: \"column\"\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 107,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiVGl0bGUiLCJzdHlsZWQiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJvcHRpb25zIiwidGl0bGUiLCJ0ZXh0Iiwic3VidGl0bGUiLCJ4QXhpcyIsImNhdGVnb3JpZXMiLCJjcm9zc2hhaXIiLCJ5QXhpcyIsIm1pbiIsInRvb2x0aXAiLCJoZWFkZXJGb3JtYXQiLCJwb2ludEZvcm1hdCIsImZvb3RlckZvcm1hdCIsInNoYXJlZCIsInVzZUhUTUwiLCJwbG90T3B0aW9ucyIsImNvbHVtbiIsInBvaW50UGFkZGluZyIsImJvcmRlcldpZHRoIiwic2VyaWVzIiwidHlwZSIsIm5hbWUiLCJkYXRhIiwiZXZlbnRzIiwiY2xpY2siLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjaGFydCIsInBvaW50cyIsInBvaW50IiwieCIsInNldFN0YXRlIiwiSG9tZSIsInByb3BzIiwiSGlnaGNoYXJ0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxvRUFBSDtBQUFBO0FBQUE7QUFBQSxtQ0FFQTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUE1QjtBQUFBLENBRkEsQ0FBWCxDLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FmTUosSztBQWlCTixJQUFNSyxPQUEyQixHQUFHO0FBQ2xDQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFO0FBREQsR0FEMkI7QUFJbENDLFVBQVEsRUFBRTtBQUNSRCxRQUFJLEVBQUU7QUFERSxHQUp3QjtBQU9sQ0UsT0FBSyxFQUFFO0FBQ0xDLGNBQVUsRUFBRSxDQUNWLEtBRFUsRUFFVixLQUZVLEVBR1YsS0FIVSxFQUlWLEtBSlUsRUFLVixLQUxVLEVBTVYsS0FOVSxFQU9WLEtBUFUsRUFRVixLQVJVLEVBU1YsS0FUVSxFQVVWLEtBVlUsRUFXVixLQVhVLEVBWVYsS0FaVSxDQURQO0FBZUxDLGFBQVMsRUFBRTtBQWZOLEdBUDJCO0FBd0JsQ0MsT0FBSyxFQUFFO0FBQ0xDLE9BQUcsRUFBRSxDQURBO0FBRUxQLFNBQUssRUFBRTtBQUNMQyxVQUFJLEVBQUU7QUFERDtBQUZGLEdBeEIyQjtBQThCbENPLFNBQU8sRUFBRTtBQUNQQyxnQkFBWSxFQUFFLHdEQURQO0FBRVBDLGVBQVcsRUFDVCx3RUFDQSx5REFKSztBQUtQQyxnQkFBWSxFQUFFLFVBTFA7QUFNUEMsVUFBTSxFQUFFLElBTkQ7QUFPUEMsV0FBTyxFQUFFO0FBUEYsR0E5QnlCO0FBdUNsQ0MsYUFBVyxFQUFFO0FBQ1hDLFVBQU0sRUFBRTtBQUNOQyxrQkFBWSxFQUFFLEdBRFI7QUFFTkMsaUJBQVcsRUFBRTtBQUZQO0FBREcsR0F2Q3FCO0FBNkNsQ0MsUUFBTSxFQUFFLENBQ047QUFDRUMsUUFBSSxFQUFFLFFBRFI7QUFFRUMsUUFBSSxFQUFFLE9BRlI7QUFHRUMsUUFBSSxFQUFFLENBQ0osSUFESSxFQUNFLElBREYsRUFDUSxLQURSLEVBQ2UsS0FEZixFQUNzQixLQUR0QixFQUM2QixLQUQ3QixFQUNvQyxLQURwQyxFQUMyQyxLQUQzQyxFQUNrRCxLQURsRCxFQUN5RCxLQUR6RCxFQUVKLElBRkksRUFFRSxJQUZGLENBSFI7QUFPRUMsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxlQUFVQyxLQUFWLEVBQWlCO0FBQ3RCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsYUFBS0MsS0FBTCxDQUFXVCxNQUFYLENBQWtCLENBQWxCLEVBQXFCVSxNQUFyQixDQUE0QkosS0FBSyxDQUFDSyxLQUFOLENBQVlDLENBQXhDLEVBQTJDQyxRQUEzQyxDQUFvRCxPQUFwRDtBQUNEO0FBSks7QUFQVixHQURNLENBZU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ007QUE3QzBCLENBQXBDOztBQWtGQSxJQUFNQyxJQUFjLEdBQUcsU0FBakJBLElBQWlCLENBQUNDLEtBQUQsRUFBa0M7QUFDdkQsc0JBQ0UsOERBQUMsS0FBRDtBQUFBLHFDQUVFLDhEQUFDLGtFQUFEO0FBQ0UsZ0JBQVUsRUFBRUMsdUNBRGQ7QUFFRSxhQUFPLEVBQUVuQyxPQUZYO0FBR0UscUJBQWUsRUFBRTtBQUhuQixPQUlNa0MsS0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQVpEOztNQUFNRCxJO0FBY04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgSGlnaGNoYXJ0cyBmcm9tIFwiaGlnaGNoYXJ0c1wiO1xuaW1wb3J0IEhpZ2hjaGFydHNSZWFjdCBmcm9tIFwiaGlnaGNoYXJ0cy1yZWFjdC1vZmZpY2lhbFwiO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG5gO1xuXG4vLyBjb25zdCBvcHRpb25zOiBIaWdoY2hhcnRzLk9wdGlvbnMgPSB7XG4vLyAgIHRpdGxlOiB7XG4vLyAgICAgdGV4dDogXCJNeSBjaGFydFwiLFxuLy8gICB9LFxuLy8gICBzZXJpZXM6IFtcbi8vICAgICB7XG4vLyAgICAgICB0eXBlOiBcImxpbmVcIixcbi8vICAgICAgIGRhdGE6IFsxLCAyLCAzXSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gfTtcblxuY29uc3Qgb3B0aW9uczogSGlnaGNoYXJ0cy5PcHRpb25zID0ge1xuICB0aXRsZToge1xuICAgIHRleHQ6IFwiTW9udGhseSBBdmVyYWdlIFJhaW5mYWxsXCIsXG4gIH0sXG4gIHN1YnRpdGxlOiB7XG4gICAgdGV4dDogXCJTb3VyY2U6IFdvcmxkQ2xpbWF0ZS5jb21cIixcbiAgfSxcbiAgeEF4aXM6IHtcbiAgICBjYXRlZ29yaWVzOiBbXG4gICAgICBcIkphblwiLFxuICAgICAgXCJGZWJcIixcbiAgICAgIFwiTWFyXCIsXG4gICAgICBcIkFwclwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuXCIsXG4gICAgICBcIkp1bFwiLFxuICAgICAgXCJBdWdcIixcbiAgICAgIFwiU2VwXCIsXG4gICAgICBcIk9jdFwiLFxuICAgICAgXCJOb3ZcIixcbiAgICAgIFwiRGVjXCIsXG4gICAgXSxcbiAgICBjcm9zc2hhaXI6IHRydWUsXG4gIH0sXG4gIHlBeGlzOiB7XG4gICAgbWluOiAwLFxuICAgIHRpdGxlOiB7XG4gICAgICB0ZXh0OiBcIlJhaW5mYWxsIChtbSlcIixcbiAgICB9LFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgaGVhZGVyRm9ybWF0OiAnPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTBweFwiPntwb2ludC5rZXl9PC9zcGFuPjx0YWJsZT4nLFxuICAgIHBvaW50Rm9ybWF0OlxuICAgICAgJzx0cj48dGQgc3R5bGU9XCJjb2xvcjp7c2VyaWVzLmNvbG9yfTtwYWRkaW5nOjBcIj57c2VyaWVzLm5hbWV9OiA8L3RkPicgK1xuICAgICAgJzx0ZCBzdHlsZT1cInBhZGRpbmc6MFwiPjxiPntwb2ludC55Oi4xZn0gbW08L2I+PC90ZD48L3RyPicsXG4gICAgZm9vdGVyRm9ybWF0OiBcIjwvdGFibGU+XCIsXG4gICAgc2hhcmVkOiB0cnVlLFxuICAgIHVzZUhUTUw6IHRydWUsXG4gIH0sXG4gIHBsb3RPcHRpb25zOiB7XG4gICAgY29sdW1uOiB7XG4gICAgICBwb2ludFBhZGRpbmc6IDAuMixcbiAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgIH0sXG4gIH0sXG4gIHNlcmllczogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwiY29sdW1uXCIsXG4gICAgICBuYW1lOiBcIlRva3lvXCIsXG4gICAgICBkYXRhOiBbXG4gICAgICAgIDQ5LjksIDcxLjUsIDEwNi40LCAxMjkuMiwgMTQ0LjAsIDE3Ni4wLCAxMzUuNiwgMTQ4LjUsIDIxNi40LCAxOTQuMSxcbiAgICAgICAgOTUuNiwgNTQuNCxcbiAgICAgIF0sXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG9udmVyZWRcIik7XG4gICAgICAgICAgdGhpcy5jaGFydC5zZXJpZXNbMV0ucG9pbnRzW2V2ZW50LnBvaW50LnhdLnNldFN0YXRlKFwiaG92ZXJcIik7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgbmFtZTogXCJOZXcgWW9ya1wiLFxuICAgIC8vICAgZGF0YTogW1xuICAgIC8vICAgICA4My42LCA3OC44LCA5OC41LCA5My40LCAxMDYuMCwgODQuNSwgMTA1LjAsIDEwNC4zLCA5MS4yLCA4My41LCAxMDYuNixcbiAgICAvLyAgICAgOTIuMyxcbiAgICAvLyAgIF0sXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICBuYW1lOiBcIkxvbmRvblwiLFxuICAgIC8vICAgZGF0YTogW1xuICAgIC8vICAgICA0OC45LCAzOC44LCAzOS4zLCA0MS40LCA0Ny4wLCA0OC4zLCA1OS4wLCA1OS42LCA1Mi40LCA2NS4yLCA1OS4zLCA1MS4yLFxuICAgIC8vICAgXSxcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6IFwiQmVybGluXCIsXG4gICAgLy8gICBkYXRhOiBbXG4gICAgLy8gICAgIDQyLjQsIDMzLjIsIDM0LjUsIDM5LjcsIDUyLjYsIDc1LjUsIDU3LjQsIDYwLjQsIDQ3LjYsIDM5LjEsIDQ2LjgsIDUxLjEsXG4gICAgLy8gICBdLFxuICAgIC8vIH0sXG4gIF0sXG59O1xuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9IChwcm9wczogSGlnaGNoYXJ0c1JlYWN0LlByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRpdGxlPlxuICAgICAgY2hhcnRcbiAgICAgIDxIaWdoY2hhcnRzUmVhY3RcbiAgICAgICAgaGlnaGNoYXJ0cz17SGlnaGNoYXJ0c31cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgY29uc3RydWN0b3JUeXBlPXtcImNvbHVtblwifVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIDwvVGl0bGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});