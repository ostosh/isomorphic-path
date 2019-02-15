(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["browserRunner"] = factory();
	else
		root["browserRunner"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(12);
const platform_1 = __webpack_require__(5);
const noop_1 = __webpack_require__(13);
const unsupportedMethods = {
    resolve: noop_1.noop,
    relative: noop_1.noop,
};
const win32Runtime = Object.assign({}, path_1.win32, unsupportedMethods);
exports.win32 = win32Runtime;
const posixRuntime = Object.assign({}, path_1.posix, unsupportedMethods);
exports.posix = posixRuntime;
let defaultExport = { win32: win32Runtime, posix: posixRuntime };
if (platform_1.isWin()) {
    defaultExport = Object.assign({}, defaultExport, win32Runtime);
}
else {
    defaultExport = Object.assign({}, defaultExport, posixRuntime);
}
let normalizeRuntime;
exports.normalize = normalizeRuntime;
let joinRuntime;
exports.join = joinRuntime;
let resolveRuntime;
exports.resolve = resolveRuntime;
let isAbsoluteRuntime;
exports.isAbsolute = isAbsoluteRuntime;
let relativeRuntime;
exports.relative = relativeRuntime;
let dirnameRuntime;
exports.dirname = dirnameRuntime;
let basenameRuntime;
exports.basename = basenameRuntime;
let extnameRuntime;
exports.extname = extnameRuntime;
let sepRuntime;
exports.sep = sepRuntime;
let delimiterRuntime;
exports.delimiter = delimiterRuntime;
let parseRuntime;
exports.parse = parseRuntime;
let formatRuntime;
exports.format = formatRuntime;
if (platform_1.isWin()) {
    exports.normalize = normalizeRuntime = win32Runtime.normalize;
    exports.join = joinRuntime = win32Runtime.join;
    exports.resolve = resolveRuntime = win32Runtime.resolve;
    exports.isAbsolute = isAbsoluteRuntime = win32Runtime.isAbsolute;
    exports.relative = relativeRuntime = win32Runtime.relative;
    exports.dirname = dirnameRuntime = win32Runtime.dirname;
    exports.basename = basenameRuntime = win32Runtime.basename;
    exports.extname = extnameRuntime = win32Runtime.extname;
    exports.sep = sepRuntime = win32Runtime.sep;
    exports.delimiter = delimiterRuntime = win32Runtime.delimiter;
    exports.parse = parseRuntime = win32Runtime.parse;
    exports.format = formatRuntime = win32Runtime.format;
}
else {
    exports.normalize = normalizeRuntime = posixRuntime.normalize;
    exports.join = joinRuntime = posixRuntime.join;
    exports.resolve = resolveRuntime = posixRuntime.resolve;
    exports.isAbsolute = isAbsoluteRuntime = posixRuntime.isAbsolute;
    exports.relative = relativeRuntime = posixRuntime.relative;
    exports.dirname = dirnameRuntime = posixRuntime.dirname;
    exports.basename = basenameRuntime = posixRuntime.basename;
    exports.extname = extnameRuntime = posixRuntime.extname;
    exports.sep = sepRuntime = posixRuntime.sep;
    exports.delimiter = delimiterRuntime = posixRuntime.delimiter;
    exports.parse = parseRuntime = posixRuntime.parse;
    exports.format = formatRuntime = posixRuntime.format;
}
exports.default = defaultExport;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["isomorphic-path.browser"] = factory();
	else
		root["isomorphic-path.browser"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
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
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(5);
const platform_1 = __webpack_require__(8);
const noop_1 = __webpack_require__(7);
const unsupportedMethods = {
    resolve: noop_1.noop,
    relative: noop_1.noop,
};
const win32Runtime = Object.assign({}, path_1.win32, unsupportedMethods);
exports.win32 = win32Runtime;
const posixRuntime = Object.assign({}, path_1.posix, unsupportedMethods);
exports.posix = posixRuntime;
let defaultExport = { win32: win32Runtime, posix: posixRuntime };
if (platform_1.isWin()) {
    defaultExport = Object.assign({}, defaultExport, win32Runtime);
}
else {
    defaultExport = Object.assign({}, defaultExport, posixRuntime);
}
let normalizeRuntime;
exports.normalize = normalizeRuntime;
let joinRuntime;
exports.join = joinRuntime;
let resolveRuntime;
exports.resolve = resolveRuntime;
let isAbsoluteRuntime;
exports.isAbsolute = isAbsoluteRuntime;
let relativeRuntime;
exports.relative = relativeRuntime;
let dirnameRuntime;
exports.dirname = dirnameRuntime;
let basenameRuntime;
exports.basename = basenameRuntime;
let extnameRuntime;
exports.extname = extnameRuntime;
let sepRuntime;
exports.sep = sepRuntime;
let delimiterRuntime;
exports.delimiter = delimiterRuntime;
let parseRuntime;
exports.parse = parseRuntime;
let formatRuntime;
exports.format = formatRuntime;
if (platform_1.isWin()) {
    exports.normalize = normalizeRuntime = win32Runtime.normalize;
    exports.join = joinRuntime = win32Runtime.join;
    exports.resolve = resolveRuntime = win32Runtime.resolve;
    exports.isAbsolute = isAbsoluteRuntime = win32Runtime.isAbsolute;
    exports.relative = relativeRuntime = win32Runtime.relative;
    exports.dirname = dirnameRuntime = win32Runtime.dirname;
    exports.basename = basenameRuntime = win32Runtime.basename;
    exports.extname = extnameRuntime = win32Runtime.extname;
    exports.sep = sepRuntime = win32Runtime.sep;
    exports.delimiter = delimiterRuntime = win32Runtime.delimiter;
    exports.parse = parseRuntime = win32Runtime.parse;
    exports.format = formatRuntime = win32Runtime.format;
}
else {
    exports.normalize = normalizeRuntime = posixRuntime.normalize;
    exports.join = joinRuntime = posixRuntime.join;
    exports.resolve = resolveRuntime = posixRuntime.resolve;
    exports.isAbsolute = isAbsoluteRuntime = posixRuntime.isAbsolute;
    exports.relative = relativeRuntime = posixRuntime.relative;
    exports.dirname = dirnameRuntime = posixRuntime.dirname;
    exports.basename = basenameRuntime = posixRuntime.basename;
    exports.extname = extnameRuntime = posixRuntime.extname;
    exports.sep = sepRuntime = posixRuntime.sep;
    exports.delimiter = delimiterRuntime = posixRuntime.delimiter;
    exports.parse = parseRuntime = posixRuntime.parse;
    exports.format = formatRuntime = posixRuntime.format;
}
exports.default = defaultExport;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(3);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(2);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.




var isWindows = process.platform === 'win32';
var util = __webpack_require__(4);


// resolves . and .. elements in a path array with directory names there
// must be no slashes or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  var res = [];
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];

    // ignore empty parts
    if (!p || p === '.')
      continue;

    if (p === '..') {
      if (res.length && res[res.length - 1] !== '..') {
        res.pop();
      } else if (allowAboveRoot) {
        res.push('..');
      }
    } else {
      res.push(p);
    }
  }

  return res;
}

// returns an array with empty elements removed from either end of the input
// array or the original array if no elements need to be removed
function trimArray(arr) {
  var lastIndex = arr.length - 1;
  var start = 0;
  for (; start <= lastIndex; start++) {
    if (arr[start])
      break;
  }

  var end = lastIndex;
  for (; end >= 0; end--) {
    if (arr[end])
      break;
  }

  if (start === 0 && end === lastIndex)
    return arr;
  if (start > end)
    return [];
  return arr.slice(start, end + 1);
}

// Regex to split a windows path into three parts: [*, device, slash,
// tail] windows-only
var splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;

// Regex to split the tail part of the above into [*, dir, basename, ext]
var splitTailRe =
    /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};

// Function to split a filename into [root, dir, basename, ext]
function win32SplitPath(filename) {
  // Separate device+slash from tail
  var result = splitDeviceRe.exec(filename),
      device = (result[1] || '') + (result[2] || ''),
      tail = result[3] || '';
  // Split the tail into dir, basename and extension
  var result2 = splitTailRe.exec(tail),
      dir = result2[1],
      basename = result2[2],
      ext = result2[3];
  return [device, dir, basename, ext];
}

function win32StatPath(path) {
  var result = splitDeviceRe.exec(path),
      device = result[1] || '',
      isUnc = !!device && device[1] !== ':';
  return {
    device: device,
    isUnc: isUnc,
    isAbsolute: isUnc || !!result[2], // UNC paths are always absolute
    tail: result[3]
  };
}

function normalizeUNCRoot(device) {
  return '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
}

// path.resolve([from ...], to)
win32.resolve = function() {
  var resolvedDevice = '',
      resolvedTail = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1; i--) {
    var path;
    if (i >= 0) {
      path = arguments[i];
    } else if (!resolvedDevice) {
      path = process.cwd();
    } else {
      // Windows has the concept of drive-specific current working
      // directories. If we've resolved a drive letter but not yet an
      // absolute path, get cwd for that drive. We're sure the device is not
      // an unc path at this points, because unc paths are always absolute.
      path = process.env['=' + resolvedDevice];
      // Verify that a drive-local cwd was found and that it actually points
      // to our drive. If not, default to the drive's root.
      if (!path || path.substr(0, 3).toLowerCase() !==
          resolvedDevice.toLowerCase() + '\\') {
        path = resolvedDevice + '\\';
      }
    }

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    var result = win32StatPath(path),
        device = result.device,
        isUnc = result.isUnc,
        isAbsolute = result.isAbsolute,
        tail = result.tail;

    if (device &&
        resolvedDevice &&
        device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      // This path points to another device so it is not applicable
      continue;
    }

    if (!resolvedDevice) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = tail + '\\' + resolvedTail;
      resolvedAbsolute = isAbsolute;
    }

    if (resolvedDevice && resolvedAbsolute) {
      break;
    }
  }

  // Convert slashes to backslashes when `resolvedDevice` points to an UNC
  // root. Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    resolvedDevice = normalizeUNCRoot(resolvedDevice);
  }

  // At this point the path should be resolved to a full absolute path,
  // but handle relative paths to be safe (might happen when process.cwd()
  // fails)

  // Normalize the tail path
  resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/),
                                !resolvedAbsolute).join('\\');

  return (resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail) ||
         '.';
};


win32.normalize = function(path) {
  var result = win32StatPath(path),
      device = result.device,
      isUnc = result.isUnc,
      isAbsolute = result.isAbsolute,
      tail = result.tail,
      trailingSlash = /[\\\/]$/.test(tail);

  // Normalize the tail path
  tail = normalizeArray(tail.split(/[\\\/]+/), !isAbsolute).join('\\');

  if (!tail && !isAbsolute) {
    tail = '.';
  }
  if (tail && trailingSlash) {
    tail += '\\';
  }

  // Convert slashes to backslashes when `device` points to an UNC root.
  // Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    device = normalizeUNCRoot(device);
  }

  return device + (isAbsolute ? '\\' : '') + tail;
};


win32.isAbsolute = function(path) {
  return win32StatPath(path).isAbsolute;
};

win32.join = function() {
  var paths = [];
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!util.isString(arg)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (arg) {
      paths.push(arg);
    }
  }

  var joined = paths.join('\\');

  // Make sure that the joined path doesn't start with two slashes, because
  // normalize() will mistake it for an UNC path then.
  //
  // This step is skipped when it is very clear that the user actually
  // intended to point at an UNC path. This is assumed when the first
  // non-empty string arguments starts with exactly two slashes followed by
  // at least one more non-slash character.
  //
  // Note that for normalize() to treat a path as an UNC path it needs to
  // have at least 2 components, so we don't filter for that here.
  // This means that the user can use join to construct UNC paths from
  // a server name and a share name; for example:
  //   path.join('//server', 'share') -> '\\\\server\\share\')
  if (!/^[\\\/]{2}[^\\\/]/.test(paths[0])) {
    joined = joined.replace(/^[\\\/]{2,}/, '\\');
  }

  return win32.normalize(joined);
};


// path.relative(from, to)
// it will solve the relative path from 'from' to 'to', for instance:
// from = 'C:\\orandea\\test\\aaa'
// to = 'C:\\orandea\\impl\\bbb'
// The output of the function should be: '..\\..\\impl\\bbb'
win32.relative = function(from, to) {
  from = win32.resolve(from);
  to = win32.resolve(to);

  // windows is not case sensitive
  var lowerFrom = from.toLowerCase();
  var lowerTo = to.toLowerCase();

  var toParts = trimArray(to.split('\\'));

  var lowerFromParts = trimArray(lowerFrom.split('\\'));
  var lowerToParts = trimArray(lowerTo.split('\\'));

  var length = Math.min(lowerFromParts.length, lowerToParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (lowerFromParts[i] !== lowerToParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  if (samePartsLength == 0) {
    return to;
  }

  var outputParts = [];
  for (var i = samePartsLength; i < lowerFromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('\\');
};


win32._makeLong = function(path) {
  // Note: this will *probably* throw somewhere.
  if (!util.isString(path))
    return path;

  if (!path) {
    return '';
  }

  var resolvedPath = win32.resolve(path);

  if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
    // path is local filesystem path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\' + resolvedPath;
  } else if (/^\\\\[^?.]/.test(resolvedPath)) {
    // path is network UNC path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\UNC\\' + resolvedPath.substring(2);
  }

  return path;
};


win32.dirname = function(path) {
  var result = win32SplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


win32.basename = function(path, ext) {
  var f = win32SplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


win32.extname = function(path) {
  return win32SplitPath(path)[3];
};


win32.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir;
  var base = pathObject.base || '';
  if (!dir) {
    return base;
  }
  if (dir[dir.length - 1] === win32.sep) {
    return dir + base;
  }
  return dir + win32.sep + base;
};


win32.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = win32SplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


win32.sep = '\\';
win32.delimiter = ';';


// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var posix = {};


function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}


// path.resolve([from ...], to)
// posix version
posix.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path[0] === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(resolvedPath.split('/'),
                                !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
posix.normalize = function(path) {
  var isAbsolute = posix.isAbsolute(path),
      trailingSlash = path && path[path.length - 1] === '/';

  // Normalize the path
  path = normalizeArray(path.split('/'), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
posix.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
posix.join = function() {
  var path = '';
  for (var i = 0; i < arguments.length; i++) {
    var segment = arguments[i];
    if (!util.isString(segment)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (segment) {
      if (!path) {
        path += segment;
      } else {
        path += '/' + segment;
      }
    }
  }
  return posix.normalize(path);
};


// path.relative(from, to)
// posix version
posix.relative = function(from, to) {
  from = posix.resolve(from).substr(1);
  to = posix.resolve(to).substr(1);

  var fromParts = trimArray(from.split('/'));
  var toParts = trimArray(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};


posix._makeLong = function(path) {
  return path;
};


posix.dirname = function(path) {
  var result = posixSplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


posix.basename = function(path, ext) {
  var f = posixSplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


posix.extname = function(path) {
  return posixSplitPath(path)[3];
};


posix.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir ? pathObject.dir + posix.sep : '';
  var base = pathObject.base || '';
  return dir + base;
};


posix.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = posixSplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';

  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


posix.sep = '/';
posix.delimiter = ':';


if (isWindows)
  module.exports = win32;
else /* posix */
  module.exports = posix;

module.exports.posix = posix;
module.exports.win32 = win32;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = (from, to) => {
    throw Error('method unsupported in isomorphic-path');
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMac = () => {
    if (process
        && typeof process.platform === 'string'
        && process.platform.toLowerCase() === 'darwin') {
        return true;
    }
    else if (typeof navigator !== 'undefined'
        && typeof navigator.platform === 'string'
        && navigator.platform.toLowerCase().indexOf('mac') > -1) {
        return true;
    }
    else {
        return false;
    }
};
exports.isWin = () => {
    if (process
        && typeof process.platform === 'string'
        && process.platform.toLowerCase() === 'win32') {
        return true;
    }
    else if (typeof navigator !== 'undefined'
        && typeof navigator.platform === 'string'
        && navigator.platform.toLowerCase().indexOf('win') > -1) {
        return true;
    }
    else {
        return false;
    }
};
exports.isBrowser = () => {
    return typeof window !== 'undefined';
};
exports.isNode = () => {
    return typeof window === 'undefined' && typeof process !== 'undefined';
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZTkwNDY1ZTkzNmVjYzJiM2VlOCIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC5icm93c2VyLnRzIiwid2VicGFjazovLy8uL34vaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L25vZGUtbGlicy1icm93c2VyL34vdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L25vZGUtbGlicy1icm93c2VyL34vdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8uL34vcGF0aC9wYXRoLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvbm9vcC50cyIsIndlYnBhY2s6Ly8vLi9saWIvcGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7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b21vcnBoaWMtcGF0aC5icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaXNvbW9ycGhpYy1wYXRoLmJyb3dzZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaXNvbW9ycGhpYy1wYXRoLmJyb3dzZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZTkwNDY1ZTkzNmVjYzJiM2VlOCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHdpbjMyIGFzIHdpbjMyQmFzZSwgcG9zaXggYXMgcG9zaXhCYXNlIH0gZnJvbSAncGF0aC9wYXRoJztcbmltcG9ydCB7IGlzV2luLCBpc0Jyb3dzZXIgfSBmcm9tICcuL3BsYXRmb3JtJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL25vb3AnO1xuXG5jb25zdCB1bnN1cHBvcnRlZE1ldGhvZHMgPSB7XG4gIHJlc29sdmU6IG5vb3AsXG4gIHJlbGF0aXZlOiBub29wLFxufTtcblxuY29uc3Qgd2luMzJSdW50aW1lID0gT2JqZWN0LmFzc2lnbih7fSwgd2luMzJCYXNlLCB1bnN1cHBvcnRlZE1ldGhvZHMpO1xuY29uc3QgcG9zaXhSdW50aW1lID0gT2JqZWN0LmFzc2lnbih7fSwgcG9zaXhCYXNlLCB1bnN1cHBvcnRlZE1ldGhvZHMpO1xuXG5sZXQgZGVmYXVsdEV4cG9ydCA9IHt3aW4zMjogd2luMzJSdW50aW1lLCBwb3NpeDogcG9zaXhSdW50aW1lfTtcbmlmIChpc1dpbigpKSB7XG4gIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0RXhwb3J0LCB3aW4zMlJ1bnRpbWUpO1xufSBlbHNlIHtcbiAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRFeHBvcnQsIHBvc2l4UnVudGltZSk7XG59XG5cbmxldCBub3JtYWxpemVSdW50aW1lO1xubGV0IGpvaW5SdW50aW1lO1xubGV0IHJlc29sdmVSdW50aW1lO1xubGV0IGlzQWJzb2x1dGVSdW50aW1lO1xubGV0IHJlbGF0aXZlUnVudGltZTtcbmxldCBkaXJuYW1lUnVudGltZTtcbmxldCBiYXNlbmFtZVJ1bnRpbWU7XG5sZXQgZXh0bmFtZVJ1bnRpbWU7XG5sZXQgc2VwUnVudGltZTtcbmxldCBkZWxpbWl0ZXJSdW50aW1lO1xubGV0IHBhcnNlUnVudGltZTtcbmxldCBmb3JtYXRSdW50aW1lO1xuXG5pZiAoaXNXaW4oKSkge1xuICBub3JtYWxpemVSdW50aW1lID0gd2luMzJSdW50aW1lLm5vcm1hbGl6ZTtcbiAgam9pblJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuam9pbjtcbiAgcmVzb2x2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVzb2x2ZTtcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuaXNBYnNvbHV0ZTtcbiAgcmVsYXRpdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlbGF0aXZlO1xuICBkaXJuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5kaXJuYW1lO1xuICBiYXNlbmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuYmFzZW5hbWU7XG4gIGV4dG5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmV4dG5hbWU7XG4gIHNlcFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuc2VwO1xuICBkZWxpbWl0ZXJSdW50aW1lID0gd2luMzJSdW50aW1lLmRlbGltaXRlcjtcbiAgcGFyc2VSdW50aW1lID0gd2luMzJSdW50aW1lLnBhcnNlO1xuICBmb3JtYXRSdW50aW1lID0gd2luMzJSdW50aW1lLmZvcm1hdDtcbn0gZWxzZSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHBvc2l4UnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHBvc2l4UnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHBvc2l4UnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZm9ybWF0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0RXhwb3J0O1xuZXhwb3J0IHtcbiAgbm9ybWFsaXplUnVudGltZSBhcyBub3JtYWxpemUsXG4gIGpvaW5SdW50aW1lIGFzIGpvaW4sXG4gIHJlc29sdmVSdW50aW1lIGFzIHJlc29sdmUsXG4gIGlzQWJzb2x1dGVSdW50aW1lIGFzIGlzQWJzb2x1dGUsXG4gIHJlbGF0aXZlUnVudGltZSBhcyByZWxhdGl2ZSxcbiAgZGlybmFtZVJ1bnRpbWUgYXMgZGlybmFtZSxcbiAgYmFzZW5hbWVSdW50aW1lIGFzIGJhc2VuYW1lLFxuICBleHRuYW1lUnVudGltZSBhcyBleHRuYW1lLFxuICBzZXBSdW50aW1lIGFzIHNlcCxcbiAgZGVsaW1pdGVyUnVudGltZSBhcyBkZWxpbWl0ZXIsXG4gIHBhcnNlUnVudGltZSBhcyBwYXJzZSxcbiAgZm9ybWF0UnVudGltZSBhcyBmb3JtYXQsXG4gIHBvc2l4UnVudGltZSBhcyBwb3NpeCxcbiAgd2luMzJSdW50aW1lIGFzIHdpbjMyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wYXRoLmJyb3dzZXIudHMiLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbm9kZS1saWJzLWJyb3dzZXIvfi91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbm9kZS1saWJzLWJyb3dzZXIvfi91dGlsL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGF0aC9wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vcGF0aCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXgudHMiLCJleHBvcnQgY29uc3Qgbm9vcCA9IChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9ub29wLnRzIiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1dpbiA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wbGF0Zm9ybS50cyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
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
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tsUnit (c) Copyright 2012-2015 Steve Fenton, licensed under Apache 2.0 https://github.com/Steve-Fenton/tsUnit */
Object.defineProperty(exports, "__esModule", { value: true });
class Test {
    constructor(...testModules) {
        this.privateMemberPrefix = '_';
        this.passes = [];
        this.errors = [];
        this.tests = [];
        this.reservedMethodNameContainer = new TestClass();
        this.createTestLimiter();
        for (var i = 0; i < testModules.length; i++) {
            var testModule = testModules[i];
            if (testModule.hasOwnProperty("name")) {
                var name = testModule["name"];
                this.addTestClass(new testModule, name);
            }
            else {
                for (var prop in testModule) {
                    this.addTestClass(new testModule[prop], prop);
                }
            }
        }
    }
    addTestClass(testClass, name = 'Tests') {
        this.tests.push(new TestDefinition(testClass, name));
    }
    run(testRunLimiter = null) {
        var parameters = null;
        var testContext = new TestContext();
        if (testRunLimiter == null) {
            testRunLimiter = this.testRunLimiter;
        }
        for (var i = 0; i < this.tests.length; ++i) {
            var testClass = this.tests[i].testClass;
            var dynamicTestClass = testClass;
            var testsGroupName = this.tests[i].name;
            if (testRunLimiter && !testRunLimiter.isTestsGroupActive(testsGroupName)) {
                continue;
            }
            var propertyNames = FunctionPropertyHelper.getFunctionNames(testClass);
            for (var j = 0; j < propertyNames.length; j++) {
                let unitTestName = propertyNames[j];
                if (this.isReservedFunctionName(unitTestName)
                    || (unitTestName.substring(0, this.privateMemberPrefix.length) === this.privateMemberPrefix)
                    || (typeof dynamicTestClass[unitTestName] !== 'function')
                    || (testRunLimiter && !testRunLimiter.isTestActive(unitTestName))) {
                    continue;
                }
                if (typeof dynamicTestClass[unitTestName].parameters !== 'undefined') {
                    parameters = dynamicTestClass[unitTestName].parameters;
                    for (var parameterIndex = 0; parameterIndex < parameters.length; parameterIndex++) {
                        if (testRunLimiter && !testRunLimiter.isParametersSetActive(parameterIndex)) {
                            continue;
                        }
                        this.runSingleTest(testClass, unitTestName, testsGroupName, parameters, parameterIndex);
                    }
                }
                else {
                    this.runSingleTest(testClass, unitTestName, testsGroupName);
                }
            }
        }
        return this;
    }
    showResults(target) {
        var elem;
        if (typeof target === 'string') {
            var id = target;
            elem = document.getElementById(id);
        }
        else {
            elem = target;
        }
        var template = '<article>' +
            '<h1>' + this.getTestResult() + '</h1>' +
            '<p>' + this.getTestSummary() + '</p>' +
            this.testRunLimiter.getLimitCleaner() +
            '<section id="tsFail">' +
            '<h2>Errors</h2>' +
            '<ul class="bad">' + this.getTestResultList(this.errors) + '</ul>' +
            '</section>' +
            '<section id="tsOkay">' +
            '<h2>Passing Tests</h2>' +
            '<ul class="good">' + this.getTestResultList(this.passes) + '</ul>' +
            '</section>' +
            '</article>' +
            this.testRunLimiter.getLimitCleaner();
        elem.innerHTML = template;
        return this;
    }
    getTapResults() {
        var newLine = '\r\n';
        var template = '1..' + (this.passes.length + this.errors.length).toString() + newLine;
        for (var i = 0; i < this.errors.length; i++) {
            template += 'not ok ' + this.errors[i].message + ' ' + this.errors[i].testName + ':' + this.errors[i].funcName + newLine;
        }
        for (var i = 0; i < this.passes.length; i++) {
            template += 'ok ' + this.passes[i].testName + ':' + this.passes[i].funcName + newLine;
        }
        return template;
    }
    createTestLimiter() {
        try {
            if (typeof window !== 'undefined') {
                this.testRunLimiter = new TestRunLimiter();
            }
        }
        catch (ex) { }
    }
    isReservedFunctionName(functionName) {
        return FunctionPropertyHelper
            .getFunctionNames(this.reservedMethodNameContainer)
            .some(mem => mem === functionName);
    }
    runSingleTest(testClass, unitTestName, testsGroupName, parameters = null, parameterSetIndex = null) {
        if (typeof testClass['setUp'] === 'function') {
            testClass['setUp']();
        }
        try {
            var dynamicTestClass = testClass;
            var args = (parameterSetIndex !== null) ? parameters[parameterSetIndex] : null;
            dynamicTestClass[unitTestName].apply(testClass, args);
            this.passes.push(new TestDescription(testsGroupName, unitTestName, parameterSetIndex, 'OK'));
        }
        catch (err) {
            this.errors.push(new TestDescription(testsGroupName, unitTestName, parameterSetIndex, err.toString()));
        }
        if (typeof testClass['tearDown'] === 'function') {
            testClass['tearDown']();
        }
    }
    getTestResult() {
        return this.errors.length === 0 ? 'Test Passed' : 'Test Failed';
    }
    getTestSummary() {
        return 'Total tests: <span id="tsUnitTotalCout">' + (this.passes.length + this.errors.length).toString() + '</span>. ' +
            'Passed tests: <span id="tsUnitPassCount" class="good">' + this.passes.length + '</span>. ' +
            'Failed tests: <span id="tsUnitFailCount" class="bad">' + this.errors.length + '</span>.';
    }
    getTestResultList(testResults) {
        var list = '';
        var group = '';
        var isFirst = true;
        for (var i = 0; i < testResults.length; ++i) {
            var result = testResults[i];
            if (result.testName !== group) {
                group = result.testName;
                if (isFirst) {
                    isFirst = false;
                }
                else {
                    list += '</li></ul>';
                }
                list += '<li>' + this.testRunLimiter.getLimiterForGroup(group) + result.testName + '<ul>';
            }
            var resultClass = (result.message === 'OK') ? 'success' : 'error';
            var functionLabal = result.funcName + ((result.parameterSetNumber === null)
                ? '()'
                : '(' + this.testRunLimiter.getLimiterForTest(group, result.funcName, result.parameterSetNumber) + ' paramater set: ' + result.parameterSetNumber + ')');
            list += '<li class="' + resultClass + '">' + this.testRunLimiter.getLimiterForTest(group, result.funcName) + functionLabal + ': ' + this.encodeHtmlEntities(result.message) + '</li>';
        }
        return list + '</ul>';
    }
    encodeHtmlEntities(input) {
        return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
}
exports.Test = Test;
class TestRunLimiterRunAll {
    isTestsGroupActive(groupName) {
        return true;
    }
    isTestActive(testName) {
        return true;
    }
    isParametersSetActive(paramatersSetNumber) {
        return true;
    }
}
class TestRunLimiter {
    constructor() {
        this.groupName = null;
        this.testName = null;
        this.parameterSet = null;
        this.setRefreshOnLinksWithHash();
        this.translateStringIntoTestsLimit(window.location.hash);
    }
    isTestsGroupActive(groupName) {
        if (this.groupName === null) {
            return true;
        }
        return this.groupName === groupName;
    }
    isTestActive(testName) {
        if (this.testName === null) {
            return true;
        }
        return this.testName === testName;
    }
    isParametersSetActive(paramatersSet) {
        if (this.parameterSet === null) {
            return true;
        }
        return this.parameterSet === paramatersSet;
    }
    getLimiterForTest(groupName, testName, parameterSet = null) {
        if (parameterSet !== null) {
            testName += '(' + parameterSet + ')';
        }
        return '&nbsp;<a href="#' + groupName + '/' + testName + '\" class="ascii">&#9658;</a>&nbsp;';
    }
    getLimiterForGroup(groupName) {
        return '&nbsp;<a href="#' + groupName + '" class="ascii">&#9658;</a>&nbsp;';
    }
    getLimitCleaner() {
        return '<p><a href="#">Run all tests <span class="ascii">&#9658;</span></a></p>';
    }
    setRefreshOnLinksWithHash() {
        var previousHandler = window.onhashchange;
        window.onhashchange = function (ev) {
            window.location.reload();
            if (typeof previousHandler === 'function') {
                previousHandler.call(window, ev);
            }
        };
    }
    translateStringIntoTestsLimit(value) {
        var regex = /^#([_a-zA-Z0-9]+)((\/([_a-zA-Z0-9]+))(\(([0-9]+)\))?)?$/;
        var result = regex.exec(value);
        if (result === null) {
            return;
        }
        if (result.length > 1 && !!result[1]) {
            this.groupName = result[1];
        }
        if (result.length > 4 && !!result[4]) {
            this.testName = result[4];
        }
        if (result.length > 6 && !!result[6]) {
            this.parameterSet = parseInt(result[6], 10);
        }
    }
}
exports.TestRunLimiter = TestRunLimiter;
class TestContext {
    setUp() {
    }
    tearDown() {
    }
    areIdentical(expected, actual, message = '') {
        if (expected !== actual) {
            throw this.getError('areIdentical failed when given ' +
                this.printVariable(expected) + ' and ' + this.printVariable(actual), message);
        }
    }
    areNotIdentical(expected, actual, message = '') {
        if (expected === actual) {
            throw this.getError('areNotIdentical failed when given ' +
                this.printVariable(expected) + ' and ' + this.printVariable(actual), message);
        }
    }
    areCollectionsIdentical(expected, actual, message = '') {
        function resultToString(result) {
            var msg = '';
            while (result.length > 0) {
                msg = '[' + result.pop() + ']' + msg;
            }
            return msg;
        }
        var compareArray = (expected, actual, result) => {
            var indexString = '';
            if (expected === null) {
                if (actual !== null) {
                    indexString = resultToString(result);
                    throw this.getError('areCollectionsIdentical failed when array a' +
                        indexString + ' is null and b' +
                        indexString + ' is not null', message);
                }
                return; // correct: both are nulls
            }
            else if (actual === null) {
                indexString = resultToString(result);
                throw this.getError('areCollectionsIdentical failed when array a' +
                    indexString + ' is not null and b' +
                    indexString + ' is null', message);
            }
            if (expected.length !== actual.length) {
                indexString = resultToString(result);
                throw this.getError('areCollectionsIdentical failed when length of array a' +
                    indexString + ' (length: ' + expected.length + ') is different of length of array b' +
                    indexString + ' (length: ' + actual.length + ')', message);
            }
            for (var i = 0; i < expected.length; i++) {
                if ((expected[i] instanceof Array) && (actual[i] instanceof Array)) {
                    result.push(i);
                    compareArray(expected[i], actual[i], result);
                    result.pop();
                }
                else if (expected[i] !== actual[i]) {
                    result.push(i);
                    indexString = resultToString(result);
                    throw this.getError('areCollectionsIdentical failed when element a' +
                        indexString + ' (' + this.printVariable(expected[i]) + ') is different than element b' +
                        indexString + ' (' + this.printVariable(actual[i]) + ')', message);
                }
            }
            return;
        };
        compareArray(expected, actual, []);
    }
    areCollectionsNotIdentical(expected, actual, message = '') {
        try {
            this.areCollectionsIdentical(expected, actual);
        }
        catch (ex) {
            return;
        }
        throw this.getError('areCollectionsNotIdentical failed when both collections are identical', message);
    }
    isTrue(actual, message = '') {
        if (!actual) {
            throw this.getError('isTrue failed when given ' + this.printVariable(actual), message);
        }
    }
    isFalse(actual, message = '') {
        if (actual) {
            throw this.getError('isFalse failed when given ' + this.printVariable(actual), message);
        }
    }
    isTruthy(actual, message = '') {
        if (!actual) {
            throw this.getError('isTrue failed when given ' + this.printVariable(actual), message);
        }
    }
    isFalsey(actual, message = '') {
        if (actual) {
            throw this.getError('isFalse failed when given ' + this.printVariable(actual), message);
        }
    }
    throws(a, message = '', errorString = '') {
        var actual;
        if (typeof a === 'function') {
            actual = a;
        }
        else if (a.fn) {
            actual = a.fn;
            message = a.message;
            errorString = a.exceptionString;
        }
        var isThrown = false;
        try {
            actual();
        }
        catch (ex) {
            if (!errorString || ex.message === errorString) {
                isThrown = true;
            }
            if (errorString && ex.message !== errorString) {
                throw this.getError('different error string than supplied');
            }
        }
        if (!isThrown) {
            throw this.getError('did not throw an error', message || '');
        }
    }
    doesNotThrow(actual, message) {
        try {
            actual();
        }
        catch (ex) {
            throw this.getError('threw an error ' + ex, message || '');
        }
    }
    executesWithin(actual, timeLimit, message = null) {
        function getTime() {
            return window.performance.now();
        }
        function timeToString(value) {
            return Math.round(value * 100) / 100;
        }
        var startOfExecution = getTime();
        try {
            actual();
        }
        catch (ex) {
            throw this.getError('isExecuteTimeLessThanLimit fails when given code throws an exception: "' + ex + '"', message);
        }
        var executingTime = getTime() - startOfExecution;
        if (executingTime > timeLimit) {
            throw this.getError('isExecuteTimeLessThanLimit fails when execution time of given code (' + timeToString(executingTime) + ' ms) ' +
                'exceed the given limit(' + timeToString(timeLimit) + ' ms)', message);
        }
    }
    fail(message = '') {
        throw this.getError('fail', message);
    }
    getError(resultMessage, message = '') {
        if (message) {
            return new Error(resultMessage + '. ' + message);
        }
        return new Error(resultMessage);
    }
    static getNameOfClass(inputClass) {
        // see: https://www.stevefenton.co.uk/Content/Blog/Date/201304/Blog/Obtaining-A-Class-Name-At-Runtime-In-TypeScript/
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec(inputClass.constructor.toString());
        return (results && results.length > 1) ? results[1] : '';
    }
    printVariable(variable) {
        if (variable === null) {
            return '"null"';
        }
        if (typeof variable === 'object') {
            return '{object: ' + TestContext.getNameOfClass(variable) + '}';
        }
        return '{' + (typeof variable) + '} "' + variable + '"';
    }
}
exports.TestContext = TestContext;
class TestClass extends TestContext {
    parameterizeUnitTest(method, parametersArray) {
        method.parameters = parametersArray;
    }
}
exports.TestClass = TestClass;
class FakeFactory {
    static getFake(obj, ...implementations) {
        var fakeType = function () { };
        this.populateFakeType(fakeType, obj);
        var fake = new fakeType();
        var propertyNames = FunctionPropertyHelper.getAllPropertyNames(obj);
        for (var k = 0; k < propertyNames.length; k++) {
            fake[propertyNames[k]] = function () { console.log('Default fake called.'); };
        }
        var memberNameIndex = 0;
        var memberValueIndex = 1;
        for (var i = 0; i < implementations.length; i++) {
            var impl = implementations[i];
            fake[impl[memberNameIndex]] = impl[memberValueIndex];
        }
        return fake;
    }
    static populateFakeType(fake, toCopy) {
        let properties = FunctionPropertyHelper.getAllPropertyNames(toCopy);
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            fake[property] = toCopy[property];
        }
        var __ = function () {
            this.constructor = fake;
        };
        __.prototype = toCopy.prototype;
        fake.prototype = new __();
    }
}
exports.FakeFactory = FakeFactory;
class TestDefinition {
    constructor(testClass, name) {
        this.testClass = testClass;
        this.name = name;
    }
}
exports.TestDefinition = TestDefinition;
class TestDescription {
    constructor(testName, funcName, parameterSetNumber, message) {
        this.testName = testName;
        this.funcName = funcName;
        this.parameterSetNumber = parameterSetNumber;
        this.message = message;
    }
}
exports.TestDescription = TestDescription;
class FunctionPropertyHelper {
    static walkImpl(obj, results) {
        if (obj == null) {
            return;
        }
        const ownPropertiesOfObj = Object.getOwnPropertyNames(obj);
        ownPropertiesOfObj.forEach(mem => results.add(mem));
        const prototype = Object.getPrototypeOf(obj);
        if (prototype == null) {
            return null;
        }
        const propNames = Object.getOwnPropertyNames(prototype);
        propNames.forEach(mem => results.add(mem));
        this.walkImpl(obj.prototype, results);
        this.walkImpl(prototype, results);
    }
    static walk(obj) {
        const results = new Set();
        this.walkImpl(obj, results);
        return Array.from(results);
    }
    static getFunctionNames(type) {
        return this.walk(type)
            .filter(mem => {
            var method = type[mem];
            return method instanceof Function &&
                (method !== type &&
                    method.prototype !==
                        Object
                            .getPrototypeOf(type));
        });
    }
    static getAllPropertyNames(type) {
        let properties = this.walk(type);
        if (typeof type === "function") {
            var functionProps = this.walk(Function);
            return properties.filter(mem => !functionProps.some(funcProp => funcProp === mem));
        }
        return properties.filter(mem => {
            var method = type[mem];
            return method !== type &&
                method.prototype !==
                    Object
                        .getPrototypeOf(type);
        });
    }
}
exports.FunctionPropertyHelper = FunctionPropertyHelper;
//# sourceMappingURL=tsUnit.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMac = () => {
    if (process
        && typeof process.platform === 'string'
        && process.platform.toLowerCase() === 'darwin') {
        return true;
    }
    else if (typeof navigator !== 'undefined'
        && typeof navigator.platform === 'string'
        && navigator.platform.toLowerCase().indexOf('mac') > -1) {
        return true;
    }
    else {
        return false;
    }
};
exports.isWin = () => {
    if (process
        && typeof process.platform === 'string'
        && process.platform.toLowerCase() === 'win32') {
        return true;
    }
    else if (typeof navigator !== 'undefined'
        && typeof navigator.platform === 'string'
        && navigator.platform.toLowerCase().indexOf('win') > -1) {
        return true;
    }
    else {
        return false;
    }
};
exports.isBrowser = () => {
    return typeof window !== 'undefined';
};
exports.isNode = () => {
    return typeof window === 'undefined' && typeof process !== 'undefined';
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(1);
const _1 = __webpack_require__(2);
const namedIp = __webpack_require__(2);
class ExportSpec extends tsUnit.TestClass {
    testExport() {
        this.isTrue(typeof _1.default.posix.sep === 'string', 'default export posix is defined');
        this.isTrue(typeof _1.default.win32.sep === 'string', 'default export win32 is defined');
        this.isTrue(typeof _1.default.sep === 'string', 'default export runtime is defined');
        this.isTrue(typeof namedIp.posix.sep === 'string', 'default export posix is defined');
        this.isTrue(typeof namedIp.win32.sep === 'string', 'default export win32 is defined');
        this.isTrue(typeof namedIp.sep === 'string', 'default export runtime is defined');
    }
}
exports.ExportSpec = ExportSpec;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(1);
const isomorphicPath = __webpack_require__(2);
class PathSpec extends tsUnit.TestClass {
    testDefaultExport() {
        delete __webpack_require__.c[/*require.resolve*/(0)];
        window.navigator.__defineGetter__('platform', () => 'Windows'); // stub platform call
        let path = __webpack_require__(0).default;
        this.areIdentical('\\', path.sep, 'default separator should be win32 "\\" after in windows environment');
        this.areIdentical(';', path.delimiter, 'default delimiter should be win32 ";" after in windows environment');
        delete __webpack_require__.c[/*require.resolve*/(0)];
        window.navigator.__defineGetter__('platform', () => 'Win16'); // stub platform call
        path = __webpack_require__(0).default;
        this.areIdentical('\\', path.sep, 'default separator should be win32 "\\" after in windows environment');
        this.areIdentical(';', path.delimiter, 'default delimiter should be win32 ";" after in windows environment');
        delete __webpack_require__.c[/*require.resolve*/(0)];
        window.navigator.__defineGetter__('platform', () => 'Macintosh'); // stub platform call
        path = __webpack_require__(0).default;
        this.areIdentical('/', path.sep, 'default separator should be posix "/" after in mac environment');
        this.areIdentical(':', path.delimiter, 'default delimiter should be posix "/" after in mac environment');
        delete __webpack_require__.c[/*require.resolve*/(0)];
        window.navigator.__defineGetter__('platform', () => 'MacIntel'); // stub platform call
        path = __webpack_require__(0).default;
        this.areIdentical('/', path.sep, 'default separator should be posix "/" after in mac environment');
        this.areIdentical(':', path.delimiter, 'default delimiter should be posix "/" after in mac environment');
    }
    testWin32Basename() {
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('C:\\temp\\myfile.html'), 'win32 basename should parse file name from windows path');
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('/temp/myfile.html'), 'win32 basename should parse file name from posix path');
    }
    testPosixBasename() {
        this.areIdentical('C:\\temp\\myfile.html', isomorphicPath.posix.basename('C:\\temp\\myfile.html'), 'posix basename should not parse windows path');
        this.areIdentical('myfile.html', isomorphicPath.posix.basename('/temp/myfile.html'), 'posix basename should parse file name from posix path');
    }
    testWin32Sep() {
        this.areIdentical('\\', isomorphicPath.win32.sep, 'win32 should correctly implement "\\" sep');
    }
    testPosixSep() {
        this.areIdentical('/', isomorphicPath.posix.sep, 'posix should correctly implement "/" sep');
    }
    testWin32Delimiter() {
        this.areIdentical(';', isomorphicPath.win32.delimiter, 'win32 should correctly implement ";" delimiter');
    }
    testPosixDelimiter() {
        this.areIdentical(':', isomorphicPath.posix.delimiter, 'posix should correctly implement ";" delimiter');
    }
    testWin32Dirname() {
        this.areIdentical('C:\\temp', isomorphicPath.win32.dirname('C:\\temp\\myfile.html'), 'win32 dirname should parse parent directory path from windows path');
        this.areIdentical('/temp', isomorphicPath.win32.dirname('/temp/myfile.html'), 'win32 dirname should parse parent directory path from posix path');
    }
    testPosixDirname() {
        this.areIdentical('.', isomorphicPath.posix.dirname('C:\\temp\\myfile.html'), 'posix basename should not parse windows path');
        this.areIdentical('/temp', isomorphicPath.posix.dirname('/temp/myfile.html'), 'posix dirname should parse parent directory path from posix path');
    }
    testWin32Extname() {
        this.areIdentical('.html', isomorphicPath.win32.extname('C:\\temp\\myfile.html'), 'win32 extname should parse extension from windows path');
        this.areIdentical('.html', isomorphicPath.win32.extname('/temp/myfile.html'), 'win32 extname should parse parent extension path from posix path');
        this.areIdentical('.js', isomorphicPath.win32.extname('C:\\temp\\myfile.js'), 'win32 extname should parse extension from windows path');
        this.areIdentical('.js', isomorphicPath.win32.extname('/temp/myfile.html.js'), 'win32 extname should parse parent extension path from posix path');
        this.areIdentical('.js', isomorphicPath.win32.extname('C:\\temp\\myfile.html.js'), 'win32 extname should parse pre-fixed extension from windows path');
        this.areIdentical('.js', isomorphicPath.win32.extname('/temp/myfile.html.html.js'), 'win32 extname should parse pre-fixed parent extension path from posix path');
    }
    testPosixExtname() {
        this.areIdentical('.html', isomorphicPath.posix.extname('/temp/myfile.html'), 'posix extname should parse parent extension path from posix path');
        this.areIdentical('.js', isomorphicPath.posix.extname('/temp/myfile.html.js'), 'posix extname should parse parent extension path from posix path');
        this.areIdentical('.js', isomorphicPath.posix.extname('/temp/myfile.html.html.js'), 'posix extname should parse pre-fixed parent extension path from posix path');
    }
    testWin32Format() {
        this.areIdentical('/home/user/dir\\file.txt', isomorphicPath.win32.format({
            dir: '/home/user/dir',
            base: 'file.txt',
        }), 'win32 format should not format posix ParsedPath');
        this.areIdentical('path\\dir\\file.txt', isomorphicPath.win32.format({
            root: 'C:\\',
            dir: 'path\\dir',
            base: 'file.txt',
        }), 'win32 format should format windows ParsedPath with root and dir');
        this.areIdentical('C:\\path\\dir\\file.txt', isomorphicPath.win32.format({
            dir: 'C:\\path\\dir',
            base: 'file.txt',
        }), 'win32 format should format windows ParsedPath with dir');
    }
    testPosixFormat() {
        this.areIdentical('C:\\path\\dir/file.txt', isomorphicPath.posix.format({
            dir: 'C:\\path\\dir',
            base: 'file.txt',
        }), 'posix format should not format windows ParsedPath');
        this.areIdentical('/home/user/dir/file.txt', isomorphicPath.posix.format({
            root: '/ignored',
            dir: '/home/user/dir',
            base: 'file.txt',
        }), 'posix format should format posix ParsedPath with root and dir');
        this.areIdentical('/home/user/dir/file.txt', isomorphicPath.posix.format({
            dir: '/home/user/dir',
            base: 'file.txt',
        }), 'posix format should format posix ParsedPath with dir');
    }
    testWin32Absolute() {
        this.areIdentical(true, isomorphicPath.win32.isAbsolute('//server'), 'win32 isAbsolute should return true for posix absolute path');
        this.areIdentical(true, isomorphicPath.win32.isAbsolute('\\\\server'), 'win32 isAbsolute should return true for windows absolute path');
        this.areIdentical(true, isomorphicPath.win32.isAbsolute('C:/foo/..'), 'win32 isAbsolute should return true for windows absolute path');
        this.areIdentical(true, isomorphicPath.win32.isAbsolute('C:\\foo\\..'), 'win32 isAbsolute should return true for windows absolute path');
        this.areIdentical(false, isomorphicPath.win32.isAbsolute('bar\\baz'), 'win32 isAbsolute should return false for windows relative path');
        this.areIdentical(false, isomorphicPath.win32.isAbsolute('bar/baz'), 'win32 isAbsolute should return true for relative posix path');
        this.areIdentical(false, isomorphicPath.win32.isAbsolute('.'), 'win32 isAbsolute should return false for relative posix operator');
    }
    testPosixAbsolute() {
        this.areIdentical(true, isomorphicPath.posix.isAbsolute('//server'), 'posix isAbsolute should return true for posix absolute path');
        this.areIdentical(true, isomorphicPath.posix.isAbsolute('/baz/..'), 'posix isAbsolute should return true for posix absolute path with relative operator suffix');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('\\\\server'), 'posix isAbsolute should return false for windows absolute path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('C:/foo/..'), 'posix isAbsolute should return false for windows absolute path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('C:\\foo\\..'), 'posix isAbsolute should return false for windows absolute path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('bar\\baz'), 'win32 isAbsolute should return false for windows relative path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('bar/baz'), 'win32 isAbsolute should return true for relative posix path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('.'), 'win32 isAbsolute should return true for relative posix operator');
    }
    testWin32Join() {
        this.areIdentical('C:\\foo\\bar\\baz\\asdf', isomorphicPath.win32.join('C:\\foo', 'bar', 'baz\\asdf', 'quux', '..'), 'win32 join should return joined windows path given windows fragments');
        this.areIdentical('\\foo\\bar\\baz\\asdf', isomorphicPath.win32.join('/foo', 'bar', 'baz/asdf', 'quux', '..'), 'win32 join should return joined windows path given posix fragments');
    }
    testPosixJoin() {
        this.areIdentical('\\foo/bar/baz\\asdf', isomorphicPath.posix.join('\\foo', 'bar', 'baz\\asdf', 'quux', '..'), 'posix join should not return joined posix path given windows fragments');
        this.areIdentical('/foo/bar/baz/asdf', isomorphicPath.posix.join('/foo', 'bar', 'baz/asdf', 'quux', '..'), 'posix join should return joined posix path');
    }
    testWin32Normalize() {
        this.areIdentical('C:\\temp\\foo\\bar', isomorphicPath.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'), 'win32 should normalize mixed path to windows separator');
        this.areIdentical('C:\\temp\\foo\\', isomorphicPath.win32.normalize('C:\\temp\\\\foo\\bar\\..\\'), 'win32 should normalize windows path to windows separator');
        this.areIdentical('\\foo\\bar\\baz\\asdf', isomorphicPath.win32.normalize('/foo/bar//baz/asdf/quux/..'), 'wind32 should normalize posix path to windows separator');
    }
    testPosixNormalize() {
        this.areIdentical('C:\\temp\\\\foo\\bar\\..\\', isomorphicPath.posix.normalize('C:\\temp\\\\foo\\bar\\..\\'), 'posix should not normalize windows path');
        this.areIdentical('/foo/bar/baz/asdf', isomorphicPath.posix.normalize('/foo/bar//baz/asdf/quux/..'), 'posix should normalize posix path to posix separator');
    }
    testWin32Parse() {
        const parsedPosix = isomorphicPath.win32.parse('/home/user/dir/file.txt');
        this.areIdentical('/', parsedPosix.root, 'win32 should parse posix path root');
        this.areIdentical('/home/user/dir', parsedPosix.dir, 'win32 should parse posix path dir');
        this.areIdentical('file.txt', parsedPosix.base, 'win32 should parse posix path base');
        this.areIdentical('.txt', parsedPosix.ext, 'win32 should parse posix path ext');
        this.areIdentical('file', parsedPosix.name, 'win32 should parse posix path name');
        const parsedWindows = isomorphicPath.win32.parse('C:\\path\\dir\\file.txt');
        this.areIdentical('C:\\', parsedWindows.root, 'win32 should parse windows path root');
        this.areIdentical('C:\\path\\dir', parsedWindows.dir, 'win32 should parse windows path dir');
        this.areIdentical('file.txt', parsedWindows.base, 'win32 should parse windows path base');
        this.areIdentical('.txt', parsedWindows.ext, 'win32 should parse windows path ext');
        this.areIdentical('file', parsedWindows.name, 'win32 should parse windows path name');
    }
    testPosixParse() {
        const parsedPosix = isomorphicPath.posix.parse('/home/user/dir/file.txt');
        this.areIdentical('/', parsedPosix.root, 'posix should parse posix path root');
        this.areIdentical('/home/user/dir', parsedPosix.dir, 'posix should parse posix path dir');
        this.areIdentical('file.txt', parsedPosix.base, 'posix should parse posix path base');
        this.areIdentical('.txt', parsedPosix.ext, 'posix should parse posix path ext');
        this.areIdentical('file', parsedPosix.name, 'posix should parse posix path name');
        const parsedWindows = isomorphicPath.posix.parse('C:\\path\\dir\\file.txt');
        this.areIdentical('', parsedWindows.root, 'posix should parse windows path root');
        this.areIdentical('', parsedWindows.dir, 'posix should parse windows path dir');
        this.areIdentical('C:\\path\\dir\\file.txt', parsedWindows.base, 'posix should parse windows path base');
        this.areIdentical('.txt', parsedWindows.ext, 'posix should parse windows path ext');
        this.areIdentical('C:\\path\\dir\\file', parsedWindows.name, 'posix should parse windows path name');
    }
    testWin32Resolve() {
        this.throws(isomorphicPath.win32.resolve, 'win32 should throw error on calling unsupported resolve method');
    }
    testPosixResolve() {
        this.throws(isomorphicPath.posix.resolve, 'posix should throw error on calling unsupported resolve method');
    }
    testWin32Relative() {
        this.throws(isomorphicPath.win32.relative.bind('', ''), 'win32 should throw error on calling unsupported resolve method');
    }
    testPosixRelative() {
        this.throws(isomorphicPath.posix.relative.bind('', ''), 'posix should throw error on calling unsupported resolve method');
    }
}
exports.PathSpec = PathSpec;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(1);
const platform_1 = __webpack_require__(5);
class PlatformSpec extends tsUnit.TestClass {
    testOs() {
        window.navigator.__defineGetter__('platform', () => 'Windows'); // stub platform call
        this.isTrue(platform_1.isWin(), 'isWin should return true for windows platform id: "Widnows"');
        this.isFalse(platform_1.isMac(), 'isMac should return false for windows platform id: "Widnows"');
        window.navigator.__defineGetter__('platform', () => 'Win16'); // stub platform call
        this.isTrue(platform_1.isWin(), 'isWin should return true for windows platform id: "Win32"');
        this.isFalse(platform_1.isMac(), 'isMac should return false for windows platform id: "Win32"');
        window.navigator.__defineGetter__('platform', () => 'Macintosh'); // stub platform call
        this.isFalse(platform_1.isWin(), 'isWin should return false for mac platform id: "Macintosh"');
        this.isTrue(platform_1.isMac(), 'isMac should return true for mac platform id: "Macintosh"');
        window.navigator.__defineGetter__('platform', () => 'MacIntel'); // stub platform call
        this.isFalse(platform_1.isWin(), 'isWin should return false for mac platform id: "MacIntel"');
        this.isTrue(platform_1.isMac(), 'isMac should return true for mac platform id: "MacIntel"');
    }
    testEnv() {
        this.isFalse(platform_1.isNode(), 'isNode should return false for browser spec');
        this.isTrue(platform_1.isBrowser(), 'isBrowser should return true for browser spec');
    }
}
exports.PlatformSpec = PlatformSpec;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(10);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(9);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.




var isWindows = process.platform === 'win32';
var util = __webpack_require__(11);


// resolves . and .. elements in a path array with directory names there
// must be no slashes or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  var res = [];
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];

    // ignore empty parts
    if (!p || p === '.')
      continue;

    if (p === '..') {
      if (res.length && res[res.length - 1] !== '..') {
        res.pop();
      } else if (allowAboveRoot) {
        res.push('..');
      }
    } else {
      res.push(p);
    }
  }

  return res;
}

// returns an array with empty elements removed from either end of the input
// array or the original array if no elements need to be removed
function trimArray(arr) {
  var lastIndex = arr.length - 1;
  var start = 0;
  for (; start <= lastIndex; start++) {
    if (arr[start])
      break;
  }

  var end = lastIndex;
  for (; end >= 0; end--) {
    if (arr[end])
      break;
  }

  if (start === 0 && end === lastIndex)
    return arr;
  if (start > end)
    return [];
  return arr.slice(start, end + 1);
}

// Regex to split a windows path into three parts: [*, device, slash,
// tail] windows-only
var splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;

// Regex to split the tail part of the above into [*, dir, basename, ext]
var splitTailRe =
    /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};

// Function to split a filename into [root, dir, basename, ext]
function win32SplitPath(filename) {
  // Separate device+slash from tail
  var result = splitDeviceRe.exec(filename),
      device = (result[1] || '') + (result[2] || ''),
      tail = result[3] || '';
  // Split the tail into dir, basename and extension
  var result2 = splitTailRe.exec(tail),
      dir = result2[1],
      basename = result2[2],
      ext = result2[3];
  return [device, dir, basename, ext];
}

function win32StatPath(path) {
  var result = splitDeviceRe.exec(path),
      device = result[1] || '',
      isUnc = !!device && device[1] !== ':';
  return {
    device: device,
    isUnc: isUnc,
    isAbsolute: isUnc || !!result[2], // UNC paths are always absolute
    tail: result[3]
  };
}

function normalizeUNCRoot(device) {
  return '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
}

// path.resolve([from ...], to)
win32.resolve = function() {
  var resolvedDevice = '',
      resolvedTail = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1; i--) {
    var path;
    if (i >= 0) {
      path = arguments[i];
    } else if (!resolvedDevice) {
      path = process.cwd();
    } else {
      // Windows has the concept of drive-specific current working
      // directories. If we've resolved a drive letter but not yet an
      // absolute path, get cwd for that drive. We're sure the device is not
      // an unc path at this points, because unc paths are always absolute.
      path = process.env['=' + resolvedDevice];
      // Verify that a drive-local cwd was found and that it actually points
      // to our drive. If not, default to the drive's root.
      if (!path || path.substr(0, 3).toLowerCase() !==
          resolvedDevice.toLowerCase() + '\\') {
        path = resolvedDevice + '\\';
      }
    }

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    var result = win32StatPath(path),
        device = result.device,
        isUnc = result.isUnc,
        isAbsolute = result.isAbsolute,
        tail = result.tail;

    if (device &&
        resolvedDevice &&
        device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      // This path points to another device so it is not applicable
      continue;
    }

    if (!resolvedDevice) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = tail + '\\' + resolvedTail;
      resolvedAbsolute = isAbsolute;
    }

    if (resolvedDevice && resolvedAbsolute) {
      break;
    }
  }

  // Convert slashes to backslashes when `resolvedDevice` points to an UNC
  // root. Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    resolvedDevice = normalizeUNCRoot(resolvedDevice);
  }

  // At this point the path should be resolved to a full absolute path,
  // but handle relative paths to be safe (might happen when process.cwd()
  // fails)

  // Normalize the tail path
  resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/),
                                !resolvedAbsolute).join('\\');

  return (resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail) ||
         '.';
};


win32.normalize = function(path) {
  var result = win32StatPath(path),
      device = result.device,
      isUnc = result.isUnc,
      isAbsolute = result.isAbsolute,
      tail = result.tail,
      trailingSlash = /[\\\/]$/.test(tail);

  // Normalize the tail path
  tail = normalizeArray(tail.split(/[\\\/]+/), !isAbsolute).join('\\');

  if (!tail && !isAbsolute) {
    tail = '.';
  }
  if (tail && trailingSlash) {
    tail += '\\';
  }

  // Convert slashes to backslashes when `device` points to an UNC root.
  // Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    device = normalizeUNCRoot(device);
  }

  return device + (isAbsolute ? '\\' : '') + tail;
};


win32.isAbsolute = function(path) {
  return win32StatPath(path).isAbsolute;
};

win32.join = function() {
  var paths = [];
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!util.isString(arg)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (arg) {
      paths.push(arg);
    }
  }

  var joined = paths.join('\\');

  // Make sure that the joined path doesn't start with two slashes, because
  // normalize() will mistake it for an UNC path then.
  //
  // This step is skipped when it is very clear that the user actually
  // intended to point at an UNC path. This is assumed when the first
  // non-empty string arguments starts with exactly two slashes followed by
  // at least one more non-slash character.
  //
  // Note that for normalize() to treat a path as an UNC path it needs to
  // have at least 2 components, so we don't filter for that here.
  // This means that the user can use join to construct UNC paths from
  // a server name and a share name; for example:
  //   path.join('//server', 'share') -> '\\\\server\\share\')
  if (!/^[\\\/]{2}[^\\\/]/.test(paths[0])) {
    joined = joined.replace(/^[\\\/]{2,}/, '\\');
  }

  return win32.normalize(joined);
};


// path.relative(from, to)
// it will solve the relative path from 'from' to 'to', for instance:
// from = 'C:\\orandea\\test\\aaa'
// to = 'C:\\orandea\\impl\\bbb'
// The output of the function should be: '..\\..\\impl\\bbb'
win32.relative = function(from, to) {
  from = win32.resolve(from);
  to = win32.resolve(to);

  // windows is not case sensitive
  var lowerFrom = from.toLowerCase();
  var lowerTo = to.toLowerCase();

  var toParts = trimArray(to.split('\\'));

  var lowerFromParts = trimArray(lowerFrom.split('\\'));
  var lowerToParts = trimArray(lowerTo.split('\\'));

  var length = Math.min(lowerFromParts.length, lowerToParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (lowerFromParts[i] !== lowerToParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  if (samePartsLength == 0) {
    return to;
  }

  var outputParts = [];
  for (var i = samePartsLength; i < lowerFromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('\\');
};


win32._makeLong = function(path) {
  // Note: this will *probably* throw somewhere.
  if (!util.isString(path))
    return path;

  if (!path) {
    return '';
  }

  var resolvedPath = win32.resolve(path);

  if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
    // path is local filesystem path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\' + resolvedPath;
  } else if (/^\\\\[^?.]/.test(resolvedPath)) {
    // path is network UNC path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\UNC\\' + resolvedPath.substring(2);
  }

  return path;
};


win32.dirname = function(path) {
  var result = win32SplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


win32.basename = function(path, ext) {
  var f = win32SplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


win32.extname = function(path) {
  return win32SplitPath(path)[3];
};


win32.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir;
  var base = pathObject.base || '';
  if (!dir) {
    return base;
  }
  if (dir[dir.length - 1] === win32.sep) {
    return dir + base;
  }
  return dir + win32.sep + base;
};


win32.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = win32SplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


win32.sep = '\\';
win32.delimiter = ';';


// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var posix = {};


function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}


// path.resolve([from ...], to)
// posix version
posix.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path[0] === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(resolvedPath.split('/'),
                                !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
posix.normalize = function(path) {
  var isAbsolute = posix.isAbsolute(path),
      trailingSlash = path && path[path.length - 1] === '/';

  // Normalize the path
  path = normalizeArray(path.split('/'), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
posix.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
posix.join = function() {
  var path = '';
  for (var i = 0; i < arguments.length; i++) {
    var segment = arguments[i];
    if (!util.isString(segment)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (segment) {
      if (!path) {
        path += segment;
      } else {
        path += '/' + segment;
      }
    }
  }
  return posix.normalize(path);
};


// path.relative(from, to)
// posix version
posix.relative = function(from, to) {
  from = posix.resolve(from).substr(1);
  to = posix.resolve(to).substr(1);

  var fromParts = trimArray(from.split('/'));
  var toParts = trimArray(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};


posix._makeLong = function(path) {
  return path;
};


posix.dirname = function(path) {
  var result = posixSplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


posix.basename = function(path, ext) {
  var f = posixSplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


posix.extname = function(path) {
  return posixSplitPath(path)[3];
};


posix.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir ? pathObject.dir + posix.sep : '';
  var base = pathObject.base || '';
  return dir + base;
};


posix.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = posixSplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';

  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


posix.sep = '/';
posix.delimiter = ':';


if (isWindows)
  module.exports = win32;
else /* posix */
  module.exports = posix;

module.exports.posix = posix;
module.exports.win32 = win32;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = (from, to) => {
    throw Error('method unsupported in isomorphic-path');
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(1);
const Export_spec_1 = __webpack_require__(6);
const Path_Browser_spec_1 = __webpack_require__(7);
const Platform_Browser_spec_1 = __webpack_require__(8);
const IsomorphicPathTests = [
    Export_spec_1.ExportSpec,
    Path_Browser_spec_1.PathSpec,
    Platform_Browser_spec_1.PlatformSpec,
];
const test = new tsUnit.Test(IsomorphicPathTests);
const result = test.run();
result.showResults('results');
// tslint:disable-next-line
console.log(result.getTapResults());


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(16));
//# sourceMappingURL=TsUnitModule.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit_1 = __webpack_require__(4);
var tsUnit_2 = __webpack_require__(4);
exports.Test = tsUnit_2.Test;
exports.TestContext = tsUnit_2.TestContext;
exports.TestClass = tsUnit_2.TestClass;
exports.FakeFactory = tsUnit_2.FakeFactory;
exports.TestDescription = tsUnit_2.TestDescription;
exports.TestDefinition = tsUnit_2.TestDefinition;
class TestAsync extends tsUnit_1.Test {
    runAll(tests, testRunLimiter) {
        let thisTest = tests[0];
        var testClass = thisTest.testClass;
        var dynamicTestClass = testClass;
        var testsGroupName = thisTest.name;
        var propertyNames = tsUnit_1.FunctionPropertyHelper.getFunctionNames(testClass);
        let functions = [];
        for (var j = 0; j < propertyNames.length; j++) {
            let unitTestName = propertyNames[j];
            if (!this.isReservedFunctionName(unitTestName) &&
                !(unitTestName.substring(0, this.privateMemberPrefix.length) === this.privateMemberPrefix) &&
                !(typeof dynamicTestClass[unitTestName] !== 'function') &&
                (!testRunLimiter || testRunLimiter.isTestActive(unitTestName))) {
                functions.push(unitTestName);
            }
        }
        let remainingTests = tests.slice(1);
        var promise = this.runAllFunctions(thisTest, functions, testRunLimiter);
        if (remainingTests.length) {
            return promise.then(() => this.runAll(remainingTests, testRunLimiter));
        }
        return promise;
    }
    runAllFunctions(thisTest, functionNames, testRunLimiter) {
        let unitTestName = functionNames[0];
        let remainingFunctions = functionNames.slice(1);
        var testClass = thisTest.testClass;
        var dynamicTestClass = testClass;
        var testsGroupName = thisTest.name;
        var promise;
        if (typeof dynamicTestClass[unitTestName].parameters !== 'undefined') {
            let parameters = dynamicTestClass[unitTestName].parameters;
            promise = this.runAllParameters(thisTest, unitTestName, 0, testRunLimiter);
        }
        else {
            promise = this.runSingleTestAsync(testClass, unitTestName, testsGroupName);
        }
        if (remainingFunctions.length > 0) {
            promise = promise.then(() => this.runAllFunctions(thisTest, remainingFunctions, testRunLimiter));
        }
        promise.then((x) => {
            testClass.tearDown && testClass.tearDown();
            return x;
        }, (err) => {
            testClass.tearDown && testClass.tearDown();
            throw err;
        });
        return promise;
    }
    runAllParameters(thisTest, unitTestName, parameterIndex, testRunLimiter) {
        let testClass = thisTest.testClass;
        let dynamicTestClass = testClass;
        let testsGroupName = thisTest.name;
        let parameters = dynamicTestClass[unitTestName].parameters;
        let maxIndex = parameters.length - 1;
        var index = parameterIndex;
        if (testRunLimiter) {
            while (index < parameters.length && !testRunLimiter.isParametersSetActive(index)) {
                ++index;
            }
        }
        if (index < parameters.length) {
            return this.runSingleTestAsync(testClass, unitTestName, testsGroupName, parameters, index)
                .then(() => this.runAllParameters(thisTest, unitTestName, index + 1, testRunLimiter));
        }
        return Promise.resolve(this);
    }
    runSingleTestAsync(testClass, unitTestName, testsGroupName, parameters = null, parameterSetIndex = null) {
        // running everything inside .then saves us a try/catch
        return Promise.resolve().then(() => {
            testClass.setUp && testClass.setUp();
            var dynamicTestClass = testClass;
            var args = (parameterSetIndex !== null) ? parameters[parameterSetIndex] : null;
            return dynamicTestClass[unitTestName].apply(testClass, args);
        }).then(() => {
            this.passes.push(new tsUnit_1.TestDescription(testsGroupName, unitTestName, parameterSetIndex, 'OK'));
            return this;
        }, (err) => {
            this.errors.push(new tsUnit_1.TestDescription(testsGroupName, unitTestName, parameterSetIndex, err.toString()));
            return this;
        });
    }
    runAsync(testRunLimiter = null) {
        var parameters = null;
        var testContext = new tsUnit_1.TestContext();
        if (testRunLimiter == null) {
            testRunLimiter = this.testRunLimiter;
        }
        var tests = this.tests;
        if (testRunLimiter) {
            tests = tests.filter((x) => testRunLimiter.isTestsGroupActive(x.name));
        }
        return this.runAll(tests, testRunLimiter);
    }
    run() {
        console.log("use runAsync");
        throw new Error("use runAsync");
    }
}
exports.TestAsync = TestAsync;
//# sourceMappingURL=tsUnitAsync.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwNmEyYjc3OWViMzE5MmFjM2EyMyIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC5icm93c2VyLnRzIiwid2VicGFjazovLy8uL34vdHMtdW5pdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lzb21vcnBoaWMtcGF0aC5icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy8uL3Rlc3QvRXhwb3J0LnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9QYXRoLkJyb3dzZXIuc3BlYy50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L1BsYXRmb3JtLkJyb3dzZXIuc3BlYy50cyIsIndlYnBhY2s6Ly8vLi9+L2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbm9vcC50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L1J1bm5lci5Ccm93c2VyLnRzIiwid2VicGFjazovLy8uL34vdHMtdW5pdC9kaXN0L3NyYy9Uc1VuaXRNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdEFzeW5jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0QsMkJBQTJCLG1EQUFtRDtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUU7O0FBRTFCO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLGdCQUFnQixFQUFFO0FBQ2xCLHFDQUFxQyxHQUFHO0FBQ3hDOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDJCQUEyQjtBQUMxRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxvQkFBb0I7OztBQUdwQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsSUFBSTtBQUNqQzs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw4QkFBOEI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUIsT0FBTztBQUNQO0FBQ0EsQ0FBQztBQUNELDJDQUEyQyxjQUFjLG1tbUY7Ozs7OztBQ2h4RHpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7O0FDdkx0QztBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtDQUFrQztBQUM3RCwyQkFBMkIsbURBQW1EO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUU7O0FBRTFCO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QyIsImZpbGUiOiJicm93c2VyUnVubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYnJvd3NlclJ1bm5lclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJicm93c2VyUnVubmVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA2YTJiNzc5ZWIzMTkyYWMzYTIzIiwiaW1wb3J0IHsgd2luMzIgYXMgd2luMzJCYXNlLCBwb3NpeCBhcyBwb3NpeEJhc2UgfSBmcm9tICdwYXRoL3BhdGgnO1xuaW1wb3J0IHsgaXNXaW4sIGlzQnJvd3NlciB9IGZyb20gJy4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vbm9vcCc7XG5cbmNvbnN0IHVuc3VwcG9ydGVkTWV0aG9kcyA9IHtcbiAgcmVzb2x2ZTogbm9vcCxcbiAgcmVsYXRpdmU6IG5vb3AsXG59O1xuXG5jb25zdCB3aW4zMlJ1bnRpbWUgPSBPYmplY3QuYXNzaWduKHt9LCB3aW4zMkJhc2UsIHVuc3VwcG9ydGVkTWV0aG9kcyk7XG5jb25zdCBwb3NpeFJ1bnRpbWUgPSBPYmplY3QuYXNzaWduKHt9LCBwb3NpeEJhc2UsIHVuc3VwcG9ydGVkTWV0aG9kcyk7XG5cbmxldCBkZWZhdWx0RXhwb3J0ID0ge3dpbjMyOiB3aW4zMlJ1bnRpbWUsIHBvc2l4OiBwb3NpeFJ1bnRpbWV9O1xuaWYgKGlzV2luKCkpIHtcbiAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRFeHBvcnQsIHdpbjMyUnVudGltZSk7XG59IGVsc2Uge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdEV4cG9ydCwgcG9zaXhSdW50aW1lKTtcbn1cblxubGV0IG5vcm1hbGl6ZVJ1bnRpbWU7XG5sZXQgam9pblJ1bnRpbWU7XG5sZXQgcmVzb2x2ZVJ1bnRpbWU7XG5sZXQgaXNBYnNvbHV0ZVJ1bnRpbWU7XG5sZXQgcmVsYXRpdmVSdW50aW1lO1xubGV0IGRpcm5hbWVSdW50aW1lO1xubGV0IGJhc2VuYW1lUnVudGltZTtcbmxldCBleHRuYW1lUnVudGltZTtcbmxldCBzZXBSdW50aW1lO1xubGV0IGRlbGltaXRlclJ1bnRpbWU7XG5sZXQgcGFyc2VSdW50aW1lO1xubGV0IGZvcm1hdFJ1bnRpbWU7XG5cbmlmIChpc1dpbigpKSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHdpbjMyUnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHdpbjMyUnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHdpbjMyUnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZm9ybWF0O1xufSBlbHNlIHtcbiAgbm9ybWFsaXplUnVudGltZSA9IHBvc2l4UnVudGltZS5ub3JtYWxpemU7XG4gIGpvaW5SdW50aW1lID0gcG9zaXhSdW50aW1lLmpvaW47XG4gIHJlc29sdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlc29sdmU7XG4gIGlzQWJzb2x1dGVSdW50aW1lID0gcG9zaXhSdW50aW1lLmlzQWJzb2x1dGU7XG4gIHJlbGF0aXZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZWxhdGl2ZTtcbiAgZGlybmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGlybmFtZTtcbiAgYmFzZW5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmJhc2VuYW1lO1xuICBleHRuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5leHRuYW1lO1xuICBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcbiAgZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XG4gIHBhcnNlUnVudGltZSA9IHBvc2l4UnVudGltZS5wYXJzZTtcbiAgZm9ybWF0UnVudGltZSA9IHBvc2l4UnVudGltZS5mb3JtYXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRFeHBvcnQ7XG5leHBvcnQge1xuICBub3JtYWxpemVSdW50aW1lIGFzIG5vcm1hbGl6ZSxcbiAgam9pblJ1bnRpbWUgYXMgam9pbixcbiAgcmVzb2x2ZVJ1bnRpbWUgYXMgcmVzb2x2ZSxcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgYXMgaXNBYnNvbHV0ZSxcbiAgcmVsYXRpdmVSdW50aW1lIGFzIHJlbGF0aXZlLFxuICBkaXJuYW1lUnVudGltZSBhcyBkaXJuYW1lLFxuICBiYXNlbmFtZVJ1bnRpbWUgYXMgYmFzZW5hbWUsXG4gIGV4dG5hbWVSdW50aW1lIGFzIGV4dG5hbWUsXG4gIHNlcFJ1bnRpbWUgYXMgc2VwLFxuICBkZWxpbWl0ZXJSdW50aW1lIGFzIGRlbGltaXRlcixcbiAgcGFyc2VSdW50aW1lIGFzIHBhcnNlLFxuICBmb3JtYXRSdW50aW1lIGFzIGZvcm1hdCxcbiAgcG9zaXhSdW50aW1lIGFzIHBvc2l4LFxuICB3aW4zMlJ1bnRpbWUgYXMgd2luMzIsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3BhdGguYnJvd3Nlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NyYy9Uc1VuaXRNb2R1bGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlzb21vcnBoaWMtcGF0aC5icm93c2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImlzb21vcnBoaWMtcGF0aC5icm93c2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXRoXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuY29uc3QgcGxhdGZvcm1fMSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5jb25zdCBub29wXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuY29uc3QgdW5zdXBwb3J0ZWRNZXRob2RzID0ge1xuICAgIHJlc29sdmU6IG5vb3BfMS5ub29wLFxuICAgIHJlbGF0aXZlOiBub29wXzEubm9vcCxcbn07XG5jb25zdCB3aW4zMlJ1bnRpbWUgPSBPYmplY3QuYXNzaWduKHt9LCBwYXRoXzEud2luMzIsIHVuc3VwcG9ydGVkTWV0aG9kcyk7XG5leHBvcnRzLndpbjMyID0gd2luMzJSdW50aW1lO1xuY29uc3QgcG9zaXhSdW50aW1lID0gT2JqZWN0LmFzc2lnbih7fSwgcGF0aF8xLnBvc2l4LCB1bnN1cHBvcnRlZE1ldGhvZHMpO1xuZXhwb3J0cy5wb3NpeCA9IHBvc2l4UnVudGltZTtcbmxldCBkZWZhdWx0RXhwb3J0ID0geyB3aW4zMjogd2luMzJSdW50aW1lLCBwb3NpeDogcG9zaXhSdW50aW1lIH07XG5pZiAocGxhdGZvcm1fMS5pc1dpbigpKSB7XG4gICAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRFeHBvcnQsIHdpbjMyUnVudGltZSk7XG59XG5lbHNlIHtcbiAgICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdEV4cG9ydCwgcG9zaXhSdW50aW1lKTtcbn1cbmxldCBub3JtYWxpemVSdW50aW1lO1xuZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemVSdW50aW1lO1xubGV0IGpvaW5SdW50aW1lO1xuZXhwb3J0cy5qb2luID0gam9pblJ1bnRpbWU7XG5sZXQgcmVzb2x2ZVJ1bnRpbWU7XG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlUnVudGltZTtcbmxldCBpc0Fic29sdXRlUnVudGltZTtcbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGlzQWJzb2x1dGVSdW50aW1lO1xubGV0IHJlbGF0aXZlUnVudGltZTtcbmV4cG9ydHMucmVsYXRpdmUgPSByZWxhdGl2ZVJ1bnRpbWU7XG5sZXQgZGlybmFtZVJ1bnRpbWU7XG5leHBvcnRzLmRpcm5hbWUgPSBkaXJuYW1lUnVudGltZTtcbmxldCBiYXNlbmFtZVJ1bnRpbWU7XG5leHBvcnRzLmJhc2VuYW1lID0gYmFzZW5hbWVSdW50aW1lO1xubGV0IGV4dG5hbWVSdW50aW1lO1xuZXhwb3J0cy5leHRuYW1lID0gZXh0bmFtZVJ1bnRpbWU7XG5sZXQgc2VwUnVudGltZTtcbmV4cG9ydHMuc2VwID0gc2VwUnVudGltZTtcbmxldCBkZWxpbWl0ZXJSdW50aW1lO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSBkZWxpbWl0ZXJSdW50aW1lO1xubGV0IHBhcnNlUnVudGltZTtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZVJ1bnRpbWU7XG5sZXQgZm9ybWF0UnVudGltZTtcbmV4cG9ydHMuZm9ybWF0ID0gZm9ybWF0UnVudGltZTtcbmlmIChwbGF0Zm9ybV8xLmlzV2luKCkpIHtcbiAgICBleHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUubm9ybWFsaXplO1xuICAgIGV4cG9ydHMuam9pbiA9IGpvaW5SdW50aW1lID0gd2luMzJSdW50aW1lLmpvaW47XG4gICAgZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVzb2x2ZTtcbiAgICBleHBvcnRzLmlzQWJzb2x1dGUgPSBpc0Fic29sdXRlUnVudGltZSA9IHdpbjMyUnVudGltZS5pc0Fic29sdXRlO1xuICAgIGV4cG9ydHMucmVsYXRpdmUgPSByZWxhdGl2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVsYXRpdmU7XG4gICAgZXhwb3J0cy5kaXJuYW1lID0gZGlybmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGlybmFtZTtcbiAgICBleHBvcnRzLmJhc2VuYW1lID0gYmFzZW5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmJhc2VuYW1lO1xuICAgIGV4cG9ydHMuZXh0bmFtZSA9IGV4dG5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmV4dG5hbWU7XG4gICAgZXhwb3J0cy5zZXAgPSBzZXBSdW50aW1lID0gd2luMzJSdW50aW1lLnNlcDtcbiAgICBleHBvcnRzLmRlbGltaXRlciA9IGRlbGltaXRlclJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGVsaW1pdGVyO1xuICAgIGV4cG9ydHMucGFyc2UgPSBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XG4gICAgZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXRSdW50aW1lID0gd2luMzJSdW50aW1lLmZvcm1hdDtcbn1cbmVsc2Uge1xuICAgIGV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplUnVudGltZSA9IHBvc2l4UnVudGltZS5ub3JtYWxpemU7XG4gICAgZXhwb3J0cy5qb2luID0gam9pblJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuam9pbjtcbiAgICBleHBvcnRzLnJlc29sdmUgPSByZXNvbHZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZXNvbHZlO1xuICAgIGV4cG9ydHMuaXNBYnNvbHV0ZSA9IGlzQWJzb2x1dGVSdW50aW1lID0gcG9zaXhSdW50aW1lLmlzQWJzb2x1dGU7XG4gICAgZXhwb3J0cy5yZWxhdGl2ZSA9IHJlbGF0aXZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZWxhdGl2ZTtcbiAgICBleHBvcnRzLmRpcm5hbWUgPSBkaXJuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5kaXJuYW1lO1xuICAgIGV4cG9ydHMuYmFzZW5hbWUgPSBiYXNlbmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuYmFzZW5hbWU7XG4gICAgZXhwb3J0cy5leHRuYW1lID0gZXh0bmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZXh0bmFtZTtcbiAgICBleHBvcnRzLnNlcCA9IHNlcFJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuc2VwO1xuICAgIGV4cG9ydHMuZGVsaW1pdGVyID0gZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XG4gICAgZXhwb3J0cy5wYXJzZSA9IHBhcnNlUnVudGltZSA9IHBvc2l4UnVudGltZS5wYXJzZTtcbiAgICBleHBvcnRzLmZvcm1hdCA9IGZvcm1hdFJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZm9ybWF0O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdEV4cG9ydDtcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7Ly8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXNjcmlwdG9yc1trZXlzW2ldXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLCBudWxsLCByZXQpIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihyZWopIHsgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFja2lmeU9uUmVqZWN0ZWQsIHJlaiwgY2IpIH0pO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNhbGxiYWNraWZpZWQsIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjYWxsYmFja2lmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKSk7XG4gIHJldHVybiBjYWxsYmFja2lmaWVkO1xufVxuZXhwb3J0cy5jYWxsYmFja2lmeSA9IGNhbGxiYWNraWZ5O1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygwKSkpXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7Ly8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcblxyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSlcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygxKSk7XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm5vb3AgPSAoZnJvbSwgdG8pID0+IHtcbiAgICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykge1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc01hYyA9ICgpID0+IHtcbiAgICBpZiAocHJvY2Vzc1xuICAgICAgICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbWFjJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZXhwb3J0cy5pc1dpbiA9ICgpID0+IHtcbiAgICBpZiAocHJvY2Vzc1xuICAgICAgICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnd2luMzInKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAmJiB0eXBlb2YgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAgICAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5leHBvcnRzLmlzQnJvd3NlciA9ICgpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuZXhwb3J0cy5pc05vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn07XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSlcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBMFpUa3dORFkxWlRrek5tVmpZekppTTJWbE9DSXNJbmRsWW5CaFkyczZMeTh2TGk5K0wzQnliMk5sYzNNdlluSnZkM05sY2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZjR0YwYUM1aWNtOTNjMlZ5TG5Seklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dmFXNW9aWEpwZEhNdmFXNW9aWEpwZEhOZlluSnZkM05sY2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wyNXZaR1V0YkdsaWN5MWljbTkzYzJWeUwzNHZkWFJwYkM5emRYQndiM0owTDJselFuVm1abVZ5UW5KdmQzTmxjaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDI1dlpHVXRiR2xpY3kxaWNtOTNjMlZ5TDM0dmRYUnBiQzkxZEdsc0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZjR0YwYUM5d1lYUm9MbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5cGJtUmxlQzUwY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmJtOXZjQzUwY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmNHeGhkR1p2Y20wdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc2JVUkJRVEpETEdOQlFXTTdPMEZCUlhwRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3p0QlEyaEZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdRVUZKUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNkVUpCUVhWQ0xITkNRVUZ6UWp0QlFVTTNRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhGQ1FVRnhRanRCUVVOeVFqczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzY1VOQlFYRkRPenRCUVVWeVF6dEJRVU5CTzBGQlEwRTdPMEZCUlVFc01rSkJRVEpDTzBGQlF6TkNPMEZCUTBFN1FVRkRRVHRCUVVOQkxEUkNRVUUwUWl4VlFVRlZPenM3T3pzN096czdPMEZEZGt4MFF5eHpRMEZCYlVVN1FVRkRia1VzTUVOQlFUaERPMEZCUXpsRExITkRRVUU0UWp0QlFVVTVRaXhOUVVGTkxHdENRVUZyUWl4SFFVRkhPMGxCUTNwQ0xFOUJRVThzUlVGQlJTeFhRVUZKTzBsQlEySXNVVUZCVVN4RlFVRkZMRmRCUVVrN1EwRkRaaXhEUVVGRE8wRkJSVVlzVFVGQlRTeFpRVUZaTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzV1VGQlV5eEZRVUZGTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03UVVGclJYQkVMRFpDUVVGTE8wRkJha1YyUWl4TlFVRk5MRmxCUVZrc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4WlFVRlRMRVZCUVVVc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0QlFXZEZjRVFzTmtKQlFVczdRVUU1UkhaQ0xFbEJRVWtzWVVGQllTeEhRVUZITEVWQlFVTXNTMEZCU3l4RlFVRkZMRmxCUVZrc1JVRkJSU3hMUVVGTExFVkJRVVVzV1VGQldTeEZRVUZETEVOQlFVTTdRVUZETDBRc1JVRkJSU3hEUVVGRExFTkJRVU1zWjBKQlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOYUxHRkJRV0VzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hoUVVGaExFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTTdRVUZEYWtVc1EwRkJRenRCUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEwNHNZVUZCWVN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEdGQlFXRXNSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOcVJTeERRVUZETzBGQlJVUXNTVUZCU1N4blFrRkJaMElzUTBGQlF6dEJRVEpEUXl4eFEwRkJVenRCUVRGREwwSXNTVUZCU1N4WFFVRlhMRU5CUVVNN1FVRXlRME1zTWtKQlFVazdRVUV4UTNKQ0xFbEJRVWtzWTBGQll5eERRVUZETzBGQk1rTkRMR2xEUVVGUE8wRkJNVU16UWl4SlFVRkpMR2xDUVVGcFFpeERRVUZETzBGQk1rTkRMSFZEUVVGVk8wRkJNVU5xUXl4SlFVRkpMR1ZCUVdVc1EwRkJRenRCUVRKRFF5eHRRMEZCVVR0QlFURkROMElzU1VGQlNTeGpRVUZqTEVOQlFVTTdRVUV5UTBNc2FVTkJRVTg3UVVFeFF6TkNMRWxCUVVrc1pVRkJaU3hEUVVGRE8wRkJNa05ETEcxRFFVRlJPMEZCTVVNM1FpeEpRVUZKTEdOQlFXTXNRMEZCUXp0QlFUSkRReXhwUTBGQlR6dEJRVEZETTBJc1NVRkJTU3hWUVVGVkxFTkJRVU03UVVFeVEwTXNlVUpCUVVjN1FVRXhRMjVDTEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU03UVVFeVEwTXNjVU5CUVZNN1FVRXhReTlDTEVsQlFVa3NXVUZCV1N4RFFVRkRPMEZCTWtORExEWkNRVUZMTzBGQk1VTjJRaXhKUVVGSkxHRkJRV0VzUTBGQlF6dEJRVEpEUXl3clFrRkJUVHRCUVhwRGVrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1owSkJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTmFMRzlEUVVGblFpeEhRVUZITEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRNVU1zTUVKQlFWY3NSMEZCUnl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRMmhETEdkRFFVRmpMRWRCUVVjc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU4wUXl4elEwRkJhVUlzUjBGQlJ5eFpRVUZaTEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUXpWRExHdERRVUZsTEVkQlFVY3NXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVONFF5eG5RMEZCWXl4SFFVRkhMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGRFTXNhME5CUVdVc1IwRkJSeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEzaERMR2REUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjBReXgzUWtGQlZTeEhRVUZITEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRPVUlzYjBOQlFXZENMRWRCUVVjc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU14UXl3MFFrRkJXU3hIUVVGSExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEYkVNc09FSkJRV0VzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRPMEZCUTNSRExFTkJRVU03UVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTk9MRzlEUVVGblFpeEhRVUZITEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRNVU1zTUVKQlFWY3NSMEZCUnl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRMmhETEdkRFFVRmpMRWRCUVVjc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU4wUXl4elEwRkJhVUlzUjBGQlJ5eFpRVUZaTEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUXpWRExHdERRVUZsTEVkQlFVY3NXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVONFF5eG5RMEZCWXl4SFFVRkhMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGRFTXNhME5CUVdVc1IwRkJSeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEzaERMR2REUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjBReXgzUWtGQlZTeEhRVUZITEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRPVUlzYjBOQlFXZENMRWRCUVVjc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU14UXl3MFFrRkJXU3hIUVVGSExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEYkVNc09FSkJRV0VzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRPMEZCUTNSRExFTkJRVU03UVVGRlJDeHJRa0ZCWlN4aFFVRmhMRU5CUVVNN096czdPenM3UVVNMVJEZENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFTeERRVUZETzBGQlEwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPMEZEZEVKQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RE96czdPenM3UVVOTVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNMR2xDUVVGcFFqdEJRVU53UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFpeHpRa0ZCYzBJN1FVRkRla003UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGdzZFVKQlFYVkNMRk5CUVZNN1FVRkRhRU03UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1YwRkJWeXhQUVVGUE8wRkJRMnhDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc05FTkJRVFJETEV0QlFVczdPMEZCUldwRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVERzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFTeHRRMEZCYlVNc1QwRkJUenRCUVVNeFF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFc2VVUkJRWGxFTzBGQlEzcEVPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWenRCUVVOWUxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNWMEZCVnp0QlFVTllPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhUUVVGVE8wRkJRM0JDTzBGQlEwRXNWMEZCVnl4VFFVRlRPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3pzN1FVRkZURHRCUVVOQkxHMUNRVUZ0UWl4elFrRkJjMEk3UVVGRGVrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRXNTMEZCU3pzN1FVRkZURHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UWtGQmJVSXNjMEpCUVhOQ08wRkJRM3BETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxESkNRVUV5UWl4clEwRkJhME03UVVGRE4wUXNNa0pCUVRKQ0xHMUVRVUZ0UkR0QlFVTTVSVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3p0QlF6bHlRa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN08wRkJSMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xHdENRVUZyUWp0QlFVTnVRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZGQlFWRXNiMEpCUVc5Q08wRkJRelZDTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxGRkJRVkVzVlVGQlZUdEJRVU5zUWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhkQ1FVRjNRaXhGUVVGRk96dEJRVVV4UWp0QlFVTkJPMEZCUTBFc2RVSkJRWFZDTEVsQlFVazdPMEZCUlROQ096dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2IwTkJRVzlETEZOQlFWTTdRVUZETjBNN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEhOQ1FVRnpRanRCUVVOMlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h2UTBGQmIwTTdRVUZEY0VNN1FVRkRRU3huUWtGQlowSXNSVUZCUlR0QlFVTnNRaXh4UTBGQmNVTXNSMEZCUnp0QlFVTjRRenM3UVVGRlFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzV1VGQldUdEJRVU0zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxDdENRVUVyUWl3eVFrRkJNa0k3UVVGRE1VUTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRXNiMEpCUVc5Q096czdRVUZIY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEVzTmtKQlFUWkNMRWxCUVVrN1FVRkRha003T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHZRMEZCYjBNc09FSkJRVGhDTzBGQlEyeEZPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzYzBKQlFYTkNPMEZCUTNaRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzV1VGQldUdEJRVU0zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNLMEpCUVN0Q0xITkNRVUZ6UWp0QlFVTnlSRHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096dEJRMjV1UWtFc2FVTkJRWFZDT3pzN096czdPenM3TzBGRFFWWXNXVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJXU3hGUVVGRkxFVkJRVlVzUlVGQlZTeEZRVUZGTzBsQlEzWkVMRTFCUVUwc1MwRkJTeXhEUVVGRExIVkRRVUYxUXl4RFFVRkRMRU5CUVVNN1FVRkRka1FzUTBGQlF5eERRVUZET3pzN096czdPenM3TzBGRFJsY3NZVUZCU3l4SFFVRkhMRWRCUVZrc1JVRkJSVHRKUVVOcVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBPMWRCUTFJc1QwRkJUeXhQUVVGUExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRTdWMEZEY0VNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJReTlETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRkRaQ3hEUVVGRE8wbEJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1UwRkJVeXhMUVVGTExGZEJRVmM3VjBGRGVFTXNUMEZCVHl4VFFVRlRMRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkU3VjBGRGRFTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzaEVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRFpDeERRVUZETzBsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRUaXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEyWXNRMEZCUXp0QlFVTklMRU5CUVVNc1EwRkJRenRCUVVWWExHRkJRVXNzUjBGQlJ5eEhRVUZaTEVWQlFVVTdTVUZEYWtNc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR6dFhRVU5TTEU5QlFVOHNUMEZCVHl4RFFVRkRMRkZCUVZFc1MwRkJTeXhSUVVGUk8xZEJRM0JETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTVReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzBsQlEyUXNRMEZCUXp0SlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEZOQlFWTXNTMEZCU3l4WFFVRlhPMWRCUTNSRExFOUJRVThzVTBGQlV5eERRVUZETEZGQlFWRXNTMEZCU3l4UlFVRlJPMWRCUTNSRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTJRc1EwRkJRenRKUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEwNHNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVObUxFTkJRVU03UVVGRFNDeERRVUZETEVOQlFVTTdRVUZGVnl4cFFrRkJVeXhIUVVGSExFZEJRVmtzUlVGQlJUdEpRVU55UXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ5eERRVUZETzBGQlEzWkRMRU5CUVVNc1EwRkJRenRCUVVWWExHTkJRVTBzUjBGQlJ5eEhRVUZaTEVWQlFVVTdTVUZEYkVNc1RVRkJUU3hEUVVGRExFOUJRVThzVFVGQlRTeExRVUZMTEZkQlFWY3NTVUZCU1N4UFFVRlBMRTlCUVU4c1MwRkJTeXhYUVVGWExFTkJRVU03UVVGRGVrVXNRMEZCUXl4RFFVRkRJaXdpWm1sc1pTSTZJbWx6YjIxdmNuQm9hV010Y0dGMGFDNWljbTkzYzJWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lhWE52Ylc5eWNHaHBZeTF3WVhSb0xtSnliM2R6WlhKY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aWFYTnZiVzl5Y0docFl5MXdZWFJvTG1KeWIzZHpaWEpjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzU5S1NoMGFHbHpMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlCY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnYVdSbGJuUnBkSGtnWm5WdVkzUnBiMjRnWm05eUlHTmhiR3hwYm1jZ2FHRnliVzl1ZVNCcGJYQnZjblJ6SUhkcGRHZ2dkR2hsSUdOdmNuSmxZM1FnWTI5dWRHVjRkRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXBJSHNnY21WMGRYSnVJSFpoYkhWbE95QjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0EyS1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EwWlRrd05EWTFaVGt6Tm1Wall6SmlNMlZsT0NJc0lpOHZJSE5vYVcwZ1ptOXlJSFZ6YVc1bklIQnliMk5sYzNNZ2FXNGdZbkp2ZDNObGNseHVkbUZ5SUhCeWIyTmxjM01nUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0OU8xeHVYRzR2THlCallXTm9aV1FnWm5KdmJTQjNhR0YwWlhabGNpQm5iRzlpWVd3Z2FYTWdjSEpsYzJWdWRDQnpieUIwYUdGMElIUmxjM1FnY25WdWJtVnljeUIwYUdGMElITjBkV0lnYVhSY2JpOHZJR1J2YmlkMElHSnlaV0ZySUhSb2FXNW5jeTRnSUVKMWRDQjNaU0J1WldWa0lIUnZJSGR5WVhBZ2FYUWdhVzRnWVNCMGNua2dZMkYwWTJnZ2FXNGdZMkZ6WlNCcGRDQnBjMXh1THk4Z2QzSmhjSEJsWkNCcGJpQnpkSEpwWTNRZ2JXOWtaU0JqYjJSbElIZG9hV05vSUdSdlpYTnVKM1FnWkdWbWFXNWxJR0Z1ZVNCbmJHOWlZV3h6TGlBZ1NYUW5jeUJwYm5OcFpHVWdZVnh1THk4Z1puVnVZM1JwYjI0Z1ltVmpZWFZ6WlNCMGNua3ZZMkYwWTJobGN5QmtaVzl3ZEdsdGFYcGxJR2x1SUdObGNuUmhhVzRnWlc1bmFXNWxjeTVjYmx4dWRtRnlJR05oWTJobFpGTmxkRlJwYldWdmRYUTdYRzUyWVhJZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWME8xeHVYRzVtZFc1amRHbHZiaUJrWldaaGRXeDBVMlYwVkdsdGIzVjBLQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jMlYwVkdsdFpXOTFkQ0JvWVhNZ2JtOTBJR0psWlc0Z1pHVm1hVzVsWkNjcE8xeHVmVnh1Wm5WdVkzUnBiMjRnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENBb0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkamJHVmhjbFJwYldWdmRYUWdhR0Z6SUc1dmRDQmlaV1Z1SUdSbFptbHVaV1FuS1R0Y2JuMWNiaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ6WlhSVWFXMWxiM1YwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFUyVjBWR2x0YjNWME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkRHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamJHVmhjbFJwYldWdmRYUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdmVnh1ZlNBb0tTbGNibVoxYm1OMGFXOXVJSEoxYmxScGJXVnZkWFFvWm5WdUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpGTmxkRlJwYldWdmRYUWdQVDA5SUhObGRGUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdMeTl1YjNKdFlXd2daVzUyYVhKdmJXVnVkSE1nYVc0Z2MyRnVaU0J6YVhSMVlYUnBiMjV6WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUhObGRGUnBiV1Z2ZFhRZ2QyRnpiaWQwSUdGMllXbHNZV0pzWlNCaWRYUWdkMkZ6SUd4aGRIUmxjaUJrWldacGJtVmtYRzRnSUNBZ2FXWWdLQ2hqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDA5UFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwSUh4OElDRmpZV05vWldSVFpYUlVhVzFsYjNWMEtTQW1KaUJ6WlhSVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQnpaWFJVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0F2THlCM2FHVnVJSGRvWlc0Z2MyOXRaV0p2WkhrZ2FHRnpJSE5qY21WM1pXUWdkMmwwYUNCelpYUlVhVzFsYjNWMElHSjFkQ0J1YnlCSkxrVXVJRzFoWkdSdVpYTnpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2QyVWdZWEpsSUdsdUlFa3VSUzRnWW5WMElIUm9aU0J6WTNKcGNIUWdhR0Z6SUdKbFpXNGdaWFpoYkdWa0lITnZJRWt1UlM0Z1pHOWxjMjRuZENCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRdVkyRnNiQ2h1ZFd4c0xDQm1kVzRzSURBcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2dablZ1TENBd0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1OVhHNW1kVzVqZEdsdmJpQnlkVzVEYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWTJ4bFlYSlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJQzh2Ym05eWJXRnNJR1Z1ZG1seWIyMWxiblJ6SUdsdUlITmhibVVnYzJsMGRXRjBhVzl1YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlHTnNaV0Z5VkdsdFpXOTFkQ0IzWVhOdUozUWdZWFpoYVd4aFlteGxJR0oxZENCM1lYTWdiR0YwZEdWeUlHUmxabWx1WldSY2JpQWdJQ0JwWmlBb0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENCOGZDQWhZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBLU0FtSmlCamJHVmhjbFJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1kyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUM4dklIZG9aVzRnZDJobGJpQnpiMjFsWW05a2VTQm9ZWE1nYzJOeVpYZGxaQ0IzYVhSb0lITmxkRlJwYldWdmRYUWdZblYwSUc1dklFa3VSUzRnYldGa1pHNWxjM05jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1YyaGxiaUIzWlNCaGNtVWdhVzRnU1M1RkxpQmlkWFFnZEdobElITmpjbWx3ZENCb1lYTWdZbVZsYmlCbGRtRnNaV1FnYzI4Z1NTNUZMaUJrYjJWemJpZDBJQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZEM1allXeHNLRzUxYkd3c0lHMWhjbXRsY2lrN1hHNGdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNJdVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVGIyMWxJSFpsY25OcGIyNXpJRzltSUVrdVJTNGdhR0YyWlNCa2FXWm1aWEpsYm5RZ2NuVnNaWE1nWm05eUlHTnNaV0Z5VkdsdFpXOTFkQ0IyY3lCelpYUlVhVzFsYjNWMFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnYldGeWEyVnlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNWNibjFjYm5aaGNpQnhkV1YxWlNBOUlGdGRPMXh1ZG1GeUlHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNTJZWElnWTNWeWNtVnVkRkYxWlhWbE8xeHVkbUZ5SUhGMVpYVmxTVzVrWlhnZ1BTQXRNVHRjYmx4dVpuVnVZM1JwYjI0Z1kyeGxZVzVWY0U1bGVIUlVhV05yS0NrZ2UxeHVJQ0FnSUdsbUlDZ2haSEpoYVc1cGJtY2dmSHdnSVdOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmpkWEp5Wlc1MFVYVmxkV1V1WTI5dVkyRjBLSEYxWlhWbEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdaSEpoYVc1UmRXVjFaU2dwTzF4dUlDQWdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdaSEpoYVc1UmRXVjFaU2dwSUh0Y2JpQWdJQ0JwWmlBb1pISmhhVzVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2RHbHRaVzkxZENBOUlISjFibFJwYldWdmRYUW9ZMnhsWVc1VmNFNWxlSFJVYVdOcktUdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlIUnlkV1U3WEc1Y2JpQWdJQ0IyWVhJZ2JHVnVJRDBnY1hWbGRXVXViR1Z1WjNSb08xeHVJQ0FnSUhkb2FXeGxLR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVYVmxkV1VnUFNCeGRXVjFaVHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0NzcmNYVmxkV1ZKYm1SbGVDQThJR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJSZFdWMVpWdHhkV1YxWlVsdVpHVjRYUzV5ZFc0b0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnSUNBZ0lHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnSUNCOVhHNGdJQ0FnWTNWeWNtVnVkRkYxWlhWbElEMGdiblZzYkR0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNBZ0lISjFia05zWldGeVZHbHRaVzkxZENoMGFXMWxiM1YwS1R0Y2JuMWNibHh1Y0hKdlkyVnpjeTV1WlhoMFZHbGpheUE5SUdaMWJtTjBhVzl1SUNobWRXNHBJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXhLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjbWR6VzJrZ0xTQXhYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeGRXVjFaUzV3ZFhOb0tHNWxkeUJKZEdWdEtHWjFiaXdnWVhKbmN5a3BPMXh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdnZ1BUMDlJREVnSmlZZ0lXUnlZV2x1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSEoxYmxScGJXVnZkWFFvWkhKaGFXNVJkV1YxWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THk4Z2RqZ2diR2xyWlhNZ2NISmxaR2xqZEdsaWJHVWdiMkpxWldOMGMxeHVablZ1WTNScGIyNGdTWFJsYlNobWRXNHNJR0Z5Y21GNUtTQjdYRzRnSUNBZ2RHaHBjeTVtZFc0Z1BTQm1kVzQ3WEc0Z0lDQWdkR2hwY3k1aGNuSmhlU0E5SUdGeWNtRjVPMXh1ZlZ4dVNYUmxiUzV3Y205MGIzUjVjR1V1Y25WdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVpuVnVMbUZ3Y0d4NUtHNTFiR3dzSUhSb2FYTXVZWEp5WVhrcE8xeHVmVHRjYm5CeWIyTmxjM011ZEdsMGJHVWdQU0FuWW5KdmQzTmxjaWM3WEc1d2NtOWpaWE56TG1KeWIzZHpaWElnUFNCMGNuVmxPMXh1Y0hKdlkyVnpjeTVsYm5ZZ1BTQjdmVHRjYm5CeWIyTmxjM011WVhKbmRpQTlJRnRkTzF4dWNISnZZMlZ6Y3k1MlpYSnphVzl1SUQwZ0p5YzdJQzh2SUdWdGNIUjVJSE4wY21sdVp5QjBieUJoZG05cFpDQnlaV2RsZUhBZ2FYTnpkV1Z6WEc1d2NtOWpaWE56TG5abGNuTnBiMjV6SUQwZ2UzMDdYRzVjYm1aMWJtTjBhVzl1SUc1dmIzQW9LU0I3ZlZ4dVhHNXdjbTlqWlhOekxtOXVJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVZV1JrVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV2Ym1ObElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWIyWm1JRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjbVZ0YjNabFRHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1eVpXMXZkbVZCYkd4TWFYTjBaVzVsY25NZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1bGJXbDBJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkU5dVkyVk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNWNibkJ5YjJObGMzTXViR2x6ZEdWdVpYSnpJRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHNnY21WMGRYSnVJRnRkSUgxY2JseHVjSEp2WTJWemN5NWlhVzVrYVc1bklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WW1sdVpHbHVaeUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtKeWs3WEc1OU8xeHVYRzV3Y205alpYTnpMbU4zWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2N2SnlCOU8xeHVjSEp2WTJWemN5NWphR1JwY2lBOUlHWjFibU4wYVc5dUlDaGthWElwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZMmhrYVhJZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYm5CeWIyTmxjM011ZFcxaGMyc2dQU0JtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SURBN0lIMDdYRzVjYmx4dVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNYRzR2THlBdUwzNHZjSEp2WTJWemN5OWljbTkzYzJWeUxtcHpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQXdYRzR2THlCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUNJc0ltbHRjRzl5ZENCN0lIZHBiak15SUdGeklIZHBiak15UW1GelpTd2djRzl6YVhnZ1lYTWdjRzl6YVhoQ1lYTmxJSDBnWm5KdmJTQW5jR0YwYUM5d1lYUm9KenRjYm1sdGNHOXlkQ0I3SUdselYybHVMQ0JwYzBKeWIzZHpaWElnZlNCbWNtOXRJQ2N1TDNCc1lYUm1iM0p0Snp0Y2JtbHRjRzl5ZENCN0lHNXZiM0FnZlNCbWNtOXRJQ2N1TDI1dmIzQW5PMXh1WEc1amIyNXpkQ0IxYm5OMWNIQnZjblJsWkUxbGRHaHZaSE1nUFNCN1hHNGdJSEpsYzI5c2RtVTZJRzV2YjNBc1hHNGdJSEpsYkdGMGFYWmxPaUJ1YjI5d0xGeHVmVHRjYmx4dVkyOXVjM1FnZDJsdU16SlNkVzUwYVcxbElEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkMmx1TXpKQ1lYTmxMQ0IxYm5OMWNIQnZjblJsWkUxbGRHaHZaSE1wTzF4dVkyOXVjM1FnY0c5emFYaFNkVzUwYVcxbElEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2djRzl6YVhoQ1lYTmxMQ0IxYm5OMWNIQnZjblJsWkUxbGRHaHZaSE1wTzF4dVhHNXNaWFFnWkdWbVlYVnNkRVY0Y0c5eWRDQTlJSHQzYVc0ek1qb2dkMmx1TXpKU2RXNTBhVzFsTENCd2IzTnBlRG9nY0c5emFYaFNkVzUwYVcxbGZUdGNibWxtSUNocGMxZHBiaWdwS1NCN1hHNGdJR1JsWm1GMWJIUkZlSEJ2Y25RZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQmtaV1poZFd4MFJYaHdiM0owTENCM2FXNHpNbEoxYm5ScGJXVXBPMXh1ZlNCbGJITmxJSHRjYmlBZ1pHVm1ZWFZzZEVWNGNHOXlkQ0E5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUdSbFptRjFiSFJGZUhCdmNuUXNJSEJ2YzJsNFVuVnVkR2x0WlNrN1hHNTlYRzVjYm14bGRDQnViM0p0WVd4cGVtVlNkVzUwYVcxbE8xeHViR1YwSUdwdmFXNVNkVzUwYVcxbE8xeHViR1YwSUhKbGMyOXNkbVZTZFc1MGFXMWxPMXh1YkdWMElHbHpRV0p6YjJ4MWRHVlNkVzUwYVcxbE8xeHViR1YwSUhKbGJHRjBhWFpsVW5WdWRHbHRaVHRjYm14bGRDQmthWEp1WVcxbFVuVnVkR2x0WlR0Y2JteGxkQ0JpWVhObGJtRnRaVkoxYm5ScGJXVTdYRzVzWlhRZ1pYaDBibUZ0WlZKMWJuUnBiV1U3WEc1c1pYUWdjMlZ3VW5WdWRHbHRaVHRjYm14bGRDQmtaV3hwYldsMFpYSlNkVzUwYVcxbE8xeHViR1YwSUhCaGNuTmxVblZ1ZEdsdFpUdGNibXhsZENCbWIzSnRZWFJTZFc1MGFXMWxPMXh1WEc1cFppQW9hWE5YYVc0b0tTa2dlMXh1SUNCdWIzSnRZV3hwZW1WU2RXNTBhVzFsSUQwZ2QybHVNekpTZFc1MGFXMWxMbTV2Y20xaGJHbDZaVHRjYmlBZ2FtOXBibEoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdWFtOXBianRjYmlBZ2NtVnpiMngyWlZKMWJuUnBiV1VnUFNCM2FXNHpNbEoxYm5ScGJXVXVjbVZ6YjJ4MlpUdGNiaUFnYVhOQlluTnZiSFYwWlZKMWJuUnBiV1VnUFNCM2FXNHpNbEoxYm5ScGJXVXVhWE5CWW5OdmJIVjBaVHRjYmlBZ2NtVnNZWFJwZG1WU2RXNTBhVzFsSUQwZ2QybHVNekpTZFc1MGFXMWxMbkpsYkdGMGFYWmxPMXh1SUNCa2FYSnVZVzFsVW5WdWRHbHRaU0E5SUhkcGJqTXlVblZ1ZEdsdFpTNWthWEp1WVcxbE8xeHVJQ0JpWVhObGJtRnRaVkoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdVltRnpaVzVoYldVN1hHNGdJR1Y0ZEc1aGJXVlNkVzUwYVcxbElEMGdkMmx1TXpKU2RXNTBhVzFsTG1WNGRHNWhiV1U3WEc0Z0lITmxjRkoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdWMyVndPMXh1SUNCa1pXeHBiV2wwWlhKU2RXNTBhVzFsSUQwZ2QybHVNekpTZFc1MGFXMWxMbVJsYkdsdGFYUmxjanRjYmlBZ2NHRnljMlZTZFc1MGFXMWxJRDBnZDJsdU16SlNkVzUwYVcxbExuQmhjbk5sTzF4dUlDQm1iM0p0WVhSU2RXNTBhVzFsSUQwZ2QybHVNekpTZFc1MGFXMWxMbVp2Y20xaGREdGNibjBnWld4elpTQjdYRzRnSUc1dmNtMWhiR2w2WlZKMWJuUnBiV1VnUFNCd2IzTnBlRkoxYm5ScGJXVXVibTl5YldGc2FYcGxPMXh1SUNCcWIybHVVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1cWIybHVPMXh1SUNCeVpYTnZiSFpsVW5WdWRHbHRaU0E5SUhCdmMybDRVblZ1ZEdsdFpTNXlaWE52YkhabE8xeHVJQ0JwYzBGaWMyOXNkWFJsVW5WdWRHbHRaU0E5SUhCdmMybDRVblZ1ZEdsdFpTNXBjMEZpYzI5c2RYUmxPMXh1SUNCeVpXeGhkR2wyWlZKMWJuUnBiV1VnUFNCd2IzTnBlRkoxYm5ScGJXVXVjbVZzWVhScGRtVTdYRzRnSUdScGNtNWhiV1ZTZFc1MGFXMWxJRDBnY0c5emFYaFNkVzUwYVcxbExtUnBjbTVoYldVN1hHNGdJR0poYzJWdVlXMWxVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1aVlYTmxibUZ0WlR0Y2JpQWdaWGgwYm1GdFpWSjFiblJwYldVZ1BTQndiM05wZUZKMWJuUnBiV1V1WlhoMGJtRnRaVHRjYmlBZ2MyVndVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1elpYQTdYRzRnSUdSbGJHbHRhWFJsY2xKMWJuUnBiV1VnUFNCd2IzTnBlRkoxYm5ScGJXVXVaR1ZzYVcxcGRHVnlPMXh1SUNCd1lYSnpaVkoxYm5ScGJXVWdQU0J3YjNOcGVGSjFiblJwYldVdWNHRnljMlU3WEc0Z0lHWnZjbTFoZEZKMWJuUnBiV1VnUFNCd2IzTnBlRkoxYm5ScGJXVXVabTl5YldGME8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JrWldaaGRXeDBSWGh3YjNKME8xeHVaWGh3YjNKMElIdGNiaUFnYm05eWJXRnNhWHBsVW5WdWRHbHRaU0JoY3lCdWIzSnRZV3hwZW1Vc1hHNGdJR3B2YVc1U2RXNTBhVzFsSUdGeklHcHZhVzRzWEc0Z0lISmxjMjlzZG1WU2RXNTBhVzFsSUdGeklISmxjMjlzZG1Vc1hHNGdJR2x6UVdKemIyeDFkR1ZTZFc1MGFXMWxJR0Z6SUdselFXSnpiMngxZEdVc1hHNGdJSEpsYkdGMGFYWmxVblZ1ZEdsdFpTQmhjeUJ5Wld4aGRHbDJaU3hjYmlBZ1pHbHlibUZ0WlZKMWJuUnBiV1VnWVhNZ1pHbHlibUZ0WlN4Y2JpQWdZbUZ6Wlc1aGJXVlNkVzUwYVcxbElHRnpJR0poYzJWdVlXMWxMRnh1SUNCbGVIUnVZVzFsVW5WdWRHbHRaU0JoY3lCbGVIUnVZVzFsTEZ4dUlDQnpaWEJTZFc1MGFXMWxJR0Z6SUhObGNDeGNiaUFnWkdWc2FXMXBkR1Z5VW5WdWRHbHRaU0JoY3lCa1pXeHBiV2wwWlhJc1hHNGdJSEJoY25ObFVuVnVkR2x0WlNCaGN5QndZWEp6WlN4Y2JpQWdabTl5YldGMFVuVnVkR2x0WlNCaGN5Qm1iM0p0WVhRc1hHNGdJSEJ2YzJsNFVuVnVkR2x0WlNCaGN5QndiM05wZUN4Y2JpQWdkMmx1TXpKU2RXNTBhVzFsSUdGeklIZHBiak15TEZ4dWZUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTl3WVhSb0xtSnliM2R6WlhJdWRITWlMQ0pwWmlBb2RIbHdaVzltSUU5aWFtVmpkQzVqY21WaGRHVWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnTHk4Z2FXMXdiR1Z0Wlc1MFlYUnBiMjRnWm5KdmJTQnpkR0Z1WkdGeVpDQnViMlJsTG1weklDZDFkR2xzSnlCdGIyUjFiR1ZjYmlBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCcGJtaGxjbWwwY3loamRHOXlMQ0J6ZFhCbGNrTjBiM0lwSUh0Y2JpQWdJQ0JqZEc5eUxuTjFjR1Z5WHlBOUlITjFjR1Z5UTNSdmNseHVJQ0FnSUdOMGIzSXVjSEp2ZEc5MGVYQmxJRDBnVDJKcVpXTjBMbU55WldGMFpTaHpkWEJsY2tOMGIzSXVjSEp2ZEc5MGVYQmxMQ0I3WEc0Z0lDQWdJQ0JqYjI1emRISjFZM1J2Y2pvZ2UxeHVJQ0FnSUNBZ0lDQjJZV3gxWlRvZ1kzUnZjaXhjYmlBZ0lDQWdJQ0FnWlc1MWJXVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUhkeWFYUmhZbXhsT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0JqYjI1bWFXZDFjbUZpYkdVNklIUnlkV1ZjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVHRjYmlBZ2ZUdGNibjBnWld4elpTQjdYRzRnSUM4dklHOXNaQ0J6WTJodmIyd2djMmhwYlNCbWIzSWdiMnhrSUdKeWIzZHpaWEp6WEc0Z0lHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2FXNW9aWEpwZEhNb1kzUnZjaXdnYzNWd1pYSkRkRzl5S1NCN1hHNGdJQ0FnWTNSdmNpNXpkWEJsY2w4Z1BTQnpkWEJsY2tOMGIzSmNiaUFnSUNCMllYSWdWR1Z0Y0VOMGIzSWdQU0JtZFc1amRHbHZiaUFvS1NCN2ZWeHVJQ0FnSUZSbGJYQkRkRzl5TG5CeWIzUnZkSGx3WlNBOUlITjFjR1Z5UTNSdmNpNXdjbTkwYjNSNWNHVmNiaUFnSUNCamRHOXlMbkJ5YjNSdmRIbHdaU0E5SUc1bGR5QlVaVzF3UTNSdmNpZ3BYRzRnSUNBZ1kzUnZjaTV3Y205MGIzUjVjR1V1WTI5dWMzUnlkV04wYjNJZ1BTQmpkRzl5WEc0Z0lIMWNibjFjYmx4dVhHNWNiaTh2THk4dkx5OHZMeTh2THk4dkx5OHZMMXh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVkpjYmk4dklDNHZmaTlwYm1obGNtbDBjeTlwYm1obGNtbDBjMTlpY205M2MyVnlMbXB6WEc0dkx5QnRiMlIxYkdVZ2FXUWdQU0F5WEc0dkx5QnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01DSXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdhWE5DZFdabVpYSW9ZWEpuS1NCN1hHNGdJSEpsZEhWeWJpQmhjbWNnSmlZZ2RIbHdaVzltSUdGeVp5QTlQVDBnSjI5aWFtVmpkQ2RjYmlBZ0lDQW1KaUIwZVhCbGIyWWdZWEpuTG1OdmNIa2dQVDA5SUNkbWRXNWpkR2x2YmlkY2JpQWdJQ0FtSmlCMGVYQmxiMllnWVhKbkxtWnBiR3dnUFQwOUlDZG1kVzVqZEdsdmJpZGNiaUFnSUNBbUppQjBlWEJsYjJZZ1lYSm5MbkpsWVdSVlNXNTBPQ0E5UFQwZ0oyWjFibU4wYVc5dUp6dGNibjFjYmx4dVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNYRzR2THlBdUwzNHZibTlrWlMxc2FXSnpMV0p5YjNkelpYSXZmaTkxZEdsc0wzTjFjSEJ2Y25RdmFYTkNkV1ptWlhKQ2NtOTNjMlZ5TG1welhHNHZMeUJ0YjJSMWJHVWdhV1FnUFNBelhHNHZMeUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNQ0lzSWk4dklFTnZjSGx5YVdkb2RDQktiM2xsYm5Rc0lFbHVZeTRnWVc1a0lHOTBhR1Z5SUU1dlpHVWdZMjl1ZEhKcFluVjBiM0p6TGx4dUx5OWNiaTh2SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoWEc0dkx5QmpiM0I1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaRzlqZFcxbGJuUmhkR2x2YmlCbWFXeGxjeUFvZEdobFhHNHZMeUJjSWxOdlpuUjNZWEpsWENJcExDQjBieUJrWldGc0lHbHVJSFJvWlNCVGIyWjBkMkZ5WlNCM2FYUm9iM1YwSUhKbGMzUnlhV04wYVc5dUxDQnBibU5zZFdScGJtZGNiaTh2SUhkcGRHaHZkWFFnYkdsdGFYUmhkR2x2YmlCMGFHVWdjbWxuYUhSeklIUnZJSFZ6WlN3Z1kyOXdlU3dnYlc5a2FXWjVMQ0J0WlhKblpTd2djSFZpYkdsemFDeGNiaTh2SUdScGMzUnlhV0oxZEdVc0lITjFZbXhwWTJWdWMyVXNJR0Z1WkM5dmNpQnpaV3hzSUdOdmNHbGxjeUJ2WmlCMGFHVWdVMjltZEhkaGNtVXNJR0Z1WkNCMGJ5QndaWEp0YVhSY2JpOHZJSEJsY25OdmJuTWdkRzhnZDJodmJTQjBhR1VnVTI5bWRIZGhjbVVnYVhNZ1puVnlibWx6YUdWa0lIUnZJR1J2SUhOdkxDQnpkV0pxWldOMElIUnZJSFJvWlZ4dUx5OGdabTlzYkc5M2FXNW5JR052Ym1ScGRHbHZibk02WEc0dkwxeHVMeThnVkdobElHRmliM1psSUdOdmNIbHlhV2RvZENCdWIzUnBZMlVnWVc1a0lIUm9hWE1nY0dWeWJXbHpjMmx2YmlCdWIzUnBZMlVnYzJoaGJHd2dZbVVnYVc1amJIVmtaV1JjYmk4dklHbHVJR0ZzYkNCamIzQnBaWE1nYjNJZ2MzVmljM1JoYm5ScFlXd2djRzl5ZEdsdmJuTWdiMllnZEdobElGTnZablIzWVhKbExseHVMeTljYmk4dklGUklSU0JUVDBaVVYwRlNSU0JKVXlCUVVrOVdTVVJGUkNCY0lrRlRJRWxUWENJc0lGZEpWRWhQVlZRZ1YwRlNVa0ZPVkZrZ1QwWWdRVTVaSUV0SlRrUXNJRVZZVUZKRlUxTmNiaTh2SUU5U0lFbE5VRXhKUlVRc0lFbE9RMHhWUkVsT1J5QkNWVlFnVGs5VUlFeEpUVWxVUlVRZ1ZFOGdWRWhGSUZkQlVsSkJUbFJKUlZNZ1QwWmNiaTh2SUUxRlVrTklRVTVVUVVKSlRFbFVXU3dnUmtsVVRrVlRVeUJHVDFJZ1FTQlFRVkpVU1VOVlRFRlNJRkJWVWxCUFUwVWdRVTVFSUU1UFRrbE9SbEpKVGtkRlRVVk9WQzRnU1U1Y2JpOHZJRTVQSUVWV1JVNVVJRk5JUVV4TUlGUklSU0JCVlZSSVQxSlRJRTlTSUVOUFVGbFNTVWRJVkNCSVQweEVSVkpUSUVKRklFeEpRVUpNUlNCR1QxSWdRVTVaSUVOTVFVbE5MRnh1THk4Z1JFRk5RVWRGVXlCUFVpQlBWRWhGVWlCTVNVRkNTVXhKVkZrc0lGZElSVlJJUlZJZ1NVNGdRVTRnUVVOVVNVOU9JRTlHSUVOUFRsUlNRVU5VTENCVVQxSlVJRTlTWEc0dkx5QlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN3Z1QxVlVJRTlHSUU5U0lFbE9JRU5QVGs1RlExUkpUMDRnVjBsVVNDQlVTRVVnVTA5R1ZGZEJVa1VnVDFJZ1ZFaEZYRzR2THlCVlUwVWdUMUlnVDFSSVJWSWdSRVZCVEVsT1IxTWdTVTRnVkVoRklGTlBSbFJYUVZKRkxseHVYRzUyWVhJZ1oyVjBUM2R1VUhKdmNHVnlkSGxFWlhOamNtbHdkRzl5Y3lBOUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVVJsYzJOeWFYQjBiM0p6SUh4OFhHNGdJR1oxYm1OMGFXOXVJR2RsZEU5M2JsQnliM0JsY25SNVJHVnpZM0pwY0hSdmNuTW9iMkpxS1NCN1hHNGdJQ0FnZG1GeUlHdGxlWE1nUFNCUFltcGxZM1F1YTJWNWN5aHZZbW9wTzF4dUlDQWdJSFpoY2lCa1pYTmpjbWx3ZEc5eWN5QTlJSHQ5TzF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYTJWNWN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnWkdWelkzSnBjSFJ2Y25OYmEyVjVjMXRwWFYwZ1BTQlBZbXBsWTNRdVoyVjBUM2R1VUhKdmNHVnlkSGxFWlhOamNtbHdkRzl5S0c5aWFpd2dhMlY1YzF0cFhTazdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJrWlhOamNtbHdkRzl5Y3p0Y2JpQWdmVHRjYmx4dWRtRnlJR1p2Y20xaGRGSmxaMFY0Y0NBOUlDOGxXM05rYWlWZEwyYzdYRzVsZUhCdmNuUnpMbVp2Y20xaGRDQTlJR1oxYm1OMGFXOXVLR1lwSUh0Y2JpQWdhV1lnS0NGcGMxTjBjbWx1WnlobUtTa2dlMXh1SUNBZ0lIWmhjaUJ2WW1wbFkzUnpJRDBnVzEwN1hHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJRzlpYW1WamRITXVjSFZ6YUNocGJuTndaV04wS0dGeVozVnRaVzUwYzF0cFhTa3BPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnYjJKcVpXTjBjeTVxYjJsdUtDY2dKeWs3WEc0Z0lIMWNibHh1SUNCMllYSWdhU0E5SURFN1hHNGdJSFpoY2lCaGNtZHpJRDBnWVhKbmRXMWxiblJ6TzF4dUlDQjJZWElnYkdWdUlEMGdZWEpuY3k1c1pXNW5kR2c3WEc0Z0lIWmhjaUJ6ZEhJZ1BTQlRkSEpwYm1jb1ppa3VjbVZ3YkdGalpTaG1iM0p0WVhSU1pXZEZlSEFzSUdaMWJtTjBhVzl1S0hncElIdGNiaUFnSUNCcFppQW9lQ0E5UFQwZ0p5VWxKeWtnY21WMGRYSnVJQ2NsSnp0Y2JpQWdJQ0JwWmlBb2FTQStQU0JzWlc0cElISmxkSFZ5YmlCNE8xeHVJQ0FnSUhOM2FYUmphQ0FvZUNrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuSlhNbk9pQnlaWFIxY200Z1UzUnlhVzVuS0dGeVozTmJhU3NyWFNrN1hHNGdJQ0FnSUNCallYTmxJQ2NsWkNjNklISmxkSFZ5YmlCT2RXMWlaWElvWVhKbmMxdHBLeXRkS1R0Y2JpQWdJQ0FnSUdOaGMyVWdKeVZxSnpwY2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnU2xOUFRpNXpkSEpwYm1kcFpua29ZWEpuYzF0cEt5dGRLVHRjYmlBZ0lDQWdJQ0FnZlNCallYUmphQ0FvWHlrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQW5XME5wY21OMWJHRnlYU2M3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI0TzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzRnSUdadmNpQW9kbUZ5SUhnZ1BTQmhjbWR6VzJsZE95QnBJRHdnYkdWdU95QjRJRDBnWVhKbmMxc3JLMmxkS1NCN1hHNGdJQ0FnYVdZZ0tHbHpUblZzYkNoNEtTQjhmQ0FoYVhOUFltcGxZM1FvZUNrcElIdGNiaUFnSUNBZ0lITjBjaUFyUFNBbklDY2dLeUI0TzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnpkSElnS3owZ0p5QW5JQ3NnYVc1emNHVmpkQ2g0S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJSE4wY2p0Y2JuMDdYRzVjYmx4dUx5OGdUV0Z5YXlCMGFHRjBJR0VnYldWMGFHOWtJSE5vYjNWc1pDQnViM1FnWW1VZ2RYTmxaQzVjYmk4dklGSmxkSFZ5Ym5NZ1lTQnRiMlJwWm1sbFpDQm1kVzVqZEdsdmJpQjNhR2xqYUNCM1lYSnVjeUJ2Ym1ObElHSjVJR1JsWm1GMWJIUXVYRzR2THlCSlppQXRMVzV2TFdSbGNISmxZMkYwYVc5dUlHbHpJSE5sZEN3Z2RHaGxiaUJwZENCcGN5QmhJRzV2TFc5d0xseHVaWGh3YjNKMGN5NWtaWEJ5WldOaGRHVWdQU0JtZFc1amRHbHZiaWhtYml3Z2JYTm5LU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdjSEp2WTJWemN5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjSEp2WTJWemN5NXViMFJsY0hKbFkyRjBhVzl1SUQwOVBTQjBjblZsS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1p1TzF4dUlDQjlYRzVjYmlBZ0x5OGdRV3hzYjNjZ1ptOXlJR1JsY0hKbFkyRjBhVzVuSUhSb2FXNW5jeUJwYmlCMGFHVWdjSEp2WTJWemN5QnZaaUJ6ZEdGeWRHbHVaeUIxY0M1Y2JpQWdhV1lnS0hSNWNHVnZaaUJ3Y205alpYTnpJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbGVIQnZjblJ6TG1SbGNISmxZMkYwWlNobWJpd2diWE5uS1M1aGNIQnNlU2gwYUdsekxDQmhjbWQxYldWdWRITXBPMXh1SUNBZ0lIMDdYRzRnSUgxY2JseHVJQ0IyWVhJZ2QyRnlibVZrSUQwZ1ptRnNjMlU3WEc0Z0lHWjFibU4wYVc5dUlHUmxjSEpsWTJGMFpXUW9LU0I3WEc0Z0lDQWdhV1lnS0NGM1lYSnVaV1FwSUh0Y2JpQWdJQ0FnSUdsbUlDaHdjbTlqWlhOekxuUm9jbTkzUkdWd2NtVmpZWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtHMXpaeWs3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hCeWIyTmxjM011ZEhKaFkyVkVaWEJ5WldOaGRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG5SeVlXTmxLRzF6WnlrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLRzF6WnlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCM1lYSnVaV1FnUFNCMGNuVmxPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWm00dVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJrWlhCeVpXTmhkR1ZrTzF4dWZUdGNibHh1WEc1MllYSWdaR1ZpZFdkeklEMGdlMzA3WEc1MllYSWdaR1ZpZFdkRmJuWnBjbTl1TzF4dVpYaHdiM0owY3k1a1pXSjFaMnh2WnlBOUlHWjFibU4wYVc5dUtITmxkQ2tnZTF4dUlDQnBaaUFvYVhOVmJtUmxabWx1WldRb1pHVmlkV2RGYm5acGNtOXVLU2xjYmlBZ0lDQmtaV0oxWjBWdWRtbHliMjRnUFNCd2NtOWpaWE56TG1WdWRpNU9UMFJGWDBSRlFsVkhJSHg4SUNjbk8xeHVJQ0J6WlhRZ1BTQnpaWFF1ZEc5VmNIQmxja05oYzJVb0tUdGNiaUFnYVdZZ0tDRmtaV0oxWjNOYmMyVjBYU2tnZTF4dUlDQWdJR2xtSUNodVpYY2dVbVZuUlhod0tDZGNYRnhjWWljZ0t5QnpaWFFnS3lBblhGeGNYR0luTENBbmFTY3BMblJsYzNRb1pHVmlkV2RGYm5acGNtOXVLU2tnZTF4dUlDQWdJQ0FnZG1GeUlIQnBaQ0E5SUhCeWIyTmxjM011Y0dsa08xeHVJQ0FnSUNBZ1pHVmlkV2R6VzNObGRGMGdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRzF6WnlBOUlHVjRjRzl5ZEhNdVptOXliV0YwTG1Gd2NHeDVLR1Y0Y0c5eWRITXNJR0Z5WjNWdFpXNTBjeWs3WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9KeVZ6SUNWa09pQWxjeWNzSUhObGRDd2djR2xrTENCdGMyY3BPMXh1SUNBZ0lDQWdmVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1pHVmlkV2R6VzNObGRGMGdQU0JtZFc1amRHbHZiaWdwSUh0OU8xeHVJQ0FnSUgxY2JpQWdmVnh1SUNCeVpYUjFjbTRnWkdWaWRXZHpXM05sZEYwN1hHNTlPMXh1WEc1Y2JpOHFLbHh1SUNvZ1JXTm9iM01nZEdobElIWmhiSFZsSUc5bUlHRWdkbUZzZFdVdUlGUnllWE1nZEc4Z2NISnBiblFnZEdobElIWmhiSFZsSUc5MWRGeHVJQ29nYVc0Z2RHaGxJR0psYzNRZ2QyRjVJSEJ2YzNOcFlteGxJR2RwZG1WdUlIUm9aU0JrYVdabVpYSmxiblFnZEhsd1pYTXVYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHOWlhaUJVYUdVZ2IySnFaV04wSUhSdklIQnlhVzUwSUc5MWRDNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0J2Y0hSeklFOXdkR2x2Ym1Gc0lHOXdkR2x2Ym5NZ2IySnFaV04wSUhSb1lYUWdZV3gwWlhKeklIUm9aU0J2ZFhSd2RYUXVYRzRnS2k5Y2JpOHFJR3hsWjJGamVUb2diMkpxTENCemFHOTNTR2xrWkdWdUxDQmtaWEIwYUN3Z1kyOXNiM0p6S2k5Y2JtWjFibU4wYVc5dUlHbHVjM0JsWTNRb2IySnFMQ0J2Y0hSektTQjdYRzRnSUM4dklHUmxabUYxYkhRZ2IzQjBhVzl1YzF4dUlDQjJZWElnWTNSNElEMGdlMXh1SUNBZ0lITmxaVzQ2SUZ0ZExGeHVJQ0FnSUhOMGVXeHBlbVU2SUhOMGVXeHBlbVZPYjBOdmJHOXlYRzRnSUgwN1hHNGdJQzh2SUd4bFoyRmplUzR1TGx4dUlDQnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErUFNBektTQmpkSGd1WkdWd2RHZ2dQU0JoY21kMWJXVnVkSE5iTWwwN1hHNGdJR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0OUlEUXBJR04wZUM1amIyeHZjbk1nUFNCaGNtZDFiV1Z1ZEhOYk0xMDdYRzRnSUdsbUlDaHBjMEp2YjJ4bFlXNG9iM0IwY3lrcElIdGNiaUFnSUNBdkx5QnNaV2RoWTNrdUxpNWNiaUFnSUNCamRIZ3VjMmh2ZDBocFpHUmxiaUE5SUc5d2RITTdYRzRnSUgwZ1pXeHpaU0JwWmlBb2IzQjBjeWtnZTF4dUlDQWdJQzh2SUdkdmRDQmhiaUJjSW05d2RHbHZibk5jSWlCdlltcGxZM1JjYmlBZ0lDQmxlSEJ2Y25SekxsOWxlSFJsYm1Rb1kzUjRMQ0J2Y0hSektUdGNiaUFnZlZ4dUlDQXZMeUJ6WlhRZ1pHVm1ZWFZzZENCdmNIUnBiMjV6WEc0Z0lHbG1JQ2hwYzFWdVpHVm1hVzVsWkNoamRIZ3VjMmh2ZDBocFpHUmxiaWtwSUdOMGVDNXphRzkzU0dsa1pHVnVJRDBnWm1Gc2MyVTdYRzRnSUdsbUlDaHBjMVZ1WkdWbWFXNWxaQ2hqZEhndVpHVndkR2dwS1NCamRIZ3VaR1Z3ZEdnZ1BTQXlPMXh1SUNCcFppQW9hWE5WYm1SbFptbHVaV1FvWTNSNExtTnZiRzl5Y3lrcElHTjBlQzVqYjJ4dmNuTWdQU0JtWVd4elpUdGNiaUFnYVdZZ0tHbHpWVzVrWldacGJtVmtLR04wZUM1amRYTjBiMjFKYm5Od1pXTjBLU2tnWTNSNExtTjFjM1J2YlVsdWMzQmxZM1FnUFNCMGNuVmxPMXh1SUNCcFppQW9ZM1I0TG1OdmJHOXljeWtnWTNSNExuTjBlV3hwZW1VZ1BTQnpkSGxzYVhwbFYybDBhRU52Ykc5eU8xeHVJQ0J5WlhSMWNtNGdabTl5YldGMFZtRnNkV1VvWTNSNExDQnZZbW9zSUdOMGVDNWtaWEIwYUNrN1hHNTlYRzVsZUhCdmNuUnpMbWx1YzNCbFkzUWdQU0JwYm5Od1pXTjBPMXh1WEc1Y2JpOHZJR2gwZEhBNkx5OWxiaTUzYVd0cGNHVmthV0V1YjNKbkwzZHBhMmt2UVU1VFNWOWxjMk5oY0dWZlkyOWtaU05uY21Gd2FHbGpjMXh1YVc1emNHVmpkQzVqYjJ4dmNuTWdQU0I3WEc0Z0lDZGliMnhrSnlBNklGc3hMQ0F5TWwwc1hHNGdJQ2RwZEdGc2FXTW5JRG9nV3pNc0lESXpYU3hjYmlBZ0ozVnVaR1Z5YkdsdVpTY2dPaUJiTkN3Z01qUmRMRnh1SUNBbmFXNTJaWEp6WlNjZ09pQmJOeXdnTWpkZExGeHVJQ0FuZDJocGRHVW5JRG9nV3pNM0xDQXpPVjBzWEc0Z0lDZG5jbVY1SnlBNklGczVNQ3dnTXpsZExGeHVJQ0FuWW14aFkyc25JRG9nV3pNd0xDQXpPVjBzWEc0Z0lDZGliSFZsSnlBNklGc3pOQ3dnTXpsZExGeHVJQ0FuWTNsaGJpY2dPaUJiTXpZc0lETTVYU3hjYmlBZ0oyZHlaV1Z1SnlBNklGc3pNaXdnTXpsZExGeHVJQ0FuYldGblpXNTBZU2NnT2lCYk16VXNJRE01WFN4Y2JpQWdKM0psWkNjZ09pQmJNekVzSURNNVhTeGNiaUFnSjNsbGJHeHZkeWNnT2lCYk16TXNJRE01WFZ4dWZUdGNibHh1THk4Z1JHOXVKM1FnZFhObElDZGliSFZsSnlCdWIzUWdkbWx6YVdKc1pTQnZiaUJqYldRdVpYaGxYRzVwYm5Od1pXTjBMbk4wZVd4bGN5QTlJSHRjYmlBZ0ozTndaV05wWVd3bk9pQW5ZM2xoYmljc1hHNGdJQ2R1ZFcxaVpYSW5PaUFuZVdWc2JHOTNKeXhjYmlBZ0oySnZiMnhsWVc0bk9pQW5lV1ZzYkc5M0p5eGNiaUFnSjNWdVpHVm1hVzVsWkNjNklDZG5jbVY1Snl4Y2JpQWdKMjUxYkd3bk9pQW5ZbTlzWkNjc1hHNGdJQ2R6ZEhKcGJtY25PaUFuWjNKbFpXNG5MRnh1SUNBblpHRjBaU2M2SUNkdFlXZGxiblJoSnl4Y2JpQWdMeThnWENKdVlXMWxYQ0k2SUdsdWRHVnVkR2x2Ym1Gc2JIa2dibTkwSUhOMGVXeHBibWRjYmlBZ0ozSmxaMlY0Y0NjNklDZHlaV1FuWEc1OU8xeHVYRzVjYm1aMWJtTjBhVzl1SUhOMGVXeHBlbVZYYVhSb1EyOXNiM0lvYzNSeUxDQnpkSGxzWlZSNWNHVXBJSHRjYmlBZ2RtRnlJSE4wZVd4bElEMGdhVzV6Y0dWamRDNXpkSGxzWlhOYmMzUjViR1ZVZVhCbFhUdGNibHh1SUNCcFppQW9jM1I1YkdVcElIdGNiaUFnSUNCeVpYUjFjbTRnSjF4Y2RUQXdNV0piSnlBcklHbHVjM0JsWTNRdVkyOXNiM0p6VzNOMGVXeGxYVnN3WFNBcklDZHRKeUFySUhOMGNpQXJYRzRnSUNBZ0lDQWdJQ0FnSUNkY1hIVXdNREZpV3ljZ0t5QnBibk53WldOMExtTnZiRzl5YzF0emRIbHNaVjFiTVYwZ0t5QW5iU2M3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WMGRYSnVJSE4wY2p0Y2JpQWdmVnh1ZlZ4dVhHNWNibVoxYm1OMGFXOXVJSE4wZVd4cGVtVk9iME52Ykc5eUtITjBjaXdnYzNSNWJHVlVlWEJsS1NCN1hHNGdJSEpsZEhWeWJpQnpkSEk3WEc1OVhHNWNibHh1Wm5WdVkzUnBiMjRnWVhKeVlYbFViMGhoYzJnb1lYSnlZWGtwSUh0Y2JpQWdkbUZ5SUdoaGMyZ2dQU0I3ZlR0Y2JseHVJQ0JoY25KaGVTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUtIWmhiQ3dnYVdSNEtTQjdYRzRnSUNBZ2FHRnphRnQyWVd4ZElEMGdkSEoxWlR0Y2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlHaGhjMmc3WEc1OVhHNWNibHh1Wm5WdVkzUnBiMjRnWm05eWJXRjBWbUZzZFdVb1kzUjRMQ0IyWVd4MVpTd2djbVZqZFhKelpWUnBiV1Z6S1NCN1hHNGdJQzh2SUZCeWIzWnBaR1VnWVNCb2IyOXJJR1p2Y2lCMWMyVnlMWE53WldOcFptbGxaQ0JwYm5Od1pXTjBJR1oxYm1OMGFXOXVjeTVjYmlBZ0x5OGdRMmhsWTJzZ2RHaGhkQ0IyWVd4MVpTQnBjeUJoYmlCdlltcGxZM1FnZDJsMGFDQmhiaUJwYm5Od1pXTjBJR1oxYm1OMGFXOXVJRzl1SUdsMFhHNGdJR2xtSUNoamRIZ3VZM1Z6ZEc5dFNXNXpjR1ZqZENBbUpseHVJQ0FnSUNBZ2RtRnNkV1VnSmlaY2JpQWdJQ0FnSUdselJuVnVZM1JwYjI0b2RtRnNkV1V1YVc1emNHVmpkQ2tnSmlaY2JpQWdJQ0FnSUM4dklFWnBiSFJsY2lCdmRYUWdkR2hsSUhWMGFXd2diVzlrZFd4bExDQnBkQ2R6SUdsdWMzQmxZM1FnWm5WdVkzUnBiMjRnYVhNZ2MzQmxZMmxoYkZ4dUlDQWdJQ0FnZG1Gc2RXVXVhVzV6Y0dWamRDQWhQVDBnWlhod2IzSjBjeTVwYm5Od1pXTjBJQ1ltWEc0Z0lDQWdJQ0F2THlCQmJITnZJR1pwYkhSbGNpQnZkWFFnWVc1NUlIQnliM1J2ZEhsd1pTQnZZbXBsWTNSeklIVnphVzVuSUhSb1pTQmphWEpqZFd4aGNpQmphR1ZqYXk1Y2JpQWdJQ0FnSUNFb2RtRnNkV1V1WTI5dWMzUnlkV04wYjNJZ0ppWWdkbUZzZFdVdVkyOXVjM1J5ZFdOMGIzSXVjSEp2ZEc5MGVYQmxJRDA5UFNCMllXeDFaU2twSUh0Y2JpQWdJQ0IyWVhJZ2NtVjBJRDBnZG1Gc2RXVXVhVzV6Y0dWamRDaHlaV04xY25ObFZHbHRaWE1zSUdOMGVDazdYRzRnSUNBZ2FXWWdLQ0ZwYzFOMGNtbHVaeWh5WlhRcEtTQjdYRzRnSUNBZ0lDQnlaWFFnUFNCbWIzSnRZWFJXWVd4MVpTaGpkSGdzSUhKbGRDd2djbVZqZFhKelpWUnBiV1Z6S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlISmxkRHRjYmlBZ2ZWeHVYRzRnSUM4dklGQnlhVzFwZEdsMlpTQjBlWEJsY3lCallXNXViM1FnYUdGMlpTQndjbTl3WlhKMGFXVnpYRzRnSUhaaGNpQndjbWx0YVhScGRtVWdQU0JtYjNKdFlYUlFjbWx0YVhScGRtVW9ZM1I0TENCMllXeDFaU2s3WEc0Z0lHbG1JQ2h3Y21sdGFYUnBkbVVwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjSEpwYldsMGFYWmxPMXh1SUNCOVhHNWNiaUFnTHk4Z1RHOXZheUIxY0NCMGFHVWdhMlY1Y3lCdlppQjBhR1VnYjJKcVpXTjBMbHh1SUNCMllYSWdhMlY1Y3lBOUlFOWlhbVZqZEM1clpYbHpLSFpoYkhWbEtUdGNiaUFnZG1GeUlIWnBjMmxpYkdWTFpYbHpJRDBnWVhKeVlYbFViMGhoYzJnb2EyVjVjeWs3WEc1Y2JpQWdhV1lnS0dOMGVDNXphRzkzU0dsa1pHVnVLU0I3WEc0Z0lDQWdhMlY1Y3lBOUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVTVoYldWektIWmhiSFZsS1R0Y2JpQWdmVnh1WEc0Z0lDOHZJRWxGSUdSdlpYTnVKM1FnYldGclpTQmxjbkp2Y2lCbWFXVnNaSE1nYm05dUxXVnVkVzFsY21GaWJHVmNiaUFnTHk4Z2FIUjBjRG92TDIxelpHNHViV2xqY205emIyWjBMbU52YlM5bGJpMTFjeTlzYVdKeVlYSjVMMmxsTDJSM2R6VXljMkowS0hZOWRuTXVPVFFwTG1GemNIaGNiaUFnYVdZZ0tHbHpSWEp5YjNJb2RtRnNkV1VwWEc0Z0lDQWdJQ0FtSmlBb2EyVjVjeTVwYm1SbGVFOW1LQ2R0WlhOellXZGxKeWtnUGowZ01DQjhmQ0JyWlhsekxtbHVaR1Y0VDJZb0oyUmxjMk55YVhCMGFXOXVKeWtnUGowZ01Da3BJSHRjYmlBZ0lDQnlaWFIxY200Z1ptOXliV0YwUlhKeWIzSW9kbUZzZFdVcE8xeHVJQ0I5WEc1Y2JpQWdMeThnVTI5dFpTQjBlWEJsSUc5bUlHOWlhbVZqZENCM2FYUm9iM1YwSUhCeWIzQmxjblJwWlhNZ1kyRnVJR0psSUhOb2IzSjBZM1YwZEdWa0xseHVJQ0JwWmlBb2EyVjVjeTVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNCcFppQW9hWE5HZFc1amRHbHZiaWgyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJSFpoY2lCdVlXMWxJRDBnZG1Gc2RXVXVibUZ0WlNBL0lDYzZJQ2NnS3lCMllXeDFaUzV1WVcxbElEb2dKeWM3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZM1I0TG5OMGVXeHBlbVVvSjF0R2RXNWpkR2x2YmljZ0t5QnVZVzFsSUNzZ0oxMG5MQ0FuYzNCbFkybGhiQ2NwTzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvYVhOU1pXZEZlSEFvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZM1I0TG5OMGVXeHBlbVVvVW1WblJYaHdMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaeTVqWVd4c0tIWmhiSFZsS1N3Z0ozSmxaMlY0Y0NjcE8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2FYTkVZWFJsS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR04wZUM1emRIbHNhWHBsS0VSaGRHVXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5MbU5oYkd3b2RtRnNkV1VwTENBblpHRjBaU2NwTzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvYVhORmNuSnZjaWgyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1iM0p0WVhSRmNuSnZjaWgyWVd4MVpTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdkbUZ5SUdKaGMyVWdQU0FuSnl3Z1lYSnlZWGtnUFNCbVlXeHpaU3dnWW5KaFkyVnpJRDBnV3lkN0p5d2dKMzBuWFR0Y2JseHVJQ0F2THlCTllXdGxJRUZ5Y21GNUlITmhlU0IwYUdGMElIUm9aWGtnWVhKbElFRnljbUY1WEc0Z0lHbG1JQ2hwYzBGeWNtRjVLSFpoYkhWbEtTa2dlMXh1SUNBZ0lHRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQmljbUZqWlhNZ1BTQmJKMXNuTENBblhTZGRPMXh1SUNCOVhHNWNiaUFnTHk4Z1RXRnJaU0JtZFc1amRHbHZibk1nYzJGNUlIUm9ZWFFnZEdobGVTQmhjbVVnWm5WdVkzUnBiMjV6WEc0Z0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0haaGJIVmxLU2tnZTF4dUlDQWdJSFpoY2lCdUlEMGdkbUZzZFdVdWJtRnRaU0EvSUNjNklDY2dLeUIyWVd4MVpTNXVZVzFsSURvZ0p5YzdYRzRnSUNBZ1ltRnpaU0E5SUNjZ1cwWjFibU4wYVc5dUp5QXJJRzRnS3lBblhTYzdYRzRnSUgxY2JseHVJQ0F2THlCTllXdGxJRkpsWjBWNGNITWdjMkY1SUhSb1lYUWdkR2hsZVNCaGNtVWdVbVZuUlhod2MxeHVJQ0JwWmlBb2FYTlNaV2RGZUhBb2RtRnNkV1VwS1NCN1hHNGdJQ0FnWW1GelpTQTlJQ2NnSnlBcklGSmxaMFY0Y0M1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2gyWVd4MVpTazdYRzRnSUgxY2JseHVJQ0F2THlCTllXdGxJR1JoZEdWeklIZHBkR2dnY0hKdmNHVnlkR2xsY3lCbWFYSnpkQ0J6WVhrZ2RHaGxJR1JoZEdWY2JpQWdhV1lnS0dselJHRjBaU2gyWVd4MVpTa3BJSHRjYmlBZ0lDQmlZWE5sSUQwZ0p5QW5JQ3NnUkdGMFpTNXdjbTkwYjNSNWNHVXVkRzlWVkVOVGRISnBibWN1WTJGc2JDaDJZV3gxWlNrN1hHNGdJSDFjYmx4dUlDQXZMeUJOWVd0bElHVnljbTl5SUhkcGRHZ2diV1Z6YzJGblpTQm1hWEp6ZENCellYa2dkR2hsSUdWeWNtOXlYRzRnSUdsbUlDaHBjMFZ5Y205eUtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUdKaGMyVWdQU0FuSUNjZ0t5Qm1iM0p0WVhSRmNuSnZjaWgyWVd4MVpTazdYRzRnSUgxY2JseHVJQ0JwWmlBb2EyVjVjeTVzWlc1bmRHZ2dQVDA5SURBZ0ppWWdLQ0ZoY25KaGVTQjhmQ0IyWVd4MVpTNXNaVzVuZEdnZ1BUMGdNQ2twSUh0Y2JpQWdJQ0J5WlhSMWNtNGdZbkpoWTJWeld6QmRJQ3NnWW1GelpTQXJJR0p5WVdObGMxc3hYVHRjYmlBZ2ZWeHVYRzRnSUdsbUlDaHlaV04xY25ObFZHbHRaWE1nUENBd0tTQjdYRzRnSUNBZ2FXWWdLR2x6VW1WblJYaHdLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHTjBlQzV6ZEhsc2FYcGxLRkpsWjBWNGNDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY3VZMkZzYkNoMllXeDFaU2tzSUNkeVpXZGxlSEFuS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHTjBlQzV6ZEhsc2FYcGxLQ2RiVDJKcVpXTjBYU2NzSUNkemNHVmphV0ZzSnlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1kzUjRMbk5sWlc0dWNIVnphQ2gyWVd4MVpTazdYRzVjYmlBZ2RtRnlJRzkxZEhCMWREdGNiaUFnYVdZZ0tHRnljbUY1S1NCN1hHNGdJQ0FnYjNWMGNIVjBJRDBnWm05eWJXRjBRWEp5WVhrb1kzUjRMQ0IyWVd4MVpTd2djbVZqZFhKelpWUnBiV1Z6TENCMmFYTnBZbXhsUzJWNWN5d2dhMlY1Y3lrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2IzVjBjSFYwSUQwZ2EyVjVjeTV0WVhBb1puVnVZM1JwYjI0b2EyVjVLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTl5YldGMFVISnZjR1Z5ZEhrb1kzUjRMQ0IyWVd4MVpTd2djbVZqZFhKelpWUnBiV1Z6TENCMmFYTnBZbXhsUzJWNWN5d2dhMlY1TENCaGNuSmhlU2s3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCamRIZ3VjMlZsYmk1d2IzQW9LVHRjYmx4dUlDQnlaWFIxY200Z2NtVmtkV05sVkc5VGFXNW5iR1ZUZEhKcGJtY29iM1YwY0hWMExDQmlZWE5sTENCaWNtRmpaWE1wTzF4dWZWeHVYRzVjYm1aMWJtTjBhVzl1SUdadmNtMWhkRkJ5YVcxcGRHbDJaU2hqZEhnc0lIWmhiSFZsS1NCN1hHNGdJR2xtSUNocGMxVnVaR1ZtYVc1bFpDaDJZV3gxWlNrcFhHNGdJQ0FnY21WMGRYSnVJR04wZUM1emRIbHNhWHBsS0NkMWJtUmxabWx1WldRbkxDQW5kVzVrWldacGJtVmtKeWs3WEc0Z0lHbG1JQ2hwYzFOMGNtbHVaeWgyWVd4MVpTa3BJSHRjYmlBZ0lDQjJZWElnYzJsdGNHeGxJRDBnSjF4Y0p5Y2dLeUJLVTA5T0xuTjBjbWx1WjJsbWVTaDJZV3gxWlNrdWNtVndiR0ZqWlNndlhsd2lmRndpSkM5bkxDQW5KeWxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM1eVpYQnNZV05sS0M4bkwyY3NJRndpWEZ4Y1hDZGNJaWxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM1eVpYQnNZV05sS0M5Y1hGeGNYQ0l2Wnl3Z0oxd2lKeWtnS3lBblhGd25KenRjYmlBZ0lDQnlaWFIxY200Z1kzUjRMbk4wZVd4cGVtVW9jMmx0Y0d4bExDQW5jM1J5YVc1bkp5azdYRzRnSUgxY2JpQWdhV1lnS0dselRuVnRZbVZ5S0haaGJIVmxLU2xjYmlBZ0lDQnlaWFIxY200Z1kzUjRMbk4wZVd4cGVtVW9KeWNnS3lCMllXeDFaU3dnSjI1MWJXSmxjaWNwTzF4dUlDQnBaaUFvYVhOQ2IyOXNaV0Z1S0haaGJIVmxLU2xjYmlBZ0lDQnlaWFIxY200Z1kzUjRMbk4wZVd4cGVtVW9KeWNnS3lCMllXeDFaU3dnSjJKdmIyeGxZVzRuS1R0Y2JpQWdMeThnUm05eUlITnZiV1VnY21WaGMyOXVJSFI1Y0dWdlppQnVkV3hzSUdseklGd2liMkpxWldOMFhDSXNJSE52SUhOd1pXTnBZV3dnWTJGelpTQm9aWEpsTGx4dUlDQnBaaUFvYVhOT2RXeHNLSFpoYkhWbEtTbGNiaUFnSUNCeVpYUjFjbTRnWTNSNExuTjBlV3hwZW1Vb0oyNTFiR3duTENBbmJuVnNiQ2NwTzF4dWZWeHVYRzVjYm1aMWJtTjBhVzl1SUdadmNtMWhkRVZ5Y205eUtIWmhiSFZsS1NCN1hHNGdJSEpsZEhWeWJpQW5XeWNnS3lCRmNuSnZjaTV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaDJZV3gxWlNrZ0t5QW5YU2M3WEc1OVhHNWNibHh1Wm5WdVkzUnBiMjRnWm05eWJXRjBRWEp5WVhrb1kzUjRMQ0IyWVd4MVpTd2djbVZqZFhKelpWUnBiV1Z6TENCMmFYTnBZbXhsUzJWNWN5d2dhMlY1Y3lrZ2UxeHVJQ0IyWVhJZ2IzVjBjSFYwSUQwZ1cxMDdYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdMQ0JzSUQwZ2RtRnNkV1V1YkdWdVozUm9PeUJwSUR3Z2JEc2dLeXRwS1NCN1hHNGdJQ0FnYVdZZ0tHaGhjMDkzYmxCeWIzQmxjblI1S0haaGJIVmxMQ0JUZEhKcGJtY29hU2twS1NCN1hHNGdJQ0FnSUNCdmRYUndkWFF1Y0hWemFDaG1iM0p0WVhSUWNtOXdaWEowZVNoamRIZ3NJSFpoYkhWbExDQnlaV04xY25ObFZHbHRaWE1zSUhacGMybGliR1ZMWlhsekxGeHVJQ0FnSUNBZ0lDQWdJRk4wY21sdVp5aHBLU3dnZEhKMVpTa3BPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCdmRYUndkWFF1Y0hWemFDZ25KeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJR3RsZVhNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmloclpYa3BJSHRjYmlBZ0lDQnBaaUFvSVd0bGVTNXRZWFJqYUNndlhseGNaQ3NrTHlrcElIdGNiaUFnSUNBZ0lHOTFkSEIxZEM1d2RYTm9LR1p2Y20xaGRGQnliM0JsY25SNUtHTjBlQ3dnZG1Gc2RXVXNJSEpsWTNWeWMyVlVhVzFsY3l3Z2RtbHphV0pzWlV0bGVYTXNYRzRnSUNBZ0lDQWdJQ0FnYTJWNUxDQjBjblZsS1NrN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmlBZ2NtVjBkWEp1SUc5MWRIQjFkRHRjYm4xY2JseHVYRzVtZFc1amRHbHZiaUJtYjNKdFlYUlFjbTl3WlhKMGVTaGpkSGdzSUhaaGJIVmxMQ0J5WldOMWNuTmxWR2x0WlhNc0lIWnBjMmxpYkdWTFpYbHpMQ0JyWlhrc0lHRnljbUY1S1NCN1hHNGdJSFpoY2lCdVlXMWxMQ0J6ZEhJc0lHUmxjMk03WEc0Z0lHUmxjMk1nUFNCUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbEVaWE5qY21sd2RHOXlLSFpoYkhWbExDQnJaWGtwSUh4OElIc2dkbUZzZFdVNklIWmhiSFZsVzJ0bGVWMGdmVHRjYmlBZ2FXWWdLR1JsYzJNdVoyVjBLU0I3WEc0Z0lDQWdhV1lnS0dSbGMyTXVjMlYwS1NCN1hHNGdJQ0FnSUNCemRISWdQU0JqZEhndWMzUjViR2w2WlNnblcwZGxkSFJsY2k5VFpYUjBaWEpkSnl3Z0ozTndaV05wWVd3bktUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYzNSeUlEMGdZM1I0TG5OMGVXeHBlbVVvSjF0SFpYUjBaWEpkSnl3Z0ozTndaV05wWVd3bktUdGNiaUFnSUNCOVhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2FXWWdLR1JsYzJNdWMyVjBLU0I3WEc0Z0lDQWdJQ0J6ZEhJZ1BTQmpkSGd1YzNSNWJHbDZaU2duVzFObGRIUmxjbDBuTENBbmMzQmxZMmxoYkNjcE8xeHVJQ0FnSUgxY2JpQWdmVnh1SUNCcFppQW9JV2hoYzA5M2JsQnliM0JsY25SNUtIWnBjMmxpYkdWTFpYbHpMQ0JyWlhrcEtTQjdYRzRnSUNBZ2JtRnRaU0E5SUNkYkp5QXJJR3RsZVNBcklDZGRKenRjYmlBZ2ZWeHVJQ0JwWmlBb0lYTjBjaWtnZTF4dUlDQWdJR2xtSUNoamRIZ3VjMlZsYmk1cGJtUmxlRTltS0dSbGMyTXVkbUZzZFdVcElEd2dNQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tHbHpUblZzYkNoeVpXTjFjbk5sVkdsdFpYTXBLU0I3WEc0Z0lDQWdJQ0FnSUhOMGNpQTlJR1p2Y20xaGRGWmhiSFZsS0dOMGVDd2daR1Z6WXk1MllXeDFaU3dnYm5Wc2JDazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnpkSElnUFNCbWIzSnRZWFJXWVd4MVpTaGpkSGdzSUdSbGMyTXVkbUZzZFdVc0lISmxZM1Z5YzJWVWFXMWxjeUF0SURFcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2FXWWdLSE4wY2k1cGJtUmxlRTltS0NkY1hHNG5LU0ErSUMweEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoaGNuSmhlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lITjBjaUE5SUhOMGNpNXpjR3hwZENnblhGeHVKeWt1YldGd0tHWjFibU4wYVc5dUtHeHBibVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQW5JQ0FuSUNzZ2JHbHVaVHRjYmlBZ0lDQWdJQ0FnSUNCOUtTNXFiMmx1S0NkY1hHNG5LUzV6ZFdKemRISW9NaWs3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ2MzUnlJRDBnSjF4Y2JpY2dLeUJ6ZEhJdWMzQnNhWFFvSjF4Y2JpY3BMbTFoY0NobWRXNWpkR2x2Ymloc2FXNWxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0p5QWdJQ2NnS3lCc2FXNWxPMXh1SUNBZ0lDQWdJQ0FnSUgwcExtcHZhVzRvSjF4Y2JpY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lITjBjaUE5SUdOMGVDNXpkSGxzYVhwbEtDZGJRMmx5WTNWc1lYSmRKeXdnSjNOd1pXTnBZV3duS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnYVdZZ0tHbHpWVzVrWldacGJtVmtLRzVoYldVcEtTQjdYRzRnSUNBZ2FXWWdLR0Z5Y21GNUlDWW1JR3RsZVM1dFlYUmphQ2d2WGx4Y1pDc2tMeWtwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ6ZEhJN1hHNGdJQ0FnZlZ4dUlDQWdJRzVoYldVZ1BTQktVMDlPTG5OMGNtbHVaMmxtZVNnbkp5QXJJR3RsZVNrN1hHNGdJQ0FnYVdZZ0tHNWhiV1V1YldGMFkyZ29MMTVjSWloYllTMTZRUzFhWDExYllTMTZRUzFhWHpBdE9WMHFLVndpSkM4cEtTQjdYRzRnSUNBZ0lDQnVZVzFsSUQwZ2JtRnRaUzV6ZFdKemRISW9NU3dnYm1GdFpTNXNaVzVuZEdnZ0xTQXlLVHRjYmlBZ0lDQWdJRzVoYldVZ1BTQmpkSGd1YzNSNWJHbDZaU2h1WVcxbExDQW5ibUZ0WlNjcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J1WVcxbElEMGdibUZ0WlM1eVpYQnNZV05sS0M4bkwyY3NJRndpWEZ4Y1hDZGNJaWxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTG5KbGNHeGhZMlVvTDF4Y1hGeGNJaTluTENBblhDSW5LVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1Y21Wd2JHRmpaU2d2S0Y1Y0lueGNJaVFwTDJjc0lGd2lKMXdpS1R0Y2JpQWdJQ0FnSUc1aGJXVWdQU0JqZEhndWMzUjViR2w2WlNodVlXMWxMQ0FuYzNSeWFXNW5KeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRzVoYldVZ0t5QW5PaUFuSUNzZ2MzUnlPMXh1ZlZ4dVhHNWNibVoxYm1OMGFXOXVJSEpsWkhWalpWUnZVMmx1WjJ4bFUzUnlhVzVuS0c5MWRIQjFkQ3dnWW1GelpTd2dZbkpoWTJWektTQjdYRzRnSUhaaGNpQnVkVzFNYVc1bGMwVnpkQ0E5SURBN1hHNGdJSFpoY2lCc1pXNW5kR2dnUFNCdmRYUndkWFF1Y21Wa2RXTmxLR1oxYm1OMGFXOXVLSEJ5WlhZc0lHTjFjaWtnZTF4dUlDQWdJRzUxYlV4cGJtVnpSWE4wS3lzN1hHNGdJQ0FnYVdZZ0tHTjFjaTVwYm1SbGVFOW1LQ2RjWEc0bktTQStQU0F3S1NCdWRXMU1hVzVsYzBWemRDc3JPMXh1SUNBZ0lISmxkSFZ5YmlCd2NtVjJJQ3NnWTNWeUxuSmxjR3hoWTJVb0wxeGNkVEF3TVdKY1hGdGNYR1JjWEdRL2JTOW5MQ0FuSnlrdWJHVnVaM1JvSUNzZ01UdGNiaUFnZlN3Z01DazdYRzVjYmlBZ2FXWWdLR3hsYm1kMGFDQStJRFl3S1NCN1hHNGdJQ0FnY21WMGRYSnVJR0p5WVdObGMxc3dYU0FyWEc0Z0lDQWdJQ0FnSUNBZ0lDaGlZWE5sSUQwOVBTQW5KeUEvSUNjbklEb2dZbUZ6WlNBcklDZGNYRzRnSnlrZ0sxeHVJQ0FnSUNBZ0lDQWdJQ0FuSUNjZ0sxeHVJQ0FnSUNBZ0lDQWdJQ0J2ZFhSd2RYUXVhbTlwYmlnbkxGeGNiaUFnSnlrZ0sxeHVJQ0FnSUNBZ0lDQWdJQ0FuSUNjZ0sxeHVJQ0FnSUNBZ0lDQWdJQ0JpY21GalpYTmJNVjA3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnWW5KaFkyVnpXekJkSUNzZ1ltRnpaU0FySUNjZ0p5QXJJRzkxZEhCMWRDNXFiMmx1S0Njc0lDY3BJQ3NnSnlBbklDc2dZbkpoWTJWeld6RmRPMXh1ZlZ4dVhHNWNiaTh2SUU1UFZFVTZJRlJvWlhObElIUjVjR1VnWTJobFkydHBibWNnWm5WdVkzUnBiMjV6SUdsdWRHVnVkR2x2Ym1Gc2JIa2daRzl1SjNRZ2RYTmxJR0JwYm5OMFlXNWpaVzltWUZ4dUx5OGdZbVZqWVhWelpTQnBkQ0JwY3lCbWNtRm5hV3hsSUdGdVpDQmpZVzRnWW1VZ1pXRnphV3g1SUdaaGEyVmtJSGRwZEdnZ1lFOWlhbVZqZEM1amNtVmhkR1VvS1dBdVhHNW1kVzVqZEdsdmJpQnBjMEZ5Y21GNUtHRnlLU0I3WEc0Z0lISmxkSFZ5YmlCQmNuSmhlUzVwYzBGeWNtRjVLR0Z5S1R0Y2JuMWNibVY0Y0c5eWRITXVhWE5CY25KaGVTQTlJR2x6UVhKeVlYazdYRzVjYm1aMWJtTjBhVzl1SUdselFtOXZiR1ZoYmloaGNtY3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUJoY21jZ1BUMDlJQ2RpYjI5c1pXRnVKenRjYm4xY2JtVjRjRzl5ZEhNdWFYTkNiMjlzWldGdUlEMGdhWE5DYjI5c1pXRnVPMXh1WEc1bWRXNWpkR2x2YmlCcGMwNTFiR3dvWVhKbktTQjdYRzRnSUhKbGRIVnliaUJoY21jZ1BUMDlJRzUxYkd3N1hHNTlYRzVsZUhCdmNuUnpMbWx6VG5Wc2JDQTlJR2x6VG5Wc2JEdGNibHh1Wm5WdVkzUnBiMjRnYVhOT2RXeHNUM0pWYm1SbFptbHVaV1FvWVhKbktTQjdYRzRnSUhKbGRIVnliaUJoY21jZ1BUMGdiblZzYkR0Y2JuMWNibVY0Y0c5eWRITXVhWE5PZFd4c1QzSlZibVJsWm1sdVpXUWdQU0JwYzA1MWJHeFBjbFZ1WkdWbWFXNWxaRHRjYmx4dVpuVnVZM1JwYjI0Z2FYTk9kVzFpWlhJb1lYSm5LU0I3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnWVhKbklEMDlQU0FuYm5WdFltVnlKenRjYm4xY2JtVjRjRzl5ZEhNdWFYTk9kVzFpWlhJZ1BTQnBjMDUxYldKbGNqdGNibHh1Wm5WdVkzUnBiMjRnYVhOVGRISnBibWNvWVhKbktTQjdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdZWEpuSUQwOVBTQW5jM1J5YVc1bkp6dGNibjFjYm1WNGNHOXlkSE11YVhOVGRISnBibWNnUFNCcGMxTjBjbWx1Wnp0Y2JseHVablZ1WTNScGIyNGdhWE5UZVcxaWIyd29ZWEpuS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ1lYSm5JRDA5UFNBbmMzbHRZbTlzSnp0Y2JuMWNibVY0Y0c5eWRITXVhWE5UZVcxaWIyd2dQU0JwYzFONWJXSnZiRHRjYmx4dVpuVnVZM1JwYjI0Z2FYTlZibVJsWm1sdVpXUW9ZWEpuS1NCN1hHNGdJSEpsZEhWeWJpQmhjbWNnUFQwOUlIWnZhV1FnTUR0Y2JuMWNibVY0Y0c5eWRITXVhWE5WYm1SbFptbHVaV1FnUFNCcGMxVnVaR1ZtYVc1bFpEdGNibHh1Wm5WdVkzUnBiMjRnYVhOU1pXZEZlSEFvY21VcElIdGNiaUFnY21WMGRYSnVJR2x6VDJKcVpXTjBLSEpsS1NBbUppQnZZbXBsWTNSVWIxTjBjbWx1WnloeVpTa2dQVDA5SUNkYmIySnFaV04wSUZKbFowVjRjRjBuTzF4dWZWeHVaWGh3YjNKMGN5NXBjMUpsWjBWNGNDQTlJR2x6VW1WblJYaHdPMXh1WEc1bWRXNWpkR2x2YmlCcGMwOWlhbVZqZENoaGNtY3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUJoY21jZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUdGeVp5QWhQVDBnYm5Wc2JEdGNibjFjYm1WNGNHOXlkSE11YVhOUFltcGxZM1FnUFNCcGMwOWlhbVZqZER0Y2JseHVablZ1WTNScGIyNGdhWE5FWVhSbEtHUXBJSHRjYmlBZ2NtVjBkWEp1SUdselQySnFaV04wS0dRcElDWW1JRzlpYW1WamRGUnZVM1J5YVc1bktHUXBJRDA5UFNBblcyOWlhbVZqZENCRVlYUmxYU2M3WEc1OVhHNWxlSEJ2Y25SekxtbHpSR0YwWlNBOUlHbHpSR0YwWlR0Y2JseHVablZ1WTNScGIyNGdhWE5GY25KdmNpaGxLU0I3WEc0Z0lISmxkSFZ5YmlCcGMwOWlhbVZqZENobEtTQW1KbHh1SUNBZ0lDQWdLRzlpYW1WamRGUnZVM1J5YVc1bktHVXBJRDA5UFNBblcyOWlhbVZqZENCRmNuSnZjbDBuSUh4OElHVWdhVzV6ZEdGdVkyVnZaaUJGY25KdmNpazdYRzU5WEc1bGVIQnZjblJ6TG1selJYSnliM0lnUFNCcGMwVnljbTl5TzF4dVhHNW1kVzVqZEdsdmJpQnBjMFoxYm1OMGFXOXVLR0Z5WnlrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHRnlaeUE5UFQwZ0oyWjFibU4wYVc5dUp6dGNibjFjYm1WNGNHOXlkSE11YVhOR2RXNWpkR2x2YmlBOUlHbHpSblZ1WTNScGIyNDdYRzVjYm1aMWJtTjBhVzl1SUdselVISnBiV2wwYVhabEtHRnlaeWtnZTF4dUlDQnlaWFIxY200Z1lYSm5JRDA5UFNCdWRXeHNJSHg4WEc0Z0lDQWdJQ0FnSUNCMGVYQmxiMllnWVhKbklEMDlQU0FuWW05dmJHVmhiaWNnZkh4Y2JpQWdJQ0FnSUNBZ0lIUjVjR1Z2WmlCaGNtY2dQVDA5SUNkdWRXMWlaWEluSUh4OFhHNGdJQ0FnSUNBZ0lDQjBlWEJsYjJZZ1lYSm5JRDA5UFNBbmMzUnlhVzVuSnlCOGZGeHVJQ0FnSUNBZ0lDQWdkSGx3Wlc5bUlHRnlaeUE5UFQwZ0ozTjViV0p2YkNjZ2ZId2dJQzh2SUVWVE5pQnplVzFpYjJ4Y2JpQWdJQ0FnSUNBZ0lIUjVjR1Z2WmlCaGNtY2dQVDA5SUNkMWJtUmxabWx1WldRbk8xeHVmVnh1Wlhod2IzSjBjeTVwYzFCeWFXMXBkR2wyWlNBOUlHbHpVSEpwYldsMGFYWmxPMXh1WEc1bGVIQnZjblJ6TG1selFuVm1abVZ5SUQwZ2NtVnhkV2x5WlNnbkxpOXpkWEJ3YjNKMEwybHpRblZtWm1WeUp5azdYRzVjYm1aMWJtTjBhVzl1SUc5aWFtVmpkRlJ2VTNSeWFXNW5LRzhwSUh0Y2JpQWdjbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2h2S1R0Y2JuMWNibHh1WEc1bWRXNWpkR2x2YmlCd1lXUW9iaWtnZTF4dUlDQnlaWFIxY200Z2JpQThJREV3SUQ4Z0p6QW5JQ3NnYmk1MGIxTjBjbWx1WnlneE1Da2dPaUJ1TG5SdlUzUnlhVzVuS0RFd0tUdGNibjFjYmx4dVhHNTJZWElnYlc5dWRHaHpJRDBnV3lkS1lXNG5MQ0FuUm1WaUp5d2dKMDFoY2ljc0lDZEJjSEluTENBblRXRjVKeXdnSjBwMWJpY3NJQ2RLZFd3bkxDQW5RWFZuSnl3Z0oxTmxjQ2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ2RQWTNRbkxDQW5UbTkySnl3Z0owUmxZeWRkTzF4dVhHNHZMeUF5TmlCR1pXSWdNVFk2TVRrNk16UmNibVoxYm1OMGFXOXVJSFJwYldWemRHRnRjQ2dwSUh0Y2JpQWdkbUZ5SUdRZ1BTQnVaWGNnUkdGMFpTZ3BPMXh1SUNCMllYSWdkR2x0WlNBOUlGdHdZV1FvWkM1blpYUkliM1Z5Y3lncEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NHRmtLR1F1WjJWMFRXbHVkWFJsY3lncEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NHRmtLR1F1WjJWMFUyVmpiMjVrY3lncEtWMHVhbTlwYmlnbk9pY3BPMXh1SUNCeVpYUjFjbTRnVzJRdVoyVjBSR0YwWlNncExDQnRiMjUwYUhOYlpDNW5aWFJOYjI1MGFDZ3BYU3dnZEdsdFpWMHVhbTlwYmlnbklDY3BPMXh1ZlZ4dVhHNWNiaTh2SUd4dlp5QnBjeUJxZFhOMElHRWdkR2hwYmlCM2NtRndjR1Z5SUhSdklHTnZibk52YkdVdWJHOW5JSFJvWVhRZ2NISmxjR1Z1WkhNZ1lTQjBhVzFsYzNSaGJYQmNibVY0Y0c5eWRITXViRzluSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUdOdmJuTnZiR1V1Ykc5bktDY2xjeUF0SUNWekp5d2dkR2x0WlhOMFlXMXdLQ2tzSUdWNGNHOXlkSE11Wm05eWJXRjBMbUZ3Y0d4NUtHVjRjRzl5ZEhNc0lHRnlaM1Z0Wlc1MGN5a3BPMXh1ZlR0Y2JseHVYRzR2S2lwY2JpQXFJRWx1YUdWeWFYUWdkR2hsSUhCeWIzUnZkSGx3WlNCdFpYUm9iMlJ6SUdaeWIyMGdiMjVsSUdOdmJuTjBjblZqZEc5eUlHbHVkRzhnWVc1dmRHaGxjaTVjYmlBcVhHNGdLaUJVYUdVZ1JuVnVZM1JwYjI0dWNISnZkRzkwZVhCbExtbHVhR1Z5YVhSeklHWnliMjBnYkdGdVp5NXFjeUJ5WlhkeWFYUjBaVzRnWVhNZ1lTQnpkR0Z1WkdGc2IyNWxYRzRnS2lCbWRXNWpkR2x2YmlBb2JtOTBJRzl1SUVaMWJtTjBhVzl1TG5CeWIzUnZkSGx3WlNrdUlFNVBWRVU2SUVsbUlIUm9hWE1nWm1sc1pTQnBjeUIwYnlCaVpTQnNiMkZrWldSY2JpQXFJR1IxY21sdVp5QmliMjkwYzNSeVlYQndhVzVuSUhSb2FYTWdablZ1WTNScGIyNGdibVZsWkhNZ2RHOGdZbVVnY21WM2NtbDBkR1Z1SUhWemFXNW5JSE52YldVZ2JtRjBhWFpsWEc0Z0tpQm1kVzVqZEdsdmJuTWdZWE1nY0hKdmRHOTBlWEJsSUhObGRIVndJSFZ6YVc1bklHNXZjbTFoYkNCS1lYWmhVMk55YVhCMElHUnZaWE1nYm05MElIZHZjbXNnWVhOY2JpQXFJR1Y0Y0dWamRHVmtJR1IxY21sdVp5QmliMjkwYzNSeVlYQndhVzVuSUNoelpXVWdiV2x5Y205eUxtcHpJR2x1SUhJeE1UUTVNRE1wTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3Wm5WdVkzUnBiMjU5SUdOMGIzSWdRMjl1YzNSeWRXTjBiM0lnWm5WdVkzUnBiMjRnZDJocFkyZ2dibVZsWkhNZ2RHOGdhVzVvWlhKcGRDQjBhR1ZjYmlBcUlDQWdJQ0J3Y205MGIzUjVjR1V1WEc0Z0tpQkFjR0Z5WVcwZ2UyWjFibU4wYVc5dWZTQnpkWEJsY2tOMGIzSWdRMjl1YzNSeWRXTjBiM0lnWm5WdVkzUnBiMjRnZEc4Z2FXNW9aWEpwZENCd2NtOTBiM1I1Y0dVZ1puSnZiUzVjYmlBcUwxeHVaWGh3YjNKMGN5NXBibWhsY21sMGN5QTlJSEpsY1hWcGNtVW9KMmx1YUdWeWFYUnpKeWs3WEc1Y2JtVjRjRzl5ZEhNdVgyVjRkR1Z1WkNBOUlHWjFibU4wYVc5dUtHOXlhV2RwYml3Z1lXUmtLU0I3WEc0Z0lDOHZJRVJ2YmlkMElHUnZJR0Z1ZVhSb2FXNW5JR2xtSUdGa1pDQnBjMjRuZENCaGJpQnZZbXBsWTNSY2JpQWdhV1lnS0NGaFpHUWdmSHdnSVdselQySnFaV04wS0dGa1pDa3BJSEpsZEhWeWJpQnZjbWxuYVc0N1hHNWNiaUFnZG1GeUlHdGxlWE1nUFNCUFltcGxZM1F1YTJWNWN5aGhaR1FwTzF4dUlDQjJZWElnYVNBOUlHdGxlWE11YkdWdVozUm9PMXh1SUNCM2FHbHNaU0FvYVMwdEtTQjdYRzRnSUNBZ2IzSnBaMmx1VzJ0bGVYTmJhVjFkSUQwZ1lXUmtXMnRsZVhOYmFWMWRPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnZjbWxuYVc0N1hHNTlPMXh1WEc1bWRXNWpkR2x2YmlCb1lYTlBkMjVRY205d1pYSjBlU2h2WW1vc0lIQnliM0FwSUh0Y2JpQWdjbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbW9zSUhCeWIzQXBPMXh1ZlZ4dVhHNTJZWElnYTBOMWMzUnZiVkJ5YjIxcGMybG1hV1ZrVTNsdFltOXNJRDBnZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5QlRlVzFpYjJ3b0ozVjBhV3d1Y0hKdmJXbHphV1o1TG1OMWMzUnZiU2NwSURvZ2RXNWtaV1pwYm1Wa08xeHVYRzVsZUhCdmNuUnpMbkJ5YjIxcGMybG1lU0E5SUdaMWJtTjBhVzl1SUhCeWIyMXBjMmxtZVNodmNtbG5hVzVoYkNrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUc5eWFXZHBibUZzSUNFOVBTQW5ablZ1WTNScGIyNG5LVnh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMVJvWlNCY0ltOXlhV2RwYm1Gc1hDSWdZWEpuZFcxbGJuUWdiWFZ6ZENCaVpTQnZaaUIwZVhCbElFWjFibU4wYVc5dUp5azdYRzVjYmlBZ2FXWWdLR3REZFhOMGIyMVFjbTl0YVhOcFptbGxaRk41YldKdmJDQW1KaUJ2Y21sbmFXNWhiRnRyUTNWemRHOXRVSEp2YldsemFXWnBaV1JUZVcxaWIyeGRLU0I3WEc0Z0lDQWdkbUZ5SUdadUlEMGdiM0pwWjJsdVlXeGJhME4xYzNSdmJWQnliMjFwYzJsbWFXVmtVM2x0WW05c1hUdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHWnVJQ0U5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RVYUdVZ1hDSjFkR2xzTG5CeWIyMXBjMmxtZVM1amRYTjBiMjFjSWlCaGNtZDFiV1Z1ZENCdGRYTjBJR0psSUc5bUlIUjVjR1VnUm5WdVkzUnBiMjRuS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dadUxDQnJRM1Z6ZEc5dFVISnZiV2x6YVdacFpXUlRlVzFpYjJ3c0lIdGNiaUFnSUNBZ0lIWmhiSFZsT2lCbWJpd2daVzUxYldWeVlXSnNaVG9nWm1Gc2MyVXNJSGR5YVhSaFlteGxPaUJtWVd4elpTd2dZMjl1Wm1sbmRYSmhZbXhsT2lCMGNuVmxYRzRnSUNBZ2ZTazdYRzRnSUNBZ2NtVjBkWEp1SUdadU8xeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdabTRvS1NCN1hHNGdJQ0FnZG1GeUlIQnliMjFwYzJWU1pYTnZiSFpsTENCd2NtOXRhWE5sVW1WcVpXTjBPMXh1SUNBZ0lIWmhjaUJ3Y205dGFYTmxJRDBnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0Z0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ2UxeHVJQ0FnSUNBZ2NISnZiV2x6WlZKbGMyOXNkbVVnUFNCeVpYTnZiSFpsTzF4dUlDQWdJQ0FnY0hKdmJXbHpaVkpsYW1WamRDQTlJSEpsYW1WamREdGNiaUFnSUNCOUtUdGNibHh1SUNBZ0lIWmhjaUJoY21keklEMGdXMTA3WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JoY21kMWJXVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lHRnlaM011Y0hWemFDaGhjbWQxYldWdWRITmJhVjBwTzF4dUlDQWdJSDFjYmlBZ0lDQmhjbWR6TG5CMWMyZ29ablZ1WTNScGIyNGdLR1Z5Y2l3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUdsbUlDaGxjbklwSUh0Y2JpQWdJQ0FnSUNBZ2NISnZiV2x6WlZKbGFtVmpkQ2hsY25JcE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NISnZiV2x6WlZKbGMyOXNkbVVvZG1Gc2RXVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBPMXh1WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUc5eWFXZHBibUZzTG1Gd2NHeDVLSFJvYVhNc0lHRnlaM01wTzF4dUlDQWdJSDBnWTJGMFkyZ2dLR1Z5Y2lrZ2UxeHVJQ0FnSUNBZ2NISnZiV2x6WlZKbGFtVmpkQ2hsY25JcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3Y205dGFYTmxPMXh1SUNCOVhHNWNiaUFnVDJKcVpXTjBMbk5sZEZCeWIzUnZkSGx3WlU5bUtHWnVMQ0JQWW1wbFkzUXVaMlYwVUhKdmRHOTBlWEJsVDJZb2IzSnBaMmx1WVd3cEtUdGNibHh1SUNCcFppQW9hME4xYzNSdmJWQnliMjFwYzJsbWFXVmtVM2x0WW05c0tTQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWm00c0lHdERkWE4wYjIxUWNtOXRhWE5wWm1sbFpGTjViV0p2YkN3Z2UxeHVJQ0FnSUhaaGJIVmxPaUJtYml3Z1pXNTFiV1Z5WVdKc1pUb2dabUZzYzJVc0lIZHlhWFJoWW14bE9pQm1ZV3h6WlN3Z1kyOXVabWxuZFhKaFlteGxPaUIwY25WbFhHNGdJSDBwTzF4dUlDQnlaWFIxY200Z1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUnBaWE1vWEc0Z0lDQWdabTRzWEc0Z0lDQWdaMlYwVDNkdVVISnZjR1Z5ZEhsRVpYTmpjbWx3ZEc5eWN5aHZjbWxuYVc1aGJDbGNiaUFnS1R0Y2JuMWNibHh1Wlhod2IzSjBjeTV3Y205dGFYTnBabmt1WTNWemRHOXRJRDBnYTBOMWMzUnZiVkJ5YjIxcGMybG1hV1ZrVTNsdFltOXNYRzVjYm1aMWJtTjBhVzl1SUdOaGJHeGlZV05yYVdaNVQyNVNaV3BsWTNSbFpDaHlaV0Z6YjI0c0lHTmlLU0I3WEc0Z0lDOHZJR0FoY21WaGMyOXVZQ0JuZFdGeVpDQnBibk53YVhKbFpDQmllU0JpYkhWbFltbHlaQ0FvVW1WbU9pQm9kSFJ3Y3pvdkwyZHZieTVuYkM5ME5VbFROazBwTGx4dUlDQXZMeUJDWldOaGRYTmxJR0J1ZFd4c1lDQnBjeUJoSUhOd1pXTnBZV3dnWlhKeWIzSWdkbUZzZFdVZ2FXNGdZMkZzYkdKaFkydHpJSGRvYVdOb0lHMWxZVzV6SUZ3aWJtOGdaWEp5YjNKY2JpQWdMeThnYjJOamRYSnlaV1JjSWl3Z2QyVWdaWEp5YjNJdGQzSmhjQ0J6YnlCMGFHVWdZMkZzYkdKaFkyc2dZMjl1YzNWdFpYSWdZMkZ1SUdScGMzUnBibWQxYVhOb0lHSmxkSGRsWlc1Y2JpQWdMeThnWENKMGFHVWdjSEp2YldselpTQnlaV3BsWTNSbFpDQjNhWFJvSUc1MWJHeGNJaUJ2Y2lCY0luUm9aU0J3Y205dGFYTmxJR1oxYkdacGJHeGxaQ0IzYVhSb0lIVnVaR1ZtYVc1bFpGd2lMbHh1SUNCcFppQW9JWEpsWVhOdmJpa2dlMXh1SUNBZ0lIWmhjaUJ1WlhkU1pXRnpiMjRnUFNCdVpYY2dSWEp5YjNJb0oxQnliMjFwYzJVZ2QyRnpJSEpsYW1WamRHVmtJSGRwZEdnZ1lTQm1ZV3h6ZVNCMllXeDFaU2NwTzF4dUlDQWdJRzVsZDFKbFlYTnZiaTV5WldGemIyNGdQU0J5WldGemIyNDdYRzRnSUNBZ2NtVmhjMjl1SUQwZ2JtVjNVbVZoYzI5dU8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCallpaHlaV0Z6YjI0cE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCallXeHNZbUZqYTJsbWVTaHZjbWxuYVc1aGJDa2dlMXh1SUNCcFppQW9kSGx3Wlc5bUlHOXlhV2RwYm1Gc0lDRTlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblZHaGxJRndpYjNKcFoybHVZV3hjSWlCaGNtZDFiV1Z1ZENCdGRYTjBJR0psSUc5bUlIUjVjR1VnUm5WdVkzUnBiMjRuS1R0Y2JpQWdmVnh1WEc0Z0lDOHZJRmRsSUVSUElFNVBWQ0J5WlhSMWNtNGdkR2hsSUhCeWIyMXBjMlVnWVhNZ2FYUWdaMmwyWlhNZ2RHaGxJSFZ6WlhJZ1lTQm1ZV3h6WlNCelpXNXpaU0IwYUdGMFhHNGdJQzh2SUhSb1pTQndjbTl0YVhObElHbHpJR0ZqZEhWaGJHeDVJSE52YldWb2IzY2djbVZzWVhSbFpDQjBieUIwYUdVZ1kyRnNiR0poWTJzbmN5QmxlR1ZqZFhScGIyNWNiaUFnTHk4Z1lXNWtJSFJvWVhRZ2RHaGxJR05oYkd4aVlXTnJJSFJvY205M2FXNW5JSGRwYkd3Z2NtVnFaV04wSUhSb1pTQndjbTl0YVhObExseHVJQ0JtZFc1amRHbHZiaUJqWVd4c1ltRmphMmxtYVdWa0tDa2dlMXh1SUNBZ0lIWmhjaUJoY21keklEMGdXMTA3WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JoY21kMWJXVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lHRnlaM011Y0hWemFDaGhjbWQxYldWdWRITmJhVjBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFpoY2lCdFlYbGlaVU5pSUQwZ1lYSm5jeTV3YjNBb0tUdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHMWhlV0psUTJJZ0lUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oxUm9aU0JzWVhOMElHRnlaM1Z0Wlc1MElHMTFjM1FnWW1VZ2IyWWdkSGx3WlNCR2RXNWpkR2x2YmljcE8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2MyVnNaaUE5SUhSb2FYTTdYRzRnSUNBZ2RtRnlJR05pSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2JXRjVZbVZEWWk1aGNIQnNlU2h6Wld4bUxDQmhjbWQxYldWdWRITXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5OGdTVzRnZEhKMVpTQnViMlJsSUhOMGVXeGxJSGRsSUhCeWIyTmxjM01nZEdobElHTmhiR3hpWVdOcklHOXVJR0J1WlhoMFZHbGphMkFnZDJsMGFDQmhiR3dnZEdobFhHNGdJQ0FnTHk4Z2FXMXdiR2xqWVhScGIyNXpJQ2h6ZEdGamF5d2dZSFZ1WTJGMVoyaDBSWGhqWlhCMGFXOXVZQ3dnWUdGemVXNWpYMmh2YjJ0ellDbGNiaUFnSUNCdmNtbG5hVzVoYkM1aGNIQnNlU2gwYUdsekxDQmhjbWR6S1Z4dUlDQWdJQ0FnTG5Sb1pXNG9ablZ1WTNScGIyNG9jbVYwS1NCN0lIQnliMk5sYzNNdWJtVjRkRlJwWTJzb1kySXNJRzUxYkd3c0lISmxkQ2tnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1oxYm1OMGFXOXVLSEpsYWlrZ2V5QndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOcmFXWjVUMjVTWldwbFkzUmxaQ3dnY21WcUxDQmpZaWtnZlNrN1hHNGdJSDFjYmx4dUlDQlBZbXBsWTNRdWMyVjBVSEp2ZEc5MGVYQmxUMllvWTJGc2JHSmhZMnRwWm1sbFpDd2dUMkpxWldOMExtZGxkRkJ5YjNSdmRIbHdaVTltS0c5eWFXZHBibUZzS1NrN1hHNGdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowYVdWektHTmhiR3hpWVdOcmFXWnBaV1FzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkbGRFOTNibEJ5YjNCbGNuUjVSR1Z6WTNKcGNIUnZjbk1vYjNKcFoybHVZV3dwS1R0Y2JpQWdjbVYwZFhKdUlHTmhiR3hpWVdOcmFXWnBaV1E3WEc1OVhHNWxlSEJ2Y25SekxtTmhiR3hpWVdOcmFXWjVJRDBnWTJGc2JHSmhZMnRwWm5rN1hHNWNibHh1WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk5Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU1hHNHZMeUF1TDM0dmJtOWtaUzFzYVdKekxXSnliM2R6WlhJdmZpOTFkR2xzTDNWMGFXd3Vhbk5jYmk4dklHMXZaSFZzWlNCcFpDQTlJRFJjYmk4dklHMXZaSFZzWlNCamFIVnVhM01nUFNBd0lpd2lMeThnUTI5d2VYSnBaMmgwSUVwdmVXVnVkQ3dnU1c1akxpQmhibVFnYjNSb1pYSWdUbTlrWlNCamIyNTBjbWxpZFhSdmNuTXVYSEpjYmk4dlhISmNiaTh2SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoWEhKY2JpOHZJR052Y0hrZ2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JrYjJOMWJXVnVkR0YwYVc5dUlHWnBiR1Z6SUNoMGFHVmNjbHh1THk4Z1hDSlRiMlowZDJGeVpWd2lLU3dnZEc4Z1pHVmhiQ0JwYmlCMGFHVWdVMjltZEhkaGNtVWdkMmwwYUc5MWRDQnlaWE4wY21samRHbHZiaXdnYVc1amJIVmthVzVuWEhKY2JpOHZJSGRwZEdodmRYUWdiR2x0YVhSaGRHbHZiaUIwYUdVZ2NtbG5hSFJ6SUhSdklIVnpaU3dnWTI5d2VTd2diVzlrYVdaNUxDQnRaWEpuWlN3Z2NIVmliR2x6YUN4Y2NseHVMeThnWkdsemRISnBZblYwWlN3Z2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUhSb1pTQlRiMlowZDJGeVpTd2dZVzVrSUhSdklIQmxjbTFwZEZ4eVhHNHZMeUJ3WlhKemIyNXpJSFJ2SUhkb2IyMGdkR2hsSUZOdlpuUjNZWEpsSUdseklHWjFjbTVwYzJobFpDQjBieUJrYnlCemJ5d2djM1ZpYW1WamRDQjBieUIwYUdWY2NseHVMeThnWm05c2JHOTNhVzVuSUdOdmJtUnBkR2x2Ym5NNlhISmNiaTh2WEhKY2JpOHZJRlJvWlNCaFltOTJaU0JqYjNCNWNtbG5hSFFnYm05MGFXTmxJR0Z1WkNCMGFHbHpJSEJsY20xcGMzTnBiMjRnYm05MGFXTmxJSE5vWVd4c0lHSmxJR2x1WTJ4MVpHVmtYSEpjYmk4dklHbHVJR0ZzYkNCamIzQnBaWE1nYjNJZ2MzVmljM1JoYm5ScFlXd2djRzl5ZEdsdmJuTWdiMllnZEdobElGTnZablIzWVhKbExseHlYRzR2TDF4eVhHNHZMeUJVU0VVZ1UwOUdWRmRCVWtVZ1NWTWdVRkpQVmtsRVJVUWdYQ0pCVXlCSlUxd2lMQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUlpJRTlHSUVGT1dTQkxTVTVFTENCRldGQlNSVk5UWEhKY2JpOHZJRTlTSUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBaY2NseHVMeThnVFVWU1EwaEJUbFJCUWtsTVNWUlpMQ0JHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGx4eVhHNHZMeUJPVHlCRlZrVk9WQ0JUU0VGTVRDQlVTRVVnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3hjY2x4dUx5OGdSRUZOUVVkRlV5QlBVaUJQVkVoRlVpQk1TVUZDU1V4SlZGa3NJRmRJUlZSSVJWSWdTVTRnUVU0Z1FVTlVTVTlPSUU5R0lFTlBUbFJTUVVOVUxDQlVUMUpVSUU5U1hISmNiaTh2SUU5VVNFVlNWMGxUUlN3Z1FWSkpVMGxPUnlCR1VrOU5MQ0JQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VWY2NseHVMeThnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9JRlJJUlNCVFQwWlVWMEZTUlM1Y2NseHVYSEpjYmlkMWMyVWdjM1J5YVdOMEp6dGNjbHh1WEhKY2JseHlYRzUyWVhJZ2FYTlhhVzVrYjNkeklEMGdjSEp2WTJWemN5NXdiR0YwWm05eWJTQTlQVDBnSjNkcGJqTXlKenRjY2x4dWRtRnlJSFYwYVd3Z1BTQnlaWEYxYVhKbEtDZDFkR2xzSnlrN1hISmNibHh5WEc1Y2NseHVMeThnY21WemIyeDJaWE1nTGlCaGJtUWdMaTRnWld4bGJXVnVkSE1nYVc0Z1lTQndZWFJvSUdGeWNtRjVJSGRwZEdnZ1pHbHlaV04wYjNKNUlHNWhiV1Z6SUhSb1pYSmxYSEpjYmk4dklHMTFjM1FnWW1VZ2JtOGdjMnhoYzJobGN5QnZjaUJrWlhacFkyVWdibUZ0WlhNZ0tHTTZYRndwSUdsdUlIUm9aU0JoY25KaGVWeHlYRzR2THlBb2MyOGdZV3h6YnlCdWJ5QnNaV0ZrYVc1bklHRnVaQ0IwY21GcGJHbHVaeUJ6YkdGemFHVnpJQzBnYVhRZ1pHOWxjeUJ1YjNRZ1pHbHpkR2x1WjNWcGMyaGNjbHh1THk4Z2NtVnNZWFJwZG1VZ1lXNWtJR0ZpYzI5c2RYUmxJSEJoZEdoektWeHlYRzVtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZCY25KaGVTaHdZWEowY3l3Z1lXeHNiM2RCWW05MlpWSnZiM1FwSUh0Y2NseHVJQ0IyWVhJZ2NtVnpJRDBnVzEwN1hISmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCd1lYSjBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ2RtRnlJSEFnUFNCd1lYSjBjMXRwWFR0Y2NseHVYSEpjYmlBZ0lDQXZMeUJwWjI1dmNtVWdaVzF3ZEhrZ2NHRnlkSE5jY2x4dUlDQWdJR2xtSUNnaGNDQjhmQ0J3SUQwOVBTQW5MaWNwWEhKY2JpQWdJQ0FnSUdOdmJuUnBiblZsTzF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2h3SUQwOVBTQW5MaTRuS1NCN1hISmNiaUFnSUNBZ0lHbG1JQ2h5WlhNdWJHVnVaM1JvSUNZbUlISmxjMXR5WlhNdWJHVnVaM1JvSUMwZ01WMGdJVDA5SUNjdUxpY3BJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYTXVjRzl3S0NrN1hISmNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZV3hzYjNkQlltOTJaVkp2YjNRcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhNdWNIVnphQ2duTGk0bktUdGNjbHh1SUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdjbVZ6TG5CMWMyZ29jQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdjbVZ6TzF4eVhHNTlYSEpjYmx4eVhHNHZMeUJ5WlhSMWNtNXpJR0Z1SUdGeWNtRjVJSGRwZEdnZ1pXMXdkSGtnWld4bGJXVnVkSE1nY21WdGIzWmxaQ0JtY205dElHVnBkR2hsY2lCbGJtUWdiMllnZEdobElHbHVjSFYwWEhKY2JpOHZJR0Z5Y21GNUlHOXlJSFJvWlNCdmNtbG5hVzVoYkNCaGNuSmhlU0JwWmlCdWJ5QmxiR1Z0Wlc1MGN5QnVaV1ZrSUhSdklHSmxJSEpsYlc5MlpXUmNjbHh1Wm5WdVkzUnBiMjRnZEhKcGJVRnljbUY1S0dGeWNpa2dlMXh5WEc0Z0lIWmhjaUJzWVhOMFNXNWtaWGdnUFNCaGNuSXViR1Z1WjNSb0lDMGdNVHRjY2x4dUlDQjJZWElnYzNSaGNuUWdQU0F3TzF4eVhHNGdJR1p2Y2lBb095QnpkR0Z5ZENBOFBTQnNZWE4wU1c1a1pYZzdJSE4wWVhKMEt5c3BJSHRjY2x4dUlDQWdJR2xtSUNoaGNuSmJjM1JoY25SZEtWeHlYRzRnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhaaGNpQmxibVFnUFNCc1lYTjBTVzVrWlhnN1hISmNiaUFnWm05eUlDZzdJR1Z1WkNBK1BTQXdPeUJsYm1RdExTa2dlMXh5WEc0Z0lDQWdhV1lnS0dGeWNsdGxibVJkS1Z4eVhHNGdJQ0FnSUNCaWNtVmhhenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR2xtSUNoemRHRnlkQ0E5UFQwZ01DQW1KaUJsYm1RZ1BUMDlJR3hoYzNSSmJtUmxlQ2xjY2x4dUlDQWdJSEpsZEhWeWJpQmhjbkk3WEhKY2JpQWdhV1lnS0hOMFlYSjBJRDRnWlc1a0tWeHlYRzRnSUNBZ2NtVjBkWEp1SUZ0ZE8xeHlYRzRnSUhKbGRIVnliaUJoY25JdWMyeHBZMlVvYzNSaGNuUXNJR1Z1WkNBcklERXBPMXh5WEc1OVhISmNibHh5WEc0dkx5QlNaV2RsZUNCMGJ5QnpjR3hwZENCaElIZHBibVJ2ZDNNZ2NHRjBhQ0JwYm5SdklIUm9jbVZsSUhCaGNuUnpPaUJiS2l3Z1pHVjJhV05sTENCemJHRnphQ3hjY2x4dUx5OGdkR0ZwYkYwZ2QybHVaRzkzY3kxdmJteDVYSEpjYm5aaGNpQnpjR3hwZEVSbGRtbGpaVkpsSUQxY2NseHVJQ0FnSUM5ZUtGdGhMWHBCTFZwZE9ueGJYRnhjWEZ4Y0wxMTdNbjFiWGx4Y1hGeGNYQzlkSzF0Y1hGeGNYRnd2WFN0YlhseGNYRnhjWEM5ZEt5ay9LRnRjWEZ4Y1hGd3ZYU2svS0Z0Y1hITmNYRk5kS2o4cEpDODdYSEpjYmx4eVhHNHZMeUJTWldkbGVDQjBieUJ6Y0d4cGRDQjBhR1VnZEdGcGJDQndZWEowSUc5bUlIUm9aU0JoWW05MlpTQnBiblJ2SUZzcUxDQmthWElzSUdKaGMyVnVZVzFsTENCbGVIUmRYSEpjYm5aaGNpQnpjR3hwZEZSaGFXeFNaU0E5WEhKY2JpQWdJQ0F2WGloYlhGeHpYRnhUWFNvL0tTZ29QenBjWEM1N01Td3lmWHhiWGx4Y1hGeGNYQzlkS3o5OEtTaGNYQzViWGk1Y1hDOWNYRnhjWFNwOEtTa29QenBiWEZ4Y1hGeGNMMTBxS1NRdk8xeHlYRzVjY2x4dWRtRnlJSGRwYmpNeUlEMGdlMzA3WEhKY2JseHlYRzR2THlCR2RXNWpkR2x2YmlCMGJ5QnpjR3hwZENCaElHWnBiR1Z1WVcxbElHbHVkRzhnVzNKdmIzUXNJR1JwY2l3Z1ltRnpaVzVoYldVc0lHVjRkRjFjY2x4dVpuVnVZM1JwYjI0Z2QybHVNekpUY0d4cGRGQmhkR2dvWm1sc1pXNWhiV1VwSUh0Y2NseHVJQ0F2THlCVFpYQmhjbUYwWlNCa1pYWnBZMlVyYzJ4aGMyZ2dabkp2YlNCMFlXbHNYSEpjYmlBZ2RtRnlJSEpsYzNWc2RDQTlJSE53YkdsMFJHVjJhV05sVW1VdVpYaGxZeWhtYVd4bGJtRnRaU2tzWEhKY2JpQWdJQ0FnSUdSbGRtbGpaU0E5SUNoeVpYTjFiSFJiTVYwZ2ZId2dKeWNwSUNzZ0tISmxjM1ZzZEZzeVhTQjhmQ0FuSnlrc1hISmNiaUFnSUNBZ0lIUmhhV3dnUFNCeVpYTjFiSFJiTTEwZ2ZId2dKeWM3WEhKY2JpQWdMeThnVTNCc2FYUWdkR2hsSUhSaGFXd2dhVzUwYnlCa2FYSXNJR0poYzJWdVlXMWxJR0Z1WkNCbGVIUmxibk5wYjI1Y2NseHVJQ0IyWVhJZ2NtVnpkV3gwTWlBOUlITndiR2wwVkdGcGJGSmxMbVY0WldNb2RHRnBiQ2tzWEhKY2JpQWdJQ0FnSUdScGNpQTlJSEpsYzNWc2RESmJNVjBzWEhKY2JpQWdJQ0FnSUdKaGMyVnVZVzFsSUQwZ2NtVnpkV3gwTWxzeVhTeGNjbHh1SUNBZ0lDQWdaWGgwSUQwZ2NtVnpkV3gwTWxzelhUdGNjbHh1SUNCeVpYUjFjbTRnVzJSbGRtbGpaU3dnWkdseUxDQmlZWE5sYm1GdFpTd2daWGgwWFR0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdkMmx1TXpKVGRHRjBVR0YwYUNod1lYUm9LU0I3WEhKY2JpQWdkbUZ5SUhKbGMzVnNkQ0E5SUhOd2JHbDBSR1YyYVdObFVtVXVaWGhsWXlod1lYUm9LU3hjY2x4dUlDQWdJQ0FnWkdWMmFXTmxJRDBnY21WemRXeDBXekZkSUh4OElDY25MRnh5WEc0Z0lDQWdJQ0JwYzFWdVl5QTlJQ0VoWkdWMmFXTmxJQ1ltSUdSbGRtbGpaVnN4WFNBaFBUMGdKem9uTzF4eVhHNGdJSEpsZEhWeWJpQjdYSEpjYmlBZ0lDQmtaWFpwWTJVNklHUmxkbWxqWlN4Y2NseHVJQ0FnSUdselZXNWpPaUJwYzFWdVl5eGNjbHh1SUNBZ0lHbHpRV0p6YjJ4MWRHVTZJR2x6Vlc1aklIeDhJQ0VoY21WemRXeDBXekpkTENBdkx5QlZUa01nY0dGMGFITWdZWEpsSUdGc2QyRjVjeUJoWW5OdmJIVjBaVnh5WEc0Z0lDQWdkR0ZwYkRvZ2NtVnpkV3gwV3pOZFhISmNiaUFnZlR0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdibTl5YldGc2FYcGxWVTVEVW05dmRDaGtaWFpwWTJVcElIdGNjbHh1SUNCeVpYUjFjbTRnSjF4Y1hGeGNYRnhjSnlBcklHUmxkbWxqWlM1eVpYQnNZV05sS0M5ZVcxeGNYRnhjWEM5ZEt5OHNJQ2NuS1M1eVpYQnNZV05sS0M5YlhGeGNYRnhjTDEwckwyY3NJQ2RjWEZ4Y0p5azdYSEpjYm4xY2NseHVYSEpjYmk4dklIQmhkR2d1Y21WemIyeDJaU2hiWm5KdmJTQXVMaTVkTENCMGJ5bGNjbHh1ZDJsdU16SXVjbVZ6YjJ4MlpTQTlJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJSFpoY2lCeVpYTnZiSFpsWkVSbGRtbGpaU0E5SUNjbkxGeHlYRzRnSUNBZ0lDQnlaWE52YkhabFpGUmhhV3dnUFNBbkp5eGNjbHh1SUNBZ0lDQWdjbVZ6YjJ4MlpXUkJZbk52YkhWMFpTQTlJR1poYkhObE8xeHlYRzVjY2x4dUlDQm1iM0lnS0haaGNpQnBJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0F0SURFN0lHa2dQajBnTFRFN0lHa3RMU2tnZTF4eVhHNGdJQ0FnZG1GeUlIQmhkR2c3WEhKY2JpQWdJQ0JwWmlBb2FTQStQU0F3S1NCN1hISmNiaUFnSUNBZ0lIQmhkR2dnUFNCaGNtZDFiV1Z1ZEhOYmFWMDdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0Z5WlhOdmJIWmxaRVJsZG1salpTa2dlMXh5WEc0Z0lDQWdJQ0J3WVhSb0lEMGdjSEp2WTJWemN5NWpkMlFvS1R0Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUM4dklGZHBibVJ2ZDNNZ2FHRnpJSFJvWlNCamIyNWpaWEIwSUc5bUlHUnlhWFpsTFhOd1pXTnBabWxqSUdOMWNuSmxiblFnZDI5eWEybHVaMXh5WEc0Z0lDQWdJQ0F2THlCa2FYSmxZM1J2Y21sbGN5NGdTV1lnZDJVbmRtVWdjbVZ6YjJ4MlpXUWdZU0JrY21sMlpTQnNaWFIwWlhJZ1luVjBJRzV2ZENCNVpYUWdZVzVjY2x4dUlDQWdJQ0FnTHk4Z1lXSnpiMngxZEdVZ2NHRjBhQ3dnWjJWMElHTjNaQ0JtYjNJZ2RHaGhkQ0JrY21sMlpTNGdWMlVuY21VZ2MzVnlaU0IwYUdVZ1pHVjJhV05sSUdseklHNXZkRnh5WEc0Z0lDQWdJQ0F2THlCaGJpQjFibU1nY0dGMGFDQmhkQ0IwYUdseklIQnZhVzUwY3l3Z1ltVmpZWFZ6WlNCMWJtTWdjR0YwYUhNZ1lYSmxJR0ZzZDJGNWN5QmhZbk52YkhWMFpTNWNjbHh1SUNBZ0lDQWdjR0YwYUNBOUlIQnliMk5sYzNNdVpXNTJXeWM5SnlBcklISmxjMjlzZG1Wa1JHVjJhV05sWFR0Y2NseHVJQ0FnSUNBZ0x5OGdWbVZ5YVdaNUlIUm9ZWFFnWVNCa2NtbDJaUzFzYjJOaGJDQmpkMlFnZDJGeklHWnZkVzVrSUdGdVpDQjBhR0YwSUdsMElHRmpkSFZoYkd4NUlIQnZhVzUwYzF4eVhHNGdJQ0FnSUNBdkx5QjBieUJ2ZFhJZ1pISnBkbVV1SUVsbUlHNXZkQ3dnWkdWbVlYVnNkQ0IwYnlCMGFHVWdaSEpwZG1VbmN5QnliMjkwTGx4eVhHNGdJQ0FnSUNCcFppQW9JWEJoZEdnZ2ZId2djR0YwYUM1emRXSnpkSElvTUN3Z015a3VkRzlNYjNkbGNrTmhjMlVvS1NBaFBUMWNjbHh1SUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVZrUkdWMmFXTmxMblJ2VEc5M1pYSkRZWE5sS0NrZ0t5QW5YRnhjWENjcElIdGNjbHh1SUNBZ0lDQWdJQ0J3WVhSb0lEMGdjbVZ6YjJ4MlpXUkVaWFpwWTJVZ0t5QW5YRnhjWENjN1hISmNiaUFnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2THlCVGEybHdJR1Z0Y0hSNUlHRnVaQ0JwYm5aaGJHbGtJR1Z1ZEhKcFpYTmNjbHh1SUNBZ0lHbG1JQ2doZFhScGJDNXBjMU4wY21sdVp5aHdZWFJvS1NrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RCY21kMWJXVnVkSE1nZEc4Z2NHRjBhQzV5WlhOdmJIWmxJRzExYzNRZ1ltVWdjM1J5YVc1bmN5Y3BPMXh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doY0dGMGFDa2dlMXh5WEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCMllYSWdjbVZ6ZFd4MElEMGdkMmx1TXpKVGRHRjBVR0YwYUNod1lYUm9LU3hjY2x4dUlDQWdJQ0FnSUNCa1pYWnBZMlVnUFNCeVpYTjFiSFF1WkdWMmFXTmxMRnh5WEc0Z0lDQWdJQ0FnSUdselZXNWpJRDBnY21WemRXeDBMbWx6Vlc1akxGeHlYRzRnSUNBZ0lDQWdJR2x6UVdKemIyeDFkR1VnUFNCeVpYTjFiSFF1YVhOQlluTnZiSFYwWlN4Y2NseHVJQ0FnSUNBZ0lDQjBZV2xzSUQwZ2NtVnpkV3gwTG5SaGFXdzdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tHUmxkbWxqWlNBbUpseHlYRzRnSUNBZ0lDQWdJSEpsYzI5c2RtVmtSR1YyYVdObElDWW1YSEpjYmlBZ0lDQWdJQ0FnWkdWMmFXTmxMblJ2VEc5M1pYSkRZWE5sS0NrZ0lUMDlJSEpsYzI5c2RtVmtSR1YyYVdObExuUnZURzkzWlhKRFlYTmxLQ2twSUh0Y2NseHVJQ0FnSUNBZ0x5OGdWR2hwY3lCd1lYUm9JSEJ2YVc1MGN5QjBieUJoYm05MGFHVnlJR1JsZG1salpTQnpieUJwZENCcGN5QnViM1FnWVhCd2JHbGpZV0pzWlZ4eVhHNGdJQ0FnSUNCamIyNTBhVzUxWlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvSVhKbGMyOXNkbVZrUkdWMmFXTmxLU0I3WEhKY2JpQWdJQ0FnSUhKbGMyOXNkbVZrUkdWMmFXTmxJRDBnWkdWMmFXTmxPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdhV1lnS0NGeVpYTnZiSFpsWkVGaWMyOXNkWFJsS1NCN1hISmNiaUFnSUNBZ0lISmxjMjlzZG1Wa1ZHRnBiQ0E5SUhSaGFXd2dLeUFuWEZ4Y1hDY2dLeUJ5WlhOdmJIWmxaRlJoYVd3N1hISmNiaUFnSUNBZ0lISmxjMjlzZG1Wa1FXSnpiMngxZEdVZ1BTQnBjMEZpYzI5c2RYUmxPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDaHlaWE52YkhabFpFUmxkbWxqWlNBbUppQnlaWE52YkhabFpFRmljMjlzZFhSbEtTQjdYSEpjYmlBZ0lDQWdJR0p5WldGck8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0x5OGdRMjl1ZG1WeWRDQnpiR0Z6YUdWeklIUnZJR0poWTJ0emJHRnphR1Z6SUhkb1pXNGdZSEpsYzI5c2RtVmtSR1YyYVdObFlDQndiMmx1ZEhNZ2RHOGdZVzRnVlU1RFhISmNiaUFnTHk4Z2NtOXZkQzRnUVd4emJ5QnpjWFZoYzJnZ2JYVnNkR2x3YkdVZ2MyeGhjMmhsY3lCcGJuUnZJR0VnYzJsdVoyeGxJRzl1WlNCM2FHVnlaU0JoY0hCeWIzQnlhV0YwWlM1Y2NseHVJQ0JwWmlBb2FYTlZibU1wSUh0Y2NseHVJQ0FnSUhKbGMyOXNkbVZrUkdWMmFXTmxJRDBnYm05eWJXRnNhWHBsVlU1RFVtOXZkQ2h5WlhOdmJIWmxaRVJsZG1salpTazdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQXZMeUJCZENCMGFHbHpJSEJ2YVc1MElIUm9aU0J3WVhSb0lITm9iM1ZzWkNCaVpTQnlaWE52YkhabFpDQjBieUJoSUdaMWJHd2dZV0p6YjJ4MWRHVWdjR0YwYUN4Y2NseHVJQ0F2THlCaWRYUWdhR0Z1Wkd4bElISmxiR0YwYVhabElIQmhkR2h6SUhSdklHSmxJSE5oWm1VZ0tHMXBaMmgwSUdoaGNIQmxiaUIzYUdWdUlIQnliMk5sYzNNdVkzZGtLQ2xjY2x4dUlDQXZMeUJtWVdsc2N5bGNjbHh1WEhKY2JpQWdMeThnVG05eWJXRnNhWHBsSUhSb1pTQjBZV2xzSUhCaGRHaGNjbHh1SUNCeVpYTnZiSFpsWkZSaGFXd2dQU0J1YjNKdFlXeHBlbVZCY25KaGVTaHlaWE52YkhabFpGUmhhV3d1YzNCc2FYUW9MMXRjWEZ4Y1hGd3ZYU3N2S1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBaGNtVnpiMngyWldSQlluTnZiSFYwWlNrdWFtOXBiaWduWEZ4Y1hDY3BPMXh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdLSEpsYzI5c2RtVmtSR1YyYVdObElDc2dLSEpsYzI5c2RtVmtRV0p6YjJ4MWRHVWdQeUFuWEZ4Y1hDY2dPaUFuSnlrZ0t5QnlaWE52YkhabFpGUmhhV3dwSUh4OFhISmNiaUFnSUNBZ0lDQWdJQ2N1Snp0Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1M2FXNHpNaTV1YjNKdFlXeHBlbVVnUFNCbWRXNWpkR2x2Ymlod1lYUm9LU0I3WEhKY2JpQWdkbUZ5SUhKbGMzVnNkQ0E5SUhkcGJqTXlVM1JoZEZCaGRHZ29jR0YwYUNrc1hISmNiaUFnSUNBZ0lHUmxkbWxqWlNBOUlISmxjM1ZzZEM1a1pYWnBZMlVzWEhKY2JpQWdJQ0FnSUdselZXNWpJRDBnY21WemRXeDBMbWx6Vlc1akxGeHlYRzRnSUNBZ0lDQnBjMEZpYzI5c2RYUmxJRDBnY21WemRXeDBMbWx6UVdKemIyeDFkR1VzWEhKY2JpQWdJQ0FnSUhSaGFXd2dQU0J5WlhOMWJIUXVkR0ZwYkN4Y2NseHVJQ0FnSUNBZ2RISmhhV3hwYm1kVGJHRnphQ0E5SUM5YlhGeGNYRnhjTDEwa0x5NTBaWE4wS0hSaGFXd3BPMXh5WEc1Y2NseHVJQ0F2THlCT2IzSnRZV3hwZW1VZ2RHaGxJSFJoYVd3Z2NHRjBhRnh5WEc0Z0lIUmhhV3dnUFNCdWIzSnRZV3hwZW1WQmNuSmhlU2gwWVdsc0xuTndiR2wwS0M5YlhGeGNYRnhjTDEwckx5a3NJQ0ZwYzBGaWMyOXNkWFJsS1M1cWIybHVLQ2RjWEZ4Y0p5azdYSEpjYmx4eVhHNGdJR2xtSUNnaGRHRnBiQ0FtSmlBaGFYTkJZbk52YkhWMFpTa2dlMXh5WEc0Z0lDQWdkR0ZwYkNBOUlDY3VKenRjY2x4dUlDQjlYSEpjYmlBZ2FXWWdLSFJoYVd3Z0ppWWdkSEpoYVd4cGJtZFRiR0Z6YUNrZ2UxeHlYRzRnSUNBZ2RHRnBiQ0FyUFNBblhGeGNYQ2M3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0F2THlCRGIyNTJaWEowSUhOc1lYTm9aWE1nZEc4Z1ltRmphM05zWVhOb1pYTWdkMmhsYmlCZ1pHVjJhV05sWUNCd2IybHVkSE1nZEc4Z1lXNGdWVTVESUhKdmIzUXVYSEpjYmlBZ0x5OGdRV3h6YnlCemNYVmhjMmdnYlhWc2RHbHdiR1VnYzJ4aGMyaGxjeUJwYm5SdklHRWdjMmx1WjJ4bElHOXVaU0IzYUdWeVpTQmhjSEJ5YjNCeWFXRjBaUzVjY2x4dUlDQnBaaUFvYVhOVmJtTXBJSHRjY2x4dUlDQWdJR1JsZG1salpTQTlJRzV2Y20xaGJHbDZaVlZPUTFKdmIzUW9aR1YyYVdObEtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lISmxkSFZ5YmlCa1pYWnBZMlVnS3lBb2FYTkJZbk52YkhWMFpTQS9JQ2RjWEZ4Y0p5QTZJQ2NuS1NBcklIUmhhV3c3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1ZDJsdU16SXVhWE5CWW5OdmJIVjBaU0E5SUdaMWJtTjBhVzl1S0hCaGRHZ3BJSHRjY2x4dUlDQnlaWFIxY200Z2QybHVNekpUZEdGMFVHRjBhQ2h3WVhSb0tTNXBjMEZpYzI5c2RYUmxPMXh5WEc1OU8xeHlYRzVjY2x4dWQybHVNekl1YW05cGJpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJSFpoY2lCd1lYUm9jeUE5SUZ0ZE8xeHlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0IyWVhJZ1lYSm5JRDBnWVhKbmRXMWxiblJ6VzJsZE8xeHlYRzRnSUNBZ2FXWWdLQ0YxZEdsc0xtbHpVM1J5YVc1bktHRnlaeWtwSUh0Y2NseHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25RWEpuZFcxbGJuUnpJSFJ2SUhCaGRHZ3VhbTlwYmlCdGRYTjBJR0psSUhOMGNtbHVaM01uS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdsbUlDaGhjbWNwSUh0Y2NseHVJQ0FnSUNBZ2NHRjBhSE11Y0hWemFDaGhjbWNwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dVhISmNiaUFnZG1GeUlHcHZhVzVsWkNBOUlIQmhkR2h6TG1wdmFXNG9KMXhjWEZ3bktUdGNjbHh1WEhKY2JpQWdMeThnVFdGclpTQnpkWEpsSUhSb1lYUWdkR2hsSUdwdmFXNWxaQ0J3WVhSb0lHUnZaWE51SjNRZ2MzUmhjblFnZDJsMGFDQjBkMjhnYzJ4aGMyaGxjeXdnWW1WallYVnpaVnh5WEc0Z0lDOHZJRzV2Y20xaGJHbDZaU2dwSUhkcGJHd2diV2x6ZEdGclpTQnBkQ0JtYjNJZ1lXNGdWVTVESUhCaGRHZ2dkR2hsYmk1Y2NseHVJQ0F2TDF4eVhHNGdJQzh2SUZSb2FYTWdjM1JsY0NCcGN5QnphMmx3Y0dWa0lIZG9aVzRnYVhRZ2FYTWdkbVZ5ZVNCamJHVmhjaUIwYUdGMElIUm9aU0IxYzJWeUlHRmpkSFZoYkd4NVhISmNiaUFnTHk4Z2FXNTBaVzVrWldRZ2RHOGdjRzlwYm5RZ1lYUWdZVzRnVlU1RElIQmhkR2d1SUZSb2FYTWdhWE1nWVhOemRXMWxaQ0IzYUdWdUlIUm9aU0JtYVhKemRGeHlYRzRnSUM4dklHNXZiaTFsYlhCMGVTQnpkSEpwYm1jZ1lYSm5kVzFsYm5SeklITjBZWEowY3lCM2FYUm9JR1Y0WVdOMGJIa2dkSGR2SUhOc1lYTm9aWE1nWm05c2JHOTNaV1FnWW5sY2NseHVJQ0F2THlCaGRDQnNaV0Z6ZENCdmJtVWdiVzl5WlNCdWIyNHRjMnhoYzJnZ1kyaGhjbUZqZEdWeUxseHlYRzRnSUM4dlhISmNiaUFnTHk4Z1RtOTBaU0IwYUdGMElHWnZjaUJ1YjNKdFlXeHBlbVVvS1NCMGJ5QjBjbVZoZENCaElIQmhkR2dnWVhNZ1lXNGdWVTVESUhCaGRHZ2dhWFFnYm1WbFpITWdkRzljY2x4dUlDQXZMeUJvWVhabElHRjBJR3hsWVhOMElESWdZMjl0Y0c5dVpXNTBjeXdnYzI4Z2QyVWdaRzl1SjNRZ1ptbHNkR1Z5SUdadmNpQjBhR0YwSUdobGNtVXVYSEpjYmlBZ0x5OGdWR2hwY3lCdFpXRnVjeUIwYUdGMElIUm9aU0IxYzJWeUlHTmhiaUIxYzJVZ2FtOXBiaUIwYnlCamIyNXpkSEoxWTNRZ1ZVNURJSEJoZEdoeklHWnliMjFjY2x4dUlDQXZMeUJoSUhObGNuWmxjaUJ1WVcxbElHRnVaQ0JoSUhOb1lYSmxJRzVoYldVN0lHWnZjaUJsZUdGdGNHeGxPbHh5WEc0Z0lDOHZJQ0FnY0dGMGFDNXFiMmx1S0NjdkwzTmxjblpsY2ljc0lDZHphR0Z5WlNjcElDMCtJQ2RjWEZ4Y1hGeGNYSE5sY25abGNseGNYRnh6YUdGeVpWeGNKeWxjY2x4dUlDQnBaaUFvSVM5ZVcxeGNYRnhjWEM5ZGV6SjlXMTVjWEZ4Y1hGd3ZYUzh1ZEdWemRDaHdZWFJvYzFzd1hTa3BJSHRjY2x4dUlDQWdJR3B2YVc1bFpDQTlJR3B2YVc1bFpDNXlaWEJzWVdObEtDOWVXMXhjWEZ4Y1hDOWRleklzZlM4c0lDZGNYRnhjSnlrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCeVpYUjFjbTRnZDJsdU16SXVibTl5YldGc2FYcGxLR3B2YVc1bFpDazdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVMeThnY0dGMGFDNXlaV3hoZEdsMlpTaG1jbTl0TENCMGJ5bGNjbHh1THk4Z2FYUWdkMmxzYkNCemIyeDJaU0IwYUdVZ2NtVnNZWFJwZG1VZ2NHRjBhQ0JtY205dElDZG1jbTl0SnlCMGJ5QW5kRzhuTENCbWIzSWdhVzV6ZEdGdVkyVTZYSEpjYmk4dklHWnliMjBnUFNBblF6cGNYRnhjYjNKaGJtUmxZVnhjWEZ4MFpYTjBYRnhjWEdGaFlTZGNjbHh1THk4Z2RHOGdQU0FuUXpwY1hGeGNiM0poYm1SbFlWeGNYRnhwYlhCc1hGeGNYR0ppWWlkY2NseHVMeThnVkdobElHOTFkSEIxZENCdlppQjBhR1VnWm5WdVkzUnBiMjRnYzJodmRXeGtJR0psT2lBbkxpNWNYRnhjTGk1Y1hGeGNhVzF3YkZ4Y1hGeGlZbUluWEhKY2JuZHBiak15TG5KbGJHRjBhWFpsSUQwZ1puVnVZM1JwYjI0b1puSnZiU3dnZEc4cElIdGNjbHh1SUNCbWNtOXRJRDBnZDJsdU16SXVjbVZ6YjJ4MlpTaG1jbTl0S1R0Y2NseHVJQ0IwYnlBOUlIZHBiak15TG5KbGMyOXNkbVVvZEc4cE8xeHlYRzVjY2x4dUlDQXZMeUIzYVc1a2IzZHpJR2x6SUc1dmRDQmpZWE5sSUhObGJuTnBkR2wyWlZ4eVhHNGdJSFpoY2lCc2IzZGxja1p5YjIwZ1BTQm1jbTl0TG5SdlRHOTNaWEpEWVhObEtDazdYSEpjYmlBZ2RtRnlJR3h2ZDJWeVZHOGdQU0IwYnk1MGIweHZkMlZ5UTJGelpTZ3BPMXh5WEc1Y2NseHVJQ0IyWVhJZ2RHOVFZWEowY3lBOUlIUnlhVzFCY25KaGVTaDBieTV6Y0d4cGRDZ25YRnhjWENjcEtUdGNjbHh1WEhKY2JpQWdkbUZ5SUd4dmQyVnlSbkp2YlZCaGNuUnpJRDBnZEhKcGJVRnljbUY1S0d4dmQyVnlSbkp2YlM1emNHeHBkQ2duWEZ4Y1hDY3BLVHRjY2x4dUlDQjJZWElnYkc5M1pYSlViMUJoY25SeklEMGdkSEpwYlVGeWNtRjVLR3h2ZDJWeVZHOHVjM0JzYVhRb0oxeGNYRnduS1NrN1hISmNibHh5WEc0Z0lIWmhjaUJzWlc1bmRHZ2dQU0JOWVhSb0xtMXBiaWhzYjNkbGNrWnliMjFRWVhKMGN5NXNaVzVuZEdnc0lHeHZkMlZ5Vkc5UVlYSjBjeTVzWlc1bmRHZ3BPMXh5WEc0Z0lIWmhjaUJ6WVcxbFVHRnlkSE5NWlc1bmRHZ2dQU0JzWlc1bmRHZzdYSEpjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnYVdZZ0tHeHZkMlZ5Um5KdmJWQmhjblJ6VzJsZElDRTlQU0JzYjNkbGNsUnZVR0Z5ZEhOYmFWMHBJSHRjY2x4dUlDQWdJQ0FnYzJGdFpWQmhjblJ6VEdWdVozUm9JRDBnYVR0Y2NseHVJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JwWmlBb2MyRnRaVkJoY25SelRHVnVaM1JvSUQwOUlEQXBJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQjBienRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSFpoY2lCdmRYUndkWFJRWVhKMGN5QTlJRnRkTzF4eVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNCellXMWxVR0Z5ZEhOTVpXNW5kR2c3SUdrZ1BDQnNiM2RsY2taeWIyMVFZWEowY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdiM1YwY0hWMFVHRnlkSE11Y0hWemFDZ25MaTRuS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUc5MWRIQjFkRkJoY25SeklEMGdiM1YwY0hWMFVHRnlkSE11WTI5dVkyRjBLSFJ2VUdGeWRITXVjMnhwWTJVb2MyRnRaVkJoY25SelRHVnVaM1JvS1NrN1hISmNibHh5WEc0Z0lISmxkSFZ5YmlCdmRYUndkWFJRWVhKMGN5NXFiMmx1S0NkY1hGeGNKeWs3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1ZDJsdU16SXVYMjFoYTJWTWIyNW5JRDBnWm5WdVkzUnBiMjRvY0dGMGFDa2dlMXh5WEc0Z0lDOHZJRTV2ZEdVNklIUm9hWE1nZDJsc2JDQXFjSEp2WW1GaWJIa3FJSFJvY205M0lITnZiV1YzYUdWeVpTNWNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlRkSEpwYm1jb2NHRjBhQ2twWEhKY2JpQWdJQ0J5WlhSMWNtNGdjR0YwYUR0Y2NseHVYSEpjYmlBZ2FXWWdLQ0Z3WVhSb0tTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z0p5YzdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQjJZWElnY21WemIyeDJaV1JRWVhSb0lEMGdkMmx1TXpJdWNtVnpiMngyWlNod1lYUm9LVHRjY2x4dVhISmNiaUFnYVdZZ0tDOWVXMkV0ZWtFdFdsMWNYRHBjWEZ4Y0x5NTBaWE4wS0hKbGMyOXNkbVZrVUdGMGFDa3BJSHRjY2x4dUlDQWdJQzh2SUhCaGRHZ2dhWE1nYkc5allXd2dabWxzWlhONWMzUmxiU0J3WVhSb0xDQjNhR2xqYUNCdVpXVmtjeUIwYnlCaVpTQmpiMjUyWlhKMFpXUmNjbHh1SUNBZ0lDOHZJSFJ2SUd4dmJtY2dWVTVESUhCaGRHZ3VYSEpjYmlBZ0lDQnlaWFIxY200Z0oxeGNYRnhjWEZ4Y1AxeGNYRnduSUNzZ2NtVnpiMngyWldSUVlYUm9PMXh5WEc0Z0lIMGdaV3h6WlNCcFppQW9MMTVjWEZ4Y1hGeGNYRnRlUHk1ZEx5NTBaWE4wS0hKbGMyOXNkbVZrVUdGMGFDa3BJSHRjY2x4dUlDQWdJQzh2SUhCaGRHZ2dhWE1nYm1WMGQyOXlheUJWVGtNZ2NHRjBhQ3dnZDJocFkyZ2dibVZsWkhNZ2RHOGdZbVVnWTI5dWRtVnlkR1ZrWEhKY2JpQWdJQ0F2THlCMGJ5QnNiMjVuSUZWT1F5QndZWFJvTGx4eVhHNGdJQ0FnY21WMGRYSnVJQ2RjWEZ4Y1hGeGNYRDljWEZ4Y1ZVNURYRnhjWENjZ0t5QnlaWE52YkhabFpGQmhkR2d1YzNWaWMzUnlhVzVuS0RJcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUhCaGRHZzdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVkMmx1TXpJdVpHbHlibUZ0WlNBOUlHWjFibU4wYVc5dUtIQmhkR2dwSUh0Y2NseHVJQ0IyWVhJZ2NtVnpkV3gwSUQwZ2QybHVNekpUY0d4cGRGQmhkR2dvY0dGMGFDa3NYSEpjYmlBZ0lDQWdJSEp2YjNRZ1BTQnlaWE4xYkhSYk1GMHNYSEpjYmlBZ0lDQWdJR1JwY2lBOUlISmxjM1ZzZEZzeFhUdGNjbHh1WEhKY2JpQWdhV1lnS0NGeWIyOTBJQ1ltSUNGa2FYSXBJSHRjY2x4dUlDQWdJQzh2SUU1dklHUnBjbTVoYldVZ2QyaGhkSE52WlhabGNseHlYRzRnSUNBZ2NtVjBkWEp1SUNjdUp6dGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHbG1JQ2hrYVhJcElIdGNjbHh1SUNBZ0lDOHZJRWwwSUdoaGN5QmhJR1JwY201aGJXVXNJSE4wY21sd0lIUnlZV2xzYVc1bklITnNZWE5vWEhKY2JpQWdJQ0JrYVhJZ1BTQmthWEl1YzNWaWMzUnlLREFzSUdScGNpNXNaVzVuZEdnZ0xTQXhLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQnliMjkwSUNzZ1pHbHlPMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibmRwYmpNeUxtSmhjMlZ1WVcxbElEMGdablZ1WTNScGIyNG9jR0YwYUN3Z1pYaDBLU0I3WEhKY2JpQWdkbUZ5SUdZZ1BTQjNhVzR6TWxOd2JHbDBVR0YwYUNod1lYUm9LVnN5WFR0Y2NseHVJQ0F2THlCVVQwUlBPaUJ0WVd0bElIUm9hWE1nWTI5dGNHRnlhWE52YmlCallYTmxMV2x1YzJWdWMybDBhWFpsSUc5dUlIZHBibVJ2ZDNNL1hISmNiaUFnYVdZZ0tHVjRkQ0FtSmlCbUxuTjFZbk4wY2lndE1TQXFJR1Y0ZEM1c1pXNW5kR2dwSUQwOVBTQmxlSFFwSUh0Y2NseHVJQ0FnSUdZZ1BTQm1Mbk4xWW5OMGNpZ3dMQ0JtTG14bGJtZDBhQ0F0SUdWNGRDNXNaVzVuZEdncE8xeHlYRzRnSUgxY2NseHVJQ0J5WlhSMWNtNGdaanRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUzYVc0ek1pNWxlSFJ1WVcxbElEMGdablZ1WTNScGIyNG9jR0YwYUNrZ2UxeHlYRzRnSUhKbGRIVnliaUIzYVc0ek1sTndiR2wwVUdGMGFDaHdZWFJvS1ZzelhUdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNTNhVzR6TWk1bWIzSnRZWFFnUFNCbWRXNWpkR2x2Ymlod1lYUm9UMkpxWldOMEtTQjdYSEpjYmlBZ2FXWWdLQ0YxZEdsc0xtbHpUMkpxWldOMEtIQmhkR2hQWW1wbFkzUXBLU0I3WEhKY2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0Z4eVhHNGdJQ0FnSUNBZ0lGd2lVR0Z5WVcxbGRHVnlJQ2R3WVhSb1QySnFaV04wSnlCdGRYTjBJR0psSUdGdUlHOWlhbVZqZEN3Z2JtOTBJRndpSUNzZ2RIbHdaVzltSUhCaGRHaFBZbXBsWTNSY2NseHVJQ0FnSUNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCMllYSWdjbTl2ZENBOUlIQmhkR2hQWW1wbFkzUXVjbTl2ZENCOGZDQW5KenRjY2x4dVhISmNiaUFnYVdZZ0tDRjFkR2xzTG1selUzUnlhVzVuS0hKdmIzUXBLU0I3WEhKY2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0Z4eVhHNGdJQ0FnSUNBZ0lGd2lKM0JoZEdoUFltcGxZM1F1Y205dmRDY2diWFZ6ZENCaVpTQmhJSE4wY21sdVp5QnZjaUIxYm1SbFptbHVaV1FzSUc1dmRDQmNJaUFyWEhKY2JpQWdJQ0FnSUNBZ2RIbHdaVzltSUhCaGRHaFBZbXBsWTNRdWNtOXZkRnh5WEc0Z0lDQWdLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSFpoY2lCa2FYSWdQU0J3WVhSb1QySnFaV04wTG1ScGNqdGNjbHh1SUNCMllYSWdZbUZ6WlNBOUlIQmhkR2hQWW1wbFkzUXVZbUZ6WlNCOGZDQW5KenRjY2x4dUlDQnBaaUFvSVdScGNpa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlHSmhjMlU3WEhKY2JpQWdmVnh5WEc0Z0lHbG1JQ2hrYVhKYlpHbHlMbXhsYm1kMGFDQXRJREZkSUQwOVBTQjNhVzR6TWk1elpYQXBJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQmthWElnS3lCaVlYTmxPMXh5WEc0Z0lIMWNjbHh1SUNCeVpYUjFjbTRnWkdseUlDc2dkMmx1TXpJdWMyVndJQ3NnWW1GelpUdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNTNhVzR6TWk1d1lYSnpaU0E5SUdaMWJtTjBhVzl1S0hCaGRHaFRkSEpwYm1jcElIdGNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlRkSEpwYm1jb2NHRjBhRk4wY21sdVp5a3BJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1hDSlFZWEpoYldWMFpYSWdKM0JoZEdoVGRISnBibWNuSUcxMWMzUWdZbVVnWVNCemRISnBibWNzSUc1dmRDQmNJaUFySUhSNWNHVnZaaUJ3WVhSb1UzUnlhVzVuWEhKY2JpQWdJQ0FwTzF4eVhHNGdJSDFjY2x4dUlDQjJZWElnWVd4c1VHRnlkSE1nUFNCM2FXNHpNbE53YkdsMFVHRjBhQ2h3WVhSb1UzUnlhVzVuS1R0Y2NseHVJQ0JwWmlBb0lXRnNiRkJoY25SeklIeDhJR0ZzYkZCaGNuUnpMbXhsYm1kMGFDQWhQVDBnTkNrZ2UxeHlYRzRnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa2x1ZG1Gc2FXUWdjR0YwYUNBblhDSWdLeUJ3WVhSb1UzUnlhVzVuSUNzZ1hDSW5YQ0lwTzF4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z2UxeHlYRzRnSUNBZ2NtOXZkRG9nWVd4c1VHRnlkSE5iTUYwc1hISmNiaUFnSUNCa2FYSTZJR0ZzYkZCaGNuUnpXekJkSUNzZ1lXeHNVR0Z5ZEhOYk1WMHVjMnhwWTJVb01Dd2dMVEVwTEZ4eVhHNGdJQ0FnWW1GelpUb2dZV3hzVUdGeWRITmJNbDBzWEhKY2JpQWdJQ0JsZUhRNklHRnNiRkJoY25Seld6TmRMRnh5WEc0Z0lDQWdibUZ0WlRvZ1lXeHNVR0Z5ZEhOYk1sMHVjMnhwWTJVb01Dd2dZV3hzVUdGeWRITmJNbDB1YkdWdVozUm9JQzBnWVd4c1VHRnlkSE5iTTEwdWJHVnVaM1JvS1Z4eVhHNGdJSDA3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1ZDJsdU16SXVjMlZ3SUQwZ0oxeGNYRnduTzF4eVhHNTNhVzR6TWk1a1pXeHBiV2wwWlhJZ1BTQW5PeWM3WEhKY2JseHlYRzVjY2x4dUx5OGdVM0JzYVhRZ1lTQm1hV3hsYm1GdFpTQnBiblJ2SUZ0eWIyOTBMQ0JrYVhJc0lHSmhjMlZ1WVcxbExDQmxlSFJkTENCMWJtbDRJSFpsY25OcGIyNWNjbHh1THk4Z0ozSnZiM1FuSUdseklHcDFjM1FnWVNCemJHRnphQ3dnYjNJZ2JtOTBhR2x1Wnk1Y2NseHVkbUZ5SUhOd2JHbDBVR0YwYUZKbElEMWNjbHh1SUNBZ0lDOWVLRnhjTHo5OEtTaGJYRnh6WEZ4VFhTby9LU2dvUHpwY1hDNTdNU3d5Zlh4YlhseGNMMTByUDN3cEtGeGNMbHRlTGx4Y0wxMHFmQ2twS0Q4NlcxeGNMMTBxS1NRdk8xeHlYRzUyWVhJZ2NHOXphWGdnUFNCN2ZUdGNjbHh1WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ3YjNOcGVGTndiR2wwVUdGMGFDaG1hV3hsYm1GdFpTa2dlMXh5WEc0Z0lISmxkSFZ5YmlCemNHeHBkRkJoZEdoU1pTNWxlR1ZqS0dacGJHVnVZVzFsS1M1emJHbGpaU2d4S1R0Y2NseHVmVnh5WEc1Y2NseHVYSEpjYmk4dklIQmhkR2d1Y21WemIyeDJaU2hiWm5KdmJTQXVMaTVkTENCMGJ5bGNjbHh1THk4Z2NHOXphWGdnZG1WeWMybHZibHh5WEc1d2IzTnBlQzV5WlhOdmJIWmxJRDBnWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnZG1GeUlISmxjMjlzZG1Wa1VHRjBhQ0E5SUNjbkxGeHlYRzRnSUNBZ0lDQnlaWE52YkhabFpFRmljMjlzZFhSbElEMGdabUZzYzJVN1hISmNibHh5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVRzZ2FTQStQU0F0TVNBbUppQWhjbVZ6YjJ4MlpXUkJZbk52YkhWMFpUc2dhUzB0S1NCN1hISmNiaUFnSUNCMllYSWdjR0YwYUNBOUlDaHBJRDQ5SURBcElEOGdZWEpuZFcxbGJuUnpXMmxkSURvZ2NISnZZMlZ6Y3k1amQyUW9LVHRjY2x4dVhISmNiaUFnSUNBdkx5QlRhMmx3SUdWdGNIUjVJR0Z1WkNCcGJuWmhiR2xrSUdWdWRISnBaWE5jY2x4dUlDQWdJR2xtSUNnaGRYUnBiQzVwYzFOMGNtbHVaeWh3WVhSb0tTa2dlMXh5WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkQmNtZDFiV1Z1ZEhNZ2RHOGdjR0YwYUM1eVpYTnZiSFpsSUcxMWMzUWdZbVVnYzNSeWFXNW5jeWNwTzF4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGNHRjBhQ2tnZTF4eVhHNGdJQ0FnSUNCamIyNTBhVzUxWlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaWE52YkhabFpGQmhkR2dnUFNCd1lYUm9JQ3NnSnk4bklDc2djbVZ6YjJ4MlpXUlFZWFJvTzF4eVhHNGdJQ0FnY21WemIyeDJaV1JCWW5OdmJIVjBaU0E5SUhCaGRHaGJNRjBnUFQwOUlDY3ZKenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJQzh2SUVGMElIUm9hWE1nY0c5cGJuUWdkR2hsSUhCaGRHZ2djMmh2ZFd4a0lHSmxJSEpsYzI5c2RtVmtJSFJ2SUdFZ1puVnNiQ0JoWW5OdmJIVjBaU0J3WVhSb0xDQmlkWFJjY2x4dUlDQXZMeUJvWVc1a2JHVWdjbVZzWVhScGRtVWdjR0YwYUhNZ2RHOGdZbVVnYzJGbVpTQW9iV2xuYUhRZ2FHRndjR1Z1SUhkb1pXNGdjSEp2WTJWemN5NWpkMlFvS1NCbVlXbHNjeWxjY2x4dVhISmNiaUFnTHk4Z1RtOXliV0ZzYVhwbElIUm9aU0J3WVhSb1hISmNiaUFnY21WemIyeDJaV1JRWVhSb0lEMGdibTl5YldGc2FYcGxRWEp5WVhrb2NtVnpiMngyWldSUVlYUm9Mbk53YkdsMEtDY3ZKeWtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSVhKbGMyOXNkbVZrUVdKemIyeDFkR1VwTG1wdmFXNG9KeThuS1R0Y2NseHVYSEpjYmlBZ2NtVjBkWEp1SUNnb2NtVnpiMngyWldSQlluTnZiSFYwWlNBL0lDY3ZKeUE2SUNjbktTQXJJSEpsYzI5c2RtVmtVR0YwYUNrZ2ZId2dKeTRuTzF4eVhHNTlPMXh5WEc1Y2NseHVMeThnY0dGMGFDNXViM0p0WVd4cGVtVW9jR0YwYUNsY2NseHVMeThnY0c5emFYZ2dkbVZ5YzJsdmJseHlYRzV3YjNOcGVDNXViM0p0WVd4cGVtVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYSEpjYmlBZ2RtRnlJR2x6UVdKemIyeDFkR1VnUFNCd2IzTnBlQzVwYzBGaWMyOXNkWFJsS0hCaGRHZ3BMRnh5WEc0Z0lDQWdJQ0IwY21GcGJHbHVaMU5zWVhOb0lEMGdjR0YwYUNBbUppQndZWFJvVzNCaGRHZ3ViR1Z1WjNSb0lDMGdNVjBnUFQwOUlDY3ZKenRjY2x4dVhISmNiaUFnTHk4Z1RtOXliV0ZzYVhwbElIUm9aU0J3WVhSb1hISmNiaUFnY0dGMGFDQTlJRzV2Y20xaGJHbDZaVUZ5Y21GNUtIQmhkR2d1YzNCc2FYUW9KeThuS1N3Z0lXbHpRV0p6YjJ4MWRHVXBMbXB2YVc0b0p5OG5LVHRjY2x4dVhISmNiaUFnYVdZZ0tDRndZWFJvSUNZbUlDRnBjMEZpYzI5c2RYUmxLU0I3WEhKY2JpQWdJQ0J3WVhSb0lEMGdKeTRuTzF4eVhHNGdJSDFjY2x4dUlDQnBaaUFvY0dGMGFDQW1KaUIwY21GcGJHbHVaMU5zWVhOb0tTQjdYSEpjYmlBZ0lDQndZWFJvSUNzOUlDY3ZKenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQW9hWE5CWW5OdmJIVjBaU0EvSUNjdkp5QTZJQ2NuS1NBcklIQmhkR2c3WEhKY2JuMDdYSEpjYmx4eVhHNHZMeUJ3YjNOcGVDQjJaWEp6YVc5dVhISmNibkJ2YzJsNExtbHpRV0p6YjJ4MWRHVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYSEpjYmlBZ2NtVjBkWEp1SUhCaGRHZ3VZMmhoY2tGMEtEQXBJRDA5UFNBbkx5YzdYSEpjYm4wN1hISmNibHh5WEc0dkx5QndiM05wZUNCMlpYSnphVzl1WEhKY2JuQnZjMmw0TG1wdmFXNGdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0IyWVhJZ2NHRjBhQ0E5SUNjbk8xeHlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0IyWVhJZ2MyVm5iV1Z1ZENBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjY2x4dUlDQWdJR2xtSUNnaGRYUnBiQzVwYzFOMGNtbHVaeWh6WldkdFpXNTBLU2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRITWdkRzhnY0dGMGFDNXFiMmx1SUcxMWMzUWdZbVVnYzNSeWFXNW5jeWNwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYVdZZ0tITmxaMjFsYm5RcElIdGNjbHh1SUNBZ0lDQWdhV1lnS0NGd1lYUm9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2NHRjBhQ0FyUFNCelpXZHRaVzUwTzF4eVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lIQmhkR2dnS3owZ0p5OG5JQ3NnYzJWbmJXVnVkRHRjY2x4dUlDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z2NHOXphWGd1Ym05eWJXRnNhWHBsS0hCaGRHZ3BPMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNiaTh2SUhCaGRHZ3VjbVZzWVhScGRtVW9abkp2YlN3Z2RHOHBYSEpjYmk4dklIQnZjMmw0SUhabGNuTnBiMjVjY2x4dWNHOXphWGd1Y21Wc1lYUnBkbVVnUFNCbWRXNWpkR2x2YmlobWNtOXRMQ0IwYnlrZ2UxeHlYRzRnSUdaeWIyMGdQU0J3YjNOcGVDNXlaWE52YkhabEtHWnliMjBwTG5OMVluTjBjaWd4S1R0Y2NseHVJQ0IwYnlBOUlIQnZjMmw0TG5KbGMyOXNkbVVvZEc4cExuTjFZbk4wY2lneEtUdGNjbHh1WEhKY2JpQWdkbUZ5SUdaeWIyMVFZWEowY3lBOUlIUnlhVzFCY25KaGVTaG1jbTl0TG5Od2JHbDBLQ2N2SnlrcE8xeHlYRzRnSUhaaGNpQjBiMUJoY25SeklEMGdkSEpwYlVGeWNtRjVLSFJ2TG5Od2JHbDBLQ2N2SnlrcE8xeHlYRzVjY2x4dUlDQjJZWElnYkdWdVozUm9JRDBnVFdGMGFDNXRhVzRvWm5KdmJWQmhjblJ6TG14bGJtZDBhQ3dnZEc5UVlYSjBjeTVzWlc1bmRHZ3BPMXh5WEc0Z0lIWmhjaUJ6WVcxbFVHRnlkSE5NWlc1bmRHZ2dQU0JzWlc1bmRHZzdYSEpjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnYVdZZ0tHWnliMjFRWVhKMGMxdHBYU0FoUFQwZ2RHOVFZWEowYzF0cFhTa2dlMXh5WEc0Z0lDQWdJQ0J6WVcxbFVHRnlkSE5NWlc1bmRHZ2dQU0JwTzF4eVhHNGdJQ0FnSUNCaWNtVmhhenRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSFpoY2lCdmRYUndkWFJRWVhKMGN5QTlJRnRkTzF4eVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNCellXMWxVR0Z5ZEhOTVpXNW5kR2c3SUdrZ1BDQm1jbTl0VUdGeWRITXViR1Z1WjNSb095QnBLeXNwSUh0Y2NseHVJQ0FnSUc5MWRIQjFkRkJoY25SekxuQjFjMmdvSnk0dUp5azdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnZkWFJ3ZFhSUVlYSjBjeUE5SUc5MWRIQjFkRkJoY25SekxtTnZibU5oZENoMGIxQmhjblJ6TG5Oc2FXTmxLSE5oYldWUVlYSjBjMHhsYm1kMGFDa3BPMXh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdiM1YwY0hWMFVHRnlkSE11YW05cGJpZ25MeWNwTzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5CdmMybDRMbDl0WVd0bFRHOXVaeUE5SUdaMWJtTjBhVzl1S0hCaGRHZ3BJSHRjY2x4dUlDQnlaWFIxY200Z2NHRjBhRHRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzV3YjNOcGVDNWthWEp1WVcxbElEMGdablZ1WTNScGIyNG9jR0YwYUNrZ2UxeHlYRzRnSUhaaGNpQnlaWE4xYkhRZ1BTQndiM05wZUZOd2JHbDBVR0YwYUNod1lYUm9LU3hjY2x4dUlDQWdJQ0FnY205dmRDQTlJSEpsYzNWc2RGc3dYU3hjY2x4dUlDQWdJQ0FnWkdseUlEMGdjbVZ6ZFd4MFd6RmRPMXh5WEc1Y2NseHVJQ0JwWmlBb0lYSnZiM1FnSmlZZ0lXUnBjaWtnZTF4eVhHNGdJQ0FnTHk4Z1RtOGdaR2x5Ym1GdFpTQjNhR0YwYzI5bGRtVnlYSEpjYmlBZ0lDQnlaWFIxY200Z0p5NG5PMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdhV1lnS0dScGNpa2dlMXh5WEc0Z0lDQWdMeThnU1hRZ2FHRnpJR0VnWkdseWJtRnRaU3dnYzNSeWFYQWdkSEpoYVd4cGJtY2djMnhoYzJoY2NseHVJQ0FnSUdScGNpQTlJR1JwY2k1emRXSnpkSElvTUN3Z1pHbHlMbXhsYm1kMGFDQXRJREVwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY21WMGRYSnVJSEp2YjNRZ0t5QmthWEk3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1Y0c5emFYZ3VZbUZ6Wlc1aGJXVWdQU0JtZFc1amRHbHZiaWh3WVhSb0xDQmxlSFFwSUh0Y2NseHVJQ0IyWVhJZ1ppQTlJSEJ2YzJsNFUzQnNhWFJRWVhSb0tIQmhkR2dwV3pKZE8xeHlYRzRnSUM4dklGUlBSRTg2SUcxaGEyVWdkR2hwY3lCamIyMXdZWEpwYzI5dUlHTmhjMlV0YVc1elpXNXphWFJwZG1VZ2IyNGdkMmx1Wkc5M2N6OWNjbHh1SUNCcFppQW9aWGgwSUNZbUlHWXVjM1ZpYzNSeUtDMHhJQ29nWlhoMExteGxibWQwYUNrZ1BUMDlJR1Y0ZENrZ2UxeHlYRzRnSUNBZ1ppQTlJR1l1YzNWaWMzUnlLREFzSUdZdWJHVnVaM1JvSUMwZ1pYaDBMbXhsYm1kMGFDazdYSEpjYmlBZ2ZWeHlYRzRnSUhKbGRIVnliaUJtTzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5CdmMybDRMbVY0ZEc1aGJXVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYSEpjYmlBZ2NtVjBkWEp1SUhCdmMybDRVM0JzYVhSUVlYUm9LSEJoZEdncFd6TmRPMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibkJ2YzJsNExtWnZjbTFoZENBOUlHWjFibU4wYVc5dUtIQmhkR2hQWW1wbFkzUXBJSHRjY2x4dUlDQnBaaUFvSVhWMGFXd3VhWE5QWW1wbFkzUW9jR0YwYUU5aWFtVmpkQ2twSUh0Y2NseHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdYQ0pRWVhKaGJXVjBaWElnSjNCaGRHaFBZbXBsWTNRbklHMTFjM1FnWW1VZ1lXNGdiMkpxWldOMExDQnViM1FnWENJZ0t5QjBlWEJsYjJZZ2NHRjBhRTlpYW1WamRGeHlYRzRnSUNBZ0tUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIWmhjaUJ5YjI5MElEMGdjR0YwYUU5aWFtVmpkQzV5YjI5MElIeDhJQ2NuTzF4eVhHNWNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlRkSEpwYm1jb2NtOXZkQ2twSUh0Y2NseHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdYQ0luY0dGMGFFOWlhbVZqZEM1eWIyOTBKeUJ0ZFhOMElHSmxJR0VnYzNSeWFXNW5JRzl5SUhWdVpHVm1hVzVsWkN3Z2JtOTBJRndpSUN0Y2NseHVJQ0FnSUNBZ0lDQjBlWEJsYjJZZ2NHRjBhRTlpYW1WamRDNXliMjkwWEhKY2JpQWdJQ0FwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnZG1GeUlHUnBjaUE5SUhCaGRHaFBZbXBsWTNRdVpHbHlJRDhnY0dGMGFFOWlhbVZqZEM1a2FYSWdLeUJ3YjNOcGVDNXpaWEFnT2lBbkp6dGNjbHh1SUNCMllYSWdZbUZ6WlNBOUlIQmhkR2hQWW1wbFkzUXVZbUZ6WlNCOGZDQW5KenRjY2x4dUlDQnlaWFIxY200Z1pHbHlJQ3NnWW1GelpUdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNXdiM05wZUM1d1lYSnpaU0E5SUdaMWJtTjBhVzl1S0hCaGRHaFRkSEpwYm1jcElIdGNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlRkSEpwYm1jb2NHRjBhRk4wY21sdVp5a3BJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1hDSlFZWEpoYldWMFpYSWdKM0JoZEdoVGRISnBibWNuSUcxMWMzUWdZbVVnWVNCemRISnBibWNzSUc1dmRDQmNJaUFySUhSNWNHVnZaaUJ3WVhSb1UzUnlhVzVuWEhKY2JpQWdJQ0FwTzF4eVhHNGdJSDFjY2x4dUlDQjJZWElnWVd4c1VHRnlkSE1nUFNCd2IzTnBlRk53YkdsMFVHRjBhQ2h3WVhSb1UzUnlhVzVuS1R0Y2NseHVJQ0JwWmlBb0lXRnNiRkJoY25SeklIeDhJR0ZzYkZCaGNuUnpMbXhsYm1kMGFDQWhQVDBnTkNrZ2UxeHlYRzRnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa2x1ZG1Gc2FXUWdjR0YwYUNBblhDSWdLeUJ3WVhSb1UzUnlhVzVuSUNzZ1hDSW5YQ0lwTzF4eVhHNGdJSDFjY2x4dUlDQmhiR3hRWVhKMGMxc3hYU0E5SUdGc2JGQmhjblJ6V3pGZElIeDhJQ2NuTzF4eVhHNGdJR0ZzYkZCaGNuUnpXekpkSUQwZ1lXeHNVR0Z5ZEhOYk1sMGdmSHdnSnljN1hISmNiaUFnWVd4c1VHRnlkSE5iTTEwZ1BTQmhiR3hRWVhKMGMxc3pYU0I4ZkNBbkp6dGNjbHh1WEhKY2JpQWdjbVYwZFhKdUlIdGNjbHh1SUNBZ0lISnZiM1E2SUdGc2JGQmhjblJ6V3pCZExGeHlYRzRnSUNBZ1pHbHlPaUJoYkd4UVlYSjBjMXN3WFNBcklHRnNiRkJoY25Seld6RmRMbk5zYVdObEtEQXNJQzB4S1N4Y2NseHVJQ0FnSUdKaGMyVTZJR0ZzYkZCaGNuUnpXekpkTEZ4eVhHNGdJQ0FnWlhoME9pQmhiR3hRWVhKMGMxc3pYU3hjY2x4dUlDQWdJRzVoYldVNklHRnNiRkJoY25Seld6SmRMbk5zYVdObEtEQXNJR0ZzYkZCaGNuUnpXekpkTG14bGJtZDBhQ0F0SUdGc2JGQmhjblJ6V3pOZExteGxibWQwYUNsY2NseHVJQ0I5TzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5CdmMybDRMbk5sY0NBOUlDY3ZKenRjY2x4dWNHOXphWGd1WkdWc2FXMXBkR1Z5SUQwZ0p6b25PMXh5WEc1Y2NseHVYSEpjYm1sbUlDaHBjMWRwYm1SdmQzTXBYSEpjYmlBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCM2FXNHpNanRjY2x4dVpXeHpaU0F2S2lCd2IzTnBlQ0FxTDF4eVhHNGdJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjRzl6YVhnN1hISmNibHh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeTV3YjNOcGVDQTlJSEJ2YzJsNE8xeHlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5NTNhVzR6TWlBOUlIZHBiak15TzF4eVhHNWNibHh1WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk5Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU1hHNHZMeUF1TDM0dmNHRjBhQzl3WVhSb0xtcHpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQTFYRzR2THlCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUNJc0ltVjRjRzl5ZENBcUlHWnliMjBnSnk0dmNHRjBhQ2M3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmFXNWtaWGd1ZEhNaUxDSmxlSEJ2Y25RZ1kyOXVjM1FnYm05dmNDQTlJQ2htY205dE9pQnpkSEpwYm1jc0lIUnZPaUJ6ZEhKcGJtY3BPaUJ6ZEhKcGJtY2dQVDRnZTF4dUlDQjBhSEp2ZHlCRmNuSnZjaWduYldWMGFHOWtJSFZ1YzNWd2NHOXlkR1ZrSUdsdUlHbHpiMjF2Y25Cb2FXTXRjR0YwYUNjcE8xeHVmVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5dWIyOXdMblJ6SWl3aVpYaHdiM0owSUdOdmJuTjBJR2x6VFdGaklEMGdLQ2s2SUdKdmIyeGxZVzRnUFQ0Z2UxeHVJQ0JwWmlBb2NISnZZMlZ6YzF4dUlDQW1KaUIwZVhCbGIyWWdjSEp2WTJWemN5NXdiR0YwWm05eWJTQTlQVDBnSjNOMGNtbHVaeWRjYmlBZ0ppWWdjSEp2WTJWemN5NXdiR0YwWm05eWJTNTBiMHh2ZDJWeVEyRnpaU2dwSUQwOVBTQW5aR0Z5ZDJsdUp5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCdVlYWnBaMkYwYjNJZ0lUMDlJQ2QxYm1SbFptbHVaV1FuWEc0Z0lDWW1JSFI1Y0dWdlppQnVZWFpwWjJGMGIzSXVjR3hoZEdadmNtMGdQVDA5SUNkemRISnBibWNuWEc0Z0lDWW1JRzVoZG1sbllYUnZjaTV3YkdGMFptOXliUzUwYjB4dmQyVnlRMkZ6WlNncExtbHVaR1Y0VDJZb0oyMWhZeWNwSUQ0Z0xURXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMxZHBiaUE5SUNncE9pQmliMjlzWldGdUlEMCtJSHRjYmlBZ2FXWWdLSEJ5YjJObGMzTmNiaUFnSmlZZ2RIbHdaVzltSUhCeWIyTmxjM011Y0d4aGRHWnZjbTBnUFQwOUlDZHpkSEpwYm1jblhHNGdJQ1ltSUhCeWIyTmxjM011Y0d4aGRHWnZjbTB1ZEc5TWIzZGxja05oYzJVb0tTQTlQVDBnSjNkcGJqTXlKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQnVZWFpwWjJGMGIzSWdJVDA5SUNkMWJtUmxabWx1WldRblhHNGdJQ0FnSmlZZ2RIbHdaVzltSUc1aGRtbG5ZWFJ2Y2k1d2JHRjBabTl5YlNBOVBUMGdKM04wY21sdVp5ZGNiaUFnSUNBbUppQnVZWFpwWjJGMGIzSXVjR3hoZEdadmNtMHVkRzlNYjNkbGNrTmhjMlVvS1M1cGJtUmxlRTltS0NkM2FXNG5LU0ErSUMweEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOQ2NtOTNjMlZ5SUQwZ0tDazZJR0p2YjJ4bFlXNGdQVDRnZTF4dUlDQnlaWFIxY200Z2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDYzdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOT2IyUmxJRDBnS0NrNklHSnZiMnhsWVc0Z1BUNGdlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSGRwYm1SdmR5QTlQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkSGx3Wlc5bUlIQnliMk5sYzNNZ0lUMDlJQ2QxYm1SbFptbHVaV1FuTzF4dWZUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTl3YkdGMFptOXliUzUwY3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9pc29tb3JwaGljLXBhdGguYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbi8qIHRzVW5pdCAoYykgQ29weXJpZ2h0IDIwMTItMjAxNSBTdGV2ZSBGZW50b24sIGxpY2Vuc2VkIHVuZGVyIEFwYWNoZSAyLjAgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlLUZlbnRvbi90c1VuaXQgKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFRlc3Qge1xuICAgIGNvbnN0cnVjdG9yKC4uLnRlc3RNb2R1bGVzKSB7XG4gICAgICAgIHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeCA9ICdfJztcbiAgICAgICAgdGhpcy5wYXNzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgdGhpcy50ZXN0cyA9IFtdO1xuICAgICAgICB0aGlzLnJlc2VydmVkTWV0aG9kTmFtZUNvbnRhaW5lciA9IG5ldyBUZXN0Q2xhc3MoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUZXN0TGltaXRlcigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlc3RNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGVzdE1vZHVsZSA9IHRlc3RNb2R1bGVzW2ldO1xuICAgICAgICAgICAgaWYgKHRlc3RNb2R1bGUuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB0ZXN0TW9kdWxlW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRlc3RDbGFzcyhuZXcgdGVzdE1vZHVsZSwgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHRlc3RNb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUZXN0Q2xhc3MobmV3IHRlc3RNb2R1bGVbcHJvcF0sIHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRUZXN0Q2xhc3ModGVzdENsYXNzLCBuYW1lID0gJ1Rlc3RzJykge1xuICAgICAgICB0aGlzLnRlc3RzLnB1c2gobmV3IFRlc3REZWZpbml0aW9uKHRlc3RDbGFzcywgbmFtZSkpO1xuICAgIH1cbiAgICBydW4odGVzdFJ1bkxpbWl0ZXIgPSBudWxsKSB7XG4gICAgICAgIHZhciBwYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgdmFyIHRlc3RDb250ZXh0ID0gbmV3IFRlc3RDb250ZXh0KCk7XG4gICAgICAgIGlmICh0ZXN0UnVuTGltaXRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZXN0UnVuTGltaXRlciA9IHRoaXMudGVzdFJ1bkxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRlc3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdGVzdENsYXNzID0gdGhpcy50ZXN0c1tpXS50ZXN0Q2xhc3M7XG4gICAgICAgICAgICB2YXIgZHluYW1pY1Rlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgICAgIHZhciB0ZXN0c0dyb3VwTmFtZSA9IHRoaXMudGVzdHNbaV0ubmFtZTtcbiAgICAgICAgICAgIGlmICh0ZXN0UnVuTGltaXRlciAmJiAhdGVzdFJ1bkxpbWl0ZXIuaXNUZXN0c0dyb3VwQWN0aXZlKHRlc3RzR3JvdXBOYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBGdW5jdGlvblByb3BlcnR5SGVscGVyLmdldEZ1bmN0aW9uTmFtZXModGVzdENsYXNzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCB1bml0VGVzdE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2pdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmVzZXJ2ZWRGdW5jdGlvbk5hbWUodW5pdFRlc3ROYW1lKVxuICAgICAgICAgICAgICAgICAgICB8fCAodW5pdFRlc3ROYW1lLnN1YnN0cmluZygwLCB0aGlzLnByaXZhdGVNZW1iZXJQcmVmaXgubGVuZ3RoKSA9PT0gdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4KVxuICAgICAgICAgICAgICAgICAgICB8fCAodHlwZW9mIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXSAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgfHwgKHRlc3RSdW5MaW1pdGVyICYmICF0ZXN0UnVuTGltaXRlci5pc1Rlc3RBY3RpdmUodW5pdFRlc3ROYW1lKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLnBhcmFtZXRlcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcGFyYW1ldGVySW5kZXggPSAwOyBwYXJhbWV0ZXJJbmRleCA8IHBhcmFtZXRlcnMubGVuZ3RoOyBwYXJhbWV0ZXJJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIgJiYgIXRlc3RSdW5MaW1pdGVyLmlzUGFyYW1ldGVyc1NldEFjdGl2ZShwYXJhbWV0ZXJJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVuU2luZ2xlVGVzdCh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUsIHBhcmFtZXRlcnMsIHBhcmFtZXRlckluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5TaW5nbGVUZXN0KHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93UmVzdWx0cyh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGVsZW07XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGlkID0gdGFyZ2V0O1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0gPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRlbXBsYXRlID0gJzxhcnRpY2xlPicgK1xuICAgICAgICAgICAgJzxoMT4nICsgdGhpcy5nZXRUZXN0UmVzdWx0KCkgKyAnPC9oMT4nICtcbiAgICAgICAgICAgICc8cD4nICsgdGhpcy5nZXRUZXN0U3VtbWFyeSgpICsgJzwvcD4nICtcbiAgICAgICAgICAgIHRoaXMudGVzdFJ1bkxpbWl0ZXIuZ2V0TGltaXRDbGVhbmVyKCkgK1xuICAgICAgICAgICAgJzxzZWN0aW9uIGlkPVwidHNGYWlsXCI+JyArXG4gICAgICAgICAgICAnPGgyPkVycm9yczwvaDI+JyArXG4gICAgICAgICAgICAnPHVsIGNsYXNzPVwiYmFkXCI+JyArIHRoaXMuZ2V0VGVzdFJlc3VsdExpc3QodGhpcy5lcnJvcnMpICsgJzwvdWw+JyArXG4gICAgICAgICAgICAnPC9zZWN0aW9uPicgK1xuICAgICAgICAgICAgJzxzZWN0aW9uIGlkPVwidHNPa2F5XCI+JyArXG4gICAgICAgICAgICAnPGgyPlBhc3NpbmcgVGVzdHM8L2gyPicgK1xuICAgICAgICAgICAgJzx1bCBjbGFzcz1cImdvb2RcIj4nICsgdGhpcy5nZXRUZXN0UmVzdWx0TGlzdCh0aGlzLnBhc3NlcykgKyAnPC91bD4nICtcbiAgICAgICAgICAgICc8L3NlY3Rpb24+JyArXG4gICAgICAgICAgICAnPC9hcnRpY2xlPicgK1xuICAgICAgICAgICAgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdENsZWFuZXIoKTtcbiAgICAgICAgZWxlbS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldFRhcFJlc3VsdHMoKSB7XG4gICAgICAgIHZhciBuZXdMaW5lID0gJ1xcclxcbic7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9ICcxLi4nICsgKHRoaXMucGFzc2VzLmxlbmd0aCArIHRoaXMuZXJyb3JzLmxlbmd0aCkudG9TdHJpbmcoKSArIG5ld0xpbmU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBsYXRlICs9ICdub3Qgb2sgJyArIHRoaXMuZXJyb3JzW2ldLm1lc3NhZ2UgKyAnICcgKyB0aGlzLmVycm9yc1tpXS50ZXN0TmFtZSArICc6JyArIHRoaXMuZXJyb3JzW2ldLmZ1bmNOYW1lICsgbmV3TGluZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSAnb2sgJyArIHRoaXMucGFzc2VzW2ldLnRlc3ROYW1lICsgJzonICsgdGhpcy5wYXNzZXNbaV0uZnVuY05hbWUgKyBuZXdMaW5lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgY3JlYXRlVGVzdExpbWl0ZXIoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RSdW5MaW1pdGVyID0gbmV3IFRlc3RSdW5MaW1pdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7IH1cbiAgICB9XG4gICAgaXNSZXNlcnZlZEZ1bmN0aW9uTmFtZShmdW5jdGlvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvcGVydHlIZWxwZXJcbiAgICAgICAgICAgIC5nZXRGdW5jdGlvbk5hbWVzKHRoaXMucmVzZXJ2ZWRNZXRob2ROYW1lQ29udGFpbmVyKVxuICAgICAgICAgICAgLnNvbWUobWVtID0+IG1lbSA9PT0gZnVuY3Rpb25OYW1lKTtcbiAgICB9XG4gICAgcnVuU2luZ2xlVGVzdCh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUsIHBhcmFtZXRlcnMgPSBudWxsLCBwYXJhbWV0ZXJTZXRJbmRleCA9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXN0Q2xhc3NbJ3NldFVwJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRlc3RDbGFzc1snc2V0VXAnXSgpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgZHluYW1pY1Rlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gKHBhcmFtZXRlclNldEluZGV4ICE9PSBudWxsKSA/IHBhcmFtZXRlcnNbcGFyYW1ldGVyU2V0SW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5hcHBseSh0ZXN0Q2xhc3MsIGFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5wYXNzZXMucHVzaChuZXcgVGVzdERlc2NyaXB0aW9uKHRlc3RzR3JvdXBOYW1lLCB1bml0VGVzdE5hbWUsIHBhcmFtZXRlclNldEluZGV4LCAnT0snKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgVGVzdERlc2NyaXB0aW9uKHRlc3RzR3JvdXBOYW1lLCB1bml0VGVzdE5hbWUsIHBhcmFtZXRlclNldEluZGV4LCBlcnIudG9TdHJpbmcoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGVzdENsYXNzWyd0ZWFyRG93biddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0ZXN0Q2xhc3NbJ3RlYXJEb3duJ10oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRUZXN0UmVzdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID09PSAwID8gJ1Rlc3QgUGFzc2VkJyA6ICdUZXN0IEZhaWxlZCc7XG4gICAgfVxuICAgIGdldFRlc3RTdW1tYXJ5KCkge1xuICAgICAgICByZXR1cm4gJ1RvdGFsIHRlc3RzOiA8c3BhbiBpZD1cInRzVW5pdFRvdGFsQ291dFwiPicgKyAodGhpcy5wYXNzZXMubGVuZ3RoICsgdGhpcy5lcnJvcnMubGVuZ3RoKS50b1N0cmluZygpICsgJzwvc3Bhbj4uICcgK1xuICAgICAgICAgICAgJ1Bhc3NlZCB0ZXN0czogPHNwYW4gaWQ9XCJ0c1VuaXRQYXNzQ291bnRcIiBjbGFzcz1cImdvb2RcIj4nICsgdGhpcy5wYXNzZXMubGVuZ3RoICsgJzwvc3Bhbj4uICcgK1xuICAgICAgICAgICAgJ0ZhaWxlZCB0ZXN0czogPHNwYW4gaWQ9XCJ0c1VuaXRGYWlsQ291bnRcIiBjbGFzcz1cImJhZFwiPicgKyB0aGlzLmVycm9ycy5sZW5ndGggKyAnPC9zcGFuPi4nO1xuICAgIH1cbiAgICBnZXRUZXN0UmVzdWx0TGlzdCh0ZXN0UmVzdWx0cykge1xuICAgICAgICB2YXIgbGlzdCA9ICcnO1xuICAgICAgICB2YXIgZ3JvdXAgPSAnJztcbiAgICAgICAgdmFyIGlzRmlyc3QgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlc3RSZXN1bHRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGVzdFJlc3VsdHNbaV07XG4gICAgICAgICAgICBpZiAocmVzdWx0LnRlc3ROYW1lICE9PSBncm91cCkge1xuICAgICAgICAgICAgICAgIGdyb3VwID0gcmVzdWx0LnRlc3ROYW1lO1xuICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QgKz0gJzwvbGk+PC91bD4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXN0ICs9ICc8bGk+JyArIHRoaXMudGVzdFJ1bkxpbWl0ZXIuZ2V0TGltaXRlckZvckdyb3VwKGdyb3VwKSArIHJlc3VsdC50ZXN0TmFtZSArICc8dWw+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHRDbGFzcyA9IChyZXN1bHQubWVzc2FnZSA9PT0gJ09LJykgPyAnc3VjY2VzcycgOiAnZXJyb3InO1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTGFiYWwgPSByZXN1bHQuZnVuY05hbWUgKyAoKHJlc3VsdC5wYXJhbWV0ZXJTZXROdW1iZXIgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgPyAnKCknXG4gICAgICAgICAgICAgICAgOiAnKCcgKyB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0ZXJGb3JUZXN0KGdyb3VwLCByZXN1bHQuZnVuY05hbWUsIHJlc3VsdC5wYXJhbWV0ZXJTZXROdW1iZXIpICsgJyBwYXJhbWF0ZXIgc2V0OiAnICsgcmVzdWx0LnBhcmFtZXRlclNldE51bWJlciArICcpJyk7XG4gICAgICAgICAgICBsaXN0ICs9ICc8bGkgY2xhc3M9XCInICsgcmVzdWx0Q2xhc3MgKyAnXCI+JyArIHRoaXMudGVzdFJ1bkxpbWl0ZXIuZ2V0TGltaXRlckZvclRlc3QoZ3JvdXAsIHJlc3VsdC5mdW5jTmFtZSkgKyBmdW5jdGlvbkxhYmFsICsgJzogJyArIHRoaXMuZW5jb2RlSHRtbEVudGl0aWVzKHJlc3VsdC5tZXNzYWdlKSArICc8L2xpPic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3QgKyAnPC91bD4nO1xuICAgIH1cbiAgICBlbmNvZGVIdG1sRW50aXRpZXMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3QgPSBUZXN0O1xuY2xhc3MgVGVzdFJ1bkxpbWl0ZXJSdW5BbGwge1xuICAgIGlzVGVzdHNHcm91cEFjdGl2ZShncm91cE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlzVGVzdEFjdGl2ZSh0ZXN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaXNQYXJhbWV0ZXJzU2V0QWN0aXZlKHBhcmFtYXRlcnNTZXROdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuY2xhc3MgVGVzdFJ1bkxpbWl0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGVzdE5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmFtZXRlclNldCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0UmVmcmVzaE9uTGlua3NXaXRoSGFzaCgpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVN0cmluZ0ludG9UZXN0c0xpbWl0KHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICB9XG4gICAgaXNUZXN0c0dyb3VwQWN0aXZlKGdyb3VwTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5ncm91cE5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwTmFtZSA9PT0gZ3JvdXBOYW1lO1xuICAgIH1cbiAgICBpc1Rlc3RBY3RpdmUodGVzdE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMudGVzdE5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3ROYW1lID09PSB0ZXN0TmFtZTtcbiAgICB9XG4gICAgaXNQYXJhbWV0ZXJzU2V0QWN0aXZlKHBhcmFtYXRlcnNTZXQpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1ldGVyU2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJTZXQgPT09IHBhcmFtYXRlcnNTZXQ7XG4gICAgfVxuICAgIGdldExpbWl0ZXJGb3JUZXN0KGdyb3VwTmFtZSwgdGVzdE5hbWUsIHBhcmFtZXRlclNldCA9IG51bGwpIHtcbiAgICAgICAgaWYgKHBhcmFtZXRlclNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVzdE5hbWUgKz0gJygnICsgcGFyYW1ldGVyU2V0ICsgJyknO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJm5ic3A7PGEgaHJlZj1cIiMnICsgZ3JvdXBOYW1lICsgJy8nICsgdGVzdE5hbWUgKyAnXFxcIiBjbGFzcz1cImFzY2lpXCI+JiM5NjU4OzwvYT4mbmJzcDsnO1xuICAgIH1cbiAgICBnZXRMaW1pdGVyRm9yR3JvdXAoZ3JvdXBOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJm5ic3A7PGEgaHJlZj1cIiMnICsgZ3JvdXBOYW1lICsgJ1wiIGNsYXNzPVwiYXNjaWlcIj4mIzk2NTg7PC9hPiZuYnNwOyc7XG4gICAgfVxuICAgIGdldExpbWl0Q2xlYW5lcigpIHtcbiAgICAgICAgcmV0dXJuICc8cD48YSBocmVmPVwiI1wiPlJ1biBhbGwgdGVzdHMgPHNwYW4gY2xhc3M9XCJhc2NpaVwiPiYjOTY1ODs8L3NwYW4+PC9hPjwvcD4nO1xuICAgIH1cbiAgICBzZXRSZWZyZXNoT25MaW5rc1dpdGhIYXNoKCkge1xuICAgICAgICB2YXIgcHJldmlvdXNIYW5kbGVyID0gd2luZG93Lm9uaGFzaGNoYW5nZTtcbiAgICAgICAgd2luZG93Lm9uaGFzaGNoYW5nZSA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcmV2aW91c0hhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0hhbmRsZXIuY2FsbCh3aW5kb3csIGV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdHJhbnNsYXRlU3RyaW5nSW50b1Rlc3RzTGltaXQodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlZ2V4ID0gL14jKFtfYS16QS1aMC05XSspKChcXC8oW19hLXpBLVowLTldKykpKFxcKChbMC05XSspXFwpKT8pPyQvO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnZXguZXhlYyh2YWx1ZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDEgJiYgISFyZXN1bHRbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gcmVzdWx0WzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gNCAmJiAhIXJlc3VsdFs0XSkge1xuICAgICAgICAgICAgdGhpcy50ZXN0TmFtZSA9IHJlc3VsdFs0XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDYgJiYgISFyZXN1bHRbNl0pIHtcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVyU2V0ID0gcGFyc2VJbnQocmVzdWx0WzZdLCAxMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRlc3RSdW5MaW1pdGVyID0gVGVzdFJ1bkxpbWl0ZXI7XG5jbGFzcyBUZXN0Q29udGV4dCB7XG4gICAgc2V0VXAoKSB7XG4gICAgfVxuICAgIHRlYXJEb3duKCkge1xuICAgIH1cbiAgICBhcmVJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChleHBlY3RlZCAhPT0gYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVJZGVudGljYWwgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArXG4gICAgICAgICAgICAgICAgdGhpcy5wcmludFZhcmlhYmxlKGV4cGVjdGVkKSArICcgYW5kICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXJlTm90SWRlbnRpY2FsKGV4cGVjdGVkLCBhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoZXhwZWN0ZWQgPT09IGFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlTm90SWRlbnRpY2FsIGZhaWxlZCB3aGVuIGdpdmVuICcgK1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRWYXJpYWJsZShleHBlY3RlZCkgKyAnIGFuZCAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFyZUNvbGxlY3Rpb25zSWRlbnRpY2FsKGV4cGVjdGVkLCBhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBmdW5jdGlvbiByZXN1bHRUb1N0cmluZyhyZXN1bHQpIHtcbiAgICAgICAgICAgIHZhciBtc2cgPSAnJztcbiAgICAgICAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1zZyA9ICdbJyArIHJlc3VsdC5wb3AoKSArICddJyArIG1zZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtc2c7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXBhcmVBcnJheSA9IChleHBlY3RlZCwgYWN0dWFsLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHZhciBpbmRleFN0cmluZyA9ICcnO1xuICAgICAgICAgICAgaWYgKGV4cGVjdGVkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyA9IHJlc3VsdFRvU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZUNvbGxlY3Rpb25zSWRlbnRpY2FsIGZhaWxlZCB3aGVuIGFycmF5IGEnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyBpcyBudWxsIGFuZCBiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgaXMgbm90IG51bGwnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBjb3JyZWN0OiBib3RoIGFyZSBudWxsc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0dWFsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgPSByZXN1bHRUb1N0cmluZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZUNvbGxlY3Rpb25zSWRlbnRpY2FsIGZhaWxlZCB3aGVuIGFycmF5IGEnICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIGlzIG5vdCBudWxsIGFuZCBiJyArXG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyBpcyBudWxsJywgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXhwZWN0ZWQubGVuZ3RoICE9PSBhY3R1YWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgPSByZXN1bHRUb1N0cmluZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZUNvbGxlY3Rpb25zSWRlbnRpY2FsIGZhaWxlZCB3aGVuIGxlbmd0aCBvZiBhcnJheSBhJyArXG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyAobGVuZ3RoOiAnICsgZXhwZWN0ZWQubGVuZ3RoICsgJykgaXMgZGlmZmVyZW50IG9mIGxlbmd0aCBvZiBhcnJheSBiJyArXG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyAobGVuZ3RoOiAnICsgYWN0dWFsLmxlbmd0aCArICcpJywgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKChleHBlY3RlZFtpXSBpbnN0YW5jZW9mIEFycmF5KSAmJiAoYWN0dWFsW2ldIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICBjb21wYXJlQXJyYXkoZXhwZWN0ZWRbaV0sIGFjdHVhbFtpXSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChleHBlY3RlZFtpXSAhPT0gYWN0dWFsW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyA9IHJlc3VsdFRvU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZUNvbGxlY3Rpb25zSWRlbnRpY2FsIGZhaWxlZCB3aGVuIGVsZW1lbnQgYScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnICgnICsgdGhpcy5wcmludFZhcmlhYmxlKGV4cGVjdGVkW2ldKSArICcpIGlzIGRpZmZlcmVudCB0aGFuIGVsZW1lbnQgYicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnICgnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbFtpXSkgKyAnKScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgY29tcGFyZUFycmF5KGV4cGVjdGVkLCBhY3R1YWwsIFtdKTtcbiAgICB9XG4gICAgYXJlQ29sbGVjdGlvbnNOb3RJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmFyZUNvbGxlY3Rpb25zSWRlbnRpY2FsKGV4cGVjdGVkLCBhY3R1YWwpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZUNvbGxlY3Rpb25zTm90SWRlbnRpY2FsIGZhaWxlZCB3aGVuIGJvdGggY29sbGVjdGlvbnMgYXJlIGlkZW50aWNhbCcsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpc1RydWUoYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKCFhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzVHJ1ZSBmYWlsZWQgd2hlbiBnaXZlbiAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRmFsc2UoYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKGFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNGYWxzZSBmYWlsZWQgd2hlbiBnaXZlbiAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzVHJ1dGh5KGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmICghYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc1RydWUgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0ZhbHNleShhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc0ZhbHNlIGZhaWxlZCB3aGVuIGdpdmVuICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3dzKGEsIG1lc3NhZ2UgPSAnJywgZXJyb3JTdHJpbmcgPSAnJykge1xuICAgICAgICB2YXIgYWN0dWFsO1xuICAgICAgICBpZiAodHlwZW9mIGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFjdHVhbCA9IGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYS5mbikge1xuICAgICAgICAgICAgYWN0dWFsID0gYS5mbjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBhLm1lc3NhZ2U7XG4gICAgICAgICAgICBlcnJvclN0cmluZyA9IGEuZXhjZXB0aW9uU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1Rocm93biA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYWN0dWFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICBpZiAoIWVycm9yU3RyaW5nIHx8IGV4Lm1lc3NhZ2UgPT09IGVycm9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaXNUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVycm9yU3RyaW5nICYmIGV4Lm1lc3NhZ2UgIT09IGVycm9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignZGlmZmVyZW50IGVycm9yIHN0cmluZyB0aGFuIHN1cHBsaWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1Rocm93bikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignZGlkIG5vdCB0aHJvdyBhbiBlcnJvcicsIG1lc3NhZ2UgfHwgJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvZXNOb3RUaHJvdyhhY3R1YWwsIG1lc3NhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFjdHVhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcigndGhyZXcgYW4gZXJyb3IgJyArIGV4LCBtZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleGVjdXRlc1dpdGhpbihhY3R1YWwsIHRpbWVMaW1pdCwgbWVzc2FnZSA9IG51bGwpIHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdGltZVRvU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXJ0T2ZFeGVjdXRpb24gPSBnZXRUaW1lKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhY3R1YWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzRXhlY3V0ZVRpbWVMZXNzVGhhbkxpbWl0IGZhaWxzIHdoZW4gZ2l2ZW4gY29kZSB0aHJvd3MgYW4gZXhjZXB0aW9uOiBcIicgKyBleCArICdcIicsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGVjdXRpbmdUaW1lID0gZ2V0VGltZSgpIC0gc3RhcnRPZkV4ZWN1dGlvbjtcbiAgICAgICAgaWYgKGV4ZWN1dGluZ1RpbWUgPiB0aW1lTGltaXQpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzRXhlY3V0ZVRpbWVMZXNzVGhhbkxpbWl0IGZhaWxzIHdoZW4gZXhlY3V0aW9uIHRpbWUgb2YgZ2l2ZW4gY29kZSAoJyArIHRpbWVUb1N0cmluZyhleGVjdXRpbmdUaW1lKSArICcgbXMpICcgK1xuICAgICAgICAgICAgICAgICdleGNlZWQgdGhlIGdpdmVuIGxpbWl0KCcgKyB0aW1lVG9TdHJpbmcodGltZUxpbWl0KSArICcgbXMpJywgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmFpbChtZXNzYWdlID0gJycpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignZmFpbCcsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBnZXRFcnJvcihyZXN1bHRNZXNzYWdlLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IocmVzdWx0TWVzc2FnZSArICcuICcgKyBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEVycm9yKHJlc3VsdE1lc3NhZ2UpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TmFtZU9mQ2xhc3MoaW5wdXRDbGFzcykge1xuICAgICAgICAvLyBzZWU6IGh0dHBzOi8vd3d3LnN0ZXZlZmVudG9uLmNvLnVrL0NvbnRlbnQvQmxvZy9EYXRlLzIwMTMwNC9CbG9nL09idGFpbmluZy1BLUNsYXNzLU5hbWUtQXQtUnVudGltZS1Jbi1UeXBlU2NyaXB0L1xuICAgICAgICB2YXIgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvbiAoLnsxLH0pXFwoLztcbiAgICAgICAgdmFyIHJlc3VsdHMgPSAoZnVuY05hbWVSZWdleCkuZXhlYyhpbnB1dENsYXNzLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiAnJztcbiAgICB9XG4gICAgcHJpbnRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgICAgICBpZiAodmFyaWFibGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnXCJudWxsXCInO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFyaWFibGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3tvYmplY3Q6ICcgKyBUZXN0Q29udGV4dC5nZXROYW1lT2ZDbGFzcyh2YXJpYWJsZSkgKyAnfSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd7JyArICh0eXBlb2YgdmFyaWFibGUpICsgJ30gXCInICsgdmFyaWFibGUgKyAnXCInO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdENvbnRleHQgPSBUZXN0Q29udGV4dDtcbmNsYXNzIFRlc3RDbGFzcyBleHRlbmRzIFRlc3RDb250ZXh0IHtcbiAgICBwYXJhbWV0ZXJpemVVbml0VGVzdChtZXRob2QsIHBhcmFtZXRlcnNBcnJheSkge1xuICAgICAgICBtZXRob2QucGFyYW1ldGVycyA9IHBhcmFtZXRlcnNBcnJheTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3RDbGFzcyA9IFRlc3RDbGFzcztcbmNsYXNzIEZha2VGYWN0b3J5IHtcbiAgICBzdGF0aWMgZ2V0RmFrZShvYmosIC4uLmltcGxlbWVudGF0aW9ucykge1xuICAgICAgICB2YXIgZmFrZVR5cGUgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIHRoaXMucG9wdWxhdGVGYWtlVHlwZShmYWtlVHlwZSwgb2JqKTtcbiAgICAgICAgdmFyIGZha2UgPSBuZXcgZmFrZVR5cGUoKTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBGdW5jdGlvblByb3BlcnR5SGVscGVyLmdldEFsbFByb3BlcnR5TmFtZXMob2JqKTtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBmYWtlW3Byb3BlcnR5TmFtZXNba11dID0gZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZygnRGVmYXVsdCBmYWtlIGNhbGxlZC4nKTsgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWVtYmVyTmFtZUluZGV4ID0gMDtcbiAgICAgICAgdmFyIG1lbWJlclZhbHVlSW5kZXggPSAxO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltcGxlbWVudGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGltcGwgPSBpbXBsZW1lbnRhdGlvbnNbaV07XG4gICAgICAgICAgICBmYWtlW2ltcGxbbWVtYmVyTmFtZUluZGV4XV0gPSBpbXBsW21lbWJlclZhbHVlSW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWtlO1xuICAgIH1cbiAgICBzdGF0aWMgcG9wdWxhdGVGYWtlVHlwZShmYWtlLCB0b0NvcHkpIHtcbiAgICAgICAgbGV0IHByb3BlcnRpZXMgPSBGdW5jdGlvblByb3BlcnR5SGVscGVyLmdldEFsbFByb3BlcnR5TmFtZXModG9Db3B5KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgZmFrZVtwcm9wZXJ0eV0gPSB0b0NvcHlbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBmYWtlO1xuICAgICAgICB9O1xuICAgICAgICBfXy5wcm90b3R5cGUgPSB0b0NvcHkucHJvdG90eXBlO1xuICAgICAgICBmYWtlLnByb3RvdHlwZSA9IG5ldyBfXygpO1xuICAgIH1cbn1cbmV4cG9ydHMuRmFrZUZhY3RvcnkgPSBGYWtlRmFjdG9yeTtcbmNsYXNzIFRlc3REZWZpbml0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0Q2xhc3MsIG5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0RGVmaW5pdGlvbiA9IFRlc3REZWZpbml0aW9uO1xuY2xhc3MgVGVzdERlc2NyaXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0TmFtZSwgZnVuY05hbWUsIHBhcmFtZXRlclNldE51bWJlciwgbWVzc2FnZSkge1xuICAgICAgICB0aGlzLnRlc3ROYW1lID0gdGVzdE5hbWU7XG4gICAgICAgIHRoaXMuZnVuY05hbWUgPSBmdW5jTmFtZTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTZXROdW1iZXIgPSBwYXJhbWV0ZXJTZXROdW1iZXI7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0RGVzY3JpcHRpb24gPSBUZXN0RGVzY3JpcHRpb247XG5jbGFzcyBGdW5jdGlvblByb3BlcnR5SGVscGVyIHtcbiAgICBzdGF0aWMgd2Fsa0ltcGwob2JqLCByZXN1bHRzKSB7XG4gICAgICAgIGlmIChvYmogPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG93blByb3BlcnRpZXNPZk9iaiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG4gICAgICAgIG93blByb3BlcnRpZXNPZk9iai5mb3JFYWNoKG1lbSA9PiByZXN1bHRzLmFkZChtZW0pKTtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gICAgICAgIGlmIChwcm90b3R5cGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG90eXBlKTtcbiAgICAgICAgcHJvcE5hbWVzLmZvckVhY2gobWVtID0+IHJlc3VsdHMuYWRkKG1lbSkpO1xuICAgICAgICB0aGlzLndhbGtJbXBsKG9iai5wcm90b3R5cGUsIHJlc3VsdHMpO1xuICAgICAgICB0aGlzLndhbGtJbXBsKHByb3RvdHlwZSwgcmVzdWx0cyk7XG4gICAgfVxuICAgIHN0YXRpYyB3YWxrKG9iaikge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLndhbGtJbXBsKG9iaiwgcmVzdWx0cyk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHJlc3VsdHMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RnVuY3Rpb25OYW1lcyh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndhbGsodHlwZSlcbiAgICAgICAgICAgIC5maWx0ZXIobWVtID0+IHtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSB0eXBlW21lbV07XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kIGluc3RhbmNlb2YgRnVuY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAobWV0aG9kICE9PSB0eXBlICYmXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZC5wcm90b3R5cGUgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UHJvdG90eXBlT2YodHlwZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldEFsbFByb3BlcnR5TmFtZXModHlwZSkge1xuICAgICAgICBsZXQgcHJvcGVydGllcyA9IHRoaXMud2Fsayh0eXBlKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvblByb3BzID0gdGhpcy53YWxrKEZ1bmN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLmZpbHRlcihtZW0gPT4gIWZ1bmN0aW9uUHJvcHMuc29tZShmdW5jUHJvcCA9PiBmdW5jUHJvcCA9PT0gbWVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMuZmlsdGVyKG1lbSA9PiB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gdHlwZVttZW1dO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZCAhPT0gdHlwZSAmJlxuICAgICAgICAgICAgICAgIG1ldGhvZC5wcm90b3R5cGUgIT09XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFByb3RvdHlwZU9mKHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkZ1bmN0aW9uUHJvcGVydHlIZWxwZXIgPSBGdW5jdGlvblByb3BlcnR5SGVscGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHNVbml0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgaXNNYWMgPSAoKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcm9jZXNzXG4gICYmIHR5cGVvZiBwcm9jZXNzLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAmJiBwcm9jZXNzLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkgPT09ICdkYXJ3aW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbWFjJykgPiAtMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzV2luID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnd2luMzInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB0eXBlb2YgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAgICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbicpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSAoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vZGUgPSAoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3BsYXRmb3JtLnRzIiwiaW1wb3J0ICogYXMgdHNVbml0IGZyb20gJ3RzLXVuaXQnO1xuaW1wb3J0IGlwIGZyb20gJy4uLyc7XG5pbXBvcnQgKiBhcyBuYW1lZElwIGZyb20gJy4uLyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnRTcGVjIGV4dGVuZHMgdHNVbml0LlRlc3RDbGFzcyB7XG4gIHRlc3RFeHBvcnQoKSB7XG4gICAgdGhpcy5pc1RydWUodHlwZW9mIGlwLnBvc2l4LnNlcCA9PT0gJ3N0cmluZycsICdkZWZhdWx0IGV4cG9ydCBwb3NpeCBpcyBkZWZpbmVkJyk7XG4gICAgdGhpcy5pc1RydWUodHlwZW9mIGlwLndpbjMyLnNlcCA9PT0gJ3N0cmluZycsICdkZWZhdWx0IGV4cG9ydCB3aW4zMiBpcyBkZWZpbmVkJyk7XG4gICAgdGhpcy5pc1RydWUodHlwZW9mIGlwLnNlcCA9PT0gJ3N0cmluZycsICdkZWZhdWx0IGV4cG9ydCBydW50aW1lIGlzIGRlZmluZWQnKTtcbiAgICB0aGlzLmlzVHJ1ZSh0eXBlb2YgbmFtZWRJcC5wb3NpeC5zZXAgPT09ICdzdHJpbmcnLCAnZGVmYXVsdCBleHBvcnQgcG9zaXggaXMgZGVmaW5lZCcpO1xuICAgIHRoaXMuaXNUcnVlKHR5cGVvZiBuYW1lZElwLndpbjMyLnNlcCA9PT0gJ3N0cmluZycsICdkZWZhdWx0IGV4cG9ydCB3aW4zMiBpcyBkZWZpbmVkJyk7XG4gICAgdGhpcy5pc1RydWUodHlwZW9mIG5hbWVkSXAuc2VwID09PSAnc3RyaW5nJywgJ2RlZmF1bHQgZXhwb3J0IHJ1bnRpbWUgaXMgZGVmaW5lZCcpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L0V4cG9ydC5zcGVjLnRzIiwiaW1wb3J0ICogYXMgdHNVbml0IGZyb20gJ3RzLXVuaXQnO1xuaW1wb3J0ICogYXMgaXNvbW9ycGhpY1BhdGggZnJvbSAnLi4vJztcblxuZXhwb3J0IGNsYXNzIFBhdGhTcGVjIGV4dGVuZHMgdHNVbml0LlRlc3RDbGFzcyB7XG4gIHRlc3REZWZhdWx0RXhwb3J0KCkge1xuICAgIGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi4vbGliL3BhdGgnKV07XG4gICAgKHdpbmRvdy5uYXZpZ2F0b3IgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdXaW5kb3dzJyk7IC8vIHN0dWIgcGxhdGZvcm0gY2FsbFxuICAgIGxldCBwYXRoID0gcmVxdWlyZSgnLi4vbGliL3BhdGgnKS5kZWZhdWx0O1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdcXFxcJywgcGF0aC5zZXAsICdkZWZhdWx0IHNlcGFyYXRvciBzaG91bGQgYmUgd2luMzIgXCJcXFxcXCIgYWZ0ZXIgaW4gd2luZG93cyBlbnZpcm9ubWVudCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCc7JywgcGF0aC5kZWxpbWl0ZXIsICdkZWZhdWx0IGRlbGltaXRlciBzaG91bGQgYmUgd2luMzIgXCI7XCIgYWZ0ZXIgaW4gd2luZG93cyBlbnZpcm9ubWVudCcpO1xuICAgIGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi4vbGliL3BhdGgnKV07XG4gICAgKHdpbmRvdy5uYXZpZ2F0b3IgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdXaW4xNicpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcbiAgICBwYXRoID0gcmVxdWlyZSgnLi4vbGliL3BhdGgnKS5kZWZhdWx0O1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdcXFxcJywgcGF0aC5zZXAsICdkZWZhdWx0IHNlcGFyYXRvciBzaG91bGQgYmUgd2luMzIgXCJcXFxcXCIgYWZ0ZXIgaW4gd2luZG93cyBlbnZpcm9ubWVudCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCc7JywgcGF0aC5kZWxpbWl0ZXIsICdkZWZhdWx0IGRlbGltaXRlciBzaG91bGQgYmUgd2luMzIgXCI7XCIgYWZ0ZXIgaW4gd2luZG93cyBlbnZpcm9ubWVudCcpO1xuICAgIGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi4vbGliL3BhdGgnKV07XG4gICAgKHdpbmRvdy5uYXZpZ2F0b3IgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdNYWNpbnRvc2gnKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXG4gICAgcGF0aCA9IHJlcXVpcmUoJy4uL2xpYi9wYXRoJykuZGVmYXVsdDtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhdGguc2VwLCAnZGVmYXVsdCBzZXBhcmF0b3Igc2hvdWxkIGJlIHBvc2l4IFwiL1wiIGFmdGVyIGluIG1hYyBlbnZpcm9ubWVudCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCc6JywgcGF0aC5kZWxpbWl0ZXIsICdkZWZhdWx0IGRlbGltaXRlciBzaG91bGQgYmUgcG9zaXggXCIvXCIgYWZ0ZXIgaW4gbWFjIGVudmlyb25tZW50Jyk7XG4gICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuLi9saWIvcGF0aCcpXTtcbiAgICAod2luZG93Lm5hdmlnYXRvciBhcyBhbnkpLl9fZGVmaW5lR2V0dGVyX18oJ3BsYXRmb3JtJywgKCkgPT4gJ01hY0ludGVsJyk7IC8vIHN0dWIgcGxhdGZvcm0gY2FsbFxuICAgIHBhdGggPSByZXF1aXJlKCcuLi9saWIvcGF0aCcpLmRlZmF1bHQ7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJy8nLCBwYXRoLnNlcCwgJ2RlZmF1bHQgc2VwYXJhdG9yIHNob3VsZCBiZSBwb3NpeCBcIi9cIiBhZnRlciBpbiBtYWMgZW52aXJvbm1lbnQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnOicsIHBhdGguZGVsaW1pdGVyLCAnZGVmYXVsdCBkZWxpbWl0ZXIgc2hvdWxkIGJlIHBvc2l4IFwiL1wiIGFmdGVyIGluIG1hYyBlbnZpcm9ubWVudCcpO1xuICB9XG5cbiAgdGVzdFdpbjMyQmFzZW5hbWUoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnbXlmaWxlLmh0bWwnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuYmFzZW5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAgICd3aW4zMiBiYXNlbmFtZSBzaG91bGQgcGFyc2UgZmlsZSBuYW1lIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ215ZmlsZS5odG1sJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmJhc2VuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgJ3dpbjMyIGJhc2VuYW1lIHNob3VsZCBwYXJzZSBmaWxlIG5hbWUgZnJvbSBwb3NpeCBwYXRoJyxcbiAgICApO1xuICB9XG4gIHRlc3RQb3NpeEJhc2VuYW1lKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguYmFzZW5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAgICdwb3NpeCBiYXNlbmFtZSBzaG91bGQgbm90IHBhcnNlIHdpbmRvd3MgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICdteWZpbGUuaHRtbCcsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5iYXNlbmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcbiAgICAgICdwb3NpeCBiYXNlbmFtZSBzaG91bGQgcGFyc2UgZmlsZSBuYW1lIGZyb20gcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgfVxuICB0ZXN0V2luMzJTZXAoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ1xcXFwnLCBpc29tb3JwaGljUGF0aC53aW4zMi5zZXAsICd3aW4zMiBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIlxcXFxcIiBzZXAnKTtcbiAgfVxuICB0ZXN0UG9zaXhTZXAoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJy8nLCBpc29tb3JwaGljUGF0aC5wb3NpeC5zZXAsICdwb3NpeCBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIi9cIiBzZXAnKTtcbiAgfVxuICB0ZXN0V2luMzJEZWxpbWl0ZXIoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJzsnLCBpc29tb3JwaGljUGF0aC53aW4zMi5kZWxpbWl0ZXIsICd3aW4zMiBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIjtcIiBkZWxpbWl0ZXInKTtcbiAgfVxuICB0ZXN0UG9zaXhEZWxpbWl0ZXIoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJzonLCBpc29tb3JwaGljUGF0aC5wb3NpeC5kZWxpbWl0ZXIsICdwb3NpeCBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIjtcIiBkZWxpbWl0ZXInKTtcbiAgfVxuICB0ZXN0V2luMzJEaXJuYW1lKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ0M6XFxcXHRlbXAnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZGlybmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxuICAgICAgJ3dpbjMyIGRpcm5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBkaXJlY3RvcnkgcGF0aCBmcm9tIHdpbmRvd3MgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcvdGVtcCcsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5kaXJuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgJ3dpbjMyIGRpcm5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBkaXJlY3RvcnkgcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICk7XG4gIH1cbiAgdGVzdFBvc2l4RGlybmFtZSgpIHtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcuJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmRpcm5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAgICdwb3NpeCBiYXNlbmFtZSBzaG91bGQgbm90IHBhcnNlIHdpbmRvd3MgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcvdGVtcCcsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5kaXJuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgJ3Bvc2l4IGRpcm5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBkaXJlY3RvcnkgcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICk7XG4gIH1cbiAgdGVzdFdpbjMyRXh0bmFtZSgpIHtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcuaHRtbCcsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sJyksXG4gICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgZXh0ZW5zaW9uIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy5odG1sJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcuanMnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuanMnKSxcbiAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBleHRlbnNpb24gZnJvbSB3aW5kb3dzIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnLmpzJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sLmpzJyksXG4gICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcuanMnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbC5qcycpLFxuICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIHByZS1maXhlZCBleHRlbnNpb24gZnJvbSB3aW5kb3dzIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnLmpzJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sLmh0bWwuanMnKSxcbiAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBwcmUtZml4ZWQgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgfVxuICB0ZXN0UG9zaXhFeHRuYW1lKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy5odG1sJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAncG9zaXggZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcuanMnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguZXh0bmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwuanMnKSxcbiAgICAgICdwb3NpeCBleHRuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy5qcycsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5odG1sLmpzJyksXG4gICAgICAncG9zaXggZXh0bmFtZSBzaG91bGQgcGFyc2UgcHJlLWZpeGVkIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICk7XG4gIH1cbiAgdGVzdFdpbjMyRm9ybWF0KCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvaG9tZS91c2VyL2RpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICBkaXI6ICcvaG9tZS91c2VyL2RpcicsXG4gICAgICBiYXNlOiAnZmlsZS50eHQnLFxuICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICd3aW4zMiBmb3JtYXQgc2hvdWxkIG5vdCBmb3JtYXQgcG9zaXggUGFyc2VkUGF0aCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICByb290OiAnQzpcXFxcJyxcbiAgICAgIGRpcjogJ3BhdGhcXFxcZGlyJyxcbiAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3dpbjMyIGZvcm1hdCBzaG91bGQgZm9ybWF0IHdpbmRvd3MgUGFyc2VkUGF0aCB3aXRoIHJvb3QgYW5kIGRpcicpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICBkaXI6ICdDOlxcXFxwYXRoXFxcXGRpcicsXG4gICAgICBiYXNlOiAnZmlsZS50eHQnLFxuICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICd3aW4zMiBmb3JtYXQgc2hvdWxkIGZvcm1hdCB3aW5kb3dzIFBhcnNlZFBhdGggd2l0aCBkaXInKTtcbiAgfVxuICB0ZXN0UG9zaXhGb3JtYXQoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ0M6XFxcXHBhdGhcXFxcZGlyL2ZpbGUudHh0JywgaXNvbW9ycGhpY1BhdGgucG9zaXguZm9ybWF0KHtcbiAgICAgIGRpcjogJ0M6XFxcXHBhdGhcXFxcZGlyJyxcbiAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3Bvc2l4IGZvcm1hdCBzaG91bGQgbm90IGZvcm1hdCB3aW5kb3dzIFBhcnNlZFBhdGgnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC5wb3NpeC5mb3JtYXQoe1xuICAgICAgcm9vdDogJy9pZ25vcmVkJyxcbiAgICAgIGRpcjogJy9ob21lL3VzZXIvZGlyJyxcbiAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3Bvc2l4IGZvcm1hdCBzaG91bGQgZm9ybWF0IHBvc2l4IFBhcnNlZFBhdGggd2l0aCByb290IGFuZCBkaXInKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC5wb3NpeC5mb3JtYXQoe1xuICAgICAgZGlyOiAnL2hvbWUvdXNlci9kaXInLFxuICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcbiAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAncG9zaXggZm9ybWF0IHNob3VsZCBmb3JtYXQgcG9zaXggUGFyc2VkUGF0aCB3aXRoIGRpcicpO1xuICB9XG4gIHRlc3RXaW4zMkFic29sdXRlKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgdHJ1ZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJy8vc2VydmVyJyksXG4gICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHBvc2l4IGFic29sdXRlIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICB0cnVlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnXFxcXFxcXFxzZXJ2ZXInKSxcbiAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3Igd2luZG93cyBhYnNvbHV0ZSBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgdHJ1ZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJ0M6L2Zvby8uLicpLFxuICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICB0cnVlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnQzpcXFxcZm9vXFxcXC4uJyksXG4gICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgIGZhbHNlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnYmFyXFxcXGJheicpLFxuICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd2luZG93cyByZWxhdGl2ZSBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgZmFsc2UsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCdiYXIvYmF6JyksXG4gICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHJlbGF0aXZlIHBvc2l4IHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICBmYWxzZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJy4nKSxcbiAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHJlbGF0aXZlIHBvc2l4IG9wZXJhdG9yJyxcbiAgICApO1xuICB9XG4gIHRlc3RQb3NpeEFic29sdXRlKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgdHJ1ZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJy8vc2VydmVyJyksXG4gICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHBvc2l4IGFic29sdXRlIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICB0cnVlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnL2Jhei8uLicpLFxuICAgICAgJ3Bvc2l4IGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciBwb3NpeCBhYnNvbHV0ZSBwYXRoIHdpdGggcmVsYXRpdmUgb3BlcmF0b3Igc3VmZml4JyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgZmFsc2UsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdcXFxcXFxcXHNlcnZlcicpLFxuICAgICAgJ3Bvc2l4IGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd2luZG93cyBhYnNvbHV0ZSBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgZmFsc2UsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdDOi9mb28vLi4nKSxcbiAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgIGZhbHNlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnQzpcXFxcZm9vXFxcXC4uJyksXG4gICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICBmYWxzZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ2JhclxcXFxiYXonKSxcbiAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcmVsYXRpdmUgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgIGZhbHNlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnYmFyL2JheicpLFxuICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciByZWxhdGl2ZSBwb3NpeCBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgZmFsc2UsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCcuJyksXG4gICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHJlbGF0aXZlIHBvc2l4IG9wZXJhdG9yJyxcbiAgICApO1xuICB9XG4gIHRlc3RXaW4zMkpvaW4oKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnQzpcXFxcZm9vXFxcXGJhclxcXFxiYXpcXFxcYXNkZicsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5qb2luKCdDOlxcXFxmb28nLCAnYmFyJywgJ2JhelxcXFxhc2RmJywgJ3F1dXgnLCAnLi4nKSxcbiAgICAgICd3aW4zMiBqb2luIHNob3VsZCByZXR1cm4gam9pbmVkIHdpbmRvd3MgcGF0aCBnaXZlbiB3aW5kb3dzIGZyYWdtZW50cycsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICdcXFxcZm9vXFxcXGJhclxcXFxiYXpcXFxcYXNkZicsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5qb2luKCcvZm9vJywgJ2JhcicsICdiYXovYXNkZicsICdxdXV4JywgJy4uJyksXG4gICAgICAnd2luMzIgam9pbiBzaG91bGQgcmV0dXJuIGpvaW5lZCB3aW5kb3dzIHBhdGggZ2l2ZW4gcG9zaXggZnJhZ21lbnRzJyxcbiAgICApO1xuICB9XG4gIHRlc3RQb3NpeEpvaW4oKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnXFxcXGZvby9iYXIvYmF6XFxcXGFzZGYnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguam9pbignXFxcXGZvbycsICdiYXInLCAnYmF6XFxcXGFzZGYnLCAncXV1eCcsICcuLicpLFxuICAgICAgJ3Bvc2l4IGpvaW4gc2hvdWxkIG5vdCByZXR1cm4gam9pbmVkIHBvc2l4IHBhdGggZ2l2ZW4gd2luZG93cyBmcmFnbWVudHMnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnL2Zvby9iYXIvYmF6L2FzZGYnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguam9pbignL2ZvbycsICdiYXInLCAnYmF6L2FzZGYnLCAncXV1eCcsICcuLicpLFxuICAgICAgJ3Bvc2l4IGpvaW4gc2hvdWxkIHJldHVybiBqb2luZWQgcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgfVxuICB0ZXN0V2luMzJOb3JtYWxpemUoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnQzpcXFxcdGVtcFxcXFxmb29cXFxcYmFyJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLm5vcm1hbGl6ZSgnQzovLy8vdGVtcFxcXFxcXFxcL1xcXFwvXFxcXC9mb28vYmFyJyksXG4gICAgICAnd2luMzIgc2hvdWxkIG5vcm1hbGl6ZSBtaXhlZCBwYXRoIHRvIHdpbmRvd3Mgc2VwYXJhdG9yJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ0M6XFxcXHRlbXBcXFxcZm9vXFxcXCcsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5ub3JtYWxpemUoJ0M6XFxcXHRlbXBcXFxcXFxcXGZvb1xcXFxiYXJcXFxcLi5cXFxcJyksXG4gICAgICAnd2luMzIgc2hvdWxkIG5vcm1hbGl6ZSB3aW5kb3dzIHBhdGggdG8gd2luZG93cyBzZXBhcmF0b3InLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnXFxcXGZvb1xcXFxiYXJcXFxcYmF6XFxcXGFzZGYnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxuICAgICAgJ3dpbmQzMiBzaG91bGQgbm9ybWFsaXplIHBvc2l4IHBhdGggdG8gd2luZG93cyBzZXBhcmF0b3InLFxuICAgICk7XG4gIH1cbiAgdGVzdFBvc2l4Tm9ybWFsaXplKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ0M6XFxcXHRlbXBcXFxcXFxcXGZvb1xcXFxiYXJcXFxcLi5cXFxcJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4Lm5vcm1hbGl6ZSgnQzpcXFxcdGVtcFxcXFxcXFxcZm9vXFxcXGJhclxcXFwuLlxcXFwnKSxcbiAgICAgICdwb3NpeCBzaG91bGQgbm90IG5vcm1hbGl6ZSB3aW5kb3dzIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnL2Zvby9iYXIvYmF6L2FzZGYnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxuICAgICAgJ3Bvc2l4IHNob3VsZCBub3JtYWxpemUgcG9zaXggcGF0aCB0byBwb3NpeCBzZXBhcmF0b3InLFxuICAgICk7XG4gIH1cbiAgdGVzdFdpbjMyUGFyc2UoKSB7XG4gICAgY29uc3QgcGFyc2VkUG9zaXggPSBpc29tb3JwaGljUGF0aC53aW4zMi5wYXJzZSgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhcnNlZFBvc2l4LnJvb3QsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCByb290Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJy9ob21lL3VzZXIvZGlyJywgcGFyc2VkUG9zaXguZGlyLCAnd2luMzIgc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggZGlyJyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUudHh0JywgcGFyc2VkUG9zaXguYmFzZSwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGJhc2UnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFBvc2l4LmV4dCwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGV4dCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlJywgcGFyc2VkUG9zaXgubmFtZSwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIG5hbWUnKTtcblxuICAgIGNvbnN0IHBhcnNlZFdpbmRvd3MgPSBpc29tb3JwaGljUGF0aC53aW4zMi5wYXJzZSgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZS50eHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxcJywgcGFyc2VkV2luZG93cy5yb290LCAnd2luMzIgc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCByb290Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ0M6XFxcXHBhdGhcXFxcZGlyJywgcGFyc2VkV2luZG93cy5kaXIsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGRpcicpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlLnR4dCcsIHBhcnNlZFdpbmRvd3MuYmFzZSwgJ3dpbjMyIHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggYmFzZScpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcudHh0JywgcGFyc2VkV2luZG93cy5leHQsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGV4dCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlJywgcGFyc2VkV2luZG93cy5uYW1lLCAnd2luMzIgc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBuYW1lJyk7XG4gIH1cbiAgdGVzdFBvc2l4UGFyc2UoKSB7XG4gICAgY29uc3QgcGFyc2VkUG9zaXggPSBpc29tb3JwaGljUGF0aC5wb3NpeC5wYXJzZSgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhcnNlZFBvc2l4LnJvb3QsICdwb3NpeCBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCByb290Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJy9ob21lL3VzZXIvZGlyJywgcGFyc2VkUG9zaXguZGlyLCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggZGlyJyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUudHh0JywgcGFyc2VkUG9zaXguYmFzZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGJhc2UnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFBvc2l4LmV4dCwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGV4dCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlJywgcGFyc2VkUG9zaXgubmFtZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIG5hbWUnKTtcblxuICAgIGNvbnN0IHBhcnNlZFdpbmRvd3MgPSBpc29tb3JwaGljUGF0aC5wb3NpeC5wYXJzZSgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZS50eHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnJywgcGFyc2VkV2luZG93cy5yb290LCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCByb290Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJycsIHBhcnNlZFdpbmRvd3MuZGlyLCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBkaXInKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZS50eHQnLCBwYXJzZWRXaW5kb3dzLmJhc2UsICdwb3NpeCBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGJhc2UnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFdpbmRvd3MuZXh0LCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBleHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZScsIHBhcnNlZFdpbmRvd3MubmFtZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggbmFtZScpO1xuICB9XG4gIHRlc3RXaW4zMlJlc29sdmUoKSB7XG4gICAgdGhpcy50aHJvd3MoaXNvbW9ycGhpY1BhdGgud2luMzIucmVzb2x2ZSwgJ3dpbjMyIHNob3VsZCB0aHJvdyBlcnJvciBvbiBjYWxsaW5nIHVuc3VwcG9ydGVkIHJlc29sdmUgbWV0aG9kJyk7XG4gIH1cbiAgdGVzdFBvc2l4UmVzb2x2ZSgpIHtcbiAgICB0aGlzLnRocm93cyhpc29tb3JwaGljUGF0aC5wb3NpeC5yZXNvbHZlLCAncG9zaXggc2hvdWxkIHRocm93IGVycm9yIG9uIGNhbGxpbmcgdW5zdXBwb3J0ZWQgcmVzb2x2ZSBtZXRob2QnKTtcbiAgfVxuICB0ZXN0V2luMzJSZWxhdGl2ZSgpIHtcbiAgICB0aGlzLnRocm93cyhcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLnJlbGF0aXZlLmJpbmQoJycsICcnKSxcbiAgICAgICd3aW4zMiBzaG91bGQgdGhyb3cgZXJyb3Igb24gY2FsbGluZyB1bnN1cHBvcnRlZCByZXNvbHZlIG1ldGhvZCcsXG4gICAgKTtcbiAgfVxuICB0ZXN0UG9zaXhSZWxhdGl2ZSgpIHtcbiAgICB0aGlzLnRocm93cyhcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LnJlbGF0aXZlLmJpbmQoJycsICcnKSxcbiAgICAgICdwb3NpeCBzaG91bGQgdGhyb3cgZXJyb3Igb24gY2FsbGluZyB1bnN1cHBvcnRlZCByZXNvbHZlIG1ldGhvZCcsXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9QYXRoLkJyb3dzZXIuc3BlYy50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcbmltcG9ydCB7IGlzV2luLCBpc01hYywgaXNOb2RlLCBpc0Jyb3dzZXIgfSBmcm9tICcuLi9saWIvcGxhdGZvcm0nO1xuXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1TcGVjIGV4dGVuZHMgdHNVbml0LlRlc3RDbGFzcyB7XG4gIHRlc3RPcygpIHtcbiAgICAod2luZG93Lm5hdmlnYXRvciBhcyBhbnkpLl9fZGVmaW5lR2V0dGVyX18oJ3BsYXRmb3JtJywgKCkgPT4gJ1dpbmRvd3MnKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXG4gICAgdGhpcy5pc1RydWUoaXNXaW4oKSwgJ2lzV2luIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3Igd2luZG93cyBwbGF0Zm9ybSBpZDogXCJXaWRub3dzXCInKTtcbiAgICB0aGlzLmlzRmFsc2UoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcGxhdGZvcm0gaWQ6IFwiV2lkbm93c1wiJyk7XG4gICAgKHdpbmRvdy5uYXZpZ2F0b3IgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdXaW4xNicpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcbiAgICB0aGlzLmlzVHJ1ZShpc1dpbigpLCAnaXNXaW4gc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIHBsYXRmb3JtIGlkOiBcIldpbjMyXCInKTtcbiAgICB0aGlzLmlzRmFsc2UoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcGxhdGZvcm0gaWQ6IFwiV2luMzJcIicpO1xuICAgICh3aW5kb3cubmF2aWdhdG9yIGFzIGFueSkuX19kZWZpbmVHZXR0ZXJfXygncGxhdGZvcm0nLCAoKSA9PiAnTWFjaW50b3NoJyk7IC8vIHN0dWIgcGxhdGZvcm0gY2FsbFxuICAgIHRoaXMuaXNGYWxzZShpc1dpbigpLCAnaXNXaW4gc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgbWFjIHBsYXRmb3JtIGlkOiBcIk1hY2ludG9zaFwiJyk7XG4gICAgdGhpcy5pc1RydWUoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgbWFjIHBsYXRmb3JtIGlkOiBcIk1hY2ludG9zaFwiJyk7XG4gICAgKHdpbmRvdy5uYXZpZ2F0b3IgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdNYWNJbnRlbCcpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcbiAgICB0aGlzLmlzRmFsc2UoaXNXaW4oKSwgJ2lzV2luIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIG1hYyBwbGF0Zm9ybSBpZDogXCJNYWNJbnRlbFwiJyk7XG4gICAgdGhpcy5pc1RydWUoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgbWFjIHBsYXRmb3JtIGlkOiBcIk1hY0ludGVsXCInKTtcbiAgfVxuICB0ZXN0RW52KCkge1xuICAgIHRoaXMuaXNGYWxzZShpc05vZGUoKSwgJ2lzTm9kZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciBicm93c2VyIHNwZWMnKTtcbiAgICB0aGlzLmlzVHJ1ZShpc0Jyb3dzZXIoKSwgJ2lzQnJvd3NlciBzaG91bGQgcmV0dXJuIHRydWUgZm9yIGJyb3dzZXIgc3BlYycpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L1BsYXRmb3JtLkJyb3dzZXIuc3BlYy50cyIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbm9kZS1saWJzLWJyb3dzZXIvfi91dGlsL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxyXG4vL1xyXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxyXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXHJcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xyXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXHJcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcclxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXHJcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4vL1xyXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxyXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuLy9cclxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xyXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXHJcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cclxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXHJcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxyXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXHJcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5cclxudmFyIGlzV2luZG93cyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XHJcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xyXG5cclxuXHJcbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxyXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcclxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXHJcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcclxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XHJcbiAgdmFyIHJlcyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBwID0gcGFydHNbaV07XHJcblxyXG4gICAgLy8gaWdub3JlIGVtcHR5IHBhcnRzXHJcbiAgICBpZiAoIXAgfHwgcCA9PT0gJy4nKVxyXG4gICAgICBjb250aW51ZTtcclxuXHJcbiAgICBpZiAocCA9PT0gJy4uJykge1xyXG4gICAgICBpZiAocmVzLmxlbmd0aCAmJiByZXNbcmVzLmxlbmd0aCAtIDFdICE9PSAnLi4nKSB7XHJcbiAgICAgICAgcmVzLnBvcCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGFsbG93QWJvdmVSb290KSB7XHJcbiAgICAgICAgcmVzLnB1c2goJy4uJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5wdXNoKHApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuLy8gcmV0dXJucyBhbiBhcnJheSB3aXRoIGVtcHR5IGVsZW1lbnRzIHJlbW92ZWQgZnJvbSBlaXRoZXIgZW5kIG9mIHRoZSBpbnB1dFxyXG4vLyBhcnJheSBvciB0aGUgb3JpZ2luYWwgYXJyYXkgaWYgbm8gZWxlbWVudHMgbmVlZCB0byBiZSByZW1vdmVkXHJcbmZ1bmN0aW9uIHRyaW1BcnJheShhcnIpIHtcclxuICB2YXIgbGFzdEluZGV4ID0gYXJyLmxlbmd0aCAtIDE7XHJcbiAgdmFyIHN0YXJ0ID0gMDtcclxuICBmb3IgKDsgc3RhcnQgPD0gbGFzdEluZGV4OyBzdGFydCsrKSB7XHJcbiAgICBpZiAoYXJyW3N0YXJ0XSlcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICB2YXIgZW5kID0gbGFzdEluZGV4O1xyXG4gIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcclxuICAgIGlmIChhcnJbZW5kXSlcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBsYXN0SW5kZXgpXHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIGlmIChzdGFydCA+IGVuZClcclxuICAgIHJldHVybiBbXTtcclxuICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgKyAxKTtcclxufVxyXG5cclxuLy8gUmVnZXggdG8gc3BsaXQgYSB3aW5kb3dzIHBhdGggaW50byB0aHJlZSBwYXJ0czogWyosIGRldmljZSwgc2xhc2gsXHJcbi8vIHRhaWxdIHdpbmRvd3Mtb25seVxyXG52YXIgc3BsaXREZXZpY2VSZSA9XHJcbiAgICAvXihbYS16QS1aXTp8W1xcXFxcXC9dezJ9W15cXFxcXFwvXStbXFxcXFxcL10rW15cXFxcXFwvXSspPyhbXFxcXFxcL10pPyhbXFxzXFxTXSo/KSQvO1xyXG5cclxuLy8gUmVnZXggdG8gc3BsaXQgdGhlIHRhaWwgcGFydCBvZiB0aGUgYWJvdmUgaW50byBbKiwgZGlyLCBiYXNlbmFtZSwgZXh0XVxyXG52YXIgc3BsaXRUYWlsUmUgPVxyXG4gICAgL14oW1xcc1xcU10qPykoKD86XFwuezEsMn18W15cXFxcXFwvXSs/fCkoXFwuW14uXFwvXFxcXF0qfCkpKD86W1xcXFxcXC9dKikkLztcclxuXHJcbnZhciB3aW4zMiA9IHt9O1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gc3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbmZ1bmN0aW9uIHdpbjMyU3BsaXRQYXRoKGZpbGVuYW1lKSB7XHJcbiAgLy8gU2VwYXJhdGUgZGV2aWNlK3NsYXNoIGZyb20gdGFpbFxyXG4gIHZhciByZXN1bHQgPSBzcGxpdERldmljZVJlLmV4ZWMoZmlsZW5hbWUpLFxyXG4gICAgICBkZXZpY2UgPSAocmVzdWx0WzFdIHx8ICcnKSArIChyZXN1bHRbMl0gfHwgJycpLFxyXG4gICAgICB0YWlsID0gcmVzdWx0WzNdIHx8ICcnO1xyXG4gIC8vIFNwbGl0IHRoZSB0YWlsIGludG8gZGlyLCBiYXNlbmFtZSBhbmQgZXh0ZW5zaW9uXHJcbiAgdmFyIHJlc3VsdDIgPSBzcGxpdFRhaWxSZS5leGVjKHRhaWwpLFxyXG4gICAgICBkaXIgPSByZXN1bHQyWzFdLFxyXG4gICAgICBiYXNlbmFtZSA9IHJlc3VsdDJbMl0sXHJcbiAgICAgIGV4dCA9IHJlc3VsdDJbM107XHJcbiAgcmV0dXJuIFtkZXZpY2UsIGRpciwgYmFzZW5hbWUsIGV4dF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpbjMyU3RhdFBhdGgocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBzcGxpdERldmljZVJlLmV4ZWMocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdFsxXSB8fCAnJyxcclxuICAgICAgaXNVbmMgPSAhIWRldmljZSAmJiBkZXZpY2VbMV0gIT09ICc6JztcclxuICByZXR1cm4ge1xyXG4gICAgZGV2aWNlOiBkZXZpY2UsXHJcbiAgICBpc1VuYzogaXNVbmMsXHJcbiAgICBpc0Fic29sdXRlOiBpc1VuYyB8fCAhIXJlc3VsdFsyXSwgLy8gVU5DIHBhdGhzIGFyZSBhbHdheXMgYWJzb2x1dGVcclxuICAgIHRhaWw6IHJlc3VsdFszXVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKSB7XHJcbiAgcmV0dXJuICdcXFxcXFxcXCcgKyBkZXZpY2UucmVwbGFjZSgvXltcXFxcXFwvXSsvLCAnJykucmVwbGFjZSgvW1xcXFxcXC9dKy9nLCAnXFxcXCcpO1xyXG59XHJcblxyXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXHJcbndpbjMyLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmVzb2x2ZWREZXZpY2UgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRUYWlsID0gJycsXHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xOyBpLS0pIHtcclxuICAgIHZhciBwYXRoO1xyXG4gICAgaWYgKGkgPj0gMCkge1xyXG4gICAgICBwYXRoID0gYXJndW1lbnRzW2ldO1xyXG4gICAgfSBlbHNlIGlmICghcmVzb2x2ZWREZXZpY2UpIHtcclxuICAgICAgcGF0aCA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBXaW5kb3dzIGhhcyB0aGUgY29uY2VwdCBvZiBkcml2ZS1zcGVjaWZpYyBjdXJyZW50IHdvcmtpbmdcclxuICAgICAgLy8gZGlyZWN0b3JpZXMuIElmIHdlJ3ZlIHJlc29sdmVkIGEgZHJpdmUgbGV0dGVyIGJ1dCBub3QgeWV0IGFuXHJcbiAgICAgIC8vIGFic29sdXRlIHBhdGgsIGdldCBjd2QgZm9yIHRoYXQgZHJpdmUuIFdlJ3JlIHN1cmUgdGhlIGRldmljZSBpcyBub3RcclxuICAgICAgLy8gYW4gdW5jIHBhdGggYXQgdGhpcyBwb2ludHMsIGJlY2F1c2UgdW5jIHBhdGhzIGFyZSBhbHdheXMgYWJzb2x1dGUuXHJcbiAgICAgIHBhdGggPSBwcm9jZXNzLmVudlsnPScgKyByZXNvbHZlZERldmljZV07XHJcbiAgICAgIC8vIFZlcmlmeSB0aGF0IGEgZHJpdmUtbG9jYWwgY3dkIHdhcyBmb3VuZCBhbmQgdGhhdCBpdCBhY3R1YWxseSBwb2ludHNcclxuICAgICAgLy8gdG8gb3VyIGRyaXZlLiBJZiBub3QsIGRlZmF1bHQgdG8gdGhlIGRyaXZlJ3Mgcm9vdC5cclxuICAgICAgaWYgKCFwYXRoIHx8IHBhdGguc3Vic3RyKDAsIDMpLnRvTG93ZXJDYXNlKCkgIT09XHJcbiAgICAgICAgICByZXNvbHZlZERldmljZS50b0xvd2VyQ2FzZSgpICsgJ1xcXFwnKSB7XHJcbiAgICAgICAgcGF0aCA9IHJlc29sdmVkRGV2aWNlICsgJ1xcXFwnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgICAgZGV2aWNlID0gcmVzdWx0LmRldmljZSxcclxuICAgICAgICBpc1VuYyA9IHJlc3VsdC5pc1VuYyxcclxuICAgICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgICAgdGFpbCA9IHJlc3VsdC50YWlsO1xyXG5cclxuICAgIGlmIChkZXZpY2UgJiZcclxuICAgICAgICByZXNvbHZlZERldmljZSAmJlxyXG4gICAgICAgIGRldmljZS50b0xvd2VyQ2FzZSgpICE9PSByZXNvbHZlZERldmljZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIC8vIFRoaXMgcGF0aCBwb2ludHMgdG8gYW5vdGhlciBkZXZpY2Ugc28gaXQgaXMgbm90IGFwcGxpY2FibGVcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICByZXNvbHZlZERldmljZSA9IGRldmljZTtcclxuICAgIH1cclxuICAgIGlmICghcmVzb2x2ZWRBYnNvbHV0ZSkge1xyXG4gICAgICByZXNvbHZlZFRhaWwgPSB0YWlsICsgJ1xcXFwnICsgcmVzb2x2ZWRUYWlsO1xyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gaXNBYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzb2x2ZWREZXZpY2UgJiYgcmVzb2x2ZWRBYnNvbHV0ZSkge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENvbnZlcnQgc2xhc2hlcyB0byBiYWNrc2xhc2hlcyB3aGVuIGByZXNvbHZlZERldmljZWAgcG9pbnRzIHRvIGFuIFVOQ1xyXG4gIC8vIHJvb3QuIEFsc28gc3F1YXNoIG11bHRpcGxlIHNsYXNoZXMgaW50byBhIHNpbmdsZSBvbmUgd2hlcmUgYXBwcm9wcmlhdGUuXHJcbiAgaWYgKGlzVW5jKSB7XHJcbiAgICByZXNvbHZlZERldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QocmVzb2x2ZWREZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsXHJcbiAgLy8gYnV0IGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpXHJcbiAgLy8gZmFpbHMpXHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgdGFpbCBwYXRoXHJcbiAgcmVzb2x2ZWRUYWlsID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRUYWlsLnNwbGl0KC9bXFxcXFxcL10rLyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgcmV0dXJuIChyZXNvbHZlZERldmljZSArIChyZXNvbHZlZEFic29sdXRlID8gJ1xcXFwnIDogJycpICsgcmVzb2x2ZWRUYWlsKSB8fFxyXG4gICAgICAgICAnLic7XHJcbn07XHJcblxyXG5cclxud2luMzIubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSB3aW4zMlN0YXRQYXRoKHBhdGgpLFxyXG4gICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICBpc1VuYyA9IHJlc3VsdC5pc1VuYyxcclxuICAgICAgaXNBYnNvbHV0ZSA9IHJlc3VsdC5pc0Fic29sdXRlLFxyXG4gICAgICB0YWlsID0gcmVzdWx0LnRhaWwsXHJcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSAvW1xcXFxcXC9dJC8udGVzdCh0YWlsKTtcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICB0YWlsID0gbm9ybWFsaXplQXJyYXkodGFpbC5zcGxpdCgvW1xcXFxcXC9dKy8pLCAhaXNBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICBpZiAoIXRhaWwgJiYgIWlzQWJzb2x1dGUpIHtcclxuICAgIHRhaWwgPSAnLic7XHJcbiAgfVxyXG4gIGlmICh0YWlsICYmIHRyYWlsaW5nU2xhc2gpIHtcclxuICAgIHRhaWwgKz0gJ1xcXFwnO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYGRldmljZWAgcG9pbnRzIHRvIGFuIFVOQyByb290LlxyXG4gIC8vIEFsc28gc3F1YXNoIG11bHRpcGxlIHNsYXNoZXMgaW50byBhIHNpbmdsZSBvbmUgd2hlcmUgYXBwcm9wcmlhdGUuXHJcbiAgaWYgKGlzVW5jKSB7XHJcbiAgICBkZXZpY2UgPSBub3JtYWxpemVVTkNSb290KGRldmljZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGV2aWNlICsgKGlzQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyB0YWlsO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHdpbjMyU3RhdFBhdGgocGF0aCkuaXNBYnNvbHV0ZTtcclxufTtcclxuXHJcbndpbjMyLmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aHMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhhcmcpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJnKSB7XHJcbiAgICAgIHBhdGhzLnB1c2goYXJnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBqb2luZWQgPSBwYXRocy5qb2luKCdcXFxcJyk7XHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBqb2luZWQgcGF0aCBkb2Vzbid0IHN0YXJ0IHdpdGggdHdvIHNsYXNoZXMsIGJlY2F1c2VcclxuICAvLyBub3JtYWxpemUoKSB3aWxsIG1pc3Rha2UgaXQgZm9yIGFuIFVOQyBwYXRoIHRoZW4uXHJcbiAgLy9cclxuICAvLyBUaGlzIHN0ZXAgaXMgc2tpcHBlZCB3aGVuIGl0IGlzIHZlcnkgY2xlYXIgdGhhdCB0aGUgdXNlciBhY3R1YWxseVxyXG4gIC8vIGludGVuZGVkIHRvIHBvaW50IGF0IGFuIFVOQyBwYXRoLiBUaGlzIGlzIGFzc3VtZWQgd2hlbiB0aGUgZmlyc3RcclxuICAvLyBub24tZW1wdHkgc3RyaW5nIGFyZ3VtZW50cyBzdGFydHMgd2l0aCBleGFjdGx5IHR3byBzbGFzaGVzIGZvbGxvd2VkIGJ5XHJcbiAgLy8gYXQgbGVhc3Qgb25lIG1vcmUgbm9uLXNsYXNoIGNoYXJhY3Rlci5cclxuICAvL1xyXG4gIC8vIE5vdGUgdGhhdCBmb3Igbm9ybWFsaXplKCkgdG8gdHJlYXQgYSBwYXRoIGFzIGFuIFVOQyBwYXRoIGl0IG5lZWRzIHRvXHJcbiAgLy8gaGF2ZSBhdCBsZWFzdCAyIGNvbXBvbmVudHMsIHNvIHdlIGRvbid0IGZpbHRlciBmb3IgdGhhdCBoZXJlLlxyXG4gIC8vIFRoaXMgbWVhbnMgdGhhdCB0aGUgdXNlciBjYW4gdXNlIGpvaW4gdG8gY29uc3RydWN0IFVOQyBwYXRocyBmcm9tXHJcbiAgLy8gYSBzZXJ2ZXIgbmFtZSBhbmQgYSBzaGFyZSBuYW1lOyBmb3IgZXhhbXBsZTpcclxuICAvLyAgIHBhdGguam9pbignLy9zZXJ2ZXInLCAnc2hhcmUnKSAtPiAnXFxcXFxcXFxzZXJ2ZXJcXFxcc2hhcmVcXCcpXHJcbiAgaWYgKCEvXltcXFxcXFwvXXsyfVteXFxcXFxcL10vLnRlc3QocGF0aHNbMF0pKSB7XHJcbiAgICBqb2luZWQgPSBqb2luZWQucmVwbGFjZSgvXltcXFxcXFwvXXsyLH0vLCAnXFxcXCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdpbjMyLm5vcm1hbGl6ZShqb2luZWQpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIGl0IHdpbGwgc29sdmUgdGhlIHJlbGF0aXZlIHBhdGggZnJvbSAnZnJvbScgdG8gJ3RvJywgZm9yIGluc3RhbmNlOlxyXG4vLyBmcm9tID0gJ0M6XFxcXG9yYW5kZWFcXFxcdGVzdFxcXFxhYWEnXHJcbi8vIHRvID0gJ0M6XFxcXG9yYW5kZWFcXFxcaW1wbFxcXFxiYmInXHJcbi8vIFRoZSBvdXRwdXQgb2YgdGhlIGZ1bmN0aW9uIHNob3VsZCBiZTogJy4uXFxcXC4uXFxcXGltcGxcXFxcYmJiJ1xyXG53aW4zMi5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XHJcbiAgZnJvbSA9IHdpbjMyLnJlc29sdmUoZnJvbSk7XHJcbiAgdG8gPSB3aW4zMi5yZXNvbHZlKHRvKTtcclxuXHJcbiAgLy8gd2luZG93cyBpcyBub3QgY2FzZSBzZW5zaXRpdmVcclxuICB2YXIgbG93ZXJGcm9tID0gZnJvbS50b0xvd2VyQ2FzZSgpO1xyXG4gIHZhciBsb3dlclRvID0gdG8udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgdmFyIHRvUGFydHMgPSB0cmltQXJyYXkodG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsb3dlckZyb21QYXJ0cyA9IHRyaW1BcnJheShsb3dlckZyb20uc3BsaXQoJ1xcXFwnKSk7XHJcbiAgdmFyIGxvd2VyVG9QYXJ0cyA9IHRyaW1BcnJheShsb3dlclRvLnNwbGl0KCdcXFxcJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4obG93ZXJGcm9tUGFydHMubGVuZ3RoLCBsb3dlclRvUGFydHMubGVuZ3RoKTtcclxuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChsb3dlckZyb21QYXJ0c1tpXSAhPT0gbG93ZXJUb1BhcnRzW2ldKSB7XHJcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHNhbWVQYXJ0c0xlbmd0aCA9PSAwKSB7XHJcbiAgICByZXR1cm4gdG87XHJcbiAgfVxyXG5cclxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgbG93ZXJGcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignXFxcXCcpO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLl9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAvLyBOb3RlOiB0aGlzIHdpbGwgKnByb2JhYmx5KiB0aHJvdyBzb21ld2hlcmUuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcblxyXG4gIGlmICghcGF0aCkge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9IHdpbjMyLnJlc29sdmUocGF0aCk7XHJcblxyXG4gIGlmICgvXlthLXpBLVpdXFw6XFxcXC8udGVzdChyZXNvbHZlZFBhdGgpKSB7XHJcbiAgICAvLyBwYXRoIGlzIGxvY2FsIGZpbGVzeXN0ZW0gcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcJyArIHJlc29sdmVkUGF0aDtcclxuICB9IGVsc2UgaWYgKC9eXFxcXFxcXFxbXj8uXS8udGVzdChyZXNvbHZlZFBhdGgpKSB7XHJcbiAgICAvLyBwYXRoIGlzIG5ldHdvcmsgVU5DIHBhdGgsIHdoaWNoIG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxyXG4gICAgLy8gdG8gbG9uZyBVTkMgcGF0aC5cclxuICAgIHJldHVybiAnXFxcXFxcXFw/XFxcXFVOQ1xcXFwnICsgcmVzb2x2ZWRQYXRoLnN1YnN0cmluZygyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXRoO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmRpcm5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3BsaXRQYXRoKHBhdGgpLFxyXG4gICAgICByb290ID0gcmVzdWx0WzBdLFxyXG4gICAgICBkaXIgPSByZXN1bHRbMV07XHJcblxyXG4gIGlmICghcm9vdCAmJiAhZGlyKSB7XHJcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcclxuICAgIHJldHVybiAnLic7XHJcbiAgfVxyXG5cclxuICBpZiAoZGlyKSB7XHJcbiAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxyXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdCArIGRpcjtcclxufTtcclxuXHJcblxyXG53aW4zMi5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xyXG4gIHZhciBmID0gd2luMzJTcGxpdFBhdGgocGF0aClbMl07XHJcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xyXG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XHJcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIGY7XHJcbn07XHJcblxyXG5cclxud2luMzIuZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTcGxpdFBhdGgocGF0aClbM107XHJcbn07XHJcblxyXG5cclxud2luMzIuZm9ybWF0ID0gZnVuY3Rpb24ocGF0aE9iamVjdCkge1xyXG4gIGlmICghdXRpbC5pc09iamVjdChwYXRoT2JqZWN0KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aE9iamVjdCcgbXVzdCBiZSBhbiBvYmplY3QsIG5vdCBcIiArIHR5cGVvZiBwYXRoT2JqZWN0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvb3QgPSBwYXRoT2JqZWN0LnJvb3QgfHwgJyc7XHJcblxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhyb290KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIidwYXRoT2JqZWN0LnJvb3QnIG11c3QgYmUgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBub3QgXCIgK1xyXG4gICAgICAgIHR5cGVvZiBwYXRoT2JqZWN0LnJvb3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGlyID0gcGF0aE9iamVjdC5kaXI7XHJcbiAgdmFyIGJhc2UgPSBwYXRoT2JqZWN0LmJhc2UgfHwgJyc7XHJcbiAgaWYgKCFkaXIpIHtcclxuICAgIHJldHVybiBiYXNlO1xyXG4gIH1cclxuICBpZiAoZGlyW2Rpci5sZW5ndGggLSAxXSA9PT0gd2luMzIuc2VwKSB7XHJcbiAgICByZXR1cm4gZGlyICsgYmFzZTtcclxuICB9XHJcbiAgcmV0dXJuIGRpciArIHdpbjMyLnNlcCArIGJhc2U7XHJcbn07XHJcblxyXG5cclxud2luMzIucGFyc2UgPSBmdW5jdGlvbihwYXRoU3RyaW5nKSB7XHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGhTdHJpbmcpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoU3RyaW5nJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgcGF0aFN0cmluZ1xyXG4gICAgKTtcclxuICB9XHJcbiAgdmFyIGFsbFBhcnRzID0gd2luMzJTcGxpdFBhdGgocGF0aFN0cmluZyk7XHJcbiAgaWYgKCFhbGxQYXJ0cyB8fCBhbGxQYXJ0cy5sZW5ndGggIT09IDQpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHBhdGggJ1wiICsgcGF0aFN0cmluZyArIFwiJ1wiKTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbndpbjMyLnNlcCA9ICdcXFxcJztcclxud2luMzIuZGVsaW1pdGVyID0gJzsnO1xyXG5cclxuXHJcbi8vIFNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XSwgdW5peCB2ZXJzaW9uXHJcbi8vICdyb290JyBpcyBqdXN0IGEgc2xhc2gsIG9yIG5vdGhpbmcuXHJcbnZhciBzcGxpdFBhdGhSZSA9XHJcbiAgICAvXihcXC8/fCkoW1xcc1xcU10qPykoKD86XFwuezEsMn18W15cXC9dKz98KShcXC5bXi5cXC9dKnwpKSg/OltcXC9dKikkLztcclxudmFyIHBvc2l4ID0ge307XHJcblxyXG5cclxuZnVuY3Rpb24gcG9zaXhTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICByZXR1cm4gc3BsaXRQYXRoUmUuZXhlYyhmaWxlbmFtZSkuc2xpY2UoMSk7XHJcbn1cclxuXHJcblxyXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xyXG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XHJcblxyXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcclxuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoWzBdID09PSAnLyc7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XHJcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxyXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XHJcblxyXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcclxufTtcclxuXHJcbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciBpc0Fic29sdXRlID0gcG9zaXguaXNBYnNvbHV0ZShwYXRoKSxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHBhdGggJiYgcGF0aFtwYXRoLmxlbmd0aCAtIDFdID09PSAnLyc7XHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxyXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShwYXRoLnNwbGl0KCcvJyksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XHJcblxyXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgcGF0aCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgcGF0aCArPSAnLyc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xyXG59O1xyXG5cclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xyXG59O1xyXG5cclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5qb2luID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHBhdGggPSAnJztcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHNlZ21lbnQgPSBhcmd1bWVudHNbaV07XHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcoc2VnbWVudCkpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgIGlmICghcGF0aCkge1xyXG4gICAgICAgIHBhdGggKz0gc2VnbWVudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXRoICs9ICcvJyArIHNlZ21lbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBvc2l4Lm5vcm1hbGl6ZShwYXRoKTtcclxufTtcclxuXHJcblxyXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gcG9zaXgucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XHJcbiAgdG8gPSBwb3NpeC5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XHJcblxyXG4gIHZhciBmcm9tUGFydHMgPSB0cmltQXJyYXkoZnJvbS5zcGxpdCgnLycpKTtcclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnLycpKTtcclxuXHJcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcclxuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xyXG4gIH1cclxuXHJcbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5fbWFrZUxvbmcgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxucG9zaXguZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gcG9zaXhTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSBwb3NpeFNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG5wb3NpeC5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiBwb3NpeFNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpciA/IHBhdGhPYmplY3QuZGlyICsgcG9zaXguc2VwIDogJyc7XHJcbiAgdmFyIGJhc2UgPSBwYXRoT2JqZWN0LmJhc2UgfHwgJyc7XHJcbiAgcmV0dXJuIGRpciArIGJhc2U7XHJcbn07XHJcblxyXG5cclxucG9zaXgucGFyc2UgPSBmdW5jdGlvbihwYXRoU3RyaW5nKSB7XHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGhTdHJpbmcpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoU3RyaW5nJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgcGF0aFN0cmluZ1xyXG4gICAgKTtcclxuICB9XHJcbiAgdmFyIGFsbFBhcnRzID0gcG9zaXhTcGxpdFBhdGgocGF0aFN0cmluZyk7XHJcbiAgaWYgKCFhbGxQYXJ0cyB8fCBhbGxQYXJ0cy5sZW5ndGggIT09IDQpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHBhdGggJ1wiICsgcGF0aFN0cmluZyArIFwiJ1wiKTtcclxuICB9XHJcbiAgYWxsUGFydHNbMV0gPSBhbGxQYXJ0c1sxXSB8fCAnJztcclxuICBhbGxQYXJ0c1syXSA9IGFsbFBhcnRzWzJdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzNdID0gYWxsUGFydHNbM10gfHwgJyc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByb290OiBhbGxQYXJ0c1swXSxcclxuICAgIGRpcjogYWxsUGFydHNbMF0gKyBhbGxQYXJ0c1sxXS5zbGljZSgwLCAtMSksXHJcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcclxuICAgIGV4dDogYWxsUGFydHNbM10sXHJcbiAgICBuYW1lOiBhbGxQYXJ0c1syXS5zbGljZSgwLCBhbGxQYXJ0c1syXS5sZW5ndGggLSBhbGxQYXJ0c1szXS5sZW5ndGgpXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5zZXAgPSAnLyc7XHJcbnBvc2l4LmRlbGltaXRlciA9ICc6JztcclxuXHJcblxyXG5pZiAoaXNXaW5kb3dzKVxyXG4gIG1vZHVsZS5leHBvcnRzID0gd2luMzI7XHJcbmVsc2UgLyogcG9zaXggKi9cclxuICBtb2R1bGUuZXhwb3J0cyA9IHBvc2l4O1xyXG5cclxubW9kdWxlLmV4cG9ydHMucG9zaXggPSBwb3NpeDtcclxubW9kdWxlLmV4cG9ydHMud2luMzIgPSB3aW4zMjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3BhdGgvcGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IG5vb3AgPSAoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgdGhyb3cgRXJyb3IoJ21ldGhvZCB1bnN1cHBvcnRlZCBpbiBpc29tb3JwaGljLXBhdGgnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvbm9vcC50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcbmltcG9ydCB7IEV4cG9ydFNwZWMgfSBmcm9tICcuL0V4cG9ydC5zcGVjJztcbmltcG9ydCB7IFBhdGhTcGVjIH0gZnJvbSAnLi9QYXRoLkJyb3dzZXIuc3BlYyc7XG5pbXBvcnQgeyBQbGF0Zm9ybVNwZWMgfSBmcm9tICcuL1BsYXRmb3JtLkJyb3dzZXIuc3BlYyc7XG5cbmNvbnN0IElzb21vcnBoaWNQYXRoVGVzdHMgPSBbXG4gIEV4cG9ydFNwZWMsXG4gIFBhdGhTcGVjLFxuICBQbGF0Zm9ybVNwZWMsXG5dO1xuY29uc3QgdGVzdCA9IG5ldyB0c1VuaXQuVGVzdChJc29tb3JwaGljUGF0aFRlc3RzKTtcbmNvbnN0IHJlc3VsdCA9IHRlc3QucnVuKCk7XG5yZXN1bHQuc2hvd1Jlc3VsdHMoJ3Jlc3VsdHMnKTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc29sZS5sb2cocmVzdWx0LmdldFRhcFJlc3VsdHMoKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L1J1bm5lci5Ccm93c2VyLnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vdHNVbml0XCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RzVW5pdEFzeW5jXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRzVW5pdE1vZHVsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHMtdW5pdC9kaXN0L3NyYy9Uc1VuaXRNb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNVbml0XzEgPSByZXF1aXJlKFwiLi90c1VuaXRcIik7XG52YXIgdHNVbml0XzIgPSByZXF1aXJlKFwiLi90c1VuaXRcIik7XG5leHBvcnRzLlRlc3QgPSB0c1VuaXRfMi5UZXN0O1xuZXhwb3J0cy5UZXN0Q29udGV4dCA9IHRzVW5pdF8yLlRlc3RDb250ZXh0O1xuZXhwb3J0cy5UZXN0Q2xhc3MgPSB0c1VuaXRfMi5UZXN0Q2xhc3M7XG5leHBvcnRzLkZha2VGYWN0b3J5ID0gdHNVbml0XzIuRmFrZUZhY3Rvcnk7XG5leHBvcnRzLlRlc3REZXNjcmlwdGlvbiA9IHRzVW5pdF8yLlRlc3REZXNjcmlwdGlvbjtcbmV4cG9ydHMuVGVzdERlZmluaXRpb24gPSB0c1VuaXRfMi5UZXN0RGVmaW5pdGlvbjtcbmNsYXNzIFRlc3RBc3luYyBleHRlbmRzIHRzVW5pdF8xLlRlc3Qge1xuICAgIHJ1bkFsbCh0ZXN0cywgdGVzdFJ1bkxpbWl0ZXIpIHtcbiAgICAgICAgbGV0IHRoaXNUZXN0ID0gdGVzdHNbMF07XG4gICAgICAgIHZhciB0ZXN0Q2xhc3MgPSB0aGlzVGVzdC50ZXN0Q2xhc3M7XG4gICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICB2YXIgdGVzdHNHcm91cE5hbWUgPSB0aGlzVGVzdC5uYW1lO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IHRzVW5pdF8xLkZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0RnVuY3Rpb25OYW1lcyh0ZXN0Q2xhc3MpO1xuICAgICAgICBsZXQgZnVuY3Rpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IHVuaXRUZXN0TmFtZSA9IHByb3BlcnR5TmFtZXNbal07XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNSZXNlcnZlZEZ1bmN0aW9uTmFtZSh1bml0VGVzdE5hbWUpICYmXG4gICAgICAgICAgICAgICAgISh1bml0VGVzdE5hbWUuc3Vic3RyaW5nKDAsIHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeC5sZW5ndGgpID09PSB0aGlzLnByaXZhdGVNZW1iZXJQcmVmaXgpICYmXG4gICAgICAgICAgICAgICAgISh0eXBlb2YgZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdICE9PSAnZnVuY3Rpb24nKSAmJlxuICAgICAgICAgICAgICAgICghdGVzdFJ1bkxpbWl0ZXIgfHwgdGVzdFJ1bkxpbWl0ZXIuaXNUZXN0QWN0aXZlKHVuaXRUZXN0TmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zLnB1c2godW5pdFRlc3ROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVtYWluaW5nVGVzdHMgPSB0ZXN0cy5zbGljZSgxKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnJ1bkFsbEZ1bmN0aW9ucyh0aGlzVGVzdCwgZnVuY3Rpb25zLCB0ZXN0UnVuTGltaXRlcik7XG4gICAgICAgIGlmIChyZW1haW5pbmdUZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5ydW5BbGwocmVtYWluaW5nVGVzdHMsIHRlc3RSdW5MaW1pdGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJ1bkFsbEZ1bmN0aW9ucyh0aGlzVGVzdCwgZnVuY3Rpb25OYW1lcywgdGVzdFJ1bkxpbWl0ZXIpIHtcbiAgICAgICAgbGV0IHVuaXRUZXN0TmFtZSA9IGZ1bmN0aW9uTmFtZXNbMF07XG4gICAgICAgIGxldCByZW1haW5pbmdGdW5jdGlvbnMgPSBmdW5jdGlvbk5hbWVzLnNsaWNlKDEpO1xuICAgICAgICB2YXIgdGVzdENsYXNzID0gdGhpc1Rlc3QudGVzdENsYXNzO1xuICAgICAgICB2YXIgZHluYW1pY1Rlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgdmFyIHRlc3RzR3JvdXBOYW1lID0gdGhpc1Rlc3QubmFtZTtcbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIGlmICh0eXBlb2YgZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLnBhcmFtZXRlcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMucnVuQWxsUGFyYW1ldGVycyh0aGlzVGVzdCwgdW5pdFRlc3ROYW1lLCAwLCB0ZXN0UnVuTGltaXRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5ydW5TaW5nbGVUZXN0QXN5bmModGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtYWluaW5nRnVuY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5ydW5BbGxGdW5jdGlvbnModGhpc1Rlc3QsIHJlbWFpbmluZ0Z1bmN0aW9ucywgdGVzdFJ1bkxpbWl0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9taXNlLnRoZW4oKHgpID0+IHtcbiAgICAgICAgICAgIHRlc3RDbGFzcy50ZWFyRG93biAmJiB0ZXN0Q2xhc3MudGVhckRvd24oKTtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICB0ZXN0Q2xhc3MudGVhckRvd24gJiYgdGVzdENsYXNzLnRlYXJEb3duKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcnVuQWxsUGFyYW1ldGVycyh0aGlzVGVzdCwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJJbmRleCwgdGVzdFJ1bkxpbWl0ZXIpIHtcbiAgICAgICAgbGV0IHRlc3RDbGFzcyA9IHRoaXNUZXN0LnRlc3RDbGFzcztcbiAgICAgICAgbGV0IGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgIGxldCB0ZXN0c0dyb3VwTmFtZSA9IHRoaXNUZXN0Lm5hbWU7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJzID0gZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLnBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBtYXhJbmRleCA9IHBhcmFtZXRlcnMubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyYW1ldGVySW5kZXg7XG4gICAgICAgIGlmICh0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgcGFyYW1ldGVycy5sZW5ndGggJiYgIXRlc3RSdW5MaW1pdGVyLmlzUGFyYW1ldGVyc1NldEFjdGl2ZShpbmRleCkpIHtcbiAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IHBhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW5TaW5nbGVUZXN0QXN5bmModGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lLCBwYXJhbWV0ZXJzLCBpbmRleClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnJ1bkFsbFBhcmFtZXRlcnModGhpc1Rlc3QsIHVuaXRUZXN0TmFtZSwgaW5kZXggKyAxLCB0ZXN0UnVuTGltaXRlcikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XG4gICAgfVxuICAgIHJ1blNpbmdsZVRlc3RBc3luYyh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUsIHBhcmFtZXRlcnMgPSBudWxsLCBwYXJhbWV0ZXJTZXRJbmRleCA9IG51bGwpIHtcbiAgICAgICAgLy8gcnVubmluZyBldmVyeXRoaW5nIGluc2lkZSAudGhlbiBzYXZlcyB1cyBhIHRyeS9jYXRjaFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0ZXN0Q2xhc3Muc2V0VXAgJiYgdGVzdENsYXNzLnNldFVwKCk7XG4gICAgICAgICAgICB2YXIgZHluYW1pY1Rlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gKHBhcmFtZXRlclNldEluZGV4ICE9PSBudWxsKSA/IHBhcmFtZXRlcnNbcGFyYW1ldGVyU2V0SW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0uYXBwbHkodGVzdENsYXNzLCBhcmdzKTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhc3Nlcy5wdXNoKG5ldyB0c1VuaXRfMS5UZXN0RGVzY3JpcHRpb24odGVzdHNHcm91cE5hbWUsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVyU2V0SW5kZXgsICdPSycpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyB0c1VuaXRfMS5UZXN0RGVzY3JpcHRpb24odGVzdHNHcm91cE5hbWUsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVyU2V0SW5kZXgsIGVyci50b1N0cmluZygpKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bkFzeW5jKHRlc3RSdW5MaW1pdGVyID0gbnVsbCkge1xuICAgICAgICB2YXIgcGFyYW1ldGVycyA9IG51bGw7XG4gICAgICAgIHZhciB0ZXN0Q29udGV4dCA9IG5ldyB0c1VuaXRfMS5UZXN0Q29udGV4dCgpO1xuICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVzdFJ1bkxpbWl0ZXIgPSB0aGlzLnRlc3RSdW5MaW1pdGVyO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZXN0cyA9IHRoaXMudGVzdHM7XG4gICAgICAgIGlmICh0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICAgICAgdGVzdHMgPSB0ZXN0cy5maWx0ZXIoKHgpID0+IHRlc3RSdW5MaW1pdGVyLmlzVGVzdHNHcm91cEFjdGl2ZSh4Lm5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ydW5BbGwodGVzdHMsIHRlc3RSdW5MaW1pdGVyKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZSBydW5Bc3luY1wiKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlIHJ1bkFzeW5jXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdEFzeW5jID0gVGVzdEFzeW5jO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHNVbml0QXN5bmMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzLXVuaXQvZGlzdC9zcmMvdHNVbml0QXN5bmMuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=