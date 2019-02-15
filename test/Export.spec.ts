import * as tsUnit from 'ts-unit';
import ip from '../';
import * as namedIp from '../';

export class ExportSpec extends tsUnit.TestClass {
  testExport() {
    this.isTrue(typeof ip.posix.sep === 'string', 'default export posix is defined');
    this.isTrue(typeof ip.win32.sep === 'string', 'default export win32 is defined');
    this.isTrue(typeof ip.sep === 'string', 'default export runtime is defined');
    this.isTrue(typeof namedIp.posix.sep === 'string', 'default export posix is defined');
    this.isTrue(typeof namedIp.win32.sep === 'string', 'default export win32 is defined');
    this.isTrue(typeof namedIp.sep === 'string', 'default export runtime is defined');
  }
}
