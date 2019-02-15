(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("util"));
	else if(typeof define === 'function' && define.amd)
		define(["util"], factory);
	else if(typeof exports === 'object')
		exports["nodeRunner"] = factory(require("util"));
	else
		root["nodeRunner"] = factory(root["util"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(9);
const platform_1 = __webpack_require__(5);
const noop_1 = __webpack_require__(10);
const unsupportedMethods = {
    resolve: noop_1.noop,
    relative: noop_1.noop,
};
const win32Runtime = path_1.win32;
exports.win32 = win32Runtime;
const posixRuntime = path_1.posix;
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
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(4));
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

module.exports = __webpack_require__(4);

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNDllMzY4ZGRkYTY3NTM3N2E3ZSIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaEVBLHNDQUFtRTtBQUNuRSwwQ0FBbUM7QUFDbkMsc0NBQThCO0FBRTlCLE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsT0FBTyxFQUFFLFdBQUk7SUFDYixRQUFRLEVBQUUsV0FBSTtDQUNmLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxZQUFTLENBQUM7QUFpRWIsNkJBQUs7QUFoRXZCLE1BQU0sWUFBWSxH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QUFFLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXO1dBQ3RDLE9BQU8sU0FBUyxDQUFDLFFBQVEsS0FBSyxRQUFRO1dBQ3RDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFVyxpQkFBUyxHQUFHLEdBQVksRUFBRTtJQUNyQyxNQUFNLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVXLGNBQU0sR0FBRyxHQUFZLEVBQUU7SUFDbEMsTUFBTSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLENBQUM7QUFDekUsQ0FBQyxDQUFDOzs7Ozs7O0FDbENGLGlDIiwiZmlsZSI6Imlzb21vcnBoaWMtcGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInV0aWxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widXRpbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpc29tb3JwaGljLXBhdGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpc29tb3JwaGljLXBhdGhcIl0gPSBmYWN0b3J5KHJvb3RbXCJ1dGlsXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjQ5ZTM2OGRkZGE2NzUzNzdhN2UiLCJpbXBvcnQgeyB3aW4zMiBhcyB3aW4zMkJhc2UsIHBvc2l4IGFzIHBvc2l4QmFzZSB9IGZyb20gJ3BhdGgvcGF0aCc7XG5pbXBvcnQgeyBpc1dpbiB9IGZyb20gJy4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vbm9vcCc7XG5cbmNvbnN0IHVuc3VwcG9ydGVkTWV0aG9kcyA9IHtcbiAgcmVzb2x2ZTogbm9vcCxcbiAgcmVsYXRpdmU6IG5vb3AsXG59O1xuXG5jb25zdCB3aW4zMlJ1bnRpbWUgPSB3aW4zMkJhc2U7XG5jb25zdCBwb3NpeFJ1bnRpbWUgPSBwb3NpeEJhc2U7XG5cbmxldCBkZWZhdWx0RXhwb3J0ID0ge3dpbjMyOiB3aW4zMlJ1bnRpbWUsIHBvc2l4OiBwb3NpeFJ1bnRpbWV9O1xuaWYgKGlzV2luKCkpIHtcbiAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRFeHBvcnQsIHdpbjMyUnVudGltZSk7XG59IGVsc2Uge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdEV4cG9ydCwgcG9zaXhSdW50aW1lKTtcbn1cbmxldCBub3JtYWxpemVSdW50aW1lO1xubGV0IGpvaW5SdW50aW1lO1xubGV0IHJlc29sdmVSdW50aW1lO1xubGV0IGlzQWJzb2x1dGVSdW50aW1lO1xubGV0IHJlbGF0aXZlUnVudGltZTtcbmxldCBkaXJuYW1lUnVudGltZTtcbmxldCBiYXNlbmFtZVJ1bnRpbWU7XG5sZXQgZXh0bmFtZVJ1bnRpbWU7XG5sZXQgc2VwUnVudGltZTtcbmxldCBkZWxpbWl0ZXJSdW50aW1lO1xubGV0IHBhcnNlUnVudGltZTtcbmxldCBmb3JtYXRSdW50aW1lO1xuXG5pZiAoaXNXaW4oKSkge1xuICBub3JtYWxpemVSdW50aW1lID0gd2luMzJSdW50aW1lLm5vcm1hbGl6ZTtcbiAgam9pblJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuam9pbjtcbiAgcmVzb2x2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVzb2x2ZTtcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuaXNBYnNvbHV0ZTtcbiAgcmVsYXRpdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlbGF0aXZlO1xuICBkaXJuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5kaXJuYW1lO1xuICBiYXNlbmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuYmFzZW5hbWU7XG4gIGV4dG5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmV4dG5hbWU7XG4gIHNlcFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuc2VwO1xuICBkZWxpbWl0ZXJSdW50aW1lID0gd2luMzJSdW50aW1lLmRlbGltaXRlcjtcbiAgcGFyc2VSdW50aW1lID0gd2luMzJSdW50aW1lLnBhcnNlO1xuICBmb3JtYXRSdW50aW1lID0gd2luMzJSdW50aW1lLmZvcm1hdDtcbn0gZWxzZSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHBvc2l4UnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHBvc2l4UnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHBvc2l4UnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZm9ybWF0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0RXhwb3J0O1xuZXhwb3J0IHtcbiAgbm9ybWFsaXplUnVudGltZSBhcyBub3JtYWxpemUsXG4gIGpvaW5SdW50aW1lIGFzIGpvaW4sXG4gIHJlc29sdmVSdW50aW1lIGFzIHJlc29sdmUsXG4gIGlzQWJzb2x1dGVSdW50aW1lIGFzIGlzQWJzb2x1dGUsXG4gIHJlbGF0aXZlUnVudGltZSBhcyByZWxhdGl2ZSxcbiAgZGlybmFtZVJ1bnRpbWUgYXMgZGlybmFtZSxcbiAgYmFzZW5hbWVSdW50aW1lIGFzIGJhc2VuYW1lLFxuICBleHRuYW1lUnVudGltZSBhcyBleHRuYW1lLFxuICBzZXBSdW50aW1lIGFzIHNlcCxcbiAgZGVsaW1pdGVyUnVudGltZSBhcyBkZWxpbWl0ZXIsXG4gIHBhcnNlUnVudGltZSBhcyBwYXJzZSxcbiAgZm9ybWF0UnVudGltZSBhcyBmb3JtYXQsXG4gIHBvc2l4UnVudGltZSBhcyBwb3NpeCxcbiAgd2luMzJSdW50aW1lIGFzIHdpbjMyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wYXRoLnRzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGF0aC9wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vcGF0aCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXgudHMiLCJleHBvcnQgY29uc3Qgbm9vcCA9IChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9ub29wLnRzIiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1dpbiA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wbGF0Zm9ybS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1dGlsXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(0);
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
const tsUnit = __webpack_require__(0);
const isomorphicPath = __webpack_require__(2);
class PathSpec extends tsUnit.TestClass {
    testDefaultExport() {
        delete __webpack_require__.c[/*require.resolve*/(1)];
        process.__defineGetter__('platform', () => 'win32'); // stub platform call
        let path = __webpack_require__(1).default;
        this.areIdentical('\\', path.sep, 'default seperator should be win32 "\\" after in windows environment');
        this.areIdentical(';', path.delimiter, 'default delimiter should be win32 ";" after in windows environment');
        delete __webpack_require__.c[/*require.resolve*/(1)];
        process.__defineGetter__('platform', () => 'darwin'); // stub platform call
        path = __webpack_require__(1).default;
        this.areIdentical('/', path.sep, 'default seperator should be posix "/" after in mac environment');
        this.areIdentical(':', path.delimiter, 'default delimiter should be posix "/" after in mac environment');
    }
    testWin32Basename() {
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('C:\\temp\\myfile.html'), 'win32 basename should parse file name from windows path');
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('/temp/myfile.html'), 'win32 basename should parse file name from posix path');
    }
    testPosixBasename() {
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('C:\\temp\\myfile.html'), 'posix basename should not parse windows path');
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('/temp/myfile.html'), 'posix basename should parse file name from posix path');
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
        this.areIdentical('C:\\temp', isomorphicPath.win32.dirname('C:\\temp\\myfile.html'), 'posix basename should not parse windows path');
        this.areIdentical('/temp', isomorphicPath.win32.dirname('/temp/myfile.html'), 'posix dirname should parse parent directory path from posix path');
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
        this.areIdentical('C:\\temp\\foo\\bar', isomorphicPath.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'), 'win32 should normalize mixed path to windows seperator');
        this.areIdentical('C:\\temp\\foo\\', isomorphicPath.win32.normalize('C:\\temp\\\\foo\\bar\\..\\'), 'win32 should normalize windows path to windows seperator');
        this.areIdentical('\\foo\\bar\\baz\\asdf', isomorphicPath.win32.normalize('/foo/bar//baz/asdf/quux/..'), 'wind32 should normalize posix path to windows seperator');
    }
    testPosixNormalize() {
        this.areIdentical('C:\\temp\\\\foo\\bar\\..\\', isomorphicPath.posix.normalize('C:\\temp\\\\foo\\bar\\..\\'), 'posix should not normalize windows path');
        this.areIdentical('/foo/bar/baz/asdf', isomorphicPath.posix.normalize('/foo/bar//baz/asdf/quux/..'), 'posix should normalize posix path to posix seperator');
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
        this.areIdentical('C:\\foo\\bar\\baz', isomorphicPath.win32.resolve('C:\\foo\\bar', '.\\baz'), 'win32 should resolve windows path');
        this.areIdentical('\\foo\\bar\\baz', isomorphicPath.win32.resolve('/foo/bar', './baz'), 'win32 should resolve posix path to windows format');
    }
    testPosixResolve() {
        this.areNotIdentical('C:\\foo\\bar/.\\baz', isomorphicPath.posix.resolve('C:\\foo\\bar', '.\\baz'), 'posix should not resolve windows path');
        this.areIdentical('/foo/bar/baz', isomorphicPath.posix.resolve('/foo/bar', './baz'), 'posix should resolve posix path');
    }
    testWin32Relative() {
        this.areIdentical('..\\..\\impl\\bbb', isomorphicPath.win32.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'), 'win32 should relative windows path');
        this.areIdentical('..\\..\\impl\\bbb', isomorphicPath.win32.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'), 'win32 should relative posix path to windows format');
    }
    testPosixRelative() {
        this.areIdentical('../.\\baz', isomorphicPath.posix.relative('C:\\foo\\bar', '.\\baz'), 'posix should not relative windows path');
        this.areIdentical('../../impl/bbb', isomorphicPath.posix.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'), 'posix should relative posix path');
    }
}
exports.PathSpec = PathSpec;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(0);
const platform_1 = __webpack_require__(5);
class PlatformSpec extends tsUnit.TestClass {
    testOs() {
        process.__defineGetter__('platform', () => 'win32'); // stub platform call
        this.isTrue(platform_1.isWin(), 'isWin should return true for windows platform id: "win32"');
        this.isFalse(platform_1.isMac(), 'isMac should return false for windows platform id: "win32"');
        process.__defineGetter__('platform', () => 'darwin'); // stub platform call
        this.isFalse(platform_1.isWin(), 'isWin should return false for mac platform id: "darwin"');
        this.isTrue(platform_1.isMac(), 'isMac should return true for mac platform id: "darwin"');
    }
    testEnv() {
        this.isTrue(platform_1.isNode(), 'isNode should return true for node spec');
        this.isFalse(platform_1.isBrowser(), 'isBrowser should return false for browser spec');
    }
}
exports.PlatformSpec = PlatformSpec;


/***/ }),
/* 9 */
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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = (from, to) => {
    throw Error('method unsupported in isomorphic-path');
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(0);
const Export_spec_1 = __webpack_require__(6);
const Path_Node_spec_1 = __webpack_require__(7);
const Platform_Node_spec_1 = __webpack_require__(8);
const IsomorphicPathTests = [
    Export_spec_1.ExportSpec,
    Path_Node_spec_1.PathSpec,
    Platform_Node_spec_1.PlatformSpec,
];
const test = new tsUnit.Test(IsomorphicPathTests);
const result = test.run();
// tslint:disable-next-line
console.log(result.getTapResults());


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));
__export(__webpack_require__(13));
//# sourceMappingURL=TsUnitModule.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit_1 = __webpack_require__(3);
var tsUnit_2 = __webpack_require__(3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NGVmNjg5N2E3ODlhYjk3M2M5YiIsIndlYnBhY2s6Ly8vLi9+L3RzLXVuaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pc29tb3JwaGljLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy8uL3Rlc3QvRXhwb3J0LnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9QYXRoLk5vZGUuc3BlYy50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L1BsYXRmb3JtLk5vZGUuc3BlYy50cyIsIndlYnBhY2s6Ly8vLi9+L3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvbm9vcC50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L1J1bm5lci5Ob2RlLnRzIiwid2VicGFjazovLy8uL34vdHMtdW5pdC9kaXN0L3NyYy9Uc1VuaXRNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdEFzeW5jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QyIsImZpbGUiOiJub2RlUnVubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ1dGlsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5vZGVSdW5uZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJub2RlUnVubmVyXCJdID0gZmFjdG9yeShyb290W1widXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NGVmNjg5N2E3ODlhYjk3M2M5YiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NyYy9Uc1VuaXRNb2R1bGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHdpbjMyIGFzIHdpbjMyQmFzZSwgcG9zaXggYXMgcG9zaXhCYXNlIH0gZnJvbSAncGF0aC9wYXRoJztcbmltcG9ydCB7IGlzV2luIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9ub29wJztcblxuY29uc3QgdW5zdXBwb3J0ZWRNZXRob2RzID0ge1xuICByZXNvbHZlOiBub29wLFxuICByZWxhdGl2ZTogbm9vcCxcbn07XG5cbmNvbnN0IHdpbjMyUnVudGltZSA9IHdpbjMyQmFzZTtcbmNvbnN0IHBvc2l4UnVudGltZSA9IHBvc2l4QmFzZTtcblxubGV0IGRlZmF1bHRFeHBvcnQgPSB7d2luMzI6IHdpbjMyUnVudGltZSwgcG9zaXg6IHBvc2l4UnVudGltZX07XG5pZiAoaXNXaW4oKSkge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdEV4cG9ydCwgd2luMzJSdW50aW1lKTtcbn0gZWxzZSB7XG4gIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0RXhwb3J0LCBwb3NpeFJ1bnRpbWUpO1xufVxubGV0IG5vcm1hbGl6ZVJ1bnRpbWU7XG5sZXQgam9pblJ1bnRpbWU7XG5sZXQgcmVzb2x2ZVJ1bnRpbWU7XG5sZXQgaXNBYnNvbHV0ZVJ1bnRpbWU7XG5sZXQgcmVsYXRpdmVSdW50aW1lO1xubGV0IGRpcm5hbWVSdW50aW1lO1xubGV0IGJhc2VuYW1lUnVudGltZTtcbmxldCBleHRuYW1lUnVudGltZTtcbmxldCBzZXBSdW50aW1lO1xubGV0IGRlbGltaXRlclJ1bnRpbWU7XG5sZXQgcGFyc2VSdW50aW1lO1xubGV0IGZvcm1hdFJ1bnRpbWU7XG5cbmlmIChpc1dpbigpKSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHdpbjMyUnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHdpbjMyUnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHdpbjMyUnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZm9ybWF0O1xufSBlbHNlIHtcbiAgbm9ybWFsaXplUnVudGltZSA9IHBvc2l4UnVudGltZS5ub3JtYWxpemU7XG4gIGpvaW5SdW50aW1lID0gcG9zaXhSdW50aW1lLmpvaW47XG4gIHJlc29sdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlc29sdmU7XG4gIGlzQWJzb2x1dGVSdW50aW1lID0gcG9zaXhSdW50aW1lLmlzQWJzb2x1dGU7XG4gIHJlbGF0aXZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZWxhdGl2ZTtcbiAgZGlybmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGlybmFtZTtcbiAgYmFzZW5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmJhc2VuYW1lO1xuICBleHRuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5leHRuYW1lO1xuICBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcbiAgZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XG4gIHBhcnNlUnVudGltZSA9IHBvc2l4UnVudGltZS5wYXJzZTtcbiAgZm9ybWF0UnVudGltZSA9IHBvc2l4UnVudGltZS5mb3JtYXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRFeHBvcnQ7XG5leHBvcnQge1xuICBub3JtYWxpemVSdW50aW1lIGFzIG5vcm1hbGl6ZSxcbiAgam9pblJ1bnRpbWUgYXMgam9pbixcbiAgcmVzb2x2ZVJ1bnRpbWUgYXMgcmVzb2x2ZSxcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgYXMgaXNBYnNvbHV0ZSxcbiAgcmVsYXRpdmVSdW50aW1lIGFzIHJlbGF0aXZlLFxuICBkaXJuYW1lUnVudGltZSBhcyBkaXJuYW1lLFxuICBiYXNlbmFtZVJ1bnRpbWUgYXMgYmFzZW5hbWUsXG4gIGV4dG5hbWVSdW50aW1lIGFzIGV4dG5hbWUsXG4gIHNlcFJ1bnRpbWUgYXMgc2VwLFxuICBkZWxpbWl0ZXJSdW50aW1lIGFzIGRlbGltaXRlcixcbiAgcGFyc2VSdW50aW1lIGFzIHBhcnNlLFxuICBmb3JtYXRSdW50aW1lIGFzIGZvcm1hdCxcbiAgcG9zaXhSdW50aW1lIGFzIHBvc2l4LFxuICB3aW4zMlJ1bnRpbWUgYXMgd2luMzIsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3BhdGgudHMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInV0aWxcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaXNvbW9ycGhpYy1wYXRoXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiaXNvbW9ycGhpYy1wYXRoXCJdID0gZmFjdG9yeShyb290W1widXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGF0aF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbmNvbnN0IHBsYXRmb3JtXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuY29uc3Qgbm9vcF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbmNvbnN0IHVuc3VwcG9ydGVkTWV0aG9kcyA9IHtcbiAgICByZXNvbHZlOiBub29wXzEubm9vcCxcbiAgICByZWxhdGl2ZTogbm9vcF8xLm5vb3AsXG59O1xuY29uc3Qgd2luMzJSdW50aW1lID0gcGF0aF8xLndpbjMyO1xuZXhwb3J0cy53aW4zMiA9IHdpbjMyUnVudGltZTtcbmNvbnN0IHBvc2l4UnVudGltZSA9IHBhdGhfMS5wb3NpeDtcbmV4cG9ydHMucG9zaXggPSBwb3NpeFJ1bnRpbWU7XG5sZXQgZGVmYXVsdEV4cG9ydCA9IHsgd2luMzI6IHdpbjMyUnVudGltZSwgcG9zaXg6IHBvc2l4UnVudGltZSB9O1xuaWYgKHBsYXRmb3JtXzEuaXNXaW4oKSkge1xuICAgIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0RXhwb3J0LCB3aW4zMlJ1bnRpbWUpO1xufVxuZWxzZSB7XG4gICAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRFeHBvcnQsIHBvc2l4UnVudGltZSk7XG59XG5sZXQgbm9ybWFsaXplUnVudGltZTtcbmV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplUnVudGltZTtcbmxldCBqb2luUnVudGltZTtcbmV4cG9ydHMuam9pbiA9IGpvaW5SdW50aW1lO1xubGV0IHJlc29sdmVSdW50aW1lO1xuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZVJ1bnRpbWU7XG5sZXQgaXNBYnNvbHV0ZVJ1bnRpbWU7XG5leHBvcnRzLmlzQWJzb2x1dGUgPSBpc0Fic29sdXRlUnVudGltZTtcbmxldCByZWxhdGl2ZVJ1bnRpbWU7XG5leHBvcnRzLnJlbGF0aXZlID0gcmVsYXRpdmVSdW50aW1lO1xubGV0IGRpcm5hbWVSdW50aW1lO1xuZXhwb3J0cy5kaXJuYW1lID0gZGlybmFtZVJ1bnRpbWU7XG5sZXQgYmFzZW5hbWVSdW50aW1lO1xuZXhwb3J0cy5iYXNlbmFtZSA9IGJhc2VuYW1lUnVudGltZTtcbmxldCBleHRuYW1lUnVudGltZTtcbmV4cG9ydHMuZXh0bmFtZSA9IGV4dG5hbWVSdW50aW1lO1xubGV0IHNlcFJ1bnRpbWU7XG5leHBvcnRzLnNlcCA9IHNlcFJ1bnRpbWU7XG5sZXQgZGVsaW1pdGVyUnVudGltZTtcbmV4cG9ydHMuZGVsaW1pdGVyID0gZGVsaW1pdGVyUnVudGltZTtcbmxldCBwYXJzZVJ1bnRpbWU7XG5leHBvcnRzLnBhcnNlID0gcGFyc2VSdW50aW1lO1xubGV0IGZvcm1hdFJ1bnRpbWU7XG5leHBvcnRzLmZvcm1hdCA9IGZvcm1hdFJ1bnRpbWU7XG5pZiAocGxhdGZvcm1fMS5pc1dpbigpKSB7XG4gICAgZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemVSdW50aW1lID0gd2luMzJSdW50aW1lLm5vcm1hbGl6ZTtcbiAgICBleHBvcnRzLmpvaW4gPSBqb2luUnVudGltZSA9IHdpbjMyUnVudGltZS5qb2luO1xuICAgIGV4cG9ydHMucmVzb2x2ZSA9IHJlc29sdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlc29sdmU7XG4gICAgZXhwb3J0cy5pc0Fic29sdXRlID0gaXNBYnNvbHV0ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuaXNBYnNvbHV0ZTtcbiAgICBleHBvcnRzLnJlbGF0aXZlID0gcmVsYXRpdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlbGF0aXZlO1xuICAgIGV4cG9ydHMuZGlybmFtZSA9IGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XG4gICAgZXhwb3J0cy5iYXNlbmFtZSA9IGJhc2VuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5iYXNlbmFtZTtcbiAgICBleHBvcnRzLmV4dG5hbWUgPSBleHRuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5leHRuYW1lO1xuICAgIGV4cG9ydHMuc2VwID0gc2VwUnVudGltZSA9IHdpbjMyUnVudGltZS5zZXA7XG4gICAgZXhwb3J0cy5kZWxpbWl0ZXIgPSBkZWxpbWl0ZXJSdW50aW1lID0gd2luMzJSdW50aW1lLmRlbGltaXRlcjtcbiAgICBleHBvcnRzLnBhcnNlID0gcGFyc2VSdW50aW1lID0gd2luMzJSdW50aW1lLnBhcnNlO1xuICAgIGV4cG9ydHMuZm9ybWF0ID0gZm9ybWF0UnVudGltZSA9IHdpbjMyUnVudGltZS5mb3JtYXQ7XG59XG5lbHNlIHtcbiAgICBleHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUubm9ybWFsaXplO1xuICAgIGV4cG9ydHMuam9pbiA9IGpvaW5SdW50aW1lID0gcG9zaXhSdW50aW1lLmpvaW47XG4gICAgZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucmVzb2x2ZTtcbiAgICBleHBvcnRzLmlzQWJzb2x1dGUgPSBpc0Fic29sdXRlUnVudGltZSA9IHBvc2l4UnVudGltZS5pc0Fic29sdXRlO1xuICAgIGV4cG9ydHMucmVsYXRpdmUgPSByZWxhdGl2ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucmVsYXRpdmU7XG4gICAgZXhwb3J0cy5kaXJuYW1lID0gZGlybmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGlybmFtZTtcbiAgICBleHBvcnRzLmJhc2VuYW1lID0gYmFzZW5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmJhc2VuYW1lO1xuICAgIGV4cG9ydHMuZXh0bmFtZSA9IGV4dG5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmV4dG5hbWU7XG4gICAgZXhwb3J0cy5zZXAgPSBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcbiAgICBleHBvcnRzLmRlbGltaXRlciA9IGRlbGltaXRlclJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGVsaW1pdGVyO1xuICAgIGV4cG9ydHMucGFyc2UgPSBwYXJzZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucGFyc2U7XG4gICAgZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXRSdW50aW1lID0gcG9zaXhSdW50aW1lLmZvcm1hdDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRFeHBvcnQ7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcblxyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygwKSk7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm5vb3AgPSAoZnJvbSwgdG8pID0+IHtcbiAgICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNNYWMgPSAoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3NcbiAgICAgICAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICAgICAgICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ2RhcndpbicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICAgICAgICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcbmV4cG9ydHMuaXNXaW4gPSAoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3NcbiAgICAgICAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICAgICAgICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignd2luJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZXhwb3J0cy5pc0Jyb3dzZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufTtcbmV4cG9ydHMuaXNOb2RlID0gKCkgPT4ge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0F5TkRsbE16WTRaR1JrWVRZM05UTTNOMkUzWlNJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmNHRjBhQzUwY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDNCaGRHZ3ZjR0YwYUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWRITWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMjV2YjNBdWRITWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMM0JzWVhSbWIzSnRMblJ6SWl3aWQyVmljR0ZqYXpvdkx5OWxlSFJsY201aGJDQmNJblYwYVd4Y0lpSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0QlExWkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4dFJFRkJNa01zWTBGQll6czdRVUZGZWtRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFEwRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1FVRkRka1FzZVVOQlFXbERMR1ZCUVdVN1FVRkRhRVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc09FUkJRWE5FTEN0RVFVRXJSRHM3UVVGRmNrZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN08wRkRhRVZCTEhORFFVRnRSVHRCUVVOdVJTd3dRMEZCYlVNN1FVRkRia01zYzBOQlFUaENPMEZCUlRsQ0xFMUJRVTBzYTBKQlFXdENMRWRCUVVjN1NVRkRla0lzVDBGQlR5eEZRVUZGTEZkQlFVazdTVUZEWWl4UlFVRlJMRVZCUVVVc1YwRkJTVHREUVVObUxFTkJRVU03UVVGRlJpeE5RVUZOTEZsQlFWa3NSMEZCUnl4WlFVRlRMRU5CUVVNN1FVRnBSV0lzTmtKQlFVczdRVUZvUlhaQ0xFMUJRVTBzV1VGQldTeEhRVUZITEZsQlFWTXNRMEZCUXp0QlFTdEVZaXcyUWtGQlN6dEJRVGRFZGtJc1NVRkJTU3hoUVVGaExFZEJRVWNzUlVGQlF5eExRVUZMTEVWQlFVVXNXVUZCV1N4RlFVRkZMRXRCUVVzc1JVRkJSU3haUVVGWkxFVkJRVU1zUTBGQlF6dEJRVU12UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhuUWtGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFvc1lVRkJZU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMR0ZCUVdFc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU5xUlN4RFFVRkRPMEZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRFRpeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzWVVGQllTeEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUTJwRkxFTkJRVU03UVVGRFJDeEpRVUZKTEdkQ1FVRm5RaXhEUVVGRE8wRkJNa05ETEhGRFFVRlRPMEZCTVVNdlFpeEpRVUZKTEZkQlFWY3NRMEZCUXp0QlFUSkRReXd5UWtGQlNUdEJRVEZEY2tJc1NVRkJTU3hqUVVGakxFTkJRVU03UVVFeVEwTXNhVU5CUVU4N1FVRXhRek5DTEVsQlFVa3NhVUpCUVdsQ0xFTkJRVU03UVVFeVEwTXNkVU5CUVZVN1FVRXhRMnBETEVsQlFVa3NaVUZCWlN4RFFVRkRPMEZCTWtORExHMURRVUZSTzBGQk1VTTNRaXhKUVVGSkxHTkJRV01zUTBGQlF6dEJRVEpEUXl4cFEwRkJUenRCUVRGRE0wSXNTVUZCU1N4bFFVRmxMRU5CUVVNN1FVRXlRME1zYlVOQlFWRTdRVUV4UXpkQ0xFbEJRVWtzWTBGQll5eERRVUZETzBGQk1rTkRMR2xEUVVGUE8wRkJNVU16UWl4SlFVRkpMRlZCUVZVc1EwRkJRenRCUVRKRFF5eDVRa0ZCUnp0QlFURkRia0lzU1VGQlNTeG5Ra0ZCWjBJc1EwRkJRenRCUVRKRFF5eHhRMEZCVXp0QlFURkRMMElzU1VGQlNTeFpRVUZaTEVOQlFVTTdRVUV5UTBNc05rSkJRVXM3UVVFeFEzWkNMRWxCUVVrc1lVRkJZU3hEUVVGRE8wRkJNa05ETEN0Q1FVRk5PMEZCZWtONlFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4blFrRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExb3NiME5CUVdkQ0xFZEJRVWNzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTXhReXd3UWtGQlZ5eEhRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRkRhRU1zWjBOQlFXTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM1JETEhORFFVRnBRaXhIUVVGSExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTTdTVUZETlVNc2EwTkJRV1VzUjBGQlJ5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTNoRExHZERRVUZqTEVkQlFVY3NXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVOMFF5eHJRMEZCWlN4SFFVRkhMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGVFTXNaME5CUVdNc1IwRkJSeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzUkRMSGRDUVVGVkxFZEJRVWNzV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTTVRaXh2UTBGQlowSXNSMEZCUnl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRekZETERSQ1FVRlpMRWRCUVVjc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU5zUXl3NFFrRkJZU3hIUVVGSExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEZEVNc1EwRkJRenRCUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEwNHNiME5CUVdkQ0xFZEJRVWNzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTXhReXd3UWtGQlZ5eEhRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRkRhRU1zWjBOQlFXTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM1JETEhORFFVRnBRaXhIUVVGSExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTTdTVUZETlVNc2EwTkJRV1VzUjBGQlJ5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTNoRExHZERRVUZqTEVkQlFVY3NXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVOMFF5eHJRMEZCWlN4SFFVRkhMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGVFTXNaME5CUVdNc1IwRkJSeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzUkRMSGRDUVVGVkxFZEJRVWNzV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTTVRaXh2UTBGQlowSXNSMEZCUnl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRekZETERSQ1FVRlpMRWRCUVVjc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU5zUXl3NFFrRkJZU3hIUVVGSExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEZEVNc1EwRkJRenRCUVVWRUxHdENRVUZsTEdGQlFXRXNRMEZCUXpzN096czdPenM3UVVNelJEZENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3T3p0QlFVZEJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZwUWl4clFrRkJhMEk3UVVGRGJrTTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hSUVVGUkxHOUNRVUZ2UWp0QlFVTTFRanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4UlFVRlJMRlZCUVZVN1FVRkRiRUk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gzUWtGQmQwSXNSVUZCUlRzN1FVRkZNVUk3UVVGRFFUdEJRVU5CTEhWQ1FVRjFRaXhKUVVGSk96dEJRVVV6UWpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEc5RFFVRnZReXhUUVVGVE8wRkJRemRETzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEdsQ1FVRnBRaXh6UWtGQmMwSTdRVUZEZGtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiME5CUVc5RE8wRkJRM0JETzBGQlEwRXNaMEpCUVdkQ0xFVkJRVVU3UVVGRGJFSXNjVU5CUVhGRExFZEJRVWM3UVVGRGVFTTdPMEZCUlVFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMRmxCUVZrN1FVRkROMEk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3clFrRkJLMElzTWtKQlFUSkNPMEZCUXpGRU8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQkxHOUNRVUZ2UWpzN08wRkJSM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFpDUVVFMlFpeEpRVUZKTzBGQlEycERPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2IwTkJRVzlETERoQ1FVRTRRanRCUVVOc1JUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMSE5DUVVGelFqdEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMRmxCUVZrN1FVRkROMEk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxDdENRVUVyUWl4elFrRkJjMEk3UVVGRGNrUTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEyNXVRa0VzYVVOQlFYVkNPenM3T3pzN096czdPMEZEUVZZc1dVRkJTU3hIUVVGSExFTkJRVU1zU1VGQldTeEZRVUZGTEVWQlFWVXNSVUZCVlN4RlFVRkZPMGxCUTNaRUxFMUJRVTBzUzBGQlN5eERRVUZETEhWRFFVRjFReXhEUVVGRExFTkJRVU03UVVGRGRrUXNRMEZCUXl4RFFVRkRPenM3T3pzN096czdPMEZEUmxjc1lVRkJTeXhIUVVGSExFZEJRVmtzUlVGQlJUdEpRVU5xUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUE8xZEJRMUlzVDBGQlR5eFBRVUZQTEVOQlFVTXNVVUZCVVN4TFFVRkxMRkZCUVZFN1YwRkRjRU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OURMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRFpDeERRVUZETzBsQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzVTBGQlV5eExRVUZMTEZkQlFWYzdWMEZEZUVNc1QwRkJUeXhUUVVGVExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRTdWMEZEZEVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNoRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFRpeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTJZc1EwRkJRenRCUVVOSUxFTkJRVU1zUTBGQlF6dEJRVVZYTEdGQlFVc3NSMEZCUnl4SFFVRlpMRVZCUVVVN1NVRkRha01zUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHp0WFFVTlNMRTlCUVU4c1QwRkJUeXhEUVVGRExGRkJRVkVzUzBGQlN5eFJRVUZSTzFkQlEzQkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNNVF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTJRc1EwRkJRenRKUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRk5CUVZNc1MwRkJTeXhYUVVGWE8xZEJRM1JETEU5QlFVOHNVMEZCVXl4RFFVRkRMRkZCUVZFc1MwRkJTeXhSUVVGUk8xZEJRM1JETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTA0c1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU5tTEVOQlFVTTdRVUZEU0N4RFFVRkRMRU5CUVVNN1FVRkZWeXhwUWtGQlV5eEhRVUZITEVkQlFWa3NSVUZCUlR0SlFVTnlReXhOUVVGTkxFTkJRVU1zVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4RFFVRkRPMEZCUTNaRExFTkJRVU1zUTBGQlF6dEJRVVZYTEdOQlFVMHNSMEZCUnl4SFFVRlpMRVZCUVVVN1NVRkRiRU1zVFVGQlRTeERRVUZETEU5QlFVOHNUVUZCVFN4TFFVRkxMRmRCUVZjc1NVRkJTU3hQUVVGUExFOUJRVThzUzBGQlN5eFhRVUZYTEVOQlFVTTdRVUZEZWtVc1EwRkJReXhEUVVGRE96czdPenM3TzBGRGJFTkdMR2xESWl3aVptbHNaU0k2SW1semIyMXZjbkJvYVdNdGNHRjBhQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29jbVZ4ZFdseVpTaGNJblYwYVd4Y0lpa3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1cxd2lkWFJwYkZ3aVhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pwYzI5dGIzSndhR2xqTFhCaGRHaGNJbDBnUFNCbVlXTjBiM0o1S0hKbGNYVnBjbVVvWENKMWRHbHNYQ0lwS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSnBjMjl0YjNKd2FHbGpMWEJoZEdoY0lsMGdQU0JtWVdOMGIzSjVLSEp2YjNSYlhDSjFkR2xzWENKZEtUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZOVjlmS1NCN1hHNXlaWFIxY200Z1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdsa1pXNTBhWFI1SUdaMWJtTjBhVzl1SUdadmNpQmpZV3hzYVc1bklHaGhjbTF2Ym5rZ2FXMXdiM0owY3lCM2FYUm9JSFJvWlNCamIzSnlaV04wSUdOdmJuUmxlSFJjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVhU0E5SUdaMWJtTjBhVzl1S0haaGJIVmxLU0I3SUhKbGRIVnliaUIyWVd4MVpUc2dmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN1hHNGdYSFJjZEZ4MFhIUmpiMjVtYVdkMWNtRmliR1U2SUdaaGJITmxMRnh1SUZ4MFhIUmNkRngwWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3hjYmlCY2RGeDBYSFJjZEdkbGREb2daMlYwZEdWeVhHNGdYSFJjZEZ4MGZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTWlrN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnTWpRNVpUTTJPR1JrWkdFMk56VXpOemRoTjJVaUxDSnBiWEJ2Y25RZ2V5QjNhVzR6TWlCaGN5QjNhVzR6TWtKaGMyVXNJSEJ2YzJsNElHRnpJSEJ2YzJsNFFtRnpaU0I5SUdaeWIyMGdKM0JoZEdndmNHRjBhQ2M3WEc1cGJYQnZjblFnZXlCcGMxZHBiaUI5SUdaeWIyMGdKeTR2Y0d4aGRHWnZjbTBuTzF4dWFXMXdiM0owSUhzZ2JtOXZjQ0I5SUdaeWIyMGdKeTR2Ym05dmNDYzdYRzVjYm1OdmJuTjBJSFZ1YzNWd2NHOXlkR1ZrVFdWMGFHOWtjeUE5SUh0Y2JpQWdjbVZ6YjJ4MlpUb2dibTl2Y0N4Y2JpQWdjbVZzWVhScGRtVTZJRzV2YjNBc1hHNTlPMXh1WEc1amIyNXpkQ0IzYVc0ek1sSjFiblJwYldVZ1BTQjNhVzR6TWtKaGMyVTdYRzVqYjI1emRDQndiM05wZUZKMWJuUnBiV1VnUFNCd2IzTnBlRUpoYzJVN1hHNWNibXhsZENCa1pXWmhkV3gwUlhod2IzSjBJRDBnZTNkcGJqTXlPaUIzYVc0ek1sSjFiblJwYldVc0lIQnZjMmw0T2lCd2IzTnBlRkoxYm5ScGJXVjlPMXh1YVdZZ0tHbHpWMmx1S0NrcElIdGNiaUFnWkdWbVlYVnNkRVY0Y0c5eWRDQTlJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJR1JsWm1GMWJIUkZlSEJ2Y25Rc0lIZHBiak15VW5WdWRHbHRaU2s3WEc1OUlHVnNjMlVnZTF4dUlDQmtaV1poZFd4MFJYaHdiM0owSUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHVm1ZWFZzZEVWNGNHOXlkQ3dnY0c5emFYaFNkVzUwYVcxbEtUdGNibjFjYm14bGRDQnViM0p0WVd4cGVtVlNkVzUwYVcxbE8xeHViR1YwSUdwdmFXNVNkVzUwYVcxbE8xeHViR1YwSUhKbGMyOXNkbVZTZFc1MGFXMWxPMXh1YkdWMElHbHpRV0p6YjJ4MWRHVlNkVzUwYVcxbE8xeHViR1YwSUhKbGJHRjBhWFpsVW5WdWRHbHRaVHRjYm14bGRDQmthWEp1WVcxbFVuVnVkR2x0WlR0Y2JteGxkQ0JpWVhObGJtRnRaVkoxYm5ScGJXVTdYRzVzWlhRZ1pYaDBibUZ0WlZKMWJuUnBiV1U3WEc1c1pYUWdjMlZ3VW5WdWRHbHRaVHRjYm14bGRDQmtaV3hwYldsMFpYSlNkVzUwYVcxbE8xeHViR1YwSUhCaGNuTmxVblZ1ZEdsdFpUdGNibXhsZENCbWIzSnRZWFJTZFc1MGFXMWxPMXh1WEc1cFppQW9hWE5YYVc0b0tTa2dlMXh1SUNCdWIzSnRZV3hwZW1WU2RXNTBhVzFsSUQwZ2QybHVNekpTZFc1MGFXMWxMbTV2Y20xaGJHbDZaVHRjYmlBZ2FtOXBibEoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdWFtOXBianRjYmlBZ2NtVnpiMngyWlZKMWJuUnBiV1VnUFNCM2FXNHpNbEoxYm5ScGJXVXVjbVZ6YjJ4MlpUdGNiaUFnYVhOQlluTnZiSFYwWlZKMWJuUnBiV1VnUFNCM2FXNHpNbEoxYm5ScGJXVXVhWE5CWW5OdmJIVjBaVHRjYmlBZ2NtVnNZWFJwZG1WU2RXNTBhVzFsSUQwZ2QybHVNekpTZFc1MGFXMWxMbkpsYkdGMGFYWmxPMXh1SUNCa2FYSnVZVzFsVW5WdWRHbHRaU0E5SUhkcGJqTXlVblZ1ZEdsdFpTNWthWEp1WVcxbE8xeHVJQ0JpWVhObGJtRnRaVkoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdVltRnpaVzVoYldVN1hHNGdJR1Y0ZEc1aGJXVlNkVzUwYVcxbElEMGdkMmx1TXpKU2RXNTBhVzFsTG1WNGRHNWhiV1U3WEc0Z0lITmxjRkoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdWMyVndPMXh1SUNCa1pXeHBiV2wwWlhKU2RXNTBhVzFsSUQwZ2QybHVNekpTZFc1MGFXMWxMbVJsYkdsdGFYUmxjanRjYmlBZ2NHRnljMlZTZFc1MGFXMWxJRDBnZDJsdU16SlNkVzUwYVcxbExuQmhjbk5sTzF4dUlDQm1iM0p0WVhSU2RXNTBhVzFsSUQwZ2QybHVNekpTZFc1MGFXMWxMbVp2Y20xaGREdGNibjBnWld4elpTQjdYRzRnSUc1dmNtMWhiR2w2WlZKMWJuUnBiV1VnUFNCd2IzTnBlRkoxYm5ScGJXVXVibTl5YldGc2FYcGxPMXh1SUNCcWIybHVVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1cWIybHVPMXh1SUNCeVpYTnZiSFpsVW5WdWRHbHRaU0E5SUhCdmMybDRVblZ1ZEdsdFpTNXlaWE52YkhabE8xeHVJQ0JwYzBGaWMyOXNkWFJsVW5WdWRHbHRaU0E5SUhCdmMybDRVblZ1ZEdsdFpTNXBjMEZpYzI5c2RYUmxPMXh1SUNCeVpXeGhkR2wyWlZKMWJuUnBiV1VnUFNCd2IzTnBlRkoxYm5ScGJXVXVjbVZzWVhScGRtVTdYRzRnSUdScGNtNWhiV1ZTZFc1MGFXMWxJRDBnY0c5emFYaFNkVzUwYVcxbExtUnBjbTVoYldVN1hHNGdJR0poYzJWdVlXMWxVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1aVlYTmxibUZ0WlR0Y2JpQWdaWGgwYm1GdFpWSjFiblJwYldVZ1BTQndiM05wZUZKMWJuUnBiV1V1WlhoMGJtRnRaVHRjYmlBZ2MyVndVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1elpYQTdYRzRnSUdSbGJHbHRhWFJsY2xKMWJuUnBiV1VnUFNCd2IzTnBlRkoxYm5ScGJXVXVaR1ZzYVcxcGRHVnlPMXh1SUNCd1lYSnpaVkoxYm5ScGJXVWdQU0J3YjNOcGVGSjFiblJwYldVdWNHRnljMlU3WEc0Z0lHWnZjbTFoZEZKMWJuUnBiV1VnUFNCd2IzTnBlRkoxYm5ScGJXVXVabTl5YldGME8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JrWldaaGRXeDBSWGh3YjNKME8xeHVaWGh3YjNKMElIdGNiaUFnYm05eWJXRnNhWHBsVW5WdWRHbHRaU0JoY3lCdWIzSnRZV3hwZW1Vc1hHNGdJR3B2YVc1U2RXNTBhVzFsSUdGeklHcHZhVzRzWEc0Z0lISmxjMjlzZG1WU2RXNTBhVzFsSUdGeklISmxjMjlzZG1Vc1hHNGdJR2x6UVdKemIyeDFkR1ZTZFc1MGFXMWxJR0Z6SUdselFXSnpiMngxZEdVc1hHNGdJSEpsYkdGMGFYWmxVblZ1ZEdsdFpTQmhjeUJ5Wld4aGRHbDJaU3hjYmlBZ1pHbHlibUZ0WlZKMWJuUnBiV1VnWVhNZ1pHbHlibUZ0WlN4Y2JpQWdZbUZ6Wlc1aGJXVlNkVzUwYVcxbElHRnpJR0poYzJWdVlXMWxMRnh1SUNCbGVIUnVZVzFsVW5WdWRHbHRaU0JoY3lCbGVIUnVZVzFsTEZ4dUlDQnpaWEJTZFc1MGFXMWxJR0Z6SUhObGNDeGNiaUFnWkdWc2FXMXBkR1Z5VW5WdWRHbHRaU0JoY3lCa1pXeHBiV2wwWlhJc1hHNGdJSEJoY25ObFVuVnVkR2x0WlNCaGN5QndZWEp6WlN4Y2JpQWdabTl5YldGMFVuVnVkR2x0WlNCaGN5Qm1iM0p0WVhRc1hHNGdJSEJ2YzJsNFVuVnVkR2x0WlNCaGN5QndiM05wZUN4Y2JpQWdkMmx1TXpKU2RXNTBhVzFsSUdGeklIZHBiak15TEZ4dWZUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTl3WVhSb0xuUnpJaXdpTHk4Z1EyOXdlWEpwWjJoMElFcHZlV1Z1ZEN3Z1NXNWpMaUJoYm1RZ2IzUm9aWElnVG05a1pTQmpiMjUwY21saWRYUnZjbk11WEhKY2JpOHZYSEpjYmk4dklGQmxjbTFwYzNOcGIyNGdhWE1nYUdWeVpXSjVJR2R5WVc1MFpXUXNJR1p5WldVZ2IyWWdZMmhoY21kbExDQjBieUJoYm5rZ2NHVnljMjl1SUc5aWRHRnBibWx1WnlCaFhISmNiaTh2SUdOdmNIa2diMllnZEdocGN5QnpiMlowZDJGeVpTQmhibVFnWVhOemIyTnBZWFJsWkNCa2IyTjFiV1Z1ZEdGMGFXOXVJR1pwYkdWeklDaDBhR1ZjY2x4dUx5OGdYQ0pUYjJaMGQyRnlaVndpS1N3Z2RHOGdaR1ZoYkNCcGJpQjBhR1VnVTI5bWRIZGhjbVVnZDJsMGFHOTFkQ0J5WlhOMGNtbGpkR2x2Yml3Z2FXNWpiSFZrYVc1blhISmNiaTh2SUhkcGRHaHZkWFFnYkdsdGFYUmhkR2x2YmlCMGFHVWdjbWxuYUhSeklIUnZJSFZ6WlN3Z1kyOXdlU3dnYlc5a2FXWjVMQ0J0WlhKblpTd2djSFZpYkdsemFDeGNjbHh1THk4Z1pHbHpkSEpwWW5WMFpTd2djM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlIUm9aU0JUYjJaMGQyRnlaU3dnWVc1a0lIUnZJSEJsY20xcGRGeHlYRzR2THlCd1pYSnpiMjV6SUhSdklIZG9iMjBnZEdobElGTnZablIzWVhKbElHbHpJR1oxY201cGMyaGxaQ0IwYnlCa2J5QnpieXdnYzNWaWFtVmpkQ0IwYnlCMGFHVmNjbHh1THk4Z1ptOXNiRzkzYVc1bklHTnZibVJwZEdsdmJuTTZYSEpjYmk4dlhISmNiaTh2SUZSb1pTQmhZbTkyWlNCamIzQjVjbWxuYUhRZ2JtOTBhV05sSUdGdVpDQjBhR2x6SUhCbGNtMXBjM05wYjI0Z2JtOTBhV05sSUhOb1lXeHNJR0psSUdsdVkyeDFaR1ZrWEhKY2JpOHZJR2x1SUdGc2JDQmpiM0JwWlhNZ2IzSWdjM1ZpYzNSaGJuUnBZV3dnY0c5eWRHbHZibk1nYjJZZ2RHaGxJRk52Wm5SM1lYSmxMbHh5WEc0dkwxeHlYRzR2THlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVFhISmNiaTh2SUU5U0lFbE5VRXhKUlVRc0lFbE9RMHhWUkVsT1J5QkNWVlFnVGs5VUlFeEpUVWxVUlVRZ1ZFOGdWRWhGSUZkQlVsSkJUbFJKUlZNZ1QwWmNjbHh1THk4Z1RVVlNRMGhCVGxSQlFrbE1TVlJaTENCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRseHlYRzR2THlCT1R5QkZWa1ZPVkNCVFNFRk1UQ0JVU0VVZ1FWVlVTRTlTVXlCUFVpQkRUMUJaVWtsSFNGUWdTRTlNUkVWU1V5QkNSU0JNU1VGQ1RFVWdSazlTSUVGT1dTQkRURUZKVFN4Y2NseHVMeThnUkVGTlFVZEZVeUJQVWlCUFZFaEZVaUJNU1VGQ1NVeEpWRmtzSUZkSVJWUklSVklnU1U0Z1FVNGdRVU5VU1U5T0lFOUdJRU5QVGxSU1FVTlVMQ0JVVDFKVUlFOVNYSEpjYmk4dklFOVVTRVZTVjBsVFJTd2dRVkpKVTBsT1J5QkdVazlOTENCUFZWUWdUMFlnVDFJZ1NVNGdRMDlPVGtWRFZFbFBUaUJYU1ZSSUlGUklSU0JUVDBaVVYwRlNSU0JQVWlCVVNFVmNjbHh1THk4Z1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPSUZSSVJTQlRUMFpVVjBGU1JTNWNjbHh1WEhKY2JpZDFjMlVnYzNSeWFXTjBKenRjY2x4dVhISmNibHh5WEc1MllYSWdhWE5YYVc1a2IzZHpJRDBnY0hKdlkyVnpjeTV3YkdGMFptOXliU0E5UFQwZ0ozZHBiak15Snp0Y2NseHVkbUZ5SUhWMGFXd2dQU0J5WlhGMWFYSmxLQ2QxZEdsc0p5azdYSEpjYmx4eVhHNWNjbHh1THk4Z2NtVnpiMngyWlhNZ0xpQmhibVFnTGk0Z1pXeGxiV1Z1ZEhNZ2FXNGdZU0J3WVhSb0lHRnljbUY1SUhkcGRHZ2daR2x5WldOMGIzSjVJRzVoYldWeklIUm9aWEpsWEhKY2JpOHZJRzExYzNRZ1ltVWdibThnYzJ4aGMyaGxjeUJ2Y2lCa1pYWnBZMlVnYm1GdFpYTWdLR002WEZ3cElHbHVJSFJvWlNCaGNuSmhlVnh5WEc0dkx5QW9jMjhnWVd4emJ5QnVieUJzWldGa2FXNW5JR0Z1WkNCMGNtRnBiR2x1WnlCemJHRnphR1Z6SUMwZ2FYUWdaRzlsY3lCdWIzUWdaR2x6ZEdsdVozVnBjMmhjY2x4dUx5OGdjbVZzWVhScGRtVWdZVzVrSUdGaWMyOXNkWFJsSUhCaGRHaHpLVnh5WEc1bWRXNWpkR2x2YmlCdWIzSnRZV3hwZW1WQmNuSmhlU2h3WVhKMGN5d2dZV3hzYjNkQlltOTJaVkp2YjNRcElIdGNjbHh1SUNCMllYSWdjbVZ6SUQwZ1cxMDdYSEpjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQndZWEowY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdkbUZ5SUhBZ1BTQndZWEowYzF0cFhUdGNjbHh1WEhKY2JpQWdJQ0F2THlCcFoyNXZjbVVnWlcxd2RIa2djR0Z5ZEhOY2NseHVJQ0FnSUdsbUlDZ2hjQ0I4ZkNCd0lEMDlQU0FuTGljcFhISmNiaUFnSUNBZ0lHTnZiblJwYm5WbE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNod0lEMDlQU0FuTGk0bktTQjdYSEpjYmlBZ0lDQWdJR2xtSUNoeVpYTXViR1Z1WjNSb0lDWW1JSEpsYzF0eVpYTXViR1Z1WjNSb0lDMGdNVjBnSVQwOUlDY3VMaWNwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWE11Y0c5d0tDazdYSEpjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvWVd4c2IzZEJZbTkyWlZKdmIzUXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYTXVjSFZ6YUNnbkxpNG5LVHRjY2x4dUlDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnY21WekxuQjFjMmdvY0NrN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNWNjbHh1SUNCeVpYUjFjbTRnY21Wek8xeHlYRzU5WEhKY2JseHlYRzR2THlCeVpYUjFjbTV6SUdGdUlHRnljbUY1SUhkcGRHZ2daVzF3ZEhrZ1pXeGxiV1Z1ZEhNZ2NtVnRiM1psWkNCbWNtOXRJR1ZwZEdobGNpQmxibVFnYjJZZ2RHaGxJR2x1Y0hWMFhISmNiaTh2SUdGeWNtRjVJRzl5SUhSb1pTQnZjbWxuYVc1aGJDQmhjbkpoZVNCcFppQnVieUJsYkdWdFpXNTBjeUJ1WldWa0lIUnZJR0psSUhKbGJXOTJaV1JjY2x4dVpuVnVZM1JwYjI0Z2RISnBiVUZ5Y21GNUtHRnljaWtnZTF4eVhHNGdJSFpoY2lCc1lYTjBTVzVrWlhnZ1BTQmhjbkl1YkdWdVozUm9JQzBnTVR0Y2NseHVJQ0IyWVhJZ2MzUmhjblFnUFNBd08xeHlYRzRnSUdadmNpQW9PeUJ6ZEdGeWRDQThQU0JzWVhOMFNXNWtaWGc3SUhOMFlYSjBLeXNwSUh0Y2NseHVJQ0FnSUdsbUlDaGhjbkpiYzNSaGNuUmRLVnh5WEc0Z0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIWmhjaUJsYm1RZ1BTQnNZWE4wU1c1a1pYZzdYSEpjYmlBZ1ptOXlJQ2c3SUdWdVpDQStQU0F3T3lCbGJtUXRMU2tnZTF4eVhHNGdJQ0FnYVdZZ0tHRnljbHRsYm1SZEtWeHlYRzRnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdsbUlDaHpkR0Z5ZENBOVBUMGdNQ0FtSmlCbGJtUWdQVDA5SUd4aGMzUkpibVJsZUNsY2NseHVJQ0FnSUhKbGRIVnliaUJoY25JN1hISmNiaUFnYVdZZ0tITjBZWEowSUQ0Z1pXNWtLVnh5WEc0Z0lDQWdjbVYwZFhKdUlGdGRPMXh5WEc0Z0lISmxkSFZ5YmlCaGNuSXVjMnhwWTJVb2MzUmhjblFzSUdWdVpDQXJJREVwTzF4eVhHNTlYSEpjYmx4eVhHNHZMeUJTWldkbGVDQjBieUJ6Y0d4cGRDQmhJSGRwYm1SdmQzTWdjR0YwYUNCcGJuUnZJSFJvY21WbElIQmhjblJ6T2lCYktpd2daR1YyYVdObExDQnpiR0Z6YUN4Y2NseHVMeThnZEdGcGJGMGdkMmx1Wkc5M2N5MXZibXg1WEhKY2JuWmhjaUJ6Y0d4cGRFUmxkbWxqWlZKbElEMWNjbHh1SUNBZ0lDOWVLRnRoTFhwQkxWcGRPbnhiWEZ4Y1hGeGNMMTE3TW4xYlhseGNYRnhjWEM5ZEsxdGNYRnhjWEZ3dlhTdGJYbHhjWEZ4Y1hDOWRLeWsvS0Z0Y1hGeGNYRnd2WFNrL0tGdGNYSE5jWEZOZEtqOHBKQzg3WEhKY2JseHlYRzR2THlCU1pXZGxlQ0IwYnlCemNHeHBkQ0IwYUdVZ2RHRnBiQ0J3WVhKMElHOW1JSFJvWlNCaFltOTJaU0JwYm5SdklGc3FMQ0JrYVhJc0lHSmhjMlZ1WVcxbExDQmxlSFJkWEhKY2JuWmhjaUJ6Y0d4cGRGUmhhV3hTWlNBOVhISmNiaUFnSUNBdlhpaGJYRnh6WEZ4VFhTby9LU2dvUHpwY1hDNTdNU3d5Zlh4YlhseGNYRnhjWEM5ZEt6OThLU2hjWEM1YlhpNWNYQzljWEZ4Y1hTcDhLU2tvUHpwYlhGeGNYRnhjTDEwcUtTUXZPMXh5WEc1Y2NseHVkbUZ5SUhkcGJqTXlJRDBnZTMwN1hISmNibHh5WEc0dkx5QkdkVzVqZEdsdmJpQjBieUJ6Y0d4cGRDQmhJR1pwYkdWdVlXMWxJR2x1ZEc4Z1czSnZiM1FzSUdScGNpd2dZbUZ6Wlc1aGJXVXNJR1Y0ZEYxY2NseHVablZ1WTNScGIyNGdkMmx1TXpKVGNHeHBkRkJoZEdnb1ptbHNaVzVoYldVcElIdGNjbHh1SUNBdkx5QlRaWEJoY21GMFpTQmtaWFpwWTJVcmMyeGhjMmdnWm5KdmJTQjBZV2xzWEhKY2JpQWdkbUZ5SUhKbGMzVnNkQ0E5SUhOd2JHbDBSR1YyYVdObFVtVXVaWGhsWXlobWFXeGxibUZ0WlNrc1hISmNiaUFnSUNBZ0lHUmxkbWxqWlNBOUlDaHlaWE4xYkhSYk1WMGdmSHdnSnljcElDc2dLSEpsYzNWc2RGc3lYU0I4ZkNBbkp5a3NYSEpjYmlBZ0lDQWdJSFJoYVd3Z1BTQnlaWE4xYkhSYk0xMGdmSHdnSnljN1hISmNiaUFnTHk4Z1UzQnNhWFFnZEdobElIUmhhV3dnYVc1MGJ5QmthWElzSUdKaGMyVnVZVzFsSUdGdVpDQmxlSFJsYm5OcGIyNWNjbHh1SUNCMllYSWdjbVZ6ZFd4ME1pQTlJSE53YkdsMFZHRnBiRkpsTG1WNFpXTW9kR0ZwYkNrc1hISmNiaUFnSUNBZ0lHUnBjaUE5SUhKbGMzVnNkREpiTVYwc1hISmNiaUFnSUNBZ0lHSmhjMlZ1WVcxbElEMGdjbVZ6ZFd4ME1sc3lYU3hjY2x4dUlDQWdJQ0FnWlhoMElEMGdjbVZ6ZFd4ME1sc3pYVHRjY2x4dUlDQnlaWFIxY200Z1cyUmxkbWxqWlN3Z1pHbHlMQ0JpWVhObGJtRnRaU3dnWlhoMFhUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnZDJsdU16SlRkR0YwVUdGMGFDaHdZWFJvS1NCN1hISmNiaUFnZG1GeUlISmxjM1ZzZENBOUlITndiR2wwUkdWMmFXTmxVbVV1WlhobFl5aHdZWFJvS1N4Y2NseHVJQ0FnSUNBZ1pHVjJhV05sSUQwZ2NtVnpkV3gwV3pGZElIeDhJQ2NuTEZ4eVhHNGdJQ0FnSUNCcGMxVnVZeUE5SUNFaFpHVjJhV05sSUNZbUlHUmxkbWxqWlZzeFhTQWhQVDBnSnpvbk8xeHlYRzRnSUhKbGRIVnliaUI3WEhKY2JpQWdJQ0JrWlhacFkyVTZJR1JsZG1salpTeGNjbHh1SUNBZ0lHbHpWVzVqT2lCcGMxVnVZeXhjY2x4dUlDQWdJR2x6UVdKemIyeDFkR1U2SUdselZXNWpJSHg4SUNFaGNtVnpkV3gwV3pKZExDQXZMeUJWVGtNZ2NHRjBhSE1nWVhKbElHRnNkMkY1Y3lCaFluTnZiSFYwWlZ4eVhHNGdJQ0FnZEdGcGJEb2djbVZ6ZFd4MFd6TmRYSEpjYmlBZ2ZUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYm05eWJXRnNhWHBsVlU1RFVtOXZkQ2hrWlhacFkyVXBJSHRjY2x4dUlDQnlaWFIxY200Z0oxeGNYRnhjWEZ4Y0p5QXJJR1JsZG1salpTNXlaWEJzWVdObEtDOWVXMXhjWEZ4Y1hDOWRLeThzSUNjbktTNXlaWEJzWVdObEtDOWJYRnhjWEZ4Y0wxMHJMMmNzSUNkY1hGeGNKeWs3WEhKY2JuMWNjbHh1WEhKY2JpOHZJSEJoZEdndWNtVnpiMngyWlNoYlpuSnZiU0F1TGk1ZExDQjBieWxjY2x4dWQybHVNekl1Y21WemIyeDJaU0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzRnSUhaaGNpQnlaWE52YkhabFpFUmxkbWxqWlNBOUlDY25MRnh5WEc0Z0lDQWdJQ0J5WlhOdmJIWmxaRlJoYVd3Z1BTQW5KeXhjY2x4dUlDQWdJQ0FnY21WemIyeDJaV1JCWW5OdmJIVjBaU0E5SUdaaGJITmxPMXh5WEc1Y2NseHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUNBdElERTdJR2tnUGowZ0xURTdJR2t0TFNrZ2UxeHlYRzRnSUNBZ2RtRnlJSEJoZEdnN1hISmNiaUFnSUNCcFppQW9hU0ErUFNBd0tTQjdYSEpjYmlBZ0lDQWdJSEJoZEdnZ1BTQmhjbWQxYldWdWRITmJhVjA3WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NGeVpYTnZiSFpsWkVSbGRtbGpaU2tnZTF4eVhHNGdJQ0FnSUNCd1lYUm9JRDBnY0hKdlkyVnpjeTVqZDJRb0tUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDOHZJRmRwYm1SdmQzTWdhR0Z6SUhSb1pTQmpiMjVqWlhCMElHOW1JR1J5YVhabExYTndaV05wWm1saklHTjFjbkpsYm5RZ2QyOXlhMmx1WjF4eVhHNGdJQ0FnSUNBdkx5QmthWEpsWTNSdmNtbGxjeTRnU1dZZ2QyVW5kbVVnY21WemIyeDJaV1FnWVNCa2NtbDJaU0JzWlhSMFpYSWdZblYwSUc1dmRDQjVaWFFnWVc1Y2NseHVJQ0FnSUNBZ0x5OGdZV0p6YjJ4MWRHVWdjR0YwYUN3Z1oyVjBJR04zWkNCbWIzSWdkR2hoZENCa2NtbDJaUzRnVjJVbmNtVWdjM1Z5WlNCMGFHVWdaR1YyYVdObElHbHpJRzV2ZEZ4eVhHNGdJQ0FnSUNBdkx5QmhiaUIxYm1NZ2NHRjBhQ0JoZENCMGFHbHpJSEJ2YVc1MGN5d2dZbVZqWVhWelpTQjFibU1nY0dGMGFITWdZWEpsSUdGc2QyRjVjeUJoWW5OdmJIVjBaUzVjY2x4dUlDQWdJQ0FnY0dGMGFDQTlJSEJ5YjJObGMzTXVaVzUyV3ljOUp5QXJJSEpsYzI5c2RtVmtSR1YyYVdObFhUdGNjbHh1SUNBZ0lDQWdMeThnVm1WeWFXWjVJSFJvWVhRZ1lTQmtjbWwyWlMxc2IyTmhiQ0JqZDJRZ2QyRnpJR1p2ZFc1a0lHRnVaQ0IwYUdGMElHbDBJR0ZqZEhWaGJHeDVJSEJ2YVc1MGMxeHlYRzRnSUNBZ0lDQXZMeUIwYnlCdmRYSWdaSEpwZG1VdUlFbG1JRzV2ZEN3Z1pHVm1ZWFZzZENCMGJ5QjBhR1VnWkhKcGRtVW5jeUJ5YjI5MExseHlYRzRnSUNBZ0lDQnBaaUFvSVhCaGRHZ2dmSHdnY0dGMGFDNXpkV0p6ZEhJb01Dd2dNeWt1ZEc5TWIzZGxja05oYzJVb0tTQWhQVDFjY2x4dUlDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Wa1JHVjJhV05sTG5SdlRHOTNaWEpEWVhObEtDa2dLeUFuWEZ4Y1hDY3BJSHRjY2x4dUlDQWdJQ0FnSUNCd1lYUm9JRDBnY21WemIyeDJaV1JFWlhacFkyVWdLeUFuWEZ4Y1hDYzdYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdkx5QlRhMmx3SUdWdGNIUjVJR0Z1WkNCcGJuWmhiR2xrSUdWdWRISnBaWE5jY2x4dUlDQWdJR2xtSUNnaGRYUnBiQzVwYzFOMGNtbHVaeWh3WVhSb0tTa2dlMXh5WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkQmNtZDFiV1Z1ZEhNZ2RHOGdjR0YwYUM1eVpYTnZiSFpsSUcxMWMzUWdZbVVnYzNSeWFXNW5jeWNwTzF4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGNHRjBhQ2tnZTF4eVhHNGdJQ0FnSUNCamIyNTBhVzUxWlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjJZWElnY21WemRXeDBJRDBnZDJsdU16SlRkR0YwVUdGMGFDaHdZWFJvS1N4Y2NseHVJQ0FnSUNBZ0lDQmtaWFpwWTJVZ1BTQnlaWE4xYkhRdVpHVjJhV05sTEZ4eVhHNGdJQ0FnSUNBZ0lHbHpWVzVqSUQwZ2NtVnpkV3gwTG1selZXNWpMRnh5WEc0Z0lDQWdJQ0FnSUdselFXSnpiMngxZEdVZ1BTQnlaWE4xYkhRdWFYTkJZbk52YkhWMFpTeGNjbHh1SUNBZ0lDQWdJQ0IwWVdsc0lEMGdjbVZ6ZFd4MExuUmhhV3c3WEhKY2JseHlYRzRnSUNBZ2FXWWdLR1JsZG1salpTQW1KbHh5WEc0Z0lDQWdJQ0FnSUhKbGMyOXNkbVZrUkdWMmFXTmxJQ1ltWEhKY2JpQWdJQ0FnSUNBZ1pHVjJhV05sTG5SdlRHOTNaWEpEWVhObEtDa2dJVDA5SUhKbGMyOXNkbVZrUkdWMmFXTmxMblJ2VEc5M1pYSkRZWE5sS0NrcElIdGNjbHh1SUNBZ0lDQWdMeThnVkdocGN5QndZWFJvSUhCdmFXNTBjeUIwYnlCaGJtOTBhR1Z5SUdSbGRtbGpaU0J6YnlCcGRDQnBjeUJ1YjNRZ1lYQndiR2xqWVdKc1pWeHlYRzRnSUNBZ0lDQmpiMjUwYVc1MVpUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lYSmxjMjlzZG1Wa1JHVjJhV05sS1NCN1hISmNiaUFnSUNBZ0lISmxjMjlzZG1Wa1JHVjJhV05sSUQwZ1pHVjJhV05sTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYVdZZ0tDRnlaWE52YkhabFpFRmljMjlzZFhSbEtTQjdYSEpjYmlBZ0lDQWdJSEpsYzI5c2RtVmtWR0ZwYkNBOUlIUmhhV3dnS3lBblhGeGNYQ2NnS3lCeVpYTnZiSFpsWkZSaGFXdzdYSEpjYmlBZ0lDQWdJSEpsYzI5c2RtVmtRV0p6YjJ4MWRHVWdQU0JwYzBGaWMyOXNkWFJsTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2h5WlhOdmJIWmxaRVJsZG1salpTQW1KaUJ5WlhOdmJIWmxaRUZpYzI5c2RYUmxLU0I3WEhKY2JpQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMeThnUTI5dWRtVnlkQ0J6YkdGemFHVnpJSFJ2SUdKaFkydHpiR0Z6YUdWeklIZG9aVzRnWUhKbGMyOXNkbVZrUkdWMmFXTmxZQ0J3YjJsdWRITWdkRzhnWVc0Z1ZVNURYSEpjYmlBZ0x5OGdjbTl2ZEM0Z1FXeHpieUJ6Y1hWaGMyZ2diWFZzZEdsd2JHVWdjMnhoYzJobGN5QnBiblJ2SUdFZ2MybHVaMnhsSUc5dVpTQjNhR1Z5WlNCaGNIQnliM0J5YVdGMFpTNWNjbHh1SUNCcFppQW9hWE5WYm1NcElIdGNjbHh1SUNBZ0lISmxjMjlzZG1Wa1JHVjJhV05sSUQwZ2JtOXliV0ZzYVhwbFZVNURVbTl2ZENoeVpYTnZiSFpsWkVSbGRtbGpaU2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0F2THlCQmRDQjBhR2x6SUhCdmFXNTBJSFJvWlNCd1lYUm9JSE5vYjNWc1pDQmlaU0J5WlhOdmJIWmxaQ0IwYnlCaElHWjFiR3dnWVdKemIyeDFkR1VnY0dGMGFDeGNjbHh1SUNBdkx5QmlkWFFnYUdGdVpHeGxJSEpsYkdGMGFYWmxJSEJoZEdoeklIUnZJR0psSUhOaFptVWdLRzFwWjJoMElHaGhjSEJsYmlCM2FHVnVJSEJ5YjJObGMzTXVZM2RrS0NsY2NseHVJQ0F2THlCbVlXbHNjeWxjY2x4dVhISmNiaUFnTHk4Z1RtOXliV0ZzYVhwbElIUm9aU0IwWVdsc0lIQmhkR2hjY2x4dUlDQnlaWE52YkhabFpGUmhhV3dnUFNCdWIzSnRZV3hwZW1WQmNuSmhlU2h5WlhOdmJIWmxaRlJoYVd3dWMzQnNhWFFvTDF0Y1hGeGNYRnd2WFNzdktTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWhjbVZ6YjJ4MlpXUkJZbk52YkhWMFpTa3VhbTlwYmlnblhGeGNYQ2NwTzF4eVhHNWNjbHh1SUNCeVpYUjFjbTRnS0hKbGMyOXNkbVZrUkdWMmFXTmxJQ3NnS0hKbGMyOXNkbVZrUVdKemIyeDFkR1VnUHlBblhGeGNYQ2NnT2lBbkp5a2dLeUJ5WlhOdmJIWmxaRlJoYVd3cElIeDhYSEpjYmlBZ0lDQWdJQ0FnSUNjdUp6dGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNTNhVzR6TWk1dWIzSnRZV3hwZW1VZ1BTQm1kVzVqZEdsdmJpaHdZWFJvS1NCN1hISmNiaUFnZG1GeUlISmxjM1ZzZENBOUlIZHBiak15VTNSaGRGQmhkR2dvY0dGMGFDa3NYSEpjYmlBZ0lDQWdJR1JsZG1salpTQTlJSEpsYzNWc2RDNWtaWFpwWTJVc1hISmNiaUFnSUNBZ0lHbHpWVzVqSUQwZ2NtVnpkV3gwTG1selZXNWpMRnh5WEc0Z0lDQWdJQ0JwYzBGaWMyOXNkWFJsSUQwZ2NtVnpkV3gwTG1selFXSnpiMngxZEdVc1hISmNiaUFnSUNBZ0lIUmhhV3dnUFNCeVpYTjFiSFF1ZEdGcGJDeGNjbHh1SUNBZ0lDQWdkSEpoYVd4cGJtZFRiR0Z6YUNBOUlDOWJYRnhjWEZ4Y0wxMGtMeTUwWlhOMEtIUmhhV3dwTzF4eVhHNWNjbHh1SUNBdkx5Qk9iM0p0WVd4cGVtVWdkR2hsSUhSaGFXd2djR0YwYUZ4eVhHNGdJSFJoYVd3Z1BTQnViM0p0WVd4cGVtVkJjbkpoZVNoMFlXbHNMbk53YkdsMEtDOWJYRnhjWEZ4Y0wxMHJMeWtzSUNGcGMwRmljMjlzZFhSbEtTNXFiMmx1S0NkY1hGeGNKeWs3WEhKY2JseHlYRzRnSUdsbUlDZ2hkR0ZwYkNBbUppQWhhWE5CWW5OdmJIVjBaU2tnZTF4eVhHNGdJQ0FnZEdGcGJDQTlJQ2N1Snp0Y2NseHVJQ0I5WEhKY2JpQWdhV1lnS0hSaGFXd2dKaVlnZEhKaGFXeHBibWRUYkdGemFDa2dlMXh5WEc0Z0lDQWdkR0ZwYkNBclBTQW5YRnhjWENjN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNBdkx5QkRiMjUyWlhKMElITnNZWE5vWlhNZ2RHOGdZbUZqYTNOc1lYTm9aWE1nZDJobGJpQmdaR1YyYVdObFlDQndiMmx1ZEhNZ2RHOGdZVzRnVlU1RElISnZiM1F1WEhKY2JpQWdMeThnUVd4emJ5QnpjWFZoYzJnZ2JYVnNkR2x3YkdVZ2MyeGhjMmhsY3lCcGJuUnZJR0VnYzJsdVoyeGxJRzl1WlNCM2FHVnlaU0JoY0hCeWIzQnlhV0YwWlM1Y2NseHVJQ0JwWmlBb2FYTlZibU1wSUh0Y2NseHVJQ0FnSUdSbGRtbGpaU0E5SUc1dmNtMWhiR2w2WlZWT1ExSnZiM1FvWkdWMmFXTmxLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQmtaWFpwWTJVZ0t5QW9hWE5CWW5OdmJIVjBaU0EvSUNkY1hGeGNKeUE2SUNjbktTQXJJSFJoYVd3N1hISmNibjA3WEhKY2JseHlYRzVjY2x4dWQybHVNekl1YVhOQlluTnZiSFYwWlNBOUlHWjFibU4wYVc5dUtIQmhkR2dwSUh0Y2NseHVJQ0J5WlhSMWNtNGdkMmx1TXpKVGRHRjBVR0YwYUNod1lYUm9LUzVwYzBGaWMyOXNkWFJsTzF4eVhHNTlPMXh5WEc1Y2NseHVkMmx1TXpJdWFtOXBiaUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzRnSUhaaGNpQndZWFJvY3lBOUlGdGRPMXh5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNCMllYSWdZWEpuSUQwZ1lYSm5kVzFsYm5SelcybGRPMXh5WEc0Z0lDQWdhV1lnS0NGMWRHbHNMbWx6VTNSeWFXNW5LR0Z5WnlrcElIdGNjbHh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduUVhKbmRXMWxiblJ6SUhSdklIQmhkR2d1YW05cGJpQnRkWE4wSUdKbElITjBjbWx1WjNNbktUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHbG1JQ2hoY21jcElIdGNjbHh1SUNBZ0lDQWdjR0YwYUhNdWNIVnphQ2hoY21jcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2RtRnlJR3B2YVc1bFpDQTlJSEJoZEdoekxtcHZhVzRvSjF4Y1hGd25LVHRjY2x4dVhISmNiaUFnTHk4Z1RXRnJaU0J6ZFhKbElIUm9ZWFFnZEdobElHcHZhVzVsWkNCd1lYUm9JR1J2WlhOdUozUWdjM1JoY25RZ2QybDBhQ0IwZDI4Z2MyeGhjMmhsY3l3Z1ltVmpZWFZ6WlZ4eVhHNGdJQzh2SUc1dmNtMWhiR2w2WlNncElIZHBiR3dnYldsemRHRnJaU0JwZENCbWIzSWdZVzRnVlU1RElIQmhkR2dnZEdobGJpNWNjbHh1SUNBdkwxeHlYRzRnSUM4dklGUm9hWE1nYzNSbGNDQnBjeUJ6YTJsd2NHVmtJSGRvWlc0Z2FYUWdhWE1nZG1WeWVTQmpiR1ZoY2lCMGFHRjBJSFJvWlNCMWMyVnlJR0ZqZEhWaGJHeDVYSEpjYmlBZ0x5OGdhVzUwWlc1a1pXUWdkRzhnY0c5cGJuUWdZWFFnWVc0Z1ZVNURJSEJoZEdndUlGUm9hWE1nYVhNZ1lYTnpkVzFsWkNCM2FHVnVJSFJvWlNCbWFYSnpkRnh5WEc0Z0lDOHZJRzV2YmkxbGJYQjBlU0J6ZEhKcGJtY2dZWEpuZFcxbGJuUnpJSE4wWVhKMGN5QjNhWFJvSUdWNFlXTjBiSGtnZEhkdklITnNZWE5vWlhNZ1ptOXNiRzkzWldRZ1lubGNjbHh1SUNBdkx5QmhkQ0JzWldGemRDQnZibVVnYlc5eVpTQnViMjR0YzJ4aGMyZ2dZMmhoY21GamRHVnlMbHh5WEc0Z0lDOHZYSEpjYmlBZ0x5OGdUbTkwWlNCMGFHRjBJR1p2Y2lCdWIzSnRZV3hwZW1Vb0tTQjBieUIwY21WaGRDQmhJSEJoZEdnZ1lYTWdZVzRnVlU1RElIQmhkR2dnYVhRZ2JtVmxaSE1nZEc5Y2NseHVJQ0F2THlCb1lYWmxJR0YwSUd4bFlYTjBJRElnWTI5dGNHOXVaVzUwY3l3Z2MyOGdkMlVnWkc5dUozUWdabWxzZEdWeUlHWnZjaUIwYUdGMElHaGxjbVV1WEhKY2JpQWdMeThnVkdocGN5QnRaV0Z1Y3lCMGFHRjBJSFJvWlNCMWMyVnlJR05oYmlCMWMyVWdhbTlwYmlCMGJ5QmpiMjV6ZEhKMVkzUWdWVTVESUhCaGRHaHpJR1p5YjIxY2NseHVJQ0F2THlCaElITmxjblpsY2lCdVlXMWxJR0Z1WkNCaElITm9ZWEpsSUc1aGJXVTdJR1p2Y2lCbGVHRnRjR3hsT2x4eVhHNGdJQzh2SUNBZ2NHRjBhQzVxYjJsdUtDY3ZMM05sY25abGNpY3NJQ2R6YUdGeVpTY3BJQzArSUNkY1hGeGNYRnhjWEhObGNuWmxjbHhjWEZ4emFHRnlaVnhjSnlsY2NseHVJQ0JwWmlBb0lTOWVXMXhjWEZ4Y1hDOWRleko5VzE1Y1hGeGNYRnd2WFM4dWRHVnpkQ2h3WVhSb2Mxc3dYU2twSUh0Y2NseHVJQ0FnSUdwdmFXNWxaQ0E5SUdwdmFXNWxaQzV5WlhCc1lXTmxLQzllVzF4Y1hGeGNYQzlkZXpJc2ZTOHNJQ2RjWEZ4Y0p5azdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnlaWFIxY200Z2QybHVNekl1Ym05eWJXRnNhWHBsS0dwdmFXNWxaQ2s3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1THk4Z2NHRjBhQzV5Wld4aGRHbDJaU2htY205dExDQjBieWxjY2x4dUx5OGdhWFFnZDJsc2JDQnpiMngyWlNCMGFHVWdjbVZzWVhScGRtVWdjR0YwYUNCbWNtOXRJQ2RtY205dEp5QjBieUFuZEc4bkxDQm1iM0lnYVc1emRHRnVZMlU2WEhKY2JpOHZJR1p5YjIwZ1BTQW5RenBjWEZ4Y2IzSmhibVJsWVZ4Y1hGeDBaWE4wWEZ4Y1hHRmhZU2RjY2x4dUx5OGdkRzhnUFNBblF6cGNYRnhjYjNKaGJtUmxZVnhjWEZ4cGJYQnNYRnhjWEdKaVlpZGNjbHh1THk4Z1ZHaGxJRzkxZEhCMWRDQnZaaUIwYUdVZ1puVnVZM1JwYjI0Z2MyaHZkV3hrSUdKbE9pQW5MaTVjWEZ4Y0xpNWNYRnhjYVcxd2JGeGNYRnhpWW1JblhISmNibmRwYmpNeUxuSmxiR0YwYVhabElEMGdablZ1WTNScGIyNG9abkp2YlN3Z2RHOHBJSHRjY2x4dUlDQm1jbTl0SUQwZ2QybHVNekl1Y21WemIyeDJaU2htY205dEtUdGNjbHh1SUNCMGJ5QTlJSGRwYmpNeUxuSmxjMjlzZG1Vb2RHOHBPMXh5WEc1Y2NseHVJQ0F2THlCM2FXNWtiM2R6SUdseklHNXZkQ0JqWVhObElITmxibk5wZEdsMlpWeHlYRzRnSUhaaGNpQnNiM2RsY2taeWIyMGdQU0JtY205dExuUnZURzkzWlhKRFlYTmxLQ2s3WEhKY2JpQWdkbUZ5SUd4dmQyVnlWRzhnUFNCMGJ5NTBiMHh2ZDJWeVEyRnpaU2dwTzF4eVhHNWNjbHh1SUNCMllYSWdkRzlRWVhKMGN5QTlJSFJ5YVcxQmNuSmhlU2gwYnk1emNHeHBkQ2duWEZ4Y1hDY3BLVHRjY2x4dVhISmNiaUFnZG1GeUlHeHZkMlZ5Um5KdmJWQmhjblJ6SUQwZ2RISnBiVUZ5Y21GNUtHeHZkMlZ5Um5KdmJTNXpjR3hwZENnblhGeGNYQ2NwS1R0Y2NseHVJQ0IyWVhJZ2JHOTNaWEpVYjFCaGNuUnpJRDBnZEhKcGJVRnljbUY1S0d4dmQyVnlWRzh1YzNCc2FYUW9KMXhjWEZ3bktTazdYSEpjYmx4eVhHNGdJSFpoY2lCc1pXNW5kR2dnUFNCTllYUm9MbTFwYmloc2IzZGxja1p5YjIxUVlYSjBjeTVzWlc1bmRHZ3NJR3h2ZDJWeVZHOVFZWEowY3k1c1pXNW5kR2dwTzF4eVhHNGdJSFpoY2lCellXMWxVR0Z5ZEhOTVpXNW5kR2dnUFNCc1pXNW5kR2c3WEhKY2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ2FXWWdLR3h2ZDJWeVJuSnZiVkJoY25SelcybGRJQ0U5UFNCc2IzZGxjbFJ2VUdGeWRITmJhVjBwSUh0Y2NseHVJQ0FnSUNBZ2MyRnRaVkJoY25SelRHVnVaM1JvSUQwZ2FUdGNjbHh1SUNBZ0lDQWdZbkpsWVdzN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNWNjbHh1SUNCcFppQW9jMkZ0WlZCaGNuUnpUR1Z1WjNSb0lEMDlJREFwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUIwYnp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhaaGNpQnZkWFJ3ZFhSUVlYSjBjeUE5SUZ0ZE8xeHlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQnpZVzFsVUdGeWRITk1aVzVuZEdnN0lHa2dQQ0JzYjNkbGNrWnliMjFRWVhKMGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnYjNWMGNIVjBVR0Z5ZEhNdWNIVnphQ2duTGk0bktUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHOTFkSEIxZEZCaGNuUnpJRDBnYjNWMGNIVjBVR0Z5ZEhNdVkyOXVZMkYwS0hSdlVHRnlkSE11YzJ4cFkyVW9jMkZ0WlZCaGNuUnpUR1Z1WjNSb0tTazdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQnZkWFJ3ZFhSUVlYSjBjeTVxYjJsdUtDZGNYRnhjSnlrN1hISmNibjA3WEhKY2JseHlYRzVjY2x4dWQybHVNekl1WDIxaGEyVk1iMjVuSUQwZ1puVnVZM1JwYjI0b2NHRjBhQ2tnZTF4eVhHNGdJQzh2SUU1dmRHVTZJSFJvYVhNZ2QybHNiQ0FxY0hKdlltRmliSGtxSUhSb2NtOTNJSE52YldWM2FHVnlaUzVjY2x4dUlDQnBaaUFvSVhWMGFXd3VhWE5UZEhKcGJtY29jR0YwYUNrcFhISmNiaUFnSUNCeVpYUjFjbTRnY0dGMGFEdGNjbHh1WEhKY2JpQWdhV1lnS0NGd1lYUm9LU0I3WEhKY2JpQWdJQ0J5WlhSMWNtNGdKeWM3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0IyWVhJZ2NtVnpiMngyWldSUVlYUm9JRDBnZDJsdU16SXVjbVZ6YjJ4MlpTaHdZWFJvS1R0Y2NseHVYSEpjYmlBZ2FXWWdLQzllVzJFdGVrRXRXbDFjWERwY1hGeGNMeTUwWlhOMEtISmxjMjlzZG1Wa1VHRjBhQ2twSUh0Y2NseHVJQ0FnSUM4dklIQmhkR2dnYVhNZ2JHOWpZV3dnWm1sc1pYTjVjM1JsYlNCd1lYUm9MQ0IzYUdsamFDQnVaV1ZrY3lCMGJ5QmlaU0JqYjI1MlpYSjBaV1JjY2x4dUlDQWdJQzh2SUhSdklHeHZibWNnVlU1RElIQmhkR2d1WEhKY2JpQWdJQ0J5WlhSMWNtNGdKMXhjWEZ4Y1hGeGNQMXhjWEZ3bklDc2djbVZ6YjJ4MlpXUlFZWFJvTzF4eVhHNGdJSDBnWld4elpTQnBaaUFvTDE1Y1hGeGNYRnhjWEZ0ZVB5NWRMeTUwWlhOMEtISmxjMjlzZG1Wa1VHRjBhQ2twSUh0Y2NseHVJQ0FnSUM4dklIQmhkR2dnYVhNZ2JtVjBkMjl5YXlCVlRrTWdjR0YwYUN3Z2QyaHBZMmdnYm1WbFpITWdkRzhnWW1VZ1kyOXVkbVZ5ZEdWa1hISmNiaUFnSUNBdkx5QjBieUJzYjI1bklGVk9ReUJ3WVhSb0xseHlYRzRnSUNBZ2NtVjBkWEp1SUNkY1hGeGNYRnhjWEQ5Y1hGeGNWVTVEWEZ4Y1hDY2dLeUJ5WlhOdmJIWmxaRkJoZEdndWMzVmljM1J5YVc1bktESXBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjbVYwZFhKdUlIQmhkR2c3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1ZDJsdU16SXVaR2x5Ym1GdFpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNjbHh1SUNCMllYSWdjbVZ6ZFd4MElEMGdkMmx1TXpKVGNHeHBkRkJoZEdnb2NHRjBhQ2tzWEhKY2JpQWdJQ0FnSUhKdmIzUWdQU0J5WlhOMWJIUmJNRjBzWEhKY2JpQWdJQ0FnSUdScGNpQTlJSEpsYzNWc2RGc3hYVHRjY2x4dVhISmNiaUFnYVdZZ0tDRnliMjkwSUNZbUlDRmthWElwSUh0Y2NseHVJQ0FnSUM4dklFNXZJR1JwY201aGJXVWdkMmhoZEhOdlpYWmxjbHh5WEc0Z0lDQWdjbVYwZFhKdUlDY3VKenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR2xtSUNoa2FYSXBJSHRjY2x4dUlDQWdJQzh2SUVsMElHaGhjeUJoSUdScGNtNWhiV1VzSUhOMGNtbHdJSFJ5WVdsc2FXNW5JSE5zWVhOb1hISmNiaUFnSUNCa2FYSWdQU0JrYVhJdWMzVmljM1J5S0RBc0lHUnBjaTVzWlc1bmRHZ2dMU0F4S1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJ5YjI5MElDc2daR2x5TzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5kcGJqTXlMbUpoYzJWdVlXMWxJRDBnWm5WdVkzUnBiMjRvY0dGMGFDd2daWGgwS1NCN1hISmNiaUFnZG1GeUlHWWdQU0IzYVc0ek1sTndiR2wwVUdGMGFDaHdZWFJvS1ZzeVhUdGNjbHh1SUNBdkx5QlVUMFJQT2lCdFlXdGxJSFJvYVhNZ1kyOXRjR0Z5YVhOdmJpQmpZWE5sTFdsdWMyVnVjMmwwYVhabElHOXVJSGRwYm1SdmQzTS9YSEpjYmlBZ2FXWWdLR1Y0ZENBbUppQm1Mbk4xWW5OMGNpZ3RNU0FxSUdWNGRDNXNaVzVuZEdncElEMDlQU0JsZUhRcElIdGNjbHh1SUNBZ0lHWWdQU0JtTG5OMVluTjBjaWd3TENCbUxteGxibWQwYUNBdElHVjRkQzVzWlc1bmRHZ3BPMXh5WEc0Z0lIMWNjbHh1SUNCeVpYUjFjbTRnWmp0Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1M2FXNHpNaTVsZUhSdVlXMWxJRDBnWm5WdVkzUnBiMjRvY0dGMGFDa2dlMXh5WEc0Z0lISmxkSFZ5YmlCM2FXNHpNbE53YkdsMFVHRjBhQ2h3WVhSb0tWc3pYVHRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUzYVc0ek1pNW1iM0p0WVhRZ1BTQm1kVzVqZEdsdmJpaHdZWFJvVDJKcVpXTjBLU0I3WEhKY2JpQWdhV1lnS0NGMWRHbHNMbWx6VDJKcVpXTjBLSEJoZEdoUFltcGxZM1FwS1NCN1hISmNiaUFnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGeHlYRzRnSUNBZ0lDQWdJRndpVUdGeVlXMWxkR1Z5SUNkd1lYUm9UMkpxWldOMEp5QnRkWE4wSUdKbElHRnVJRzlpYW1WamRDd2dibTkwSUZ3aUlDc2dkSGx3Wlc5bUlIQmhkR2hQWW1wbFkzUmNjbHh1SUNBZ0lDazdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQjJZWElnY205dmRDQTlJSEJoZEdoUFltcGxZM1F1Y205dmRDQjhmQ0FuSnp0Y2NseHVYSEpjYmlBZ2FXWWdLQ0YxZEdsc0xtbHpVM1J5YVc1bktISnZiM1FwS1NCN1hISmNiaUFnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGeHlYRzRnSUNBZ0lDQWdJRndpSjNCaGRHaFBZbXBsWTNRdWNtOXZkQ2NnYlhWemRDQmlaU0JoSUhOMGNtbHVaeUJ2Y2lCMWJtUmxabWx1WldRc0lHNXZkQ0JjSWlBclhISmNiaUFnSUNBZ0lDQWdkSGx3Wlc5bUlIQmhkR2hQWW1wbFkzUXVjbTl2ZEZ4eVhHNGdJQ0FnS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhaaGNpQmthWElnUFNCd1lYUm9UMkpxWldOMExtUnBjanRjY2x4dUlDQjJZWElnWW1GelpTQTlJSEJoZEdoUFltcGxZM1F1WW1GelpTQjhmQ0FuSnp0Y2NseHVJQ0JwWmlBb0lXUnBjaWtnZTF4eVhHNGdJQ0FnY21WMGRYSnVJR0poYzJVN1hISmNiaUFnZlZ4eVhHNGdJR2xtSUNoa2FYSmJaR2x5TG14bGJtZDBhQ0F0SURGZElEMDlQU0IzYVc0ek1pNXpaWEFwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUJrYVhJZ0t5QmlZWE5sTzF4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z1pHbHlJQ3NnZDJsdU16SXVjMlZ3SUNzZ1ltRnpaVHRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUzYVc0ek1pNXdZWEp6WlNBOUlHWjFibU4wYVc5dUtIQmhkR2hUZEhKcGJtY3BJSHRjY2x4dUlDQnBaaUFvSVhWMGFXd3VhWE5UZEhKcGJtY29jR0YwYUZOMGNtbHVaeWtwSUh0Y2NseHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdYQ0pRWVhKaGJXVjBaWElnSjNCaGRHaFRkSEpwYm1jbklHMTFjM1FnWW1VZ1lTQnpkSEpwYm1jc0lHNXZkQ0JjSWlBcklIUjVjR1Z2WmlCd1lYUm9VM1J5YVc1blhISmNiaUFnSUNBcE8xeHlYRzRnSUgxY2NseHVJQ0IyWVhJZ1lXeHNVR0Z5ZEhNZ1BTQjNhVzR6TWxOd2JHbDBVR0YwYUNod1lYUm9VM1J5YVc1bktUdGNjbHh1SUNCcFppQW9JV0ZzYkZCaGNuUnpJSHg4SUdGc2JGQmhjblJ6TG14bGJtZDBhQ0FoUFQwZ05Da2dlMXh5WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSWtsdWRtRnNhV1FnY0dGMGFDQW5YQ0lnS3lCd1lYUm9VM1J5YVc1bklDc2dYQ0luWENJcE8xeHlYRzRnSUgxY2NseHVJQ0J5WlhSMWNtNGdlMXh5WEc0Z0lDQWdjbTl2ZERvZ1lXeHNVR0Z5ZEhOYk1GMHNYSEpjYmlBZ0lDQmthWEk2SUdGc2JGQmhjblJ6V3pCZElDc2dZV3hzVUdGeWRITmJNVjB1YzJ4cFkyVW9NQ3dnTFRFcExGeHlYRzRnSUNBZ1ltRnpaVG9nWVd4c1VHRnlkSE5iTWwwc1hISmNiaUFnSUNCbGVIUTZJR0ZzYkZCaGNuUnpXek5kTEZ4eVhHNGdJQ0FnYm1GdFpUb2dZV3hzVUdGeWRITmJNbDB1YzJ4cFkyVW9NQ3dnWVd4c1VHRnlkSE5iTWwwdWJHVnVaM1JvSUMwZ1lXeHNVR0Z5ZEhOYk0xMHViR1Z1WjNSb0tWeHlYRzRnSUgwN1hISmNibjA3WEhKY2JseHlYRzVjY2x4dWQybHVNekl1YzJWd0lEMGdKMXhjWEZ3bk8xeHlYRzUzYVc0ek1pNWtaV3hwYldsMFpYSWdQU0FuT3ljN1hISmNibHh5WEc1Y2NseHVMeThnVTNCc2FYUWdZU0JtYVd4bGJtRnRaU0JwYm5SdklGdHliMjkwTENCa2FYSXNJR0poYzJWdVlXMWxMQ0JsZUhSZExDQjFibWw0SUhabGNuTnBiMjVjY2x4dUx5OGdKM0p2YjNRbklHbHpJR3AxYzNRZ1lTQnpiR0Z6YUN3Z2IzSWdibTkwYUdsdVp5NWNjbHh1ZG1GeUlITndiR2wwVUdGMGFGSmxJRDFjY2x4dUlDQWdJQzllS0Z4Y0x6OThLU2hiWEZ4elhGeFRYU28vS1Nnb1B6cGNYQzU3TVN3eWZYeGJYbHhjTDEwclAzd3BLRnhjTGx0ZUxseGNMMTBxZkNrcEtEODZXMXhjTDEwcUtTUXZPMXh5WEc1MllYSWdjRzl6YVhnZ1BTQjdmVHRjY2x4dVhISmNibHh5WEc1bWRXNWpkR2x2YmlCd2IzTnBlRk53YkdsMFVHRjBhQ2htYVd4bGJtRnRaU2tnZTF4eVhHNGdJSEpsZEhWeWJpQnpjR3hwZEZCaGRHaFNaUzVsZUdWaktHWnBiR1Z1WVcxbEtTNXpiR2xqWlNneEtUdGNjbHh1ZlZ4eVhHNWNjbHh1WEhKY2JpOHZJSEJoZEdndWNtVnpiMngyWlNoYlpuSnZiU0F1TGk1ZExDQjBieWxjY2x4dUx5OGdjRzl6YVhnZ2RtVnljMmx2Ymx4eVhHNXdiM05wZUM1eVpYTnZiSFpsSUQwZ1puVnVZM1JwYjI0b0tTQjdYSEpjYmlBZ2RtRnlJSEpsYzI5c2RtVmtVR0YwYUNBOUlDY25MRnh5WEc0Z0lDQWdJQ0J5WlhOdmJIWmxaRUZpYzI5c2RYUmxJRDBnWm1Gc2MyVTdYSEpjYmx4eVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUMwZ01Uc2dhU0ErUFNBdE1TQW1KaUFoY21WemIyeDJaV1JCWW5OdmJIVjBaVHNnYVMwdEtTQjdYSEpjYmlBZ0lDQjJZWElnY0dGMGFDQTlJQ2hwSUQ0OUlEQXBJRDhnWVhKbmRXMWxiblJ6VzJsZElEb2djSEp2WTJWemN5NWpkMlFvS1R0Y2NseHVYSEpjYmlBZ0lDQXZMeUJUYTJsd0lHVnRjSFI1SUdGdVpDQnBiblpoYkdsa0lHVnVkSEpwWlhOY2NseHVJQ0FnSUdsbUlDZ2hkWFJwYkM1cGMxTjBjbWx1Wnlod1lYUm9LU2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRITWdkRzhnY0dGMGFDNXlaWE52YkhabElHMTFjM1FnWW1VZ2MzUnlhVzVuY3ljcE8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hjR0YwYUNrZ2UxeHlYRzRnSUNBZ0lDQmpiMjUwYVc1MVpUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5WlhOdmJIWmxaRkJoZEdnZ1BTQndZWFJvSUNzZ0p5OG5JQ3NnY21WemIyeDJaV1JRWVhSb08xeHlYRzRnSUNBZ2NtVnpiMngyWldSQlluTnZiSFYwWlNBOUlIQmhkR2hiTUYwZ1BUMDlJQ2N2Snp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM4dklFRjBJSFJvYVhNZ2NHOXBiblFnZEdobElIQmhkR2dnYzJodmRXeGtJR0psSUhKbGMyOXNkbVZrSUhSdklHRWdablZzYkNCaFluTnZiSFYwWlNCd1lYUm9MQ0JpZFhSY2NseHVJQ0F2THlCb1lXNWtiR1VnY21Wc1lYUnBkbVVnY0dGMGFITWdkRzhnWW1VZ2MyRm1aU0FvYldsbmFIUWdhR0Z3Y0dWdUlIZG9aVzRnY0hKdlkyVnpjeTVqZDJRb0tTQm1ZV2xzY3lsY2NseHVYSEpjYmlBZ0x5OGdUbTl5YldGc2FYcGxJSFJvWlNCd1lYUm9YSEpjYmlBZ2NtVnpiMngyWldSUVlYUm9JRDBnYm05eWJXRnNhWHBsUVhKeVlYa29jbVZ6YjJ4MlpXUlFZWFJvTG5Od2JHbDBLQ2N2Snlrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lYSmxjMjlzZG1Wa1FXSnpiMngxZEdVcExtcHZhVzRvSnk4bktUdGNjbHh1WEhKY2JpQWdjbVYwZFhKdUlDZ29jbVZ6YjJ4MlpXUkJZbk52YkhWMFpTQS9JQ2N2SnlBNklDY25LU0FySUhKbGMyOXNkbVZrVUdGMGFDa2dmSHdnSnk0bk8xeHlYRzU5TzF4eVhHNWNjbHh1THk4Z2NHRjBhQzV1YjNKdFlXeHBlbVVvY0dGMGFDbGNjbHh1THk4Z2NHOXphWGdnZG1WeWMybHZibHh5WEc1d2IzTnBlQzV1YjNKdFlXeHBlbVVnUFNCbWRXNWpkR2x2Ymlod1lYUm9LU0I3WEhKY2JpQWdkbUZ5SUdselFXSnpiMngxZEdVZ1BTQndiM05wZUM1cGMwRmljMjlzZFhSbEtIQmhkR2dwTEZ4eVhHNGdJQ0FnSUNCMGNtRnBiR2x1WjFOc1lYTm9JRDBnY0dGMGFDQW1KaUJ3WVhSb1czQmhkR2d1YkdWdVozUm9JQzBnTVYwZ1BUMDlJQ2N2Snp0Y2NseHVYSEpjYmlBZ0x5OGdUbTl5YldGc2FYcGxJSFJvWlNCd1lYUm9YSEpjYmlBZ2NHRjBhQ0E5SUc1dmNtMWhiR2w2WlVGeWNtRjVLSEJoZEdndWMzQnNhWFFvSnk4bktTd2dJV2x6UVdKemIyeDFkR1VwTG1wdmFXNG9KeThuS1R0Y2NseHVYSEpjYmlBZ2FXWWdLQ0Z3WVhSb0lDWW1JQ0ZwYzBGaWMyOXNkWFJsS1NCN1hISmNiaUFnSUNCd1lYUm9JRDBnSnk0bk8xeHlYRzRnSUgxY2NseHVJQ0JwWmlBb2NHRjBhQ0FtSmlCMGNtRnBiR2x1WjFOc1lYTm9LU0I3WEhKY2JpQWdJQ0J3WVhSb0lDczlJQ2N2Snp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUFvYVhOQlluTnZiSFYwWlNBL0lDY3ZKeUE2SUNjbktTQXJJSEJoZEdnN1hISmNibjA3WEhKY2JseHlYRzR2THlCd2IzTnBlQ0IyWlhKemFXOXVYSEpjYm5CdmMybDRMbWx6UVdKemIyeDFkR1VnUFNCbWRXNWpkR2x2Ymlod1lYUm9LU0I3WEhKY2JpQWdjbVYwZFhKdUlIQmhkR2d1WTJoaGNrRjBLREFwSUQwOVBTQW5MeWM3WEhKY2JuMDdYSEpjYmx4eVhHNHZMeUJ3YjNOcGVDQjJaWEp6YVc5dVhISmNibkJ2YzJsNExtcHZhVzRnUFNCbWRXNWpkR2x2YmlncElIdGNjbHh1SUNCMllYSWdjR0YwYUNBOUlDY25PMXh5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNCMllYSWdjMlZuYldWdWRDQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2NseHVJQ0FnSUdsbUlDZ2hkWFJwYkM1cGMxTjBjbWx1WnloelpXZHRaVzUwS1NrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RCY21kMWJXVnVkSE1nZEc4Z2NHRjBhQzVxYjJsdUlHMTFjM1FnWW1VZ2MzUnlhVzVuY3ljcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2FXWWdLSE5sWjIxbGJuUXBJSHRjY2x4dUlDQWdJQ0FnYVdZZ0tDRndZWFJvS1NCN1hISmNiaUFnSUNBZ0lDQWdjR0YwYUNBclBTQnpaV2R0Wlc1ME8xeHlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJSEJoZEdnZ0t6MGdKeThuSUNzZ2MyVm5iV1Z1ZER0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVJQ0J5WlhSMWNtNGdjRzl6YVhndWJtOXliV0ZzYVhwbEtIQmhkR2dwTzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYmk4dklIQmhkR2d1Y21Wc1lYUnBkbVVvWm5KdmJTd2dkRzhwWEhKY2JpOHZJSEJ2YzJsNElIWmxjbk5wYjI1Y2NseHVjRzl6YVhndWNtVnNZWFJwZG1VZ1BTQm1kVzVqZEdsdmJpaG1jbTl0TENCMGJ5a2dlMXh5WEc0Z0lHWnliMjBnUFNCd2IzTnBlQzV5WlhOdmJIWmxLR1p5YjIwcExuTjFZbk4wY2lneEtUdGNjbHh1SUNCMGJ5QTlJSEJ2YzJsNExuSmxjMjlzZG1Vb2RHOHBMbk4xWW5OMGNpZ3hLVHRjY2x4dVhISmNiaUFnZG1GeUlHWnliMjFRWVhKMGN5QTlJSFJ5YVcxQmNuSmhlU2htY205dExuTndiR2wwS0Njdkp5a3BPMXh5WEc0Z0lIWmhjaUIwYjFCaGNuUnpJRDBnZEhKcGJVRnljbUY1S0hSdkxuTndiR2wwS0Njdkp5a3BPMXh5WEc1Y2NseHVJQ0IyWVhJZ2JHVnVaM1JvSUQwZ1RXRjBhQzV0YVc0b1puSnZiVkJoY25SekxteGxibWQwYUN3Z2RHOVFZWEowY3k1c1pXNW5kR2dwTzF4eVhHNGdJSFpoY2lCellXMWxVR0Z5ZEhOTVpXNW5kR2dnUFNCc1pXNW5kR2c3WEhKY2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ2FXWWdLR1p5YjIxUVlYSjBjMXRwWFNBaFBUMGdkRzlRWVhKMGMxdHBYU2tnZTF4eVhHNGdJQ0FnSUNCellXMWxVR0Z5ZEhOTVpXNW5kR2dnUFNCcE8xeHlYRzRnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5WEhKY2JseHlYRzRnSUhaaGNpQnZkWFJ3ZFhSUVlYSjBjeUE5SUZ0ZE8xeHlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQnpZVzFsVUdGeWRITk1aVzVuZEdnN0lHa2dQQ0JtY205dFVHRnlkSE11YkdWdVozUm9PeUJwS3lzcElIdGNjbHh1SUNBZ0lHOTFkSEIxZEZCaGNuUnpMbkIxYzJnb0p5NHVKeWs3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J2ZFhSd2RYUlFZWEowY3lBOUlHOTFkSEIxZEZCaGNuUnpMbU52Ym1OaGRDaDBiMUJoY25SekxuTnNhV05sS0hOaGJXVlFZWEowYzB4bGJtZDBhQ2twTzF4eVhHNWNjbHh1SUNCeVpYUjFjbTRnYjNWMGNIVjBVR0Z5ZEhNdWFtOXBiaWduTHljcE8xeHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JuQnZjMmw0TGw5dFlXdGxURzl1WnlBOUlHWjFibU4wYVc5dUtIQmhkR2dwSUh0Y2NseHVJQ0J5WlhSMWNtNGdjR0YwYUR0Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1d2IzTnBlQzVrYVhKdVlXMWxJRDBnWm5WdVkzUnBiMjRvY0dGMGFDa2dlMXh5WEc0Z0lIWmhjaUJ5WlhOMWJIUWdQU0J3YjNOcGVGTndiR2wwVUdGMGFDaHdZWFJvS1N4Y2NseHVJQ0FnSUNBZ2NtOXZkQ0E5SUhKbGMzVnNkRnN3WFN4Y2NseHVJQ0FnSUNBZ1pHbHlJRDBnY21WemRXeDBXekZkTzF4eVhHNWNjbHh1SUNCcFppQW9JWEp2YjNRZ0ppWWdJV1JwY2lrZ2UxeHlYRzRnSUNBZ0x5OGdUbThnWkdseWJtRnRaU0IzYUdGMGMyOWxkbVZ5WEhKY2JpQWdJQ0J5WlhSMWNtNGdKeTRuTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnYVdZZ0tHUnBjaWtnZTF4eVhHNGdJQ0FnTHk4Z1NYUWdhR0Z6SUdFZ1pHbHlibUZ0WlN3Z2MzUnlhWEFnZEhKaGFXeHBibWNnYzJ4aGMyaGNjbHh1SUNBZ0lHUnBjaUE5SUdScGNpNXpkV0p6ZEhJb01Dd2daR2x5TG14bGJtZDBhQ0F0SURFcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUhKdmIzUWdLeUJrYVhJN1hISmNibjA3WEhKY2JseHlYRzVjY2x4dWNHOXphWGd1WW1GelpXNWhiV1VnUFNCbWRXNWpkR2x2Ymlod1lYUm9MQ0JsZUhRcElIdGNjbHh1SUNCMllYSWdaaUE5SUhCdmMybDRVM0JzYVhSUVlYUm9LSEJoZEdncFd6SmRPMXh5WEc0Z0lDOHZJRlJQUkU4NklHMWhhMlVnZEdocGN5QmpiMjF3WVhKcGMyOXVJR05oYzJVdGFXNXpaVzV6YVhScGRtVWdiMjRnZDJsdVpHOTNjejljY2x4dUlDQnBaaUFvWlhoMElDWW1JR1l1YzNWaWMzUnlLQzB4SUNvZ1pYaDBMbXhsYm1kMGFDa2dQVDA5SUdWNGRDa2dlMXh5WEc0Z0lDQWdaaUE5SUdZdWMzVmljM1J5S0RBc0lHWXViR1Z1WjNSb0lDMGdaWGgwTG14bGJtZDBhQ2s3WEhKY2JpQWdmVnh5WEc0Z0lISmxkSFZ5YmlCbU8xeHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JuQnZjMmw0TG1WNGRHNWhiV1VnUFNCbWRXNWpkR2x2Ymlod1lYUm9LU0I3WEhKY2JpQWdjbVYwZFhKdUlIQnZjMmw0VTNCc2FYUlFZWFJvS0hCaGRHZ3BXek5kTzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5CdmMybDRMbVp2Y20xaGRDQTlJR1oxYm1OMGFXOXVLSEJoZEdoUFltcGxZM1FwSUh0Y2NseHVJQ0JwWmlBb0lYVjBhV3d1YVhOUFltcGxZM1FvY0dGMGFFOWlhbVZqZENrcElIdGNjbHh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YSEpjYmlBZ0lDQWdJQ0FnWENKUVlYSmhiV1YwWlhJZ0ozQmhkR2hQWW1wbFkzUW5JRzExYzNRZ1ltVWdZVzRnYjJKcVpXTjBMQ0J1YjNRZ1hDSWdLeUIwZVhCbGIyWWdjR0YwYUU5aWFtVmpkRnh5WEc0Z0lDQWdLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSFpoY2lCeWIyOTBJRDBnY0dGMGFFOWlhbVZqZEM1eWIyOTBJSHg4SUNjbk8xeHlYRzVjY2x4dUlDQnBaaUFvSVhWMGFXd3VhWE5UZEhKcGJtY29jbTl2ZENrcElIdGNjbHh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YSEpjYmlBZ0lDQWdJQ0FnWENJbmNHRjBhRTlpYW1WamRDNXliMjkwSnlCdGRYTjBJR0psSUdFZ2MzUnlhVzVuSUc5eUlIVnVaR1ZtYVc1bFpDd2dibTkwSUZ3aUlDdGNjbHh1SUNBZ0lDQWdJQ0IwZVhCbGIyWWdjR0YwYUU5aWFtVmpkQzV5YjI5MFhISmNiaUFnSUNBcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2RtRnlJR1JwY2lBOUlIQmhkR2hQWW1wbFkzUXVaR2x5SUQ4Z2NHRjBhRTlpYW1WamRDNWthWElnS3lCd2IzTnBlQzV6WlhBZ09pQW5KenRjY2x4dUlDQjJZWElnWW1GelpTQTlJSEJoZEdoUFltcGxZM1F1WW1GelpTQjhmQ0FuSnp0Y2NseHVJQ0J5WlhSMWNtNGdaR2x5SUNzZ1ltRnpaVHRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzV3YjNOcGVDNXdZWEp6WlNBOUlHWjFibU4wYVc5dUtIQmhkR2hUZEhKcGJtY3BJSHRjY2x4dUlDQnBaaUFvSVhWMGFXd3VhWE5UZEhKcGJtY29jR0YwYUZOMGNtbHVaeWtwSUh0Y2NseHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdYQ0pRWVhKaGJXVjBaWElnSjNCaGRHaFRkSEpwYm1jbklHMTFjM1FnWW1VZ1lTQnpkSEpwYm1jc0lHNXZkQ0JjSWlBcklIUjVjR1Z2WmlCd1lYUm9VM1J5YVc1blhISmNiaUFnSUNBcE8xeHlYRzRnSUgxY2NseHVJQ0IyWVhJZ1lXeHNVR0Z5ZEhNZ1BTQndiM05wZUZOd2JHbDBVR0YwYUNod1lYUm9VM1J5YVc1bktUdGNjbHh1SUNCcFppQW9JV0ZzYkZCaGNuUnpJSHg4SUdGc2JGQmhjblJ6TG14bGJtZDBhQ0FoUFQwZ05Da2dlMXh5WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSWtsdWRtRnNhV1FnY0dGMGFDQW5YQ0lnS3lCd1lYUm9VM1J5YVc1bklDc2dYQ0luWENJcE8xeHlYRzRnSUgxY2NseHVJQ0JoYkd4UVlYSjBjMXN4WFNBOUlHRnNiRkJoY25Seld6RmRJSHg4SUNjbk8xeHlYRzRnSUdGc2JGQmhjblJ6V3pKZElEMGdZV3hzVUdGeWRITmJNbDBnZkh3Z0p5YzdYSEpjYmlBZ1lXeHNVR0Z5ZEhOYk0xMGdQU0JoYkd4UVlYSjBjMXN6WFNCOGZDQW5KenRjY2x4dVhISmNiaUFnY21WMGRYSnVJSHRjY2x4dUlDQWdJSEp2YjNRNklHRnNiRkJoY25Seld6QmRMRnh5WEc0Z0lDQWdaR2x5T2lCaGJHeFFZWEowYzFzd1hTQXJJR0ZzYkZCaGNuUnpXekZkTG5Oc2FXTmxLREFzSUMweEtTeGNjbHh1SUNBZ0lHSmhjMlU2SUdGc2JGQmhjblJ6V3pKZExGeHlYRzRnSUNBZ1pYaDBPaUJoYkd4UVlYSjBjMXN6WFN4Y2NseHVJQ0FnSUc1aGJXVTZJR0ZzYkZCaGNuUnpXekpkTG5Oc2FXTmxLREFzSUdGc2JGQmhjblJ6V3pKZExteGxibWQwYUNBdElHRnNiRkJoY25Seld6TmRMbXhsYm1kMGFDbGNjbHh1SUNCOU8xeHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JuQnZjMmw0TG5ObGNDQTlJQ2N2Snp0Y2NseHVjRzl6YVhndVpHVnNhVzFwZEdWeUlEMGdKem9uTzF4eVhHNWNjbHh1WEhKY2JtbG1JQ2hwYzFkcGJtUnZkM01wWEhKY2JpQWdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjNhVzR6TWp0Y2NseHVaV3h6WlNBdktpQndiM05wZUNBcUwxeHlYRzRnSUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnY0c5emFYZzdYSEpjYmx4eVhHNXRiMlIxYkdVdVpYaHdiM0owY3k1d2IzTnBlQ0E5SUhCdmMybDRPMXh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeTUzYVc0ek1pQTlJSGRwYmpNeU8xeHlYRzVjYmx4dVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNYRzR2THlBdUwzNHZjR0YwYUM5d1lYUm9MbXB6WEc0dkx5QnRiMlIxYkdVZ2FXUWdQU0F4WEc0dkx5QnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01DSXNJbVY0Y0c5eWRDQXFJR1p5YjIwZ0p5NHZjR0YwYUNjN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZhVzVrWlhndWRITWlMQ0psZUhCdmNuUWdZMjl1YzNRZ2JtOXZjQ0E5SUNobWNtOXRPaUJ6ZEhKcGJtY3NJSFJ2T2lCemRISnBibWNwT2lCemRISnBibWNnUFQ0Z2UxeHVJQ0IwYUhKdmR5QkZjbkp2Y2lnbmJXVjBhRzlrSUhWdWMzVndjRzl5ZEdWa0lHbHVJR2x6YjIxdmNuQm9hV010Y0dGMGFDY3BPMXh1ZlR0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOXViMjl3TG5Seklpd2laWGh3YjNKMElHTnZibk4wSUdselRXRmpJRDBnS0NrNklHSnZiMnhsWVc0Z1BUNGdlMXh1SUNCcFppQW9jSEp2WTJWemMxeHVJQ0FtSmlCMGVYQmxiMllnY0hKdlkyVnpjeTV3YkdGMFptOXliU0E5UFQwZ0ozTjBjbWx1WnlkY2JpQWdKaVlnY0hKdlkyVnpjeTV3YkdGMFptOXliUzUwYjB4dmQyVnlRMkZ6WlNncElEMDlQU0FuWkdGeWQybHVKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQnVZWFpwWjJGMGIzSWdJVDA5SUNkMWJtUmxabWx1WldRblhHNGdJQ1ltSUhSNWNHVnZaaUJ1WVhacFoyRjBiM0l1Y0d4aGRHWnZjbTBnUFQwOUlDZHpkSEpwYm1jblhHNGdJQ1ltSUc1aGRtbG5ZWFJ2Y2k1d2JHRjBabTl5YlM1MGIweHZkMlZ5UTJGelpTZ3BMbWx1WkdWNFQyWW9KMjFoWXljcElENGdMVEVwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUgxY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBjMWRwYmlBOUlDZ3BPaUJpYjI5c1pXRnVJRDArSUh0Y2JpQWdhV1lnS0hCeWIyTmxjM05jYmlBZ0ppWWdkSGx3Wlc5bUlIQnliMk5sYzNNdWNHeGhkR1p2Y20wZ1BUMDlJQ2R6ZEhKcGJtY25YRzRnSUNZbUlIQnliMk5sYzNNdWNHeGhkR1p2Y20wdWRHOU1iM2RsY2tOaGMyVW9LU0E5UFQwZ0ozZHBiak15SnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0hSNWNHVnZaaUJ1WVhacFoyRjBiM0lnSVQwOUlDZDFibVJsWm1sdVpXUW5YRzRnSUNBZ0ppWWdkSGx3Wlc5bUlHNWhkbWxuWVhSdmNpNXdiR0YwWm05eWJTQTlQVDBnSjNOMGNtbHVaeWRjYmlBZ0lDQW1KaUJ1WVhacFoyRjBiM0l1Y0d4aGRHWnZjbTB1ZEc5TWIzZGxja05oYzJVb0tTNXBibVJsZUU5bUtDZDNhVzRuS1NBK0lDMHhLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkNjbTkzYzJWeUlEMGdLQ2s2SUdKdmIyeGxZVzRnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2M3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9iMlJsSUQwZ0tDazZJR0p2YjJ4bFlXNGdQVDRnZTF4dUlDQnlaWFIxY200Z2RIbHdaVzltSUhkcGJtUnZkeUE5UFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZEhsd1pXOW1JSEJ5YjJObGMzTWdJVDA5SUNkMWJtUmxabWx1WldRbk8xeHVmVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5d2JHRjBabTl5YlM1MGN5SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjbVZ4ZFdseVpTaGNJblYwYVd4Y0lpazdYRzVjYmx4dUx5OHZMeTh2THk4dkx5OHZMeTh2THk4dlhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVseHVMeThnWlhoMFpYSnVZV3dnWENKMWRHbHNYQ0pjYmk4dklHMXZaSFZzWlNCcFpDQTlJRFZjYmk4dklHMXZaSFZzWlNCamFIVnVhM01nUFNBd0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3QvaXNvbW9ycGhpYy1wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuLyogdHNVbml0IChjKSBDb3B5cmlnaHQgMjAxMi0yMDE1IFN0ZXZlIEZlbnRvbiwgbGljZW5zZWQgdW5kZXIgQXBhY2hlIDIuMCBodHRwczovL2dpdGh1Yi5jb20vU3RldmUtRmVudG9uL3RzVW5pdCAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVGVzdCB7XG4gICAgY29uc3RydWN0b3IoLi4udGVzdE1vZHVsZXMpIHtcbiAgICAgICAgdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4ID0gJ18nO1xuICAgICAgICB0aGlzLnBhc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLnRlc3RzID0gW107XG4gICAgICAgIHRoaXMucmVzZXJ2ZWRNZXRob2ROYW1lQ29udGFpbmVyID0gbmV3IFRlc3RDbGFzcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVRlc3RMaW1pdGVyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0ZXN0TW9kdWxlID0gdGVzdE1vZHVsZXNbaV07XG4gICAgICAgICAgICBpZiAodGVzdE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHRlc3RNb2R1bGVbXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVzdENsYXNzKG5ldyB0ZXN0TW9kdWxlLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gdGVzdE1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRlc3RDbGFzcyhuZXcgdGVzdE1vZHVsZVtwcm9wXSwgcHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZFRlc3RDbGFzcyh0ZXN0Q2xhc3MsIG5hbWUgPSAnVGVzdHMnKSB7XG4gICAgICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdERlZmluaXRpb24odGVzdENsYXNzLCBuYW1lKSk7XG4gICAgfVxuICAgIHJ1bih0ZXN0UnVuTGltaXRlciA9IG51bGwpIHtcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBudWxsO1xuICAgICAgICB2YXIgdGVzdENvbnRleHQgPSBuZXcgVGVzdENvbnRleHQoKTtcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlc3RSdW5MaW1pdGVyID0gdGhpcy50ZXN0UnVuTGltaXRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGVzdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB0ZXN0Q2xhc3MgPSB0aGlzLnRlc3RzW2ldLnRlc3RDbGFzcztcbiAgICAgICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIHRlc3RzR3JvdXBOYW1lID0gdGhpcy50ZXN0c1tpXS5uYW1lO1xuICAgICAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyICYmICF0ZXN0UnVuTGltaXRlci5pc1Rlc3RzR3JvdXBBY3RpdmUodGVzdHNHcm91cE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0RnVuY3Rpb25OYW1lcyh0ZXN0Q2xhc3MpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRUZXN0TmFtZSA9IHByb3BlcnR5TmFtZXNbal07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXNlcnZlZEZ1bmN0aW9uTmFtZSh1bml0VGVzdE5hbWUpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh1bml0VGVzdE5hbWUuc3Vic3RyaW5nKDAsIHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeC5sZW5ndGgpID09PSB0aGlzLnByaXZhdGVNZW1iZXJQcmVmaXgpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0eXBlb2YgZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICB8fCAodGVzdFJ1bkxpbWl0ZXIgJiYgIXRlc3RSdW5MaW1pdGVyLmlzVGVzdEFjdGl2ZSh1bml0VGVzdE5hbWUpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW1ldGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UnVuTGltaXRlciAmJiAhdGVzdFJ1bkxpbWl0ZXIuaXNQYXJhbWV0ZXJzU2V0QWN0aXZlKHBhcmFtZXRlckluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5TaW5nbGVUZXN0KHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycywgcGFyYW1ldGVySW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1blNpbmdsZVRlc3QodGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dSZXN1bHRzKHRhcmdldCkge1xuICAgICAgICB2YXIgZWxlbTtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSB0YXJnZXQ7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGFydGljbGU+JyArXG4gICAgICAgICAgICAnPGgxPicgKyB0aGlzLmdldFRlc3RSZXN1bHQoKSArICc8L2gxPicgK1xuICAgICAgICAgICAgJzxwPicgKyB0aGlzLmdldFRlc3RTdW1tYXJ5KCkgKyAnPC9wPicgK1xuICAgICAgICAgICAgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdENsZWFuZXIoKSArXG4gICAgICAgICAgICAnPHNlY3Rpb24gaWQ9XCJ0c0ZhaWxcIj4nICtcbiAgICAgICAgICAgICc8aDI+RXJyb3JzPC9oMj4nICtcbiAgICAgICAgICAgICc8dWwgY2xhc3M9XCJiYWRcIj4nICsgdGhpcy5nZXRUZXN0UmVzdWx0TGlzdCh0aGlzLmVycm9ycykgKyAnPC91bD4nICtcbiAgICAgICAgICAgICc8L3NlY3Rpb24+JyArXG4gICAgICAgICAgICAnPHNlY3Rpb24gaWQ9XCJ0c09rYXlcIj4nICtcbiAgICAgICAgICAgICc8aDI+UGFzc2luZyBUZXN0czwvaDI+JyArXG4gICAgICAgICAgICAnPHVsIGNsYXNzPVwiZ29vZFwiPicgKyB0aGlzLmdldFRlc3RSZXN1bHRMaXN0KHRoaXMucGFzc2VzKSArICc8L3VsPicgK1xuICAgICAgICAgICAgJzwvc2VjdGlvbj4nICtcbiAgICAgICAgICAgICc8L2FydGljbGU+JyArXG4gICAgICAgICAgICB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0Q2xlYW5lcigpO1xuICAgICAgICBlbGVtLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0VGFwUmVzdWx0cygpIHtcbiAgICAgICAgdmFyIG5ld0xpbmUgPSAnXFxyXFxuJztcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gJzEuLicgKyAodGhpcy5wYXNzZXMubGVuZ3RoICsgdGhpcy5lcnJvcnMubGVuZ3RoKS50b1N0cmluZygpICsgbmV3TGluZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gJ25vdCBvayAnICsgdGhpcy5lcnJvcnNbaV0ubWVzc2FnZSArICcgJyArIHRoaXMuZXJyb3JzW2ldLnRlc3ROYW1lICsgJzonICsgdGhpcy5lcnJvcnNbaV0uZnVuY05hbWUgKyBuZXdMaW5lO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBsYXRlICs9ICdvayAnICsgdGhpcy5wYXNzZXNbaV0udGVzdE5hbWUgKyAnOicgKyB0aGlzLnBhc3Nlc1tpXS5mdW5jTmFtZSArIG5ld0xpbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBjcmVhdGVUZXN0TGltaXRlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGVzdFJ1bkxpbWl0ZXIgPSBuZXcgVGVzdFJ1bkxpbWl0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHsgfVxuICAgIH1cbiAgICBpc1Jlc2VydmVkRnVuY3Rpb25OYW1lKGZ1bmN0aW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlclxuICAgICAgICAgICAgLmdldEZ1bmN0aW9uTmFtZXModGhpcy5yZXNlcnZlZE1ldGhvZE5hbWVDb250YWluZXIpXG4gICAgICAgICAgICAuc29tZShtZW0gPT4gbWVtID09PSBmdW5jdGlvbk5hbWUpO1xuICAgIH1cbiAgICBydW5TaW5nbGVUZXN0KHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycyA9IG51bGwsIHBhcmFtZXRlclNldEluZGV4ID0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHRlc3RDbGFzc1snc2V0VXAnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGVzdENsYXNzWydzZXRVcCddKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSAocGFyYW1ldGVyU2V0SW5kZXggIT09IG51bGwpID8gcGFyYW1ldGVyc1twYXJhbWV0ZXJTZXRJbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLmFwcGx5KHRlc3RDbGFzcywgYXJncyk7XG4gICAgICAgICAgICB0aGlzLnBhc3Nlcy5wdXNoKG5ldyBUZXN0RGVzY3JpcHRpb24odGVzdHNHcm91cE5hbWUsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVyU2V0SW5kZXgsICdPSycpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBUZXN0RGVzY3JpcHRpb24odGVzdHNHcm91cE5hbWUsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVyU2V0SW5kZXgsIGVyci50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXN0Q2xhc3NbJ3RlYXJEb3duJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRlc3RDbGFzc1sndGVhckRvd24nXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFRlc3RSZXN1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5sZW5ndGggPT09IDAgPyAnVGVzdCBQYXNzZWQnIDogJ1Rlc3QgRmFpbGVkJztcbiAgICB9XG4gICAgZ2V0VGVzdFN1bW1hcnkoKSB7XG4gICAgICAgIHJldHVybiAnVG90YWwgdGVzdHM6IDxzcGFuIGlkPVwidHNVbml0VG90YWxDb3V0XCI+JyArICh0aGlzLnBhc3Nlcy5sZW5ndGggKyB0aGlzLmVycm9ycy5sZW5ndGgpLnRvU3RyaW5nKCkgKyAnPC9zcGFuPi4gJyArXG4gICAgICAgICAgICAnUGFzc2VkIHRlc3RzOiA8c3BhbiBpZD1cInRzVW5pdFBhc3NDb3VudFwiIGNsYXNzPVwiZ29vZFwiPicgKyB0aGlzLnBhc3Nlcy5sZW5ndGggKyAnPC9zcGFuPi4gJyArXG4gICAgICAgICAgICAnRmFpbGVkIHRlc3RzOiA8c3BhbiBpZD1cInRzVW5pdEZhaWxDb3VudFwiIGNsYXNzPVwiYmFkXCI+JyArIHRoaXMuZXJyb3JzLmxlbmd0aCArICc8L3NwYW4+Lic7XG4gICAgfVxuICAgIGdldFRlc3RSZXN1bHRMaXN0KHRlc3RSZXN1bHRzKSB7XG4gICAgICAgIHZhciBsaXN0ID0gJyc7XG4gICAgICAgIHZhciBncm91cCA9ICcnO1xuICAgICAgICB2YXIgaXNGaXJzdCA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdFJlc3VsdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0ZXN0UmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudGVzdE5hbWUgIT09IGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAgPSByZXN1bHQudGVzdE5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdCArPSAnPC9saT48L3VsPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3QgKz0gJzxsaT4nICsgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdGVyRm9yR3JvdXAoZ3JvdXApICsgcmVzdWx0LnRlc3ROYW1lICsgJzx1bD4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdENsYXNzID0gKHJlc3VsdC5tZXNzYWdlID09PSAnT0snKSA/ICdzdWNjZXNzJyA6ICdlcnJvcic7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25MYWJhbCA9IHJlc3VsdC5mdW5jTmFtZSArICgocmVzdWx0LnBhcmFtZXRlclNldE51bWJlciA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICA/ICcoKSdcbiAgICAgICAgICAgICAgICA6ICcoJyArIHRoaXMudGVzdFJ1bkxpbWl0ZXIuZ2V0TGltaXRlckZvclRlc3QoZ3JvdXAsIHJlc3VsdC5mdW5jTmFtZSwgcmVzdWx0LnBhcmFtZXRlclNldE51bWJlcikgKyAnIHBhcmFtYXRlciBzZXQ6ICcgKyByZXN1bHQucGFyYW1ldGVyU2V0TnVtYmVyICsgJyknKTtcbiAgICAgICAgICAgIGxpc3QgKz0gJzxsaSBjbGFzcz1cIicgKyByZXN1bHRDbGFzcyArICdcIj4nICsgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdGVyRm9yVGVzdChncm91cCwgcmVzdWx0LmZ1bmNOYW1lKSArIGZ1bmN0aW9uTGFiYWwgKyAnOiAnICsgdGhpcy5lbmNvZGVIdG1sRW50aXRpZXMocmVzdWx0Lm1lc3NhZ2UpICsgJzwvbGk+JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdCArICc8L3VsPic7XG4gICAgfVxuICAgIGVuY29kZUh0bWxFbnRpdGllcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdCA9IFRlc3Q7XG5jbGFzcyBUZXN0UnVuTGltaXRlclJ1bkFsbCB7XG4gICAgaXNUZXN0c0dyb3VwQWN0aXZlKGdyb3VwTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaXNUZXN0QWN0aXZlKHRlc3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc1BhcmFtZXRlcnNTZXRBY3RpdmUocGFyYW1hdGVyc1NldE51bWJlcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5jbGFzcyBUZXN0UnVuTGltaXRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZXN0TmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXRSZWZyZXNoT25MaW5rc1dpdGhIYXNoKCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlU3RyaW5nSW50b1Rlc3RzTGltaXQod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIH1cbiAgICBpc1Rlc3RzR3JvdXBBY3RpdmUoZ3JvdXBOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBOYW1lID09PSBncm91cE5hbWU7XG4gICAgfVxuICAgIGlzVGVzdEFjdGl2ZSh0ZXN0TmFtZSkge1xuICAgICAgICBpZiAodGhpcy50ZXN0TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdE5hbWUgPT09IHRlc3ROYW1lO1xuICAgIH1cbiAgICBpc1BhcmFtZXRlcnNTZXRBY3RpdmUocGFyYW1hdGVyc1NldCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbWV0ZXJTZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlclNldCA9PT0gcGFyYW1hdGVyc1NldDtcbiAgICB9XG4gICAgZ2V0TGltaXRlckZvclRlc3QoZ3JvdXBOYW1lLCB0ZXN0TmFtZSwgcGFyYW1ldGVyU2V0ID0gbnVsbCkge1xuICAgICAgICBpZiAocGFyYW1ldGVyU2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZXN0TmFtZSArPSAnKCcgKyBwYXJhbWV0ZXJTZXQgKyAnKSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcmbmJzcDs8YSBocmVmPVwiIycgKyBncm91cE5hbWUgKyAnLycgKyB0ZXN0TmFtZSArICdcXFwiIGNsYXNzPVwiYXNjaWlcIj4mIzk2NTg7PC9hPiZuYnNwOyc7XG4gICAgfVxuICAgIGdldExpbWl0ZXJGb3JHcm91cChncm91cE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICcmbmJzcDs8YSBocmVmPVwiIycgKyBncm91cE5hbWUgKyAnXCIgY2xhc3M9XCJhc2NpaVwiPiYjOTY1ODs8L2E+Jm5ic3A7JztcbiAgICB9XG4gICAgZ2V0TGltaXRDbGVhbmVyKCkge1xuICAgICAgICByZXR1cm4gJzxwPjxhIGhyZWY9XCIjXCI+UnVuIGFsbCB0ZXN0cyA8c3BhbiBjbGFzcz1cImFzY2lpXCI+JiM5NjU4Ozwvc3Bhbj48L2E+PC9wPic7XG4gICAgfVxuICAgIHNldFJlZnJlc2hPbkxpbmtzV2l0aEhhc2goKSB7XG4gICAgICAgIHZhciBwcmV2aW91c0hhbmRsZXIgPSB3aW5kb3cub25oYXNoY2hhbmdlO1xuICAgICAgICB3aW5kb3cub25oYXNoY2hhbmdlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSGFuZGxlci5jYWxsKHdpbmRvdywgZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICB0cmFuc2xhdGVTdHJpbmdJbnRvVGVzdHNMaW1pdCh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVnZXggPSAvXiMoW19hLXpBLVowLTldKykoKFxcLyhbX2EtekEtWjAtOV0rKSkoXFwoKFswLTldKylcXCkpPyk/JC87XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdleC5leGVjKHZhbHVlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSAmJiAhIXJlc3VsdFsxXSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cE5hbWUgPSByZXN1bHRbMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiA0ICYmICEhcmVzdWx0WzRdKSB7XG4gICAgICAgICAgICB0aGlzLnRlc3ROYW1lID0gcmVzdWx0WzRdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gNiAmJiAhIXJlc3VsdFs2XSkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJTZXQgPSBwYXJzZUludChyZXN1bHRbNl0sIDEwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdFJ1bkxpbWl0ZXIgPSBUZXN0UnVuTGltaXRlcjtcbmNsYXNzIFRlc3RDb250ZXh0IHtcbiAgICBzZXRVcCgpIHtcbiAgICB9XG4gICAgdGVhckRvd24oKSB7XG4gICAgfVxuICAgIGFyZUlkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKGV4cGVjdGVkICE9PSBhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZUlkZW50aWNhbCBmYWlsZWQgd2hlbiBnaXZlbiAnICtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50VmFyaWFibGUoZXhwZWN0ZWQpICsgJyBhbmQgJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmVOb3RJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChleHBlY3RlZCA9PT0gYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVOb3RJZGVudGljYWwgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArXG4gICAgICAgICAgICAgICAgdGhpcy5wcmludFZhcmlhYmxlKGV4cGVjdGVkKSArICcgYW5kICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXJlQ29sbGVjdGlvbnNJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlc3VsdFRvU3RyaW5nKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIG1zZyA9ICcnO1xuICAgICAgICAgICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbXNnID0gJ1snICsgcmVzdWx0LnBvcCgpICsgJ10nICsgbXNnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1zZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29tcGFyZUFycmF5ID0gKGV4cGVjdGVkLCBhY3R1YWwsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdmFyIGluZGV4U3RyaW5nID0gJyc7XG4gICAgICAgICAgICBpZiAoZXhwZWN0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gYXJyYXkgYScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIGlzIG51bGwgYW5kIGInICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyBpcyBub3QgbnVsbCcsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGNvcnJlY3Q6IGJvdGggYXJlIG51bGxzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3R1YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbmRleFN0cmluZyA9IHJlc3VsdFRvU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gYXJyYXkgYScgK1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgaXMgbm90IG51bGwgYW5kIGInICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIGlzIG51bGwnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHBlY3RlZC5sZW5ndGggIT09IGFjdHVhbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbmRleFN0cmluZyA9IHJlc3VsdFRvU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gbGVuZ3RoIG9mIGFycmF5IGEnICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIChsZW5ndGg6ICcgKyBleHBlY3RlZC5sZW5ndGggKyAnKSBpcyBkaWZmZXJlbnQgb2YgbGVuZ3RoIG9mIGFycmF5IGInICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIChsZW5ndGg6ICcgKyBhY3R1YWwubGVuZ3RoICsgJyknLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKGV4cGVjdGVkW2ldIGluc3RhbmNlb2YgQXJyYXkpICYmIChhY3R1YWxbaV0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVBcnJheShleHBlY3RlZFtpXSwgYWN0dWFsW2ldLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV4cGVjdGVkW2ldICE9PSBhY3R1YWxbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gZWxlbWVudCBhJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKCcgKyB0aGlzLnByaW50VmFyaWFibGUoZXhwZWN0ZWRbaV0pICsgJykgaXMgZGlmZmVyZW50IHRoYW4gZWxlbWVudCBiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKCcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsW2ldKSArICcpJywgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBjb21wYXJlQXJyYXkoZXhwZWN0ZWQsIGFjdHVhbCwgW10pO1xuICAgIH1cbiAgICBhcmVDb2xsZWN0aW9uc05vdElkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuYXJlQ29sbGVjdGlvbnNJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNOb3RJZGVudGljYWwgZmFpbGVkIHdoZW4gYm90aCBjb2xsZWN0aW9ucyBhcmUgaWRlbnRpY2FsJywgbWVzc2FnZSk7XG4gICAgfVxuICAgIGlzVHJ1ZShhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoIWFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNUcnVlIGZhaWxlZCB3aGVuIGdpdmVuICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNGYWxzZShhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc0ZhbHNlIGZhaWxlZCB3aGVuIGdpdmVuICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNUcnV0aHkoYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKCFhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzVHJ1ZSBmYWlsZWQgd2hlbiBnaXZlbiAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRmFsc2V5KGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzRmFsc2UgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvd3MoYSwgbWVzc2FnZSA9ICcnLCBlcnJvclN0cmluZyA9ICcnKSB7XG4gICAgICAgIHZhciBhY3R1YWw7XG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYWN0dWFsID0gYTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhLmZuKSB7XG4gICAgICAgICAgICBhY3R1YWwgPSBhLmZuO1xuICAgICAgICAgICAgbWVzc2FnZSA9IGEubWVzc2FnZTtcbiAgICAgICAgICAgIGVycm9yU3RyaW5nID0gYS5leGNlcHRpb25TdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzVGhyb3duID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhY3R1YWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3JTdHJpbmcgfHwgZXgubWVzc2FnZSA9PT0gZXJyb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpc1Rocm93biA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyb3JTdHJpbmcgJiYgZXgubWVzc2FnZSAhPT0gZXJyb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdkaWZmZXJlbnQgZXJyb3Igc3RyaW5nIHRoYW4gc3VwcGxpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVGhyb3duKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdkaWQgbm90IHRocm93IGFuIGVycm9yJywgbWVzc2FnZSB8fCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9lc05vdFRocm93KGFjdHVhbCwgbWVzc2FnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYWN0dWFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCd0aHJldyBhbiBlcnJvciAnICsgZXgsIG1lc3NhZ2UgfHwgJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4ZWN1dGVzV2l0aGluKGFjdHVhbCwgdGltZUxpbWl0LCBtZXNzYWdlID0gbnVsbCkge1xuICAgICAgICBmdW5jdGlvbiBnZXRUaW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0aW1lVG9TdHJpbmcodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhcnRPZkV4ZWN1dGlvbiA9IGdldFRpbWUoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFjdHVhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNFeGVjdXRlVGltZUxlc3NUaGFuTGltaXQgZmFpbHMgd2hlbiBnaXZlbiBjb2RlIHRocm93cyBhbiBleGNlcHRpb246IFwiJyArIGV4ICsgJ1wiJywgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4ZWN1dGluZ1RpbWUgPSBnZXRUaW1lKCkgLSBzdGFydE9mRXhlY3V0aW9uO1xuICAgICAgICBpZiAoZXhlY3V0aW5nVGltZSA+IHRpbWVMaW1pdCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNFeGVjdXRlVGltZUxlc3NUaGFuTGltaXQgZmFpbHMgd2hlbiBleGVjdXRpb24gdGltZSBvZiBnaXZlbiBjb2RlICgnICsgdGltZVRvU3RyaW5nKGV4ZWN1dGluZ1RpbWUpICsgJyBtcykgJyArXG4gICAgICAgICAgICAgICAgJ2V4Y2VlZCB0aGUgZ2l2ZW4gbGltaXQoJyArIHRpbWVUb1N0cmluZyh0aW1lTGltaXQpICsgJyBtcyknLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmYWlsKG1lc3NhZ2UgPSAnJykge1xuICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdmYWlsJywgbWVzc2FnZSk7XG4gICAgfVxuICAgIGdldEVycm9yKHJlc3VsdE1lc3NhZ2UsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihyZXN1bHRNZXNzYWdlICsgJy4gJyArIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IocmVzdWx0TWVzc2FnZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROYW1lT2ZDbGFzcyhpbnB1dENsYXNzKSB7XG4gICAgICAgIC8vIHNlZTogaHR0cHM6Ly93d3cuc3RldmVmZW50b24uY28udWsvQ29udGVudC9CbG9nL0RhdGUvMjAxMzA0L0Jsb2cvT2J0YWluaW5nLUEtQ2xhc3MtTmFtZS1BdC1SdW50aW1lLUluLVR5cGVTY3JpcHQvXG4gICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uICguezEsfSlcXCgvO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKGlucHV0Q2xhc3MuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6ICcnO1xuICAgIH1cbiAgICBwcmludFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICdcIm51bGxcIic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YXJpYWJsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiAne29iamVjdDogJyArIFRlc3RDb250ZXh0LmdldE5hbWVPZkNsYXNzKHZhcmlhYmxlKSArICd9JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3snICsgKHR5cGVvZiB2YXJpYWJsZSkgKyAnfSBcIicgKyB2YXJpYWJsZSArICdcIic7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0Q29udGV4dCA9IFRlc3RDb250ZXh0O1xuY2xhc3MgVGVzdENsYXNzIGV4dGVuZHMgVGVzdENvbnRleHQge1xuICAgIHBhcmFtZXRlcml6ZVVuaXRUZXN0KG1ldGhvZCwgcGFyYW1ldGVyc0FycmF5KSB7XG4gICAgICAgIG1ldGhvZC5wYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0FycmF5O1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdENsYXNzID0gVGVzdENsYXNzO1xuY2xhc3MgRmFrZUZhY3Rvcnkge1xuICAgIHN0YXRpYyBnZXRGYWtlKG9iaiwgLi4uaW1wbGVtZW50YXRpb25zKSB7XG4gICAgICAgIHZhciBmYWtlVHlwZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUZha2VUeXBlKGZha2VUeXBlLCBvYmopO1xuICAgICAgICB2YXIgZmFrZSA9IG5ldyBmYWtlVHlwZSgpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0QWxsUHJvcGVydHlOYW1lcyhvYmopO1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGZha2VbcHJvcGVydHlOYW1lc1trXV0gPSBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKCdEZWZhdWx0IGZha2UgY2FsbGVkLicpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBtZW1iZXJOYW1lSW5kZXggPSAwO1xuICAgICAgICB2YXIgbWVtYmVyVmFsdWVJbmRleCA9IDE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1wbGVtZW50YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW1wbCA9IGltcGxlbWVudGF0aW9uc1tpXTtcbiAgICAgICAgICAgIGZha2VbaW1wbFttZW1iZXJOYW1lSW5kZXhdXSA9IGltcGxbbWVtYmVyVmFsdWVJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZha2U7XG4gICAgfVxuICAgIHN0YXRpYyBwb3B1bGF0ZUZha2VUeXBlKGZha2UsIHRvQ29weSkge1xuICAgICAgICBsZXQgcHJvcGVydGllcyA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0QWxsUHJvcGVydHlOYW1lcyh0b0NvcHkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICBmYWtlW3Byb3BlcnR5XSA9IHRvQ29weVtwcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGZha2U7XG4gICAgICAgIH07XG4gICAgICAgIF9fLnByb3RvdHlwZSA9IHRvQ29weS5wcm90b3R5cGU7XG4gICAgICAgIGZha2UucHJvdG90eXBlID0gbmV3IF9fKCk7XG4gICAgfVxufVxuZXhwb3J0cy5GYWtlRmFjdG9yeSA9IEZha2VGYWN0b3J5O1xuY2xhc3MgVGVzdERlZmluaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRlc3RDbGFzcywgbmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3REZWZpbml0aW9uID0gVGVzdERlZmluaXRpb247XG5jbGFzcyBUZXN0RGVzY3JpcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRlc3ROYW1lLCBmdW5jTmFtZSwgcGFyYW1ldGVyU2V0TnVtYmVyLCBtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudGVzdE5hbWUgPSB0ZXN0TmFtZTtcbiAgICAgICAgdGhpcy5mdW5jTmFtZSA9IGZ1bmNOYW1lO1xuICAgICAgICB0aGlzLnBhcmFtZXRlclNldE51bWJlciA9IHBhcmFtZXRlclNldE51bWJlcjtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3REZXNjcmlwdGlvbiA9IFRlc3REZXNjcmlwdGlvbjtcbmNsYXNzIEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIge1xuICAgIHN0YXRpYyB3YWxrSW1wbChvYmosIHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3duUHJvcGVydGllc09mT2JqID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgICAgICAgb3duUHJvcGVydGllc09mT2JqLmZvckVhY2gobWVtID0+IHJlc3VsdHMuYWRkKG1lbSkpO1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICAgICAgaWYgKHByb3RvdHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90b3R5cGUpO1xuICAgICAgICBwcm9wTmFtZXMuZm9yRWFjaChtZW0gPT4gcmVzdWx0cy5hZGQobWVtKSk7XG4gICAgICAgIHRoaXMud2Fsa0ltcGwob2JqLnByb3RvdHlwZSwgcmVzdWx0cyk7XG4gICAgICAgIHRoaXMud2Fsa0ltcGwocHJvdG90eXBlLCByZXN1bHRzKTtcbiAgICB9XG4gICAgc3RhdGljIHdhbGsob2JqKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMud2Fsa0ltcGwob2JqLCByZXN1bHRzKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocmVzdWx0cyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRGdW5jdGlvbk5hbWVzKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsayh0eXBlKVxuICAgICAgICAgICAgLmZpbHRlcihtZW0gPT4ge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHR5cGVbbWVtXTtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJlxuICAgICAgICAgICAgICAgIChtZXRob2QgIT09IHR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLnByb3RvdHlwZSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRQcm90b3R5cGVPZih0eXBlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QWxsUHJvcGVydHlOYW1lcyh0eXBlKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gdGhpcy53YWxrKHR5cGUpO1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uUHJvcHMgPSB0aGlzLndhbGsoRnVuY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMuZmlsdGVyKG1lbSA9PiAhZnVuY3Rpb25Qcm9wcy5zb21lKGZ1bmNQcm9wID0+IGZ1bmNQcm9wID09PSBtZW0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydGllcy5maWx0ZXIobWVtID0+IHtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSB0eXBlW21lbV07XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kICE9PSB0eXBlICYmXG4gICAgICAgICAgICAgICAgbWV0aG9kLnByb3RvdHlwZSAhPT1cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UHJvdG90eXBlT2YodHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlciA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10c1VuaXQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzLXVuaXQvZGlzdC9zcmMvdHNVbml0LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1dGlsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1dpbiA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wbGF0Zm9ybS50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcbmltcG9ydCBpcCBmcm9tICcuLi8nO1xuaW1wb3J0ICogYXMgbmFtZWRJcCBmcm9tICcuLi8nO1xuXG5leHBvcnQgY2xhc3MgRXhwb3J0U3BlYyBleHRlbmRzIHRzVW5pdC5UZXN0Q2xhc3Mge1xuICB0ZXN0RXhwb3J0KCkge1xuICAgIHRoaXMuaXNUcnVlKHR5cGVvZiBpcC5wb3NpeC5zZXAgPT09ICdzdHJpbmcnLCAnZGVmYXVsdCBleHBvcnQgcG9zaXggaXMgZGVmaW5lZCcpO1xuICAgIHRoaXMuaXNUcnVlKHR5cGVvZiBpcC53aW4zMi5zZXAgPT09ICdzdHJpbmcnLCAnZGVmYXVsdCBleHBvcnQgd2luMzIgaXMgZGVmaW5lZCcpO1xuICAgIHRoaXMuaXNUcnVlKHR5cGVvZiBpcC5zZXAgPT09ICdzdHJpbmcnLCAnZGVmYXVsdCBleHBvcnQgcnVudGltZSBpcyBkZWZpbmVkJyk7XG4gICAgdGhpcy5pc1RydWUodHlwZW9mIG5hbWVkSXAucG9zaXguc2VwID09PSAnc3RyaW5nJywgJ2RlZmF1bHQgZXhwb3J0IHBvc2l4IGlzIGRlZmluZWQnKTtcbiAgICB0aGlzLmlzVHJ1ZSh0eXBlb2YgbmFtZWRJcC53aW4zMi5zZXAgPT09ICdzdHJpbmcnLCAnZGVmYXVsdCBleHBvcnQgd2luMzIgaXMgZGVmaW5lZCcpO1xuICAgIHRoaXMuaXNUcnVlKHR5cGVvZiBuYW1lZElwLnNlcCA9PT0gJ3N0cmluZycsICdkZWZhdWx0IGV4cG9ydCBydW50aW1lIGlzIGRlZmluZWQnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9FeHBvcnQuc3BlYy50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcbmltcG9ydCAqIGFzIGlzb21vcnBoaWNQYXRoIGZyb20gJy4uLyc7XG5cbmV4cG9ydCBjbGFzcyBQYXRoU3BlYyBleHRlbmRzIHRzVW5pdC5UZXN0Q2xhc3Mge1xuICB0ZXN0RGVmYXVsdEV4cG9ydCgpIHtcbiAgICBkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4uL2xpYi9wYXRoJyldO1xuICAgIChwcm9jZXNzIGFzIGFueSkuX19kZWZpbmVHZXR0ZXJfXygncGxhdGZvcm0nLCAoKSA9PiAnd2luMzInKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXG4gICAgbGV0IHBhdGggPSByZXF1aXJlKCcuLi9saWIvcGF0aCcpLmRlZmF1bHQ7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ1xcXFwnLCBwYXRoLnNlcCwgJ2RlZmF1bHQgc2VwZXJhdG9yIHNob3VsZCBiZSB3aW4zMiBcIlxcXFxcIiBhZnRlciBpbiB3aW5kb3dzIGVudmlyb25tZW50Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJzsnLCBwYXRoLmRlbGltaXRlciwgJ2RlZmF1bHQgZGVsaW1pdGVyIHNob3VsZCBiZSB3aW4zMiBcIjtcIiBhZnRlciBpbiB3aW5kb3dzIGVudmlyb25tZW50Jyk7XG4gICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuLi9saWIvcGF0aCcpXTtcbiAgICAocHJvY2VzcyBhcyBhbnkpLl9fZGVmaW5lR2V0dGVyX18oJ3BsYXRmb3JtJywgKCkgPT4gJ2RhcndpbicpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcbiAgICBwYXRoID0gcmVxdWlyZSgnLi4vbGliL3BhdGgnKS5kZWZhdWx0O1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvJywgcGF0aC5zZXAsICdkZWZhdWx0IHNlcGVyYXRvciBzaG91bGQgYmUgcG9zaXggXCIvXCIgYWZ0ZXIgaW4gbWFjIGVudmlyb25tZW50Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJzonLCBwYXRoLmRlbGltaXRlciwgJ2RlZmF1bHQgZGVsaW1pdGVyIHNob3VsZCBiZSBwb3NpeCBcIi9cIiBhZnRlciBpbiBtYWMgZW52aXJvbm1lbnQnKTtcbiAgfVxuXG4gIHRlc3RXaW4zMkJhc2VuYW1lKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ215ZmlsZS5odG1sJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmJhc2VuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sJyksXG4gICAgICAnd2luMzIgYmFzZW5hbWUgc2hvdWxkIHBhcnNlIGZpbGUgbmFtZSBmcm9tIHdpbmRvd3MgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICdteWZpbGUuaHRtbCcsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5iYXNlbmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcbiAgICAgICd3aW4zMiBiYXNlbmFtZSBzaG91bGQgcGFyc2UgZmlsZSBuYW1lIGZyb20gcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgfVxuICB0ZXN0UG9zaXhCYXNlbmFtZSgpIHtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICdteWZpbGUuaHRtbCcsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5iYXNlbmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxuICAgICAgJ3Bvc2l4IGJhc2VuYW1lIHNob3VsZCBub3QgcGFyc2Ugd2luZG93cyBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ215ZmlsZS5odG1sJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmJhc2VuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgJ3Bvc2l4IGJhc2VuYW1lIHNob3VsZCBwYXJzZSBmaWxlIG5hbWUgZnJvbSBwb3NpeCBwYXRoJyxcbiAgICApO1xuICB9XG4gIHRlc3RXaW4zMlNlcCgpIHtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnXFxcXCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLnNlcCwgJ3dpbjMyIHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiXFxcXFwiIHNlcCcpO1xuICB9XG4gIHRlc3RQb3NpeFNlcCgpIHtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIGlzb21vcnBoaWNQYXRoLnBvc2l4LnNlcCwgJ3Bvc2l4IHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiL1wiIHNlcCcpO1xuICB9XG4gIHRlc3RXaW4zMkRlbGltaXRlcigpIHtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnOycsIGlzb21vcnBoaWNQYXRoLndpbjMyLmRlbGltaXRlciwgJ3dpbjMyIHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiO1wiIGRlbGltaXRlcicpO1xuICB9XG4gIHRlc3RQb3NpeERlbGltaXRlcigpIHtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnOicsIGlzb21vcnBoaWNQYXRoLnBvc2l4LmRlbGltaXRlciwgJ3Bvc2l4IHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiO1wiIGRlbGltaXRlcicpO1xuICB9XG4gIHRlc3RXaW4zMkRpcm5hbWUoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnQzpcXFxcdGVtcCcsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5kaXJuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sJyksXG4gICAgICAnd2luMzIgZGlybmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGRpcmVjdG9yeSBwYXRoIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy90ZW1wJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAnd2luMzIgZGlybmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGRpcmVjdG9yeSBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgfVxuICB0ZXN0UG9zaXhEaXJuYW1lKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ0M6XFxcXHRlbXAnLFxuICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAncG9zaXggYmFzZW5hbWUgc2hvdWxkIG5vdCBwYXJzZSB3aW5kb3dzIHBhdGgnLFxuICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy90ZW1wJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAncG9zaXggZGlybmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGRpcmVjdG9yeSBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgfVxuICB0ZXN0V2luMzJFeHRuYW1lKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy5odG1sJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBleHRlbnNpb24gZnJvbSB3aW5kb3dzIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnLmh0bWwnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcbiAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy5qcycsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5qcycpLFxuICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIGV4dGVuc2lvbiBmcm9tIHdpbmRvd3MgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcuanMnLCBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5qcycpLFxuICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnLmpzJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwuanMnKSxcbiAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBwcmUtZml4ZWQgZXh0ZW5zaW9uIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy5qcycsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5odG1sLmpzJyksXG4gICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcHJlLWZpeGVkIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICk7XG4gIH1cbiAgdGVzdFBvc2l4RXh0bmFtZSgpIHtcblxuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy5odG1sJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAncG9zaXggZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcuanMnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguZXh0bmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwuanMnKSxcbiAgICAgICdwb3NpeCBleHRuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy5qcycsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5odG1sLmpzJyksXG4gICAgICAncG9zaXggZXh0bmFtZSBzaG91bGQgcGFyc2UgcHJlLWZpeGVkIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICk7XG4gIH1cbiAgdGVzdFdpbjMyRm9ybWF0KCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvaG9tZS91c2VyL2RpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICBkaXI6ICcvaG9tZS91c2VyL2RpcicsXG4gICAgICBiYXNlOiAnZmlsZS50eHQnLFxuICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICd3aW4zMiBmb3JtYXQgc2hvdWxkIG5vdCBmb3JtYXQgcG9zaXggUGFyc2VkUGF0aCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICByb290OiAnQzpcXFxcJyxcbiAgICAgIGRpcjogJ3BhdGhcXFxcZGlyJyxcbiAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3dpbjMyIGZvcm1hdCBzaG91bGQgZm9ybWF0IHdpbmRvd3MgUGFyc2VkUGF0aCB3aXRoIHJvb3QgYW5kIGRpcicpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICBkaXI6ICdDOlxcXFxwYXRoXFxcXGRpcicsXG4gICAgICBiYXNlOiAnZmlsZS50eHQnLFxuICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICd3aW4zMiBmb3JtYXQgc2hvdWxkIGZvcm1hdCB3aW5kb3dzIFBhcnNlZFBhdGggd2l0aCBkaXInKTtcbiAgfVxuICB0ZXN0UG9zaXhGb3JtYXQoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ0M6XFxcXHBhdGhcXFxcZGlyL2ZpbGUudHh0JywgaXNvbW9ycGhpY1BhdGgucG9zaXguZm9ybWF0KHtcbiAgICAgIGRpcjogJ0M6XFxcXHBhdGhcXFxcZGlyJyxcbiAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3Bvc2l4IGZvcm1hdCBzaG91bGQgbm90IGZvcm1hdCB3aW5kb3dzIFBhcnNlZFBhdGgnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC5wb3NpeC5mb3JtYXQoe1xuICAgICAgcm9vdDogJy9pZ25vcmVkJyxcbiAgICAgIGRpcjogJy9ob21lL3VzZXIvZGlyJyxcbiAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3Bvc2l4IGZvcm1hdCBzaG91bGQgZm9ybWF0IHBvc2l4IFBhcnNlZFBhdGggd2l0aCByb290IGFuZCBkaXInKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC5wb3NpeC5mb3JtYXQoe1xuICAgICAgZGlyOiAnL2hvbWUvdXNlci9kaXInLFxuICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcbiAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAncG9zaXggZm9ybWF0IHNob3VsZCBmb3JtYXQgcG9zaXggUGFyc2VkUGF0aCB3aXRoIGRpcicpO1xuICB9XG4gIHRlc3RXaW4zMkFic29sdXRlKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgdHJ1ZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJy8vc2VydmVyJyksXG4gICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHBvc2l4IGFic29sdXRlIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICB0cnVlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnXFxcXFxcXFxzZXJ2ZXInKSxcbiAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3Igd2luZG93cyBhYnNvbHV0ZSBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgdHJ1ZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJ0M6L2Zvby8uLicpLFxuICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICB0cnVlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnQzpcXFxcZm9vXFxcXC4uJyksXG4gICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgIGZhbHNlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnYmFyXFxcXGJheicpLFxuICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd2luZG93cyByZWxhdGl2ZSBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgZmFsc2UsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCdiYXIvYmF6JyksXG4gICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHJlbGF0aXZlIHBvc2l4IHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICBmYWxzZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJy4nKSxcbiAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHJlbGF0aXZlIHBvc2l4IG9wZXJhdG9yJyxcbiAgICApO1xuICB9XG4gIHRlc3RQb3NpeEFic29sdXRlKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgdHJ1ZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJy8vc2VydmVyJyksXG4gICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHBvc2l4IGFic29sdXRlIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICB0cnVlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnL2Jhei8uLicpLFxuICAgICAgJ3Bvc2l4IGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciBwb3NpeCBhYnNvbHV0ZSBwYXRoIHdpdGggcmVsYXRpdmUgb3BlcmF0b3Igc3VmZml4JyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgZmFsc2UsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdcXFxcXFxcXHNlcnZlcicpLFxuICAgICAgJ3Bvc2l4IGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd2luZG93cyBhYnNvbHV0ZSBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgZmFsc2UsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdDOi9mb28vLi4nKSxcbiAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgIGZhbHNlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnQzpcXFxcZm9vXFxcXC4uJyksXG4gICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICBmYWxzZSxcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ2JhclxcXFxiYXonKSxcbiAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcmVsYXRpdmUgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgIGZhbHNlLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnYmFyL2JheicpLFxuICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciByZWxhdGl2ZSBwb3NpeCBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgZmFsc2UsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCcuJyksXG4gICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHJlbGF0aXZlIHBvc2l4IG9wZXJhdG9yJyxcbiAgICApO1xuICB9XG4gIHRlc3RXaW4zMkpvaW4oKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnQzpcXFxcZm9vXFxcXGJhclxcXFxiYXpcXFxcYXNkZicsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5qb2luKCdDOlxcXFxmb28nLCAnYmFyJywgJ2JhelxcXFxhc2RmJywgJ3F1dXgnLCAnLi4nKSxcbiAgICAgICd3aW4zMiBqb2luIHNob3VsZCByZXR1cm4gam9pbmVkIHdpbmRvd3MgcGF0aCBnaXZlbiB3aW5kb3dzIGZyYWdtZW50cycsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICdcXFxcZm9vXFxcXGJhclxcXFxiYXpcXFxcYXNkZicsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5qb2luKCcvZm9vJywgJ2JhcicsICdiYXovYXNkZicsICdxdXV4JywgJy4uJyksXG4gICAgICAnd2luMzIgam9pbiBzaG91bGQgcmV0dXJuIGpvaW5lZCB3aW5kb3dzIHBhdGggZ2l2ZW4gcG9zaXggZnJhZ21lbnRzJyxcbiAgICApO1xuICB9XG4gIHRlc3RQb3NpeEpvaW4oKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnXFxcXGZvby9iYXIvYmF6XFxcXGFzZGYnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguam9pbignXFxcXGZvbycsICdiYXInLCAnYmF6XFxcXGFzZGYnLCAncXV1eCcsICcuLicpLFxuICAgICAgJ3Bvc2l4IGpvaW4gc2hvdWxkIG5vdCByZXR1cm4gam9pbmVkIHBvc2l4IHBhdGggZ2l2ZW4gd2luZG93cyBmcmFnbWVudHMnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnL2Zvby9iYXIvYmF6L2FzZGYnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguam9pbignL2ZvbycsICdiYXInLCAnYmF6L2FzZGYnLCAncXV1eCcsICcuLicpLFxuICAgICAgJ3Bvc2l4IGpvaW4gc2hvdWxkIHJldHVybiBqb2luZWQgcG9zaXggcGF0aCcsXG4gICAgKTtcbiAgfVxuICB0ZXN0V2luMzJOb3JtYWxpemUoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnQzpcXFxcdGVtcFxcXFxmb29cXFxcYmFyJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLm5vcm1hbGl6ZSgnQzovLy8vdGVtcFxcXFxcXFxcL1xcXFwvXFxcXC9mb28vYmFyJyksXG4gICAgICAnd2luMzIgc2hvdWxkIG5vcm1hbGl6ZSBtaXhlZCBwYXRoIHRvIHdpbmRvd3Mgc2VwZXJhdG9yJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ0M6XFxcXHRlbXBcXFxcZm9vXFxcXCcsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5ub3JtYWxpemUoJ0M6XFxcXHRlbXBcXFxcXFxcXGZvb1xcXFxiYXJcXFxcLi5cXFxcJyksXG4gICAgICAnd2luMzIgc2hvdWxkIG5vcm1hbGl6ZSB3aW5kb3dzIHBhdGggdG8gd2luZG93cyBzZXBlcmF0b3InLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnXFxcXGZvb1xcXFxiYXJcXFxcYmF6XFxcXGFzZGYnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxuICAgICAgJ3dpbmQzMiBzaG91bGQgbm9ybWFsaXplIHBvc2l4IHBhdGggdG8gd2luZG93cyBzZXBlcmF0b3InLFxuICAgICk7XG4gIH1cbiAgdGVzdFBvc2l4Tm9ybWFsaXplKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJ0M6XFxcXHRlbXBcXFxcXFxcXGZvb1xcXFxiYXJcXFxcLi5cXFxcJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4Lm5vcm1hbGl6ZSgnQzpcXFxcdGVtcFxcXFxcXFxcZm9vXFxcXGJhclxcXFwuLlxcXFwnKSxcbiAgICAgICdwb3NpeCBzaG91bGQgbm90IG5vcm1hbGl6ZSB3aW5kb3dzIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnL2Zvby9iYXIvYmF6L2FzZGYnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxuICAgICAgJ3Bvc2l4IHNob3VsZCBub3JtYWxpemUgcG9zaXggcGF0aCB0byBwb3NpeCBzZXBlcmF0b3InLFxuICAgICk7XG4gIH1cbiAgdGVzdFdpbjMyUGFyc2UoKSB7XG4gICAgY29uc3QgcGFyc2VkUG9zaXggPSBpc29tb3JwaGljUGF0aC53aW4zMi5wYXJzZSgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhcnNlZFBvc2l4LnJvb3QsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCByb290Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJy9ob21lL3VzZXIvZGlyJywgcGFyc2VkUG9zaXguZGlyLCAnd2luMzIgc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggZGlyJyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUudHh0JywgcGFyc2VkUG9zaXguYmFzZSwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGJhc2UnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFBvc2l4LmV4dCwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGV4dCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlJywgcGFyc2VkUG9zaXgubmFtZSwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIG5hbWUnKTtcblxuICAgIGNvbnN0IHBhcnNlZFdpbmRvd3MgPSBpc29tb3JwaGljUGF0aC53aW4zMi5wYXJzZSgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZS50eHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxcJywgcGFyc2VkV2luZG93cy5yb290LCAnd2luMzIgc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCByb290Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ0M6XFxcXHBhdGhcXFxcZGlyJywgcGFyc2VkV2luZG93cy5kaXIsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGRpcicpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlLnR4dCcsIHBhcnNlZFdpbmRvd3MuYmFzZSwgJ3dpbjMyIHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggYmFzZScpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcudHh0JywgcGFyc2VkV2luZG93cy5leHQsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGV4dCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlJywgcGFyc2VkV2luZG93cy5uYW1lLCAnd2luMzIgc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBuYW1lJyk7XG4gIH1cbiAgdGVzdFBvc2l4UGFyc2UoKSB7XG4gICAgY29uc3QgcGFyc2VkUG9zaXggPSBpc29tb3JwaGljUGF0aC5wb3NpeC5wYXJzZSgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhcnNlZFBvc2l4LnJvb3QsICdwb3NpeCBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCByb290Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJy9ob21lL3VzZXIvZGlyJywgcGFyc2VkUG9zaXguZGlyLCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggZGlyJyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUudHh0JywgcGFyc2VkUG9zaXguYmFzZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGJhc2UnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFBvc2l4LmV4dCwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGV4dCcpO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlJywgcGFyc2VkUG9zaXgubmFtZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIG5hbWUnKTtcblxuICAgIGNvbnN0IHBhcnNlZFdpbmRvd3MgPSBpc29tb3JwaGljUGF0aC5wb3NpeC5wYXJzZSgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZS50eHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnJywgcGFyc2VkV2luZG93cy5yb290LCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCByb290Jyk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoJycsIHBhcnNlZFdpbmRvd3MuZGlyLCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBkaXInKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZS50eHQnLCBwYXJzZWRXaW5kb3dzLmJhc2UsICdwb3NpeCBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGJhc2UnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFdpbmRvd3MuZXh0LCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBleHQnKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZScsIHBhcnNlZFdpbmRvd3MubmFtZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggbmFtZScpO1xuICB9XG4gIHRlc3RXaW4zMlJlc29sdmUoKSB7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnQzpcXFxcZm9vXFxcXGJhclxcXFxiYXonLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIucmVzb2x2ZSgnQzpcXFxcZm9vXFxcXGJhcicsICcuXFxcXGJheicpLFxuICAgICAgJ3dpbjMyIHNob3VsZCByZXNvbHZlIHdpbmRvd3MgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICdcXFxcZm9vXFxcXGJhclxcXFxiYXonLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIucmVzb2x2ZSgnL2Zvby9iYXInLCAnLi9iYXonKSxcbiAgICAgICd3aW4zMiBzaG91bGQgcmVzb2x2ZSBwb3NpeCBwYXRoIHRvIHdpbmRvd3MgZm9ybWF0JyxcbiAgICApO1xuICB9XG4gIHRlc3RQb3NpeFJlc29sdmUoKSB7XG4gICAgdGhpcy5hcmVOb3RJZGVudGljYWwoXG4gICAgICAnQzpcXFxcZm9vXFxcXGJhci8uXFxcXGJheicsXG4gICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5yZXNvbHZlKCdDOlxcXFxmb29cXFxcYmFyJywgJy5cXFxcYmF6JyksXG4gICAgICAncG9zaXggc2hvdWxkIG5vdCByZXNvbHZlIHdpbmRvd3MgcGF0aCcsXG4gICAgKTtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcvZm9vL2Jhci9iYXonLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgucmVzb2x2ZSgnL2Zvby9iYXInLCAnLi9iYXonKSxcbiAgICAgICdwb3NpeCBzaG91bGQgcmVzb2x2ZSBwb3NpeCBwYXRoJyxcbiAgICApO1xuICB9XG4gIHRlc3RXaW4zMlJlbGF0aXZlKCkge1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy4uXFxcXC4uXFxcXGltcGxcXFxcYmJiJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLnJlbGF0aXZlKCdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJywgJ0M6XFxcXG9yYW5kZWFcXFxcaW1wbFxcXFxiYmInKSxcbiAgICAgICd3aW4zMiBzaG91bGQgcmVsYXRpdmUgd2luZG93cyBwYXRoJyxcbiAgICApO1xuICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgJy4uXFxcXC4uXFxcXGltcGxcXFxcYmJiJyxcbiAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLnJlbGF0aXZlKCcvZGF0YS9vcmFuZGVhL3Rlc3QvYWFhJywgJy9kYXRhL29yYW5kZWEvaW1wbC9iYmInKSxcbiAgICAgICd3aW4zMiBzaG91bGQgcmVsYXRpdmUgcG9zaXggcGF0aCB0byB3aW5kb3dzIGZvcm1hdCcsXG4gICAgKTtcbiAgfVxuICB0ZXN0UG9zaXhSZWxhdGl2ZSgpIHtcbiAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICcuLi8uXFxcXGJheicsIGlzb21vcnBoaWNQYXRoLnBvc2l4LnJlbGF0aXZlKCdDOlxcXFxmb29cXFxcYmFyJywgJy5cXFxcYmF6JyksXG4gICAgICAncG9zaXggc2hvdWxkIG5vdCByZWxhdGl2ZSB3aW5kb3dzIHBhdGgnLFxuICAgICk7XG4gICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAnLi4vLi4vaW1wbC9iYmInLFxuICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgucmVsYXRpdmUoJy9kYXRhL29yYW5kZWEvdGVzdC9hYWEnLCAnL2RhdGEvb3JhbmRlYS9pbXBsL2JiYicpLFxuICAgICAgJ3Bvc2l4IHNob3VsZCByZWxhdGl2ZSBwb3NpeCBwYXRoJyxcbiAgICApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvUGF0aC5Ob2RlLnNwZWMudHMiLCJpbXBvcnQgKiBhcyB0c1VuaXQgZnJvbSAndHMtdW5pdCc7XG5pbXBvcnQgeyBpc1dpbiwgaXNNYWMsIGlzTm9kZSwgaXNCcm93c2VyIH0gZnJvbSAnLi4vbGliL3BsYXRmb3JtJztcblxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtU3BlYyBleHRlbmRzIHRzVW5pdC5UZXN0Q2xhc3Mge1xuICB0ZXN0T3MoKSB7XG4gICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICd3aW4zMicpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcbiAgICB0aGlzLmlzVHJ1ZShpc1dpbigpLCAnaXNXaW4gc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIHBsYXRmb3JtIGlkOiBcIndpbjMyXCInKTtcbiAgICB0aGlzLmlzRmFsc2UoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcGxhdGZvcm0gaWQ6IFwid2luMzJcIicpO1xuICAgIChwcm9jZXNzIGFzIGFueSkuX19kZWZpbmVHZXR0ZXJfXygncGxhdGZvcm0nLCAoKSA9PiAnZGFyd2luJyk7IC8vIHN0dWIgcGxhdGZvcm0gY2FsbFxuICAgIHRoaXMuaXNGYWxzZShpc1dpbigpLCAnaXNXaW4gc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgbWFjIHBsYXRmb3JtIGlkOiBcImRhcndpblwiJyk7XG4gICAgdGhpcy5pc1RydWUoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgbWFjIHBsYXRmb3JtIGlkOiBcImRhcndpblwiJyk7XG4gIH1cbiAgdGVzdEVudigpIHtcbiAgICB0aGlzLmlzVHJ1ZShpc05vZGUoKSwgJ2lzTm9kZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIG5vZGUgc3BlYycpO1xuICAgIHRoaXMuaXNGYWxzZShpc0Jyb3dzZXIoKSwgJ2lzQnJvd3NlciBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciBicm93c2VyIHNwZWMnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9QbGF0Zm9ybS5Ob2RlLnNwZWMudHMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcclxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XHJcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxyXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcclxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcclxuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXHJcbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxyXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1JcclxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxyXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcclxuXHJcblxyXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcclxuLy8gbXVzdCBiZSBubyBzbGFzaGVzIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XHJcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxyXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xyXG4gIHZhciByZXMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcCA9IHBhcnRzW2ldO1xyXG5cclxuICAgIC8vIGlnbm9yZSBlbXB0eSBwYXJ0c1xyXG4gICAgaWYgKCFwIHx8IHAgPT09ICcuJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgaWYgKHAgPT09ICcuLicpIHtcclxuICAgICAgaWYgKHJlcy5sZW5ndGggJiYgcmVzW3Jlcy5sZW5ndGggLSAxXSAhPT0gJy4uJykge1xyXG4gICAgICAgIHJlcy5wb3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xyXG4gICAgICAgIHJlcy5wdXNoKCcuLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMucHVzaChwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8vIHJldHVybnMgYW4gYXJyYXkgd2l0aCBlbXB0eSBlbGVtZW50cyByZW1vdmVkIGZyb20gZWl0aGVyIGVuZCBvZiB0aGUgaW5wdXRcclxuLy8gYXJyYXkgb3IgdGhlIG9yaWdpbmFsIGFycmF5IGlmIG5vIGVsZW1lbnRzIG5lZWQgdG8gYmUgcmVtb3ZlZFxyXG5mdW5jdGlvbiB0cmltQXJyYXkoYXJyKSB7XHJcbiAgdmFyIGxhc3RJbmRleCA9IGFyci5sZW5ndGggLSAxO1xyXG4gIHZhciBzdGFydCA9IDA7XHJcbiAgZm9yICg7IHN0YXJ0IDw9IGxhc3RJbmRleDsgc3RhcnQrKykge1xyXG4gICAgaWYgKGFycltzdGFydF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVuZCA9IGxhc3RJbmRleDtcclxuICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XHJcbiAgICBpZiAoYXJyW2VuZF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gbGFzdEluZGV4KVxyXG4gICAgcmV0dXJuIGFycjtcclxuICBpZiAoc3RhcnQgPiBlbmQpXHJcbiAgICByZXR1cm4gW107XHJcbiAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kICsgMSk7XHJcbn1cclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IGEgd2luZG93cyBwYXRoIGludG8gdGhyZWUgcGFydHM6IFsqLCBkZXZpY2UsIHNsYXNoLFxyXG4vLyB0YWlsXSB3aW5kb3dzLW9ubHlcclxudmFyIHNwbGl0RGV2aWNlUmUgPVxyXG4gICAgL14oW2EtekEtWl06fFtcXFxcXFwvXXsyfVteXFxcXFxcL10rW1xcXFxcXC9dK1teXFxcXFxcL10rKT8oW1xcXFxcXC9dKT8oW1xcc1xcU10qPykkLztcclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IHRoZSB0YWlsIHBhcnQgb2YgdGhlIGFib3ZlIGludG8gWyosIGRpciwgYmFzZW5hbWUsIGV4dF1cclxudmFyIHNwbGl0VGFpbFJlID1cclxuICAgIC9eKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKSg/OltcXFxcXFwvXSopJC87XHJcblxyXG52YXIgd2luMzIgPSB7fTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XVxyXG5mdW5jdGlvbiB3aW4zMlNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIC8vIFNlcGFyYXRlIGRldmljZStzbGFzaCBmcm9tIHRhaWxcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKGZpbGVuYW1lKSxcclxuICAgICAgZGV2aWNlID0gKHJlc3VsdFsxXSB8fCAnJykgKyAocmVzdWx0WzJdIHx8ICcnKSxcclxuICAgICAgdGFpbCA9IHJlc3VsdFszXSB8fCAnJztcclxuICAvLyBTcGxpdCB0aGUgdGFpbCBpbnRvIGRpciwgYmFzZW5hbWUgYW5kIGV4dGVuc2lvblxyXG4gIHZhciByZXN1bHQyID0gc3BsaXRUYWlsUmUuZXhlYyh0YWlsKSxcclxuICAgICAgZGlyID0gcmVzdWx0MlsxXSxcclxuICAgICAgYmFzZW5hbWUgPSByZXN1bHQyWzJdLFxyXG4gICAgICBleHQgPSByZXN1bHQyWzNdO1xyXG4gIHJldHVybiBbZGV2aWNlLCBkaXIsIGJhc2VuYW1lLCBleHRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW4zMlN0YXRQYXRoKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKHBhdGgpLFxyXG4gICAgICBkZXZpY2UgPSByZXN1bHRbMV0gfHwgJycsXHJcbiAgICAgIGlzVW5jID0gISFkZXZpY2UgJiYgZGV2aWNlWzFdICE9PSAnOic7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRldmljZTogZGV2aWNlLFxyXG4gICAgaXNVbmM6IGlzVW5jLFxyXG4gICAgaXNBYnNvbHV0ZTogaXNVbmMgfHwgISFyZXN1bHRbMl0sIC8vIFVOQyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlXHJcbiAgICB0YWlsOiByZXN1bHRbM11cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVVTkNSb290KGRldmljZSkge1xyXG4gIHJldHVybiAnXFxcXFxcXFwnICsgZGV2aWNlLnJlcGxhY2UoL15bXFxcXFxcL10rLywgJycpLnJlcGxhY2UoL1tcXFxcXFwvXSsvZywgJ1xcXFwnKTtcclxufVxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG53aW4zMi5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkRGV2aWNlID0gJycsXHJcbiAgICAgIHJlc29sdmVkVGFpbCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aDtcclxuICAgIGlmIChpID49IDApIHtcclxuICAgICAgcGF0aCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHBhdGggPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gV2luZG93cyBoYXMgdGhlIGNvbmNlcHQgb2YgZHJpdmUtc3BlY2lmaWMgY3VycmVudCB3b3JraW5nXHJcbiAgICAgIC8vIGRpcmVjdG9yaWVzLiBJZiB3ZSd2ZSByZXNvbHZlZCBhIGRyaXZlIGxldHRlciBidXQgbm90IHlldCBhblxyXG4gICAgICAvLyBhYnNvbHV0ZSBwYXRoLCBnZXQgY3dkIGZvciB0aGF0IGRyaXZlLiBXZSdyZSBzdXJlIHRoZSBkZXZpY2UgaXMgbm90XHJcbiAgICAgIC8vIGFuIHVuYyBwYXRoIGF0IHRoaXMgcG9pbnRzLCBiZWNhdXNlIHVuYyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlLlxyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5lbnZbJz0nICsgcmVzb2x2ZWREZXZpY2VdO1xyXG4gICAgICAvLyBWZXJpZnkgdGhhdCBhIGRyaXZlLWxvY2FsIGN3ZCB3YXMgZm91bmQgYW5kIHRoYXQgaXQgYWN0dWFsbHkgcG9pbnRzXHJcbiAgICAgIC8vIHRvIG91ciBkcml2ZS4gSWYgbm90LCBkZWZhdWx0IHRvIHRoZSBkcml2ZSdzIHJvb3QuXHJcbiAgICAgIGlmICghcGF0aCB8fCBwYXRoLnN1YnN0cigwLCAzKS50b0xvd2VyQ2FzZSgpICE9PVxyXG4gICAgICAgICAgcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSArICdcXFxcJykge1xyXG4gICAgICAgIHBhdGggPSByZXNvbHZlZERldmljZSArICdcXFxcJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXN1bHQgPSB3aW4zMlN0YXRQYXRoKHBhdGgpLFxyXG4gICAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgICAgaXNBYnNvbHV0ZSA9IHJlc3VsdC5pc0Fic29sdXRlLFxyXG4gICAgICAgIHRhaWwgPSByZXN1bHQudGFpbDtcclxuXHJcbiAgICBpZiAoZGV2aWNlICYmXHJcbiAgICAgICAgcmVzb2x2ZWREZXZpY2UgJiZcclxuICAgICAgICBkZXZpY2UudG9Mb3dlckNhc2UoKSAhPT0gcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAvLyBUaGlzIHBhdGggcG9pbnRzIHRvIGFub3RoZXIgZGV2aWNlIHNvIGl0IGlzIG5vdCBhcHBsaWNhYmxlXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzb2x2ZWREZXZpY2UpIHtcclxuICAgICAgcmVzb2x2ZWREZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgcmVzb2x2ZWRUYWlsID0gdGFpbCArICdcXFxcJyArIHJlc29sdmVkVGFpbDtcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGlzQWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc29sdmVkRGV2aWNlICYmIHJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgcmVzb2x2ZWREZXZpY2VgIHBvaW50cyB0byBhbiBVTkNcclxuICAvLyByb290LiBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgcmVzb2x2ZWREZXZpY2UgPSBub3JtYWxpemVVTkNSb290KHJlc29sdmVkRGV2aWNlKTtcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLFxyXG4gIC8vIGJ1dCBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKVxyXG4gIC8vIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHJlc29sdmVkVGFpbCA9IG5vcm1hbGl6ZUFycmF5KHJlc29sdmVkVGFpbC5zcGxpdCgvW1xcXFxcXC9dKy8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIHJldHVybiAocmVzb2x2ZWREZXZpY2UgKyAocmVzb2x2ZWRBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHJlc29sdmVkVGFpbCkgfHxcclxuICAgICAgICAgJy4nO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0LmRldmljZSxcclxuICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgdGFpbCA9IHJlc3VsdC50YWlsLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gL1tcXFxcXFwvXSQvLnRlc3QodGFpbCk7XHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgdGFpbCBwYXRoXHJcbiAgdGFpbCA9IG5vcm1hbGl6ZUFycmF5KHRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSwgIWlzQWJzb2x1dGUpLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgaWYgKCF0YWlsICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICB0YWlsID0gJy4nO1xyXG4gIH1cclxuICBpZiAodGFpbCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICB0YWlsICs9ICdcXFxcJztcclxuICB9XHJcblxyXG4gIC8vIENvbnZlcnQgc2xhc2hlcyB0byBiYWNrc2xhc2hlcyB3aGVuIGBkZXZpY2VgIHBvaW50cyB0byBhbiBVTkMgcm9vdC5cclxuICAvLyBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgZGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRldmljZSArIChpc0Fic29sdXRlID8gJ1xcXFwnIDogJycpICsgdGFpbDtcclxufTtcclxuXHJcblxyXG53aW4zMi5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlN0YXRQYXRoKHBhdGgpLmlzQWJzb2x1dGU7XHJcbn07XHJcblxyXG53aW4zMi5qb2luID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHBhdGhzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcoYXJnKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZykge1xyXG4gICAgICBwYXRocy5wdXNoKGFyZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgam9pbmVkID0gcGF0aHMuam9pbignXFxcXCcpO1xyXG5cclxuICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgam9pbmVkIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIHR3byBzbGFzaGVzLCBiZWNhdXNlXHJcbiAgLy8gbm9ybWFsaXplKCkgd2lsbCBtaXN0YWtlIGl0IGZvciBhbiBVTkMgcGF0aCB0aGVuLlxyXG4gIC8vXHJcbiAgLy8gVGhpcyBzdGVwIGlzIHNraXBwZWQgd2hlbiBpdCBpcyB2ZXJ5IGNsZWFyIHRoYXQgdGhlIHVzZXIgYWN0dWFsbHlcclxuICAvLyBpbnRlbmRlZCB0byBwb2ludCBhdCBhbiBVTkMgcGF0aC4gVGhpcyBpcyBhc3N1bWVkIHdoZW4gdGhlIGZpcnN0XHJcbiAgLy8gbm9uLWVtcHR5IHN0cmluZyBhcmd1bWVudHMgc3RhcnRzIHdpdGggZXhhY3RseSB0d28gc2xhc2hlcyBmb2xsb3dlZCBieVxyXG4gIC8vIGF0IGxlYXN0IG9uZSBtb3JlIG5vbi1zbGFzaCBjaGFyYWN0ZXIuXHJcbiAgLy9cclxuICAvLyBOb3RlIHRoYXQgZm9yIG5vcm1hbGl6ZSgpIHRvIHRyZWF0IGEgcGF0aCBhcyBhbiBVTkMgcGF0aCBpdCBuZWVkcyB0b1xyXG4gIC8vIGhhdmUgYXQgbGVhc3QgMiBjb21wb25lbnRzLCBzbyB3ZSBkb24ndCBmaWx0ZXIgZm9yIHRoYXQgaGVyZS5cclxuICAvLyBUaGlzIG1lYW5zIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSBqb2luIHRvIGNvbnN0cnVjdCBVTkMgcGF0aHMgZnJvbVxyXG4gIC8vIGEgc2VydmVyIG5hbWUgYW5kIGEgc2hhcmUgbmFtZTsgZm9yIGV4YW1wbGU6XHJcbiAgLy8gICBwYXRoLmpvaW4oJy8vc2VydmVyJywgJ3NoYXJlJykgLT4gJ1xcXFxcXFxcc2VydmVyXFxcXHNoYXJlXFwnKVxyXG4gIGlmICghL15bXFxcXFxcL117Mn1bXlxcXFxcXC9dLy50ZXN0KHBhdGhzWzBdKSkge1xyXG4gICAgam9pbmVkID0gam9pbmVkLnJlcGxhY2UoL15bXFxcXFxcL117Mix9LywgJ1xcXFwnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aW4zMi5ub3JtYWxpemUoam9pbmVkKTtcclxufTtcclxuXHJcblxyXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxyXG4vLyBpdCB3aWxsIHNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoIGZyb20gJ2Zyb20nIHRvICd0bycsIGZvciBpbnN0YW5jZTpcclxuLy8gZnJvbSA9ICdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJ1xyXG4vLyB0byA9ICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJ1xyXG4vLyBUaGUgb3V0cHV0IG9mIHRoZSBmdW5jdGlvbiBzaG91bGQgYmU6ICcuLlxcXFwuLlxcXFxpbXBsXFxcXGJiYidcclxud2luMzIucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSB3aW4zMi5yZXNvbHZlKGZyb20pO1xyXG4gIHRvID0gd2luMzIucmVzb2x2ZSh0byk7XHJcblxyXG4gIC8vIHdpbmRvd3MgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlXHJcbiAgdmFyIGxvd2VyRnJvbSA9IGZyb20udG9Mb3dlckNhc2UoKTtcclxuICB2YXIgbG93ZXJUbyA9IHRvLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCdcXFxcJykpO1xyXG5cclxuICB2YXIgbG93ZXJGcm9tUGFydHMgPSB0cmltQXJyYXkobG93ZXJGcm9tLnNwbGl0KCdcXFxcJykpO1xyXG4gIHZhciBsb3dlclRvUGFydHMgPSB0cmltQXJyYXkobG93ZXJUby5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGxvd2VyRnJvbVBhcnRzLmxlbmd0aCwgbG93ZXJUb1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobG93ZXJGcm9tUGFydHNbaV0gIT09IGxvd2VyVG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChzYW1lUGFydHNMZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIHRvO1xyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGxvd2VyRnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xyXG4gIH1cclxuXHJcbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJ1xcXFwnKTtcclxufTtcclxuXHJcblxyXG53aW4zMi5fbWFrZUxvbmcgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgLy8gTm90ZTogdGhpcyB3aWxsICpwcm9iYWJseSogdGhyb3cgc29tZXdoZXJlLlxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSlcclxuICAgIHJldHVybiBwYXRoO1xyXG5cclxuICBpZiAoIXBhdGgpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHZhciByZXNvbHZlZFBhdGggPSB3aW4zMi5yZXNvbHZlKHBhdGgpO1xyXG5cclxuICBpZiAoL15bYS16QS1aXVxcOlxcXFwvLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBsb2NhbCBmaWxlc3lzdGVtIHBhdGgsIHdoaWNoIG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxyXG4gICAgLy8gdG8gbG9uZyBVTkMgcGF0aC5cclxuICAgIHJldHVybiAnXFxcXFxcXFw/XFxcXCcgKyByZXNvbHZlZFBhdGg7XHJcbiAgfSBlbHNlIGlmICgvXlxcXFxcXFxcW14/Ll0vLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBuZXR3b3JrIFVOQyBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFxVTkNcXFxcJyArIHJlc29sdmVkUGF0aC5zdWJzdHJpbmcoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG53aW4zMi5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSB3aW4zMlNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxud2luMzIuYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHdpbjMyU3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHdpbjMyU3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIGlmICghZGlyKSB7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9XHJcbiAgaWYgKGRpcltkaXIubGVuZ3RoIC0gMV0gPT09IHdpbjMyLnNlcCkge1xyXG4gICAgcmV0dXJuIGRpciArIGJhc2U7XHJcbiAgfVxyXG4gIHJldHVybiBkaXIgKyB3aW4zMi5zZXAgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICByb290OiBhbGxQYXJ0c1swXSxcclxuICAgIGRpcjogYWxsUGFydHNbMF0gKyBhbGxQYXJ0c1sxXS5zbGljZSgwLCAtMSksXHJcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcclxuICAgIGV4dDogYWxsUGFydHNbM10sXHJcbiAgICBuYW1lOiBhbGxQYXJ0c1syXS5zbGljZSgwLCBhbGxQYXJ0c1syXS5sZW5ndGggLSBhbGxQYXJ0c1szXS5sZW5ndGgpXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG53aW4zMi5zZXAgPSAnXFxcXCc7XHJcbndpbjMyLmRlbGltaXRlciA9ICc7JztcclxuXHJcblxyXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxyXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxyXG52YXIgc3BsaXRQYXRoUmUgPVxyXG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XHJcbnZhciBwb3NpeCA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LnJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcclxuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XHJcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aFswXSA9PT0gJy8nO1xyXG4gIH1cclxuXHJcbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxyXG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XHJcbn07XHJcblxyXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgaXNBYnNvbHV0ZSA9IHBvc2l4LmlzQWJzb2x1dGUocGF0aCksXHJcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBwYXRoICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkocGF0aC5zcGxpdCgnLycpLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcclxuICAgIHBhdGggPSAnLic7XHJcbiAgfVxyXG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcclxuICAgIHBhdGggKz0gJy8nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRoID0gJyc7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBzZWdtZW50ID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHNlZ21lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICBwYXRoICs9IHNlZ21lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0aCArPSAnLycgKyBzZWdtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwb3NpeC5ub3JtYWxpemUocGF0aCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XHJcbiAgZnJvbSA9IHBvc2l4LnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xyXG4gIHRvID0gcG9zaXgucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xyXG5cclxuICB2YXIgZnJvbVBhcnRzID0gdHJpbUFycmF5KGZyb20uc3BsaXQoJy8nKSk7XHJcbiAgdmFyIHRvUGFydHMgPSB0cmltQXJyYXkodG8uc3BsaXQoJy8nKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XHJcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XHJcbn07XHJcblxyXG5cclxucG9zaXguX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiBwYXRoO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmRpcm5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpLFxyXG4gICAgICByb290ID0gcmVzdWx0WzBdLFxyXG4gICAgICBkaXIgPSByZXN1bHRbMV07XHJcblxyXG4gIGlmICghcm9vdCAmJiAhZGlyKSB7XHJcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcclxuICAgIHJldHVybiAnLic7XHJcbiAgfVxyXG5cclxuICBpZiAoZGlyKSB7XHJcbiAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxyXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdCArIGRpcjtcclxufTtcclxuXHJcblxyXG5wb3NpeC5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xyXG4gIHZhciBmID0gcG9zaXhTcGxpdFBhdGgocGF0aClbMl07XHJcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xyXG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XHJcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIGY7XHJcbn07XHJcblxyXG5cclxucG9zaXguZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcG9zaXhTcGxpdFBhdGgocGF0aClbM107XHJcbn07XHJcblxyXG5cclxucG9zaXguZm9ybWF0ID0gZnVuY3Rpb24ocGF0aE9iamVjdCkge1xyXG4gIGlmICghdXRpbC5pc09iamVjdChwYXRoT2JqZWN0KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aE9iamVjdCcgbXVzdCBiZSBhbiBvYmplY3QsIG5vdCBcIiArIHR5cGVvZiBwYXRoT2JqZWN0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvb3QgPSBwYXRoT2JqZWN0LnJvb3QgfHwgJyc7XHJcblxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhyb290KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIidwYXRoT2JqZWN0LnJvb3QnIG11c3QgYmUgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBub3QgXCIgK1xyXG4gICAgICAgIHR5cGVvZiBwYXRoT2JqZWN0LnJvb3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGlyID0gcGF0aE9iamVjdC5kaXIgPyBwYXRoT2JqZWN0LmRpciArIHBvc2l4LnNlcCA6ICcnO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIHJldHVybiBkaXIgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIGFsbFBhcnRzWzFdID0gYWxsUGFydHNbMV0gfHwgJyc7XHJcbiAgYWxsUGFydHNbMl0gPSBhbGxQYXJ0c1syXSB8fCAnJztcclxuICBhbGxQYXJ0c1szXSA9IGFsbFBhcnRzWzNdIHx8ICcnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxucG9zaXguc2VwID0gJy8nO1xyXG5wb3NpeC5kZWxpbWl0ZXIgPSAnOic7XHJcblxyXG5cclxuaWYgKGlzV2luZG93cylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyO1xyXG5lbHNlIC8qIHBvc2l4ICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBwb3NpeDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXg7XHJcbm1vZHVsZS5leHBvcnRzLndpbjMyID0gd2luMzI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXRoL3BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IG5vb3AgPSAoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgdGhyb3cgRXJyb3IoJ21ldGhvZCB1bnN1cHBvcnRlZCBpbiBpc29tb3JwaGljLXBhdGgnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvbm9vcC50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcbmltcG9ydCB7IEV4cG9ydFNwZWMgfSBmcm9tICcuL0V4cG9ydC5zcGVjJztcbmltcG9ydCB7IFBhdGhTcGVjIH0gZnJvbSAnLi9QYXRoLk5vZGUuc3BlYyc7XG5pbXBvcnQgeyBQbGF0Zm9ybVNwZWMgfSBmcm9tICcuL1BsYXRmb3JtLk5vZGUuc3BlYyc7XG5cbmNvbnN0IElzb21vcnBoaWNQYXRoVGVzdHMgPSBbXG4gIEV4cG9ydFNwZWMsXG4gIFBhdGhTcGVjLFxuICBQbGF0Zm9ybVNwZWMsXG5dO1xuY29uc3QgdGVzdCA9IG5ldyB0c1VuaXQuVGVzdChJc29tb3JwaGljUGF0aFRlc3RzKTtcbmNvbnN0IHJlc3VsdCA9IHRlc3QucnVuKCk7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnNvbGUubG9nKHJlc3VsdC5nZXRUYXBSZXN1bHRzKCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9SdW5uZXIuTm9kZS50cyIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RzVW5pdFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi90c1VuaXRBc3luY1wiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Uc1VuaXRNb2R1bGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzLXVuaXQvZGlzdC9zcmMvVHNVbml0TW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzVW5pdF8xID0gcmVxdWlyZShcIi4vdHNVbml0XCIpO1xudmFyIHRzVW5pdF8yID0gcmVxdWlyZShcIi4vdHNVbml0XCIpO1xuZXhwb3J0cy5UZXN0ID0gdHNVbml0XzIuVGVzdDtcbmV4cG9ydHMuVGVzdENvbnRleHQgPSB0c1VuaXRfMi5UZXN0Q29udGV4dDtcbmV4cG9ydHMuVGVzdENsYXNzID0gdHNVbml0XzIuVGVzdENsYXNzO1xuZXhwb3J0cy5GYWtlRmFjdG9yeSA9IHRzVW5pdF8yLkZha2VGYWN0b3J5O1xuZXhwb3J0cy5UZXN0RGVzY3JpcHRpb24gPSB0c1VuaXRfMi5UZXN0RGVzY3JpcHRpb247XG5leHBvcnRzLlRlc3REZWZpbml0aW9uID0gdHNVbml0XzIuVGVzdERlZmluaXRpb247XG5jbGFzcyBUZXN0QXN5bmMgZXh0ZW5kcyB0c1VuaXRfMS5UZXN0IHtcbiAgICBydW5BbGwodGVzdHMsIHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgIGxldCB0aGlzVGVzdCA9IHRlc3RzWzBdO1xuICAgICAgICB2YXIgdGVzdENsYXNzID0gdGhpc1Rlc3QudGVzdENsYXNzO1xuICAgICAgICB2YXIgZHluYW1pY1Rlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgdmFyIHRlc3RzR3JvdXBOYW1lID0gdGhpc1Rlc3QubmFtZTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSB0c1VuaXRfMS5GdW5jdGlvblByb3BlcnR5SGVscGVyLmdldEZ1bmN0aW9uTmFtZXModGVzdENsYXNzKTtcbiAgICAgICAgbGV0IGZ1bmN0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCB1bml0VGVzdE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2pdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmVzZXJ2ZWRGdW5jdGlvbk5hbWUodW5pdFRlc3ROYW1lKSAmJlxuICAgICAgICAgICAgICAgICEodW5pdFRlc3ROYW1lLnN1YnN0cmluZygwLCB0aGlzLnByaXZhdGVNZW1iZXJQcmVmaXgubGVuZ3RoKSA9PT0gdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4KSAmJlxuICAgICAgICAgICAgICAgICEodHlwZW9mIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXSAhPT0gJ2Z1bmN0aW9uJykgJiZcbiAgICAgICAgICAgICAgICAoIXRlc3RSdW5MaW1pdGVyIHx8IHRlc3RSdW5MaW1pdGVyLmlzVGVzdEFjdGl2ZSh1bml0VGVzdE5hbWUpKSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5wdXNoKHVuaXRUZXN0TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlbWFpbmluZ1Rlc3RzID0gdGVzdHMuc2xpY2UoMSk7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5ydW5BbGxGdW5jdGlvbnModGhpc1Rlc3QsIGZ1bmN0aW9ucywgdGVzdFJ1bkxpbWl0ZXIpO1xuICAgICAgICBpZiAocmVtYWluaW5nVGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMucnVuQWxsKHJlbWFpbmluZ1Rlc3RzLCB0ZXN0UnVuTGltaXRlcikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBydW5BbGxGdW5jdGlvbnModGhpc1Rlc3QsIGZ1bmN0aW9uTmFtZXMsIHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgIGxldCB1bml0VGVzdE5hbWUgPSBmdW5jdGlvbk5hbWVzWzBdO1xuICAgICAgICBsZXQgcmVtYWluaW5nRnVuY3Rpb25zID0gZnVuY3Rpb25OYW1lcy5zbGljZSgxKTtcbiAgICAgICAgdmFyIHRlc3RDbGFzcyA9IHRoaXNUZXN0LnRlc3RDbGFzcztcbiAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgIHZhciB0ZXN0c0dyb3VwTmFtZSA9IHRoaXNUZXN0Lm5hbWU7XG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICBpZiAodHlwZW9mIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycztcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnJ1bkFsbFBhcmFtZXRlcnModGhpc1Rlc3QsIHVuaXRUZXN0TmFtZSwgMCwgdGVzdFJ1bkxpbWl0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMucnVuU2luZ2xlVGVzdEFzeW5jKHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbWFpbmluZ0Z1bmN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMucnVuQWxsRnVuY3Rpb25zKHRoaXNUZXN0LCByZW1haW5pbmdGdW5jdGlvbnMsIHRlc3RSdW5MaW1pdGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZS50aGVuKCh4KSA9PiB7XG4gICAgICAgICAgICB0ZXN0Q2xhc3MudGVhckRvd24gJiYgdGVzdENsYXNzLnRlYXJEb3duKCk7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgdGVzdENsYXNzLnRlYXJEb3duICYmIHRlc3RDbGFzcy50ZWFyRG93bigpO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJ1bkFsbFBhcmFtZXRlcnModGhpc1Rlc3QsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVySW5kZXgsIHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgIGxldCB0ZXN0Q2xhc3MgPSB0aGlzVGVzdC50ZXN0Q2xhc3M7XG4gICAgICAgIGxldCBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICBsZXQgdGVzdHNHcm91cE5hbWUgPSB0aGlzVGVzdC5uYW1lO1xuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzO1xuICAgICAgICBsZXQgbWF4SW5kZXggPSBwYXJhbWV0ZXJzLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcmFtZXRlckluZGV4O1xuICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIpIHtcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IHBhcmFtZXRlcnMubGVuZ3RoICYmICF0ZXN0UnVuTGltaXRlci5pc1BhcmFtZXRlcnNTZXRBY3RpdmUoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPCBwYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuU2luZ2xlVGVzdEFzeW5jKHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5ydW5BbGxQYXJhbWV0ZXJzKHRoaXNUZXN0LCB1bml0VGVzdE5hbWUsIGluZGV4ICsgMSwgdGVzdFJ1bkxpbWl0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgIH1cbiAgICBydW5TaW5nbGVUZXN0QXN5bmModGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lLCBwYXJhbWV0ZXJzID0gbnVsbCwgcGFyYW1ldGVyU2V0SW5kZXggPSBudWxsKSB7XG4gICAgICAgIC8vIHJ1bm5pbmcgZXZlcnl0aGluZyBpbnNpZGUgLnRoZW4gc2F2ZXMgdXMgYSB0cnkvY2F0Y2hcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGVzdENsYXNzLnNldFVwICYmIHRlc3RDbGFzcy5zZXRVcCgpO1xuICAgICAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgICAgICB2YXIgYXJncyA9IChwYXJhbWV0ZXJTZXRJbmRleCAhPT0gbnVsbCkgPyBwYXJhbWV0ZXJzW3BhcmFtZXRlclNldEluZGV4XSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLmFwcGx5KHRlc3RDbGFzcywgYXJncyk7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXNzZXMucHVzaChuZXcgdHNVbml0XzEuVGVzdERlc2NyaXB0aW9uKHRlc3RzR3JvdXBOYW1lLCB1bml0VGVzdE5hbWUsIHBhcmFtZXRlclNldEluZGV4LCAnT0snKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgdHNVbml0XzEuVGVzdERlc2NyaXB0aW9uKHRlc3RzR3JvdXBOYW1lLCB1bml0VGVzdE5hbWUsIHBhcmFtZXRlclNldEluZGV4LCBlcnIudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBydW5Bc3luYyh0ZXN0UnVuTGltaXRlciA9IG51bGwpIHtcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBudWxsO1xuICAgICAgICB2YXIgdGVzdENvbnRleHQgPSBuZXcgdHNVbml0XzEuVGVzdENvbnRleHQoKTtcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlc3RSdW5MaW1pdGVyID0gdGhpcy50ZXN0UnVuTGltaXRlcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVzdHMgPSB0aGlzLnRlc3RzO1xuICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIpIHtcbiAgICAgICAgICAgIHRlc3RzID0gdGVzdHMuZmlsdGVyKCh4KSA9PiB0ZXN0UnVuTGltaXRlci5pc1Rlc3RzR3JvdXBBY3RpdmUoeC5uYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucnVuQWxsKHRlc3RzLCB0ZXN0UnVuTGltaXRlcik7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2UgcnVuQXN5bmNcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZSBydW5Bc3luY1wiKTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3RBc3luYyA9IFRlc3RBc3luYztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRzVW5pdEFzeW5jLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdEFzeW5jLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9