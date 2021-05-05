// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/sisisin2.png":[function(require,module,exports) {
module.exports = "/sisisin2.a64cf997.png";
},{}],"assets/sisisin4.png":[function(require,module,exports) {
module.exports = "/sisisin4.00d06a0c.png";
},{}],"assets/sisisin8.jpg":[function(require,module,exports) {
module.exports = "/sisisin8.fdea3190.jpg";
},{}],"assets/sisisin16.jpg":[function(require,module,exports) {
module.exports = "/sisisin16.42bc8c65.jpg";
},{}],"assets/sisisin32.gif":[function(require,module,exports) {
module.exports = "/sisisin32.5bc0a6d5.gif";
},{}],"assets/sisisin64.gif":[function(require,module,exports) {
module.exports = "/sisisin64.f6b1b47c.gif";
},{}],"assets/sisisin128.jpg":[function(require,module,exports) {
module.exports = "/sisisin128.b9d991b5.jpg";
},{}],"assets/sisisin256.png":[function(require,module,exports) {
module.exports = "/sisisin256.2d0ec59c.png";
},{}],"assets/sisisin512.gif":[function(require,module,exports) {
module.exports = "/sisisin512.2d66e48e.gif";
},{}],"assets/sisisin1024.jpg":[function(require,module,exports) {
module.exports = "/sisisin1024.f1d3be56.jpg";
},{}],"assets/sisisin2048.jpg":[function(require,module,exports) {
module.exports = "/sisisin2048.9b3f5ecf.jpg";
},{}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"main.js":[function(require,module,exports) {

var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _sisisin = _interopRequireDefault(require("./assets/sisisin2.png"));

var _sisisin2 = _interopRequireDefault(require("./assets/sisisin4.png"));

var _sisisin3 = _interopRequireDefault(require("./assets/sisisin8.jpg"));

var _sisisin4 = _interopRequireDefault(require("./assets/sisisin16.jpg"));

var _sisisin5 = _interopRequireDefault(require("./assets/sisisin32.gif"));

var _sisisin6 = _interopRequireDefault(require("./assets/sisisin64.gif"));

var _sisisin7 = _interopRequireDefault(require("./assets/sisisin128.jpg"));

var _sisisin8 = _interopRequireDefault(require("./assets/sisisin256.png"));

var _sisisin9 = _interopRequireDefault(require("./assets/sisisin512.gif"));

var _sisisin10 = _interopRequireDefault(require("./assets/sisisin1024.jpg"));

var _sisisin11 = _interopRequireDefault(require("./assets/sisisin2048.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//*
var isDebug = false;
/*/
const isDebug = true;
//*/

var global = {
  keys: []
};
var Settings = {
  CELL_WIDTH: 100,
  CELL_HEIGHT: 100,
  CELL_MARGIN: 12,
  ANIMATION_SWELLING: 8,
  ANIMATION_GEN_TIME: 100,
  FONT_SIZE: 40
}; // ゲームの状態を管理するクラス

var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);

    // 4 * 4 行列で, 各要素にどういう要素が入っているかを管理する
    this.board = []; // move したときに, 例えば 2 と 2 がくっついたりして merge されたかどうかを管理する

    this.merge = []; // move したときに, 動いたセルはどこからどこへ行ったのか

    this.moveCells = []; // move どの向きに移動したのかを求める
    // 0: up
    // 1: right
    // 2: down
    // 3: left

    this.move = -1;

    for (var i = 0; i < 16; i++) {
      this.board.push(0);
      this.merge.push(false);
    }
  } // 指示された方向に動いた際の次の State を求める


  _createClass(State, [{
    key: "calcNextState",
    value: function calcNextState(dir) {
      var nextState = new State(); // コピーする

      for (var i = 0; i < 16; i++) {
        nextState.board[i] = this.board[i];
      }

      if (dir == 0) {
        // up
        nextState._moveUp();
      } else if (dir == 1) {
        // right
        nextState._rotate(3);

        nextState._moveUp();

        nextState._rotate(1);
      } else if (dir == 2) {
        // down
        nextState._rotate(2);

        nextState._moveUp();

        nextState._rotate(2);
      } else {
        // left
        nextState._rotate(1);

        nextState._moveUp();

        nextState._rotate(3);
      } // 動いてたら動いてたという情報を与える


      this.move = -1;

      if (this.moveCells.length > 0) {
        this.move = dir;
      }

      return nextState;
    } // 死んでないか確かめる

  }, {
    key: "isDie",
    value: function isDie() {
      // 全部埋まっていて, かつどの隣り合ったセル同士も異なっていたら true
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (this.board[i * 4 + j] === 0) {
            return false;
          }

          var dx = [1, 0];
          var dy = [0, 1];

          for (var k = 0; k < 2; ++k) {
            var ni = i + dy[k],
                nj = j + dx[k];

            if (ni >= 4 || nj >= 4) {
              continue;
            }

            if (this.board[i * 4 + j] === this.board[ni * 4 + nj]) {
              return false;
            }
          }
        }
      }

      return true;
    }
  }, {
    key: "isClear",
    value: function isClear() {
      return this.board.some(function (b) {
        return b === 2048;
      });
    } // 空き領域を配列にして返す

  }, {
    key: "getEmptyCells",
    value: function getEmptyCells() {
      var result = [];

      for (var i = 0; i < 16; i++) {
        if (this.board[i] == 0) {
          result.push(i);
        }
      }

      return result;
    } // セルの値を書き換える(ランダムに出現するのをイメージ)
    // だけど別の用途で使ってもいいやという
    // y, x: 場所

  }, {
    key: "rewriteCells",
    value: function rewriteCells(y, x, value) {
      this.board[y * 4 + x] = value;
    } // board を時計回りに回転させる

  }, {
    key: "_rotate",
    value: function _rotate(rot) {
      for (var i = 0; i < rot; ++i) {
        var nextBoard = [];
        var nextMerge = [];

        for (var j = 0; j < 16; ++j) {
          var y = Math.floor(j / 4),
              x = j - 4 * y;
          var ny = x,
              nx = 3 - y;
          nextBoard[ny * 4 + nx] = this.board[j];
          nextMerge[ny * 4 + nx] = this.merge[j];
        }

        this.board = nextBoard;
        this.merge = nextMerge;
        var nextMoveCells = [];

        for (var _i = 0; _i < this.moveCells.length; ++_i) {
          var moveCell = this.moveCells[_i];
          var fx = moveCell.fx,
              fy = moveCell.fy,
              tx = moveCell.tx,
              ty = moveCell.ty;
          nextMoveCells.push({
            fx: 3 - fy,
            fy: fx,
            tx: 3 - ty,
            ty: tx
          });
        }

        this.moveCells = nextMoveCells;
      }
    } // 後 _moveUp が必要ですね

  }, {
    key: "_moveUp",
    value: function _moveUp() {
      // merge 情報をリセット
      for (var y = 0; y < 4; y++) {
        for (var x = 0; x < 4; x++) {
          this.merge[y * 4 + x] = false;
        }
      } // 上から順番に見ていき, くっつけられるならくっつけていく


      for (var _y = 1; _y < 4; _y++) {
        for (var _x = 0; _x < 4; ++_x) {
          if (this.board[_y * 4 + _x] === 0) continue;
          var cy = _y;

          while (cy >= 1) {
            var num = this.board[(cy - 1) * 4 + _x];

            if (num === 0) {
              // 上が空いてるなら普通に動かす
              this.board[(cy - 1) * 4 + _x] = this.board[cy * 4 + _x];
              this.board[cy * 4 + _x] = 0;
              --cy;
            } else if (num === this.board[cy * 4 + _x] && !this.merge[cy * 4 + _x] && !this.merge[(cy - 1) * 4 + _x]) {
              // 上と同じ数なら合体させる
              this.board[(cy - 1) * 4 + _x] = 2 * num;
              this.board[cy * 4 + _x] = 0;
              this.merge[(cy - 1) * 4 + _x] = true;
              --cy;
            } else {
              break;
            }
          }

          if (cy != _y) {
            // 少なくとも一マス動いているので動き情報を記録
            this.moveCells.push({
              fx: _x,
              fy: _y,
              tx: _x,
              ty: cy
            });
          }
        }
      }
    }
  }]);

  return State;
}(); // Game 全体を管理するクラス


var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    // 制御するセルを指定
    this.screen = document.getElementById('gameBoard');
    this.animation = new Animation(this.screen);
    this.state = new State();
    var v = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
    var fillCount = isDebug ? v.length : 2; // 初期状態として 2 つ cell を入れておく

    for (var i = 0; i < fillCount; i++) {
      var _v$i;

      var empty = this.state.getEmptyCells();
      var num = isDebug ? (_v$i = v[i]) !== null && _v$i !== void 0 ? _v$i : 0 : Math.random() < 0.9 ? 2 : 4;
      var index = empty[Math.floor(Math.random() * empty.length)];
      var y = Math.floor(index / 4),
          x = index % 4;
      this.state.rewriteCells(y, x, num);
      this.animation.generate(this.screen, y, x, num, 1);
    }
  } // キー入力に対応してゴニョゴニョする


  _createClass(Game, [{
    key: "move",
    value: function move(dir) {
      if (this.state.isDie()) return;
      if (!this.animation.finish) return;
      var nextState = this.state.calcNextState(dir); // いずれかのセルが動いたならば

      if (nextState.moveCells.length > 0) {
        // ランダムに数字を挿入する処理
        var empty = nextState.getEmptyCells();
        var num = Math.random() < 0.9 ? 2 : 4;
        var index = empty[Math.floor(Math.random() * empty.length)];
        var y = Math.floor(index / 4),
            x = index % 4; // なんやかんや

        nextState.rewriteCells(y, x, num); // アニメーション

        this.animation.update(nextState, y, x, num, function () {
          if (nextState.isClear()) {
            alert('clear!');
          }

          if (nextState.isDie()) {
            alert('詰んだ');
          }
        }); // state を更新

        this.state = nextState;
      }
    }
  }]);

  return Game;
}();

exports.Game = Game;

var Animation = /*#__PURE__*/function () {
  function Animation(screen) {
    _classCallCheck(this, Animation);

    // 下に並べて置くセル
    this.bottomCells = []; // 実際に動くセル

    this.cells = []; // セルの位置を覚えておく
    // this.cells[i] の位置は this.pos[i] が覚えておく

    this.pos = new Map(); // 新しいセルを出現させるときのイテレーター的な

    this.itr = 0;

    for (var i = 0; i < 16; i++) {
      var y = Math.floor(i / 4),
          x = i % 4;
      var cell = new Cell(0, screen);
      cell.setPos(y, x);
      this.bottomCells.push(cell);
    }

    this.screen = screen; // アニメーションが終了したかどうか

    this.finish = true;
  } // 指定したセル群を移動させる -> 合体させる -> 新しい数字が表れる
  // 引数：State クラス
  // 最後に merge したところから数字を登場させる


  _createClass(Animation, [{
    key: "update",
    value: function update(state, addY, addX, addNum) {
      var _this = this;

      var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
      // アニメーション開始
      this.finish = false; // 移動するアニメーション

      {
        var progress = 0;
        var time = Settings.ANIMATION_GEN_TIME;
        var start = null; // index -> 目標位置

        var map = new Map();

        var _iterator = _createForOfIteratorHelper(state.moveCells),
            _step;

        try {
          var _loop = function _loop() {
            var move = _step.value;
            var index = -1;

            _this.pos.forEach(function (value, key, map) {
              if (value.x === move.fx && value.y === move.fy) {
                index = key;
              }
            });

            if (index === -1) {
              console.error('cell not found!');
              return "continue";
            }

            map.set(index, move);
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        map.forEach(function (value, key, map) {
          _this.pos.set(key, {
            x: value.tx,
            y: value.ty
          });
        });

        var proc = function proc(timestamp) {
          if (!start) {
            start = timestamp;
          }

          progress = (timestamp - start) / time;
          progress = Math.min(progress, 1);

          if (progress >= 0) {
            map.forEach(function (value, key, map) {
              _this.cells[key].translate(value.fx, value.fy, value.tx, value.ty, progress);
            });
          }

          if (progress < 1) {
            requestAnimationFrame(proc);
          }
        };

        requestAnimationFrame(proc);
      } // 数字が合体して数字が表れるアニメーション

      {
        // removeChild する要素の index
        var deleteIndex = []; // 数を倍にする要素の index

        var animationIndex = []; // merge が true になる場所に向かっているセルは必ず二つあるので, 一つは delete に入れてもう一つは animation に入れる

        var _loop2 = function _loop2(y) {
          var _loop3 = function _loop3(x) {
            if (state.merge[y * 4 + x]) {
              // this.pos から index を二つ探す
              var index = [];

              _this.pos.forEach(function (value, key, map) {
                if (value.x === x && value.y === y) {
                  index.push(key);
                }
              });

              deleteIndex.push(index[0]);
              animationIndex.push(index[1]);
            }
          };

          for (var x = 0; x < 4; ++x) {
            _loop3(x);
          }
        };

        for (var y = 0; y < 4; ++y) {
          _loop2(y);
        } // 新しく追加する数字


        var addIndex = this.itr++;
        this.pos.set(addIndex, {
          x: addX,
          y: addY
        });
        var _progress = 0;
        var _time = Settings.ANIMATION_GEN_TIME;
        var _start = null;

        var _proc = function _proc() {
          if (!_start) {
            _start = new Date();
            _this.cells[addIndex] = new Cell(addNum, _this.screen);
          }

          var timestamp = new Date();
          _progress = (timestamp - _start) / _time;
          _progress = Math.min(_progress, 1);

          if (_progress >= 0) {
            var _iterator2 = _createForOfIteratorHelper(animationIndex),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var index = _step2.value;

                var p = _this.pos.get(index);

                _this.cells[index].changeAttrib(state.board[p.y * 4 + p.x]);

                _this.cells[index].appear(_this.pos.get(index).y, _this.pos.get(index).x, _progress, 2);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this.cells[addIndex].appear(addY, addX, _progress, 1);
          }

          if (_progress < 1) {
            requestAnimationFrame(_proc);
          } else {
            // アニメーション終了
            _this.finish = true;

            var _iterator3 = _createForOfIteratorHelper(deleteIndex),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _index = _step3.value;

                _this.screen.removeChild(_this.cells[_index].elem);

                _this.cells[_index] = null;

                _this.pos.delete(_index);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            cb();
          }
        };

        setTimeout(_proc, Settings.ANIMATION_GEN_TIME * 1.1);
      }
    } // 数字が表れる
    // screen: 親要素
    // [y, x] 座標に num を登場させるアニメーション
    // type: アニメーションの仕方(0: 特に何も 1: 広がる感じ(ランダムに表れるやつ) 2: 広がってから落ち着く(合体するやつ))

  }, {
    key: "generate",
    value: function generate(screen, y, x, num) {
      var _this2 = this;

      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var index = -1;
      this.pos.forEach(function (value, key, map) {
        if (value.x === x && value.y === y) {
          index = key;
        }
      });

      if (index !== -1) {
        this.cells[index].changeAttrib(num);
        return;
      }

      index = this.itr++;
      this.cells[index] = new Cell(num, screen);
      this.pos.set(index, {
        x: x,
        y: y
      });
      var progress = 0;
      var start = null;
      var time = Settings.ANIMATION_GEN_TIME;

      var update = function update(timestamp) {
        if (!start) {
          start = timestamp;
        }

        progress = (timestamp - start) / time;
        progress = Math.min(progress, 1);

        if (progress >= 0) {
          _this2.cells[index].appear(y, x, progress, type);
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    }
  }]);

  return Animation;
}(); // Cell を管理するクラス


var Cell = /*#__PURE__*/function () {
  // num: 数字
  // screen: 親要素
  function Cell(num, screen) {
    _classCallCheck(this, Cell);

    this.elem = this._initElement();
    screen.appendChild(this.elem);
    this.changeAttrib(num);
  } // 移動する
  // fx, fy: どこから
  // tx, ty: どこへ
  // process: 進捗率


  _createClass(Cell, [{
    key: "translate",
    value: function translate(fx, fy, tx, ty, process) {
      var x = fx + (tx - fx) * process;
      var y = fy + (ty - fy) * process;
      var posX = x * (Settings.CELL_WIDTH + Settings.CELL_MARGIN) + Settings.CELL_MARGIN;
      var posY = y * (Settings.CELL_HEIGHT + Settings.CELL_MARGIN) + Settings.CELL_MARGIN;
      this.elem.style.left = "".concat(posX, "px");
      this.elem.style.top = "".concat(posY, "px");
    } // セルを配置
    // y, x: 配置する位置

  }, {
    key: "setPos",
    value: function setPos(y, x) {
      this.appear(y, x, 0);
    } // 新しいセルが現れるアニメーション
    // y, x: 出てくる位置
    // process: 進捗率
    // type: アニメーションの仕方(0: 特に何も 1: 広がる感じ(ランダムに表れるやつ) 2: 広がってから落ち着く(合体するやつ))

  }, {
    key: "appear",
    value: function appear(y, x, progress) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var height = Settings.CELL_HEIGHT;
      var width = Settings.CELL_WIDTH;
      var posY = y * (Settings.CELL_HEIGHT + Settings.CELL_MARGIN) + Settings.CELL_MARGIN;
      var posX = x * (Settings.CELL_WIDTH + Settings.CELL_MARGIN) + Settings.CELL_MARGIN;
      var fontSize = Settings.FONT_SIZE;

      if (type === 1) {
        height = Settings.CELL_HEIGHT * progress;
        width = Settings.CELL_WIDTH * progress;
        posX = x * (Settings.CELL_WIDTH + Settings.CELL_MARGIN) + Settings.CELL_MARGIN + (Settings.CELL_WIDTH - width) / 2;
        posY = y * (Settings.CELL_HEIGHT + Settings.CELL_MARGIN) + Settings.CELL_MARGIN + (Settings.CELL_HEIGHT - height) / 2;
        fontSize = Settings.FONT_SIZE * progress;
      } else if (type === 2) {
        height = Settings.CELL_HEIGHT + Settings.ANIMATION_SWELLING * Math.sin(Math.PI * progress);
        width = Settings.CELL_WIDTH + Settings.ANIMATION_SWELLING * Math.sin(Math.PI * progress);
        posX = x * (Settings.CELL_WIDTH + Settings.CELL_MARGIN) + Settings.CELL_MARGIN + (Settings.CELL_WIDTH - width) / 2;
        posY = y * (Settings.CELL_HEIGHT + Settings.CELL_MARGIN) + Settings.CELL_MARGIN + (Settings.CELL_HEIGHT - height) / 2;
        fontSize = Settings.FONT_SIZE * (height / Settings.CELL_HEIGHT);
      }

      this.elem.style.left = "".concat(posX, "px");
      this.elem.style.top = "".concat(posY, "px");
      this.elem.style.height = "".concat(height, "px");
      this.elem.style.width = "".concat(width, "px");
      this.elem.style.fontSize = "".concat(fontSize, "px");
      this.elem.style.lineHeight = "".concat(height, "px");
    } // セルの値を変更する

  }, {
    key: "changeAttrib",
    value: function changeAttrib(num) {
      // this.elem.textContent = num > 0 ? num : '';
      this.elem.style.backgroundSize = 'cover';
      this.num = num;

      switch (num) {
        case 0:
          this.elem.style.backgroundColor = '#ccc';
          this.elem.style.color = '#000';
          break;

        case 2:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin.default, "\")");
          this.elem.style.backgroundColor = '#eee';
          this.elem.style.color = '#000';
          break;

        case 4:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin2.default, "\")");
          this.elem.style.backgroundColor = '#eec';
          this.elem.style.color = '#000';
          break;

        case 8:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin3.default, "\")");
          this.elem.style.backgroundColor = '#f93';
          this.elem.style.color = '#fff';
          break;

        case 16:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin4.default, "\")");
          this.elem.style.backgroundColor = '#c66';
          this.elem.style.color = '#fff';
          break;

        case 32:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin5.default, "\")");
          this.elem.style.backgroundColor = '#c33';
          this.elem.style.color = '#fff';
          break;

        case 64:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin6.default, "\")");
          this.elem.style.backgroundColor = '#c11';
          this.elem.style.color = '#fff';
          break;

        case 128:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin7.default, "\")");
          this.elem.style.backgroundColor = '#fc6';
          this.elem.style.color = '#fff';
          break;

        case 256:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin8.default, "\")");
          this.elem.style.backgroundColor = '#fc5';
          this.elem.style.color = '#fff';
          break;

        case 512:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin9.default, "\")");
          this.elem.style.backgroundColor = '#fc3';
          this.elem.style.color = '#fff';
          break;

        case 1024:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin10.default, "\")");
          this.elem.style.backgroundColor = '#fc1';
          this.elem.style.color = '#fff';
          break;

        case 2048:
          this.elem.style.backgroundImage = "url(\"".concat(_sisisin11.default, "\")");
          this.elem.style.backgroundColor = '#fc0';
          this.elem.style.color = '#fff';
          break;

        default:
          this.elem.style.backgroundColor = '#222';
          this.elem.style.color = '#fff';
          break;
      }
    }
  }, {
    key: "_initElement",
    value: function _initElement() {
      var result = document.createElement('div');
      result.classList.add('gameCell');
      return result;
    }
  }]);

  return Cell;
}(); // const game = new Game();
// key 入力


document.addEventListener('keydown', function (e) {
  global.keys[e.keyCode] = true;

  if (global.keys[38]) {
    // up
    game.move(0);
  } else if (global.keys[39]) {
    // right
    game.move(1);
  } else if (global.keys[40]) {
    // down
    game.move(2);
  } else if (global.keys[37]) {
    // left
    game.move(3);
  } else {
    return;
  }
});
document.addEventListener('keyup', function (e) {
  global.keys[e.keyCode] = false;
});
},{"./assets/sisisin2.png":"assets/sisisin2.png","./assets/sisisin4.png":"assets/sisisin4.png","./assets/sisisin8.jpg":"assets/sisisin8.jpg","./assets/sisisin16.jpg":"assets/sisisin16.jpg","./assets/sisisin32.gif":"assets/sisisin32.gif","./assets/sisisin64.gif":"assets/sisisin64.gif","./assets/sisisin128.jpg":"assets/sisisin128.jpg","./assets/sisisin256.png":"assets/sisisin256.png","./assets/sisisin512.gif":"assets/sisisin512.gif","./assets/sisisin1024.jpg":"assets/sisisin1024.jpg","./assets/sisisin2048.jpg":"assets/sisisin2048.jpg","process":"../node_modules/process/browser.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51838" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map