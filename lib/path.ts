/// <reference path="../typings/path.d.ts" />
import { win32 as win32Base, posix as posixBase } from 'path/path';
import { isPc, isBrowser } from './platform';
import { noop } from './noop';

export interface ParsedPath {
    /**
     * The root of the path such as '/' or 'c:\'
   */
  root: string;
  /**
   * The full directory path such as '/home/user/dir' or 'c:\path\dir'
   */
  dir: string;
  /**
   * The file name including extension (if any) such as 'index.html'
   */
  base: string;
  /**
   * The file extension (if any) such as '.html'
   */
  ext: string;
  /**
   * The file name without extension (if any) such as 'index'
   */
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
