"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvs_weatherapp"] = self["webpackChunkvs_weatherapp"] || []).push([["src_location_js"],{

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLocation)\n/* harmony export */ });\n/* harmony import */ var _errorAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorAction.js */ \"./src/errorAction.js\");\n\n\nconst apiKey = \"fb7b72ff590b4b05ad66e3738e630101\";\n\nconst locationEl = document.querySelector(\"#weather-loc p\");\n\nasync function getLocation(city) {\n  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${apiKey}`;\n\n  try {\n    const res = await fetch(url); \n    const data = await res.json();\n\n    if (data.results.length > 0) {\n      const components = data.results[0].components;\n      const cityName =\n        components.city ||\n        components.town ||\n        components.village ||\n        components._normalized_city;\n      const countryName = components.country;\n\n      locationEl.textContent = `${cityName}, ${countryName}`;\n    }\n  } catch (err) {\n   (0,_errorAction_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9jYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7O0FBRTdDOztBQUVBOztBQUVlO0FBQ2YsZ0VBQWdFLHlCQUF5QixPQUFPLE9BQU87O0FBRXZHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyxTQUFTLElBQUksWUFBWTtBQUMzRDtBQUNBLElBQUk7QUFDSixHQUFHLDJEQUFhO0FBQ2hCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cy13ZWF0aGVyYXBwLy4vc3JjL2xvY2F0aW9uLmpzPzY5NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3dFcnJvclBhZ2UgZnJvbSBcIi4vZXJyb3JBY3Rpb24uanNcIjtcblxuY29uc3QgYXBpS2V5ID0gXCJmYjdiNzJmZjU5MGI0YjA1YWQ2NmUzNzM4ZTYzMDEwMVwiO1xuXG5jb25zdCBsb2NhdGlvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLWxvYyBwXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbihjaXR5KSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVuY2FnZWRhdGEuY29tL2dlb2NvZGUvdjEvanNvbj9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNpdHkpfSZrZXk9JHthcGlLZXl9YDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7IFxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKGRhdGEucmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb21wb25lbnRzID0gZGF0YS5yZXN1bHRzWzBdLmNvbXBvbmVudHM7XG4gICAgICBjb25zdCBjaXR5TmFtZSA9XG4gICAgICAgIGNvbXBvbmVudHMuY2l0eSB8fFxuICAgICAgICBjb21wb25lbnRzLnRvd24gfHxcbiAgICAgICAgY29tcG9uZW50cy52aWxsYWdlIHx8XG4gICAgICAgIGNvbXBvbmVudHMuX25vcm1hbGl6ZWRfY2l0eTtcbiAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gY29tcG9uZW50cy5jb3VudHJ5O1xuXG4gICAgICBsb2NhdGlvbkVsLnRleHRDb250ZW50ID0gYCR7Y2l0eU5hbWV9LCAke2NvdW50cnlOYW1lfWA7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgIHNob3dFcnJvclBhZ2UoKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/location.js\n\n}");

/***/ })

}]);