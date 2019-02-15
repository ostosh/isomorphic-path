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

module.exports = require("util");

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNDllMzY4ZGRkYTY3NTM3N2E3ZSIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaEVBLHNDQUFtRTtBQUNuRSwwQ0FBbUM7QUFDbkMsc0NBQThCO0FBRTlCLE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsT0FBTyxFQUFFLFdBQUk7SUFDYixRQUFRLEVBQUUsV0FBSTtDQUNmLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxZQUFTLENBQUM7QUFpRWIsNkJBQUs7QUFoRXZCLE1BQU0sWUFBWSxH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QUFFLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXO1dBQ3RDLE9BQU8sU0FBUyxDQUFDLFFBQVEsS0FBSyxRQUFRO1dBQ3RDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFVyxpQkFBUyxHQUFHLEdBQVksRUFBRTtJQUNyQyxNQUFNLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVXLGNBQU0sR0FBRyxHQUFZLEVBQUU7SUFDbEMsTUFBTSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLENBQUM7QUFDekUsQ0FBQyxDQUFDOzs7Ozs7O0FDbENGLGlDIiwiZmlsZSI6Imlzb21vcnBoaWMtcGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInV0aWxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widXRpbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpc29tb3JwaGljLXBhdGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpc29tb3JwaGljLXBhdGhcIl0gPSBmYWN0b3J5KHJvb3RbXCJ1dGlsXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjQ5ZTM2OGRkZGE2NzUzNzdhN2UiLCJpbXBvcnQgeyB3aW4zMiBhcyB3aW4zMkJhc2UsIHBvc2l4IGFzIHBvc2l4QmFzZSB9IGZyb20gJ3BhdGgvcGF0aCc7XG5pbXBvcnQgeyBpc1dpbiB9IGZyb20gJy4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vbm9vcCc7XG5cbmNvbnN0IHVuc3VwcG9ydGVkTWV0aG9kcyA9IHtcbiAgcmVzb2x2ZTogbm9vcCxcbiAgcmVsYXRpdmU6IG5vb3AsXG59O1xuXG5jb25zdCB3aW4zMlJ1bnRpbWUgPSB3aW4zMkJhc2U7XG5jb25zdCBwb3NpeFJ1bnRpbWUgPSBwb3NpeEJhc2U7XG5cbmxldCBkZWZhdWx0RXhwb3J0ID0ge3dpbjMyOiB3aW4zMlJ1bnRpbWUsIHBvc2l4OiBwb3NpeFJ1bnRpbWV9O1xuaWYgKGlzV2luKCkpIHtcbiAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRFeHBvcnQsIHdpbjMyUnVudGltZSk7XG59IGVsc2Uge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdEV4cG9ydCwgcG9zaXhSdW50aW1lKTtcbn1cbmxldCBub3JtYWxpemVSdW50aW1lO1xubGV0IGpvaW5SdW50aW1lO1xubGV0IHJlc29sdmVSdW50aW1lO1xubGV0IGlzQWJzb2x1dGVSdW50aW1lO1xubGV0IHJlbGF0aXZlUnVudGltZTtcbmxldCBkaXJuYW1lUnVudGltZTtcbmxldCBiYXNlbmFtZVJ1bnRpbWU7XG5sZXQgZXh0bmFtZVJ1bnRpbWU7XG5sZXQgc2VwUnVudGltZTtcbmxldCBkZWxpbWl0ZXJSdW50aW1lO1xubGV0IHBhcnNlUnVudGltZTtcbmxldCBmb3JtYXRSdW50aW1lO1xuXG5pZiAoaXNXaW4oKSkge1xuICBub3JtYWxpemVSdW50aW1lID0gd2luMzJSdW50aW1lLm5vcm1hbGl6ZTtcbiAgam9pblJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuam9pbjtcbiAgcmVzb2x2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVzb2x2ZTtcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuaXNBYnNvbHV0ZTtcbiAgcmVsYXRpdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlbGF0aXZlO1xuICBkaXJuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5kaXJuYW1lO1xuICBiYXNlbmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuYmFzZW5hbWU7XG4gIGV4dG5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmV4dG5hbWU7XG4gIHNlcFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuc2VwO1xuICBkZWxpbWl0ZXJSdW50aW1lID0gd2luMzJSdW50aW1lLmRlbGltaXRlcjtcbiAgcGFyc2VSdW50aW1lID0gd2luMzJSdW50aW1lLnBhcnNlO1xuICBmb3JtYXRSdW50aW1lID0gd2luMzJSdW50aW1lLmZvcm1hdDtcbn0gZWxzZSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHBvc2l4UnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHBvc2l4UnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHBvc2l4UnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZm9ybWF0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0RXhwb3J0O1xuZXhwb3J0IHtcbiAgbm9ybWFsaXplUnVudGltZSBhcyBub3JtYWxpemUsXG4gIGpvaW5SdW50aW1lIGFzIGpvaW4sXG4gIHJlc29sdmVSdW50aW1lIGFzIHJlc29sdmUsXG4gIGlzQWJzb2x1dGVSdW50aW1lIGFzIGlzQWJzb2x1dGUsXG4gIHJlbGF0aXZlUnVudGltZSBhcyByZWxhdGl2ZSxcbiAgZGlybmFtZVJ1bnRpbWUgYXMgZGlybmFtZSxcbiAgYmFzZW5hbWVSdW50aW1lIGFzIGJhc2VuYW1lLFxuICBleHRuYW1lUnVudGltZSBhcyBleHRuYW1lLFxuICBzZXBSdW50aW1lIGFzIHNlcCxcbiAgZGVsaW1pdGVyUnVudGltZSBhcyBkZWxpbWl0ZXIsXG4gIHBhcnNlUnVudGltZSBhcyBwYXJzZSxcbiAgZm9ybWF0UnVudGltZSBhcyBmb3JtYXQsXG4gIHBvc2l4UnVudGltZSBhcyBwb3NpeCxcbiAgd2luMzJSdW50aW1lIGFzIHdpbjMyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wYXRoLnRzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGF0aC9wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vcGF0aCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXgudHMiLCJleHBvcnQgY29uc3Qgbm9vcCA9IChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9ub29wLnRzIiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1dpbiA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wbGF0Zm9ybS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1dGlsXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==