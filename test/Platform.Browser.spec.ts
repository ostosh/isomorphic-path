import * as tsUnit from 'ts-unit';
import { isWin, isMac, isNode, isBrowser } from '../lib/platform';

export class PlatformSpec extends tsUnit.TestClass {
    testOs() {
      (window.navigator as any).__defineGetter__('platform', () => 'Windows'); // stub platform call
      this.isTrue(isWin(), 'isWin should return true for windows platform id: "Widnows"');
      this.isFalse(isMac(), 'isMac should return false for windows platform id: "Widnows"');
      (window.navigator as any).__defineGetter__('platform', () => 'Win16'); // stub platform call
      this.isTrue(isWin(), 'isWin should return true for windows platform id: "Win32"');
      this.isFalse(isMac(), 'isMac should return false for windows platform id: "Win32"');
      (window.navigator as any).__defineGetter__('platform', () => 'Macintosh'); // stub platform call
      this.isFalse(isWin(), 'isWin should return false for mac platform id: "Macintosh"');
      this.isTrue(isMac(), 'isMac should return true for mac platform id: "Macintosh"');
      (window.navigator as any).__defineGetter__('platform', () => 'MacIntel'); // stub platform call
      this.isFalse(isWin(), 'isWin should return false for mac platform id: "MacIntel"');
      this.isTrue(isMac(), 'isMac should return true for mac platform id: "MacIntel"');
    }
    testEnv() {
      this.isFalse(isNode(), 'isNode should return false for browser spec');
      this.isTrue(isBrowser(), 'isBrowser should return true for browser spec');
    }
}
