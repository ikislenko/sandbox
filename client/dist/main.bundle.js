/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	var el = document.querySelector(".text");
	var ws = new WebSocket('ws://localhost:3000');
	var Log = __webpack_require__(6);
	var log = new Log();
	// event emmited when connected
	ws.onopen = function () {
		log.write("websocket is connected ...");
		// sending a send event to websocket server
		ws.send('connected');
	};
	// event emmited when receiving message 
	ws.onmessage = function (ev) {
		el.innerText = ev.data;
		log.write(ev.data);
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Utils = __webpack_require__(7);
	var $ = new Utils();
	
	module.exports = function () {
	    function Log() {
	        _classCallCheck(this, Log);
	    }
	
	    _createClass(Log, [{
	        key: "write",
	        value: function write(msg, type) {
	            var currDateTime = new Date();
	            switch (type) {
	                case "ERR":
	                    console.log($.getDate(currDateTime) + " - ERROR: " + msg);
	                    break;
	                case "WARN":
	                    console.log($.getDate(currDateTime) + " - WARNING: " + msg);
	                    break;
	
	                default:
	                    console.log($.getDate(currDateTime) + " - MESAGE: " + msg);
	                    break;
	            }
	        }
	    }]);
	
	    return Log;
	}();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function () {
	    function $() {
	        _classCallCheck(this, $);
	    }
	
	    _createClass($, [{
	        key: "getDate",
	        value: function getDate(date) {
	            var d = new Date(date);
	
	            return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
	        }
	    }]);
	
	    return $;
	}();

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map