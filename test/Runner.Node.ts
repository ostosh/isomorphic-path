import * as tsUnit from 'ts-unit';
import { PathSpec } from './Path.Node.spec';
import { PlatformSpec } from './Platform.Node.spec';

const IsomorphicPathTests = [
    PathSpec,
    PlatformSpec
];
var test = new tsUnit.Test(IsomorphicPathTests);
var result = test.run();
console.log(result.getTapResults());
