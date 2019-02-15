import * as tsUnit from 'ts-unit';
import { ExportSpec } from './Export.spec';
import { PathSpec } from './Path.Browser.spec';
import { PlatformSpec } from './Platform.Browser.spec';

const IsomorphicPathTests = [
  ExportSpec,
  PathSpec,
  PlatformSpec,
];
const test = new tsUnit.Test(IsomorphicPathTests);
const result = test.run();
result.showResults('results');
// tslint:disable-next-line
console.log(result.getTapResults());
