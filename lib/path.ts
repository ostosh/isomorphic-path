/// <reference path="../typings/path.d.ts" />
import { win32 as win32Base, posix as posixBase } from 'path/path';
import { isPc, isBrowser } from './platform';
import { noop } from './noop';

export interface ParsedPath {
  root: string;
  dir: string;
  base: string;
  ext: string;
  name: string;
}

const unsupportedMethods = {
  resolve: noop,
  relative: noop
};

const win32 = Object.assign({}, win32Base, isBrowser() ? unsupportedMethods : {});
const posix = Object.assign({}, posixBase,  isBrowser() ? unsupportedMethods : {});
const defaultExport = Object.assign({}, isPc() ? win32 : posix);

export default defaultExport;
export { win32, posix }
