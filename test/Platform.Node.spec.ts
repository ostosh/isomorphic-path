import * as tsUnit from 'ts-unit';
import { isWin, isMac, isNode, isBrowser } from '../lib/platform';

export class PlatformSpec extends tsUnit.TestClass {
  testOs() {
    (process as any).__defineGetter__('platform', () => 'win32'); // stub platform call
    this.isTrue(isWin(), 'isWin should return true for windows platform id: "win32"');
    this.isFalse(isMac(), 'isMac should return false for windows platform id: "win32"');
    (process as any).__defineGetter__('platform', () => 'darwin'); // stub platform call
    this.isFalse(isWin(), 'isWin should return false for mac platform id: "darwin"');
    this.isTrue(isMac(), 'isMac should return true for mac platform id: "darwin"');
  }
  testEnv() {
    this.isTrue(isNode(), 'isNode should return true for node spec');
    this.isFalse(isBrowser(), 'isBrowser should return false for browser spec');
  }
}
