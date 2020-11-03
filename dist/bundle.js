/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var config = __webpack_require__(2);

var Entity = __webpack_require__(3);

var Game = /*#__PURE__*/function () {
  function Game(socket, context) {
    _classCallCheck(this, Game);

    this.socket = socket;
    this.context = context;
    this.entities = [];
  }

  _createClass(Game, [{
    key: "draw",
    value: function draw() {
      this.context.clearRect(0, 0, config.WIDTH, config.HEIGHT);
      this.context.fillStyle = "red";
      this.context.fillRect(0, 0, config.WIDTH, config.HEIGHT); // this.entities.forEach((ent) => ent.draw(this.context));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.context.clearRect(0, 0, config.WIDTH, config.HEIGHT);
      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, config.WIDTH, config.HEIGHT);
      this.context.fillStyle = 'white';
      this.context.fillText('DISCONNECTED', config.WIDTH / 2, config.HEIGHT / 2);
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),
/* 2 */
/***/ ((module) => {

var PORT = 3003;
var INTERVAL = 1000 / 60;
var WIDTH = 1200;
var HEIGHT = 800;
module.exports = {
  PORT: PORT,
  INTERVAL: INTERVAL,
  WIDTH: WIDTH,
  HEIGHT: HEIGHT
};

/***/ }),
/* 3 */
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entity = /*#__PURE__*/function () {
  // [x,y] pairs
  function Entity(position, sprite, width, height) {
    var _this = this;

    _classCallCheck(this, Entity);

    this.position = position;
    this.width = width;
    this.height = height;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.acceleration = {
      x: 0,
      y: 0
    };
    this.ready = false;
    this.sprite = new Image();
    this.sprite.src = sprite;

    this.sprite.onload = function () {
      _this.ready = true;
    };
  }

  _createClass(Entity, [{
    key: "draw",
    value: function draw(context) {
      if (this.ready) {
        context.drawImage(this.sprite, this.position.x, this.position.y, this.width, this.height);
      } else {
        context.fillStyle = "black";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
      }
    }
  }]);

  return Entity;
}();

module.exports = Entity;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
var Game = __webpack_require__(1); // eslint-disable-next-line no-undef


var socket = io();
var ctx = document.querySelector('canvas').getContext('2d');
var g = new Game(socket, ctx);
socket.on('connect', function () {});
socket.on('disconnect', function () {
  g.disconnect();
});
document.addEventListener('DOMContentLoaded', function () {});
})();

/******/ })()
;