(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("util"));
	else if(typeof define === 'function' && define.amd)
		define(["util"], factory);
	else if(typeof exports === 'object')
		exports["nodeRunner"] = factory(require("util"));
	else
		root["nodeRunner"] = factory(root["util"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../typings/path.d.ts" />
const path_1 = __webpack_require__(6);
const platform_1 = __webpack_require__(3);
const noop_1 = __webpack_require__(8);
const unsupportedMethods = {
    resolve: noop_1.noop,
    relative: noop_1.noop
};
const win32Runtime = Object.assign({}, path_1.win32, platform_1.isBrowser() ? unsupportedMethods : {});
exports.win32 = win32Runtime;
const posixRuntime = Object.assign({}, path_1.posix, platform_1.isBrowser() ? unsupportedMethods : {});
exports.posix = posixRuntime;
const basePath = {
    win32: win32Runtime,
    posix: posixRuntime
};
const defaultExport = Object.assign({}, platform_1.isPc() ? win32Runtime : posixRuntime, basePath);
exports.default = defaultExport;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tsUnit (c) Copyright 2012-2015 Steve Fenton, licensed under Apache 2.0 https://github.com/Steve-Fenton/tsUnit */
Object.defineProperty(exports, "__esModule", { value: true });
class Test {
    constructor(...testModules) {
        this.privateMemberPrefix = '_';
        this.passes = [];
        this.errors = [];
        this.tests = [];
        this.reservedMethodNameContainer = new TestClass();
        this.createTestLimiter();
        for (var i = 0; i < testModules.length; i++) {
            var testModule = testModules[i];
            if (testModule.hasOwnProperty("name")) {
                var name = testModule["name"];
                this.addTestClass(new testModule, name);
            }
            else {
                for (var prop in testModule) {
                    this.addTestClass(new testModule[prop], prop);
                }
            }
        }
    }
    addTestClass(testClass, name = 'Tests') {
        this.tests.push(new TestDefinition(testClass, name));
    }
    run(testRunLimiter = null) {
        var parameters = null;
        var testContext = new TestContext();
        if (testRunLimiter == null) {
            testRunLimiter = this.testRunLimiter;
        }
        for (var i = 0; i < this.tests.length; ++i) {
            var testClass = this.tests[i].testClass;
            var dynamicTestClass = testClass;
            var testsGroupName = this.tests[i].name;
            if (testRunLimiter && !testRunLimiter.isTestsGroupActive(testsGroupName)) {
                continue;
            }
            var propertyNames = FunctionPropertyHelper.getFunctionNames(testClass);
            for (var j = 0; j < propertyNames.length; j++) {
                let unitTestName = propertyNames[j];
                if (this.isReservedFunctionName(unitTestName)
                    || (unitTestName.substring(0, this.privateMemberPrefix.length) === this.privateMemberPrefix)
                    || (typeof dynamicTestClass[unitTestName] !== 'function')
                    || (testRunLimiter && !testRunLimiter.isTestActive(unitTestName))) {
                    continue;
                }
                if (typeof dynamicTestClass[unitTestName].parameters !== 'undefined') {
                    parameters = dynamicTestClass[unitTestName].parameters;
                    for (var parameterIndex = 0; parameterIndex < parameters.length; parameterIndex++) {
                        if (testRunLimiter && !testRunLimiter.isParametersSetActive(parameterIndex)) {
                            continue;
                        }
                        this.runSingleTest(testClass, unitTestName, testsGroupName, parameters, parameterIndex);
                    }
                }
                else {
                    this.runSingleTest(testClass, unitTestName, testsGroupName);
                }
            }
        }
        return this;
    }
    showResults(target) {
        var elem;
        if (typeof target === 'string') {
            var id = target;
            elem = document.getElementById(id);
        }
        else {
            elem = target;
        }
        var template = '<article>' +
            '<h1>' + this.getTestResult() + '</h1>' +
            '<p>' + this.getTestSummary() + '</p>' +
            this.testRunLimiter.getLimitCleaner() +
            '<section id="tsFail">' +
            '<h2>Errors</h2>' +
            '<ul class="bad">' + this.getTestResultList(this.errors) + '</ul>' +
            '</section>' +
            '<section id="tsOkay">' +
            '<h2>Passing Tests</h2>' +
            '<ul class="good">' + this.getTestResultList(this.passes) + '</ul>' +
            '</section>' +
            '</article>' +
            this.testRunLimiter.getLimitCleaner();
        elem.innerHTML = template;
        return this;
    }
    getTapResults() {
        var newLine = '\r\n';
        var template = '1..' + (this.passes.length + this.errors.length).toString() + newLine;
        for (var i = 0; i < this.errors.length; i++) {
            template += 'not ok ' + this.errors[i].message + ' ' + this.errors[i].testName + ':' + this.errors[i].funcName + newLine;
        }
        for (var i = 0; i < this.passes.length; i++) {
            template += 'ok ' + this.passes[i].testName + ':' + this.passes[i].funcName + newLine;
        }
        return template;
    }
    createTestLimiter() {
        try {
            if (typeof window !== 'undefined') {
                this.testRunLimiter = new TestRunLimiter();
            }
        }
        catch (ex) { }
    }
    isReservedFunctionName(functionName) {
        return FunctionPropertyHelper
            .getFunctionNames(this.reservedMethodNameContainer)
            .some(mem => mem === functionName);
    }
    runSingleTest(testClass, unitTestName, testsGroupName, parameters = null, parameterSetIndex = null) {
        if (typeof testClass['setUp'] === 'function') {
            testClass['setUp']();
        }
        try {
            var dynamicTestClass = testClass;
            var args = (parameterSetIndex !== null) ? parameters[parameterSetIndex] : null;
            dynamicTestClass[unitTestName].apply(testClass, args);
            this.passes.push(new TestDescription(testsGroupName, unitTestName, parameterSetIndex, 'OK'));
        }
        catch (err) {
            this.errors.push(new TestDescription(testsGroupName, unitTestName, parameterSetIndex, err.toString()));
        }
        if (typeof testClass['tearDown'] === 'function') {
            testClass['tearDown']();
        }
    }
    getTestResult() {
        return this.errors.length === 0 ? 'Test Passed' : 'Test Failed';
    }
    getTestSummary() {
        return 'Total tests: <span id="tsUnitTotalCout">' + (this.passes.length + this.errors.length).toString() + '</span>. ' +
            'Passed tests: <span id="tsUnitPassCount" class="good">' + this.passes.length + '</span>. ' +
            'Failed tests: <span id="tsUnitFailCount" class="bad">' + this.errors.length + '</span>.';
    }
    getTestResultList(testResults) {
        var list = '';
        var group = '';
        var isFirst = true;
        for (var i = 0; i < testResults.length; ++i) {
            var result = testResults[i];
            if (result.testName !== group) {
                group = result.testName;
                if (isFirst) {
                    isFirst = false;
                }
                else {
                    list += '</li></ul>';
                }
                list += '<li>' + this.testRunLimiter.getLimiterForGroup(group) + result.testName + '<ul>';
            }
            var resultClass = (result.message === 'OK') ? 'success' : 'error';
            var functionLabal = result.funcName + ((result.parameterSetNumber === null)
                ? '()'
                : '(' + this.testRunLimiter.getLimiterForTest(group, result.funcName, result.parameterSetNumber) + ' paramater set: ' + result.parameterSetNumber + ')');
            list += '<li class="' + resultClass + '">' + this.testRunLimiter.getLimiterForTest(group, result.funcName) + functionLabal + ': ' + this.encodeHtmlEntities(result.message) + '</li>';
        }
        return list + '</ul>';
    }
    encodeHtmlEntities(input) {
        return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
}
exports.Test = Test;
class TestRunLimiterRunAll {
    isTestsGroupActive(groupName) {
        return true;
    }
    isTestActive(testName) {
        return true;
    }
    isParametersSetActive(paramatersSetNumber) {
        return true;
    }
}
class TestRunLimiter {
    constructor() {
        this.groupName = null;
        this.testName = null;
        this.parameterSet = null;
        this.setRefreshOnLinksWithHash();
        this.translateStringIntoTestsLimit(window.location.hash);
    }
    isTestsGroupActive(groupName) {
        if (this.groupName === null) {
            return true;
        }
        return this.groupName === groupName;
    }
    isTestActive(testName) {
        if (this.testName === null) {
            return true;
        }
        return this.testName === testName;
    }
    isParametersSetActive(paramatersSet) {
        if (this.parameterSet === null) {
            return true;
        }
        return this.parameterSet === paramatersSet;
    }
    getLimiterForTest(groupName, testName, parameterSet = null) {
        if (parameterSet !== null) {
            testName += '(' + parameterSet + ')';
        }
        return '&nbsp;<a href="#' + groupName + '/' + testName + '\" class="ascii">&#9658;</a>&nbsp;';
    }
    getLimiterForGroup(groupName) {
        return '&nbsp;<a href="#' + groupName + '" class="ascii">&#9658;</a>&nbsp;';
    }
    getLimitCleaner() {
        return '<p><a href="#">Run all tests <span class="ascii">&#9658;</span></a></p>';
    }
    setRefreshOnLinksWithHash() {
        var previousHandler = window.onhashchange;
        window.onhashchange = function (ev) {
            window.location.reload();
            if (typeof previousHandler === 'function') {
                previousHandler.call(window, ev);
            }
        };
    }
    translateStringIntoTestsLimit(value) {
        var regex = /^#([_a-zA-Z0-9]+)((\/([_a-zA-Z0-9]+))(\(([0-9]+)\))?)?$/;
        var result = regex.exec(value);
        if (result === null) {
            return;
        }
        if (result.length > 1 && !!result[1]) {
            this.groupName = result[1];
        }
        if (result.length > 4 && !!result[4]) {
            this.testName = result[4];
        }
        if (result.length > 6 && !!result[6]) {
            this.parameterSet = parseInt(result[6], 10);
        }
    }
}
exports.TestRunLimiter = TestRunLimiter;
class TestContext {
    setUp() {
    }
    tearDown() {
    }
    areIdentical(expected, actual, message = '') {
        if (expected !== actual) {
            throw this.getError('areIdentical failed when given ' +
                this.printVariable(expected) + ' and ' + this.printVariable(actual), message);
        }
    }
    areNotIdentical(expected, actual, message = '') {
        if (expected === actual) {
            throw this.getError('areNotIdentical failed when given ' +
                this.printVariable(expected) + ' and ' + this.printVariable(actual), message);
        }
    }
    areCollectionsIdentical(expected, actual, message = '') {
        function resultToString(result) {
            var msg = '';
            while (result.length > 0) {
                msg = '[' + result.pop() + ']' + msg;
            }
            return msg;
        }
        var compareArray = (expected, actual, result) => {
            var indexString = '';
            if (expected === null) {
                if (actual !== null) {
                    indexString = resultToString(result);
                    throw this.getError('areCollectionsIdentical failed when array a' +
                        indexString + ' is null and b' +
                        indexString + ' is not null', message);
                }
                return; // correct: both are nulls
            }
            else if (actual === null) {
                indexString = resultToString(result);
                throw this.getError('areCollectionsIdentical failed when array a' +
                    indexString + ' is not null and b' +
                    indexString + ' is null', message);
            }
            if (expected.length !== actual.length) {
                indexString = resultToString(result);
                throw this.getError('areCollectionsIdentical failed when length of array a' +
                    indexString + ' (length: ' + expected.length + ') is different of length of array b' +
                    indexString + ' (length: ' + actual.length + ')', message);
            }
            for (var i = 0; i < expected.length; i++) {
                if ((expected[i] instanceof Array) && (actual[i] instanceof Array)) {
                    result.push(i);
                    compareArray(expected[i], actual[i], result);
                    result.pop();
                }
                else if (expected[i] !== actual[i]) {
                    result.push(i);
                    indexString = resultToString(result);
                    throw this.getError('areCollectionsIdentical failed when element a' +
                        indexString + ' (' + this.printVariable(expected[i]) + ') is different than element b' +
                        indexString + ' (' + this.printVariable(actual[i]) + ')', message);
                }
            }
            return;
        };
        compareArray(expected, actual, []);
    }
    areCollectionsNotIdentical(expected, actual, message = '') {
        try {
            this.areCollectionsIdentical(expected, actual);
        }
        catch (ex) {
            return;
        }
        throw this.getError('areCollectionsNotIdentical failed when both collections are identical', message);
    }
    isTrue(actual, message = '') {
        if (!actual) {
            throw this.getError('isTrue failed when given ' + this.printVariable(actual), message);
        }
    }
    isFalse(actual, message = '') {
        if (actual) {
            throw this.getError('isFalse failed when given ' + this.printVariable(actual), message);
        }
    }
    isTruthy(actual, message = '') {
        if (!actual) {
            throw this.getError('isTrue failed when given ' + this.printVariable(actual), message);
        }
    }
    isFalsey(actual, message = '') {
        if (actual) {
            throw this.getError('isFalse failed when given ' + this.printVariable(actual), message);
        }
    }
    throws(a, message = '', errorString = '') {
        var actual;
        if (typeof a === 'function') {
            actual = a;
        }
        else if (a.fn) {
            actual = a.fn;
            message = a.message;
            errorString = a.exceptionString;
        }
        var isThrown = false;
        try {
            actual();
        }
        catch (ex) {
            if (!errorString || ex.message === errorString) {
                isThrown = true;
            }
            if (errorString && ex.message !== errorString) {
                throw this.getError('different error string than supplied');
            }
        }
        if (!isThrown) {
            throw this.getError('did not throw an error', message || '');
        }
    }
    doesNotThrow(actual, message) {
        try {
            actual();
        }
        catch (ex) {
            throw this.getError('threw an error ' + ex, message || '');
        }
    }
    executesWithin(actual, timeLimit, message = null) {
        function getTime() {
            return window.performance.now();
        }
        function timeToString(value) {
            return Math.round(value * 100) / 100;
        }
        var startOfExecution = getTime();
        try {
            actual();
        }
        catch (ex) {
            throw this.getError('isExecuteTimeLessThanLimit fails when given code throws an exception: "' + ex + '"', message);
        }
        var executingTime = getTime() - startOfExecution;
        if (executingTime > timeLimit) {
            throw this.getError('isExecuteTimeLessThanLimit fails when execution time of given code (' + timeToString(executingTime) + ' ms) ' +
                'exceed the given limit(' + timeToString(timeLimit) + ' ms)', message);
        }
    }
    fail(message = '') {
        throw this.getError('fail', message);
    }
    getError(resultMessage, message = '') {
        if (message) {
            return new Error(resultMessage + '. ' + message);
        }
        return new Error(resultMessage);
    }
    static getNameOfClass(inputClass) {
        // see: https://www.stevefenton.co.uk/Content/Blog/Date/201304/Blog/Obtaining-A-Class-Name-At-Runtime-In-TypeScript/
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec(inputClass.constructor.toString());
        return (results && results.length > 1) ? results[1] : '';
    }
    printVariable(variable) {
        if (variable === null) {
            return '"null"';
        }
        if (typeof variable === 'object') {
            return '{object: ' + TestContext.getNameOfClass(variable) + '}';
        }
        return '{' + (typeof variable) + '} "' + variable + '"';
    }
}
exports.TestContext = TestContext;
class TestClass extends TestContext {
    parameterizeUnitTest(method, parametersArray) {
        method.parameters = parametersArray;
    }
}
exports.TestClass = TestClass;
class FakeFactory {
    static getFake(obj, ...implementations) {
        var fakeType = function () { };
        this.populateFakeType(fakeType, obj);
        var fake = new fakeType();
        var propertyNames = FunctionPropertyHelper.getAllPropertyNames(obj);
        for (var k = 0; k < propertyNames.length; k++) {
            fake[propertyNames[k]] = function () { console.log('Default fake called.'); };
        }
        var memberNameIndex = 0;
        var memberValueIndex = 1;
        for (var i = 0; i < implementations.length; i++) {
            var impl = implementations[i];
            fake[impl[memberNameIndex]] = impl[memberValueIndex];
        }
        return fake;
    }
    static populateFakeType(fake, toCopy) {
        let properties = FunctionPropertyHelper.getAllPropertyNames(toCopy);
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            fake[property] = toCopy[property];
        }
        var __ = function () {
            this.constructor = fake;
        };
        __.prototype = toCopy.prototype;
        fake.prototype = new __();
    }
}
exports.FakeFactory = FakeFactory;
class TestDefinition {
    constructor(testClass, name) {
        this.testClass = testClass;
        this.name = name;
    }
}
exports.TestDefinition = TestDefinition;
class TestDescription {
    constructor(testName, funcName, parameterSetNumber, message) {
        this.testName = testName;
        this.funcName = funcName;
        this.parameterSetNumber = parameterSetNumber;
        this.message = message;
    }
}
exports.TestDescription = TestDescription;
class FunctionPropertyHelper {
    static walkImpl(obj, results) {
        if (obj == null) {
            return;
        }
        const ownPropertiesOfObj = Object.getOwnPropertyNames(obj);
        ownPropertiesOfObj.forEach(mem => results.add(mem));
        const prototype = Object.getPrototypeOf(obj);
        if (prototype == null) {
            return null;
        }
        const propNames = Object.getOwnPropertyNames(prototype);
        propNames.forEach(mem => results.add(mem));
        this.walkImpl(obj.prototype, results);
        this.walkImpl(prototype, results);
    }
    static walk(obj) {
        const results = new Set();
        this.walkImpl(obj, results);
        return Array.from(results);
    }
    static getFunctionNames(type) {
        return this.walk(type)
            .filter(mem => {
            var method = type[mem];
            return method instanceof Function &&
                (method !== type &&
                    method.prototype !==
                        Object
                            .getPrototypeOf(type));
        });
    }
    static getAllPropertyNames(type) {
        let properties = this.walk(type);
        if (typeof type === "function") {
            var functionProps = this.walk(Function);
            return properties.filter(mem => !functionProps.some(funcProp => funcProp === mem));
        }
        return properties.filter(mem => {
            var method = type[mem];
            return method !== type &&
                method.prototype !==
                    Object
                        .getPrototypeOf(type);
        });
    }
}
exports.FunctionPropertyHelper = FunctionPropertyHelper;
//# sourceMappingURL=tsUnit.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isMac = () => {
    if (process
        && typeof process.platform === 'string'
        && process.platform.toLowerCase() === 'darwin') {
        return true;
    }
    else if (typeof navigator !== 'undefined'
        && typeof navigator.platform === 'string'
        && navigator.platform.toLowerCase().indexOf('mac') > -1) {
        return true;
    }
    else {
        return false;
    }
};
exports.isPc = () => {
    if (process
        && typeof process.platform === 'string'
        && process.platform.toLowerCase() === 'win32') {
        return true;
    }
    else if (typeof navigator !== 'undefined'
        && typeof navigator.platform === 'string'
        && navigator.platform.toLowerCase().indexOf('win') > -1) {
        return true;
    }
    else {
        return false;
    }
};
exports.isBrowser = () => {
    return typeof window !== 'undefined';
};
exports.isNode = () => {
    return typeof window === 'undefined' && typeof process !== 'undefined';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(1);
const isomorphicPath = __webpack_require__(7);
class PathSpec extends tsUnit.TestClass {
    testDefaultExport() {
        delete __webpack_require__.c[/*require.resolve*/(0)];
        process.__defineGetter__('platform', () => 'win32'); // stub platform call
        let path = __webpack_require__(0).default;
        this.areIdentical('\\', path.sep, 'default seperator should be win32 "\\" after in windows environment');
        this.areIdentical(';', path.delimiter, 'default delimiter should be win32 ";" after in windows environment');
        delete __webpack_require__.c[/*require.resolve*/(0)];
        process.__defineGetter__('platform', () => 'darwin'); // stub platform call
        path = __webpack_require__(0).default;
        this.areIdentical('/', path.sep, 'default seperator should be posix "/" after in mac environment');
        this.areIdentical(':', path.delimiter, 'default delimiter should be posix "/" after in mac environment');
    }
    testWin32Basename() {
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('C:\\temp\\myfile.html'), 'win32 basename should parse file name from windows path');
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('/temp/myfile.html'), 'win32 basename should parse file name from posix path');
    }
    testPosixBasename() {
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('C:\\temp\\myfile.html'), 'posix basename should not parse windows path');
        this.areIdentical('myfile.html', isomorphicPath.win32.basename('/temp/myfile.html'), 'posix basename should parse file name from posix path');
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
        this.areIdentical('C:\\temp', isomorphicPath.win32.dirname('C:\\temp\\myfile.html'), 'win32 dirname should parse parent directory path from windows path');
        this.areIdentical('/temp', isomorphicPath.win32.dirname('/temp/myfile.html'), 'win32 dirname should parse parent directory path from posix path');
    }
    testPosixDirname() {
        this.areIdentical('C:\\temp', isomorphicPath.win32.dirname('C:\\temp\\myfile.html'), 'posix basename should not parse windows path');
        this.areIdentical('/temp', isomorphicPath.win32.dirname('/temp/myfile.html'), 'posix dirname should parse parent directory path from posix path');
    }
    testWin32Extname() {
        this.areIdentical('.html', isomorphicPath.win32.extname('C:\\temp\\myfile.html'), 'win32 extname should parse extension from windows path');
        this.areIdentical('.html', isomorphicPath.win32.extname('/temp/myfile.html'), 'win32 extname should parse parent extension path from posix path');
        this.areIdentical('.js', isomorphicPath.win32.extname('C:\\temp\\myfile.js'), 'win32 extname should parse extension from windows path');
        this.areIdentical('.js', isomorphicPath.win32.extname('/temp/myfile.html.js'), 'win32 extname should parse parent extension path from posix path');
        this.areIdentical('.js', isomorphicPath.win32.extname('C:\\temp\\myfile.html.js'), 'win32 extname should parse pre-fixed extension from windows path');
        this.areIdentical('.js', isomorphicPath.win32.extname('/temp/myfile.html.html.js'), 'win32 extname should parse pre-fixed parent extension path from posix path');
    }
    testPosixExtname() {
        this.areIdentical('.html', isomorphicPath.posix.extname('/temp/myfile.html'), 'posix extname should parse parent extension path from posix path');
        this.areIdentical('.js', isomorphicPath.posix.extname('/temp/myfile.html.js'), 'posix extname should parse parent extension path from posix path');
        this.areIdentical('.js', isomorphicPath.posix.extname('/temp/myfile.html.html.js'), 'posix extname should parse pre-fixed parent extension path from posix path');
    }
    testWin32Format() {
        this.areIdentical('/home/user/dir\\file.txt', isomorphicPath.win32.format({
            dir: '/home/user/dir',
            base: 'file.txt',
        }), 'win32 format should not format posix ParsedPath');
        this.areIdentical('path\\dir\\file.txt', isomorphicPath.win32.format({
            root: 'C:\\',
            dir: 'path\\dir',
            base: 'file.txt',
        }), 'win32 format should format windows ParsedPath with root and dir');
        this.areIdentical('C:\\path\\dir\\file.txt', isomorphicPath.win32.format({
            dir: 'C:\\path\\dir',
            base: 'file.txt',
        }), 'win32 format should format windows ParsedPath with dir');
    }
    testPosixFormat() {
        this.areIdentical('C:\\path\\dir/file.txt', isomorphicPath.posix.format({
            dir: 'C:\\path\\dir',
            base: 'file.txt',
        }), 'posix format should not format windows ParsedPath');
        this.areIdentical('/home/user/dir/file.txt', isomorphicPath.posix.format({
            root: '/ignored',
            dir: '/home/user/dir',
            base: 'file.txt',
        }), 'posix format should format posix ParsedPath with root and dir');
        this.areIdentical('/home/user/dir/file.txt', isomorphicPath.posix.format({
            dir: '/home/user/dir',
            base: 'file.txt',
        }), 'posix format should format posix ParsedPath with dir');
    }
    testWin32Absolute() {
        this.areIdentical(true, isomorphicPath.win32.isAbsolute('//server'), 'win32 isAbsolute should return true for posix absolute path');
        this.areIdentical(true, isomorphicPath.win32.isAbsolute('\\\\server'), 'win32 isAbsolute should return true for windows absolute path');
        this.areIdentical(true, isomorphicPath.win32.isAbsolute('C:/foo/..'), 'win32 isAbsolute should return true for windows absolute path');
        this.areIdentical(true, isomorphicPath.win32.isAbsolute('C:\\foo\\..'), 'win32 isAbsolute should return true for windows absolute path');
        this.areIdentical(false, isomorphicPath.win32.isAbsolute('bar\\baz'), 'win32 isAbsolute should return false for windows relative path');
        this.areIdentical(false, isomorphicPath.win32.isAbsolute('bar/baz'), 'win32 isAbsolute should return true for relative posix path');
        this.areIdentical(false, isomorphicPath.win32.isAbsolute('.'), 'win32 isAbsolute should return false for relative posix operator');
    }
    testPosixAbsolute() {
        this.areIdentical(true, isomorphicPath.posix.isAbsolute('//server'), 'posix isAbsolute should return true for posix absolute path');
        this.areIdentical(true, isomorphicPath.posix.isAbsolute('/baz/..'), 'posix isAbsolute should return true for posix absolute path with relative operator suffix');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('\\\\server'), 'posix isAbsolute should return false for windows absolute path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('C:/foo/..'), 'posix isAbsolute should return false for windows absolute path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('C:\\foo\\..'), 'posix isAbsolute should return false for windows absolute path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('bar\\baz'), 'win32 isAbsolute should return false for windows relative path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('bar/baz'), 'win32 isAbsolute should return true for relative posix path');
        this.areIdentical(false, isomorphicPath.posix.isAbsolute('.'), 'win32 isAbsolute should return true for relative posix operator');
    }
    testWin32Join() {
        this.areIdentical('C:\\foo\\bar\\baz\\asdf', isomorphicPath.win32.join('C:\\foo', 'bar', 'baz\\asdf', 'quux', '..'), 'win32 join should return joined windows path given windows fragments');
        this.areIdentical('\\foo\\bar\\baz\\asdf', isomorphicPath.win32.join('/foo', 'bar', 'baz/asdf', 'quux', '..'), 'win32 join should return joined windows path given posix fragments');
    }
    testPosixJoin() {
        this.areIdentical('\\foo/bar/baz\\asdf', isomorphicPath.posix.join('\\foo', 'bar', 'baz\\asdf', 'quux', '..'), 'posix join should not return joined posix path given windows fragments');
        this.areIdentical('/foo/bar/baz/asdf', isomorphicPath.posix.join('/foo', 'bar', 'baz/asdf', 'quux', '..'), 'posix join should return joined posix path');
    }
    testWin32Normalize() {
        this.areIdentical('C:\\temp\\foo\\bar', isomorphicPath.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'), 'win32 should normalize mixed path to windows seperator');
        this.areIdentical('C:\\temp\\foo\\', isomorphicPath.win32.normalize('C:\\temp\\\\foo\\bar\\..\\'), 'win32 should normalize windows path to windows seperator');
        this.areIdentical('\\foo\\bar\\baz\\asdf', isomorphicPath.win32.normalize('/foo/bar//baz/asdf/quux/..'), 'wind32 should normalize posix path to windows seperator');
    }
    testPosixNormalize() {
        this.areIdentical('C:\\temp\\\\foo\\bar\\..\\', isomorphicPath.posix.normalize('C:\\temp\\\\foo\\bar\\..\\'), 'posix should not normalize windows path');
        this.areIdentical('/foo/bar/baz/asdf', isomorphicPath.posix.normalize('/foo/bar//baz/asdf/quux/..'), 'posix should normalize posix path to posix seperator');
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
        this.areIdentical('C:\\foo\\bar\\baz', isomorphicPath.win32.resolve('C:\\foo\\bar', '.\\baz'), 'win32 should resolve windows path');
        this.areIdentical('\\foo\\bar\\baz', isomorphicPath.win32.resolve('/foo/bar', './baz'), 'win32 should resolve posix path to windows format');
    }
    testPosixResolve() {
        this.areNotIdentical('C:\\foo\\bar/.\\baz', isomorphicPath.posix.resolve('C:\\foo\\bar', '.\\baz'), 'posix should not resolve windows path');
        this.areIdentical('/foo/bar/baz', isomorphicPath.posix.resolve('/foo/bar', './baz'), 'posix should resolve posix path');
    }
    testWin32Relative() {
        this.areIdentical('..\\..\\impl\\bbb', isomorphicPath.win32.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'), 'win32 should relative windows path');
        this.areIdentical('..\\..\\impl\\bbb', isomorphicPath.win32.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'), 'win32 should relative posix path to windows format');
    }
    testPosixRelative() {
        this.areIdentical('../.\\baz', isomorphicPath.posix.relative('C:\\foo\\bar', '.\\baz'), 'posix should not relative windows path');
        this.areIdentical('../../impl/bbb', isomorphicPath.posix.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'), 'posix should relative posix path');
    }
}
exports.PathSpec = PathSpec;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(1);
const platform_1 = __webpack_require__(3);
class PlatformSpec extends tsUnit.TestClass {
    testOs() {
        process.__defineGetter__('platform', () => 'win32'); //stub platform call
        this.isTrue(platform_1.isPc(), 'isPc should return true for windows platform id: "win32"');
        this.isFalse(platform_1.isMac(), 'isMac should return false for windows platform id: "win32"');
        process.__defineGetter__('platform', () => 'darwin'); //stub platform call
        this.isFalse(platform_1.isPc(), 'isPc should return false for mac platform id: "darwin"');
        this.isTrue(platform_1.isMac(), 'isMac should return true for mac platform id: "darwin"');
    }
    testEnv() {
        this.isTrue(platform_1.isNode(), 'isNode should return true for node spec');
        this.isFalse(platform_1.isBrowser(), 'isBrowser should return false for browser spec');
    }
}
exports.PlatformSpec = PlatformSpec;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.




var isWindows = process.platform === 'win32';
var util = __webpack_require__(12);


// resolves . and .. elements in a path array with directory names there
// must be no slashes or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  var res = [];
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];

    // ignore empty parts
    if (!p || p === '.')
      continue;

    if (p === '..') {
      if (res.length && res[res.length - 1] !== '..') {
        res.pop();
      } else if (allowAboveRoot) {
        res.push('..');
      }
    } else {
      res.push(p);
    }
  }

  return res;
}

// returns an array with empty elements removed from either end of the input
// array or the original array if no elements need to be removed
function trimArray(arr) {
  var lastIndex = arr.length - 1;
  var start = 0;
  for (; start <= lastIndex; start++) {
    if (arr[start])
      break;
  }

  var end = lastIndex;
  for (; end >= 0; end--) {
    if (arr[end])
      break;
  }

  if (start === 0 && end === lastIndex)
    return arr;
  if (start > end)
    return [];
  return arr.slice(start, end + 1);
}

// Regex to split a windows path into three parts: [*, device, slash,
// tail] windows-only
var splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;

// Regex to split the tail part of the above into [*, dir, basename, ext]
var splitTailRe =
    /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};

// Function to split a filename into [root, dir, basename, ext]
function win32SplitPath(filename) {
  // Separate device+slash from tail
  var result = splitDeviceRe.exec(filename),
      device = (result[1] || '') + (result[2] || ''),
      tail = result[3] || '';
  // Split the tail into dir, basename and extension
  var result2 = splitTailRe.exec(tail),
      dir = result2[1],
      basename = result2[2],
      ext = result2[3];
  return [device, dir, basename, ext];
}

function win32StatPath(path) {
  var result = splitDeviceRe.exec(path),
      device = result[1] || '',
      isUnc = !!device && device[1] !== ':';
  return {
    device: device,
    isUnc: isUnc,
    isAbsolute: isUnc || !!result[2], // UNC paths are always absolute
    tail: result[3]
  };
}

function normalizeUNCRoot(device) {
  return '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
}

// path.resolve([from ...], to)
win32.resolve = function() {
  var resolvedDevice = '',
      resolvedTail = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1; i--) {
    var path;
    if (i >= 0) {
      path = arguments[i];
    } else if (!resolvedDevice) {
      path = process.cwd();
    } else {
      // Windows has the concept of drive-specific current working
      // directories. If we've resolved a drive letter but not yet an
      // absolute path, get cwd for that drive. We're sure the device is not
      // an unc path at this points, because unc paths are always absolute.
      path = process.env['=' + resolvedDevice];
      // Verify that a drive-local cwd was found and that it actually points
      // to our drive. If not, default to the drive's root.
      if (!path || path.substr(0, 3).toLowerCase() !==
          resolvedDevice.toLowerCase() + '\\') {
        path = resolvedDevice + '\\';
      }
    }

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    var result = win32StatPath(path),
        device = result.device,
        isUnc = result.isUnc,
        isAbsolute = result.isAbsolute,
        tail = result.tail;

    if (device &&
        resolvedDevice &&
        device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      // This path points to another device so it is not applicable
      continue;
    }

    if (!resolvedDevice) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = tail + '\\' + resolvedTail;
      resolvedAbsolute = isAbsolute;
    }

    if (resolvedDevice && resolvedAbsolute) {
      break;
    }
  }

  // Convert slashes to backslashes when `resolvedDevice` points to an UNC
  // root. Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    resolvedDevice = normalizeUNCRoot(resolvedDevice);
  }

  // At this point the path should be resolved to a full absolute path,
  // but handle relative paths to be safe (might happen when process.cwd()
  // fails)

  // Normalize the tail path
  resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/),
                                !resolvedAbsolute).join('\\');

  return (resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail) ||
         '.';
};


win32.normalize = function(path) {
  var result = win32StatPath(path),
      device = result.device,
      isUnc = result.isUnc,
      isAbsolute = result.isAbsolute,
      tail = result.tail,
      trailingSlash = /[\\\/]$/.test(tail);

  // Normalize the tail path
  tail = normalizeArray(tail.split(/[\\\/]+/), !isAbsolute).join('\\');

  if (!tail && !isAbsolute) {
    tail = '.';
  }
  if (tail && trailingSlash) {
    tail += '\\';
  }

  // Convert slashes to backslashes when `device` points to an UNC root.
  // Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    device = normalizeUNCRoot(device);
  }

  return device + (isAbsolute ? '\\' : '') + tail;
};


win32.isAbsolute = function(path) {
  return win32StatPath(path).isAbsolute;
};

win32.join = function() {
  var paths = [];
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!util.isString(arg)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (arg) {
      paths.push(arg);
    }
  }

  var joined = paths.join('\\');

  // Make sure that the joined path doesn't start with two slashes, because
  // normalize() will mistake it for an UNC path then.
  //
  // This step is skipped when it is very clear that the user actually
  // intended to point at an UNC path. This is assumed when the first
  // non-empty string arguments starts with exactly two slashes followed by
  // at least one more non-slash character.
  //
  // Note that for normalize() to treat a path as an UNC path it needs to
  // have at least 2 components, so we don't filter for that here.
  // This means that the user can use join to construct UNC paths from
  // a server name and a share name; for example:
  //   path.join('//server', 'share') -> '\\\\server\\share\')
  if (!/^[\\\/]{2}[^\\\/]/.test(paths[0])) {
    joined = joined.replace(/^[\\\/]{2,}/, '\\');
  }

  return win32.normalize(joined);
};


// path.relative(from, to)
// it will solve the relative path from 'from' to 'to', for instance:
// from = 'C:\\orandea\\test\\aaa'
// to = 'C:\\orandea\\impl\\bbb'
// The output of the function should be: '..\\..\\impl\\bbb'
win32.relative = function(from, to) {
  from = win32.resolve(from);
  to = win32.resolve(to);

  // windows is not case sensitive
  var lowerFrom = from.toLowerCase();
  var lowerTo = to.toLowerCase();

  var toParts = trimArray(to.split('\\'));

  var lowerFromParts = trimArray(lowerFrom.split('\\'));
  var lowerToParts = trimArray(lowerTo.split('\\'));

  var length = Math.min(lowerFromParts.length, lowerToParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (lowerFromParts[i] !== lowerToParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  if (samePartsLength == 0) {
    return to;
  }

  var outputParts = [];
  for (var i = samePartsLength; i < lowerFromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('\\');
};


win32._makeLong = function(path) {
  // Note: this will *probably* throw somewhere.
  if (!util.isString(path))
    return path;

  if (!path) {
    return '';
  }

  var resolvedPath = win32.resolve(path);

  if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
    // path is local filesystem path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\' + resolvedPath;
  } else if (/^\\\\[^?.]/.test(resolvedPath)) {
    // path is network UNC path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\UNC\\' + resolvedPath.substring(2);
  }

  return path;
};


win32.dirname = function(path) {
  var result = win32SplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


win32.basename = function(path, ext) {
  var f = win32SplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


win32.extname = function(path) {
  return win32SplitPath(path)[3];
};


win32.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir;
  var base = pathObject.base || '';
  if (!dir) {
    return base;
  }
  if (dir[dir.length - 1] === win32.sep) {
    return dir + base;
  }
  return dir + win32.sep + base;
};


win32.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = win32SplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


win32.sep = '\\';
win32.delimiter = ';';


// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var posix = {};


function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}


// path.resolve([from ...], to)
// posix version
posix.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path[0] === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(resolvedPath.split('/'),
                                !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
posix.normalize = function(path) {
  var isAbsolute = posix.isAbsolute(path),
      trailingSlash = path && path[path.length - 1] === '/';

  // Normalize the path
  path = normalizeArray(path.split('/'), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
posix.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
posix.join = function() {
  var path = '';
  for (var i = 0; i < arguments.length; i++) {
    var segment = arguments[i];
    if (!util.isString(segment)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (segment) {
      if (!path) {
        path += segment;
      } else {
        path += '/' + segment;
      }
    }
  }
  return posix.normalize(path);
};


// path.relative(from, to)
// posix version
posix.relative = function(from, to) {
  from = posix.resolve(from).substr(1);
  to = posix.resolve(to).substr(1);

  var fromParts = trimArray(from.split('/'));
  var toParts = trimArray(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};


posix._makeLong = function(path) {
  return path;
};


posix.dirname = function(path) {
  var result = posixSplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


posix.basename = function(path, ext) {
  var f = posixSplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


posix.extname = function(path) {
  return posixSplitPath(path)[3];
};


posix.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir ? pathObject.dir + posix.sep : '';
  var base = pathObject.base || '';
  return dir + base;
};


posix.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = posixSplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';

  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


posix.sep = '/';
posix.delimiter = ':';


if (isWindows)
  module.exports = win32;
else /* posix */
  module.exports = posix;

module.exports.posix = posix;
module.exports.win32 = win32;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(0);
const path_2 = __webpack_require__(0);
exports.win32 = path_2.win32;
exports.posix = path_2.posix;
exports.ParsedPath = path_2.ParsedPath;
exports.default = path_1.default;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = (from, to) => {
    throw 'method unsupported in isomorphic-path';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(1);
const Path_Node_spec_1 = __webpack_require__(4);
const Platform_Node_spec_1 = __webpack_require__(5);
const IsomorphicPathTests = [
    Path_Node_spec_1.PathSpec,
    Platform_Node_spec_1.PlatformSpec,
];
const test = new tsUnit.Test(IsomorphicPathTests);
const result = test.run();
// tslint:disable-next-line
console.log(result.getTapResults());


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(11));
//# sourceMappingURL=TsUnitModule.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit_1 = __webpack_require__(2);
var tsUnit_2 = __webpack_require__(2);
exports.Test = tsUnit_2.Test;
exports.TestContext = tsUnit_2.TestContext;
exports.TestClass = tsUnit_2.TestClass;
exports.FakeFactory = tsUnit_2.FakeFactory;
exports.TestDescription = tsUnit_2.TestDescription;
exports.TestDefinition = tsUnit_2.TestDefinition;
class TestAsync extends tsUnit_1.Test {
    runAll(tests, testRunLimiter) {
        let thisTest = tests[0];
        var testClass = thisTest.testClass;
        var dynamicTestClass = testClass;
        var testsGroupName = thisTest.name;
        var propertyNames = tsUnit_1.FunctionPropertyHelper.getFunctionNames(testClass);
        let functions = [];
        for (var j = 0; j < propertyNames.length; j++) {
            let unitTestName = propertyNames[j];
            if (!this.isReservedFunctionName(unitTestName) &&
                !(unitTestName.substring(0, this.privateMemberPrefix.length) === this.privateMemberPrefix) &&
                !(typeof dynamicTestClass[unitTestName] !== 'function') &&
                (!testRunLimiter || testRunLimiter.isTestActive(unitTestName))) {
                functions.push(unitTestName);
            }
        }
        let remainingTests = tests.slice(1);
        var promise = this.runAllFunctions(thisTest, functions, testRunLimiter);
        if (remainingTests.length) {
            return promise.then(() => this.runAll(remainingTests, testRunLimiter));
        }
        return promise;
    }
    runAllFunctions(thisTest, functionNames, testRunLimiter) {
        let unitTestName = functionNames[0];
        let remainingFunctions = functionNames.slice(1);
        var testClass = thisTest.testClass;
        var dynamicTestClass = testClass;
        var testsGroupName = thisTest.name;
        var promise;
        if (typeof dynamicTestClass[unitTestName].parameters !== 'undefined') {
            let parameters = dynamicTestClass[unitTestName].parameters;
            promise = this.runAllParameters(thisTest, unitTestName, 0, testRunLimiter);
        }
        else {
            promise = this.runSingleTestAsync(testClass, unitTestName, testsGroupName);
        }
        if (remainingFunctions.length > 0) {
            promise = promise.then(() => this.runAllFunctions(thisTest, remainingFunctions, testRunLimiter));
        }
        promise.then((x) => {
            testClass.tearDown && testClass.tearDown();
            return x;
        }, (err) => {
            testClass.tearDown && testClass.tearDown();
            throw err;
        });
        return promise;
    }
    runAllParameters(thisTest, unitTestName, parameterIndex, testRunLimiter) {
        let testClass = thisTest.testClass;
        let dynamicTestClass = testClass;
        let testsGroupName = thisTest.name;
        let parameters = dynamicTestClass[unitTestName].parameters;
        let maxIndex = parameters.length - 1;
        var index = parameterIndex;
        if (testRunLimiter) {
            while (index < parameters.length && !testRunLimiter.isParametersSetActive(index)) {
                ++index;
            }
        }
        if (index < parameters.length) {
            return this.runSingleTestAsync(testClass, unitTestName, testsGroupName, parameters, index)
                .then(() => this.runAllParameters(thisTest, unitTestName, index + 1, testRunLimiter));
        }
        return Promise.resolve(this);
    }
    runSingleTestAsync(testClass, unitTestName, testsGroupName, parameters = null, parameterSetIndex = null) {
        // running everything inside .then saves us a try/catch
        return Promise.resolve().then(() => {
            testClass.setUp && testClass.setUp();
            var dynamicTestClass = testClass;
            var args = (parameterSetIndex !== null) ? parameters[parameterSetIndex] : null;
            return dynamicTestClass[unitTestName].apply(testClass, args);
        }).then(() => {
            this.passes.push(new tsUnit_1.TestDescription(testsGroupName, unitTestName, parameterSetIndex, 'OK'));
            return this;
        }, (err) => {
            this.errors.push(new tsUnit_1.TestDescription(testsGroupName, unitTestName, parameterSetIndex, err.toString()));
            return this;
        });
    }
    runAsync(testRunLimiter = null) {
        var parameters = null;
        var testContext = new tsUnit_1.TestContext();
        if (testRunLimiter == null) {
            testRunLimiter = this.testRunLimiter;
        }
        var tests = this.tests;
        if (testRunLimiter) {
            tests = tests.filter((x) => testRunLimiter.isTestsGroupActive(x.name));
        }
        return this.runAll(tests, testRunLimiter);
    }
    run() {
        console.log("use runAsync");
        throw new Error("use runAsync");
    }
}
exports.TestAsync = TestAsync;
//# sourceMappingURL=tsUnitAsync.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZGRiY2M4MWU2NDgyMzcwZTA2ZCIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3RzLXVuaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvcGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9QYXRoLk5vZGUuc3BlYy50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L1BsYXRmb3JtLk5vZGUuc3BlYy50cyIsIndlYnBhY2s6Ly8vLi9+L3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9SdW5uZXIuTm9kZS50cyIsIndlYnBhY2s6Ly8vLi9+L3RzLXVuaXQvZGlzdC9zcmMvVHNVbml0TW9kdWxlLmpzIiwid2VicGFjazovLy8uL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXRBc3luYy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtB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O0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Qzs7Ozs7O0FDL0dBLGlDIiwiZmlsZSI6Im5vZGVSdW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInV0aWxcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibm9kZVJ1bm5lclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInV0aWxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5vZGVSdW5uZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJ1dGlsXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdkZGJjYzgxZTY0ODIzNzBlMDZkIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvcGF0aC5kLnRzXCIgLz5cbmltcG9ydCB7IHdpbjMyIGFzIHdpbjMyQmFzZSwgcG9zaXggYXMgcG9zaXhCYXNlIH0gZnJvbSAncGF0aC9wYXRoJztcbmltcG9ydCB7IGlzUGMsIGlzQnJvd3NlciB9IGZyb20gJy4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vbm9vcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkUGF0aCB7XG4gICAgcm9vdDogc3RyaW5nO1xuICAgIGRpcjogc3RyaW5nO1xuICAgIGJhc2U6IHN0cmluZztcbiAgICBleHQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJUGF0aCB7XG4gIG5vcm1hbGl6ZShwOiBzdHJpbmcpOiBzdHJpbmc7XG4gIGpvaW4oLi4ucGF0aHM6IGFueVtdKTogc3RyaW5nO1xuICByZXNvbHZlKC4uLnBhdGhTZWdtZW50czogYW55W10pOiBzdHJpbmc7XG4gIGlzQWJzb2x1dGUocDogc3RyaW5nKTogYm9vbGVhbjtcbiAgcmVsYXRpdmUoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKTogc3RyaW5nO1xuICBkaXJuYW1lKHA6IHN0cmluZyk6IHN0cmluZztcbiAgYmFzZW5hbWUocDogc3RyaW5nLCBleHQ/OiBzdHJpbmcpOiBzdHJpbmc7XG4gIGV4dG5hbWUocDogc3RyaW5nKTogc3RyaW5nO1xuICBzZXA6IHN0cmluZztcbiAgZGVsaW1pdGVyOiBzdHJpbmc7XG4gIHBhcnNlKHA6IHN0cmluZyk6IFBhcnNlZFBhdGg7XG4gIGZvcm1hdChwUDogUGFyc2VkUGF0aCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElCYXNlUGF0aCB7XG4gIHdpbjMyOiBJUGF0aDtcbiAgcG9zaXg6IElQYXRoO1xufVxuXG5cbmNvbnN0IHVuc3VwcG9ydGVkTWV0aG9kcyA9IHtcbiAgcmVzb2x2ZTogbm9vcCxcbiAgcmVsYXRpdmU6IG5vb3Bcbn07XG5cbmNvbnN0IHdpbjMyUnVudGltZTogSVBhdGggPSAgT2JqZWN0LmFzc2lnbih7fSwgd2luMzJCYXNlLCBpc0Jyb3dzZXIoKSA/IHVuc3VwcG9ydGVkTWV0aG9kcyA6IHt9KTtcbmNvbnN0IHBvc2l4UnVudGltZTogSVBhdGggPSBPYmplY3QuYXNzaWduKHt9LCBwb3NpeEJhc2UsICBpc0Jyb3dzZXIoKSA/IHVuc3VwcG9ydGVkTWV0aG9kcyA6IHt9KTtcbmNvbnN0IGJhc2VQYXRoOiBJQmFzZVBhdGggPSB7XG4gIHdpbjMyOiB3aW4zMlJ1bnRpbWUsXG4gIHBvc2l4OiBwb3NpeFJ1bnRpbWVcbn07XG5jb25zdCBkZWZhdWx0RXhwb3J0OiBJUGF0aCAmIElCYXNlUGF0aCA9IE9iamVjdC5hc3NpZ24oXG4gIHt9LFxuICBpc1BjKCkgPyB3aW4zMlJ1bnRpbWUgOiBwb3NpeFJ1bnRpbWUsXG4gIGJhc2VQYXRoXG4pO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdEV4cG9ydDtcbmV4cG9ydCB7IHdpbjMyUnVudGltZSBhcyB3aW4zMiwgcG9zaXhSdW50aW1lIGFzIHBvc2l4IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvcGF0aC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NyYy9Uc1VuaXRNb2R1bGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuLyogdHNVbml0IChjKSBDb3B5cmlnaHQgMjAxMi0yMDE1IFN0ZXZlIEZlbnRvbiwgbGljZW5zZWQgdW5kZXIgQXBhY2hlIDIuMCBodHRwczovL2dpdGh1Yi5jb20vU3RldmUtRmVudG9uL3RzVW5pdCAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVGVzdCB7XG4gICAgY29uc3RydWN0b3IoLi4udGVzdE1vZHVsZXMpIHtcbiAgICAgICAgdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4ID0gJ18nO1xuICAgICAgICB0aGlzLnBhc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLnRlc3RzID0gW107XG4gICAgICAgIHRoaXMucmVzZXJ2ZWRNZXRob2ROYW1lQ29udGFpbmVyID0gbmV3IFRlc3RDbGFzcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVRlc3RMaW1pdGVyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0ZXN0TW9kdWxlID0gdGVzdE1vZHVsZXNbaV07XG4gICAgICAgICAgICBpZiAodGVzdE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHRlc3RNb2R1bGVbXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVzdENsYXNzKG5ldyB0ZXN0TW9kdWxlLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gdGVzdE1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRlc3RDbGFzcyhuZXcgdGVzdE1vZHVsZVtwcm9wXSwgcHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZFRlc3RDbGFzcyh0ZXN0Q2xhc3MsIG5hbWUgPSAnVGVzdHMnKSB7XG4gICAgICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdERlZmluaXRpb24odGVzdENsYXNzLCBuYW1lKSk7XG4gICAgfVxuICAgIHJ1bih0ZXN0UnVuTGltaXRlciA9IG51bGwpIHtcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBudWxsO1xuICAgICAgICB2YXIgdGVzdENvbnRleHQgPSBuZXcgVGVzdENvbnRleHQoKTtcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlc3RSdW5MaW1pdGVyID0gdGhpcy50ZXN0UnVuTGltaXRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGVzdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB0ZXN0Q2xhc3MgPSB0aGlzLnRlc3RzW2ldLnRlc3RDbGFzcztcbiAgICAgICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIHRlc3RzR3JvdXBOYW1lID0gdGhpcy50ZXN0c1tpXS5uYW1lO1xuICAgICAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyICYmICF0ZXN0UnVuTGltaXRlci5pc1Rlc3RzR3JvdXBBY3RpdmUodGVzdHNHcm91cE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0RnVuY3Rpb25OYW1lcyh0ZXN0Q2xhc3MpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRUZXN0TmFtZSA9IHByb3BlcnR5TmFtZXNbal07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXNlcnZlZEZ1bmN0aW9uTmFtZSh1bml0VGVzdE5hbWUpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh1bml0VGVzdE5hbWUuc3Vic3RyaW5nKDAsIHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeC5sZW5ndGgpID09PSB0aGlzLnByaXZhdGVNZW1iZXJQcmVmaXgpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0eXBlb2YgZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICB8fCAodGVzdFJ1bkxpbWl0ZXIgJiYgIXRlc3RSdW5MaW1pdGVyLmlzVGVzdEFjdGl2ZSh1bml0VGVzdE5hbWUpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW1ldGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UnVuTGltaXRlciAmJiAhdGVzdFJ1bkxpbWl0ZXIuaXNQYXJhbWV0ZXJzU2V0QWN0aXZlKHBhcmFtZXRlckluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5TaW5nbGVUZXN0KHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycywgcGFyYW1ldGVySW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1blNpbmdsZVRlc3QodGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dSZXN1bHRzKHRhcmdldCkge1xuICAgICAgICB2YXIgZWxlbTtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSB0YXJnZXQ7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGFydGljbGU+JyArXG4gICAgICAgICAgICAnPGgxPicgKyB0aGlzLmdldFRlc3RSZXN1bHQoKSArICc8L2gxPicgK1xuICAgICAgICAgICAgJzxwPicgKyB0aGlzLmdldFRlc3RTdW1tYXJ5KCkgKyAnPC9wPicgK1xuICAgICAgICAgICAgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdENsZWFuZXIoKSArXG4gICAgICAgICAgICAnPHNlY3Rpb24gaWQ9XCJ0c0ZhaWxcIj4nICtcbiAgICAgICAgICAgICc8aDI+RXJyb3JzPC9oMj4nICtcbiAgICAgICAgICAgICc8dWwgY2xhc3M9XCJiYWRcIj4nICsgdGhpcy5nZXRUZXN0UmVzdWx0TGlzdCh0aGlzLmVycm9ycykgKyAnPC91bD4nICtcbiAgICAgICAgICAgICc8L3NlY3Rpb24+JyArXG4gICAgICAgICAgICAnPHNlY3Rpb24gaWQ9XCJ0c09rYXlcIj4nICtcbiAgICAgICAgICAgICc8aDI+UGFzc2luZyBUZXN0czwvaDI+JyArXG4gICAgICAgICAgICAnPHVsIGNsYXNzPVwiZ29vZFwiPicgKyB0aGlzLmdldFRlc3RSZXN1bHRMaXN0KHRoaXMucGFzc2VzKSArICc8L3VsPicgK1xuICAgICAgICAgICAgJzwvc2VjdGlvbj4nICtcbiAgICAgICAgICAgICc8L2FydGljbGU+JyArXG4gICAgICAgICAgICB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0Q2xlYW5lcigpO1xuICAgICAgICBlbGVtLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0VGFwUmVzdWx0cygpIHtcbiAgICAgICAgdmFyIG5ld0xpbmUgPSAnXFxyXFxuJztcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gJzEuLicgKyAodGhpcy5wYXNzZXMubGVuZ3RoICsgdGhpcy5lcnJvcnMubGVuZ3RoKS50b1N0cmluZygpICsgbmV3TGluZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gJ25vdCBvayAnICsgdGhpcy5lcnJvcnNbaV0ubWVzc2FnZSArICcgJyArIHRoaXMuZXJyb3JzW2ldLnRlc3ROYW1lICsgJzonICsgdGhpcy5lcnJvcnNbaV0uZnVuY05hbWUgKyBuZXdMaW5lO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBsYXRlICs9ICdvayAnICsgdGhpcy5wYXNzZXNbaV0udGVzdE5hbWUgKyAnOicgKyB0aGlzLnBhc3Nlc1tpXS5mdW5jTmFtZSArIG5ld0xpbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBjcmVhdGVUZXN0TGltaXRlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGVzdFJ1bkxpbWl0ZXIgPSBuZXcgVGVzdFJ1bkxpbWl0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHsgfVxuICAgIH1cbiAgICBpc1Jlc2VydmVkRnVuY3Rpb25OYW1lKGZ1bmN0aW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlclxuICAgICAgICAgICAgLmdldEZ1bmN0aW9uTmFtZXModGhpcy5yZXNlcnZlZE1ldGhvZE5hbWVDb250YWluZXIpXG4gICAgICAgICAgICAuc29tZShtZW0gPT4gbWVtID09PSBmdW5jdGlvbk5hbWUpO1xuICAgIH1cbiAgICBydW5TaW5nbGVUZXN0KHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycyA9IG51bGwsIHBhcmFtZXRlclNldEluZGV4ID0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHRlc3RDbGFzc1snc2V0VXAnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGVzdENsYXNzWydzZXRVcCddKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSAocGFyYW1ldGVyU2V0SW5kZXggIT09IG51bGwpID8gcGFyYW1ldGVyc1twYXJhbWV0ZXJTZXRJbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLmFwcGx5KHRlc3RDbGFzcywgYXJncyk7XG4gICAgICAgICAgICB0aGlzLnBhc3Nlcy5wdXNoKG5ldyBUZXN0RGVzY3JpcHRpb24odGVzdHNHcm91cE5hbWUsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVyU2V0SW5kZXgsICdPSycpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBUZXN0RGVzY3JpcHRpb24odGVzdHNHcm91cE5hbWUsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVyU2V0SW5kZXgsIGVyci50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXN0Q2xhc3NbJ3RlYXJEb3duJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRlc3RDbGFzc1sndGVhckRvd24nXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFRlc3RSZXN1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5sZW5ndGggPT09IDAgPyAnVGVzdCBQYXNzZWQnIDogJ1Rlc3QgRmFpbGVkJztcbiAgICB9XG4gICAgZ2V0VGVzdFN1bW1hcnkoKSB7XG4gICAgICAgIHJldHVybiAnVG90YWwgdGVzdHM6IDxzcGFuIGlkPVwidHNVbml0VG90YWxDb3V0XCI+JyArICh0aGlzLnBhc3Nlcy5sZW5ndGggKyB0aGlzLmVycm9ycy5sZW5ndGgpLnRvU3RyaW5nKCkgKyAnPC9zcGFuPi4gJyArXG4gICAgICAgICAgICAnUGFzc2VkIHRlc3RzOiA8c3BhbiBpZD1cInRzVW5pdFBhc3NDb3VudFwiIGNsYXNzPVwiZ29vZFwiPicgKyB0aGlzLnBhc3Nlcy5sZW5ndGggKyAnPC9zcGFuPi4gJyArXG4gICAgICAgICAgICAnRmFpbGVkIHRlc3RzOiA8c3BhbiBpZD1cInRzVW5pdEZhaWxDb3VudFwiIGNsYXNzPVwiYmFkXCI+JyArIHRoaXMuZXJyb3JzLmxlbmd0aCArICc8L3NwYW4+Lic7XG4gICAgfVxuICAgIGdldFRlc3RSZXN1bHRMaXN0KHRlc3RSZXN1bHRzKSB7XG4gICAgICAgIHZhciBsaXN0ID0gJyc7XG4gICAgICAgIHZhciBncm91cCA9ICcnO1xuICAgICAgICB2YXIgaXNGaXJzdCA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdFJlc3VsdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0ZXN0UmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudGVzdE5hbWUgIT09IGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAgPSByZXN1bHQudGVzdE5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdCArPSAnPC9saT48L3VsPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3QgKz0gJzxsaT4nICsgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdGVyRm9yR3JvdXAoZ3JvdXApICsgcmVzdWx0LnRlc3ROYW1lICsgJzx1bD4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdENsYXNzID0gKHJlc3VsdC5tZXNzYWdlID09PSAnT0snKSA/ICdzdWNjZXNzJyA6ICdlcnJvcic7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25MYWJhbCA9IHJlc3VsdC5mdW5jTmFtZSArICgocmVzdWx0LnBhcmFtZXRlclNldE51bWJlciA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICA/ICcoKSdcbiAgICAgICAgICAgICAgICA6ICcoJyArIHRoaXMudGVzdFJ1bkxpbWl0ZXIuZ2V0TGltaXRlckZvclRlc3QoZ3JvdXAsIHJlc3VsdC5mdW5jTmFtZSwgcmVzdWx0LnBhcmFtZXRlclNldE51bWJlcikgKyAnIHBhcmFtYXRlciBzZXQ6ICcgKyByZXN1bHQucGFyYW1ldGVyU2V0TnVtYmVyICsgJyknKTtcbiAgICAgICAgICAgIGxpc3QgKz0gJzxsaSBjbGFzcz1cIicgKyByZXN1bHRDbGFzcyArICdcIj4nICsgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdGVyRm9yVGVzdChncm91cCwgcmVzdWx0LmZ1bmNOYW1lKSArIGZ1bmN0aW9uTGFiYWwgKyAnOiAnICsgdGhpcy5lbmNvZGVIdG1sRW50aXRpZXMocmVzdWx0Lm1lc3NhZ2UpICsgJzwvbGk+JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdCArICc8L3VsPic7XG4gICAgfVxuICAgIGVuY29kZUh0bWxFbnRpdGllcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdCA9IFRlc3Q7XG5jbGFzcyBUZXN0UnVuTGltaXRlclJ1bkFsbCB7XG4gICAgaXNUZXN0c0dyb3VwQWN0aXZlKGdyb3VwTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaXNUZXN0QWN0aXZlKHRlc3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc1BhcmFtZXRlcnNTZXRBY3RpdmUocGFyYW1hdGVyc1NldE51bWJlcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5jbGFzcyBUZXN0UnVuTGltaXRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZXN0TmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXRSZWZyZXNoT25MaW5rc1dpdGhIYXNoKCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlU3RyaW5nSW50b1Rlc3RzTGltaXQod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIH1cbiAgICBpc1Rlc3RzR3JvdXBBY3RpdmUoZ3JvdXBOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBOYW1lID09PSBncm91cE5hbWU7XG4gICAgfVxuICAgIGlzVGVzdEFjdGl2ZSh0ZXN0TmFtZSkge1xuICAgICAgICBpZiAodGhpcy50ZXN0TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdE5hbWUgPT09IHRlc3ROYW1lO1xuICAgIH1cbiAgICBpc1BhcmFtZXRlcnNTZXRBY3RpdmUocGFyYW1hdGVyc1NldCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbWV0ZXJTZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlclNldCA9PT0gcGFyYW1hdGVyc1NldDtcbiAgICB9XG4gICAgZ2V0TGltaXRlckZvclRlc3QoZ3JvdXBOYW1lLCB0ZXN0TmFtZSwgcGFyYW1ldGVyU2V0ID0gbnVsbCkge1xuICAgICAgICBpZiAocGFyYW1ldGVyU2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZXN0TmFtZSArPSAnKCcgKyBwYXJhbWV0ZXJTZXQgKyAnKSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcmbmJzcDs8YSBocmVmPVwiIycgKyBncm91cE5hbWUgKyAnLycgKyB0ZXN0TmFtZSArICdcXFwiIGNsYXNzPVwiYXNjaWlcIj4mIzk2NTg7PC9hPiZuYnNwOyc7XG4gICAgfVxuICAgIGdldExpbWl0ZXJGb3JHcm91cChncm91cE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICcmbmJzcDs8YSBocmVmPVwiIycgKyBncm91cE5hbWUgKyAnXCIgY2xhc3M9XCJhc2NpaVwiPiYjOTY1ODs8L2E+Jm5ic3A7JztcbiAgICB9XG4gICAgZ2V0TGltaXRDbGVhbmVyKCkge1xuICAgICAgICByZXR1cm4gJzxwPjxhIGhyZWY9XCIjXCI+UnVuIGFsbCB0ZXN0cyA8c3BhbiBjbGFzcz1cImFzY2lpXCI+JiM5NjU4Ozwvc3Bhbj48L2E+PC9wPic7XG4gICAgfVxuICAgIHNldFJlZnJlc2hPbkxpbmtzV2l0aEhhc2goKSB7XG4gICAgICAgIHZhciBwcmV2aW91c0hhbmRsZXIgPSB3aW5kb3cub25oYXNoY2hhbmdlO1xuICAgICAgICB3aW5kb3cub25oYXNoY2hhbmdlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSGFuZGxlci5jYWxsKHdpbmRvdywgZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICB0cmFuc2xhdGVTdHJpbmdJbnRvVGVzdHNMaW1pdCh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVnZXggPSAvXiMoW19hLXpBLVowLTldKykoKFxcLyhbX2EtekEtWjAtOV0rKSkoXFwoKFswLTldKylcXCkpPyk/JC87XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdleC5leGVjKHZhbHVlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSAmJiAhIXJlc3VsdFsxXSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cE5hbWUgPSByZXN1bHRbMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiA0ICYmICEhcmVzdWx0WzRdKSB7XG4gICAgICAgICAgICB0aGlzLnRlc3ROYW1lID0gcmVzdWx0WzRdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gNiAmJiAhIXJlc3VsdFs2XSkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJTZXQgPSBwYXJzZUludChyZXN1bHRbNl0sIDEwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdFJ1bkxpbWl0ZXIgPSBUZXN0UnVuTGltaXRlcjtcbmNsYXNzIFRlc3RDb250ZXh0IHtcbiAgICBzZXRVcCgpIHtcbiAgICB9XG4gICAgdGVhckRvd24oKSB7XG4gICAgfVxuICAgIGFyZUlkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKGV4cGVjdGVkICE9PSBhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZUlkZW50aWNhbCBmYWlsZWQgd2hlbiBnaXZlbiAnICtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50VmFyaWFibGUoZXhwZWN0ZWQpICsgJyBhbmQgJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmVOb3RJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChleHBlY3RlZCA9PT0gYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVOb3RJZGVudGljYWwgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArXG4gICAgICAgICAgICAgICAgdGhpcy5wcmludFZhcmlhYmxlKGV4cGVjdGVkKSArICcgYW5kICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXJlQ29sbGVjdGlvbnNJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlc3VsdFRvU3RyaW5nKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIG1zZyA9ICcnO1xuICAgICAgICAgICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbXNnID0gJ1snICsgcmVzdWx0LnBvcCgpICsgJ10nICsgbXNnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1zZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29tcGFyZUFycmF5ID0gKGV4cGVjdGVkLCBhY3R1YWwsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdmFyIGluZGV4U3RyaW5nID0gJyc7XG4gICAgICAgICAgICBpZiAoZXhwZWN0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gYXJyYXkgYScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIGlzIG51bGwgYW5kIGInICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyBpcyBub3QgbnVsbCcsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGNvcnJlY3Q6IGJvdGggYXJlIG51bGxzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3R1YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbmRleFN0cmluZyA9IHJlc3VsdFRvU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gYXJyYXkgYScgK1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgaXMgbm90IG51bGwgYW5kIGInICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIGlzIG51bGwnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHBlY3RlZC5sZW5ndGggIT09IGFjdHVhbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbmRleFN0cmluZyA9IHJlc3VsdFRvU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gbGVuZ3RoIG9mIGFycmF5IGEnICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIChsZW5ndGg6ICcgKyBleHBlY3RlZC5sZW5ndGggKyAnKSBpcyBkaWZmZXJlbnQgb2YgbGVuZ3RoIG9mIGFycmF5IGInICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIChsZW5ndGg6ICcgKyBhY3R1YWwubGVuZ3RoICsgJyknLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKGV4cGVjdGVkW2ldIGluc3RhbmNlb2YgQXJyYXkpICYmIChhY3R1YWxbaV0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVBcnJheShleHBlY3RlZFtpXSwgYWN0dWFsW2ldLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV4cGVjdGVkW2ldICE9PSBhY3R1YWxbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gZWxlbWVudCBhJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKCcgKyB0aGlzLnByaW50VmFyaWFibGUoZXhwZWN0ZWRbaV0pICsgJykgaXMgZGlmZmVyZW50IHRoYW4gZWxlbWVudCBiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKCcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsW2ldKSArICcpJywgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBjb21wYXJlQXJyYXkoZXhwZWN0ZWQsIGFjdHVhbCwgW10pO1xuICAgIH1cbiAgICBhcmVDb2xsZWN0aW9uc05vdElkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuYXJlQ29sbGVjdGlvbnNJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNOb3RJZGVudGljYWwgZmFpbGVkIHdoZW4gYm90aCBjb2xsZWN0aW9ucyBhcmUgaWRlbnRpY2FsJywgbWVzc2FnZSk7XG4gICAgfVxuICAgIGlzVHJ1ZShhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoIWFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNUcnVlIGZhaWxlZCB3aGVuIGdpdmVuICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNGYWxzZShhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc0ZhbHNlIGZhaWxlZCB3aGVuIGdpdmVuICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNUcnV0aHkoYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKCFhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzVHJ1ZSBmYWlsZWQgd2hlbiBnaXZlbiAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRmFsc2V5KGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzRmFsc2UgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvd3MoYSwgbWVzc2FnZSA9ICcnLCBlcnJvclN0cmluZyA9ICcnKSB7XG4gICAgICAgIHZhciBhY3R1YWw7XG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYWN0dWFsID0gYTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhLmZuKSB7XG4gICAgICAgICAgICBhY3R1YWwgPSBhLmZuO1xuICAgICAgICAgICAgbWVzc2FnZSA9IGEubWVzc2FnZTtcbiAgICAgICAgICAgIGVycm9yU3RyaW5nID0gYS5leGNlcHRpb25TdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzVGhyb3duID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhY3R1YWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3JTdHJpbmcgfHwgZXgubWVzc2FnZSA9PT0gZXJyb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpc1Rocm93biA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyb3JTdHJpbmcgJiYgZXgubWVzc2FnZSAhPT0gZXJyb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdkaWZmZXJlbnQgZXJyb3Igc3RyaW5nIHRoYW4gc3VwcGxpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVGhyb3duKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdkaWQgbm90IHRocm93IGFuIGVycm9yJywgbWVzc2FnZSB8fCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9lc05vdFRocm93KGFjdHVhbCwgbWVzc2FnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYWN0dWFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCd0aHJldyBhbiBlcnJvciAnICsgZXgsIG1lc3NhZ2UgfHwgJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4ZWN1dGVzV2l0aGluKGFjdHVhbCwgdGltZUxpbWl0LCBtZXNzYWdlID0gbnVsbCkge1xuICAgICAgICBmdW5jdGlvbiBnZXRUaW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0aW1lVG9TdHJpbmcodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhcnRPZkV4ZWN1dGlvbiA9IGdldFRpbWUoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFjdHVhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNFeGVjdXRlVGltZUxlc3NUaGFuTGltaXQgZmFpbHMgd2hlbiBnaXZlbiBjb2RlIHRocm93cyBhbiBleGNlcHRpb246IFwiJyArIGV4ICsgJ1wiJywgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4ZWN1dGluZ1RpbWUgPSBnZXRUaW1lKCkgLSBzdGFydE9mRXhlY3V0aW9uO1xuICAgICAgICBpZiAoZXhlY3V0aW5nVGltZSA+IHRpbWVMaW1pdCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNFeGVjdXRlVGltZUxlc3NUaGFuTGltaXQgZmFpbHMgd2hlbiBleGVjdXRpb24gdGltZSBvZiBnaXZlbiBjb2RlICgnICsgdGltZVRvU3RyaW5nKGV4ZWN1dGluZ1RpbWUpICsgJyBtcykgJyArXG4gICAgICAgICAgICAgICAgJ2V4Y2VlZCB0aGUgZ2l2ZW4gbGltaXQoJyArIHRpbWVUb1N0cmluZyh0aW1lTGltaXQpICsgJyBtcyknLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmYWlsKG1lc3NhZ2UgPSAnJykge1xuICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdmYWlsJywgbWVzc2FnZSk7XG4gICAgfVxuICAgIGdldEVycm9yKHJlc3VsdE1lc3NhZ2UsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihyZXN1bHRNZXNzYWdlICsgJy4gJyArIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IocmVzdWx0TWVzc2FnZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROYW1lT2ZDbGFzcyhpbnB1dENsYXNzKSB7XG4gICAgICAgIC8vIHNlZTogaHR0cHM6Ly93d3cuc3RldmVmZW50b24uY28udWsvQ29udGVudC9CbG9nL0RhdGUvMjAxMzA0L0Jsb2cvT2J0YWluaW5nLUEtQ2xhc3MtTmFtZS1BdC1SdW50aW1lLUluLVR5cGVTY3JpcHQvXG4gICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uICguezEsfSlcXCgvO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKGlucHV0Q2xhc3MuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6ICcnO1xuICAgIH1cbiAgICBwcmludFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICdcIm51bGxcIic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YXJpYWJsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiAne29iamVjdDogJyArIFRlc3RDb250ZXh0LmdldE5hbWVPZkNsYXNzKHZhcmlhYmxlKSArICd9JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3snICsgKHR5cGVvZiB2YXJpYWJsZSkgKyAnfSBcIicgKyB2YXJpYWJsZSArICdcIic7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0Q29udGV4dCA9IFRlc3RDb250ZXh0O1xuY2xhc3MgVGVzdENsYXNzIGV4dGVuZHMgVGVzdENvbnRleHQge1xuICAgIHBhcmFtZXRlcml6ZVVuaXRUZXN0KG1ldGhvZCwgcGFyYW1ldGVyc0FycmF5KSB7XG4gICAgICAgIG1ldGhvZC5wYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0FycmF5O1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdENsYXNzID0gVGVzdENsYXNzO1xuY2xhc3MgRmFrZUZhY3Rvcnkge1xuICAgIHN0YXRpYyBnZXRGYWtlKG9iaiwgLi4uaW1wbGVtZW50YXRpb25zKSB7XG4gICAgICAgIHZhciBmYWtlVHlwZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUZha2VUeXBlKGZha2VUeXBlLCBvYmopO1xuICAgICAgICB2YXIgZmFrZSA9IG5ldyBmYWtlVHlwZSgpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0QWxsUHJvcGVydHlOYW1lcyhvYmopO1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGZha2VbcHJvcGVydHlOYW1lc1trXV0gPSBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKCdEZWZhdWx0IGZha2UgY2FsbGVkLicpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBtZW1iZXJOYW1lSW5kZXggPSAwO1xuICAgICAgICB2YXIgbWVtYmVyVmFsdWVJbmRleCA9IDE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1wbGVtZW50YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW1wbCA9IGltcGxlbWVudGF0aW9uc1tpXTtcbiAgICAgICAgICAgIGZha2VbaW1wbFttZW1iZXJOYW1lSW5kZXhdXSA9IGltcGxbbWVtYmVyVmFsdWVJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZha2U7XG4gICAgfVxuICAgIHN0YXRpYyBwb3B1bGF0ZUZha2VUeXBlKGZha2UsIHRvQ29weSkge1xuICAgICAgICBsZXQgcHJvcGVydGllcyA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0QWxsUHJvcGVydHlOYW1lcyh0b0NvcHkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICBmYWtlW3Byb3BlcnR5XSA9IHRvQ29weVtwcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGZha2U7XG4gICAgICAgIH07XG4gICAgICAgIF9fLnByb3RvdHlwZSA9IHRvQ29weS5wcm90b3R5cGU7XG4gICAgICAgIGZha2UucHJvdG90eXBlID0gbmV3IF9fKCk7XG4gICAgfVxufVxuZXhwb3J0cy5GYWtlRmFjdG9yeSA9IEZha2VGYWN0b3J5O1xuY2xhc3MgVGVzdERlZmluaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRlc3RDbGFzcywgbmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3REZWZpbml0aW9uID0gVGVzdERlZmluaXRpb247XG5jbGFzcyBUZXN0RGVzY3JpcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRlc3ROYW1lLCBmdW5jTmFtZSwgcGFyYW1ldGVyU2V0TnVtYmVyLCBtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudGVzdE5hbWUgPSB0ZXN0TmFtZTtcbiAgICAgICAgdGhpcy5mdW5jTmFtZSA9IGZ1bmNOYW1lO1xuICAgICAgICB0aGlzLnBhcmFtZXRlclNldE51bWJlciA9IHBhcmFtZXRlclNldE51bWJlcjtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3REZXNjcmlwdGlvbiA9IFRlc3REZXNjcmlwdGlvbjtcbmNsYXNzIEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIge1xuICAgIHN0YXRpYyB3YWxrSW1wbChvYmosIHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3duUHJvcGVydGllc09mT2JqID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgICAgICAgb3duUHJvcGVydGllc09mT2JqLmZvckVhY2gobWVtID0+IHJlc3VsdHMuYWRkKG1lbSkpO1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICAgICAgaWYgKHByb3RvdHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90b3R5cGUpO1xuICAgICAgICBwcm9wTmFtZXMuZm9yRWFjaChtZW0gPT4gcmVzdWx0cy5hZGQobWVtKSk7XG4gICAgICAgIHRoaXMud2Fsa0ltcGwob2JqLnByb3RvdHlwZSwgcmVzdWx0cyk7XG4gICAgICAgIHRoaXMud2Fsa0ltcGwocHJvdG90eXBlLCByZXN1bHRzKTtcbiAgICB9XG4gICAgc3RhdGljIHdhbGsob2JqKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMud2Fsa0ltcGwob2JqLCByZXN1bHRzKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocmVzdWx0cyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRGdW5jdGlvbk5hbWVzKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsayh0eXBlKVxuICAgICAgICAgICAgLmZpbHRlcihtZW0gPT4ge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHR5cGVbbWVtXTtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJlxuICAgICAgICAgICAgICAgIChtZXRob2QgIT09IHR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLnByb3RvdHlwZSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRQcm90b3R5cGVPZih0eXBlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QWxsUHJvcGVydHlOYW1lcyh0eXBlKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gdGhpcy53YWxrKHR5cGUpO1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uUHJvcHMgPSB0aGlzLndhbGsoRnVuY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMuZmlsdGVyKG1lbSA9PiAhZnVuY3Rpb25Qcm9wcy5zb21lKGZ1bmNQcm9wID0+IGZ1bmNQcm9wID09PSBtZW0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydGllcy5maWx0ZXIobWVtID0+IHtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSB0eXBlW21lbV07XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kICE9PSB0eXBlICYmXG4gICAgICAgICAgICAgICAgbWV0aG9kLnByb3RvdHlwZSAhPT1cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UHJvdG90eXBlT2YodHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlciA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10c1VuaXQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzLXVuaXQvZGlzdC9zcmMvdHNVbml0LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBpc01hYyA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ2RhcndpbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJ1xuICAmJiB0eXBlb2YgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtYWMnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNQYyA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wbGF0Zm9ybS50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcbmltcG9ydCAqIGFzIGlzb21vcnBoaWNQYXRoIGZyb20gJy4uL2xpYi9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBQYXRoU3BlYyBleHRlbmRzIHRzVW5pdC5UZXN0Q2xhc3Mge1xuICAgIHRlc3REZWZhdWx0RXhwb3J0KCkge1xuICAgICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuLi9saWIvcGF0aCcpXTtcbiAgICAgIChwcm9jZXNzIGFzIGFueSkuX19kZWZpbmVHZXR0ZXJfXygncGxhdGZvcm0nLCAoKSA9PiAnd2luMzInKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXG4gICAgICBsZXQgcGF0aCA9IHJlcXVpcmUoJy4uL2xpYi9wYXRoJykuZGVmYXVsdDtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdcXFxcJywgcGF0aC5zZXAsICdkZWZhdWx0IHNlcGVyYXRvciBzaG91bGQgYmUgd2luMzIgXCJcXFxcXCIgYWZ0ZXIgaW4gd2luZG93cyBlbnZpcm9ubWVudCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJzsnLCBwYXRoLmRlbGltaXRlciwgJ2RlZmF1bHQgZGVsaW1pdGVyIHNob3VsZCBiZSB3aW4zMiBcIjtcIiBhZnRlciBpbiB3aW5kb3dzIGVudmlyb25tZW50Jyk7XG4gICAgICBkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4uL2xpYi9wYXRoJyldO1xuICAgICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdkYXJ3aW4nKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXG4gICAgICBwYXRoID0gcmVxdWlyZSgnLi4vbGliL3BhdGgnKS5kZWZhdWx0O1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy8nLCBwYXRoLnNlcCwgJ2RlZmF1bHQgc2VwZXJhdG9yIHNob3VsZCBiZSBwb3NpeCBcIi9cIiBhZnRlciBpbiBtYWMgZW52aXJvbm1lbnQnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCc6JywgcGF0aC5kZWxpbWl0ZXIsICdkZWZhdWx0IGRlbGltaXRlciBzaG91bGQgYmUgcG9zaXggXCIvXCIgYWZ0ZXIgaW4gbWFjIGVudmlyb25tZW50Jyk7XG4gICAgfVxuXG4gICAgdGVzdFdpbjMyQmFzZW5hbWUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ215ZmlsZS5odG1sJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuYmFzZW5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3dpbjMyIGJhc2VuYW1lIHNob3VsZCBwYXJzZSBmaWxlIG5hbWUgZnJvbSB3aW5kb3dzIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnbXlmaWxlLmh0bWwnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5iYXNlbmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3dpbjMyIGJhc2VuYW1lIHNob3VsZCBwYXJzZSBmaWxlIG5hbWUgZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeEJhc2VuYW1lKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdteWZpbGUuaHRtbCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmJhc2VuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sJyksXG4gICAgICAgICdwb3NpeCBiYXNlbmFtZSBzaG91bGQgbm90IHBhcnNlIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdteWZpbGUuaHRtbCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmJhc2VuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgICAncG9zaXggYmFzZW5hbWUgc2hvdWxkIHBhcnNlIGZpbGUgbmFtZSBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyU2VwKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ1xcXFwnLCBpc29tb3JwaGljUGF0aC53aW4zMi5zZXAsICd3aW4zMiBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIlxcXFxcIiBzZXAnKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4U2VwKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy8nLCBpc29tb3JwaGljUGF0aC5wb3NpeC5zZXAsICdwb3NpeCBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIi9cIiBzZXAnKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyRGVsaW1pdGVyKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJzsnLCBpc29tb3JwaGljUGF0aC53aW4zMi5kZWxpbWl0ZXIsICd3aW4zMiBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIjtcIiBkZWxpbWl0ZXInKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4RGVsaW1pdGVyKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJzonLCBpc29tb3JwaGljUGF0aC5wb3NpeC5kZWxpbWl0ZXIsICdwb3NpeCBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIjtcIiBkZWxpbWl0ZXInKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyRGlybmFtZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnQzpcXFxcdGVtcCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3dpbjMyIGRpcm5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBkaXJlY3RvcnkgcGF0aCBmcm9tIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcvdGVtcCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAgICd3aW4zMiBkaXJuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZGlyZWN0b3J5IHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeERpcm5hbWUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXHRlbXAnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZGlybmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxuICAgICAgJ3Bvc2l4IGJhc2VuYW1lIHNob3VsZCBub3QgcGFyc2Ugd2luZG93cyBwYXRoJyxcbiAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcvdGVtcCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAgICdwb3NpeCBkaXJuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZGlyZWN0b3J5IHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RXaW4zMkV4dG5hbWUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5odG1sJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgZXh0ZW5zaW9uIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5odG1sJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLmpzJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuanMnKSxcbiAgICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIGV4dGVuc2lvbiBmcm9tIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuanMnLCBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5qcycpLFxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuanMnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sLmpzJyksXG4gICAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBwcmUtZml4ZWQgZXh0ZW5zaW9uIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5qcycsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sLmh0bWwuanMnKSxcbiAgICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIHByZS1maXhlZCBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeEV4dG5hbWUoKSB7XG5cbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLmh0bWwnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgICAncG9zaXggZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuanMnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5qcycpLFxuICAgICAgICAncG9zaXggZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuanMnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5odG1sLmpzJyksXG4gICAgICAgICdwb3NpeCBleHRuYW1lIHNob3VsZCBwYXJzZSBwcmUtZml4ZWQgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0V2luMzJGb3JtYXQoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXJcXFxcZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC53aW4zMi5mb3JtYXQoe1xuICAgICAgICBkaXI6ICcvaG9tZS91c2VyL2RpcicsXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAnd2luMzIgZm9ybWF0IHNob3VsZCBub3QgZm9ybWF0IHBvc2l4IFBhcnNlZFBhdGgnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICAgIHJvb3Q6ICdDOlxcXFwnLFxuICAgICAgICBkaXI6ICdwYXRoXFxcXGRpcicsXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAnd2luMzIgZm9ybWF0IHNob3VsZCBmb3JtYXQgd2luZG93cyBQYXJzZWRQYXRoIHdpdGggcm9vdCBhbmQgZGlyJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC53aW4zMi5mb3JtYXQoe1xuICAgICAgICBkaXI6ICdDOlxcXFxwYXRoXFxcXGRpcicsXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAnd2luMzIgZm9ybWF0IHNob3VsZCBmb3JtYXQgd2luZG93cyBQYXJzZWRQYXRoIHdpdGggZGlyJyk7XG4gICAgfVxuICAgIHRlc3RQb3NpeEZvcm1hdCgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpci9maWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLnBvc2l4LmZvcm1hdCh7XG4gICAgICAgIGRpcjogJ0M6XFxcXHBhdGhcXFxcZGlyJyxcbiAgICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcbiAgICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICdwb3NpeCBmb3JtYXQgc2hvdWxkIG5vdCBmb3JtYXQgd2luZG93cyBQYXJzZWRQYXRoJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC5wb3NpeC5mb3JtYXQoe1xuICAgICAgICByb290OiAnL2lnbm9yZWQnLFxuICAgICAgICBkaXI6ICcvaG9tZS91c2VyL2RpcicsXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAncG9zaXggZm9ybWF0IHNob3VsZCBmb3JtYXQgcG9zaXggUGFyc2VkUGF0aCB3aXRoIHJvb3QgYW5kIGRpcicpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy9ob21lL3VzZXIvZGlyL2ZpbGUudHh0JywgaXNvbW9ycGhpY1BhdGgucG9zaXguZm9ybWF0KHtcbiAgICAgICAgZGlyOiAnL2hvbWUvdXNlci9kaXInLFxuICAgICAgICBiYXNlOiAnZmlsZS50eHQnLFxuICAgICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3Bvc2l4IGZvcm1hdCBzaG91bGQgZm9ybWF0IHBvc2l4IFBhcnNlZFBhdGggd2l0aCBkaXInKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyQWJzb2x1dGUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnLy9zZXJ2ZXInKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciBwb3NpeCBhYnNvbHV0ZSBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnXFxcXFxcXFxzZXJ2ZXInKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCdDOi9mb28vLi4nKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCdDOlxcXFxmb29cXFxcLi4nKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnYmFyXFxcXGJheicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIHJlbGF0aXZlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnYmFyL2JheicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHJlbGF0aXZlIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnLicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciByZWxhdGl2ZSBwb3NpeCBvcGVyYXRvcicsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhBYnNvbHV0ZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCcvL3NlcnZlcicpLFxuICAgICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHBvc2l4IGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCcvYmF6Ly4uJyksXG4gICAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgcG9zaXggYWJzb2x1dGUgcGF0aCB3aXRoIHJlbGF0aXZlIG9wZXJhdG9yIHN1ZmZpeCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdcXFxcXFxcXHNlcnZlcicpLFxuICAgICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnQzovZm9vLy4uJyksXG4gICAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdDOlxcXFxmb29cXFxcLi4nKSxcbiAgICAgICAgJ3Bvc2l4IGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd2luZG93cyBhYnNvbHV0ZSBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ2JhclxcXFxiYXonKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd2luZG93cyByZWxhdGl2ZSBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ2Jhci9iYXonKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciByZWxhdGl2ZSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJy4nKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciByZWxhdGl2ZSBwb3NpeCBvcGVyYXRvcicsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0V2luMzJKb2luKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdDOlxcXFxmb29cXFxcYmFyXFxcXGJhelxcXFxhc2RmJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuam9pbignQzpcXFxcZm9vJywgJ2JhcicsICdiYXpcXFxcYXNkZicsICdxdXV4JywgJy4uJyksXG4gICAgICAgICd3aW4zMiBqb2luIHNob3VsZCByZXR1cm4gam9pbmVkIHdpbmRvd3MgcGF0aCBnaXZlbiB3aW5kb3dzIGZyYWdtZW50cycsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdcXFxcZm9vXFxcXGJhclxcXFxiYXpcXFxcYXNkZicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmpvaW4oJy9mb28nLCAnYmFyJywgJ2Jhei9hc2RmJywgJ3F1dXgnLCAnLi4nKSxcbiAgICAgICAgJ3dpbjMyIGpvaW4gc2hvdWxkIHJldHVybiBqb2luZWQgd2luZG93cyBwYXRoIGdpdmVuIHBvc2l4IGZyYWdtZW50cycsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhKb2luKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdcXFxcZm9vL2Jhci9iYXpcXFxcYXNkZicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmpvaW4oJ1xcXFxmb28nLCAnYmFyJywgJ2JhelxcXFxhc2RmJywgJ3F1dXgnLCAnLi4nKSxcbiAgICAgICAgJ3Bvc2l4IGpvaW4gc2hvdWxkIG5vdCByZXR1cm4gam9pbmVkIHBvc2l4IHBhdGggZ2l2ZW4gd2luZG93cyBmcmFnbWVudHMnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnL2Zvby9iYXIvYmF6L2FzZGYnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5qb2luKCcvZm9vJywgJ2JhcicsICdiYXovYXNkZicsICdxdXV4JywgJy4uJyksXG4gICAgICAgICdwb3NpeCBqb2luIHNob3VsZCByZXR1cm4gam9pbmVkIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyTm9ybWFsaXplKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdDOlxcXFx0ZW1wXFxcXGZvb1xcXFxiYXInLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5ub3JtYWxpemUoJ0M6Ly8vL3RlbXBcXFxcXFxcXC9cXFxcL1xcXFwvZm9vL2JhcicpLFxuICAgICAgICAnd2luMzIgc2hvdWxkIG5vcm1hbGl6ZSBtaXhlZCBwYXRoIHRvIHdpbmRvd3Mgc2VwZXJhdG9yJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXHRlbXBcXFxcZm9vXFxcXCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLm5vcm1hbGl6ZSgnQzpcXFxcdGVtcFxcXFxcXFxcZm9vXFxcXGJhclxcXFwuLlxcXFwnKSxcbiAgICAgICAgJ3dpbjMyIHNob3VsZCBub3JtYWxpemUgd2luZG93cyBwYXRoIHRvIHdpbmRvd3Mgc2VwZXJhdG9yJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ1xcXFxmb29cXFxcYmFyXFxcXGJhelxcXFxhc2RmJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxuICAgICAgICAnd2luZDMyIHNob3VsZCBub3JtYWxpemUgcG9zaXggcGF0aCB0byB3aW5kb3dzIHNlcGVyYXRvcicsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhOb3JtYWxpemUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXHRlbXBcXFxcXFxcXGZvb1xcXFxiYXJcXFxcLi5cXFxcJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgubm9ybWFsaXplKCdDOlxcXFx0ZW1wXFxcXFxcXFxmb29cXFxcYmFyXFxcXC4uXFxcXCcpLFxuICAgICAgICAncG9zaXggc2hvdWxkIG5vdCBub3JtYWxpemUgd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy9mb28vYmFyL2Jhei9hc2RmJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxuICAgICAgICAncG9zaXggc2hvdWxkIG5vcm1hbGl6ZSBwb3NpeCBwYXRoIHRvIHBvc2l4IHNlcGVyYXRvcicsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0V2luMzJQYXJzZSgpIHtcbiAgICAgIGNvbnN0IHBhcnNlZFBvc2l4ID0gaXNvbW9ycGhpY1BhdGgud2luMzIucGFyc2UoJy9ob21lL3VzZXIvZGlyL2ZpbGUudHh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhcnNlZFBvc2l4LnJvb3QsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCByb290Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXInLCBwYXJzZWRQb3NpeC5kaXIsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBkaXInKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlLnR4dCcsIHBhcnNlZFBvc2l4LmJhc2UsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBiYXNlJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFBvc2l4LmV4dCwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGV4dCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUnLCBwYXJzZWRQb3NpeC5uYW1lLCAnd2luMzIgc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggbmFtZScpO1xuXG4gICAgICBjb25zdCBwYXJzZWRXaW5kb3dzID0gaXNvbW9ycGhpY1BhdGgud2luMzIucGFyc2UoJ0M6XFxcXHBhdGhcXFxcZGlyXFxcXGZpbGUudHh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxcJywgcGFyc2VkV2luZG93cy5yb290LCAnd2luMzIgc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCByb290Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXInLCBwYXJzZWRXaW5kb3dzLmRpciwgJ3dpbjMyIHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggZGlyJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnZmlsZS50eHQnLCBwYXJzZWRXaW5kb3dzLmJhc2UsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGJhc2UnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcudHh0JywgcGFyc2VkV2luZG93cy5leHQsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGV4dCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUnLCBwYXJzZWRXaW5kb3dzLm5hbWUsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIG5hbWUnKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4UGFyc2UoKSB7XG4gICAgICBjb25zdCBwYXJzZWRQb3NpeCA9IGlzb21vcnBoaWNQYXRoLnBvc2l4LnBhcnNlKCcvaG9tZS91c2VyL2Rpci9maWxlLnR4dCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy8nLCBwYXJzZWRQb3NpeC5yb290LCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggcm9vdCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy9ob21lL3VzZXIvZGlyJywgcGFyc2VkUG9zaXguZGlyLCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggZGlyJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnZmlsZS50eHQnLCBwYXJzZWRQb3NpeC5iYXNlLCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggYmFzZScpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy50eHQnLCBwYXJzZWRQb3NpeC5leHQsICdwb3NpeCBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBleHQnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlJywgcGFyc2VkUG9zaXgubmFtZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIG5hbWUnKTtcblxuICAgICAgY29uc3QgcGFyc2VkV2luZG93cyA9IGlzb21vcnBoaWNQYXRoLnBvc2l4LnBhcnNlKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJycsIHBhcnNlZFdpbmRvd3Mucm9vdCwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggcm9vdCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJycsIHBhcnNlZFdpbmRvd3MuZGlyLCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBkaXInKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIHBhcnNlZFdpbmRvd3MuYmFzZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggYmFzZScpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy50eHQnLCBwYXJzZWRXaW5kb3dzLmV4dCwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggZXh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZScsIHBhcnNlZFdpbmRvd3MubmFtZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggbmFtZScpO1xuICAgIH1cbiAgICB0ZXN0V2luMzJSZXNvbHZlKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdDOlxcXFxmb29cXFxcYmFyXFxcXGJheicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLnJlc29sdmUoJ0M6XFxcXGZvb1xcXFxiYXInLCAnLlxcXFxiYXonKSxcbiAgICAgICAgJ3dpbjMyIHNob3VsZCByZXNvbHZlIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdcXFxcZm9vXFxcXGJhclxcXFxiYXonLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5yZXNvbHZlKCcvZm9vL2JhcicsICcuL2JheicpLFxuICAgICAgICAnd2luMzIgc2hvdWxkIHJlc29sdmUgcG9zaXggcGF0aCB0byB3aW5kb3dzIGZvcm1hdCcsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhSZXNvbHZlKCkge1xuICAgICAgdGhpcy5hcmVOb3RJZGVudGljYWwoXG4gICAgICAgICdDOlxcXFxmb29cXFxcYmFyLy5cXFxcYmF6JyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgucmVzb2x2ZSgnQzpcXFxcZm9vXFxcXGJhcicsICcuXFxcXGJheicpLFxuICAgICAgICAncG9zaXggc2hvdWxkIG5vdCByZXNvbHZlIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcvZm9vL2Jhci9iYXonLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5yZXNvbHZlKCcvZm9vL2JhcicsICcuL2JheicpLFxuICAgICAgICAncG9zaXggc2hvdWxkIHJlc29sdmUgcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0V2luMzJSZWxhdGl2ZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5yZWxhdGl2ZSgnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYScsICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJyksXG4gICAgICAgICd3aW4zMiBzaG91bGQgcmVsYXRpdmUgd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy4uXFxcXC4uXFxcXGltcGxcXFxcYmJiJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIucmVsYXRpdmUoJy9kYXRhL29yYW5kZWEvdGVzdC9hYWEnLCAnL2RhdGEvb3JhbmRlYS9pbXBsL2JiYicpLFxuICAgICAgICAnd2luMzIgc2hvdWxkIHJlbGF0aXZlIHBvc2l4IHBhdGggdG8gd2luZG93cyBmb3JtYXQnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4UmVsYXRpdmUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy4uLy5cXFxcYmF6JywgaXNvbW9ycGhpY1BhdGgucG9zaXgucmVsYXRpdmUoJ0M6XFxcXGZvb1xcXFxiYXInLCAnLlxcXFxiYXonKSxcbiAgICAgICAgJ3Bvc2l4IHNob3VsZCBub3QgcmVsYXRpdmUgd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy4uLy4uL2ltcGwvYmJiJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgucmVsYXRpdmUoJy9kYXRhL29yYW5kZWEvdGVzdC9hYWEnLCAnL2RhdGEvb3JhbmRlYS9pbXBsL2JiYicpLFxuICAgICAgICAncG9zaXggc2hvdWxkIHJlbGF0aXZlIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvUGF0aC5Ob2RlLnNwZWMudHMiLCJpbXBvcnQgKiBhcyB0c1VuaXQgZnJvbSAndHMtdW5pdCc7XG5pbXBvcnQgeyBpc1BjLCBpc01hYywgaXNOb2RlLCBpc0Jyb3dzZXIgfSBmcm9tICcuLi9saWIvcGxhdGZvcm0nO1xuXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1TcGVjIGV4dGVuZHMgdHNVbml0LlRlc3RDbGFzcyB7XG4gICAgdGVzdE9zKCkge1xuICAgICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICd3aW4zMicpOy8vc3R1YiBwbGF0Zm9ybSBjYWxsXG4gICAgICB0aGlzLmlzVHJ1ZShpc1BjKCksICdpc1BjIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3Igd2luZG93cyBwbGF0Zm9ybSBpZDogXCJ3aW4zMlwiJyk7XG4gICAgICB0aGlzLmlzRmFsc2UoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcGxhdGZvcm0gaWQ6IFwid2luMzJcIicpO1xuICAgICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdkYXJ3aW4nKTsvL3N0dWIgcGxhdGZvcm0gY2FsbFxuICAgICAgdGhpcy5pc0ZhbHNlKGlzUGMoKSwgJ2lzUGMgc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgbWFjIHBsYXRmb3JtIGlkOiBcImRhcndpblwiJyk7XG4gICAgICB0aGlzLmlzVHJ1ZShpc01hYygpLCAnaXNNYWMgc2hvdWxkIHJldHVybiB0cnVlIGZvciBtYWMgcGxhdGZvcm0gaWQ6IFwiZGFyd2luXCInKTtcbiAgICB9XG4gICAgdGVzdEVudigpIHtcbiAgICAgIHRoaXMuaXNUcnVlKGlzTm9kZSgpLCAnaXNOb2RlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3Igbm9kZSBzcGVjJyk7XG4gICAgICB0aGlzLmlzRmFsc2UoaXNCcm93c2VyKCksICdpc0Jyb3dzZXIgc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgYnJvd3NlciBzcGVjJyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9QbGF0Zm9ybS5Ob2RlLnNwZWMudHMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcclxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XHJcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxyXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcclxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcclxuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXHJcbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxyXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1JcclxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxyXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcclxuXHJcblxyXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcclxuLy8gbXVzdCBiZSBubyBzbGFzaGVzIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XHJcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxyXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xyXG4gIHZhciByZXMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcCA9IHBhcnRzW2ldO1xyXG5cclxuICAgIC8vIGlnbm9yZSBlbXB0eSBwYXJ0c1xyXG4gICAgaWYgKCFwIHx8IHAgPT09ICcuJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgaWYgKHAgPT09ICcuLicpIHtcclxuICAgICAgaWYgKHJlcy5sZW5ndGggJiYgcmVzW3Jlcy5sZW5ndGggLSAxXSAhPT0gJy4uJykge1xyXG4gICAgICAgIHJlcy5wb3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xyXG4gICAgICAgIHJlcy5wdXNoKCcuLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMucHVzaChwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8vIHJldHVybnMgYW4gYXJyYXkgd2l0aCBlbXB0eSBlbGVtZW50cyByZW1vdmVkIGZyb20gZWl0aGVyIGVuZCBvZiB0aGUgaW5wdXRcclxuLy8gYXJyYXkgb3IgdGhlIG9yaWdpbmFsIGFycmF5IGlmIG5vIGVsZW1lbnRzIG5lZWQgdG8gYmUgcmVtb3ZlZFxyXG5mdW5jdGlvbiB0cmltQXJyYXkoYXJyKSB7XHJcbiAgdmFyIGxhc3RJbmRleCA9IGFyci5sZW5ndGggLSAxO1xyXG4gIHZhciBzdGFydCA9IDA7XHJcbiAgZm9yICg7IHN0YXJ0IDw9IGxhc3RJbmRleDsgc3RhcnQrKykge1xyXG4gICAgaWYgKGFycltzdGFydF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVuZCA9IGxhc3RJbmRleDtcclxuICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XHJcbiAgICBpZiAoYXJyW2VuZF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gbGFzdEluZGV4KVxyXG4gICAgcmV0dXJuIGFycjtcclxuICBpZiAoc3RhcnQgPiBlbmQpXHJcbiAgICByZXR1cm4gW107XHJcbiAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kICsgMSk7XHJcbn1cclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IGEgd2luZG93cyBwYXRoIGludG8gdGhyZWUgcGFydHM6IFsqLCBkZXZpY2UsIHNsYXNoLFxyXG4vLyB0YWlsXSB3aW5kb3dzLW9ubHlcclxudmFyIHNwbGl0RGV2aWNlUmUgPVxyXG4gICAgL14oW2EtekEtWl06fFtcXFxcXFwvXXsyfVteXFxcXFxcL10rW1xcXFxcXC9dK1teXFxcXFxcL10rKT8oW1xcXFxcXC9dKT8oW1xcc1xcU10qPykkLztcclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IHRoZSB0YWlsIHBhcnQgb2YgdGhlIGFib3ZlIGludG8gWyosIGRpciwgYmFzZW5hbWUsIGV4dF1cclxudmFyIHNwbGl0VGFpbFJlID1cclxuICAgIC9eKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKSg/OltcXFxcXFwvXSopJC87XHJcblxyXG52YXIgd2luMzIgPSB7fTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XVxyXG5mdW5jdGlvbiB3aW4zMlNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIC8vIFNlcGFyYXRlIGRldmljZStzbGFzaCBmcm9tIHRhaWxcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKGZpbGVuYW1lKSxcclxuICAgICAgZGV2aWNlID0gKHJlc3VsdFsxXSB8fCAnJykgKyAocmVzdWx0WzJdIHx8ICcnKSxcclxuICAgICAgdGFpbCA9IHJlc3VsdFszXSB8fCAnJztcclxuICAvLyBTcGxpdCB0aGUgdGFpbCBpbnRvIGRpciwgYmFzZW5hbWUgYW5kIGV4dGVuc2lvblxyXG4gIHZhciByZXN1bHQyID0gc3BsaXRUYWlsUmUuZXhlYyh0YWlsKSxcclxuICAgICAgZGlyID0gcmVzdWx0MlsxXSxcclxuICAgICAgYmFzZW5hbWUgPSByZXN1bHQyWzJdLFxyXG4gICAgICBleHQgPSByZXN1bHQyWzNdO1xyXG4gIHJldHVybiBbZGV2aWNlLCBkaXIsIGJhc2VuYW1lLCBleHRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW4zMlN0YXRQYXRoKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKHBhdGgpLFxyXG4gICAgICBkZXZpY2UgPSByZXN1bHRbMV0gfHwgJycsXHJcbiAgICAgIGlzVW5jID0gISFkZXZpY2UgJiYgZGV2aWNlWzFdICE9PSAnOic7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRldmljZTogZGV2aWNlLFxyXG4gICAgaXNVbmM6IGlzVW5jLFxyXG4gICAgaXNBYnNvbHV0ZTogaXNVbmMgfHwgISFyZXN1bHRbMl0sIC8vIFVOQyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlXHJcbiAgICB0YWlsOiByZXN1bHRbM11cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVVTkNSb290KGRldmljZSkge1xyXG4gIHJldHVybiAnXFxcXFxcXFwnICsgZGV2aWNlLnJlcGxhY2UoL15bXFxcXFxcL10rLywgJycpLnJlcGxhY2UoL1tcXFxcXFwvXSsvZywgJ1xcXFwnKTtcclxufVxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG53aW4zMi5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkRGV2aWNlID0gJycsXHJcbiAgICAgIHJlc29sdmVkVGFpbCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aDtcclxuICAgIGlmIChpID49IDApIHtcclxuICAgICAgcGF0aCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHBhdGggPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gV2luZG93cyBoYXMgdGhlIGNvbmNlcHQgb2YgZHJpdmUtc3BlY2lmaWMgY3VycmVudCB3b3JraW5nXHJcbiAgICAgIC8vIGRpcmVjdG9yaWVzLiBJZiB3ZSd2ZSByZXNvbHZlZCBhIGRyaXZlIGxldHRlciBidXQgbm90IHlldCBhblxyXG4gICAgICAvLyBhYnNvbHV0ZSBwYXRoLCBnZXQgY3dkIGZvciB0aGF0IGRyaXZlLiBXZSdyZSBzdXJlIHRoZSBkZXZpY2UgaXMgbm90XHJcbiAgICAgIC8vIGFuIHVuYyBwYXRoIGF0IHRoaXMgcG9pbnRzLCBiZWNhdXNlIHVuYyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlLlxyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5lbnZbJz0nICsgcmVzb2x2ZWREZXZpY2VdO1xyXG4gICAgICAvLyBWZXJpZnkgdGhhdCBhIGRyaXZlLWxvY2FsIGN3ZCB3YXMgZm91bmQgYW5kIHRoYXQgaXQgYWN0dWFsbHkgcG9pbnRzXHJcbiAgICAgIC8vIHRvIG91ciBkcml2ZS4gSWYgbm90LCBkZWZhdWx0IHRvIHRoZSBkcml2ZSdzIHJvb3QuXHJcbiAgICAgIGlmICghcGF0aCB8fCBwYXRoLnN1YnN0cigwLCAzKS50b0xvd2VyQ2FzZSgpICE9PVxyXG4gICAgICAgICAgcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSArICdcXFxcJykge1xyXG4gICAgICAgIHBhdGggPSByZXNvbHZlZERldmljZSArICdcXFxcJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXN1bHQgPSB3aW4zMlN0YXRQYXRoKHBhdGgpLFxyXG4gICAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgICAgaXNBYnNvbHV0ZSA9IHJlc3VsdC5pc0Fic29sdXRlLFxyXG4gICAgICAgIHRhaWwgPSByZXN1bHQudGFpbDtcclxuXHJcbiAgICBpZiAoZGV2aWNlICYmXHJcbiAgICAgICAgcmVzb2x2ZWREZXZpY2UgJiZcclxuICAgICAgICBkZXZpY2UudG9Mb3dlckNhc2UoKSAhPT0gcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAvLyBUaGlzIHBhdGggcG9pbnRzIHRvIGFub3RoZXIgZGV2aWNlIHNvIGl0IGlzIG5vdCBhcHBsaWNhYmxlXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzb2x2ZWREZXZpY2UpIHtcclxuICAgICAgcmVzb2x2ZWREZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgcmVzb2x2ZWRUYWlsID0gdGFpbCArICdcXFxcJyArIHJlc29sdmVkVGFpbDtcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGlzQWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc29sdmVkRGV2aWNlICYmIHJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgcmVzb2x2ZWREZXZpY2VgIHBvaW50cyB0byBhbiBVTkNcclxuICAvLyByb290LiBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgcmVzb2x2ZWREZXZpY2UgPSBub3JtYWxpemVVTkNSb290KHJlc29sdmVkRGV2aWNlKTtcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLFxyXG4gIC8vIGJ1dCBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKVxyXG4gIC8vIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHJlc29sdmVkVGFpbCA9IG5vcm1hbGl6ZUFycmF5KHJlc29sdmVkVGFpbC5zcGxpdCgvW1xcXFxcXC9dKy8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIHJldHVybiAocmVzb2x2ZWREZXZpY2UgKyAocmVzb2x2ZWRBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHJlc29sdmVkVGFpbCkgfHxcclxuICAgICAgICAgJy4nO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0LmRldmljZSxcclxuICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgdGFpbCA9IHJlc3VsdC50YWlsLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gL1tcXFxcXFwvXSQvLnRlc3QodGFpbCk7XHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgdGFpbCBwYXRoXHJcbiAgdGFpbCA9IG5vcm1hbGl6ZUFycmF5KHRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSwgIWlzQWJzb2x1dGUpLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgaWYgKCF0YWlsICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICB0YWlsID0gJy4nO1xyXG4gIH1cclxuICBpZiAodGFpbCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICB0YWlsICs9ICdcXFxcJztcclxuICB9XHJcblxyXG4gIC8vIENvbnZlcnQgc2xhc2hlcyB0byBiYWNrc2xhc2hlcyB3aGVuIGBkZXZpY2VgIHBvaW50cyB0byBhbiBVTkMgcm9vdC5cclxuICAvLyBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgZGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRldmljZSArIChpc0Fic29sdXRlID8gJ1xcXFwnIDogJycpICsgdGFpbDtcclxufTtcclxuXHJcblxyXG53aW4zMi5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlN0YXRQYXRoKHBhdGgpLmlzQWJzb2x1dGU7XHJcbn07XHJcblxyXG53aW4zMi5qb2luID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHBhdGhzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcoYXJnKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZykge1xyXG4gICAgICBwYXRocy5wdXNoKGFyZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgam9pbmVkID0gcGF0aHMuam9pbignXFxcXCcpO1xyXG5cclxuICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgam9pbmVkIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIHR3byBzbGFzaGVzLCBiZWNhdXNlXHJcbiAgLy8gbm9ybWFsaXplKCkgd2lsbCBtaXN0YWtlIGl0IGZvciBhbiBVTkMgcGF0aCB0aGVuLlxyXG4gIC8vXHJcbiAgLy8gVGhpcyBzdGVwIGlzIHNraXBwZWQgd2hlbiBpdCBpcyB2ZXJ5IGNsZWFyIHRoYXQgdGhlIHVzZXIgYWN0dWFsbHlcclxuICAvLyBpbnRlbmRlZCB0byBwb2ludCBhdCBhbiBVTkMgcGF0aC4gVGhpcyBpcyBhc3N1bWVkIHdoZW4gdGhlIGZpcnN0XHJcbiAgLy8gbm9uLWVtcHR5IHN0cmluZyBhcmd1bWVudHMgc3RhcnRzIHdpdGggZXhhY3RseSB0d28gc2xhc2hlcyBmb2xsb3dlZCBieVxyXG4gIC8vIGF0IGxlYXN0IG9uZSBtb3JlIG5vbi1zbGFzaCBjaGFyYWN0ZXIuXHJcbiAgLy9cclxuICAvLyBOb3RlIHRoYXQgZm9yIG5vcm1hbGl6ZSgpIHRvIHRyZWF0IGEgcGF0aCBhcyBhbiBVTkMgcGF0aCBpdCBuZWVkcyB0b1xyXG4gIC8vIGhhdmUgYXQgbGVhc3QgMiBjb21wb25lbnRzLCBzbyB3ZSBkb24ndCBmaWx0ZXIgZm9yIHRoYXQgaGVyZS5cclxuICAvLyBUaGlzIG1lYW5zIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSBqb2luIHRvIGNvbnN0cnVjdCBVTkMgcGF0aHMgZnJvbVxyXG4gIC8vIGEgc2VydmVyIG5hbWUgYW5kIGEgc2hhcmUgbmFtZTsgZm9yIGV4YW1wbGU6XHJcbiAgLy8gICBwYXRoLmpvaW4oJy8vc2VydmVyJywgJ3NoYXJlJykgLT4gJ1xcXFxcXFxcc2VydmVyXFxcXHNoYXJlXFwnKVxyXG4gIGlmICghL15bXFxcXFxcL117Mn1bXlxcXFxcXC9dLy50ZXN0KHBhdGhzWzBdKSkge1xyXG4gICAgam9pbmVkID0gam9pbmVkLnJlcGxhY2UoL15bXFxcXFxcL117Mix9LywgJ1xcXFwnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aW4zMi5ub3JtYWxpemUoam9pbmVkKTtcclxufTtcclxuXHJcblxyXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxyXG4vLyBpdCB3aWxsIHNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoIGZyb20gJ2Zyb20nIHRvICd0bycsIGZvciBpbnN0YW5jZTpcclxuLy8gZnJvbSA9ICdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJ1xyXG4vLyB0byA9ICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJ1xyXG4vLyBUaGUgb3V0cHV0IG9mIHRoZSBmdW5jdGlvbiBzaG91bGQgYmU6ICcuLlxcXFwuLlxcXFxpbXBsXFxcXGJiYidcclxud2luMzIucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSB3aW4zMi5yZXNvbHZlKGZyb20pO1xyXG4gIHRvID0gd2luMzIucmVzb2x2ZSh0byk7XHJcblxyXG4gIC8vIHdpbmRvd3MgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlXHJcbiAgdmFyIGxvd2VyRnJvbSA9IGZyb20udG9Mb3dlckNhc2UoKTtcclxuICB2YXIgbG93ZXJUbyA9IHRvLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCdcXFxcJykpO1xyXG5cclxuICB2YXIgbG93ZXJGcm9tUGFydHMgPSB0cmltQXJyYXkobG93ZXJGcm9tLnNwbGl0KCdcXFxcJykpO1xyXG4gIHZhciBsb3dlclRvUGFydHMgPSB0cmltQXJyYXkobG93ZXJUby5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGxvd2VyRnJvbVBhcnRzLmxlbmd0aCwgbG93ZXJUb1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobG93ZXJGcm9tUGFydHNbaV0gIT09IGxvd2VyVG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChzYW1lUGFydHNMZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIHRvO1xyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGxvd2VyRnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xyXG4gIH1cclxuXHJcbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJ1xcXFwnKTtcclxufTtcclxuXHJcblxyXG53aW4zMi5fbWFrZUxvbmcgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgLy8gTm90ZTogdGhpcyB3aWxsICpwcm9iYWJseSogdGhyb3cgc29tZXdoZXJlLlxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSlcclxuICAgIHJldHVybiBwYXRoO1xyXG5cclxuICBpZiAoIXBhdGgpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHZhciByZXNvbHZlZFBhdGggPSB3aW4zMi5yZXNvbHZlKHBhdGgpO1xyXG5cclxuICBpZiAoL15bYS16QS1aXVxcOlxcXFwvLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBsb2NhbCBmaWxlc3lzdGVtIHBhdGgsIHdoaWNoIG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxyXG4gICAgLy8gdG8gbG9uZyBVTkMgcGF0aC5cclxuICAgIHJldHVybiAnXFxcXFxcXFw/XFxcXCcgKyByZXNvbHZlZFBhdGg7XHJcbiAgfSBlbHNlIGlmICgvXlxcXFxcXFxcW14/Ll0vLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBuZXR3b3JrIFVOQyBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFxVTkNcXFxcJyArIHJlc29sdmVkUGF0aC5zdWJzdHJpbmcoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG53aW4zMi5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSB3aW4zMlNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxud2luMzIuYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHdpbjMyU3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHdpbjMyU3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIGlmICghZGlyKSB7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9XHJcbiAgaWYgKGRpcltkaXIubGVuZ3RoIC0gMV0gPT09IHdpbjMyLnNlcCkge1xyXG4gICAgcmV0dXJuIGRpciArIGJhc2U7XHJcbiAgfVxyXG4gIHJldHVybiBkaXIgKyB3aW4zMi5zZXAgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICByb290OiBhbGxQYXJ0c1swXSxcclxuICAgIGRpcjogYWxsUGFydHNbMF0gKyBhbGxQYXJ0c1sxXS5zbGljZSgwLCAtMSksXHJcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcclxuICAgIGV4dDogYWxsUGFydHNbM10sXHJcbiAgICBuYW1lOiBhbGxQYXJ0c1syXS5zbGljZSgwLCBhbGxQYXJ0c1syXS5sZW5ndGggLSBhbGxQYXJ0c1szXS5sZW5ndGgpXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG53aW4zMi5zZXAgPSAnXFxcXCc7XHJcbndpbjMyLmRlbGltaXRlciA9ICc7JztcclxuXHJcblxyXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxyXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxyXG52YXIgc3BsaXRQYXRoUmUgPVxyXG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XHJcbnZhciBwb3NpeCA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LnJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcclxuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XHJcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aFswXSA9PT0gJy8nO1xyXG4gIH1cclxuXHJcbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxyXG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XHJcbn07XHJcblxyXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgaXNBYnNvbHV0ZSA9IHBvc2l4LmlzQWJzb2x1dGUocGF0aCksXHJcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBwYXRoICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkocGF0aC5zcGxpdCgnLycpLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcclxuICAgIHBhdGggPSAnLic7XHJcbiAgfVxyXG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcclxuICAgIHBhdGggKz0gJy8nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRoID0gJyc7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBzZWdtZW50ID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHNlZ21lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICBwYXRoICs9IHNlZ21lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0aCArPSAnLycgKyBzZWdtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwb3NpeC5ub3JtYWxpemUocGF0aCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XHJcbiAgZnJvbSA9IHBvc2l4LnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xyXG4gIHRvID0gcG9zaXgucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xyXG5cclxuICB2YXIgZnJvbVBhcnRzID0gdHJpbUFycmF5KGZyb20uc3BsaXQoJy8nKSk7XHJcbiAgdmFyIHRvUGFydHMgPSB0cmltQXJyYXkodG8uc3BsaXQoJy8nKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XHJcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XHJcbn07XHJcblxyXG5cclxucG9zaXguX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiBwYXRoO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmRpcm5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpLFxyXG4gICAgICByb290ID0gcmVzdWx0WzBdLFxyXG4gICAgICBkaXIgPSByZXN1bHRbMV07XHJcblxyXG4gIGlmICghcm9vdCAmJiAhZGlyKSB7XHJcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcclxuICAgIHJldHVybiAnLic7XHJcbiAgfVxyXG5cclxuICBpZiAoZGlyKSB7XHJcbiAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxyXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdCArIGRpcjtcclxufTtcclxuXHJcblxyXG5wb3NpeC5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xyXG4gIHZhciBmID0gcG9zaXhTcGxpdFBhdGgocGF0aClbMl07XHJcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xyXG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XHJcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIGY7XHJcbn07XHJcblxyXG5cclxucG9zaXguZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcG9zaXhTcGxpdFBhdGgocGF0aClbM107XHJcbn07XHJcblxyXG5cclxucG9zaXguZm9ybWF0ID0gZnVuY3Rpb24ocGF0aE9iamVjdCkge1xyXG4gIGlmICghdXRpbC5pc09iamVjdChwYXRoT2JqZWN0KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aE9iamVjdCcgbXVzdCBiZSBhbiBvYmplY3QsIG5vdCBcIiArIHR5cGVvZiBwYXRoT2JqZWN0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvb3QgPSBwYXRoT2JqZWN0LnJvb3QgfHwgJyc7XHJcblxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhyb290KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIidwYXRoT2JqZWN0LnJvb3QnIG11c3QgYmUgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBub3QgXCIgK1xyXG4gICAgICAgIHR5cGVvZiBwYXRoT2JqZWN0LnJvb3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGlyID0gcGF0aE9iamVjdC5kaXIgPyBwYXRoT2JqZWN0LmRpciArIHBvc2l4LnNlcCA6ICcnO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIHJldHVybiBkaXIgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIGFsbFBhcnRzWzFdID0gYWxsUGFydHNbMV0gfHwgJyc7XHJcbiAgYWxsUGFydHNbMl0gPSBhbGxQYXJ0c1syXSB8fCAnJztcclxuICBhbGxQYXJ0c1szXSA9IGFsbFBhcnRzWzNdIHx8ICcnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxucG9zaXguc2VwID0gJy8nO1xyXG5wb3NpeC5kZWxpbWl0ZXIgPSAnOic7XHJcblxyXG5cclxuaWYgKGlzV2luZG93cylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyO1xyXG5lbHNlIC8qIHBvc2l4ICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBwb3NpeDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXg7XHJcbm1vZHVsZS5leHBvcnRzLndpbjMyID0gd2luMzI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXRoL3BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHBhdGggZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IHdpbjMyLCBwb3NpeCwgUGFyc2VkUGF0aCB9IGZyb20gJy4vcGF0aCc7XG5leHBvcnQgZGVmYXVsdCBwYXRoO1xuZXhwb3J0IHsgd2luMzIsIHBvc2l4LCBQYXJzZWRQYXRoIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXgudHMiLCJleHBvcnQgY29uc3Qgbm9vcCA9IChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICB0aHJvdyAnbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCc7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL25vb3AudHMiLCJpbXBvcnQgKiBhcyB0c1VuaXQgZnJvbSAndHMtdW5pdCc7XG5pbXBvcnQgeyBQYXRoU3BlYyB9IGZyb20gJy4vUGF0aC5Ob2RlLnNwZWMnO1xuaW1wb3J0IHsgUGxhdGZvcm1TcGVjIH0gZnJvbSAnLi9QbGF0Zm9ybS5Ob2RlLnNwZWMnO1xuXG5jb25zdCBJc29tb3JwaGljUGF0aFRlc3RzID0gW1xuICBQYXRoU3BlYyxcbiAgUGxhdGZvcm1TcGVjLFxuXTtcbmNvbnN0IHRlc3QgPSBuZXcgdHNVbml0LlRlc3QoSXNvbW9ycGhpY1BhdGhUZXN0cyk7XG5jb25zdCByZXN1bHQgPSB0ZXN0LnJ1bigpO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zb2xlLmxvZyhyZXN1bHQuZ2V0VGFwUmVzdWx0cygpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvUnVubmVyLk5vZGUudHMiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi90c1VuaXRcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vdHNVbml0QXN5bmNcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VHNVbml0TW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2Rpc3Qvc3JjL1RzVW5pdE1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c1VuaXRfMSA9IHJlcXVpcmUoXCIuL3RzVW5pdFwiKTtcbnZhciB0c1VuaXRfMiA9IHJlcXVpcmUoXCIuL3RzVW5pdFwiKTtcbmV4cG9ydHMuVGVzdCA9IHRzVW5pdF8yLlRlc3Q7XG5leHBvcnRzLlRlc3RDb250ZXh0ID0gdHNVbml0XzIuVGVzdENvbnRleHQ7XG5leHBvcnRzLlRlc3RDbGFzcyA9IHRzVW5pdF8yLlRlc3RDbGFzcztcbmV4cG9ydHMuRmFrZUZhY3RvcnkgPSB0c1VuaXRfMi5GYWtlRmFjdG9yeTtcbmV4cG9ydHMuVGVzdERlc2NyaXB0aW9uID0gdHNVbml0XzIuVGVzdERlc2NyaXB0aW9uO1xuZXhwb3J0cy5UZXN0RGVmaW5pdGlvbiA9IHRzVW5pdF8yLlRlc3REZWZpbml0aW9uO1xuY2xhc3MgVGVzdEFzeW5jIGV4dGVuZHMgdHNVbml0XzEuVGVzdCB7XG4gICAgcnVuQWxsKHRlc3RzLCB0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICBsZXQgdGhpc1Rlc3QgPSB0ZXN0c1swXTtcbiAgICAgICAgdmFyIHRlc3RDbGFzcyA9IHRoaXNUZXN0LnRlc3RDbGFzcztcbiAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgIHZhciB0ZXN0c0dyb3VwTmFtZSA9IHRoaXNUZXN0Lm5hbWU7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gdHNVbml0XzEuRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlci5nZXRGdW5jdGlvbk5hbWVzKHRlc3RDbGFzcyk7XG4gICAgICAgIGxldCBmdW5jdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgdW5pdFRlc3ROYW1lID0gcHJvcGVydHlOYW1lc1tqXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Jlc2VydmVkRnVuY3Rpb25OYW1lKHVuaXRUZXN0TmFtZSkgJiZcbiAgICAgICAgICAgICAgICAhKHVuaXRUZXN0TmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4Lmxlbmd0aCkgPT09IHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeCkgJiZcbiAgICAgICAgICAgICAgICAhKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0gIT09ICdmdW5jdGlvbicpICYmXG4gICAgICAgICAgICAgICAgKCF0ZXN0UnVuTGltaXRlciB8fCB0ZXN0UnVuTGltaXRlci5pc1Rlc3RBY3RpdmUodW5pdFRlc3ROYW1lKSkpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnMucHVzaCh1bml0VGVzdE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZW1haW5pbmdUZXN0cyA9IHRlc3RzLnNsaWNlKDEpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucnVuQWxsRnVuY3Rpb25zKHRoaXNUZXN0LCBmdW5jdGlvbnMsIHRlc3RSdW5MaW1pdGVyKTtcbiAgICAgICAgaWYgKHJlbWFpbmluZ1Rlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB0aGlzLnJ1bkFsbChyZW1haW5pbmdUZXN0cywgdGVzdFJ1bkxpbWl0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcnVuQWxsRnVuY3Rpb25zKHRoaXNUZXN0LCBmdW5jdGlvbk5hbWVzLCB0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICBsZXQgdW5pdFRlc3ROYW1lID0gZnVuY3Rpb25OYW1lc1swXTtcbiAgICAgICAgbGV0IHJlbWFpbmluZ0Z1bmN0aW9ucyA9IGZ1bmN0aW9uTmFtZXMuc2xpY2UoMSk7XG4gICAgICAgIHZhciB0ZXN0Q2xhc3MgPSB0aGlzVGVzdC50ZXN0Q2xhc3M7XG4gICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICB2YXIgdGVzdHNHcm91cE5hbWUgPSB0aGlzVGVzdC5uYW1lO1xuICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0gZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5ydW5BbGxQYXJhbWV0ZXJzKHRoaXNUZXN0LCB1bml0VGVzdE5hbWUsIDAsIHRlc3RSdW5MaW1pdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnJ1blNpbmdsZVRlc3RBc3luYyh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1haW5pbmdGdW5jdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigoKSA9PiB0aGlzLnJ1bkFsbEZ1bmN0aW9ucyh0aGlzVGVzdCwgcmVtYWluaW5nRnVuY3Rpb25zLCB0ZXN0UnVuTGltaXRlcikpO1xuICAgICAgICB9XG4gICAgICAgIHByb21pc2UudGhlbigoeCkgPT4ge1xuICAgICAgICAgICAgdGVzdENsYXNzLnRlYXJEb3duICYmIHRlc3RDbGFzcy50ZWFyRG93bigpO1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHRlc3RDbGFzcy50ZWFyRG93biAmJiB0ZXN0Q2xhc3MudGVhckRvd24oKTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBydW5BbGxQYXJhbWV0ZXJzKHRoaXNUZXN0LCB1bml0VGVzdE5hbWUsIHBhcmFtZXRlckluZGV4LCB0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICBsZXQgdGVzdENsYXNzID0gdGhpc1Rlc3QudGVzdENsYXNzO1xuICAgICAgICBsZXQgZHluYW1pY1Rlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgbGV0IHRlc3RzR3JvdXBOYW1lID0gdGhpc1Rlc3QubmFtZTtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycztcbiAgICAgICAgbGV0IG1heEluZGV4ID0gcGFyYW1ldGVycy5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJhbWV0ZXJJbmRleDtcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCBwYXJhbWV0ZXJzLmxlbmd0aCAmJiAhdGVzdFJ1bkxpbWl0ZXIuaXNQYXJhbWV0ZXJzU2V0QWN0aXZlKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgcGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1blNpbmdsZVRlc3RBc3luYyh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUsIHBhcmFtZXRlcnMsIGluZGV4KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMucnVuQWxsUGFyYW1ldGVycyh0aGlzVGVzdCwgdW5pdFRlc3ROYW1lLCBpbmRleCArIDEsIHRlc3RSdW5MaW1pdGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICB9XG4gICAgcnVuU2luZ2xlVGVzdEFzeW5jKHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycyA9IG51bGwsIHBhcmFtZXRlclNldEluZGV4ID0gbnVsbCkge1xuICAgICAgICAvLyBydW5uaW5nIGV2ZXJ5dGhpbmcgaW5zaWRlIC50aGVuIHNhdmVzIHVzIGEgdHJ5L2NhdGNoXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRlc3RDbGFzcy5zZXRVcCAmJiB0ZXN0Q2xhc3Muc2V0VXAoKTtcbiAgICAgICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSAocGFyYW1ldGVyU2V0SW5kZXggIT09IG51bGwpID8gcGFyYW1ldGVyc1twYXJhbWV0ZXJTZXRJbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5hcHBseSh0ZXN0Q2xhc3MsIGFyZ3MpO1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFzc2VzLnB1c2gobmV3IHRzVW5pdF8xLlRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgJ09LJykpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IHRzVW5pdF8xLlRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgZXJyLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuQXN5bmModGVzdFJ1bkxpbWl0ZXIgPSBudWxsKSB7XG4gICAgICAgIHZhciBwYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgdmFyIHRlc3RDb250ZXh0ID0gbmV3IHRzVW5pdF8xLlRlc3RDb250ZXh0KCk7XG4gICAgICAgIGlmICh0ZXN0UnVuTGltaXRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZXN0UnVuTGltaXRlciA9IHRoaXMudGVzdFJ1bkxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRlc3RzID0gdGhpcy50ZXN0cztcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgICAgICB0ZXN0cyA9IHRlc3RzLmZpbHRlcigoeCkgPT4gdGVzdFJ1bkxpbWl0ZXIuaXNUZXN0c0dyb3VwQWN0aXZlKHgubmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bkFsbCh0ZXN0cywgdGVzdFJ1bkxpbWl0ZXIpO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlIHJ1bkFzeW5jXCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2UgcnVuQXN5bmNcIik7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0QXN5bmMgPSBUZXN0QXN5bmM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10c1VuaXRBc3luYy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXRBc3luYy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInV0aWxcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==