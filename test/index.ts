import * as tsUnit from 'ts-unit';
import { PathSpec } from './Path.spec';
import { OsSpec } from './Os.spec';

const IsomorphicPathTests = [
    PathSpec,
    OsSpec
];
var test = new tsUnit.Test(IsomorphicPathTests);
var result = test.run();
result.showResults('results');    // Display in the element with id="results"
console.log(result.getTapResults());
