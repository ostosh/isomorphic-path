import * as tsUnit from 'ts-unit';
import { PathSpec } from './Path.Browser.spec';
import { PlatformSpec } from './Platform.Browser.spec';

const IsomorphicPathTests = [
    PathSpec,
    PlatformSpec
];
var test = new tsUnit.Test(IsomorphicPathTests);
var result = test.run();
result.showResults('results');    // Display in the element with id="results"
console.log(result.getTapResults());
