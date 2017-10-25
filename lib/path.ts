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

interface IPath {
  normalize(p: string): string;
  join(...paths: any[]): string;
  resolve(...pathSegments: any[]): string;
  isAbsolute(p: string): boolean;
  relative(from: string, to: string): string;
  dirname(p: string): string;
  basename(p: string, ext?: string): string;
  extname(p: string): string;
  sep: string;
  delimiter: string;
  parse(p: string): ParsedPath;
  format(pP: ParsedPath): string;
}

interface IBasePath {
  win32: IPath;
  posix: IPath;
}


const unsupportedMethods = {
  resolve: noop,
  relative: noop
};

const win32Runtime: IPath =  Object.assign({}, win32Base, isBrowser() ? unsupportedMethods : {});
const posixRuntime: IPath = Object.assign({}, posixBase,  isBrowser() ? unsupportedMethods : {});
const basePath: IBasePath = {
  win32: win32Runtime,
  posix: posixRuntime
};
const defaultExport: IPath & IBasePath = Object.assign(
  {},
  isPc() ? win32Runtime : posixRuntime,
  basePath
);
export default defaultExport;
export { win32Runtime as win32, posixRuntime as posix };
