import * as tsUnit from 'ts-unit';
import { ExportSpec } from './Export.spec';
import { PathSpec } from './Path.Node.spec';
import { PlatformSpec } from './Platform.Node.spec';

const IsomorphicPathTests = [
  ExportSpec,
  PathSpec,
  PlatformSpec,
];
const test = new tsUnit.Test(IsomorphicPathTests);
const result = test.run();
// tslint:disable-next-line
console.log(result.getTapResults());
