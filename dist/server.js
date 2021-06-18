module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.tsx");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();





var Contacts = function Contacts() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Contacts component");
};

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, "// \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C\u0438 \u0440\u043E\u0443\u0442\u0435\u0440\u0430 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043E\u0442\u0432\u0435\u0442 \u043E\u0442 SSR \u0441\u0435\u0440\u0432\u0435\u0440\u0430", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _home__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/contacts",
    component: Contacts
  })));
};

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Contacts, "Contacts", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\app.tsx");
  reactHotLoader.register(App, "App", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\app.tsx");
  reactHotLoader.register(_default, "default", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\app.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/home.tsx":
/*!**********************!*\
  !*** ./src/home.tsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();




var Home = function Home(_ref) {
  var name = _ref.main.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, name);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    main: state.main
  };
}, {})(Home);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\home.tsx");
  reactHotLoader.register(_default, "default", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\home.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/server-render-middleware.tsx":
/*!******************************************!*\
  !*** ./src/server-render-middleware.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_rootStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/rootStore */ "./src/store/rootStore.ts");
/* harmony import */ var _store_getInitialState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/getInitialState */ "./src/store/getInitialState.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app */ "./src/app.tsx");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();







 // В этой middleware мы формируем первичное состояние приложения на стороне сервера
// Попробуйте подебажить ее, чтобы лучше разобраться в работе

var _default = function _default(req, res) {
  var location = req.url;
  var context = {};

  var _configureStore = Object(_store_rootStore__WEBPACK_IMPORTED_MODULE_4__["configureStore"])(Object(_store_getInitialState__WEBPACK_IMPORTED_MODULE_5__["getInitialState"])(location), location),
      store = _configureStore.store;

  var jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    context: context,
    location: location
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
  var reactHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(jsx);
  var reduxState = store.getState();

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res.status(context.statusCode || 200).send(getHtml(reactHtml, reduxState));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);

function getHtml(reactHtml) {
  var reduxState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"google-site-verification\" content=\"nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE\" />\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n            <link rel=\"shortcut icon\" type=\"image/png\" href=\"/images/favicon.png\">\n            <title>Sneakers shop</title>\n            <link href=\"/main.css\" rel=\"stylesheet\">\n        </head>\n        <body>\n            <div id=\"mount\">".concat(reactHtml, "</div>\n            <script>\n                // \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0440\u0435\u0434\u0430\u043A\u0441\u0430, \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 window\n                // \u041D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043C\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C \u044D\u0442\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043F\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435\n                window.__INITIAL_STATE__ = ").concat(JSON.stringify(reduxState), "\n            </script>\n            <script src=\"/main.js\"></script>\n        </body>\n        </html>\n    ");
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getHtml, "getHtml", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\server-render-middleware.tsx");
  reactHotLoader.register(_default, "default", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\server-render-middleware.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_render_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-render-middleware */ "./src/server-render-middleware.tsx");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack */ "webpack");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _webpack_client_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webpack/client.config */ "./webpack/client.config.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Эта функция возвращает нам middleware для локального девсервера и HMR
// Она должна работать только при разработке

function getWebpackMiddlewares(config) {
  var compiler = webpack__WEBPACK_IMPORTED_MODULE_4___default()(_objectSpread(_objectSpread({}, config), {}, {
    mode: 'development'
  }));
  return [// middleware для webpack билда нашего кода в реальном времени. Низкоуровневый аналог webpack-dev-server
  webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler, {
    logLevel: 'error',
    publicPath: config.output.publicPath
  }), // middleware для HMR
  webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6___default()(compiler, {
    path: "/__webpack_hmr"
  })];
}

var app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // Отдаем статику нашего приложения

app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../dist'))); // На все get запросы мы запускаем сначала middleware dev server, а потом middleware рендеринга нашего приложения

app.get('/*', _toConsumableArray(getWebpackMiddlewares(_webpack_client_config__WEBPACK_IMPORTED_MODULE_7__["default"])), _server_render_middleware__WEBPACK_IMPORTED_MODULE_3__["default"]);

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getWebpackMiddlewares, "getWebpackMiddlewares", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\server.ts");
  reactHotLoader.register(app, "app", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\server.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/getInitialState.ts":
/*!**************************************!*\
  !*** ./src/store/getInitialState.ts ***!
  \**************************************/
/*! exports provided: getInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialState", function() { return getInitialState; });
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

var getInitialState = function getInitialState() {
  var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  return {
    main: {
      name: 'Yandex'
    },
    router: {
      location: {
        pathname: pathname,
        search: '',
        hash: '',
        key: ''
      },
      action: 'POP'
    }
  };
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getInitialState, "getInitialState", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\store\\getInitialState.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/store/rootReducer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();




var _default = function _default(history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    main: function counter() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        name: 'Yandex'
      };
      var action = arguments.length > 1 ? arguments[1] : undefined;
      return state;
    },
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\store\\rootReducer.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/rootStore.ts":
/*!********************************!*\
  !*** ./src/store/rootStore.ts ***!
  \********************************/
/*! exports provided: isServer, configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./src/store/rootReducer.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();




var isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
function configureStore(initialState) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var history = isServer ? Object(history__WEBPACK_IMPORTED_MODULE_1__["createMemoryHistory"])({
    initialEntries: [url]
  }) : Object(history__WEBPACK_IMPORTED_MODULE_1__["createBrowserHistory"])();
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"])(history), initialState);
  return {
    store: store,
    history: history
  };
}
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isServer, "isServer", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\store\\rootStore.ts");
  reactHotLoader.register(configureStore, "configureStore", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\src\\store\\rootStore.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./webpack/client.config.ts":
/*!**********************************!*\
  !*** ./webpack/client.config.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ "webpack");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tsconfig_paths_webpack_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsconfig-paths-webpack-plugin */ "tsconfig-paths-webpack-plugin");
/* harmony import */ var tsconfig_paths_webpack_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tsconfig_paths_webpack_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mini-css-extract-plugin */ "mini-css-extract-plugin");
/* harmony import */ var mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env */ "./webpack/env.ts");
/* harmony import */ var _loaders_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loaders/file */ "./webpack/loaders/file.ts");
/* harmony import */ var _loaders_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loaders/css */ "./webpack/loaders/css.ts");
/* harmony import */ var _loaders_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loaders/js */ "./webpack/loaders/js.ts");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();









var config = {
  target: 'web',
  entry: [_env__WEBPACK_IMPORTED_MODULE_4__["IS_DEV"] && 'react-hot-loader/patch', // entry для работы HMR
  _env__WEBPACK_IMPORTED_MODULE_4__["IS_DEV"] && 'webpack-hot-middleware/client', _env__WEBPACK_IMPORTED_MODULE_4__["IS_DEV"] && 'css-hot-loader/hotModuleReplacement', path__WEBPACK_IMPORTED_MODULE_0___default.a.join(_env__WEBPACK_IMPORTED_MODULE_4__["SRC_DIR"], 'client')].filter(Boolean),
  module: {
    rules: [_loaders_file__WEBPACK_IMPORTED_MODULE_5__["default"].client, _loaders_css__WEBPACK_IMPORTED_MODULE_6__["default"].client, _loaders_js__WEBPACK_IMPORTED_MODULE_7__["default"].client]
  },
  output: {
    path: _env__WEBPACK_IMPORTED_MODULE_4__["DIST_DIR"],
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new tsconfig_paths_webpack_plugin__WEBPACK_IMPORTED_MODULE_2__["TsconfigPathsPlugin"]({
      configFile: './tsconfig.json'
    })]
  },
  plugins: [new mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_3___default.a({
    filename: '[name].css'
  }), // plugin для HMR
  new webpack__WEBPACK_IMPORTED_MODULE_1___default.a.HotModuleReplacementPlugin()].filter(Boolean),
  devtool: 'source-map',
  performance: {
    hints: _env__WEBPACK_IMPORTED_MODULE_4__["IS_DEV"] ? false : 'warning'
  }
};
var _default = config;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(config, "config", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\webpack\\client.config.ts");
  reactHotLoader.register(_default, "default", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\webpack\\client.config.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./webpack/env.ts":
/*!************************!*\
  !*** ./webpack/env.ts ***!
  \************************/
/*! exports provided: IS_DEV, SRC_DIR, DIST_DIR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DEV", function() { return IS_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SRC_DIR", function() { return SRC_DIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIST_DIR", function() { return DIST_DIR; });
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

var path = __webpack_require__(/*! path */ "path");

var IS_DEV = process.env.NODE_ENV !== 'production';
var SRC_DIR = path.join(__dirname, '../src');
var DIST_DIR = path.join(__dirname, '../dist');

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IS_DEV, "IS_DEV", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\webpack\\env.ts");
  reactHotLoader.register(SRC_DIR, "SRC_DIR", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\webpack\\env.ts");
  reactHotLoader.register(DIST_DIR, "DIST_DIR", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\webpack\\env.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./webpack/loaders/css.ts":
/*!********************************!*\
  !*** ./webpack/loaders/css.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

var MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ "mini-css-extract-plugin");

var _require = __webpack_require__(/*! ../env */ "./webpack/env.ts"),
    IS_DEV = _require.IS_DEV;

var _default = {
  client: {
    test: /\.css$/,
    use: [IS_DEV && 'css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'].filter(Boolean)
  },
  server: {
    test: /\.css$/,
    loader: 'null-loader'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\webpack\\loaders\\css.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./webpack/loaders/file.ts":
/*!*********************************!*\
  !*** ./webpack/loaders/file.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

var fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;
var _default = {
  client: {
    loader: 'url-loader',
    test: fileRegex
  },
  server: {
    loader: 'null-loader',
    test: fileRegex
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fileRegex, "fileRegex", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\webpack\\loaders\\file.ts");
  reactHotLoader.register(_default, "default", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\webpack\\loaders\\file.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./webpack/loaders/js.ts":
/*!*******************************!*\
  !*** ./webpack/loaders/js.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();

var _default = {
  client: {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  server: {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\Dev\\pr-work\\web-middle-ssr-simple\\webpack\\loaders\\js.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tsconfig-paths-webpack-plugin":
/*!************************************************!*\
  !*** external "tsconfig-paths-webpack-plugin" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tsconfig-paths-webpack-plugin");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map