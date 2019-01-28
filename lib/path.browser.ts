import { win32 as win32Base, posix as posixBase } from 'path/path';
import { isWin, isBrowser } from './platform';
import { noop } from './noop';

const unsupportedMethods = {
  resolve: noop,
  relative: noop,
};

const win32Runtime = Object.assign({}, win32Base, unsupportedMethods);
const posixRuntime = Object.assign({}, posixBase, unsupportedMethods);

let defaultExport;
if (isWin()) {
  defaultExport = Object.assign({}, win32Base);
} else {
  defaultExport = Object.assign({}, posixBase);
}
let normalizeRuntime;
let joinRuntime;
let resolveRuntime;
let isAbsoluteRuntime;
let relativeRuntime;
let dirnameRuntime;
let basenameRuntime;
let extnameRuntime;
let sepRuntime;
let delimiterRuntime;
let parseRuntime;
let formatRuntime;

if (isWin()) {
  normalizeRuntime = win32Runtime.normalize;
  joinRuntime = win32Runtime.join;
  resolveRuntime = win32Runtime.resolve;
  isAbsoluteRuntime = win32Runtime.isAbsolute;
  relativeRuntime = win32Runtime.relative;
  dirnameRuntime = win32Runtime.dirname;
  basenameRuntime = win32Runtime.basename;
  extnameRuntime = win32Runtime.extname;
  sepRuntime = win32Runtime.sep;
  delimiterRuntime = win32Runtime.delimiter;
  parseRuntime = win32Runtime.parse;
  formatRuntime = win32Runtime.format;
} else {
  normalizeRuntime = posixRuntime.normalize;
  joinRuntime = posixRuntime.join;
  resolveRuntime = posixRuntime.resolve;
  isAbsoluteRuntime = posixRuntime.isAbsolute;
  relativeRuntime = posixRuntime.relative;
  dirnameRuntime = posixRuntime.dirname;
  basenameRuntime = posixRuntime.basename;
  extnameRuntime = posixRuntime.extname;
  sepRuntime = posixRuntime.sep;
  delimiterRuntime = posixRuntime.delimiter;
  parseRuntime = posixRuntime.parse;
  formatRuntime = posixRuntime.format;
}

export default defaultExport;
export {
  normalizeRuntime as normalize,
  joinRuntime as join,
  resolveRuntime as resolve,
  isAbsoluteRuntime as isAbsolute,
  relativeRuntime as relative,
  dirnameRuntime as dirname,
  basenameRuntime as basename,
  extnameRuntime as extname,
  sepRuntime as sepRuntime,
  delimiterRuntime as delimiter,
  parseRuntime as parse,
  formatRuntime as format,
  posixRuntime as posix,
  win32Runtime as win32,
};
