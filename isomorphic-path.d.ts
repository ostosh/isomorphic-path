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

export  const win32: IPath;
export const posix: IPath;
declare const defaultExport: IPath & IBasePath;
export default defaultExport;

export function normalize(p: string): string;
export function join(...pathSegments: any[]): string;
export function resolve(...pathSegments: any[]): string;
export function isAbsolute(p: string): boolean;
export function relative(from: string, to: string): string;
export function dirname(p: string): string;
export function basename(p: string, ext?: string): string;
export function extname(p: string): string;
export const sep: string;
export const delimiter: string;
export function parse(p: string): ParsedPath;
export function format(p: ParsedPath): string;