(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("util"));
	else if(typeof define === 'function' && define.amd)
		define(["util"], factory);
	else if(typeof exports === 'object')
		exports["isomorphic-path"] = factory(require("util"));
	else
		root["isomorphic-path"] = factory(root["util"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(1);
const platform_1 = __webpack_require__(4);
const noop_1 = __webpack_require__(3);
const unsupportedMethods = {
    resolve: noop_1.noop,
    relative: noop_1.noop,
};
const win32Runtime = path_1.win32;
exports.win32 = win32Runtime;
const posixRuntime = path_1.posix;
exports.posix = posixRuntime;
let defaultExport;
if (platform_1.isWin()) {
    defaultExport = Object.assign({}, win32Runtime);
}
else {
    defaultExport = Object.assign({}, posixRuntime);
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
exports.sepRuntime = sepRuntime;
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
    exports.sepRuntime = sepRuntime = win32Runtime.sep;
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
    exports.sepRuntime = sepRuntime = posixRuntime.sep;
    exports.delimiter = delimiterRuntime = posixRuntime.delimiter;
    exports.parse = parseRuntime = posixRuntime.parse;
    exports.format = formatRuntime = posixRuntime.format;
}
exports.default = defaultExport;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
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
var util = __webpack_require__(5);


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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = (from, to) => {
    throw Error('method unsupported in isomorphic-path');
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMDY2ZDRiNWY3ZTlmZTFmOThlMCIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaEVBLHNDQUFtRTtBQUNuRSwwQ0FBbUM7QUFDbkMsc0NBQThCO0FBRTlCLE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsT0FBTyxFQUFFLFdBQUk7SUFDYixRQUFRLEVBQUUsV0FBSTtDQUNmLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxZQUFTLENBQUM7QUFpRWIsNkJBQUs7QUFoRXZCLE1BQU0sWUFBWSxH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O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixFQUFFOztBQUUxQjtBQUNBO0FBQ0EsdUJBQXVCLElBQUk7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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SUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVc7V0FDdEMsT0FBTyxTQUFTLENBQUMsUUFBUSxLQUFLLFFBQVE7V0FDdEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVXLGlCQUFTLEdBQUcsR0FBWSxFQUFFO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRVcsY0FBTSxHQUFHLEdBQVksRUFBRTtJQUNsQyxNQUFNLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsQ0FBQztBQUN6RSxDQUFDLENBQUM7Ozs7Ozs7QUNsQ0YsaUMiLCJmaWxlIjoiaXNvbW9ycGhpYy1wYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ1dGlsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlzb21vcnBoaWMtcGF0aFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInV0aWxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImlzb21vcnBoaWMtcGF0aFwiXSA9IGZhY3Rvcnkocm9vdFtcInV0aWxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMDY2ZDRiNWY3ZTlmZTFmOThlMCIsImltcG9ydCB7IHdpbjMyIGFzIHdpbjMyQmFzZSwgcG9zaXggYXMgcG9zaXhCYXNlIH0gZnJvbSAncGF0aC9wYXRoJztcbmltcG9ydCB7IGlzV2luIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9ub29wJztcblxuY29uc3QgdW5zdXBwb3J0ZWRNZXRob2RzID0ge1xuICByZXNvbHZlOiBub29wLFxuICByZWxhdGl2ZTogbm9vcCxcbn07XG5cbmNvbnN0IHdpbjMyUnVudGltZSA9IHdpbjMyQmFzZTtcbmNvbnN0IHBvc2l4UnVudGltZSA9IHBvc2l4QmFzZTtcblxubGV0IGRlZmF1bHRFeHBvcnQ7XG5pZiAoaXNXaW4oKSkge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luMzJSdW50aW1lKTtcbn0gZWxzZSB7XG4gIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwb3NpeFJ1bnRpbWUpO1xufVxubGV0IG5vcm1hbGl6ZVJ1bnRpbWU7XG5sZXQgam9pblJ1bnRpbWU7XG5sZXQgcmVzb2x2ZVJ1bnRpbWU7XG5sZXQgaXNBYnNvbHV0ZVJ1bnRpbWU7XG5sZXQgcmVsYXRpdmVSdW50aW1lO1xubGV0IGRpcm5hbWVSdW50aW1lO1xubGV0IGJhc2VuYW1lUnVudGltZTtcbmxldCBleHRuYW1lUnVudGltZTtcbmxldCBzZXBSdW50aW1lO1xubGV0IGRlbGltaXRlclJ1bnRpbWU7XG5sZXQgcGFyc2VSdW50aW1lO1xubGV0IGZvcm1hdFJ1bnRpbWU7XG5cbmlmIChpc1dpbigpKSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHdpbjMyUnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHdpbjMyUnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHdpbjMyUnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZm9ybWF0O1xufSBlbHNlIHtcbiAgbm9ybWFsaXplUnVudGltZSA9IHBvc2l4UnVudGltZS5ub3JtYWxpemU7XG4gIGpvaW5SdW50aW1lID0gcG9zaXhSdW50aW1lLmpvaW47XG4gIHJlc29sdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlc29sdmU7XG4gIGlzQWJzb2x1dGVSdW50aW1lID0gcG9zaXhSdW50aW1lLmlzQWJzb2x1dGU7XG4gIHJlbGF0aXZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZWxhdGl2ZTtcbiAgZGlybmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGlybmFtZTtcbiAgYmFzZW5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmJhc2VuYW1lO1xuICBleHRuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5leHRuYW1lO1xuICBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcbiAgZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XG4gIHBhcnNlUnVudGltZSA9IHBvc2l4UnVudGltZS5wYXJzZTtcbiAgZm9ybWF0UnVudGltZSA9IHBvc2l4UnVudGltZS5mb3JtYXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRFeHBvcnQ7XG5leHBvcnQge1xuICBub3JtYWxpemVSdW50aW1lIGFzIG5vcm1hbGl6ZSxcbiAgam9pblJ1bnRpbWUgYXMgam9pbixcbiAgcmVzb2x2ZVJ1bnRpbWUgYXMgcmVzb2x2ZSxcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgYXMgaXNBYnNvbHV0ZSxcbiAgcmVsYXRpdmVSdW50aW1lIGFzIHJlbGF0aXZlLFxuICBkaXJuYW1lUnVudGltZSBhcyBkaXJuYW1lLFxuICBiYXNlbmFtZVJ1bnRpbWUgYXMgYmFzZW5hbWUsXG4gIGV4dG5hbWVSdW50aW1lIGFzIGV4dG5hbWUsXG4gIHNlcFJ1bnRpbWUgYXMgc2VwUnVudGltZSxcbiAgZGVsaW1pdGVyUnVudGltZSBhcyBkZWxpbWl0ZXIsXG4gIHBhcnNlUnVudGltZSBhcyBwYXJzZSxcbiAgZm9ybWF0UnVudGltZSBhcyBmb3JtYXQsXG4gIHBvc2l4UnVudGltZSBhcyBwb3NpeCxcbiAgd2luMzJSdW50aW1lIGFzIHdpbjMyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wYXRoLnRzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGF0aC9wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vcGF0aCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXgudHMiLCJleHBvcnQgY29uc3Qgbm9vcCA9IChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9ub29wLnRzIiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1dpbiA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wbGF0Zm9ybS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1dGlsXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==