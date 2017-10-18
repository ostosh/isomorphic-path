import * as tsUnit from 'ts-unit';
import { isPc, isMac } from '../lib/os';

export class OsSpec extends tsUnit.TestClass {
    testOs() {
      (window.navigator as any).__defineGetter__('platform', () => 'Windows');//stub platform call
      this.isTrue(isPc(), 'isPc should return true for windows platform id: "Widnows"');
      this.isFalse(isMac(), 'isMac should return false for windows platform id: "Widnows"');
      (window.navigator as any).__defineGetter__('platform', () => 'Win16');//stub platform call
      this.isTrue(isPc(), 'isPc should return true for windows platform id: "Win32"');
      this.isFalse(isMac(), 'isMac should return false for windows platform id: "Win32"');
      (window.navigator as any).__defineGetter__('platform', () => 'Macintosh');//stub platform call
      this.isFalse(isPc(), 'isPc should return false for mac platform id: "Macintosh"');
      this.isTrue(isMac(), 'isMac should return true for mac platform id: "Macintosh"');
      (window.navigator as any).__defineGetter__('platform', () => 'MacIntel');//stub platform call
      this.isFalse(isPc(), 'isPc should return false for mac platform id: "MacIntel"');
      this.isTrue(isMac(), 'isMac should return true for mac platform id: "MacIntel"');
    }
}
