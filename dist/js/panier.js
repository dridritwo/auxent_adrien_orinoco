/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://orinoco/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithHoles)\n/* harmony export */ });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n//# sourceURL=webpack://orinoco/./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArrayLimit)\n/* harmony export */ });\nfunction _iterableToArrayLimit(arr, i) {\n  var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n\n  if (_i == null) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n\n  var _s, _e;\n\n  try {\n    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack://orinoco/./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableRest)\n/* harmony export */ });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://orinoco/./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _slicedToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) {\n  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n}\n\n//# sourceURL=webpack://orinoco/./node_modules/@babel/runtime/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\n//# sourceURL=webpack://orinoco/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);\n}\n\n//# sourceURL=webpack://orinoco/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/js/panier.js":
/*!**************************!*\
  !*** ./src/js/panier.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _services_CartService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/CartService.js */ \"./src/js/services/CartService.js\");\n\n\nvar tableBody = document.querySelector(\"#cart-list-body\");\nvar cart = (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.getCart)();\nbuildCartList(cart);\n(0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.calculateTotal)(cart);\n(0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.updateCartCounter)();\ndocument.querySelector(\"#clear-cart\").addEventListener(\"click\", function () {\n  (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.clearCart)();\n  tableBody.innerHTML = \"\";\n});\n\nfunction buildCartList(cart) {\n  if (cart) {\n    var _loop = function _loop() {\n      var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_Object$entries[_i], 2),\n          key = _Object$entries$_i[0],\n          teddy = _Object$entries$_i[1];\n\n      var tr = document.createElement(\"tr\");\n      var colorWithoutSpace = (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.stringWithoutSpace)(teddy.color);\n      tr.innerHTML = \"\\n        <td class=\\\"col-sm-8 col-md-5\\\">\\n        <div class=\\\"media\\\">\\n            <a class=\\\"thumbnail pull-left mr-3\\\" href=\\\"./article.html?articleId=\".concat(teddy._id, \"\\\"> <img class=\\\"media-object\\\" src=\\\"\").concat(teddy.imageUrl, \"\\\" style=\\\"width: 72px; height: 72px;\\\"> </a>\\n            <div class=\\\"media-body overflow-hidden\\\">\\n                <h4 class=\\\"media-heading\\\"><a href=\\\"./article.html?articleId=\").concat(teddy._id, \"\\\">\").concat(teddy.name, \"</a></h4>\\n                \\n            </div>\\n        </div></td>\\n        \\n        <td class=\\\"col-sm-1 col-md-1\\\" style=\\\"text-align: center\\\">\\n        \").concat(teddy.color, \"\\n        </td>\\n        <td class=\\\"col-sm-1 col-md-1\\\" style=\\\"text-align: center\\\">\\n        <button id=\\\"add-one-to-cart-\").concat(teddy._id, \"-\").concat(colorWithoutSpace, \"\\\" type=\\\"button\\\" class=\\\"btn btn-danger add-button\\\"><span>+</span></button>\\n        \").concat(teddy.quantity, \"\\n        <button type=\\\"button\\\" class=\\\"btn btn-primary add-button\\\" id=\\\"remove-one-from-cart-\").concat(teddy._id, \"-\").concat(colorWithoutSpace, \"\\\"><span>-</span></button>\\n        </td>\\n        <td class=\\\"col-sm-1 col-md-1 text-center\\\"><strong>\").concat(teddy.price, \" \\u20AC</strong></td>\\n        <td class=\\\"col-sm-1 col-md-1 text-center\\\"><strong>\").concat(teddy.price * teddy.quantity, \" \\u20AC</strong></td>\\n        <td class=\\\"col-sm-1 col-md-1\\\">\\n        <button type=\\\"button\\\" id=\\\"remove-btn-\").concat(teddy._id, \"-\").concat(colorWithoutSpace, \"\\\" class=\\\"btn btn-danger\\\">\\n             Remove\\n        </button></td>\\n    \");\n      tableBody.appendChild(tr); // remove line\n\n      document.querySelector(\"#remove-btn-\".concat(teddy._id, \"-\").concat(colorWithoutSpace)).addEventListener(\"click\", function () {\n        var newCart = (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.removeLineFromCart)(\"\".concat(teddy._id, \"-\").concat(colorWithoutSpace));\n        tableBody.innerHTML = \"\";\n        buildCartList(newCart);\n        (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.calculateTotal)(newCart);\n      }); // add one of selected to cart\n\n      document.querySelector(\"#add-one-to-cart-\".concat(teddy._id, \"-\").concat(colorWithoutSpace)).addEventListener(\"click\", function () {\n        var newCart = (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.addOneToCart)(\"\".concat(teddy._id, \"-\").concat(colorWithoutSpace));\n        tableBody.innerHTML = \"\";\n        buildCartList(newCart);\n        (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.calculateTotal)(newCart);\n      }); // remove one of selected from cart\n\n      document.querySelector(\"#remove-one-from-cart-\".concat(teddy._id, \"-\").concat(colorWithoutSpace)).addEventListener(\"click\", function () {\n        var newCart = (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.removeOneFromCart)(\"\".concat(teddy._id, \"-\").concat(colorWithoutSpace));\n        tableBody.innerHTML = \"\";\n        buildCartList(newCart);\n        (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.calculateTotal)(newCart);\n      });\n    };\n\n    for (var _i = 0, _Object$entries = Object.entries(cart); _i < _Object$entries.length; _i++) {\n      _loop();\n    }\n\n    ; // finaliser l'achat\n\n    document.querySelector(\"#finaliser-achat\").addEventListener(\"click\", function () {\n      (0,_services_CartService_js__WEBPACK_IMPORTED_MODULE_1__.checkOut)();\n    });\n  }\n}\n\n//# sourceURL=webpack://orinoco/./src/js/panier.js?");

/***/ }),

/***/ "./src/js/services/CartService.js":
/*!****************************************!*\
  !*** ./src/js/services/CartService.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart),\n/* harmony export */   \"addOneToCart\": () => (/* binding */ addOneToCart),\n/* harmony export */   \"removeOneFromCart\": () => (/* binding */ removeOneFromCart),\n/* harmony export */   \"clearCart\": () => (/* binding */ clearCart),\n/* harmony export */   \"checkOut\": () => (/* binding */ checkOut),\n/* harmony export */   \"calculateTotal\": () => (/* binding */ calculateTotal),\n/* harmony export */   \"removeLineFromCart\": () => (/* binding */ removeLineFromCart),\n/* harmony export */   \"updateCartCounter\": () => (/* binding */ updateCartCounter),\n/* harmony export */   \"getCart\": () => (/* binding */ getCart),\n/* harmony export */   \"getCartSize\": () => (/* binding */ getCartSize),\n/* harmony export */   \"stringWithoutSpace\": () => (/* binding */ stringWithoutSpace)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n\n\nfunction addToCart(teddy) {\n  if (!window.localStorage.getItem('cart')) {\n    window.localStorage.setItem('cart', \"{}\");\n  }\n\n  var productKey = \"\".concat(teddy._id, \"-\").concat(stringWithoutSpace(teddy.color));\n  var cart = getCart();\n\n  if (cart[productKey]) {\n    cart[productKey].quantity += 1;\n  } else {\n    teddy.quantity = 1;\n    cart[productKey] = teddy;\n  }\n\n  window.localStorage.setItem('cart', JSON.stringify(cart));\n  updateCartCounter();\n}\n;\nfunction addOneToCart(productKey) {\n  var cart = getCart();\n  cart[productKey].quantity += 1;\n  window.localStorage.setItem('cart', JSON.stringify(cart));\n  updateCartCounter();\n  return cart;\n}\n;\nfunction removeOneFromCart(productKey) {\n  var cart = getCart();\n\n  if (cart[productKey].quantity > 1) {\n    cart[productKey].quantity -= 1;\n  } else {\n    delete cart[productKey];\n  }\n\n  window.localStorage.setItem('cart', JSON.stringify(cart));\n  updateCartCounter();\n  return cart;\n}\n;\nfunction clearCart() {\n  window.localStorage.clear();\n  updateCartCounter();\n  calculateTotal();\n}\nfunction checkOut() {\n  var cart = getCart();\n  console.log(\"cart\", cart);\n}\nfunction calculateTotal(cart) {\n  var totalField = document.querySelector(\"#total\");\n\n  if (cart) {\n    var total = 0;\n\n    for (var _i = 0, _Object$entries = Object.entries(cart); _i < _Object$entries.length; _i++) {\n      var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_Object$entries[_i], 2),\n          key = _Object$entries$_i[0],\n          teddy = _Object$entries$_i[1];\n\n      total += teddy.price * teddy.quantity;\n    }\n\n    totalField.innerHTML = \"\".concat(total, \" \\u20AC\");\n  } else {\n    totalField.innerHTML = \"\";\n  }\n}\nfunction removeLineFromCart(id) {\n  var cartToSlim = getCart();\n  delete cartToSlim[id];\n  window.localStorage.setItem('cart', JSON.stringify(cartToSlim));\n  updateCartCounter();\n  return cartToSlim;\n}\nfunction updateCartCounter() {\n  var cartCounter = document.querySelector(\"#cart-counter\");\n  var cart = getCart();\n  var quantitySum = getCartSize(cart);\n\n  if (cartCounter) {\n    cartCounter.innerText = quantitySum;\n  }\n}\nfunction getCart() {\n  return JSON.parse(window.localStorage.getItem('cart'));\n}\nfunction getCartSize(cart) {\n  var quantitySum = 0;\n\n  if (cart != null && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(cart) === \"object\") {\n    var keys = Object.keys(cart);\n    keys.forEach(function (key) {\n      quantitySum += cart[key].quantity;\n    });\n  }\n\n  return quantitySum;\n}\nfunction stringWithoutSpace(string) {\n  return string.toString().replace(/\\s/g, \"\");\n}\n\n//# sourceURL=webpack://orinoco/./src/js/services/CartService.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/panier.js");
/******/ 	
/******/ })()
;