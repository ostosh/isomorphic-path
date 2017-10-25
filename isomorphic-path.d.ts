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


declare const win32: IPath;
declare const posix: IPath;
declare const defaultExport: IPath & IBasePath;
export default defaultExport;
export { win32, posix };
