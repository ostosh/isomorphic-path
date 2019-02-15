import * as tsUnit from 'ts-unit';
import * as isomorphicPath from '../';

export class PathSpec extends tsUnit.TestClass {
  testDefaultExport() {
    delete require.cache[require.resolve('../lib/path')];
    (process as any).__defineGetter__('platform', () => 'win32'); // stub platform call
    let path = require('../lib/path').default;
    this.areIdentical('\\', path.sep, 'default seperator should be win32 "\\" after in windows environment');
    this.areIdentical(';', path.delimiter, 'default delimiter should be win32 ";" after in windows environment');
    delete require.cache[require.resolve('../lib/path')];
    (process as any).__defineGetter__('platform', () => 'darwin'); // stub platform call
    path = require('../lib/path').default;
    this.areIdentical('/', path.sep, 'default seperator should be posix "/" after in mac environment');
    this.areIdentical(':', path.delimiter, 'default delimiter should be posix "/" after in mac environment');
  }

  testWin32Basename() {
    this.areIdentical(
      'myfile.html',
      isomorphicPath.win32.basename('C:\\temp\\myfile.html'),
      'win32 basename should parse file name from windows path',
    );
    this.areIdentical(
      'myfile.html',
      isomorphicPath.win32.basename('/temp/myfile.html'),
      'win32 basename should parse file name from posix path',
    );
  }
  testPosixBasename() {
    this.areIdentical(
      'myfile.html',
      isomorphicPath.win32.basename('C:\\temp\\myfile.html'),
      'posix basename should not parse windows path',
    );
    this.areIdentical(
      'myfile.html',
      isomorphicPath.win32.basename('/temp/myfile.html'),
      'posix basename should parse file name from posix path',
    );
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
    this.areIdentical(
      'C:\\temp',
      isomorphicPath.win32.dirname('C:\\temp\\myfile.html'),
      'win32 dirname should parse parent directory path from windows path',
    );
    this.areIdentical(
      '/temp',
      isomorphicPath.win32.dirname('/temp/myfile.html'),
      'win32 dirname should parse parent directory path from posix path',
    );
  }
  testPosixDirname() {
    this.areIdentical(
      'C:\\temp',
    isomorphicPath.win32.dirname('C:\\temp\\myfile.html'),
    'posix basename should not parse windows path',
  );
    this.areIdentical(
      '/temp',
      isomorphicPath.win32.dirname('/temp/myfile.html'),
      'posix dirname should parse parent directory path from posix path',
    );
  }
  testWin32Extname() {
    this.areIdentical(
      '.html',
      isomorphicPath.win32.extname('C:\\temp\\myfile.html'),
      'win32 extname should parse extension from windows path',
    );
    this.areIdentical(
      '.html',
      isomorphicPath.win32.extname('/temp/myfile.html'),
      'win32 extname should parse parent extension path from posix path',
    );
    this.areIdentical(
      '.js',
      isomorphicPath.win32.extname('C:\\temp\\myfile.js'),
      'win32 extname should parse extension from windows path',
    );
    this.areIdentical(
      '.js', isomorphicPath.win32.extname('/temp/myfile.html.js'),
      'win32 extname should parse parent extension path from posix path',
    );
    this.areIdentical(
      '.js',
      isomorphicPath.win32.extname('C:\\temp\\myfile.html.js'),
      'win32 extname should parse pre-fixed extension from windows path',
    );
    this.areIdentical(
      '.js',
      isomorphicPath.win32.extname('/temp/myfile.html.html.js'),
      'win32 extname should parse pre-fixed parent extension path from posix path',
    );
  }
  testPosixExtname() {

    this.areIdentical(
      '.html',
      isomorphicPath.posix.extname('/temp/myfile.html'),
      'posix extname should parse parent extension path from posix path',
    );
    this.areIdentical(
      '.js',
      isomorphicPath.posix.extname('/temp/myfile.html.js'),
      'posix extname should parse parent extension path from posix path',
    );
    this.areIdentical(
      '.js',
      isomorphicPath.posix.extname('/temp/myfile.html.html.js'),
      'posix extname should parse pre-fixed parent extension path from posix path',
    );
  }
  testWin32Format() {
    this.areIdentical('/home/user/dir\\file.txt', isomorphicPath.win32.format({
      dir: '/home/user/dir',
      base: 'file.txt',
    } as isomorphicPath.ParsedPath), 'win32 format should not format posix ParsedPath');
    this.areIdentical('path\\dir\\file.txt', isomorphicPath.win32.format({
      root: 'C:\\',
      dir: 'path\\dir',
      base: 'file.txt',
    } as isomorphicPath.ParsedPath), 'win32 format should format windows ParsedPath with root and dir');
    this.areIdentical('C:\\path\\dir\\file.txt', isomorphicPath.win32.format({
      dir: 'C:\\path\\dir',
      base: 'file.txt',
    } as isomorphicPath.ParsedPath), 'win32 format should format windows ParsedPath with dir');
  }
  testPosixFormat() {
    this.areIdentical('C:\\path\\dir/file.txt', isomorphicPath.posix.format({
      dir: 'C:\\path\\dir',
      base: 'file.txt',
    } as isomorphicPath.ParsedPath), 'posix format should not format windows ParsedPath');
    this.areIdentical('/home/user/dir/file.txt', isomorphicPath.posix.format({
      root: '/ignored',
      dir: '/home/user/dir',
      base: 'file.txt',
    } as isomorphicPath.ParsedPath), 'posix format should format posix ParsedPath with root and dir');
    this.areIdentical('/home/user/dir/file.txt', isomorphicPath.posix.format({
      dir: '/home/user/dir',
      base: 'file.txt',
    } as isomorphicPath.ParsedPath), 'posix format should format posix ParsedPath with dir');
  }
  testWin32Absolute() {
    this.areIdentical(
      true,
      isomorphicPath.win32.isAbsolute('//server'),
      'win32 isAbsolute should return true for posix absolute path',
    );
    this.areIdentical(
      true,
      isomorphicPath.win32.isAbsolute('\\\\server'),
      'win32 isAbsolute should return true for windows absolute path',
    );
    this.areIdentical(
      true,
      isomorphicPath.win32.isAbsolute('C:/foo/..'),
      'win32 isAbsolute should return true for windows absolute path',
    );
    this.areIdentical(
      true,
      isomorphicPath.win32.isAbsolute('C:\\foo\\..'),
      'win32 isAbsolute should return true for windows absolute path',
    );
    this.areIdentical(
      false,
      isomorphicPath.win32.isAbsolute('bar\\baz'),
      'win32 isAbsolute should return false for windows relative path',
    );
    this.areIdentical(
      false,
      isomorphicPath.win32.isAbsolute('bar/baz'),
      'win32 isAbsolute should return true for relative posix path',
    );
    this.areIdentical(
      false,
      isomorphicPath.win32.isAbsolute('.'),
      'win32 isAbsolute should return false for relative posix operator',
    );
  }
  testPosixAbsolute() {
    this.areIdentical(
      true,
      isomorphicPath.posix.isAbsolute('//server'),
      'posix isAbsolute should return true for posix absolute path',
    );
    this.areIdentical(
      true,
      isomorphicPath.posix.isAbsolute('/baz/..'),
      'posix isAbsolute should return true for posix absolute path with relative operator suffix',
    );
    this.areIdentical(
      false,
      isomorphicPath.posix.isAbsolute('\\\\server'),
      'posix isAbsolute should return false for windows absolute path',
    );
    this.areIdentical(
      false,
      isomorphicPath.posix.isAbsolute('C:/foo/..'),
      'posix isAbsolute should return false for windows absolute path',
    );
    this.areIdentical(
      false,
      isomorphicPath.posix.isAbsolute('C:\\foo\\..'),
      'posix isAbsolute should return false for windows absolute path',
    );
    this.areIdentical(
      false,
      isomorphicPath.posix.isAbsolute('bar\\baz'),
      'win32 isAbsolute should return false for windows relative path',
    );
    this.areIdentical(
      false,
      isomorphicPath.posix.isAbsolute('bar/baz'),
      'win32 isAbsolute should return true for relative posix path',
    );
    this.areIdentical(
      false,
      isomorphicPath.posix.isAbsolute('.'),
      'win32 isAbsolute should return true for relative posix operator',
    );
  }
  testWin32Join() {
    this.areIdentical(
      'C:\\foo\\bar\\baz\\asdf',
      isomorphicPath.win32.join('C:\\foo', 'bar', 'baz\\asdf', 'quux', '..'),
      'win32 join should return joined windows path given windows fragments',
    );
    this.areIdentical(
      '\\foo\\bar\\baz\\asdf',
      isomorphicPath.win32.join('/foo', 'bar', 'baz/asdf', 'quux', '..'),
      'win32 join should return joined windows path given posix fragments',
    );
  }
  testPosixJoin() {
    this.areIdentical(
      '\\foo/bar/baz\\asdf',
      isomorphicPath.posix.join('\\foo', 'bar', 'baz\\asdf', 'quux', '..'),
      'posix join should not return joined posix path given windows fragments',
    );
    this.areIdentical(
      '/foo/bar/baz/asdf',
      isomorphicPath.posix.join('/foo', 'bar', 'baz/asdf', 'quux', '..'),
      'posix join should return joined posix path',
    );
  }
  testWin32Normalize() {
    this.areIdentical(
      'C:\\temp\\foo\\bar',
      isomorphicPath.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'),
      'win32 should normalize mixed path to windows seperator',
    );
    this.areIdentical(
      'C:\\temp\\foo\\',
      isomorphicPath.win32.normalize('C:\\temp\\\\foo\\bar\\..\\'),
      'win32 should normalize windows path to windows seperator',
    );
    this.areIdentical(
      '\\foo\\bar\\baz\\asdf',
      isomorphicPath.win32.normalize('/foo/bar//baz/asdf/quux/..'),
      'wind32 should normalize posix path to windows seperator',
    );
  }
  testPosixNormalize() {
    this.areIdentical(
      'C:\\temp\\\\foo\\bar\\..\\',
      isomorphicPath.posix.normalize('C:\\temp\\\\foo\\bar\\..\\'),
      'posix should not normalize windows path',
    );
    this.areIdentical(
      '/foo/bar/baz/asdf',
      isomorphicPath.posix.normalize('/foo/bar//baz/asdf/quux/..'),
      'posix should normalize posix path to posix seperator',
    );
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
    this.areIdentical(
      'C:\\foo\\bar\\baz',
      isomorphicPath.win32.resolve('C:\\foo\\bar', '.\\baz'),
      'win32 should resolve windows path',
    );
    this.areIdentical(
      '\\foo\\bar\\baz',
      isomorphicPath.win32.resolve('/foo/bar', './baz'),
      'win32 should resolve posix path to windows format',
    );
  }
  testPosixResolve() {
    this.areNotIdentical(
      'C:\\foo\\bar/.\\baz',
      isomorphicPath.posix.resolve('C:\\foo\\bar', '.\\baz'),
      'posix should not resolve windows path',
    );
    this.areIdentical(
      '/foo/bar/baz',
      isomorphicPath.posix.resolve('/foo/bar', './baz'),
      'posix should resolve posix path',
    );
  }
  testWin32Relative() {
    this.areIdentical(
      '..\\..\\impl\\bbb',
      isomorphicPath.win32.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'),
      'win32 should relative windows path',
    );
    this.areIdentical(
      '..\\..\\impl\\bbb',
      isomorphicPath.win32.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'),
      'win32 should relative posix path to windows format',
    );
  }
  testPosixRelative() {
    this.areIdentical(
      '../.\\baz', isomorphicPath.posix.relative('C:\\foo\\bar', '.\\baz'),
      'posix should not relative windows path',
    );
    this.areIdentical(
      '../../impl/bbb',
      isomorphicPath.posix.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'),
      'posix should relative posix path',
    );
  }

}
