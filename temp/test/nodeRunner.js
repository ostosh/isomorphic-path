(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("util"));
	else if(typeof define === 'function' && define.amd)
		define(["util"], factory);
	else if(typeof exports === 'object')
		exports["nodeRunner"] = factory(require("util"));
	else
		root["nodeRunner"] = factory(root["util"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(8);
const platform_1 = __webpack_require__(4);
const noop_1 = __webpack_require__(9);
const unsupportedMethods = {
    resolve: noop_1.noop,
    relative: noop_1.noop,
};
const win32Runtime = path_1.win32;
exports.win32 = win32Runtime;
const posixRuntime = path_1.posix;
exports.posix = posixRuntime;
let defaultExport;
if (platform_1.isWin()) {
    defaultExport = Object.assign({}, win32Runtime);
}
else {
    defaultExport = Object.assign({}, posixRuntime);
}
let normalizeRuntime;
exports.normalize = normalizeRuntime;
let joinRuntime;
exports.join = joinRuntime;
let resolveRuntime;
exports.resolve = resolveRuntime;
let isAbsoluteRuntime;
exports.isAbsolute = isAbsoluteRuntime;
let relativeRuntime;
exports.relative = relativeRuntime;
let dirnameRuntime;
exports.dirname = dirnameRuntime;
let basenameRuntime;
exports.basename = basenameRuntime;
let extnameRuntime;
exports.extname = extnameRuntime;
let sepRuntime;
exports.sepRuntime = sepRuntime;
let delimiterRuntime;
exports.delimiter = delimiterRuntime;
let parseRuntime;
exports.parse = parseRuntime;
let formatRuntime;
exports.format = formatRuntime;
if (platform_1.isWin()) {
    exports.normalize = normalizeRuntime = win32Runtime.normalize;
    exports.join = joinRuntime = win32Runtime.join;
    exports.resolve = resolveRuntime = win32Runtime.resolve;
    exports.isAbsolute = isAbsoluteRuntime = win32Runtime.isAbsolute;
    exports.relative = relativeRuntime = win32Runtime.relative;
    exports.dirname = dirnameRuntime = win32Runtime.dirname;
    exports.basename = basenameRuntime = win32Runtime.basename;
    exports.extname = extnameRuntime = win32Runtime.extname;
    exports.sepRuntime = sepRuntime = win32Runtime.sep;
    exports.delimiter = delimiterRuntime = win32Runtime.delimiter;
    exports.parse = parseRuntime = win32Runtime.parse;
    exports.format = formatRuntime = win32Runtime.format;
}
else {
    exports.normalize = normalizeRuntime = posixRuntime.normalize;
    exports.join = joinRuntime = posixRuntime.join;
    exports.resolve = resolveRuntime = posixRuntime.resolve;
    exports.isAbsolute = isAbsoluteRuntime = posixRuntime.isAbsolute;
    exports.relative = relativeRuntime = posixRuntime.relative;
    exports.dirname = dirnameRuntime = posixRuntime.dirname;
    exports.basename = basenameRuntime = posixRuntime.basename;
    exports.extname = extnameRuntime = posixRuntime.extname;
    exports.sepRuntime = sepRuntime = posixRuntime.sep;
    exports.delimiter = delimiterRuntime = posixRuntime.delimiter;
    exports.parse = parseRuntime = posixRuntime.parse;
    exports.format = formatRuntime = posixRuntime.format;
}
exports.default = defaultExport;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


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
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 4 */
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
exports.isWin = () => {
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
/* 5 */
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
        this.areNotIdentical('\\foo\\bar\\baz', isomorphicPath.win32.resolve('/foo/bar', './baz'), 'win32 should not resolve posix path to windows format');
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(1);
const platform_1 = __webpack_require__(4);
class PlatformSpec extends tsUnit.TestClass {
    testOs() {
        process.__defineGetter__('platform', () => 'win32'); // stub platform call
        this.isTrue(platform_1.isWin(), 'isWin should return true for windows platform id: "win32"');
        this.isFalse(platform_1.isMac(), 'isMac should return false for windows platform id: "win32"');
        process.__defineGetter__('platform', () => 'darwin'); // stub platform call
        this.isFalse(platform_1.isWin(), 'isWin should return false for mac platform id: "darwin"');
        this.isTrue(platform_1.isMac(), 'isMac should return true for mac platform id: "darwin"');
    }
    testEnv() {
        this.isTrue(platform_1.isNode(), 'isNode should return true for node spec');
        this.isFalse(platform_1.isBrowser(), 'isBrowser should return false for browser spec');
    }
}
exports.PlatformSpec = PlatformSpec;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(3));
	else if(typeof define === 'function' && define.amd)
		define(["util"], factory);
	else if(typeof exports === 'object')
		exports["isomorphic-path"] = factory(require("util"));
	else
		root["isomorphic-path"] = factory(root["util"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(1);
const platform_1 = __webpack_require__(4);
const noop_1 = __webpack_require__(3);
const unsupportedMethods = {
    resolve: noop_1.noop,
    relative: noop_1.noop,
};
const win32Runtime = path_1.win32;
exports.win32 = win32Runtime;
const posixRuntime = path_1.posix;
exports.posix = posixRuntime;
let defaultExport;
if (platform_1.isWin()) {
    defaultExport = Object.assign({}, win32Runtime);
}
else {
    defaultExport = Object.assign({}, posixRuntime);
}
let normalizeRuntime;
exports.normalize = normalizeRuntime;
let joinRuntime;
exports.join = joinRuntime;
let resolveRuntime;
exports.resolve = resolveRuntime;
let isAbsoluteRuntime;
exports.isAbsolute = isAbsoluteRuntime;
let relativeRuntime;
exports.relative = relativeRuntime;
let dirnameRuntime;
exports.dirname = dirnameRuntime;
let basenameRuntime;
exports.basename = basenameRuntime;
let extnameRuntime;
exports.extname = extnameRuntime;
let sepRuntime;
exports.sepRuntime = sepRuntime;
let delimiterRuntime;
exports.delimiter = delimiterRuntime;
let parseRuntime;
exports.parse = parseRuntime;
let formatRuntime;
exports.format = formatRuntime;
if (platform_1.isWin()) {
    exports.normalize = normalizeRuntime = win32Runtime.normalize;
    exports.join = joinRuntime = win32Runtime.join;
    exports.resolve = resolveRuntime = win32Runtime.resolve;
    exports.isAbsolute = isAbsoluteRuntime = win32Runtime.isAbsolute;
    exports.relative = relativeRuntime = win32Runtime.relative;
    exports.dirname = dirnameRuntime = win32Runtime.dirname;
    exports.basename = basenameRuntime = win32Runtime.basename;
    exports.extname = extnameRuntime = win32Runtime.extname;
    exports.sepRuntime = sepRuntime = win32Runtime.sep;
    exports.delimiter = delimiterRuntime = win32Runtime.delimiter;
    exports.parse = parseRuntime = win32Runtime.parse;
    exports.format = formatRuntime = win32Runtime.format;
}
else {
    exports.normalize = normalizeRuntime = posixRuntime.normalize;
    exports.join = joinRuntime = posixRuntime.join;
    exports.resolve = resolveRuntime = posixRuntime.resolve;
    exports.isAbsolute = isAbsoluteRuntime = posixRuntime.isAbsolute;
    exports.relative = relativeRuntime = posixRuntime.relative;
    exports.dirname = dirnameRuntime = posixRuntime.dirname;
    exports.basename = basenameRuntime = posixRuntime.basename;
    exports.extname = extnameRuntime = posixRuntime.extname;
    exports.sepRuntime = sepRuntime = posixRuntime.sep;
    exports.delimiter = delimiterRuntime = posixRuntime.delimiter;
    exports.parse = parseRuntime = posixRuntime.parse;
    exports.format = formatRuntime = posixRuntime.format;
}
exports.default = defaultExport;


/***/ }),
/* 1 */
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
var util = __webpack_require__(5);


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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = (from, to) => {
    throw Error('method unsupported in isomorphic-path');
};


/***/ }),
/* 4 */
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
exports.isWin = () => {
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
/* 5 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(3);

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMDY2ZDRiNWY3ZTlmZTFmOThlMCIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaEVBLHNDQUFtRTtBQUNuRSwwQ0FBbUM7QUFDbkMsc0NBQThCO0FBRTlCLE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsT0FBTyxFQUFFLFdBQUk7SUFDYixRQUFRLEVBQUUsV0FBSTtDQUNmLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxZQUFTLENBQUM7QUFpRWIsNkJBQUs7QUFoRXZCLE1BQU0sWUFBWSxH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O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixFQUFFOztBQUUxQjtBQUNBO0FBQ0EsdUJBQXVCLElBQUk7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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SUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVc7V0FDdEMsT0FBTyxTQUFTLENBQUMsUUFBUSxLQUFLLFFBQVE7V0FDdEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVXLGlCQUFTLEdBQUcsR0FBWSxFQUFFO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRVcsY0FBTSxHQUFHLEdBQVksRUFBRTtJQUNsQyxNQUFNLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsQ0FBQztBQUN6RSxDQUFDLENBQUM7Ozs7Ozs7QUNsQ0YsaUMiLCJmaWxlIjoiaXNvbW9ycGhpYy1wYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ1dGlsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlzb21vcnBoaWMtcGF0aFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInV0aWxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImlzb21vcnBoaWMtcGF0aFwiXSA9IGZhY3Rvcnkocm9vdFtcInV0aWxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMDY2ZDRiNWY3ZTlmZTFmOThlMCIsImltcG9ydCB7IHdpbjMyIGFzIHdpbjMyQmFzZSwgcG9zaXggYXMgcG9zaXhCYXNlIH0gZnJvbSAncGF0aC9wYXRoJztcbmltcG9ydCB7IGlzV2luIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9ub29wJztcblxuY29uc3QgdW5zdXBwb3J0ZWRNZXRob2RzID0ge1xuICByZXNvbHZlOiBub29wLFxuICByZWxhdGl2ZTogbm9vcCxcbn07XG5cbmNvbnN0IHdpbjMyUnVudGltZSA9IHdpbjMyQmFzZTtcbmNvbnN0IHBvc2l4UnVudGltZSA9IHBvc2l4QmFzZTtcblxubGV0IGRlZmF1bHRFeHBvcnQ7XG5pZiAoaXNXaW4oKSkge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luMzJSdW50aW1lKTtcbn0gZWxzZSB7XG4gIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwb3NpeFJ1bnRpbWUpO1xufVxubGV0IG5vcm1hbGl6ZVJ1bnRpbWU7XG5sZXQgam9pblJ1bnRpbWU7XG5sZXQgcmVzb2x2ZVJ1bnRpbWU7XG5sZXQgaXNBYnNvbHV0ZVJ1bnRpbWU7XG5sZXQgcmVsYXRpdmVSdW50aW1lO1xubGV0IGRpcm5hbWVSdW50aW1lO1xubGV0IGJhc2VuYW1lUnVudGltZTtcbmxldCBleHRuYW1lUnVudGltZTtcbmxldCBzZXBSdW50aW1lO1xubGV0IGRlbGltaXRlclJ1bnRpbWU7XG5sZXQgcGFyc2VSdW50aW1lO1xubGV0IGZvcm1hdFJ1bnRpbWU7XG5cbmlmIChpc1dpbigpKSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHdpbjMyUnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHdpbjMyUnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHdpbjMyUnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZm9ybWF0O1xufSBlbHNlIHtcbiAgbm9ybWFsaXplUnVudGltZSA9IHBvc2l4UnVudGltZS5ub3JtYWxpemU7XG4gIGpvaW5SdW50aW1lID0gcG9zaXhSdW50aW1lLmpvaW47XG4gIHJlc29sdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlc29sdmU7XG4gIGlzQWJzb2x1dGVSdW50aW1lID0gcG9zaXhSdW50aW1lLmlzQWJzb2x1dGU7XG4gIHJlbGF0aXZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZWxhdGl2ZTtcbiAgZGlybmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGlybmFtZTtcbiAgYmFzZW5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmJhc2VuYW1lO1xuICBleHRuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5leHRuYW1lO1xuICBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcbiAgZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XG4gIHBhcnNlUnVudGltZSA9IHBvc2l4UnVudGltZS5wYXJzZTtcbiAgZm9ybWF0UnVudGltZSA9IHBvc2l4UnVudGltZS5mb3JtYXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRFeHBvcnQ7XG5leHBvcnQge1xuICBub3JtYWxpemVSdW50aW1lIGFzIG5vcm1hbGl6ZSxcbiAgam9pblJ1bnRpbWUgYXMgam9pbixcbiAgcmVzb2x2ZVJ1bnRpbWUgYXMgcmVzb2x2ZSxcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgYXMgaXNBYnNvbHV0ZSxcbiAgcmVsYXRpdmVSdW50aW1lIGFzIHJlbGF0aXZlLFxuICBkaXJuYW1lUnVudGltZSBhcyBkaXJuYW1lLFxuICBiYXNlbmFtZVJ1bnRpbWUgYXMgYmFzZW5hbWUsXG4gIGV4dG5hbWVSdW50aW1lIGFzIGV4dG5hbWUsXG4gIHNlcFJ1bnRpbWUgYXMgc2VwUnVudGltZSxcbiAgZGVsaW1pdGVyUnVudGltZSBhcyBkZWxpbWl0ZXIsXG4gIHBhcnNlUnVudGltZSBhcyBwYXJzZSxcbiAgZm9ybWF0UnVudGltZSBhcyBmb3JtYXQsXG4gIHBvc2l4UnVudGltZSBhcyBwb3NpeCxcbiAgd2luMzJSdW50aW1lIGFzIHdpbjMyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wYXRoLnRzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGF0aC9wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vcGF0aCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXgudHMiLCJleHBvcnQgY29uc3Qgbm9vcCA9IChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9ub29wLnRzIiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1dpbiA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wbGF0Zm9ybS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1dGlsXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),
/* 8 */
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
var util = __webpack_require__(3);


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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = (from, to) => {
    throw Error('method unsupported in isomorphic-path');
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = __webpack_require__(1);
const Path_Node_spec_1 = __webpack_require__(5);
const Platform_Node_spec_1 = __webpack_require__(6);
const IsomorphicPathTests = [
    Path_Node_spec_1.PathSpec,
    Platform_Node_spec_1.PlatformSpec,
];
const test = new tsUnit.Test(IsomorphicPathTests);
const result = test.run();
// tslint:disable-next-line
console.log(result.getTapResults());


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(12));
//# sourceMappingURL=TsUnitModule.js.map

/***/ }),
/* 12 */
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMDUwYWRkZWEyZmZhNWY4MWY1YyIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3RzLXVuaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy8uL3Rlc3QvUGF0aC5Ob2RlLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9QbGF0Zm9ybS5Ob2RlLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pc29tb3JwaGljLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXRoL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9SdW5uZXIuTm9kZS50cyIsIndlYnBhY2s6Ly8vLi9+L3RzLXVuaXQvZGlzdC9zcmMvVHNVbml0TW9kdWxlLmpzIiwid2VicGFjazovLy8uL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXRBc3luYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixFQUFFOztBQUUxQjtBQUNBO0FBQ0EsdUJBQXVCLElBQUk7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixFQUFFOztBQUUxQjtBQUNBO0FBQ0EsdUJBQXVCLElBQUk7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2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QTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUMiLCJmaWxlIjoibm9kZVJ1bm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInV0aWxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widXRpbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJub2RlUnVubmVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibm9kZVJ1bm5lclwiXSA9IGZhY3Rvcnkocm9vdFtcInV0aWxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjA1MGFkZGVhMmZmYTVmODFmNWMiLCJpbXBvcnQgeyB3aW4zMiBhcyB3aW4zMkJhc2UsIHBvc2l4IGFzIHBvc2l4QmFzZSB9IGZyb20gJ3BhdGgvcGF0aCc7XG5pbXBvcnQgeyBpc1dpbiB9IGZyb20gJy4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vbm9vcCc7XG5cbmNvbnN0IHVuc3VwcG9ydGVkTWV0aG9kcyA9IHtcbiAgcmVzb2x2ZTogbm9vcCxcbiAgcmVsYXRpdmU6IG5vb3AsXG59O1xuXG5jb25zdCB3aW4zMlJ1bnRpbWUgPSB3aW4zMkJhc2U7XG5jb25zdCBwb3NpeFJ1bnRpbWUgPSBwb3NpeEJhc2U7XG5cbmxldCBkZWZhdWx0RXhwb3J0O1xuaWYgKGlzV2luKCkpIHtcbiAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbjMyUnVudGltZSk7XG59IGVsc2Uge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgcG9zaXhSdW50aW1lKTtcbn1cbmxldCBub3JtYWxpemVSdW50aW1lO1xubGV0IGpvaW5SdW50aW1lO1xubGV0IHJlc29sdmVSdW50aW1lO1xubGV0IGlzQWJzb2x1dGVSdW50aW1lO1xubGV0IHJlbGF0aXZlUnVudGltZTtcbmxldCBkaXJuYW1lUnVudGltZTtcbmxldCBiYXNlbmFtZVJ1bnRpbWU7XG5sZXQgZXh0bmFtZVJ1bnRpbWU7XG5sZXQgc2VwUnVudGltZTtcbmxldCBkZWxpbWl0ZXJSdW50aW1lO1xubGV0IHBhcnNlUnVudGltZTtcbmxldCBmb3JtYXRSdW50aW1lO1xuXG5pZiAoaXNXaW4oKSkge1xuICBub3JtYWxpemVSdW50aW1lID0gd2luMzJSdW50aW1lLm5vcm1hbGl6ZTtcbiAgam9pblJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuam9pbjtcbiAgcmVzb2x2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVzb2x2ZTtcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuaXNBYnNvbHV0ZTtcbiAgcmVsYXRpdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlbGF0aXZlO1xuICBkaXJuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5kaXJuYW1lO1xuICBiYXNlbmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuYmFzZW5hbWU7XG4gIGV4dG5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmV4dG5hbWU7XG4gIHNlcFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuc2VwO1xuICBkZWxpbWl0ZXJSdW50aW1lID0gd2luMzJSdW50aW1lLmRlbGltaXRlcjtcbiAgcGFyc2VSdW50aW1lID0gd2luMzJSdW50aW1lLnBhcnNlO1xuICBmb3JtYXRSdW50aW1lID0gd2luMzJSdW50aW1lLmZvcm1hdDtcbn0gZWxzZSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHBvc2l4UnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHBvc2l4UnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHBvc2l4UnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZm9ybWF0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0RXhwb3J0O1xuZXhwb3J0IHtcbiAgbm9ybWFsaXplUnVudGltZSBhcyBub3JtYWxpemUsXG4gIGpvaW5SdW50aW1lIGFzIGpvaW4sXG4gIHJlc29sdmVSdW50aW1lIGFzIHJlc29sdmUsXG4gIGlzQWJzb2x1dGVSdW50aW1lIGFzIGlzQWJzb2x1dGUsXG4gIHJlbGF0aXZlUnVudGltZSBhcyByZWxhdGl2ZSxcbiAgZGlybmFtZVJ1bnRpbWUgYXMgZGlybmFtZSxcbiAgYmFzZW5hbWVSdW50aW1lIGFzIGJhc2VuYW1lLFxuICBleHRuYW1lUnVudGltZSBhcyBleHRuYW1lLFxuICBzZXBSdW50aW1lIGFzIHNlcFJ1bnRpbWUsXG4gIGRlbGltaXRlclJ1bnRpbWUgYXMgZGVsaW1pdGVyLFxuICBwYXJzZVJ1bnRpbWUgYXMgcGFyc2UsXG4gIGZvcm1hdFJ1bnRpbWUgYXMgZm9ybWF0LFxuICBwb3NpeFJ1bnRpbWUgYXMgcG9zaXgsXG4gIHdpbjMyUnVudGltZSBhcyB3aW4zMixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvcGF0aC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NyYy9Uc1VuaXRNb2R1bGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuLyogdHNVbml0IChjKSBDb3B5cmlnaHQgMjAxMi0yMDE1IFN0ZXZlIEZlbnRvbiwgbGljZW5zZWQgdW5kZXIgQXBhY2hlIDIuMCBodHRwczovL2dpdGh1Yi5jb20vU3RldmUtRmVudG9uL3RzVW5pdCAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVGVzdCB7XG4gICAgY29uc3RydWN0b3IoLi4udGVzdE1vZHVsZXMpIHtcbiAgICAgICAgdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4ID0gJ18nO1xuICAgICAgICB0aGlzLnBhc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLnRlc3RzID0gW107XG4gICAgICAgIHRoaXMucmVzZXJ2ZWRNZXRob2ROYW1lQ29udGFpbmVyID0gbmV3IFRlc3RDbGFzcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVRlc3RMaW1pdGVyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0ZXN0TW9kdWxlID0gdGVzdE1vZHVsZXNbaV07XG4gICAgICAgICAgICBpZiAodGVzdE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHRlc3RNb2R1bGVbXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVzdENsYXNzKG5ldyB0ZXN0TW9kdWxlLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gdGVzdE1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRlc3RDbGFzcyhuZXcgdGVzdE1vZHVsZVtwcm9wXSwgcHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZFRlc3RDbGFzcyh0ZXN0Q2xhc3MsIG5hbWUgPSAnVGVzdHMnKSB7XG4gICAgICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdERlZmluaXRpb24odGVzdENsYXNzLCBuYW1lKSk7XG4gICAgfVxuICAgIHJ1bih0ZXN0UnVuTGltaXRlciA9IG51bGwpIHtcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBudWxsO1xuICAgICAgICB2YXIgdGVzdENvbnRleHQgPSBuZXcgVGVzdENvbnRleHQoKTtcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlc3RSdW5MaW1pdGVyID0gdGhpcy50ZXN0UnVuTGltaXRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGVzdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB0ZXN0Q2xhc3MgPSB0aGlzLnRlc3RzW2ldLnRlc3RDbGFzcztcbiAgICAgICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIHRlc3RzR3JvdXBOYW1lID0gdGhpcy50ZXN0c1tpXS5uYW1lO1xuICAgICAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyICYmICF0ZXN0UnVuTGltaXRlci5pc1Rlc3RzR3JvdXBBY3RpdmUodGVzdHNHcm91cE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0RnVuY3Rpb25OYW1lcyh0ZXN0Q2xhc3MpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRUZXN0TmFtZSA9IHByb3BlcnR5TmFtZXNbal07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXNlcnZlZEZ1bmN0aW9uTmFtZSh1bml0VGVzdE5hbWUpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh1bml0VGVzdE5hbWUuc3Vic3RyaW5nKDAsIHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeC5sZW5ndGgpID09PSB0aGlzLnByaXZhdGVNZW1iZXJQcmVmaXgpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0eXBlb2YgZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICB8fCAodGVzdFJ1bkxpbWl0ZXIgJiYgIXRlc3RSdW5MaW1pdGVyLmlzVGVzdEFjdGl2ZSh1bml0VGVzdE5hbWUpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW1ldGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UnVuTGltaXRlciAmJiAhdGVzdFJ1bkxpbWl0ZXIuaXNQYXJhbWV0ZXJzU2V0QWN0aXZlKHBhcmFtZXRlckluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5TaW5nbGVUZXN0KHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycywgcGFyYW1ldGVySW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1blNpbmdsZVRlc3QodGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dSZXN1bHRzKHRhcmdldCkge1xuICAgICAgICB2YXIgZWxlbTtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSB0YXJnZXQ7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVtcGxhdGUgPSAnPGFydGljbGU+JyArXG4gICAgICAgICAgICAnPGgxPicgKyB0aGlzLmdldFRlc3RSZXN1bHQoKSArICc8L2gxPicgK1xuICAgICAgICAgICAgJzxwPicgKyB0aGlzLmdldFRlc3RTdW1tYXJ5KCkgKyAnPC9wPicgK1xuICAgICAgICAgICAgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdENsZWFuZXIoKSArXG4gICAgICAgICAgICAnPHNlY3Rpb24gaWQ9XCJ0c0ZhaWxcIj4nICtcbiAgICAgICAgICAgICc8aDI+RXJyb3JzPC9oMj4nICtcbiAgICAgICAgICAgICc8dWwgY2xhc3M9XCJiYWRcIj4nICsgdGhpcy5nZXRUZXN0UmVzdWx0TGlzdCh0aGlzLmVycm9ycykgKyAnPC91bD4nICtcbiAgICAgICAgICAgICc8L3NlY3Rpb24+JyArXG4gICAgICAgICAgICAnPHNlY3Rpb24gaWQ9XCJ0c09rYXlcIj4nICtcbiAgICAgICAgICAgICc8aDI+UGFzc2luZyBUZXN0czwvaDI+JyArXG4gICAgICAgICAgICAnPHVsIGNsYXNzPVwiZ29vZFwiPicgKyB0aGlzLmdldFRlc3RSZXN1bHRMaXN0KHRoaXMucGFzc2VzKSArICc8L3VsPicgK1xuICAgICAgICAgICAgJzwvc2VjdGlvbj4nICtcbiAgICAgICAgICAgICc8L2FydGljbGU+JyArXG4gICAgICAgICAgICB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0Q2xlYW5lcigpO1xuICAgICAgICBlbGVtLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0VGFwUmVzdWx0cygpIHtcbiAgICAgICAgdmFyIG5ld0xpbmUgPSAnXFxyXFxuJztcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gJzEuLicgKyAodGhpcy5wYXNzZXMubGVuZ3RoICsgdGhpcy5lcnJvcnMubGVuZ3RoKS50b1N0cmluZygpICsgbmV3TGluZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gJ25vdCBvayAnICsgdGhpcy5lcnJvcnNbaV0ubWVzc2FnZSArICcgJyArIHRoaXMuZXJyb3JzW2ldLnRlc3ROYW1lICsgJzonICsgdGhpcy5lcnJvcnNbaV0uZnVuY05hbWUgKyBuZXdMaW5lO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBsYXRlICs9ICdvayAnICsgdGhpcy5wYXNzZXNbaV0udGVzdE5hbWUgKyAnOicgKyB0aGlzLnBhc3Nlc1tpXS5mdW5jTmFtZSArIG5ld0xpbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBjcmVhdGVUZXN0TGltaXRlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGVzdFJ1bkxpbWl0ZXIgPSBuZXcgVGVzdFJ1bkxpbWl0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHsgfVxuICAgIH1cbiAgICBpc1Jlc2VydmVkRnVuY3Rpb25OYW1lKGZ1bmN0aW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlclxuICAgICAgICAgICAgLmdldEZ1bmN0aW9uTmFtZXModGhpcy5yZXNlcnZlZE1ldGhvZE5hbWVDb250YWluZXIpXG4gICAgICAgICAgICAuc29tZShtZW0gPT4gbWVtID09PSBmdW5jdGlvbk5hbWUpO1xuICAgIH1cbiAgICBydW5TaW5nbGVUZXN0KHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycyA9IG51bGwsIHBhcmFtZXRlclNldEluZGV4ID0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHRlc3RDbGFzc1snc2V0VXAnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGVzdENsYXNzWydzZXRVcCddKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSAocGFyYW1ldGVyU2V0SW5kZXggIT09IG51bGwpID8gcGFyYW1ldGVyc1twYXJhbWV0ZXJTZXRJbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLmFwcGx5KHRlc3RDbGFzcywgYXJncyk7XG4gICAgICAgICAgICB0aGlzLnBhc3Nlcy5wdXNoKG5ldyBUZXN0RGVzY3JpcHRpb24odGVzdHNHcm91cE5hbWUsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVyU2V0SW5kZXgsICdPSycpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBUZXN0RGVzY3JpcHRpb24odGVzdHNHcm91cE5hbWUsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVyU2V0SW5kZXgsIGVyci50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXN0Q2xhc3NbJ3RlYXJEb3duJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRlc3RDbGFzc1sndGVhckRvd24nXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFRlc3RSZXN1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5sZW5ndGggPT09IDAgPyAnVGVzdCBQYXNzZWQnIDogJ1Rlc3QgRmFpbGVkJztcbiAgICB9XG4gICAgZ2V0VGVzdFN1bW1hcnkoKSB7XG4gICAgICAgIHJldHVybiAnVG90YWwgdGVzdHM6IDxzcGFuIGlkPVwidHNVbml0VG90YWxDb3V0XCI+JyArICh0aGlzLnBhc3Nlcy5sZW5ndGggKyB0aGlzLmVycm9ycy5sZW5ndGgpLnRvU3RyaW5nKCkgKyAnPC9zcGFuPi4gJyArXG4gICAgICAgICAgICAnUGFzc2VkIHRlc3RzOiA8c3BhbiBpZD1cInRzVW5pdFBhc3NDb3VudFwiIGNsYXNzPVwiZ29vZFwiPicgKyB0aGlzLnBhc3Nlcy5sZW5ndGggKyAnPC9zcGFuPi4gJyArXG4gICAgICAgICAgICAnRmFpbGVkIHRlc3RzOiA8c3BhbiBpZD1cInRzVW5pdEZhaWxDb3VudFwiIGNsYXNzPVwiYmFkXCI+JyArIHRoaXMuZXJyb3JzLmxlbmd0aCArICc8L3NwYW4+Lic7XG4gICAgfVxuICAgIGdldFRlc3RSZXN1bHRMaXN0KHRlc3RSZXN1bHRzKSB7XG4gICAgICAgIHZhciBsaXN0ID0gJyc7XG4gICAgICAgIHZhciBncm91cCA9ICcnO1xuICAgICAgICB2YXIgaXNGaXJzdCA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdFJlc3VsdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0ZXN0UmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudGVzdE5hbWUgIT09IGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAgPSByZXN1bHQudGVzdE5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdCArPSAnPC9saT48L3VsPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3QgKz0gJzxsaT4nICsgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdGVyRm9yR3JvdXAoZ3JvdXApICsgcmVzdWx0LnRlc3ROYW1lICsgJzx1bD4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdENsYXNzID0gKHJlc3VsdC5tZXNzYWdlID09PSAnT0snKSA/ICdzdWNjZXNzJyA6ICdlcnJvcic7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25MYWJhbCA9IHJlc3VsdC5mdW5jTmFtZSArICgocmVzdWx0LnBhcmFtZXRlclNldE51bWJlciA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICA/ICcoKSdcbiAgICAgICAgICAgICAgICA6ICcoJyArIHRoaXMudGVzdFJ1bkxpbWl0ZXIuZ2V0TGltaXRlckZvclRlc3QoZ3JvdXAsIHJlc3VsdC5mdW5jTmFtZSwgcmVzdWx0LnBhcmFtZXRlclNldE51bWJlcikgKyAnIHBhcmFtYXRlciBzZXQ6ICcgKyByZXN1bHQucGFyYW1ldGVyU2V0TnVtYmVyICsgJyknKTtcbiAgICAgICAgICAgIGxpc3QgKz0gJzxsaSBjbGFzcz1cIicgKyByZXN1bHRDbGFzcyArICdcIj4nICsgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdGVyRm9yVGVzdChncm91cCwgcmVzdWx0LmZ1bmNOYW1lKSArIGZ1bmN0aW9uTGFiYWwgKyAnOiAnICsgdGhpcy5lbmNvZGVIdG1sRW50aXRpZXMocmVzdWx0Lm1lc3NhZ2UpICsgJzwvbGk+JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdCArICc8L3VsPic7XG4gICAgfVxuICAgIGVuY29kZUh0bWxFbnRpdGllcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdCA9IFRlc3Q7XG5jbGFzcyBUZXN0UnVuTGltaXRlclJ1bkFsbCB7XG4gICAgaXNUZXN0c0dyb3VwQWN0aXZlKGdyb3VwTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaXNUZXN0QWN0aXZlKHRlc3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc1BhcmFtZXRlcnNTZXRBY3RpdmUocGFyYW1hdGVyc1NldE51bWJlcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5jbGFzcyBUZXN0UnVuTGltaXRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZXN0TmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXRSZWZyZXNoT25MaW5rc1dpdGhIYXNoKCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlU3RyaW5nSW50b1Rlc3RzTGltaXQod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIH1cbiAgICBpc1Rlc3RzR3JvdXBBY3RpdmUoZ3JvdXBOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBOYW1lID09PSBncm91cE5hbWU7XG4gICAgfVxuICAgIGlzVGVzdEFjdGl2ZSh0ZXN0TmFtZSkge1xuICAgICAgICBpZiAodGhpcy50ZXN0TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdE5hbWUgPT09IHRlc3ROYW1lO1xuICAgIH1cbiAgICBpc1BhcmFtZXRlcnNTZXRBY3RpdmUocGFyYW1hdGVyc1NldCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbWV0ZXJTZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlclNldCA9PT0gcGFyYW1hdGVyc1NldDtcbiAgICB9XG4gICAgZ2V0TGltaXRlckZvclRlc3QoZ3JvdXBOYW1lLCB0ZXN0TmFtZSwgcGFyYW1ldGVyU2V0ID0gbnVsbCkge1xuICAgICAgICBpZiAocGFyYW1ldGVyU2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZXN0TmFtZSArPSAnKCcgKyBwYXJhbWV0ZXJTZXQgKyAnKSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcmbmJzcDs8YSBocmVmPVwiIycgKyBncm91cE5hbWUgKyAnLycgKyB0ZXN0TmFtZSArICdcXFwiIGNsYXNzPVwiYXNjaWlcIj4mIzk2NTg7PC9hPiZuYnNwOyc7XG4gICAgfVxuICAgIGdldExpbWl0ZXJGb3JHcm91cChncm91cE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICcmbmJzcDs8YSBocmVmPVwiIycgKyBncm91cE5hbWUgKyAnXCIgY2xhc3M9XCJhc2NpaVwiPiYjOTY1ODs8L2E+Jm5ic3A7JztcbiAgICB9XG4gICAgZ2V0TGltaXRDbGVhbmVyKCkge1xuICAgICAgICByZXR1cm4gJzxwPjxhIGhyZWY9XCIjXCI+UnVuIGFsbCB0ZXN0cyA8c3BhbiBjbGFzcz1cImFzY2lpXCI+JiM5NjU4Ozwvc3Bhbj48L2E+PC9wPic7XG4gICAgfVxuICAgIHNldFJlZnJlc2hPbkxpbmtzV2l0aEhhc2goKSB7XG4gICAgICAgIHZhciBwcmV2aW91c0hhbmRsZXIgPSB3aW5kb3cub25oYXNoY2hhbmdlO1xuICAgICAgICB3aW5kb3cub25oYXNoY2hhbmdlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSGFuZGxlci5jYWxsKHdpbmRvdywgZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICB0cmFuc2xhdGVTdHJpbmdJbnRvVGVzdHNMaW1pdCh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVnZXggPSAvXiMoW19hLXpBLVowLTldKykoKFxcLyhbX2EtekEtWjAtOV0rKSkoXFwoKFswLTldKylcXCkpPyk/JC87XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdleC5leGVjKHZhbHVlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMSAmJiAhIXJlc3VsdFsxXSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cE5hbWUgPSByZXN1bHRbMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiA0ICYmICEhcmVzdWx0WzRdKSB7XG4gICAgICAgICAgICB0aGlzLnRlc3ROYW1lID0gcmVzdWx0WzRdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gNiAmJiAhIXJlc3VsdFs2XSkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJTZXQgPSBwYXJzZUludChyZXN1bHRbNl0sIDEwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGVzdFJ1bkxpbWl0ZXIgPSBUZXN0UnVuTGltaXRlcjtcbmNsYXNzIFRlc3RDb250ZXh0IHtcbiAgICBzZXRVcCgpIHtcbiAgICB9XG4gICAgdGVhckRvd24oKSB7XG4gICAgfVxuICAgIGFyZUlkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKGV4cGVjdGVkICE9PSBhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZUlkZW50aWNhbCBmYWlsZWQgd2hlbiBnaXZlbiAnICtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50VmFyaWFibGUoZXhwZWN0ZWQpICsgJyBhbmQgJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmVOb3RJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChleHBlY3RlZCA9PT0gYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVOb3RJZGVudGljYWwgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArXG4gICAgICAgICAgICAgICAgdGhpcy5wcmludFZhcmlhYmxlKGV4cGVjdGVkKSArICcgYW5kICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXJlQ29sbGVjdGlvbnNJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlc3VsdFRvU3RyaW5nKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIG1zZyA9ICcnO1xuICAgICAgICAgICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbXNnID0gJ1snICsgcmVzdWx0LnBvcCgpICsgJ10nICsgbXNnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1zZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29tcGFyZUFycmF5ID0gKGV4cGVjdGVkLCBhY3R1YWwsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdmFyIGluZGV4U3RyaW5nID0gJyc7XG4gICAgICAgICAgICBpZiAoZXhwZWN0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gYXJyYXkgYScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIGlzIG51bGwgYW5kIGInICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyBpcyBub3QgbnVsbCcsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGNvcnJlY3Q6IGJvdGggYXJlIG51bGxzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3R1YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbmRleFN0cmluZyA9IHJlc3VsdFRvU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gYXJyYXkgYScgK1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgaXMgbm90IG51bGwgYW5kIGInICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIGlzIG51bGwnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHBlY3RlZC5sZW5ndGggIT09IGFjdHVhbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbmRleFN0cmluZyA9IHJlc3VsdFRvU3RyaW5nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gbGVuZ3RoIG9mIGFycmF5IGEnICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIChsZW5ndGg6ICcgKyBleHBlY3RlZC5sZW5ndGggKyAnKSBpcyBkaWZmZXJlbnQgb2YgbGVuZ3RoIG9mIGFycmF5IGInICtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIChsZW5ndGg6ICcgKyBhY3R1YWwubGVuZ3RoICsgJyknLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKGV4cGVjdGVkW2ldIGluc3RhbmNlb2YgQXJyYXkpICYmIChhY3R1YWxbaV0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVBcnJheShleHBlY3RlZFtpXSwgYWN0dWFsW2ldLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV4cGVjdGVkW2ldICE9PSBhY3R1YWxbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNJZGVudGljYWwgZmFpbGVkIHdoZW4gZWxlbWVudCBhJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKCcgKyB0aGlzLnByaW50VmFyaWFibGUoZXhwZWN0ZWRbaV0pICsgJykgaXMgZGlmZmVyZW50IHRoYW4gZWxlbWVudCBiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKCcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsW2ldKSArICcpJywgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBjb21wYXJlQXJyYXkoZXhwZWN0ZWQsIGFjdHVhbCwgW10pO1xuICAgIH1cbiAgICBhcmVDb2xsZWN0aW9uc05vdElkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuYXJlQ29sbGVjdGlvbnNJZGVudGljYWwoZXhwZWN0ZWQsIGFjdHVhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlQ29sbGVjdGlvbnNOb3RJZGVudGljYWwgZmFpbGVkIHdoZW4gYm90aCBjb2xsZWN0aW9ucyBhcmUgaWRlbnRpY2FsJywgbWVzc2FnZSk7XG4gICAgfVxuICAgIGlzVHJ1ZShhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoIWFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNUcnVlIGZhaWxlZCB3aGVuIGdpdmVuICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNGYWxzZShhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc0ZhbHNlIGZhaWxlZCB3aGVuIGdpdmVuICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNUcnV0aHkoYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKCFhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzVHJ1ZSBmYWlsZWQgd2hlbiBnaXZlbiAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRmFsc2V5KGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzRmFsc2UgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvd3MoYSwgbWVzc2FnZSA9ICcnLCBlcnJvclN0cmluZyA9ICcnKSB7XG4gICAgICAgIHZhciBhY3R1YWw7XG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYWN0dWFsID0gYTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhLmZuKSB7XG4gICAgICAgICAgICBhY3R1YWwgPSBhLmZuO1xuICAgICAgICAgICAgbWVzc2FnZSA9IGEubWVzc2FnZTtcbiAgICAgICAgICAgIGVycm9yU3RyaW5nID0gYS5leGNlcHRpb25TdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzVGhyb3duID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhY3R1YWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3JTdHJpbmcgfHwgZXgubWVzc2FnZSA9PT0gZXJyb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpc1Rocm93biA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyb3JTdHJpbmcgJiYgZXgubWVzc2FnZSAhPT0gZXJyb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdkaWZmZXJlbnQgZXJyb3Igc3RyaW5nIHRoYW4gc3VwcGxpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVGhyb3duKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdkaWQgbm90IHRocm93IGFuIGVycm9yJywgbWVzc2FnZSB8fCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9lc05vdFRocm93KGFjdHVhbCwgbWVzc2FnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYWN0dWFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCd0aHJldyBhbiBlcnJvciAnICsgZXgsIG1lc3NhZ2UgfHwgJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4ZWN1dGVzV2l0aGluKGFjdHVhbCwgdGltZUxpbWl0LCBtZXNzYWdlID0gbnVsbCkge1xuICAgICAgICBmdW5jdGlvbiBnZXRUaW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0aW1lVG9TdHJpbmcodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhcnRPZkV4ZWN1dGlvbiA9IGdldFRpbWUoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFjdHVhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNFeGVjdXRlVGltZUxlc3NUaGFuTGltaXQgZmFpbHMgd2hlbiBnaXZlbiBjb2RlIHRocm93cyBhbiBleGNlcHRpb246IFwiJyArIGV4ICsgJ1wiJywgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4ZWN1dGluZ1RpbWUgPSBnZXRUaW1lKCkgLSBzdGFydE9mRXhlY3V0aW9uO1xuICAgICAgICBpZiAoZXhlY3V0aW5nVGltZSA+IHRpbWVMaW1pdCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNFeGVjdXRlVGltZUxlc3NUaGFuTGltaXQgZmFpbHMgd2hlbiBleGVjdXRpb24gdGltZSBvZiBnaXZlbiBjb2RlICgnICsgdGltZVRvU3RyaW5nKGV4ZWN1dGluZ1RpbWUpICsgJyBtcykgJyArXG4gICAgICAgICAgICAgICAgJ2V4Y2VlZCB0aGUgZ2l2ZW4gbGltaXQoJyArIHRpbWVUb1N0cmluZyh0aW1lTGltaXQpICsgJyBtcyknLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmYWlsKG1lc3NhZ2UgPSAnJykge1xuICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdmYWlsJywgbWVzc2FnZSk7XG4gICAgfVxuICAgIGdldEVycm9yKHJlc3VsdE1lc3NhZ2UsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihyZXN1bHRNZXNzYWdlICsgJy4gJyArIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IocmVzdWx0TWVzc2FnZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROYW1lT2ZDbGFzcyhpbnB1dENsYXNzKSB7XG4gICAgICAgIC8vIHNlZTogaHR0cHM6Ly93d3cuc3RldmVmZW50b24uY28udWsvQ29udGVudC9CbG9nL0RhdGUvMjAxMzA0L0Jsb2cvT2J0YWluaW5nLUEtQ2xhc3MtTmFtZS1BdC1SdW50aW1lLUluLVR5cGVTY3JpcHQvXG4gICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uICguezEsfSlcXCgvO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKGlucHV0Q2xhc3MuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6ICcnO1xuICAgIH1cbiAgICBwcmludFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICdcIm51bGxcIic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YXJpYWJsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiAne29iamVjdDogJyArIFRlc3RDb250ZXh0LmdldE5hbWVPZkNsYXNzKHZhcmlhYmxlKSArICd9JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3snICsgKHR5cGVvZiB2YXJpYWJsZSkgKyAnfSBcIicgKyB2YXJpYWJsZSArICdcIic7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0Q29udGV4dCA9IFRlc3RDb250ZXh0O1xuY2xhc3MgVGVzdENsYXNzIGV4dGVuZHMgVGVzdENvbnRleHQge1xuICAgIHBhcmFtZXRlcml6ZVVuaXRUZXN0KG1ldGhvZCwgcGFyYW1ldGVyc0FycmF5KSB7XG4gICAgICAgIG1ldGhvZC5wYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0FycmF5O1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdENsYXNzID0gVGVzdENsYXNzO1xuY2xhc3MgRmFrZUZhY3Rvcnkge1xuICAgIHN0YXRpYyBnZXRGYWtlKG9iaiwgLi4uaW1wbGVtZW50YXRpb25zKSB7XG4gICAgICAgIHZhciBmYWtlVHlwZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUZha2VUeXBlKGZha2VUeXBlLCBvYmopO1xuICAgICAgICB2YXIgZmFrZSA9IG5ldyBmYWtlVHlwZSgpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0QWxsUHJvcGVydHlOYW1lcyhvYmopO1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGZha2VbcHJvcGVydHlOYW1lc1trXV0gPSBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKCdEZWZhdWx0IGZha2UgY2FsbGVkLicpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBtZW1iZXJOYW1lSW5kZXggPSAwO1xuICAgICAgICB2YXIgbWVtYmVyVmFsdWVJbmRleCA9IDE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1wbGVtZW50YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW1wbCA9IGltcGxlbWVudGF0aW9uc1tpXTtcbiAgICAgICAgICAgIGZha2VbaW1wbFttZW1iZXJOYW1lSW5kZXhdXSA9IGltcGxbbWVtYmVyVmFsdWVJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZha2U7XG4gICAgfVxuICAgIHN0YXRpYyBwb3B1bGF0ZUZha2VUeXBlKGZha2UsIHRvQ29weSkge1xuICAgICAgICBsZXQgcHJvcGVydGllcyA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIuZ2V0QWxsUHJvcGVydHlOYW1lcyh0b0NvcHkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICBmYWtlW3Byb3BlcnR5XSA9IHRvQ29weVtwcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGZha2U7XG4gICAgICAgIH07XG4gICAgICAgIF9fLnByb3RvdHlwZSA9IHRvQ29weS5wcm90b3R5cGU7XG4gICAgICAgIGZha2UucHJvdG90eXBlID0gbmV3IF9fKCk7XG4gICAgfVxufVxuZXhwb3J0cy5GYWtlRmFjdG9yeSA9IEZha2VGYWN0b3J5O1xuY2xhc3MgVGVzdERlZmluaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRlc3RDbGFzcywgbmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3REZWZpbml0aW9uID0gVGVzdERlZmluaXRpb247XG5jbGFzcyBUZXN0RGVzY3JpcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRlc3ROYW1lLCBmdW5jTmFtZSwgcGFyYW1ldGVyU2V0TnVtYmVyLCBtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudGVzdE5hbWUgPSB0ZXN0TmFtZTtcbiAgICAgICAgdGhpcy5mdW5jTmFtZSA9IGZ1bmNOYW1lO1xuICAgICAgICB0aGlzLnBhcmFtZXRlclNldE51bWJlciA9IHBhcmFtZXRlclNldE51bWJlcjtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3REZXNjcmlwdGlvbiA9IFRlc3REZXNjcmlwdGlvbjtcbmNsYXNzIEZ1bmN0aW9uUHJvcGVydHlIZWxwZXIge1xuICAgIHN0YXRpYyB3YWxrSW1wbChvYmosIHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3duUHJvcGVydGllc09mT2JqID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgICAgICAgb3duUHJvcGVydGllc09mT2JqLmZvckVhY2gobWVtID0+IHJlc3VsdHMuYWRkKG1lbSkpO1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICAgICAgaWYgKHByb3RvdHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90b3R5cGUpO1xuICAgICAgICBwcm9wTmFtZXMuZm9yRWFjaChtZW0gPT4gcmVzdWx0cy5hZGQobWVtKSk7XG4gICAgICAgIHRoaXMud2Fsa0ltcGwob2JqLnByb3RvdHlwZSwgcmVzdWx0cyk7XG4gICAgICAgIHRoaXMud2Fsa0ltcGwocHJvdG90eXBlLCByZXN1bHRzKTtcbiAgICB9XG4gICAgc3RhdGljIHdhbGsob2JqKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMud2Fsa0ltcGwob2JqLCByZXN1bHRzKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocmVzdWx0cyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRGdW5jdGlvbk5hbWVzKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2Fsayh0eXBlKVxuICAgICAgICAgICAgLmZpbHRlcihtZW0gPT4ge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHR5cGVbbWVtXTtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJlxuICAgICAgICAgICAgICAgIChtZXRob2QgIT09IHR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLnByb3RvdHlwZSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRQcm90b3R5cGVPZih0eXBlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QWxsUHJvcGVydHlOYW1lcyh0eXBlKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gdGhpcy53YWxrKHR5cGUpO1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uUHJvcHMgPSB0aGlzLndhbGsoRnVuY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMuZmlsdGVyKG1lbSA9PiAhZnVuY3Rpb25Qcm9wcy5zb21lKGZ1bmNQcm9wID0+IGZ1bmNQcm9wID09PSBtZW0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydGllcy5maWx0ZXIobWVtID0+IHtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSB0eXBlW21lbV07XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kICE9PSB0eXBlICYmXG4gICAgICAgICAgICAgICAgbWV0aG9kLnByb3RvdHlwZSAhPT1cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UHJvdG90eXBlT2YodHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlciA9IEZ1bmN0aW9uUHJvcGVydHlIZWxwZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10c1VuaXQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzLXVuaXQvZGlzdC9zcmMvdHNVbml0LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1dGlsXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1dpbiA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wbGF0Zm9ybS50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcbmltcG9ydCAqIGFzIGlzb21vcnBoaWNQYXRoIGZyb20gJy4uLyc7XG5cbmV4cG9ydCBjbGFzcyBQYXRoU3BlYyBleHRlbmRzIHRzVW5pdC5UZXN0Q2xhc3Mge1xuICAgIHRlc3REZWZhdWx0RXhwb3J0KCkge1xuICAgICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuLi9saWIvcGF0aCcpXTtcbiAgICAgIChwcm9jZXNzIGFzIGFueSkuX19kZWZpbmVHZXR0ZXJfXygncGxhdGZvcm0nLCAoKSA9PiAnd2luMzInKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXG4gICAgICBsZXQgcGF0aCA9IHJlcXVpcmUoJy4uL2xpYi9wYXRoJykuZGVmYXVsdDtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdcXFxcJywgcGF0aC5zZXAsICdkZWZhdWx0IHNlcGVyYXRvciBzaG91bGQgYmUgd2luMzIgXCJcXFxcXCIgYWZ0ZXIgaW4gd2luZG93cyBlbnZpcm9ubWVudCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJzsnLCBwYXRoLmRlbGltaXRlciwgJ2RlZmF1bHQgZGVsaW1pdGVyIHNob3VsZCBiZSB3aW4zMiBcIjtcIiBhZnRlciBpbiB3aW5kb3dzIGVudmlyb25tZW50Jyk7XG4gICAgICBkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4uL2xpYi9wYXRoJyldO1xuICAgICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdkYXJ3aW4nKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXG4gICAgICBwYXRoID0gcmVxdWlyZSgnLi4vbGliL3BhdGgnKS5kZWZhdWx0O1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy8nLCBwYXRoLnNlcCwgJ2RlZmF1bHQgc2VwZXJhdG9yIHNob3VsZCBiZSBwb3NpeCBcIi9cIiBhZnRlciBpbiBtYWMgZW52aXJvbm1lbnQnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCc6JywgcGF0aC5kZWxpbWl0ZXIsICdkZWZhdWx0IGRlbGltaXRlciBzaG91bGQgYmUgcG9zaXggXCIvXCIgYWZ0ZXIgaW4gbWFjIGVudmlyb25tZW50Jyk7XG4gICAgfVxuXG4gICAgdGVzdFdpbjMyQmFzZW5hbWUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ215ZmlsZS5odG1sJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuYmFzZW5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3dpbjMyIGJhc2VuYW1lIHNob3VsZCBwYXJzZSBmaWxlIG5hbWUgZnJvbSB3aW5kb3dzIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnbXlmaWxlLmh0bWwnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5iYXNlbmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3dpbjMyIGJhc2VuYW1lIHNob3VsZCBwYXJzZSBmaWxlIG5hbWUgZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeEJhc2VuYW1lKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdteWZpbGUuaHRtbCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmJhc2VuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sJyksXG4gICAgICAgICdwb3NpeCBiYXNlbmFtZSBzaG91bGQgbm90IHBhcnNlIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdteWZpbGUuaHRtbCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmJhc2VuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgICAncG9zaXggYmFzZW5hbWUgc2hvdWxkIHBhcnNlIGZpbGUgbmFtZSBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyU2VwKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ1xcXFwnLCBpc29tb3JwaGljUGF0aC53aW4zMi5zZXAsICd3aW4zMiBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIlxcXFxcIiBzZXAnKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4U2VwKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy8nLCBpc29tb3JwaGljUGF0aC5wb3NpeC5zZXAsICdwb3NpeCBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIi9cIiBzZXAnKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyRGVsaW1pdGVyKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJzsnLCBpc29tb3JwaGljUGF0aC53aW4zMi5kZWxpbWl0ZXIsICd3aW4zMiBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIjtcIiBkZWxpbWl0ZXInKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4RGVsaW1pdGVyKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJzonLCBpc29tb3JwaGljUGF0aC5wb3NpeC5kZWxpbWl0ZXIsICdwb3NpeCBzaG91bGQgY29ycmVjdGx5IGltcGxlbWVudCBcIjtcIiBkZWxpbWl0ZXInKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyRGlybmFtZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnQzpcXFxcdGVtcCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3dpbjMyIGRpcm5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBkaXJlY3RvcnkgcGF0aCBmcm9tIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcvdGVtcCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAgICd3aW4zMiBkaXJuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZGlyZWN0b3J5IHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeERpcm5hbWUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXHRlbXAnLFxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZGlybmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxuICAgICAgJ3Bvc2l4IGJhc2VuYW1lIHNob3VsZCBub3QgcGFyc2Ugd2luZG93cyBwYXRoJyxcbiAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcvdGVtcCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAgICdwb3NpeCBkaXJuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZGlyZWN0b3J5IHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RXaW4zMkV4dG5hbWUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5odG1sJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgZXh0ZW5zaW9uIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5odG1sJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLmpzJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuanMnKSxcbiAgICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIGV4dGVuc2lvbiBmcm9tIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuanMnLCBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5qcycpLFxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuanMnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sLmpzJyksXG4gICAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBwcmUtZml4ZWQgZXh0ZW5zaW9uIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5qcycsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sLmh0bWwuanMnKSxcbiAgICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIHByZS1maXhlZCBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeEV4dG5hbWUoKSB7XG5cbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLmh0bWwnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgICAncG9zaXggZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuanMnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5qcycpLFxuICAgICAgICAncG9zaXggZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuanMnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5odG1sLmpzJyksXG4gICAgICAgICdwb3NpeCBleHRuYW1lIHNob3VsZCBwYXJzZSBwcmUtZml4ZWQgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0V2luMzJGb3JtYXQoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXJcXFxcZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC53aW4zMi5mb3JtYXQoe1xuICAgICAgICBkaXI6ICcvaG9tZS91c2VyL2RpcicsXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAnd2luMzIgZm9ybWF0IHNob3VsZCBub3QgZm9ybWF0IHBvc2l4IFBhcnNlZFBhdGgnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICAgIHJvb3Q6ICdDOlxcXFwnLFxuICAgICAgICBkaXI6ICdwYXRoXFxcXGRpcicsXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAnd2luMzIgZm9ybWF0IHNob3VsZCBmb3JtYXQgd2luZG93cyBQYXJzZWRQYXRoIHdpdGggcm9vdCBhbmQgZGlyJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC53aW4zMi5mb3JtYXQoe1xuICAgICAgICBkaXI6ICdDOlxcXFxwYXRoXFxcXGRpcicsXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAnd2luMzIgZm9ybWF0IHNob3VsZCBmb3JtYXQgd2luZG93cyBQYXJzZWRQYXRoIHdpdGggZGlyJyk7XG4gICAgfVxuICAgIHRlc3RQb3NpeEZvcm1hdCgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpci9maWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLnBvc2l4LmZvcm1hdCh7XG4gICAgICAgIGRpcjogJ0M6XFxcXHBhdGhcXFxcZGlyJyxcbiAgICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcbiAgICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICdwb3NpeCBmb3JtYXQgc2hvdWxkIG5vdCBmb3JtYXQgd2luZG93cyBQYXJzZWRQYXRoJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC5wb3NpeC5mb3JtYXQoe1xuICAgICAgICByb290OiAnL2lnbm9yZWQnLFxuICAgICAgICBkaXI6ICcvaG9tZS91c2VyL2RpcicsXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAncG9zaXggZm9ybWF0IHNob3VsZCBmb3JtYXQgcG9zaXggUGFyc2VkUGF0aCB3aXRoIHJvb3QgYW5kIGRpcicpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy9ob21lL3VzZXIvZGlyL2ZpbGUudHh0JywgaXNvbW9ycGhpY1BhdGgucG9zaXguZm9ybWF0KHtcbiAgICAgICAgZGlyOiAnL2hvbWUvdXNlci9kaXInLFxuICAgICAgICBiYXNlOiAnZmlsZS50eHQnLFxuICAgICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3Bvc2l4IGZvcm1hdCBzaG91bGQgZm9ybWF0IHBvc2l4IFBhcnNlZFBhdGggd2l0aCBkaXInKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyQWJzb2x1dGUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnLy9zZXJ2ZXInKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciBwb3NpeCBhYnNvbHV0ZSBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnXFxcXFxcXFxzZXJ2ZXInKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCdDOi9mb28vLi4nKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCdDOlxcXFxmb29cXFxcLi4nKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnYmFyXFxcXGJheicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIHJlbGF0aXZlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnYmFyL2JheicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHJlbGF0aXZlIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnLicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciByZWxhdGl2ZSBwb3NpeCBvcGVyYXRvcicsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhBYnNvbHV0ZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCcvL3NlcnZlcicpLFxuICAgICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHBvc2l4IGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCcvYmF6Ly4uJyksXG4gICAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgcG9zaXggYWJzb2x1dGUgcGF0aCB3aXRoIHJlbGF0aXZlIG9wZXJhdG9yIHN1ZmZpeCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdcXFxcXFxcXHNlcnZlcicpLFxuICAgICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnQzovZm9vLy4uJyksXG4gICAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdDOlxcXFxmb29cXFxcLi4nKSxcbiAgICAgICAgJ3Bvc2l4IGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd2luZG93cyBhYnNvbHV0ZSBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ2JhclxcXFxiYXonKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd2luZG93cyByZWxhdGl2ZSBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ2Jhci9iYXonKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciByZWxhdGl2ZSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJy4nKSxcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciByZWxhdGl2ZSBwb3NpeCBvcGVyYXRvcicsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0V2luMzJKb2luKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdDOlxcXFxmb29cXFxcYmFyXFxcXGJhelxcXFxhc2RmJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuam9pbignQzpcXFxcZm9vJywgJ2JhcicsICdiYXpcXFxcYXNkZicsICdxdXV4JywgJy4uJyksXG4gICAgICAgICd3aW4zMiBqb2luIHNob3VsZCByZXR1cm4gam9pbmVkIHdpbmRvd3MgcGF0aCBnaXZlbiB3aW5kb3dzIGZyYWdtZW50cycsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdcXFxcZm9vXFxcXGJhclxcXFxiYXpcXFxcYXNkZicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmpvaW4oJy9mb28nLCAnYmFyJywgJ2Jhei9hc2RmJywgJ3F1dXgnLCAnLi4nKSxcbiAgICAgICAgJ3dpbjMyIGpvaW4gc2hvdWxkIHJldHVybiBqb2luZWQgd2luZG93cyBwYXRoIGdpdmVuIHBvc2l4IGZyYWdtZW50cycsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhKb2luKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdcXFxcZm9vL2Jhci9iYXpcXFxcYXNkZicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmpvaW4oJ1xcXFxmb28nLCAnYmFyJywgJ2JhelxcXFxhc2RmJywgJ3F1dXgnLCAnLi4nKSxcbiAgICAgICAgJ3Bvc2l4IGpvaW4gc2hvdWxkIG5vdCByZXR1cm4gam9pbmVkIHBvc2l4IHBhdGggZ2l2ZW4gd2luZG93cyBmcmFnbWVudHMnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnL2Zvby9iYXIvYmF6L2FzZGYnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5qb2luKCcvZm9vJywgJ2JhcicsICdiYXovYXNkZicsICdxdXV4JywgJy4uJyksXG4gICAgICAgICdwb3NpeCBqb2luIHNob3VsZCByZXR1cm4gam9pbmVkIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyTm9ybWFsaXplKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdDOlxcXFx0ZW1wXFxcXGZvb1xcXFxiYXInLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5ub3JtYWxpemUoJ0M6Ly8vL3RlbXBcXFxcXFxcXC9cXFxcL1xcXFwvZm9vL2JhcicpLFxuICAgICAgICAnd2luMzIgc2hvdWxkIG5vcm1hbGl6ZSBtaXhlZCBwYXRoIHRvIHdpbmRvd3Mgc2VwZXJhdG9yJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXHRlbXBcXFxcZm9vXFxcXCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLm5vcm1hbGl6ZSgnQzpcXFxcdGVtcFxcXFxcXFxcZm9vXFxcXGJhclxcXFwuLlxcXFwnKSxcbiAgICAgICAgJ3dpbjMyIHNob3VsZCBub3JtYWxpemUgd2luZG93cyBwYXRoIHRvIHdpbmRvd3Mgc2VwZXJhdG9yJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ1xcXFxmb29cXFxcYmFyXFxcXGJhelxcXFxhc2RmJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxuICAgICAgICAnd2luZDMyIHNob3VsZCBub3JtYWxpemUgcG9zaXggcGF0aCB0byB3aW5kb3dzIHNlcGVyYXRvcicsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhOb3JtYWxpemUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXHRlbXBcXFxcXFxcXGZvb1xcXFxiYXJcXFxcLi5cXFxcJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgubm9ybWFsaXplKCdDOlxcXFx0ZW1wXFxcXFxcXFxmb29cXFxcYmFyXFxcXC4uXFxcXCcpLFxuICAgICAgICAncG9zaXggc2hvdWxkIG5vdCBub3JtYWxpemUgd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy9mb28vYmFyL2Jhei9hc2RmJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxuICAgICAgICAncG9zaXggc2hvdWxkIG5vcm1hbGl6ZSBwb3NpeCBwYXRoIHRvIHBvc2l4IHNlcGVyYXRvcicsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0V2luMzJQYXJzZSgpIHtcbiAgICAgIGNvbnN0IHBhcnNlZFBvc2l4ID0gaXNvbW9ycGhpY1BhdGgud2luMzIucGFyc2UoJy9ob21lL3VzZXIvZGlyL2ZpbGUudHh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhcnNlZFBvc2l4LnJvb3QsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCByb290Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXInLCBwYXJzZWRQb3NpeC5kaXIsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBkaXInKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlLnR4dCcsIHBhcnNlZFBvc2l4LmJhc2UsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBiYXNlJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFBvc2l4LmV4dCwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGV4dCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUnLCBwYXJzZWRQb3NpeC5uYW1lLCAnd2luMzIgc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggbmFtZScpO1xuXG4gICAgICBjb25zdCBwYXJzZWRXaW5kb3dzID0gaXNvbW9ycGhpY1BhdGgud2luMzIucGFyc2UoJ0M6XFxcXHBhdGhcXFxcZGlyXFxcXGZpbGUudHh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxcJywgcGFyc2VkV2luZG93cy5yb290LCAnd2luMzIgc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCByb290Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXInLCBwYXJzZWRXaW5kb3dzLmRpciwgJ3dpbjMyIHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggZGlyJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnZmlsZS50eHQnLCBwYXJzZWRXaW5kb3dzLmJhc2UsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGJhc2UnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcudHh0JywgcGFyc2VkV2luZG93cy5leHQsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGV4dCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUnLCBwYXJzZWRXaW5kb3dzLm5hbWUsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIG5hbWUnKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4UGFyc2UoKSB7XG4gICAgICBjb25zdCBwYXJzZWRQb3NpeCA9IGlzb21vcnBoaWNQYXRoLnBvc2l4LnBhcnNlKCcvaG9tZS91c2VyL2Rpci9maWxlLnR4dCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy8nLCBwYXJzZWRQb3NpeC5yb290LCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggcm9vdCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy9ob21lL3VzZXIvZGlyJywgcGFyc2VkUG9zaXguZGlyLCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggZGlyJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnZmlsZS50eHQnLCBwYXJzZWRQb3NpeC5iYXNlLCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggYmFzZScpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy50eHQnLCBwYXJzZWRQb3NpeC5leHQsICdwb3NpeCBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBleHQnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlJywgcGFyc2VkUG9zaXgubmFtZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIG5hbWUnKTtcblxuICAgICAgY29uc3QgcGFyc2VkV2luZG93cyA9IGlzb21vcnBoaWNQYXRoLnBvc2l4LnBhcnNlKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJycsIHBhcnNlZFdpbmRvd3Mucm9vdCwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggcm9vdCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJycsIHBhcnNlZFdpbmRvd3MuZGlyLCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBkaXInKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIHBhcnNlZFdpbmRvd3MuYmFzZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggYmFzZScpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy50eHQnLCBwYXJzZWRXaW5kb3dzLmV4dCwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggZXh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZScsIHBhcnNlZFdpbmRvd3MubmFtZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggbmFtZScpO1xuICAgIH1cbiAgICB0ZXN0V2luMzJSZXNvbHZlKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdDOlxcXFxmb29cXFxcYmFyXFxcXGJheicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLnJlc29sdmUoJ0M6XFxcXGZvb1xcXFxiYXInLCAnLlxcXFxiYXonKSxcbiAgICAgICAgJ3dpbjMyIHNob3VsZCByZXNvbHZlIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVOb3RJZGVudGljYWwoXG4gICAgICAgICdcXFxcZm9vXFxcXGJhclxcXFxiYXonLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5yZXNvbHZlKCcvZm9vL2JhcicsICcuL2JheicpLFxuICAgICAgICAnd2luMzIgc2hvdWxkIG5vdCByZXNvbHZlIHBvc2l4IHBhdGggdG8gd2luZG93cyBmb3JtYXQnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4UmVzb2x2ZSgpIHtcbiAgICAgIHRoaXMuYXJlTm90SWRlbnRpY2FsKFxuICAgICAgICAnQzpcXFxcZm9vXFxcXGJhci8uXFxcXGJheicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LnJlc29sdmUoJ0M6XFxcXGZvb1xcXFxiYXInLCAnLlxcXFxiYXonKSxcbiAgICAgICAgJ3Bvc2l4IHNob3VsZCBub3QgcmVzb2x2ZSB3aW5kb3dzIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnL2Zvby9iYXIvYmF6JyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgucmVzb2x2ZSgnL2Zvby9iYXInLCAnLi9iYXonKSxcbiAgICAgICAgJ3Bvc2l4IHNob3VsZCByZXNvbHZlIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyUmVsYXRpdmUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy4uXFxcXC4uXFxcXGltcGxcXFxcYmJiJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIucmVsYXRpdmUoJ0M6XFxcXG9yYW5kZWFcXFxcdGVzdFxcXFxhYWEnLCAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYicpLFxuICAgICAgICAnd2luMzIgc2hvdWxkIHJlbGF0aXZlIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuLlxcXFwuLlxcXFxpbXBsXFxcXGJiYicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLnJlbGF0aXZlKCcvZGF0YS9vcmFuZGVhL3Rlc3QvYWFhJywgJy9kYXRhL29yYW5kZWEvaW1wbC9iYmInKSxcbiAgICAgICAgJ3dpbjMyIHNob3VsZCByZWxhdGl2ZSBwb3NpeCBwYXRoIHRvIHdpbmRvd3MgZm9ybWF0JyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeFJlbGF0aXZlKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuLi8uXFxcXGJheicsIGlzb21vcnBoaWNQYXRoLnBvc2l4LnJlbGF0aXZlKCdDOlxcXFxmb29cXFxcYmFyJywgJy5cXFxcYmF6JyksXG4gICAgICAgICdwb3NpeCBzaG91bGQgbm90IHJlbGF0aXZlIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuLi8uLi9pbXBsL2JiYicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LnJlbGF0aXZlKCcvZGF0YS9vcmFuZGVhL3Rlc3QvYWFhJywgJy9kYXRhL29yYW5kZWEvaW1wbC9iYmInKSxcbiAgICAgICAgJ3Bvc2l4IHNob3VsZCByZWxhdGl2ZSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L1BhdGguTm9kZS5zcGVjLnRzIiwiaW1wb3J0ICogYXMgdHNVbml0IGZyb20gJ3RzLXVuaXQnO1xuaW1wb3J0IHsgaXNXaW4sIGlzTWFjLCBpc05vZGUsIGlzQnJvd3NlciB9IGZyb20gJy4uL2xpYi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybVNwZWMgZXh0ZW5kcyB0c1VuaXQuVGVzdENsYXNzIHtcbiAgICB0ZXN0T3MoKSB7XG4gICAgICAocHJvY2VzcyBhcyBhbnkpLl9fZGVmaW5lR2V0dGVyX18oJ3BsYXRmb3JtJywgKCkgPT4gJ3dpbjMyJyk7IC8vIHN0dWIgcGxhdGZvcm0gY2FsbFxuICAgICAgdGhpcy5pc1RydWUoaXNXaW4oKSwgJ2lzV2luIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3Igd2luZG93cyBwbGF0Zm9ybSBpZDogXCJ3aW4zMlwiJyk7XG4gICAgICB0aGlzLmlzRmFsc2UoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcGxhdGZvcm0gaWQ6IFwid2luMzJcIicpO1xuICAgICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdkYXJ3aW4nKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXG4gICAgICB0aGlzLmlzRmFsc2UoaXNXaW4oKSwgJ2lzV2luIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIG1hYyBwbGF0Zm9ybSBpZDogXCJkYXJ3aW5cIicpO1xuICAgICAgdGhpcy5pc1RydWUoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgbWFjIHBsYXRmb3JtIGlkOiBcImRhcndpblwiJyk7XG4gICAgfVxuICAgIHRlc3RFbnYoKSB7XG4gICAgICB0aGlzLmlzVHJ1ZShpc05vZGUoKSwgJ2lzTm9kZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIG5vZGUgc3BlYycpO1xuICAgICAgdGhpcy5pc0ZhbHNlKGlzQnJvd3NlcigpLCAnaXNCcm93c2VyIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIGJyb3dzZXIgc3BlYycpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvUGxhdGZvcm0uTm9kZS5zcGVjLnRzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ1dGlsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlzb21vcnBoaWMtcGF0aFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInV0aWxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImlzb21vcnBoaWMtcGF0aFwiXSA9IGZhY3Rvcnkocm9vdFtcInV0aWxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhdGhfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5jb25zdCBwbGF0Zm9ybV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbmNvbnN0IG5vb3BfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5jb25zdCB1bnN1cHBvcnRlZE1ldGhvZHMgPSB7XG4gICAgcmVzb2x2ZTogbm9vcF8xLm5vb3AsXG4gICAgcmVsYXRpdmU6IG5vb3BfMS5ub29wLFxufTtcbmNvbnN0IHdpbjMyUnVudGltZSA9IHBhdGhfMS53aW4zMjtcbmV4cG9ydHMud2luMzIgPSB3aW4zMlJ1bnRpbWU7XG5jb25zdCBwb3NpeFJ1bnRpbWUgPSBwYXRoXzEucG9zaXg7XG5leHBvcnRzLnBvc2l4ID0gcG9zaXhSdW50aW1lO1xubGV0IGRlZmF1bHRFeHBvcnQ7XG5pZiAocGxhdGZvcm1fMS5pc1dpbigpKSB7XG4gICAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbjMyUnVudGltZSk7XG59XG5lbHNlIHtcbiAgICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgcG9zaXhSdW50aW1lKTtcbn1cbmxldCBub3JtYWxpemVSdW50aW1lO1xuZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemVSdW50aW1lO1xubGV0IGpvaW5SdW50aW1lO1xuZXhwb3J0cy5qb2luID0gam9pblJ1bnRpbWU7XG5sZXQgcmVzb2x2ZVJ1bnRpbWU7XG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlUnVudGltZTtcbmxldCBpc0Fic29sdXRlUnVudGltZTtcbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGlzQWJzb2x1dGVSdW50aW1lO1xubGV0IHJlbGF0aXZlUnVudGltZTtcbmV4cG9ydHMucmVsYXRpdmUgPSByZWxhdGl2ZVJ1bnRpbWU7XG5sZXQgZGlybmFtZVJ1bnRpbWU7XG5leHBvcnRzLmRpcm5hbWUgPSBkaXJuYW1lUnVudGltZTtcbmxldCBiYXNlbmFtZVJ1bnRpbWU7XG5leHBvcnRzLmJhc2VuYW1lID0gYmFzZW5hbWVSdW50aW1lO1xubGV0IGV4dG5hbWVSdW50aW1lO1xuZXhwb3J0cy5leHRuYW1lID0gZXh0bmFtZVJ1bnRpbWU7XG5sZXQgc2VwUnVudGltZTtcbmV4cG9ydHMuc2VwUnVudGltZSA9IHNlcFJ1bnRpbWU7XG5sZXQgZGVsaW1pdGVyUnVudGltZTtcbmV4cG9ydHMuZGVsaW1pdGVyID0gZGVsaW1pdGVyUnVudGltZTtcbmxldCBwYXJzZVJ1bnRpbWU7XG5leHBvcnRzLnBhcnNlID0gcGFyc2VSdW50aW1lO1xubGV0IGZvcm1hdFJ1bnRpbWU7XG5leHBvcnRzLmZvcm1hdCA9IGZvcm1hdFJ1bnRpbWU7XG5pZiAocGxhdGZvcm1fMS5pc1dpbigpKSB7XG4gICAgZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemVSdW50aW1lID0gd2luMzJSdW50aW1lLm5vcm1hbGl6ZTtcbiAgICBleHBvcnRzLmpvaW4gPSBqb2luUnVudGltZSA9IHdpbjMyUnVudGltZS5qb2luO1xuICAgIGV4cG9ydHMucmVzb2x2ZSA9IHJlc29sdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlc29sdmU7XG4gICAgZXhwb3J0cy5pc0Fic29sdXRlID0gaXNBYnNvbHV0ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuaXNBYnNvbHV0ZTtcbiAgICBleHBvcnRzLnJlbGF0aXZlID0gcmVsYXRpdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlbGF0aXZlO1xuICAgIGV4cG9ydHMuZGlybmFtZSA9IGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XG4gICAgZXhwb3J0cy5iYXNlbmFtZSA9IGJhc2VuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5iYXNlbmFtZTtcbiAgICBleHBvcnRzLmV4dG5hbWUgPSBleHRuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5leHRuYW1lO1xuICAgIGV4cG9ydHMuc2VwUnVudGltZSA9IHNlcFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuc2VwO1xuICAgIGV4cG9ydHMuZGVsaW1pdGVyID0gZGVsaW1pdGVyUnVudGltZSA9IHdpbjMyUnVudGltZS5kZWxpbWl0ZXI7XG4gICAgZXhwb3J0cy5wYXJzZSA9IHBhcnNlUnVudGltZSA9IHdpbjMyUnVudGltZS5wYXJzZTtcbiAgICBleHBvcnRzLmZvcm1hdCA9IGZvcm1hdFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZm9ybWF0O1xufVxuZWxzZSB7XG4gICAgZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemVSdW50aW1lID0gcG9zaXhSdW50aW1lLm5vcm1hbGl6ZTtcbiAgICBleHBvcnRzLmpvaW4gPSBqb2luUnVudGltZSA9IHBvc2l4UnVudGltZS5qb2luO1xuICAgIGV4cG9ydHMucmVzb2x2ZSA9IHJlc29sdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlc29sdmU7XG4gICAgZXhwb3J0cy5pc0Fic29sdXRlID0gaXNBYnNvbHV0ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuaXNBYnNvbHV0ZTtcbiAgICBleHBvcnRzLnJlbGF0aXZlID0gcmVsYXRpdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlbGF0aXZlO1xuICAgIGV4cG9ydHMuZGlybmFtZSA9IGRpcm5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmRpcm5hbWU7XG4gICAgZXhwb3J0cy5iYXNlbmFtZSA9IGJhc2VuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5iYXNlbmFtZTtcbiAgICBleHBvcnRzLmV4dG5hbWUgPSBleHRuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5leHRuYW1lO1xuICAgIGV4cG9ydHMuc2VwUnVudGltZSA9IHNlcFJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuc2VwO1xuICAgIGV4cG9ydHMuZGVsaW1pdGVyID0gZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XG4gICAgZXhwb3J0cy5wYXJzZSA9IHBhcnNlUnVudGltZSA9IHBvc2l4UnVudGltZS5wYXJzZTtcbiAgICBleHBvcnRzLmZvcm1hdCA9IGZvcm1hdFJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZm9ybWF0O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdEV4cG9ydDtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcclxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XHJcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxyXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcclxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcclxuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXHJcbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxyXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1JcclxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxyXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuXHJcblxyXG5cclxudmFyIGlzV2luZG93cyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XHJcbnZhciB1dGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcclxuXHJcblxyXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcclxuLy8gbXVzdCBiZSBubyBzbGFzaGVzIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XHJcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxyXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xyXG4gIHZhciByZXMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcCA9IHBhcnRzW2ldO1xyXG5cclxuICAgIC8vIGlnbm9yZSBlbXB0eSBwYXJ0c1xyXG4gICAgaWYgKCFwIHx8IHAgPT09ICcuJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgaWYgKHAgPT09ICcuLicpIHtcclxuICAgICAgaWYgKHJlcy5sZW5ndGggJiYgcmVzW3Jlcy5sZW5ndGggLSAxXSAhPT0gJy4uJykge1xyXG4gICAgICAgIHJlcy5wb3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xyXG4gICAgICAgIHJlcy5wdXNoKCcuLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMucHVzaChwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8vIHJldHVybnMgYW4gYXJyYXkgd2l0aCBlbXB0eSBlbGVtZW50cyByZW1vdmVkIGZyb20gZWl0aGVyIGVuZCBvZiB0aGUgaW5wdXRcclxuLy8gYXJyYXkgb3IgdGhlIG9yaWdpbmFsIGFycmF5IGlmIG5vIGVsZW1lbnRzIG5lZWQgdG8gYmUgcmVtb3ZlZFxyXG5mdW5jdGlvbiB0cmltQXJyYXkoYXJyKSB7XHJcbiAgdmFyIGxhc3RJbmRleCA9IGFyci5sZW5ndGggLSAxO1xyXG4gIHZhciBzdGFydCA9IDA7XHJcbiAgZm9yICg7IHN0YXJ0IDw9IGxhc3RJbmRleDsgc3RhcnQrKykge1xyXG4gICAgaWYgKGFycltzdGFydF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVuZCA9IGxhc3RJbmRleDtcclxuICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XHJcbiAgICBpZiAoYXJyW2VuZF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gbGFzdEluZGV4KVxyXG4gICAgcmV0dXJuIGFycjtcclxuICBpZiAoc3RhcnQgPiBlbmQpXHJcbiAgICByZXR1cm4gW107XHJcbiAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kICsgMSk7XHJcbn1cclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IGEgd2luZG93cyBwYXRoIGludG8gdGhyZWUgcGFydHM6IFsqLCBkZXZpY2UsIHNsYXNoLFxyXG4vLyB0YWlsXSB3aW5kb3dzLW9ubHlcclxudmFyIHNwbGl0RGV2aWNlUmUgPVxyXG4gICAgL14oW2EtekEtWl06fFtcXFxcXFwvXXsyfVteXFxcXFxcL10rW1xcXFxcXC9dK1teXFxcXFxcL10rKT8oW1xcXFxcXC9dKT8oW1xcc1xcU10qPykkLztcclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IHRoZSB0YWlsIHBhcnQgb2YgdGhlIGFib3ZlIGludG8gWyosIGRpciwgYmFzZW5hbWUsIGV4dF1cclxudmFyIHNwbGl0VGFpbFJlID1cclxuICAgIC9eKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKSg/OltcXFxcXFwvXSopJC87XHJcblxyXG52YXIgd2luMzIgPSB7fTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XVxyXG5mdW5jdGlvbiB3aW4zMlNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIC8vIFNlcGFyYXRlIGRldmljZStzbGFzaCBmcm9tIHRhaWxcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKGZpbGVuYW1lKSxcclxuICAgICAgZGV2aWNlID0gKHJlc3VsdFsxXSB8fCAnJykgKyAocmVzdWx0WzJdIHx8ICcnKSxcclxuICAgICAgdGFpbCA9IHJlc3VsdFszXSB8fCAnJztcclxuICAvLyBTcGxpdCB0aGUgdGFpbCBpbnRvIGRpciwgYmFzZW5hbWUgYW5kIGV4dGVuc2lvblxyXG4gIHZhciByZXN1bHQyID0gc3BsaXRUYWlsUmUuZXhlYyh0YWlsKSxcclxuICAgICAgZGlyID0gcmVzdWx0MlsxXSxcclxuICAgICAgYmFzZW5hbWUgPSByZXN1bHQyWzJdLFxyXG4gICAgICBleHQgPSByZXN1bHQyWzNdO1xyXG4gIHJldHVybiBbZGV2aWNlLCBkaXIsIGJhc2VuYW1lLCBleHRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW4zMlN0YXRQYXRoKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKHBhdGgpLFxyXG4gICAgICBkZXZpY2UgPSByZXN1bHRbMV0gfHwgJycsXHJcbiAgICAgIGlzVW5jID0gISFkZXZpY2UgJiYgZGV2aWNlWzFdICE9PSAnOic7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRldmljZTogZGV2aWNlLFxyXG4gICAgaXNVbmM6IGlzVW5jLFxyXG4gICAgaXNBYnNvbHV0ZTogaXNVbmMgfHwgISFyZXN1bHRbMl0sIC8vIFVOQyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlXHJcbiAgICB0YWlsOiByZXN1bHRbM11cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVVTkNSb290KGRldmljZSkge1xyXG4gIHJldHVybiAnXFxcXFxcXFwnICsgZGV2aWNlLnJlcGxhY2UoL15bXFxcXFxcL10rLywgJycpLnJlcGxhY2UoL1tcXFxcXFwvXSsvZywgJ1xcXFwnKTtcclxufVxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG53aW4zMi5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkRGV2aWNlID0gJycsXHJcbiAgICAgIHJlc29sdmVkVGFpbCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aDtcclxuICAgIGlmIChpID49IDApIHtcclxuICAgICAgcGF0aCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHBhdGggPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gV2luZG93cyBoYXMgdGhlIGNvbmNlcHQgb2YgZHJpdmUtc3BlY2lmaWMgY3VycmVudCB3b3JraW5nXHJcbiAgICAgIC8vIGRpcmVjdG9yaWVzLiBJZiB3ZSd2ZSByZXNvbHZlZCBhIGRyaXZlIGxldHRlciBidXQgbm90IHlldCBhblxyXG4gICAgICAvLyBhYnNvbHV0ZSBwYXRoLCBnZXQgY3dkIGZvciB0aGF0IGRyaXZlLiBXZSdyZSBzdXJlIHRoZSBkZXZpY2UgaXMgbm90XHJcbiAgICAgIC8vIGFuIHVuYyBwYXRoIGF0IHRoaXMgcG9pbnRzLCBiZWNhdXNlIHVuYyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlLlxyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5lbnZbJz0nICsgcmVzb2x2ZWREZXZpY2VdO1xyXG4gICAgICAvLyBWZXJpZnkgdGhhdCBhIGRyaXZlLWxvY2FsIGN3ZCB3YXMgZm91bmQgYW5kIHRoYXQgaXQgYWN0dWFsbHkgcG9pbnRzXHJcbiAgICAgIC8vIHRvIG91ciBkcml2ZS4gSWYgbm90LCBkZWZhdWx0IHRvIHRoZSBkcml2ZSdzIHJvb3QuXHJcbiAgICAgIGlmICghcGF0aCB8fCBwYXRoLnN1YnN0cigwLCAzKS50b0xvd2VyQ2FzZSgpICE9PVxyXG4gICAgICAgICAgcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSArICdcXFxcJykge1xyXG4gICAgICAgIHBhdGggPSByZXNvbHZlZERldmljZSArICdcXFxcJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXN1bHQgPSB3aW4zMlN0YXRQYXRoKHBhdGgpLFxyXG4gICAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgICAgaXNBYnNvbHV0ZSA9IHJlc3VsdC5pc0Fic29sdXRlLFxyXG4gICAgICAgIHRhaWwgPSByZXN1bHQudGFpbDtcclxuXHJcbiAgICBpZiAoZGV2aWNlICYmXHJcbiAgICAgICAgcmVzb2x2ZWREZXZpY2UgJiZcclxuICAgICAgICBkZXZpY2UudG9Mb3dlckNhc2UoKSAhPT0gcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAvLyBUaGlzIHBhdGggcG9pbnRzIHRvIGFub3RoZXIgZGV2aWNlIHNvIGl0IGlzIG5vdCBhcHBsaWNhYmxlXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzb2x2ZWREZXZpY2UpIHtcclxuICAgICAgcmVzb2x2ZWREZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgcmVzb2x2ZWRUYWlsID0gdGFpbCArICdcXFxcJyArIHJlc29sdmVkVGFpbDtcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGlzQWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc29sdmVkRGV2aWNlICYmIHJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgcmVzb2x2ZWREZXZpY2VgIHBvaW50cyB0byBhbiBVTkNcclxuICAvLyByb290LiBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgcmVzb2x2ZWREZXZpY2UgPSBub3JtYWxpemVVTkNSb290KHJlc29sdmVkRGV2aWNlKTtcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLFxyXG4gIC8vIGJ1dCBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKVxyXG4gIC8vIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHJlc29sdmVkVGFpbCA9IG5vcm1hbGl6ZUFycmF5KHJlc29sdmVkVGFpbC5zcGxpdCgvW1xcXFxcXC9dKy8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIHJldHVybiAocmVzb2x2ZWREZXZpY2UgKyAocmVzb2x2ZWRBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHJlc29sdmVkVGFpbCkgfHxcclxuICAgICAgICAgJy4nO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0LmRldmljZSxcclxuICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgdGFpbCA9IHJlc3VsdC50YWlsLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gL1tcXFxcXFwvXSQvLnRlc3QodGFpbCk7XHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgdGFpbCBwYXRoXHJcbiAgdGFpbCA9IG5vcm1hbGl6ZUFycmF5KHRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSwgIWlzQWJzb2x1dGUpLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgaWYgKCF0YWlsICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICB0YWlsID0gJy4nO1xyXG4gIH1cclxuICBpZiAodGFpbCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICB0YWlsICs9ICdcXFxcJztcclxuICB9XHJcblxyXG4gIC8vIENvbnZlcnQgc2xhc2hlcyB0byBiYWNrc2xhc2hlcyB3aGVuIGBkZXZpY2VgIHBvaW50cyB0byBhbiBVTkMgcm9vdC5cclxuICAvLyBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgZGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRldmljZSArIChpc0Fic29sdXRlID8gJ1xcXFwnIDogJycpICsgdGFpbDtcclxufTtcclxuXHJcblxyXG53aW4zMi5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlN0YXRQYXRoKHBhdGgpLmlzQWJzb2x1dGU7XHJcbn07XHJcblxyXG53aW4zMi5qb2luID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHBhdGhzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcoYXJnKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZykge1xyXG4gICAgICBwYXRocy5wdXNoKGFyZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgam9pbmVkID0gcGF0aHMuam9pbignXFxcXCcpO1xyXG5cclxuICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgam9pbmVkIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIHR3byBzbGFzaGVzLCBiZWNhdXNlXHJcbiAgLy8gbm9ybWFsaXplKCkgd2lsbCBtaXN0YWtlIGl0IGZvciBhbiBVTkMgcGF0aCB0aGVuLlxyXG4gIC8vXHJcbiAgLy8gVGhpcyBzdGVwIGlzIHNraXBwZWQgd2hlbiBpdCBpcyB2ZXJ5IGNsZWFyIHRoYXQgdGhlIHVzZXIgYWN0dWFsbHlcclxuICAvLyBpbnRlbmRlZCB0byBwb2ludCBhdCBhbiBVTkMgcGF0aC4gVGhpcyBpcyBhc3N1bWVkIHdoZW4gdGhlIGZpcnN0XHJcbiAgLy8gbm9uLWVtcHR5IHN0cmluZyBhcmd1bWVudHMgc3RhcnRzIHdpdGggZXhhY3RseSB0d28gc2xhc2hlcyBmb2xsb3dlZCBieVxyXG4gIC8vIGF0IGxlYXN0IG9uZSBtb3JlIG5vbi1zbGFzaCBjaGFyYWN0ZXIuXHJcbiAgLy9cclxuICAvLyBOb3RlIHRoYXQgZm9yIG5vcm1hbGl6ZSgpIHRvIHRyZWF0IGEgcGF0aCBhcyBhbiBVTkMgcGF0aCBpdCBuZWVkcyB0b1xyXG4gIC8vIGhhdmUgYXQgbGVhc3QgMiBjb21wb25lbnRzLCBzbyB3ZSBkb24ndCBmaWx0ZXIgZm9yIHRoYXQgaGVyZS5cclxuICAvLyBUaGlzIG1lYW5zIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSBqb2luIHRvIGNvbnN0cnVjdCBVTkMgcGF0aHMgZnJvbVxyXG4gIC8vIGEgc2VydmVyIG5hbWUgYW5kIGEgc2hhcmUgbmFtZTsgZm9yIGV4YW1wbGU6XHJcbiAgLy8gICBwYXRoLmpvaW4oJy8vc2VydmVyJywgJ3NoYXJlJykgLT4gJ1xcXFxcXFxcc2VydmVyXFxcXHNoYXJlXFwnKVxyXG4gIGlmICghL15bXFxcXFxcL117Mn1bXlxcXFxcXC9dLy50ZXN0KHBhdGhzWzBdKSkge1xyXG4gICAgam9pbmVkID0gam9pbmVkLnJlcGxhY2UoL15bXFxcXFxcL117Mix9LywgJ1xcXFwnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aW4zMi5ub3JtYWxpemUoam9pbmVkKTtcclxufTtcclxuXHJcblxyXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxyXG4vLyBpdCB3aWxsIHNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoIGZyb20gJ2Zyb20nIHRvICd0bycsIGZvciBpbnN0YW5jZTpcclxuLy8gZnJvbSA9ICdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJ1xyXG4vLyB0byA9ICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJ1xyXG4vLyBUaGUgb3V0cHV0IG9mIHRoZSBmdW5jdGlvbiBzaG91bGQgYmU6ICcuLlxcXFwuLlxcXFxpbXBsXFxcXGJiYidcclxud2luMzIucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSB3aW4zMi5yZXNvbHZlKGZyb20pO1xyXG4gIHRvID0gd2luMzIucmVzb2x2ZSh0byk7XHJcblxyXG4gIC8vIHdpbmRvd3MgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlXHJcbiAgdmFyIGxvd2VyRnJvbSA9IGZyb20udG9Mb3dlckNhc2UoKTtcclxuICB2YXIgbG93ZXJUbyA9IHRvLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCdcXFxcJykpO1xyXG5cclxuICB2YXIgbG93ZXJGcm9tUGFydHMgPSB0cmltQXJyYXkobG93ZXJGcm9tLnNwbGl0KCdcXFxcJykpO1xyXG4gIHZhciBsb3dlclRvUGFydHMgPSB0cmltQXJyYXkobG93ZXJUby5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGxvd2VyRnJvbVBhcnRzLmxlbmd0aCwgbG93ZXJUb1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobG93ZXJGcm9tUGFydHNbaV0gIT09IGxvd2VyVG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChzYW1lUGFydHNMZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIHRvO1xyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGxvd2VyRnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xyXG4gIH1cclxuXHJcbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJ1xcXFwnKTtcclxufTtcclxuXHJcblxyXG53aW4zMi5fbWFrZUxvbmcgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgLy8gTm90ZTogdGhpcyB3aWxsICpwcm9iYWJseSogdGhyb3cgc29tZXdoZXJlLlxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSlcclxuICAgIHJldHVybiBwYXRoO1xyXG5cclxuICBpZiAoIXBhdGgpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHZhciByZXNvbHZlZFBhdGggPSB3aW4zMi5yZXNvbHZlKHBhdGgpO1xyXG5cclxuICBpZiAoL15bYS16QS1aXVxcOlxcXFwvLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBsb2NhbCBmaWxlc3lzdGVtIHBhdGgsIHdoaWNoIG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxyXG4gICAgLy8gdG8gbG9uZyBVTkMgcGF0aC5cclxuICAgIHJldHVybiAnXFxcXFxcXFw/XFxcXCcgKyByZXNvbHZlZFBhdGg7XHJcbiAgfSBlbHNlIGlmICgvXlxcXFxcXFxcW14/Ll0vLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBuZXR3b3JrIFVOQyBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFxVTkNcXFxcJyArIHJlc29sdmVkUGF0aC5zdWJzdHJpbmcoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG53aW4zMi5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSB3aW4zMlNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxud2luMzIuYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHdpbjMyU3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHdpbjMyU3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIGlmICghZGlyKSB7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9XHJcbiAgaWYgKGRpcltkaXIubGVuZ3RoIC0gMV0gPT09IHdpbjMyLnNlcCkge1xyXG4gICAgcmV0dXJuIGRpciArIGJhc2U7XHJcbiAgfVxyXG4gIHJldHVybiBkaXIgKyB3aW4zMi5zZXAgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICByb290OiBhbGxQYXJ0c1swXSxcclxuICAgIGRpcjogYWxsUGFydHNbMF0gKyBhbGxQYXJ0c1sxXS5zbGljZSgwLCAtMSksXHJcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcclxuICAgIGV4dDogYWxsUGFydHNbM10sXHJcbiAgICBuYW1lOiBhbGxQYXJ0c1syXS5zbGljZSgwLCBhbGxQYXJ0c1syXS5sZW5ndGggLSBhbGxQYXJ0c1szXS5sZW5ndGgpXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG53aW4zMi5zZXAgPSAnXFxcXCc7XHJcbndpbjMyLmRlbGltaXRlciA9ICc7JztcclxuXHJcblxyXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxyXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxyXG52YXIgc3BsaXRQYXRoUmUgPVxyXG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XHJcbnZhciBwb3NpeCA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LnJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcclxuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XHJcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aFswXSA9PT0gJy8nO1xyXG4gIH1cclxuXHJcbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxyXG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XHJcbn07XHJcblxyXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgaXNBYnNvbHV0ZSA9IHBvc2l4LmlzQWJzb2x1dGUocGF0aCksXHJcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBwYXRoICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkocGF0aC5zcGxpdCgnLycpLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcclxuICAgIHBhdGggPSAnLic7XHJcbiAgfVxyXG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcclxuICAgIHBhdGggKz0gJy8nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRoID0gJyc7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBzZWdtZW50ID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHNlZ21lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICBwYXRoICs9IHNlZ21lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0aCArPSAnLycgKyBzZWdtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwb3NpeC5ub3JtYWxpemUocGF0aCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XHJcbiAgZnJvbSA9IHBvc2l4LnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xyXG4gIHRvID0gcG9zaXgucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xyXG5cclxuICB2YXIgZnJvbVBhcnRzID0gdHJpbUFycmF5KGZyb20uc3BsaXQoJy8nKSk7XHJcbiAgdmFyIHRvUGFydHMgPSB0cmltQXJyYXkodG8uc3BsaXQoJy8nKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XHJcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XHJcbn07XHJcblxyXG5cclxucG9zaXguX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiBwYXRoO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmRpcm5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpLFxyXG4gICAgICByb290ID0gcmVzdWx0WzBdLFxyXG4gICAgICBkaXIgPSByZXN1bHRbMV07XHJcblxyXG4gIGlmICghcm9vdCAmJiAhZGlyKSB7XHJcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcclxuICAgIHJldHVybiAnLic7XHJcbiAgfVxyXG5cclxuICBpZiAoZGlyKSB7XHJcbiAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxyXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdCArIGRpcjtcclxufTtcclxuXHJcblxyXG5wb3NpeC5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xyXG4gIHZhciBmID0gcG9zaXhTcGxpdFBhdGgocGF0aClbMl07XHJcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xyXG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XHJcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIGY7XHJcbn07XHJcblxyXG5cclxucG9zaXguZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcG9zaXhTcGxpdFBhdGgocGF0aClbM107XHJcbn07XHJcblxyXG5cclxucG9zaXguZm9ybWF0ID0gZnVuY3Rpb24ocGF0aE9iamVjdCkge1xyXG4gIGlmICghdXRpbC5pc09iamVjdChwYXRoT2JqZWN0KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aE9iamVjdCcgbXVzdCBiZSBhbiBvYmplY3QsIG5vdCBcIiArIHR5cGVvZiBwYXRoT2JqZWN0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvb3QgPSBwYXRoT2JqZWN0LnJvb3QgfHwgJyc7XHJcblxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhyb290KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIidwYXRoT2JqZWN0LnJvb3QnIG11c3QgYmUgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBub3QgXCIgK1xyXG4gICAgICAgIHR5cGVvZiBwYXRoT2JqZWN0LnJvb3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGlyID0gcGF0aE9iamVjdC5kaXIgPyBwYXRoT2JqZWN0LmRpciArIHBvc2l4LnNlcCA6ICcnO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIHJldHVybiBkaXIgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIGFsbFBhcnRzWzFdID0gYWxsUGFydHNbMV0gfHwgJyc7XHJcbiAgYWxsUGFydHNbMl0gPSBhbGxQYXJ0c1syXSB8fCAnJztcclxuICBhbGxQYXJ0c1szXSA9IGFsbFBhcnRzWzNdIHx8ICcnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxucG9zaXguc2VwID0gJy8nO1xyXG5wb3NpeC5kZWxpbWl0ZXIgPSAnOic7XHJcblxyXG5cclxuaWYgKGlzV2luZG93cylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyO1xyXG5lbHNlIC8qIHBvc2l4ICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBwb3NpeDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXg7XHJcbm1vZHVsZS5leHBvcnRzLndpbjMyID0gd2luMzI7XHJcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKTtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubm9vcCA9IChmcm9tLCB0bykgPT4ge1xuICAgIHRocm93IEVycm9yKCdtZXRob2QgdW5zdXBwb3J0ZWQgaW4gaXNvbW9ycGhpYy1wYXRoJyk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc01hYyA9ICgpID0+IHtcbiAgICBpZiAocHJvY2Vzc1xuICAgICAgICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbWFjJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZXhwb3J0cy5pc1dpbiA9ICgpID0+IHtcbiAgICBpZiAocHJvY2Vzc1xuICAgICAgICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnd2luMzInKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAmJiB0eXBlb2YgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAgICAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5leHBvcnRzLmlzQnJvd3NlciA9ICgpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuZXhwb3J0cy5pc05vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn07XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQXhNRFkyWkRSaU5XWTNaVGxtWlRGbU9UaGxNQ0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2Y0dGMGFDNTBjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMM0JoZEdndmNHRjBhQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1ZEhNaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwyNXZiM0F1ZEhNaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwzQnNZWFJtYjNKdExuUnpJaXdpZDJWaWNHRmphem92THk5bGVIUmxjbTVoYkNCY0luVjBhV3hjSWlKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUXNUenRCUTFaQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3h0UkVGQk1rTXNZMEZCWXpzN1FVRkZla1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3TzBGRGFFVkJMSE5EUVVGdFJUdEJRVU51UlN3d1EwRkJiVU03UVVGRGJrTXNjME5CUVRoQ08wRkJSVGxDTEUxQlFVMHNhMEpCUVd0Q0xFZEJRVWM3U1VGRGVrSXNUMEZCVHl4RlFVRkZMRmRCUVVrN1NVRkRZaXhSUVVGUkxFVkJRVVVzVjBGQlNUdERRVU5tTEVOQlFVTTdRVUZGUml4TlFVRk5MRmxCUVZrc1IwRkJSeXhaUVVGVExFTkJRVU03UVVGcFJXSXNOa0pCUVVzN1FVRm9SWFpDTEUxQlFVMHNXVUZCV1N4SFFVRkhMRmxCUVZNc1EwRkJRenRCUVN0RVlpdzJRa0ZCU3p0QlFUZEVka0lzU1VGQlNTeGhRVUZoTEVOQlFVTTdRVUZEYkVJc1JVRkJSU3hEUVVGRExFTkJRVU1zWjBKQlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOYUxHRkJRV0VzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU5zUkN4RFFVRkRPMEZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRFRpeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTTdRVUZEYkVRc1EwRkJRenRCUVVORUxFbEJRVWtzWjBKQlFXZENMRU5CUVVNN1FVRXlRME1zY1VOQlFWTTdRVUV4UXk5Q0xFbEJRVWtzVjBGQlZ5eERRVUZETzBGQk1rTkRMREpDUVVGSk8wRkJNVU55UWl4SlFVRkpMR05CUVdNc1EwRkJRenRCUVRKRFF5eHBRMEZCVHp0QlFURkRNMElzU1VGQlNTeHBRa0ZCYVVJc1EwRkJRenRCUVRKRFF5eDFRMEZCVlR0QlFURkRha01zU1VGQlNTeGxRVUZsTEVOQlFVTTdRVUV5UTBNc2JVTkJRVkU3UVVFeFF6ZENMRWxCUVVrc1kwRkJZeXhEUVVGRE8wRkJNa05ETEdsRFFVRlBPMEZCTVVNelFpeEpRVUZKTEdWQlFXVXNRMEZCUXp0QlFUSkRReXh0UTBGQlVUdEJRVEZETjBJc1NVRkJTU3hqUVVGakxFTkJRVU03UVVFeVEwTXNhVU5CUVU4N1FVRXhRek5DTEVsQlFVa3NWVUZCVlN4RFFVRkRPMEZCTWtORExHZERRVUZWTzBGQk1VTXhRaXhKUVVGSkxHZENRVUZuUWl4RFFVRkRPMEZCTWtORExIRkRRVUZUTzBGQk1VTXZRaXhKUVVGSkxGbEJRVmtzUTBGQlF6dEJRVEpEUXl3MlFrRkJTenRCUVRGRGRrSXNTVUZCU1N4aFFVRmhMRU5CUVVNN1FVRXlRME1zSzBKQlFVMDdRVUY2UTNwQ0xFVkJRVVVzUTBGQlF5eERRVUZETEdkQ1FVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFdpeHZRMEZCWjBJc1IwRkJSeXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETzBsQlF6RkRMREJDUVVGWExFZEJRVWNzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTm9ReXhuUTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRkRU1zYzBOQlFXbENMRWRCUVVjc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF6dEpRVU0xUXl4clEwRkJaU3hIUVVGSExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZEZUVNc1owTkJRV01zUjBGQlJ5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNSRExHdERRVUZsTEVkQlFVY3NXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVONFF5eG5RMEZCWXl4SFFVRkhMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGRFTXNLMEpCUVZVc1IwRkJSeXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETzBsQlF6bENMRzlEUVVGblFpeEhRVUZITEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRNVU1zTkVKQlFWa3NSMEZCUnl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRMnhETERoQ1FVRmhMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU4wUXl4RFFVRkRPMEZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRFRpeHZRMEZCWjBJc1IwRkJSeXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETzBsQlF6RkRMREJDUVVGWExFZEJRVWNzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTm9ReXhuUTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRkRU1zYzBOQlFXbENMRWRCUVVjc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF6dEpRVU0xUXl4clEwRkJaU3hIUVVGSExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZEZUVNc1owTkJRV01zUjBGQlJ5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNSRExHdERRVUZsTEVkQlFVY3NXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVONFF5eG5RMEZCWXl4SFFVRkhMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGRFTXNLMEpCUVZVc1IwRkJSeXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETzBsQlF6bENMRzlEUVVGblFpeEhRVUZITEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRNVU1zTkVKQlFWa3NSMEZCUnl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRMnhETERoQ1FVRmhMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU4wUXl4RFFVRkRPMEZCUlVRc2EwSkJRV1VzWVVGQllTeERRVUZET3pzN096czdPenRCUXpORU4wSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3TzBGQlIwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEd0Q1FVRnJRanRCUVVOdVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRkZCUVZFc2IwSkJRVzlDTzBGQlF6VkNPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEZGQlFWRXNWVUZCVlR0QlFVTnNRanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMSGRDUVVGM1FpeEZRVUZGT3p0QlFVVXhRanRCUVVOQk8wRkJRMEVzZFVKQlFYVkNMRWxCUVVrN08wRkJSVE5DT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzYjBOQlFXOURMRk5CUVZNN1FVRkROME03UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMSE5DUVVGelFqdEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHZRMEZCYjBNN1FVRkRjRU03UVVGRFFTeG5Ra0ZCWjBJc1JVRkJSVHRCUVVOc1FpeHhRMEZCY1VNc1IwRkJSenRCUVVONFF6czdRVUZGUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNXVUZCV1R0QlFVTTNRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEN0Q1FVRXJRaXd5UWtGQk1rSTdRVUZETVVRN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFc2IwSkJRVzlDT3pzN1FVRkhjRUk3UVVGRFFUdEJRVU5CTzBGQlEwRXNOa0pCUVRaQ0xFbEJRVWs3UVVGRGFrTTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4dlEwRkJiME1zT0VKQlFUaENPMEZCUTJ4Rk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNjMEpCUVhOQ08wRkJRM1pETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNXVUZCV1R0QlFVTTNRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc0swSkJRU3RDTEhOQ1FVRnpRanRCUVVOeVJEdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGJtNUNRU3hwUTBGQmRVSTdPenM3T3pzN096czdRVU5CVml4WlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGWkxFVkJRVVVzUlVGQlZTeEZRVUZWTEVWQlFVVTdTVUZEZGtRc1RVRkJUU3hMUVVGTExFTkJRVU1zZFVOQlFYVkRMRU5CUVVNc1EwRkJRenRCUVVOMlJDeERRVUZETEVOQlFVTTdPenM3T3pzN096czdRVU5HVnl4aFFVRkxMRWRCUVVjc1IwRkJXU3hGUVVGRk8wbEJRMnBETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4N1YwRkRVaXhQUVVGUExFOUJRVThzUTBGQlF5eFJRVUZSTEV0QlFVc3NVVUZCVVR0WFFVTndReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGREwwTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhUUVVGVExFdEJRVXNzVjBGQlZ6dFhRVU40UXl4UFFVRlBMRk5CUVZNc1EwRkJReXhSUVVGUkxFdEJRVXNzVVVGQlVUdFhRVU4wUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5rTEVOQlFVTTdTVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOT0xFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEWml4RFFVRkRPMEZCUTBnc1EwRkJReXhEUVVGRE8wRkJSVmNzWVVGQlN5eEhRVUZITEVkQlFWa3NSVUZCUlR0SlFVTnFReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTzFkQlExSXNUMEZCVHl4UFFVRlBMRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkU3VjBGRGNFTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNVMEZCVXl4TFFVRkxMRmRCUVZjN1YwRkRkRU1zVDBGQlR5eFRRVUZUTEVOQlFVTXNVVUZCVVN4TFFVRkxMRkZCUVZFN1YwRkRkRU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRkRaQ3hEUVVGRE8wbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEVGl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRMllzUTBGQlF6dEJRVU5JTEVOQlFVTXNRMEZCUXp0QlFVVlhMR2xDUVVGVExFZEJRVWNzUjBGQldTeEZRVUZGTzBsQlEzSkRMRTFCUVUwc1EwRkJReXhQUVVGUExFMUJRVTBzUzBGQlN5eFhRVUZYTEVOQlFVTTdRVUZEZGtNc1EwRkJReXhEUVVGRE8wRkJSVmNzWTBGQlRTeEhRVUZITEVkQlFWa3NSVUZCUlR0SlFVTnNReXhOUVVGTkxFTkJRVU1zVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGZEJRVmNzUTBGQlF6dEJRVU42UlN4RFFVRkRMRU5CUVVNN096czdPenM3UVVOc1EwWXNhVU1pTENKbWFXeGxJam9pYVhOdmJXOXljR2hwWXkxd1lYUm9MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTaHlaWEYxYVhKbEtGd2lkWFJwYkZ3aUtTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhDSjFkR2xzWENKZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJbWx6YjIxdmNuQm9hV010Y0dGMGFGd2lYU0E5SUdaaFkzUnZjbmtvY21WeGRXbHlaU2hjSW5WMGFXeGNJaWtwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0ltbHpiMjF2Y25Cb2FXTXRjR0YwYUZ3aVhTQTlJR1poWTNSdmNua29jbTl2ZEZ0Y0luVjBhV3hjSWwwcE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9YMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWODFYMThwSUh0Y2JuSmxkSFZ5YmlCY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnYVdSbGJuUnBkSGtnWm5WdVkzUnBiMjRnWm05eUlHTmhiR3hwYm1jZ2FHRnliVzl1ZVNCcGJYQnZjblJ6SUhkcGRHZ2dkR2hsSUdOdmNuSmxZM1FnWTI5dWRHVjRkRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXBJSHNnY21WMGRYSnVJSFpoYkhWbE95QjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F5S1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0F4TURZMlpEUmlOV1kzWlRsbVpURm1PVGhsTUNJc0ltbHRjRzl5ZENCN0lIZHBiak15SUdGeklIZHBiak15UW1GelpTd2djRzl6YVhnZ1lYTWdjRzl6YVhoQ1lYTmxJSDBnWm5KdmJTQW5jR0YwYUM5d1lYUm9KenRjYm1sdGNHOXlkQ0I3SUdselYybHVJSDBnWm5KdmJTQW5MaTl3YkdGMFptOXliU2M3WEc1cGJYQnZjblFnZXlCdWIyOXdJSDBnWm5KdmJTQW5MaTl1YjI5d0p6dGNibHh1WTI5dWMzUWdkVzV6ZFhCd2IzSjBaV1JOWlhSb2IyUnpJRDBnZTF4dUlDQnlaWE52YkhabE9pQnViMjl3TEZ4dUlDQnlaV3hoZEdsMlpUb2dibTl2Y0N4Y2JuMDdYRzVjYm1OdmJuTjBJSGRwYmpNeVVuVnVkR2x0WlNBOUlIZHBiak15UW1GelpUdGNibU52Ym5OMElIQnZjMmw0VW5WdWRHbHRaU0E5SUhCdmMybDRRbUZ6WlR0Y2JseHViR1YwSUdSbFptRjFiSFJGZUhCdmNuUTdYRzVwWmlBb2FYTlhhVzRvS1NrZ2UxeHVJQ0JrWldaaGRXeDBSWGh3YjNKMElEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkMmx1TXpKU2RXNTBhVzFsS1R0Y2JuMGdaV3h6WlNCN1hHNGdJR1JsWm1GMWJIUkZlSEJ2Y25RZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQndiM05wZUZKMWJuUnBiV1VwTzF4dWZWeHViR1YwSUc1dmNtMWhiR2w2WlZKMWJuUnBiV1U3WEc1c1pYUWdhbTlwYmxKMWJuUnBiV1U3WEc1c1pYUWdjbVZ6YjJ4MlpWSjFiblJwYldVN1hHNXNaWFFnYVhOQlluTnZiSFYwWlZKMWJuUnBiV1U3WEc1c1pYUWdjbVZzWVhScGRtVlNkVzUwYVcxbE8xeHViR1YwSUdScGNtNWhiV1ZTZFc1MGFXMWxPMXh1YkdWMElHSmhjMlZ1WVcxbFVuVnVkR2x0WlR0Y2JteGxkQ0JsZUhSdVlXMWxVblZ1ZEdsdFpUdGNibXhsZENCelpYQlNkVzUwYVcxbE8xeHViR1YwSUdSbGJHbHRhWFJsY2xKMWJuUnBiV1U3WEc1c1pYUWdjR0Z5YzJWU2RXNTBhVzFsTzF4dWJHVjBJR1p2Y20xaGRGSjFiblJwYldVN1hHNWNibWxtSUNocGMxZHBiaWdwS1NCN1hHNGdJRzV2Y20xaGJHbDZaVkoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdWJtOXliV0ZzYVhwbE8xeHVJQ0JxYjJsdVVuVnVkR2x0WlNBOUlIZHBiak15VW5WdWRHbHRaUzVxYjJsdU8xeHVJQ0J5WlhOdmJIWmxVblZ1ZEdsdFpTQTlJSGRwYmpNeVVuVnVkR2x0WlM1eVpYTnZiSFpsTzF4dUlDQnBjMEZpYzI5c2RYUmxVblZ1ZEdsdFpTQTlJSGRwYmpNeVVuVnVkR2x0WlM1cGMwRmljMjlzZFhSbE8xeHVJQ0J5Wld4aGRHbDJaVkoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdWNtVnNZWFJwZG1VN1hHNGdJR1JwY201aGJXVlNkVzUwYVcxbElEMGdkMmx1TXpKU2RXNTBhVzFsTG1ScGNtNWhiV1U3WEc0Z0lHSmhjMlZ1WVcxbFVuVnVkR2x0WlNBOUlIZHBiak15VW5WdWRHbHRaUzVpWVhObGJtRnRaVHRjYmlBZ1pYaDBibUZ0WlZKMWJuUnBiV1VnUFNCM2FXNHpNbEoxYm5ScGJXVXVaWGgwYm1GdFpUdGNiaUFnYzJWd1VuVnVkR2x0WlNBOUlIZHBiak15VW5WdWRHbHRaUzV6WlhBN1hHNGdJR1JsYkdsdGFYUmxjbEoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdVpHVnNhVzFwZEdWeU8xeHVJQ0J3WVhKelpWSjFiblJwYldVZ1BTQjNhVzR6TWxKMWJuUnBiV1V1Y0dGeWMyVTdYRzRnSUdadmNtMWhkRkoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdVptOXliV0YwTzF4dWZTQmxiSE5sSUh0Y2JpQWdibTl5YldGc2FYcGxVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1dWIzSnRZV3hwZW1VN1hHNGdJR3B2YVc1U2RXNTBhVzFsSUQwZ2NHOXphWGhTZFc1MGFXMWxMbXB2YVc0N1hHNGdJSEpsYzI5c2RtVlNkVzUwYVcxbElEMGdjRzl6YVhoU2RXNTBhVzFsTG5KbGMyOXNkbVU3WEc0Z0lHbHpRV0p6YjJ4MWRHVlNkVzUwYVcxbElEMGdjRzl6YVhoU2RXNTBhVzFsTG1selFXSnpiMngxZEdVN1hHNGdJSEpsYkdGMGFYWmxVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1eVpXeGhkR2wyWlR0Y2JpQWdaR2x5Ym1GdFpWSjFiblJwYldVZ1BTQndiM05wZUZKMWJuUnBiV1V1WkdseWJtRnRaVHRjYmlBZ1ltRnpaVzVoYldWU2RXNTBhVzFsSUQwZ2NHOXphWGhTZFc1MGFXMWxMbUpoYzJWdVlXMWxPMXh1SUNCbGVIUnVZVzFsVW5WdWRHbHRaU0E5SUhCdmMybDRVblZ1ZEdsdFpTNWxlSFJ1WVcxbE8xeHVJQ0J6WlhCU2RXNTBhVzFsSUQwZ2NHOXphWGhTZFc1MGFXMWxMbk5sY0R0Y2JpQWdaR1ZzYVcxcGRHVnlVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1a1pXeHBiV2wwWlhJN1hHNGdJSEJoY25ObFVuVnVkR2x0WlNBOUlIQnZjMmw0VW5WdWRHbHRaUzV3WVhKelpUdGNiaUFnWm05eWJXRjBVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1bWIzSnRZWFE3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHUmxabUYxYkhSRmVIQnZjblE3WEc1bGVIQnZjblFnZTF4dUlDQnViM0p0WVd4cGVtVlNkVzUwYVcxbElHRnpJRzV2Y20xaGJHbDZaU3hjYmlBZ2FtOXBibEoxYm5ScGJXVWdZWE1nYW05cGJpeGNiaUFnY21WemIyeDJaVkoxYm5ScGJXVWdZWE1nY21WemIyeDJaU3hjYmlBZ2FYTkJZbk52YkhWMFpWSjFiblJwYldVZ1lYTWdhWE5CWW5OdmJIVjBaU3hjYmlBZ2NtVnNZWFJwZG1WU2RXNTBhVzFsSUdGeklISmxiR0YwYVhabExGeHVJQ0JrYVhKdVlXMWxVblZ1ZEdsdFpTQmhjeUJrYVhKdVlXMWxMRnh1SUNCaVlYTmxibUZ0WlZKMWJuUnBiV1VnWVhNZ1ltRnpaVzVoYldVc1hHNGdJR1Y0ZEc1aGJXVlNkVzUwYVcxbElHRnpJR1Y0ZEc1aGJXVXNYRzRnSUhObGNGSjFiblJwYldVZ1lYTWdjMlZ3VW5WdWRHbHRaU3hjYmlBZ1pHVnNhVzFwZEdWeVVuVnVkR2x0WlNCaGN5QmtaV3hwYldsMFpYSXNYRzRnSUhCaGNuTmxVblZ1ZEdsdFpTQmhjeUJ3WVhKelpTeGNiaUFnWm05eWJXRjBVblZ1ZEdsdFpTQmhjeUJtYjNKdFlYUXNYRzRnSUhCdmMybDRVblZ1ZEdsdFpTQmhjeUJ3YjNOcGVDeGNiaUFnZDJsdU16SlNkVzUwYVcxbElHRnpJSGRwYmpNeUxGeHVmVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5d1lYUm9MblJ6SWl3aUx5OGdRMjl3ZVhKcFoyaDBJRXB2ZVdWdWRDd2dTVzVqTGlCaGJtUWdiM1JvWlhJZ1RtOWtaU0JqYjI1MGNtbGlkWFJ2Y25NdVhISmNiaTh2WEhKY2JpOHZJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhYSEpjYmk4dklHTnZjSGtnYjJZZ2RHaHBjeUJ6YjJaMGQyRnlaU0JoYm1RZ1lYTnpiMk5wWVhSbFpDQmtiMk4xYldWdWRHRjBhVzl1SUdacGJHVnpJQ2gwYUdWY2NseHVMeThnWENKVGIyWjBkMkZ5WlZ3aUtTd2dkRzhnWkdWaGJDQnBiaUIwYUdVZ1UyOW1kSGRoY21VZ2QybDBhRzkxZENCeVpYTjBjbWxqZEdsdmJpd2dhVzVqYkhWa2FXNW5YSEpjYmk4dklIZHBkR2h2ZFhRZ2JHbHRhWFJoZEdsdmJpQjBhR1VnY21sbmFIUnpJSFJ2SUhWelpTd2dZMjl3ZVN3Z2JXOWthV1o1TENCdFpYSm5aU3dnY0hWaWJHbHphQ3hjY2x4dUx5OGdaR2x6ZEhKcFluVjBaU3dnYzNWaWJHbGpaVzV6WlN3Z1lXNWtMMjl5SUhObGJHd2dZMjl3YVdWeklHOW1JSFJvWlNCVGIyWjBkMkZ5WlN3Z1lXNWtJSFJ2SUhCbGNtMXBkRnh5WEc0dkx5QndaWEp6YjI1eklIUnZJSGRvYjIwZ2RHaGxJRk52Wm5SM1lYSmxJR2x6SUdaMWNtNXBjMmhsWkNCMGJ5QmtieUJ6Ynl3Z2MzVmlhbVZqZENCMGJ5QjBhR1ZjY2x4dUx5OGdabTlzYkc5M2FXNW5JR052Ym1ScGRHbHZibk02WEhKY2JpOHZYSEpjYmk4dklGUm9aU0JoWW05MlpTQmpiM0I1Y21sbmFIUWdibTkwYVdObElHRnVaQ0IwYUdseklIQmxjbTFwYzNOcGIyNGdibTkwYVdObElITm9ZV3hzSUdKbElHbHVZMngxWkdWa1hISmNiaTh2SUdsdUlHRnNiQ0JqYjNCcFpYTWdiM0lnYzNWaWMzUmhiblJwWVd3Z2NHOXlkR2x2Ym5NZ2IyWWdkR2hsSUZOdlpuUjNZWEpsTGx4eVhHNHZMMXh5WEc0dkx5QlVTRVVnVTA5R1ZGZEJVa1VnU1ZNZ1VGSlBWa2xFUlVRZ1hDSkJVeUJKVTF3aUxDQlhTVlJJVDFWVUlGZEJVbEpCVGxSWklFOUdJRUZPV1NCTFNVNUVMQ0JGV0ZCU1JWTlRYSEpjYmk4dklFOVNJRWxOVUV4SlJVUXNJRWxPUTB4VlJFbE9SeUJDVlZRZ1RrOVVJRXhKVFVsVVJVUWdWRThnVkVoRklGZEJVbEpCVGxSSlJWTWdUMFpjY2x4dUx5OGdUVVZTUTBoQlRsUkJRa2xNU1ZSWkxDQkdTVlJPUlZOVElFWlBVaUJCSUZCQlVsUkpRMVZNUVZJZ1VGVlNVRTlUUlNCQlRrUWdUazlPU1U1R1VrbE9SMFZOUlU1VUxpQkpUbHh5WEc0dkx5Qk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVWdRVlZVU0U5U1V5QlBVaUJEVDFCWlVrbEhTRlFnU0U5TVJFVlNVeUJDUlNCTVNVRkNURVVnUms5U0lFRk9XU0JEVEVGSlRTeGNjbHh1THk4Z1JFRk5RVWRGVXlCUFVpQlBWRWhGVWlCTVNVRkNTVXhKVkZrc0lGZElSVlJJUlZJZ1NVNGdRVTRnUVVOVVNVOU9JRTlHSUVOUFRsUlNRVU5VTENCVVQxSlVJRTlTWEhKY2JpOHZJRTlVU0VWU1YwbFRSU3dnUVZKSlUwbE9SeUJHVWs5TkxDQlBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVZjY2x4dUx5OGdWVk5GSUU5U0lFOVVTRVZTSUVSRlFVeEpUa2RUSUVsT0lGUklSU0JUVDBaVVYwRlNSUzVjY2x4dVhISmNiaWQxYzJVZ2MzUnlhV04wSnp0Y2NseHVYSEpjYmx4eVhHNTJZWElnYVhOWGFXNWtiM2R6SUQwZ2NISnZZMlZ6Y3k1d2JHRjBabTl5YlNBOVBUMGdKM2RwYmpNeUp6dGNjbHh1ZG1GeUlIVjBhV3dnUFNCeVpYRjFhWEpsS0NkMWRHbHNKeWs3WEhKY2JseHlYRzVjY2x4dUx5OGdjbVZ6YjJ4MlpYTWdMaUJoYm1RZ0xpNGdaV3hsYldWdWRITWdhVzRnWVNCd1lYUm9JR0Z5Y21GNUlIZHBkR2dnWkdseVpXTjBiM0o1SUc1aGJXVnpJSFJvWlhKbFhISmNiaTh2SUcxMWMzUWdZbVVnYm04Z2MyeGhjMmhsY3lCdmNpQmtaWFpwWTJVZ2JtRnRaWE1nS0dNNlhGd3BJR2x1SUhSb1pTQmhjbkpoZVZ4eVhHNHZMeUFvYzI4Z1lXeHpieUJ1YnlCc1pXRmthVzVuSUdGdVpDQjBjbUZwYkdsdVp5QnpiR0Z6YUdWeklDMGdhWFFnWkc5bGN5QnViM1FnWkdsemRHbHVaM1ZwYzJoY2NseHVMeThnY21Wc1lYUnBkbVVnWVc1a0lHRmljMjlzZFhSbElIQmhkR2h6S1Z4eVhHNW1kVzVqZEdsdmJpQnViM0p0WVd4cGVtVkJjbkpoZVNod1lYSjBjeXdnWVd4c2IzZEJZbTkyWlZKdmIzUXBJSHRjY2x4dUlDQjJZWElnY21WeklEMGdXMTA3WEhKY2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J3WVhKMGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnZG1GeUlIQWdQU0J3WVhKMGMxdHBYVHRjY2x4dVhISmNiaUFnSUNBdkx5QnBaMjV2Y21VZ1pXMXdkSGtnY0dGeWRITmNjbHh1SUNBZ0lHbG1JQ2doY0NCOGZDQndJRDA5UFNBbkxpY3BYSEpjYmlBZ0lDQWdJR052Ym5ScGJuVmxPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDaHdJRDA5UFNBbkxpNG5LU0I3WEhKY2JpQWdJQ0FnSUdsbUlDaHlaWE11YkdWdVozUm9JQ1ltSUhKbGMxdHlaWE11YkdWdVozUm9JQzBnTVYwZ0lUMDlJQ2N1TGljcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhNdWNHOXdLQ2s3WEhKY2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1lXeHNiM2RCWW05MlpWSnZiM1FwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWE11Y0hWemFDZ25MaTRuS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ2NtVnpMbkIxYzJnb2NDazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnlaWFIxY200Z2NtVnpPMXh5WEc1OVhISmNibHh5WEc0dkx5QnlaWFIxY201eklHRnVJR0Z5Y21GNUlIZHBkR2dnWlcxd2RIa2daV3hsYldWdWRITWdjbVZ0YjNabFpDQm1jbTl0SUdWcGRHaGxjaUJsYm1RZ2IyWWdkR2hsSUdsdWNIVjBYSEpjYmk4dklHRnljbUY1SUc5eUlIUm9aU0J2Y21sbmFXNWhiQ0JoY25KaGVTQnBaaUJ1YnlCbGJHVnRaVzUwY3lCdVpXVmtJSFJ2SUdKbElISmxiVzkyWldSY2NseHVablZ1WTNScGIyNGdkSEpwYlVGeWNtRjVLR0Z5Y2lrZ2UxeHlYRzRnSUhaaGNpQnNZWE4wU1c1a1pYZ2dQU0JoY25JdWJHVnVaM1JvSUMwZ01UdGNjbHh1SUNCMllYSWdjM1JoY25RZ1BTQXdPMXh5WEc0Z0lHWnZjaUFvT3lCemRHRnlkQ0E4UFNCc1lYTjBTVzVrWlhnN0lITjBZWEowS3lzcElIdGNjbHh1SUNBZ0lHbG1JQ2hoY25KYmMzUmhjblJkS1Z4eVhHNGdJQ0FnSUNCaWNtVmhhenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSFpoY2lCbGJtUWdQU0JzWVhOMFNXNWtaWGc3WEhKY2JpQWdabTl5SUNnN0lHVnVaQ0ErUFNBd095QmxibVF0TFNrZ2UxeHlYRzRnSUNBZ2FXWWdLR0Z5Y2x0bGJtUmRLVnh5WEc0Z0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHbG1JQ2h6ZEdGeWRDQTlQVDBnTUNBbUppQmxibVFnUFQwOUlHeGhjM1JKYm1SbGVDbGNjbHh1SUNBZ0lISmxkSFZ5YmlCaGNuSTdYSEpjYmlBZ2FXWWdLSE4wWVhKMElENGdaVzVrS1Z4eVhHNGdJQ0FnY21WMGRYSnVJRnRkTzF4eVhHNGdJSEpsZEhWeWJpQmhjbkl1YzJ4cFkyVW9jM1JoY25Rc0lHVnVaQ0FySURFcE8xeHlYRzU5WEhKY2JseHlYRzR2THlCU1pXZGxlQ0IwYnlCemNHeHBkQ0JoSUhkcGJtUnZkM01nY0dGMGFDQnBiblJ2SUhSb2NtVmxJSEJoY25Sek9pQmJLaXdnWkdWMmFXTmxMQ0J6YkdGemFDeGNjbHh1THk4Z2RHRnBiRjBnZDJsdVpHOTNjeTF2Ym14NVhISmNiblpoY2lCemNHeHBkRVJsZG1salpWSmxJRDFjY2x4dUlDQWdJQzllS0Z0aExYcEJMVnBkT254YlhGeGNYRnhjTDExN01uMWJYbHhjWEZ4Y1hDOWRLMXRjWEZ4Y1hGd3ZYU3RiWGx4Y1hGeGNYQzlkS3lrL0tGdGNYRnhjWEZ3dlhTay9LRnRjWEhOY1hGTmRLajhwSkM4N1hISmNibHh5WEc0dkx5QlNaV2RsZUNCMGJ5QnpjR3hwZENCMGFHVWdkR0ZwYkNCd1lYSjBJRzltSUhSb1pTQmhZbTkyWlNCcGJuUnZJRnNxTENCa2FYSXNJR0poYzJWdVlXMWxMQ0JsZUhSZFhISmNiblpoY2lCemNHeHBkRlJoYVd4U1pTQTlYSEpjYmlBZ0lDQXZYaWhiWEZ4elhGeFRYU28vS1Nnb1B6cGNYQzU3TVN3eWZYeGJYbHhjWEZ4Y1hDOWRLejk4S1NoY1hDNWJYaTVjWEM5Y1hGeGNYU3A4S1Nrb1B6cGJYRnhjWEZ4Y0wxMHFLU1F2TzF4eVhHNWNjbHh1ZG1GeUlIZHBiak15SUQwZ2UzMDdYSEpjYmx4eVhHNHZMeUJHZFc1amRHbHZiaUIwYnlCemNHeHBkQ0JoSUdacGJHVnVZVzFsSUdsdWRHOGdXM0p2YjNRc0lHUnBjaXdnWW1GelpXNWhiV1VzSUdWNGRGMWNjbHh1Wm5WdVkzUnBiMjRnZDJsdU16SlRjR3hwZEZCaGRHZ29abWxzWlc1aGJXVXBJSHRjY2x4dUlDQXZMeUJUWlhCaGNtRjBaU0JrWlhacFkyVXJjMnhoYzJnZ1puSnZiU0IwWVdsc1hISmNiaUFnZG1GeUlISmxjM1ZzZENBOUlITndiR2wwUkdWMmFXTmxVbVV1WlhobFl5aG1hV3hsYm1GdFpTa3NYSEpjYmlBZ0lDQWdJR1JsZG1salpTQTlJQ2h5WlhOMWJIUmJNVjBnZkh3Z0p5Y3BJQ3NnS0hKbGMzVnNkRnN5WFNCOGZDQW5KeWtzWEhKY2JpQWdJQ0FnSUhSaGFXd2dQU0J5WlhOMWJIUmJNMTBnZkh3Z0p5YzdYSEpjYmlBZ0x5OGdVM0JzYVhRZ2RHaGxJSFJoYVd3Z2FXNTBieUJrYVhJc0lHSmhjMlZ1WVcxbElHRnVaQ0JsZUhSbGJuTnBiMjVjY2x4dUlDQjJZWElnY21WemRXeDBNaUE5SUhOd2JHbDBWR0ZwYkZKbExtVjRaV01vZEdGcGJDa3NYSEpjYmlBZ0lDQWdJR1JwY2lBOUlISmxjM1ZzZERKYk1WMHNYSEpjYmlBZ0lDQWdJR0poYzJWdVlXMWxJRDBnY21WemRXeDBNbHN5WFN4Y2NseHVJQ0FnSUNBZ1pYaDBJRDBnY21WemRXeDBNbHN6WFR0Y2NseHVJQ0J5WlhSMWNtNGdXMlJsZG1salpTd2daR2x5TENCaVlYTmxibUZ0WlN3Z1pYaDBYVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2QybHVNekpUZEdGMFVHRjBhQ2h3WVhSb0tTQjdYSEpjYmlBZ2RtRnlJSEpsYzNWc2RDQTlJSE53YkdsMFJHVjJhV05sVW1VdVpYaGxZeWh3WVhSb0tTeGNjbHh1SUNBZ0lDQWdaR1YyYVdObElEMGdjbVZ6ZFd4MFd6RmRJSHg4SUNjbkxGeHlYRzRnSUNBZ0lDQnBjMVZ1WXlBOUlDRWhaR1YyYVdObElDWW1JR1JsZG1salpWc3hYU0FoUFQwZ0p6b25PMXh5WEc0Z0lISmxkSFZ5YmlCN1hISmNiaUFnSUNCa1pYWnBZMlU2SUdSbGRtbGpaU3hjY2x4dUlDQWdJR2x6Vlc1ak9pQnBjMVZ1WXl4Y2NseHVJQ0FnSUdselFXSnpiMngxZEdVNklHbHpWVzVqSUh4OElDRWhjbVZ6ZFd4MFd6SmRMQ0F2THlCVlRrTWdjR0YwYUhNZ1lYSmxJR0ZzZDJGNWN5QmhZbk52YkhWMFpWeHlYRzRnSUNBZ2RHRnBiRG9nY21WemRXeDBXek5kWEhKY2JpQWdmVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2JtOXliV0ZzYVhwbFZVNURVbTl2ZENoa1pYWnBZMlVwSUh0Y2NseHVJQ0J5WlhSMWNtNGdKMXhjWEZ4Y1hGeGNKeUFySUdSbGRtbGpaUzV5WlhCc1lXTmxLQzllVzF4Y1hGeGNYQzlkS3k4c0lDY25LUzV5WlhCc1lXTmxLQzliWEZ4Y1hGeGNMMTByTDJjc0lDZGNYRnhjSnlrN1hISmNibjFjY2x4dVhISmNiaTh2SUhCaGRHZ3VjbVZ6YjJ4MlpTaGJabkp2YlNBdUxpNWRMQ0IwYnlsY2NseHVkMmx1TXpJdWNtVnpiMngyWlNBOUlHWjFibU4wYVc5dUtDa2dlMXh5WEc0Z0lIWmhjaUJ5WlhOdmJIWmxaRVJsZG1salpTQTlJQ2NuTEZ4eVhHNGdJQ0FnSUNCeVpYTnZiSFpsWkZSaGFXd2dQU0FuSnl4Y2NseHVJQ0FnSUNBZ2NtVnpiMngyWldSQlluTnZiSFYwWlNBOUlHWmhiSE5sTzF4eVhHNWNjbHh1SUNCbWIzSWdLSFpoY2lCcElEMGdZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQXRJREU3SUdrZ1BqMGdMVEU3SUdrdExTa2dlMXh5WEc0Z0lDQWdkbUZ5SUhCaGRHZzdYSEpjYmlBZ0lDQnBaaUFvYVNBK1BTQXdLU0I3WEhKY2JpQWdJQ0FnSUhCaGRHZ2dQU0JoY21kMWJXVnVkSE5iYVYwN1hISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDRnlaWE52YkhabFpFUmxkbWxqWlNrZ2UxeHlYRzRnSUNBZ0lDQndZWFJvSUQwZ2NISnZZMlZ6Y3k1amQyUW9LVHRjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQzh2SUZkcGJtUnZkM01nYUdGeklIUm9aU0JqYjI1alpYQjBJRzltSUdSeWFYWmxMWE53WldOcFptbGpJR04xY25KbGJuUWdkMjl5YTJsdVoxeHlYRzRnSUNBZ0lDQXZMeUJrYVhKbFkzUnZjbWxsY3k0Z1NXWWdkMlVuZG1VZ2NtVnpiMngyWldRZ1lTQmtjbWwyWlNCc1pYUjBaWElnWW5WMElHNXZkQ0I1WlhRZ1lXNWNjbHh1SUNBZ0lDQWdMeThnWVdKemIyeDFkR1VnY0dGMGFDd2daMlYwSUdOM1pDQm1iM0lnZEdoaGRDQmtjbWwyWlM0Z1YyVW5jbVVnYzNWeVpTQjBhR1VnWkdWMmFXTmxJR2x6SUc1dmRGeHlYRzRnSUNBZ0lDQXZMeUJoYmlCMWJtTWdjR0YwYUNCaGRDQjBhR2x6SUhCdmFXNTBjeXdnWW1WallYVnpaU0IxYm1NZ2NHRjBhSE1nWVhKbElHRnNkMkY1Y3lCaFluTnZiSFYwWlM1Y2NseHVJQ0FnSUNBZ2NHRjBhQ0E5SUhCeWIyTmxjM011Wlc1Mld5YzlKeUFySUhKbGMyOXNkbVZrUkdWMmFXTmxYVHRjY2x4dUlDQWdJQ0FnTHk4Z1ZtVnlhV1o1SUhSb1lYUWdZU0JrY21sMlpTMXNiMk5oYkNCamQyUWdkMkZ6SUdadmRXNWtJR0Z1WkNCMGFHRjBJR2wwSUdGamRIVmhiR3g1SUhCdmFXNTBjMXh5WEc0Z0lDQWdJQ0F2THlCMGJ5QnZkWElnWkhKcGRtVXVJRWxtSUc1dmRDd2daR1ZtWVhWc2RDQjBieUIwYUdVZ1pISnBkbVVuY3lCeWIyOTBMbHh5WEc0Z0lDQWdJQ0JwWmlBb0lYQmhkR2dnZkh3Z2NHRjBhQzV6ZFdKemRISW9NQ3dnTXlrdWRHOU1iM2RsY2tOaGMyVW9LU0FoUFQxY2NseHVJQ0FnSUNBZ0lDQWdJSEpsYzI5c2RtVmtSR1YyYVdObExuUnZURzkzWlhKRFlYTmxLQ2tnS3lBblhGeGNYQ2NwSUh0Y2NseHVJQ0FnSUNBZ0lDQndZWFJvSUQwZ2NtVnpiMngyWldSRVpYWnBZMlVnS3lBblhGeGNYQ2M3WEhKY2JpQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXZMeUJUYTJsd0lHVnRjSFI1SUdGdVpDQnBiblpoYkdsa0lHVnVkSEpwWlhOY2NseHVJQ0FnSUdsbUlDZ2hkWFJwYkM1cGMxTjBjbWx1Wnlod1lYUm9LU2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRITWdkRzhnY0dGMGFDNXlaWE52YkhabElHMTFjM1FnWW1VZ2MzUnlhVzVuY3ljcE8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hjR0YwYUNrZ2UxeHlYRzRnSUNBZ0lDQmpiMjUwYVc1MVpUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2NtVnpkV3gwSUQwZ2QybHVNekpUZEdGMFVHRjBhQ2h3WVhSb0tTeGNjbHh1SUNBZ0lDQWdJQ0JrWlhacFkyVWdQU0J5WlhOMWJIUXVaR1YyYVdObExGeHlYRzRnSUNBZ0lDQWdJR2x6Vlc1aklEMGdjbVZ6ZFd4MExtbHpWVzVqTEZ4eVhHNGdJQ0FnSUNBZ0lHbHpRV0p6YjJ4MWRHVWdQU0J5WlhOMWJIUXVhWE5CWW5OdmJIVjBaU3hjY2x4dUlDQWdJQ0FnSUNCMFlXbHNJRDBnY21WemRXeDBMblJoYVd3N1hISmNibHh5WEc0Z0lDQWdhV1lnS0dSbGRtbGpaU0FtSmx4eVhHNGdJQ0FnSUNBZ0lISmxjMjlzZG1Wa1JHVjJhV05sSUNZbVhISmNiaUFnSUNBZ0lDQWdaR1YyYVdObExuUnZURzkzWlhKRFlYTmxLQ2tnSVQwOUlISmxjMjlzZG1Wa1JHVjJhV05sTG5SdlRHOTNaWEpEWVhObEtDa3BJSHRjY2x4dUlDQWdJQ0FnTHk4Z1ZHaHBjeUJ3WVhSb0lIQnZhVzUwY3lCMGJ5QmhibTkwYUdWeUlHUmxkbWxqWlNCemJ5QnBkQ0JwY3lCdWIzUWdZWEJ3YkdsallXSnNaVnh5WEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCcFppQW9JWEpsYzI5c2RtVmtSR1YyYVdObEtTQjdYSEpjYmlBZ0lDQWdJSEpsYzI5c2RtVmtSR1YyYVdObElEMGdaR1YyYVdObE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2FXWWdLQ0Z5WlhOdmJIWmxaRUZpYzI5c2RYUmxLU0I3WEhKY2JpQWdJQ0FnSUhKbGMyOXNkbVZrVkdGcGJDQTlJSFJoYVd3Z0t5QW5YRnhjWENjZ0t5QnlaWE52YkhabFpGUmhhV3c3WEhKY2JpQWdJQ0FnSUhKbGMyOXNkbVZrUVdKemIyeDFkR1VnUFNCcGMwRmljMjlzZFhSbE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR2xtSUNoeVpYTnZiSFpsWkVSbGRtbGpaU0FtSmlCeVpYTnZiSFpsWkVGaWMyOXNkWFJsS1NCN1hISmNiaUFnSUNBZ0lHSnlaV0ZyTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dVhISmNiaUFnTHk4Z1EyOXVkbVZ5ZENCemJHRnphR1Z6SUhSdklHSmhZMnR6YkdGemFHVnpJSGRvWlc0Z1lISmxjMjlzZG1Wa1JHVjJhV05sWUNCd2IybHVkSE1nZEc4Z1lXNGdWVTVEWEhKY2JpQWdMeThnY205dmRDNGdRV3h6YnlCemNYVmhjMmdnYlhWc2RHbHdiR1VnYzJ4aGMyaGxjeUJwYm5SdklHRWdjMmx1WjJ4bElHOXVaU0IzYUdWeVpTQmhjSEJ5YjNCeWFXRjBaUzVjY2x4dUlDQnBaaUFvYVhOVmJtTXBJSHRjY2x4dUlDQWdJSEpsYzI5c2RtVmtSR1YyYVdObElEMGdibTl5YldGc2FYcGxWVTVEVW05dmRDaHlaWE52YkhabFpFUmxkbWxqWlNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNBdkx5QkJkQ0IwYUdseklIQnZhVzUwSUhSb1pTQndZWFJvSUhOb2IzVnNaQ0JpWlNCeVpYTnZiSFpsWkNCMGJ5QmhJR1oxYkd3Z1lXSnpiMngxZEdVZ2NHRjBhQ3hjY2x4dUlDQXZMeUJpZFhRZ2FHRnVaR3hsSUhKbGJHRjBhWFpsSUhCaGRHaHpJSFJ2SUdKbElITmhabVVnS0cxcFoyaDBJR2hoY0hCbGJpQjNhR1Z1SUhCeWIyTmxjM011WTNka0tDbGNjbHh1SUNBdkx5Qm1ZV2xzY3lsY2NseHVYSEpjYmlBZ0x5OGdUbTl5YldGc2FYcGxJSFJvWlNCMFlXbHNJSEJoZEdoY2NseHVJQ0J5WlhOdmJIWmxaRlJoYVd3Z1BTQnViM0p0WVd4cGVtVkJjbkpoZVNoeVpYTnZiSFpsWkZSaGFXd3VjM0JzYVhRb0wxdGNYRnhjWEZ3dlhTc3ZLU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FoY21WemIyeDJaV1JCWW5OdmJIVjBaU2t1YW05cGJpZ25YRnhjWENjcE8xeHlYRzVjY2x4dUlDQnlaWFIxY200Z0tISmxjMjlzZG1Wa1JHVjJhV05sSUNzZ0tISmxjMjlzZG1Wa1FXSnpiMngxZEdVZ1B5QW5YRnhjWENjZ09pQW5KeWtnS3lCeVpYTnZiSFpsWkZSaGFXd3BJSHg4WEhKY2JpQWdJQ0FnSUNBZ0lDY3VKenRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUzYVc0ek1pNXViM0p0WVd4cGVtVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYSEpjYmlBZ2RtRnlJSEpsYzNWc2RDQTlJSGRwYmpNeVUzUmhkRkJoZEdnb2NHRjBhQ2tzWEhKY2JpQWdJQ0FnSUdSbGRtbGpaU0E5SUhKbGMzVnNkQzVrWlhacFkyVXNYSEpjYmlBZ0lDQWdJR2x6Vlc1aklEMGdjbVZ6ZFd4MExtbHpWVzVqTEZ4eVhHNGdJQ0FnSUNCcGMwRmljMjlzZFhSbElEMGdjbVZ6ZFd4MExtbHpRV0p6YjJ4MWRHVXNYSEpjYmlBZ0lDQWdJSFJoYVd3Z1BTQnlaWE4xYkhRdWRHRnBiQ3hjY2x4dUlDQWdJQ0FnZEhKaGFXeHBibWRUYkdGemFDQTlJQzliWEZ4Y1hGeGNMMTBrTHk1MFpYTjBLSFJoYVd3cE8xeHlYRzVjY2x4dUlDQXZMeUJPYjNKdFlXeHBlbVVnZEdobElIUmhhV3dnY0dGMGFGeHlYRzRnSUhSaGFXd2dQU0J1YjNKdFlXeHBlbVZCY25KaGVTaDBZV2xzTG5Od2JHbDBLQzliWEZ4Y1hGeGNMMTByTHlrc0lDRnBjMEZpYzI5c2RYUmxLUzVxYjJsdUtDZGNYRnhjSnlrN1hISmNibHh5WEc0Z0lHbG1JQ2doZEdGcGJDQW1KaUFoYVhOQlluTnZiSFYwWlNrZ2UxeHlYRzRnSUNBZ2RHRnBiQ0E5SUNjdUp6dGNjbHh1SUNCOVhISmNiaUFnYVdZZ0tIUmhhV3dnSmlZZ2RISmhhV3hwYm1kVGJHRnphQ2tnZTF4eVhHNGdJQ0FnZEdGcGJDQXJQU0FuWEZ4Y1hDYzdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQXZMeUJEYjI1MlpYSjBJSE5zWVhOb1pYTWdkRzhnWW1GamEzTnNZWE5vWlhNZ2QyaGxiaUJnWkdWMmFXTmxZQ0J3YjJsdWRITWdkRzhnWVc0Z1ZVNURJSEp2YjNRdVhISmNiaUFnTHk4Z1FXeHpieUJ6Y1hWaGMyZ2diWFZzZEdsd2JHVWdjMnhoYzJobGN5QnBiblJ2SUdFZ2MybHVaMnhsSUc5dVpTQjNhR1Z5WlNCaGNIQnliM0J5YVdGMFpTNWNjbHh1SUNCcFppQW9hWE5WYm1NcElIdGNjbHh1SUNBZ0lHUmxkbWxqWlNBOUlHNXZjbTFoYkdsNlpWVk9RMUp2YjNRb1pHVjJhV05sS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUJrWlhacFkyVWdLeUFvYVhOQlluTnZiSFYwWlNBL0lDZGNYRnhjSnlBNklDY25LU0FySUhSaGFXdzdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVkMmx1TXpJdWFYTkJZbk52YkhWMFpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNjbHh1SUNCeVpYUjFjbTRnZDJsdU16SlRkR0YwVUdGMGFDaHdZWFJvS1M1cGMwRmljMjlzZFhSbE8xeHlYRzU5TzF4eVhHNWNjbHh1ZDJsdU16SXVhbTlwYmlBOUlHWjFibU4wYVc5dUtDa2dlMXh5WEc0Z0lIWmhjaUJ3WVhSb2N5QTlJRnRkTzF4eVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQjJZWElnWVhKbklEMGdZWEpuZFcxbGJuUnpXMmxkTzF4eVhHNGdJQ0FnYVdZZ0tDRjFkR2xzTG1selUzUnlhVzVuS0dGeVp5a3BJSHRjY2x4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblFYSm5kVzFsYm5SeklIUnZJSEJoZEdndWFtOXBiaUJ0ZFhOMElHSmxJSE4wY21sdVozTW5LVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR2xtSUNoaGNtY3BJSHRjY2x4dUlDQWdJQ0FnY0dGMGFITXVjSFZ6YUNoaGNtY3BPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdkbUZ5SUdwdmFXNWxaQ0E5SUhCaGRHaHpMbXB2YVc0b0oxeGNYRnduS1R0Y2NseHVYSEpjYmlBZ0x5OGdUV0ZyWlNCemRYSmxJSFJvWVhRZ2RHaGxJR3B2YVc1bFpDQndZWFJvSUdSdlpYTnVKM1FnYzNSaGNuUWdkMmwwYUNCMGQyOGdjMnhoYzJobGN5d2dZbVZqWVhWelpWeHlYRzRnSUM4dklHNXZjbTFoYkdsNlpTZ3BJSGRwYkd3Z2JXbHpkR0ZyWlNCcGRDQm1iM0lnWVc0Z1ZVNURJSEJoZEdnZ2RHaGxiaTVjY2x4dUlDQXZMMXh5WEc0Z0lDOHZJRlJvYVhNZ2MzUmxjQ0JwY3lCemEybHdjR1ZrSUhkb1pXNGdhWFFnYVhNZ2RtVnllU0JqYkdWaGNpQjBhR0YwSUhSb1pTQjFjMlZ5SUdGamRIVmhiR3g1WEhKY2JpQWdMeThnYVc1MFpXNWtaV1FnZEc4Z2NHOXBiblFnWVhRZ1lXNGdWVTVESUhCaGRHZ3VJRlJvYVhNZ2FYTWdZWE56ZFcxbFpDQjNhR1Z1SUhSb1pTQm1hWEp6ZEZ4eVhHNGdJQzh2SUc1dmJpMWxiWEIwZVNCemRISnBibWNnWVhKbmRXMWxiblJ6SUhOMFlYSjBjeUIzYVhSb0lHVjRZV04wYkhrZ2RIZHZJSE5zWVhOb1pYTWdabTlzYkc5M1pXUWdZbmxjY2x4dUlDQXZMeUJoZENCc1pXRnpkQ0J2Ym1VZ2JXOXlaU0J1YjI0dGMyeGhjMmdnWTJoaGNtRmpkR1Z5TGx4eVhHNGdJQzh2WEhKY2JpQWdMeThnVG05MFpTQjBhR0YwSUdadmNpQnViM0p0WVd4cGVtVW9LU0IwYnlCMGNtVmhkQ0JoSUhCaGRHZ2dZWE1nWVc0Z1ZVNURJSEJoZEdnZ2FYUWdibVZsWkhNZ2RHOWNjbHh1SUNBdkx5Qm9ZWFpsSUdGMElHeGxZWE4wSURJZ1kyOXRjRzl1Wlc1MGN5d2djMjhnZDJVZ1pHOXVKM1FnWm1sc2RHVnlJR1p2Y2lCMGFHRjBJR2hsY21VdVhISmNiaUFnTHk4Z1ZHaHBjeUJ0WldGdWN5QjBhR0YwSUhSb1pTQjFjMlZ5SUdOaGJpQjFjMlVnYW05cGJpQjBieUJqYjI1emRISjFZM1FnVlU1RElIQmhkR2h6SUdaeWIyMWNjbHh1SUNBdkx5QmhJSE5sY25abGNpQnVZVzFsSUdGdVpDQmhJSE5vWVhKbElHNWhiV1U3SUdadmNpQmxlR0Z0Y0d4bE9seHlYRzRnSUM4dklDQWdjR0YwYUM1cWIybHVLQ2N2TDNObGNuWmxjaWNzSUNkemFHRnlaU2NwSUMwK0lDZGNYRnhjWEZ4Y1hITmxjblpsY2x4Y1hGeHphR0Z5WlZ4Y0p5bGNjbHh1SUNCcFppQW9JUzllVzF4Y1hGeGNYQzlkZXpKOVcxNWNYRnhjWEZ3dlhTOHVkR1Z6ZENod1lYUm9jMXN3WFNrcElIdGNjbHh1SUNBZ0lHcHZhVzVsWkNBOUlHcHZhVzVsWkM1eVpYQnNZV05sS0M5ZVcxeGNYRnhjWEM5ZGV6SXNmUzhzSUNkY1hGeGNKeWs3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdkMmx1TXpJdWJtOXliV0ZzYVhwbEtHcHZhVzVsWkNrN1hISmNibjA3WEhKY2JseHlYRzVjY2x4dUx5OGdjR0YwYUM1eVpXeGhkR2wyWlNobWNtOXRMQ0IwYnlsY2NseHVMeThnYVhRZ2QybHNiQ0J6YjJ4MlpTQjBhR1VnY21Wc1lYUnBkbVVnY0dGMGFDQm1jbTl0SUNkbWNtOXRKeUIwYnlBbmRHOG5MQ0JtYjNJZ2FXNXpkR0Z1WTJVNlhISmNiaTh2SUdaeWIyMGdQU0FuUXpwY1hGeGNiM0poYm1SbFlWeGNYRngwWlhOMFhGeGNYR0ZoWVNkY2NseHVMeThnZEc4Z1BTQW5RenBjWEZ4Y2IzSmhibVJsWVZ4Y1hGeHBiWEJzWEZ4Y1hHSmlZaWRjY2x4dUx5OGdWR2hsSUc5MWRIQjFkQ0J2WmlCMGFHVWdablZ1WTNScGIyNGdjMmh2ZFd4a0lHSmxPaUFuTGk1Y1hGeGNMaTVjWEZ4Y2FXMXdiRnhjWEZ4aVltSW5YSEpjYm5kcGJqTXlMbkpsYkdGMGFYWmxJRDBnWm5WdVkzUnBiMjRvWm5KdmJTd2dkRzhwSUh0Y2NseHVJQ0JtY205dElEMGdkMmx1TXpJdWNtVnpiMngyWlNobWNtOXRLVHRjY2x4dUlDQjBieUE5SUhkcGJqTXlMbkpsYzI5c2RtVW9kRzhwTzF4eVhHNWNjbHh1SUNBdkx5QjNhVzVrYjNkeklHbHpJRzV2ZENCallYTmxJSE5sYm5OcGRHbDJaVnh5WEc0Z0lIWmhjaUJzYjNkbGNrWnliMjBnUFNCbWNtOXRMblJ2VEc5M1pYSkRZWE5sS0NrN1hISmNiaUFnZG1GeUlHeHZkMlZ5Vkc4Z1BTQjBieTUwYjB4dmQyVnlRMkZ6WlNncE8xeHlYRzVjY2x4dUlDQjJZWElnZEc5UVlYSjBjeUE5SUhSeWFXMUJjbkpoZVNoMGJ5NXpjR3hwZENnblhGeGNYQ2NwS1R0Y2NseHVYSEpjYmlBZ2RtRnlJR3h2ZDJWeVJuSnZiVkJoY25SeklEMGdkSEpwYlVGeWNtRjVLR3h2ZDJWeVJuSnZiUzV6Y0d4cGRDZ25YRnhjWENjcEtUdGNjbHh1SUNCMllYSWdiRzkzWlhKVWIxQmhjblJ6SUQwZ2RISnBiVUZ5Y21GNUtHeHZkMlZ5Vkc4dWMzQnNhWFFvSjF4Y1hGd25LU2s3WEhKY2JseHlYRzRnSUhaaGNpQnNaVzVuZEdnZ1BTQk5ZWFJvTG0xcGJpaHNiM2RsY2taeWIyMVFZWEowY3k1c1pXNW5kR2dzSUd4dmQyVnlWRzlRWVhKMGN5NXNaVzVuZEdncE8xeHlYRzRnSUhaaGNpQnpZVzFsVUdGeWRITk1aVzVuZEdnZ1BTQnNaVzVuZEdnN1hISmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdhV1lnS0d4dmQyVnlSbkp2YlZCaGNuUnpXMmxkSUNFOVBTQnNiM2RsY2xSdlVHRnlkSE5iYVYwcElIdGNjbHh1SUNBZ0lDQWdjMkZ0WlZCaGNuUnpUR1Z1WjNSb0lEMGdhVHRjY2x4dUlDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQjlYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnBaaUFvYzJGdFpWQmhjblJ6VEdWdVozUm9JRDA5SURBcElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCMGJ6dGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIWmhjaUJ2ZFhSd2RYUlFZWEowY3lBOUlGdGRPMXh5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0J6WVcxbFVHRnlkSE5NWlc1bmRHZzdJR2tnUENCc2IzZGxja1p5YjIxUVlYSjBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ2IzVjBjSFYwVUdGeWRITXVjSFZ6YUNnbkxpNG5LVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJRzkxZEhCMWRGQmhjblJ6SUQwZ2IzVjBjSFYwVUdGeWRITXVZMjl1WTJGMEtIUnZVR0Z5ZEhNdWMyeHBZMlVvYzJGdFpWQmhjblJ6VEdWdVozUm9LU2s3WEhKY2JseHlYRzRnSUhKbGRIVnliaUJ2ZFhSd2RYUlFZWEowY3k1cWIybHVLQ2RjWEZ4Y0p5azdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVkMmx1TXpJdVgyMWhhMlZNYjI1bklEMGdablZ1WTNScGIyNG9jR0YwYUNrZ2UxeHlYRzRnSUM4dklFNXZkR1U2SUhSb2FYTWdkMmxzYkNBcWNISnZZbUZpYkhrcUlIUm9jbTkzSUhOdmJXVjNhR1Z5WlM1Y2NseHVJQ0JwWmlBb0lYVjBhV3d1YVhOVGRISnBibWNvY0dGMGFDa3BYSEpjYmlBZ0lDQnlaWFIxY200Z2NHRjBhRHRjY2x4dVhISmNiaUFnYVdZZ0tDRndZWFJvS1NCN1hISmNiaUFnSUNCeVpYUjFjbTRnSnljN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCMllYSWdjbVZ6YjJ4MlpXUlFZWFJvSUQwZ2QybHVNekl1Y21WemIyeDJaU2h3WVhSb0tUdGNjbHh1WEhKY2JpQWdhV1lnS0M5ZVcyRXRla0V0V2wxY1hEcGNYRnhjTHk1MFpYTjBLSEpsYzI5c2RtVmtVR0YwYUNrcElIdGNjbHh1SUNBZ0lDOHZJSEJoZEdnZ2FYTWdiRzlqWVd3Z1ptbHNaWE41YzNSbGJTQndZWFJvTENCM2FHbGphQ0J1WldWa2N5QjBieUJpWlNCamIyNTJaWEowWldSY2NseHVJQ0FnSUM4dklIUnZJR3h2Ym1jZ1ZVNURJSEJoZEdndVhISmNiaUFnSUNCeVpYUjFjbTRnSjF4Y1hGeGNYRnhjUDF4Y1hGd25JQ3NnY21WemIyeDJaV1JRWVhSb08xeHlYRzRnSUgwZ1pXeHpaU0JwWmlBb0wxNWNYRnhjWEZ4Y1hGdGVQeTVkTHk1MFpYTjBLSEpsYzI5c2RtVmtVR0YwYUNrcElIdGNjbHh1SUNBZ0lDOHZJSEJoZEdnZ2FYTWdibVYwZDI5eWF5QlZUa01nY0dGMGFDd2dkMmhwWTJnZ2JtVmxaSE1nZEc4Z1ltVWdZMjl1ZG1WeWRHVmtYSEpjYmlBZ0lDQXZMeUIwYnlCc2IyNW5JRlZPUXlCd1lYUm9MbHh5WEc0Z0lDQWdjbVYwZFhKdUlDZGNYRnhjWEZ4Y1hEOWNYRnhjVlU1RFhGeGNYQ2NnS3lCeVpYTnZiSFpsWkZCaGRHZ3VjM1ZpYzNSeWFXNW5LRElwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY21WMGRYSnVJSEJoZEdnN1hISmNibjA3WEhKY2JseHlYRzVjY2x4dWQybHVNekl1WkdseWJtRnRaU0E5SUdaMWJtTjBhVzl1S0hCaGRHZ3BJSHRjY2x4dUlDQjJZWElnY21WemRXeDBJRDBnZDJsdU16SlRjR3hwZEZCaGRHZ29jR0YwYUNrc1hISmNiaUFnSUNBZ0lISnZiM1FnUFNCeVpYTjFiSFJiTUYwc1hISmNiaUFnSUNBZ0lHUnBjaUE5SUhKbGMzVnNkRnN4WFR0Y2NseHVYSEpjYmlBZ2FXWWdLQ0Z5YjI5MElDWW1JQ0ZrYVhJcElIdGNjbHh1SUNBZ0lDOHZJRTV2SUdScGNtNWhiV1VnZDJoaGRITnZaWFpsY2x4eVhHNGdJQ0FnY21WMGRYSnVJQ2N1Snp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUdsbUlDaGthWElwSUh0Y2NseHVJQ0FnSUM4dklFbDBJR2hoY3lCaElHUnBjbTVoYldVc0lITjBjbWx3SUhSeVlXbHNhVzVuSUhOc1lYTm9YSEpjYmlBZ0lDQmthWElnUFNCa2FYSXVjM1ZpYzNSeUtEQXNJR1JwY2k1c1pXNW5kR2dnTFNBeEtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lISmxkSFZ5YmlCeWIyOTBJQ3NnWkdseU8xeHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JuZHBiak15TG1KaGMyVnVZVzFsSUQwZ1puVnVZM1JwYjI0b2NHRjBhQ3dnWlhoMEtTQjdYSEpjYmlBZ2RtRnlJR1lnUFNCM2FXNHpNbE53YkdsMFVHRjBhQ2h3WVhSb0tWc3lYVHRjY2x4dUlDQXZMeUJVVDBSUE9pQnRZV3RsSUhSb2FYTWdZMjl0Y0dGeWFYTnZiaUJqWVhObExXbHVjMlZ1YzJsMGFYWmxJRzl1SUhkcGJtUnZkM00vWEhKY2JpQWdhV1lnS0dWNGRDQW1KaUJtTG5OMVluTjBjaWd0TVNBcUlHVjRkQzVzWlc1bmRHZ3BJRDA5UFNCbGVIUXBJSHRjY2x4dUlDQWdJR1lnUFNCbUxuTjFZbk4wY2lnd0xDQm1MbXhsYm1kMGFDQXRJR1Y0ZEM1c1pXNW5kR2dwTzF4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z1pqdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNTNhVzR6TWk1bGVIUnVZVzFsSUQwZ1puVnVZM1JwYjI0b2NHRjBhQ2tnZTF4eVhHNGdJSEpsZEhWeWJpQjNhVzR6TWxOd2JHbDBVR0YwYUNod1lYUm9LVnN6WFR0Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1M2FXNHpNaTVtYjNKdFlYUWdQU0JtZFc1amRHbHZiaWh3WVhSb1QySnFaV04wS1NCN1hISmNiaUFnYVdZZ0tDRjFkR2xzTG1selQySnFaV04wS0hCaGRHaFBZbXBsWTNRcEtTQjdYSEpjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRnh5WEc0Z0lDQWdJQ0FnSUZ3aVVHRnlZVzFsZEdWeUlDZHdZWFJvVDJKcVpXTjBKeUJ0ZFhOMElHSmxJR0Z1SUc5aWFtVmpkQ3dnYm05MElGd2lJQ3NnZEhsd1pXOW1JSEJoZEdoUFltcGxZM1JjY2x4dUlDQWdJQ2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0IyWVhJZ2NtOXZkQ0E5SUhCaGRHaFBZbXBsWTNRdWNtOXZkQ0I4ZkNBbkp6dGNjbHh1WEhKY2JpQWdhV1lnS0NGMWRHbHNMbWx6VTNSeWFXNW5LSEp2YjNRcEtTQjdYSEpjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRnh5WEc0Z0lDQWdJQ0FnSUZ3aUozQmhkR2hQWW1wbFkzUXVjbTl2ZENjZ2JYVnpkQ0JpWlNCaElITjBjbWx1WnlCdmNpQjFibVJsWm1sdVpXUXNJRzV2ZENCY0lpQXJYSEpjYmlBZ0lDQWdJQ0FnZEhsd1pXOW1JSEJoZEdoUFltcGxZM1F1Y205dmRGeHlYRzRnSUNBZ0tUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIWmhjaUJrYVhJZ1BTQndZWFJvVDJKcVpXTjBMbVJwY2p0Y2NseHVJQ0IyWVhJZ1ltRnpaU0E5SUhCaGRHaFBZbXBsWTNRdVltRnpaU0I4ZkNBbkp6dGNjbHh1SUNCcFppQW9JV1JwY2lrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUdKaGMyVTdYSEpjYmlBZ2ZWeHlYRzRnSUdsbUlDaGthWEpiWkdseUxteGxibWQwYUNBdElERmRJRDA5UFNCM2FXNHpNaTV6WlhBcElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCa2FYSWdLeUJpWVhObE8xeHlYRzRnSUgxY2NseHVJQ0J5WlhSMWNtNGdaR2x5SUNzZ2QybHVNekl1YzJWd0lDc2dZbUZ6WlR0Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1M2FXNHpNaTV3WVhKelpTQTlJR1oxYm1OMGFXOXVLSEJoZEdoVGRISnBibWNwSUh0Y2NseHVJQ0JwWmlBb0lYVjBhV3d1YVhOVGRISnBibWNvY0dGMGFGTjBjbWx1WnlrcElIdGNjbHh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YSEpjYmlBZ0lDQWdJQ0FnWENKUVlYSmhiV1YwWlhJZ0ozQmhkR2hUZEhKcGJtY25JRzExYzNRZ1ltVWdZU0J6ZEhKcGJtY3NJRzV2ZENCY0lpQXJJSFI1Y0dWdlppQndZWFJvVTNSeWFXNW5YSEpjYmlBZ0lDQXBPMXh5WEc0Z0lIMWNjbHh1SUNCMllYSWdZV3hzVUdGeWRITWdQU0IzYVc0ek1sTndiR2wwVUdGMGFDaHdZWFJvVTNSeWFXNW5LVHRjY2x4dUlDQnBaaUFvSVdGc2JGQmhjblJ6SUh4OElHRnNiRkJoY25SekxteGxibWQwYUNBaFBUMGdOQ2tnZTF4eVhHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lrbHVkbUZzYVdRZ2NHRjBhQ0FuWENJZ0t5QndZWFJvVTNSeWFXNW5JQ3NnWENJblhDSXBPMXh5WEc0Z0lIMWNjbHh1SUNCeVpYUjFjbTRnZTF4eVhHNGdJQ0FnY205dmREb2dZV3hzVUdGeWRITmJNRjBzWEhKY2JpQWdJQ0JrYVhJNklHRnNiRkJoY25Seld6QmRJQ3NnWVd4c1VHRnlkSE5iTVYwdWMyeHBZMlVvTUN3Z0xURXBMRnh5WEc0Z0lDQWdZbUZ6WlRvZ1lXeHNVR0Z5ZEhOYk1sMHNYSEpjYmlBZ0lDQmxlSFE2SUdGc2JGQmhjblJ6V3pOZExGeHlYRzRnSUNBZ2JtRnRaVG9nWVd4c1VHRnlkSE5iTWwwdWMyeHBZMlVvTUN3Z1lXeHNVR0Z5ZEhOYk1sMHViR1Z1WjNSb0lDMGdZV3hzVUdGeWRITmJNMTB1YkdWdVozUm9LVnh5WEc0Z0lIMDdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVkMmx1TXpJdWMyVndJRDBnSjF4Y1hGd25PMXh5WEc1M2FXNHpNaTVrWld4cGJXbDBaWElnUFNBbk95YzdYSEpjYmx4eVhHNWNjbHh1THk4Z1UzQnNhWFFnWVNCbWFXeGxibUZ0WlNCcGJuUnZJRnR5YjI5MExDQmthWElzSUdKaGMyVnVZVzFsTENCbGVIUmRMQ0IxYm1sNElIWmxjbk5wYjI1Y2NseHVMeThnSjNKdmIzUW5JR2x6SUdwMWMzUWdZU0J6YkdGemFDd2diM0lnYm05MGFHbHVaeTVjY2x4dWRtRnlJSE53YkdsMFVHRjBhRkpsSUQxY2NseHVJQ0FnSUM5ZUtGeGNMejk4S1NoYlhGeHpYRnhUWFNvL0tTZ29QenBjWEM1N01Td3lmWHhiWGx4Y0wxMHJQM3dwS0Z4Y0xsdGVMbHhjTDEwcWZDa3BLRDg2VzF4Y0wxMHFLU1F2TzF4eVhHNTJZWElnY0c5emFYZ2dQU0I3ZlR0Y2NseHVYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQndiM05wZUZOd2JHbDBVR0YwYUNobWFXeGxibUZ0WlNrZ2UxeHlYRzRnSUhKbGRIVnliaUJ6Y0d4cGRGQmhkR2hTWlM1bGVHVmpLR1pwYkdWdVlXMWxLUzV6YkdsalpTZ3hLVHRjY2x4dWZWeHlYRzVjY2x4dVhISmNiaTh2SUhCaGRHZ3VjbVZ6YjJ4MlpTaGJabkp2YlNBdUxpNWRMQ0IwYnlsY2NseHVMeThnY0c5emFYZ2dkbVZ5YzJsdmJseHlYRzV3YjNOcGVDNXlaWE52YkhabElEMGdablZ1WTNScGIyNG9LU0I3WEhKY2JpQWdkbUZ5SUhKbGMyOXNkbVZrVUdGMGFDQTlJQ2NuTEZ4eVhHNGdJQ0FnSUNCeVpYTnZiSFpsWkVGaWMyOXNkWFJsSUQwZ1ptRnNjMlU3WEhKY2JseHlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lDMGdNVHNnYVNBK1BTQXRNU0FtSmlBaGNtVnpiMngyWldSQlluTnZiSFYwWlRzZ2FTMHRLU0I3WEhKY2JpQWdJQ0IyWVhJZ2NHRjBhQ0E5SUNocElENDlJREFwSUQ4Z1lYSm5kVzFsYm5SelcybGRJRG9nY0hKdlkyVnpjeTVqZDJRb0tUdGNjbHh1WEhKY2JpQWdJQ0F2THlCVGEybHdJR1Z0Y0hSNUlHRnVaQ0JwYm5aaGJHbGtJR1Z1ZEhKcFpYTmNjbHh1SUNBZ0lHbG1JQ2doZFhScGJDNXBjMU4wY21sdVp5aHdZWFJvS1NrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RCY21kMWJXVnVkSE1nZEc4Z2NHRjBhQzV5WlhOdmJIWmxJRzExYzNRZ1ltVWdjM1J5YVc1bmN5Y3BPMXh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doY0dGMGFDa2dlMXh5WEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpYTnZiSFpsWkZCaGRHZ2dQU0J3WVhSb0lDc2dKeThuSUNzZ2NtVnpiMngyWldSUVlYUm9PMXh5WEc0Z0lDQWdjbVZ6YjJ4MlpXUkJZbk52YkhWMFpTQTlJSEJoZEdoYk1GMGdQVDA5SUNjdkp6dGNjbHh1SUNCOVhISmNibHh5WEc0Z0lDOHZJRUYwSUhSb2FYTWdjRzlwYm5RZ2RHaGxJSEJoZEdnZ2MyaHZkV3hrSUdKbElISmxjMjlzZG1Wa0lIUnZJR0VnWm5Wc2JDQmhZbk52YkhWMFpTQndZWFJvTENCaWRYUmNjbHh1SUNBdkx5Qm9ZVzVrYkdVZ2NtVnNZWFJwZG1VZ2NHRjBhSE1nZEc4Z1ltVWdjMkZtWlNBb2JXbG5hSFFnYUdGd2NHVnVJSGRvWlc0Z2NISnZZMlZ6Y3k1amQyUW9LU0JtWVdsc2N5bGNjbHh1WEhKY2JpQWdMeThnVG05eWJXRnNhWHBsSUhSb1pTQndZWFJvWEhKY2JpQWdjbVZ6YjJ4MlpXUlFZWFJvSUQwZ2JtOXliV0ZzYVhwbFFYSnlZWGtvY21WemIyeDJaV1JRWVhSb0xuTndiR2wwS0Njdkp5a3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJWEpsYzI5c2RtVmtRV0p6YjJ4MWRHVXBMbXB2YVc0b0p5OG5LVHRjY2x4dVhISmNiaUFnY21WMGRYSnVJQ2dvY21WemIyeDJaV1JCWW5OdmJIVjBaU0EvSUNjdkp5QTZJQ2NuS1NBcklISmxjMjlzZG1Wa1VHRjBhQ2tnZkh3Z0p5NG5PMXh5WEc1OU8xeHlYRzVjY2x4dUx5OGdjR0YwYUM1dWIzSnRZV3hwZW1Vb2NHRjBhQ2xjY2x4dUx5OGdjRzl6YVhnZ2RtVnljMmx2Ymx4eVhHNXdiM05wZUM1dWIzSnRZV3hwZW1VZ1BTQm1kVzVqZEdsdmJpaHdZWFJvS1NCN1hISmNiaUFnZG1GeUlHbHpRV0p6YjJ4MWRHVWdQU0J3YjNOcGVDNXBjMEZpYzI5c2RYUmxLSEJoZEdncExGeHlYRzRnSUNBZ0lDQjBjbUZwYkdsdVoxTnNZWE5vSUQwZ2NHRjBhQ0FtSmlCd1lYUm9XM0JoZEdndWJHVnVaM1JvSUMwZ01WMGdQVDA5SUNjdkp6dGNjbHh1WEhKY2JpQWdMeThnVG05eWJXRnNhWHBsSUhSb1pTQndZWFJvWEhKY2JpQWdjR0YwYUNBOUlHNXZjbTFoYkdsNlpVRnljbUY1S0hCaGRHZ3VjM0JzYVhRb0p5OG5LU3dnSVdselFXSnpiMngxZEdVcExtcHZhVzRvSnk4bktUdGNjbHh1WEhKY2JpQWdhV1lnS0NGd1lYUm9JQ1ltSUNGcGMwRmljMjlzZFhSbEtTQjdYSEpjYmlBZ0lDQndZWFJvSUQwZ0p5NG5PMXh5WEc0Z0lIMWNjbHh1SUNCcFppQW9jR0YwYUNBbUppQjBjbUZwYkdsdVoxTnNZWE5vS1NCN1hISmNiaUFnSUNCd1lYUm9JQ3M5SUNjdkp6dGNjbHh1SUNCOVhISmNibHh5WEc0Z0lISmxkSFZ5YmlBb2FYTkJZbk52YkhWMFpTQS9JQ2N2SnlBNklDY25LU0FySUhCaGRHZzdYSEpjYm4wN1hISmNibHh5WEc0dkx5QndiM05wZUNCMlpYSnphVzl1WEhKY2JuQnZjMmw0TG1selFXSnpiMngxZEdVZ1BTQm1kVzVqZEdsdmJpaHdZWFJvS1NCN1hISmNiaUFnY21WMGRYSnVJSEJoZEdndVkyaGhja0YwS0RBcElEMDlQU0FuTHljN1hISmNibjA3WEhKY2JseHlYRzR2THlCd2IzTnBlQ0IyWlhKemFXOXVYSEpjYm5CdmMybDRMbXB2YVc0Z1BTQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQjJZWElnY0dGMGFDQTlJQ2NuTzF4eVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQjJZWElnYzJWbmJXVnVkQ0E5SUdGeVozVnRaVzUwYzF0cFhUdGNjbHh1SUNBZ0lHbG1JQ2doZFhScGJDNXBjMU4wY21sdVp5aHpaV2R0Wlc1MEtTa2dlMXh5WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkQmNtZDFiV1Z1ZEhNZ2RHOGdjR0YwYUM1cWIybHVJRzExYzNRZ1ltVWdjM1J5YVc1bmN5Y3BPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdhV1lnS0hObFoyMWxiblFwSUh0Y2NseHVJQ0FnSUNBZ2FXWWdLQ0Z3WVhSb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnY0dGMGFDQXJQU0J6WldkdFpXNTBPMXh5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUhCaGRHZ2dLejBnSnk4bklDc2djMlZuYldWdWREdGNjbHh1SUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc0Z0lIMWNjbHh1SUNCeVpYUjFjbTRnY0c5emFYZ3VibTl5YldGc2FYcGxLSEJoZEdncE8xeHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JpOHZJSEJoZEdndWNtVnNZWFJwZG1Vb1puSnZiU3dnZEc4cFhISmNiaTh2SUhCdmMybDRJSFpsY25OcGIyNWNjbHh1Y0c5emFYZ3VjbVZzWVhScGRtVWdQU0JtZFc1amRHbHZiaWhtY205dExDQjBieWtnZTF4eVhHNGdJR1p5YjIwZ1BTQndiM05wZUM1eVpYTnZiSFpsS0daeWIyMHBMbk4xWW5OMGNpZ3hLVHRjY2x4dUlDQjBieUE5SUhCdmMybDRMbkpsYzI5c2RtVW9kRzhwTG5OMVluTjBjaWd4S1R0Y2NseHVYSEpjYmlBZ2RtRnlJR1p5YjIxUVlYSjBjeUE5SUhSeWFXMUJjbkpoZVNobWNtOXRMbk53YkdsMEtDY3ZKeWtwTzF4eVhHNGdJSFpoY2lCMGIxQmhjblJ6SUQwZ2RISnBiVUZ5Y21GNUtIUnZMbk53YkdsMEtDY3ZKeWtwTzF4eVhHNWNjbHh1SUNCMllYSWdiR1Z1WjNSb0lEMGdUV0YwYUM1dGFXNG9abkp2YlZCaGNuUnpMbXhsYm1kMGFDd2dkRzlRWVhKMGN5NXNaVzVuZEdncE8xeHlYRzRnSUhaaGNpQnpZVzFsVUdGeWRITk1aVzVuZEdnZ1BTQnNaVzVuZEdnN1hISmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdhV1lnS0daeWIyMVFZWEowYzF0cFhTQWhQVDBnZEc5UVlYSjBjMXRwWFNrZ2UxeHlYRzRnSUNBZ0lDQnpZVzFsVUdGeWRITk1aVzVuZEdnZ1BTQnBPMXh5WEc0Z0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNBZ0lIMWNjbHh1SUNCOVhISmNibHh5WEc0Z0lIWmhjaUJ2ZFhSd2RYUlFZWEowY3lBOUlGdGRPMXh5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0J6WVcxbFVHRnlkSE5NWlc1bmRHZzdJR2tnUENCbWNtOXRVR0Z5ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjY2x4dUlDQWdJRzkxZEhCMWRGQmhjblJ6TG5CMWMyZ29KeTR1SnlrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCdmRYUndkWFJRWVhKMGN5QTlJRzkxZEhCMWRGQmhjblJ6TG1OdmJtTmhkQ2gwYjFCaGNuUnpMbk5zYVdObEtITmhiV1ZRWVhKMGMweGxibWQwYUNrcE8xeHlYRzVjY2x4dUlDQnlaWFIxY200Z2IzVjBjSFYwVUdGeWRITXVhbTlwYmlnbkx5Y3BPMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibkJ2YzJsNExsOXRZV3RsVEc5dVp5QTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNjbHh1SUNCeVpYUjFjbTRnY0dGMGFEdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNXdiM05wZUM1a2FYSnVZVzFsSUQwZ1puVnVZM1JwYjI0b2NHRjBhQ2tnZTF4eVhHNGdJSFpoY2lCeVpYTjFiSFFnUFNCd2IzTnBlRk53YkdsMFVHRjBhQ2h3WVhSb0tTeGNjbHh1SUNBZ0lDQWdjbTl2ZENBOUlISmxjM1ZzZEZzd1hTeGNjbHh1SUNBZ0lDQWdaR2x5SUQwZ2NtVnpkV3gwV3pGZE8xeHlYRzVjY2x4dUlDQnBaaUFvSVhKdmIzUWdKaVlnSVdScGNpa2dlMXh5WEc0Z0lDQWdMeThnVG04Z1pHbHlibUZ0WlNCM2FHRjBjMjlsZG1WeVhISmNiaUFnSUNCeVpYUjFjbTRnSnk0bk8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2FXWWdLR1JwY2lrZ2UxeHlYRzRnSUNBZ0x5OGdTWFFnYUdGeklHRWdaR2x5Ym1GdFpTd2djM1J5YVhBZ2RISmhhV3hwYm1jZ2MyeGhjMmhjY2x4dUlDQWdJR1JwY2lBOUlHUnBjaTV6ZFdKemRISW9NQ3dnWkdseUxteGxibWQwYUNBdElERXBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjbVYwZFhKdUlISnZiM1FnS3lCa2FYSTdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVjRzl6YVhndVltRnpaVzVoYldVZ1BTQm1kVzVqZEdsdmJpaHdZWFJvTENCbGVIUXBJSHRjY2x4dUlDQjJZWElnWmlBOUlIQnZjMmw0VTNCc2FYUlFZWFJvS0hCaGRHZ3BXekpkTzF4eVhHNGdJQzh2SUZSUFJFODZJRzFoYTJVZ2RHaHBjeUJqYjIxd1lYSnBjMjl1SUdOaGMyVXRhVzV6Wlc1emFYUnBkbVVnYjI0Z2QybHVaRzkzY3o5Y2NseHVJQ0JwWmlBb1pYaDBJQ1ltSUdZdWMzVmljM1J5S0MweElDb2daWGgwTG14bGJtZDBhQ2tnUFQwOUlHVjRkQ2tnZTF4eVhHNGdJQ0FnWmlBOUlHWXVjM1ZpYzNSeUtEQXNJR1l1YkdWdVozUm9JQzBnWlhoMExteGxibWQwYUNrN1hISmNiaUFnZlZ4eVhHNGdJSEpsZEhWeWJpQm1PMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibkJ2YzJsNExtVjRkRzVoYldVZ1BTQm1kVzVqZEdsdmJpaHdZWFJvS1NCN1hISmNiaUFnY21WMGRYSnVJSEJ2YzJsNFUzQnNhWFJRWVhSb0tIQmhkR2dwV3pOZE8xeHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JuQnZjMmw0TG1admNtMWhkQ0E5SUdaMWJtTjBhVzl1S0hCaGRHaFBZbXBsWTNRcElIdGNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlBZbXBsWTNRb2NHRjBhRTlpYW1WamRDa3BJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1hDSlFZWEpoYldWMFpYSWdKM0JoZEdoUFltcGxZM1FuSUcxMWMzUWdZbVVnWVc0Z2IySnFaV04wTENCdWIzUWdYQ0lnS3lCMGVYQmxiMllnY0dGMGFFOWlhbVZqZEZ4eVhHNGdJQ0FnS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhaaGNpQnliMjkwSUQwZ2NHRjBhRTlpYW1WamRDNXliMjkwSUh4OElDY25PMXh5WEc1Y2NseHVJQ0JwWmlBb0lYVjBhV3d1YVhOVGRISnBibWNvY205dmRDa3BJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1hDSW5jR0YwYUU5aWFtVmpkQzV5YjI5MEp5QnRkWE4wSUdKbElHRWdjM1J5YVc1bklHOXlJSFZ1WkdWbWFXNWxaQ3dnYm05MElGd2lJQ3RjY2x4dUlDQWdJQ0FnSUNCMGVYQmxiMllnY0dGMGFFOWlhbVZqZEM1eWIyOTBYSEpjYmlBZ0lDQXBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdkbUZ5SUdScGNpQTlJSEJoZEdoUFltcGxZM1F1WkdseUlEOGdjR0YwYUU5aWFtVmpkQzVrYVhJZ0t5QndiM05wZUM1elpYQWdPaUFuSnp0Y2NseHVJQ0IyWVhJZ1ltRnpaU0E5SUhCaGRHaFBZbXBsWTNRdVltRnpaU0I4ZkNBbkp6dGNjbHh1SUNCeVpYUjFjbTRnWkdseUlDc2dZbUZ6WlR0Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1d2IzTnBlQzV3WVhKelpTQTlJR1oxYm1OMGFXOXVLSEJoZEdoVGRISnBibWNwSUh0Y2NseHVJQ0JwWmlBb0lYVjBhV3d1YVhOVGRISnBibWNvY0dGMGFGTjBjbWx1WnlrcElIdGNjbHh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YSEpjYmlBZ0lDQWdJQ0FnWENKUVlYSmhiV1YwWlhJZ0ozQmhkR2hUZEhKcGJtY25JRzExYzNRZ1ltVWdZU0J6ZEhKcGJtY3NJRzV2ZENCY0lpQXJJSFI1Y0dWdlppQndZWFJvVTNSeWFXNW5YSEpjYmlBZ0lDQXBPMXh5WEc0Z0lIMWNjbHh1SUNCMllYSWdZV3hzVUdGeWRITWdQU0J3YjNOcGVGTndiR2wwVUdGMGFDaHdZWFJvVTNSeWFXNW5LVHRjY2x4dUlDQnBaaUFvSVdGc2JGQmhjblJ6SUh4OElHRnNiRkJoY25SekxteGxibWQwYUNBaFBUMGdOQ2tnZTF4eVhHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lrbHVkbUZzYVdRZ2NHRjBhQ0FuWENJZ0t5QndZWFJvVTNSeWFXNW5JQ3NnWENJblhDSXBPMXh5WEc0Z0lIMWNjbHh1SUNCaGJHeFFZWEowYzFzeFhTQTlJR0ZzYkZCaGNuUnpXekZkSUh4OElDY25PMXh5WEc0Z0lHRnNiRkJoY25Seld6SmRJRDBnWVd4c1VHRnlkSE5iTWwwZ2ZId2dKeWM3WEhKY2JpQWdZV3hzVUdGeWRITmJNMTBnUFNCaGJHeFFZWEowYzFzelhTQjhmQ0FuSnp0Y2NseHVYSEpjYmlBZ2NtVjBkWEp1SUh0Y2NseHVJQ0FnSUhKdmIzUTZJR0ZzYkZCaGNuUnpXekJkTEZ4eVhHNGdJQ0FnWkdseU9pQmhiR3hRWVhKMGMxc3dYU0FySUdGc2JGQmhjblJ6V3pGZExuTnNhV05sS0RBc0lDMHhLU3hjY2x4dUlDQWdJR0poYzJVNklHRnNiRkJoY25Seld6SmRMRnh5WEc0Z0lDQWdaWGgwT2lCaGJHeFFZWEowYzFzelhTeGNjbHh1SUNBZ0lHNWhiV1U2SUdGc2JGQmhjblJ6V3pKZExuTnNhV05sS0RBc0lHRnNiRkJoY25Seld6SmRMbXhsYm1kMGFDQXRJR0ZzYkZCaGNuUnpXek5kTG14bGJtZDBhQ2xjY2x4dUlDQjlPMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibkJ2YzJsNExuTmxjQ0E5SUNjdkp6dGNjbHh1Y0c5emFYZ3VaR1ZzYVcxcGRHVnlJRDBnSnpvbk8xeHlYRzVjY2x4dVhISmNibWxtSUNocGMxZHBibVJ2ZDNNcFhISmNiaUFnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0IzYVc0ek1qdGNjbHh1Wld4elpTQXZLaUJ3YjNOcGVDQXFMMXh5WEc0Z0lHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NHOXphWGc3WEhKY2JseHlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5NXdiM05wZUNBOUlIQnZjMmw0TzF4eVhHNXRiMlIxYkdVdVpYaHdiM0owY3k1M2FXNHpNaUE5SUhkcGJqTXlPMXh5WEc1Y2JseHVYRzR2THk4dkx5OHZMeTh2THk4dkx5OHZMeTljYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0dkx5QXVMMzR2Y0dGMGFDOXdZWFJvTG1welhHNHZMeUJ0YjJSMWJHVWdhV1FnUFNBeFhHNHZMeUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNQ0lzSW1WNGNHOXlkQ0FxSUdaeWIyMGdKeTR2Y0dGMGFDYzdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2YVc1a1pYZ3VkSE1pTENKbGVIQnZjblFnWTI5dWMzUWdibTl2Y0NBOUlDaG1jbTl0T2lCemRISnBibWNzSUhSdk9pQnpkSEpwYm1jcE9pQnpkSEpwYm1jZ1BUNGdlMXh1SUNCMGFISnZkeUJGY25KdmNpZ25iV1YwYUc5a0lIVnVjM1Z3Y0c5eWRHVmtJR2x1SUdsemIyMXZjbkJvYVdNdGNHRjBhQ2NwTzF4dWZUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTl1YjI5d0xuUnpJaXdpWlhod2IzSjBJR052Ym5OMElHbHpUV0ZqSUQwZ0tDazZJR0p2YjJ4bFlXNGdQVDRnZTF4dUlDQnBaaUFvY0hKdlkyVnpjMXh1SUNBbUppQjBlWEJsYjJZZ2NISnZZMlZ6Y3k1d2JHRjBabTl5YlNBOVBUMGdKM04wY21sdVp5ZGNiaUFnSmlZZ2NISnZZMlZ6Y3k1d2JHRjBabTl5YlM1MGIweHZkMlZ5UTJGelpTZ3BJRDA5UFNBblpHRnlkMmx1SnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0hSNWNHVnZaaUJ1WVhacFoyRjBiM0lnSVQwOUlDZDFibVJsWm1sdVpXUW5YRzRnSUNZbUlIUjVjR1Z2WmlCdVlYWnBaMkYwYjNJdWNHeGhkR1p2Y20wZ1BUMDlJQ2R6ZEhKcGJtY25YRzRnSUNZbUlHNWhkbWxuWVhSdmNpNXdiR0YwWm05eWJTNTBiMHh2ZDJWeVEyRnpaU2dwTG1sdVpHVjRUMllvSjIxaFl5Y3BJRDRnTFRFcElIdGNiaUFnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzFkcGJpQTlJQ2dwT2lCaWIyOXNaV0Z1SUQwK0lIdGNiaUFnYVdZZ0tIQnliMk5sYzNOY2JpQWdKaVlnZEhsd1pXOW1JSEJ5YjJObGMzTXVjR3hoZEdadmNtMGdQVDA5SUNkemRISnBibWNuWEc0Z0lDWW1JSEJ5YjJObGMzTXVjR3hoZEdadmNtMHVkRzlNYjNkbGNrTmhjMlVvS1NBOVBUMGdKM2RwYmpNeUp5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCdVlYWnBaMkYwYjNJZ0lUMDlJQ2QxYm1SbFptbHVaV1FuWEc0Z0lDQWdKaVlnZEhsd1pXOW1JRzVoZG1sbllYUnZjaTV3YkdGMFptOXliU0E5UFQwZ0ozTjBjbWx1WnlkY2JpQWdJQ0FtSmlCdVlYWnBaMkYwYjNJdWNHeGhkR1p2Y20wdWRHOU1iM2RsY2tOaGMyVW9LUzVwYm1SbGVFOW1LQ2QzYVc0bktTQStJQzB4S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5DY205M2MyVnlJRDBnS0NrNklHSnZiMnhsWVc0Z1BUNGdlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnSjNWdVpHVm1hVzVsWkNjN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5PYjJSbElEMGdLQ2s2SUdKdmIyeGxZVzRnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIZHBibVJ2ZHlBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2RIbHdaVzltSUhCeWIyTmxjM01nSVQwOUlDZDFibVJsWm1sdVpXUW5PMXh1ZlR0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOXdiR0YwWm05eWJTNTBjeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2hjSW5WMGFXeGNJaWs3WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z1pYaDBaWEp1WVd3Z1hDSjFkR2xzWENKY2JpOHZJRzF2WkhWc1pTQnBaQ0E5SURWY2JpOHZJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L2lzb21vcnBoaWMtcGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcclxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XHJcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxyXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcclxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcclxuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXHJcbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxyXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1JcclxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxyXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcclxuXHJcblxyXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcclxuLy8gbXVzdCBiZSBubyBzbGFzaGVzIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XHJcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxyXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xyXG4gIHZhciByZXMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcCA9IHBhcnRzW2ldO1xyXG5cclxuICAgIC8vIGlnbm9yZSBlbXB0eSBwYXJ0c1xyXG4gICAgaWYgKCFwIHx8IHAgPT09ICcuJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgaWYgKHAgPT09ICcuLicpIHtcclxuICAgICAgaWYgKHJlcy5sZW5ndGggJiYgcmVzW3Jlcy5sZW5ndGggLSAxXSAhPT0gJy4uJykge1xyXG4gICAgICAgIHJlcy5wb3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xyXG4gICAgICAgIHJlcy5wdXNoKCcuLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMucHVzaChwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8vIHJldHVybnMgYW4gYXJyYXkgd2l0aCBlbXB0eSBlbGVtZW50cyByZW1vdmVkIGZyb20gZWl0aGVyIGVuZCBvZiB0aGUgaW5wdXRcclxuLy8gYXJyYXkgb3IgdGhlIG9yaWdpbmFsIGFycmF5IGlmIG5vIGVsZW1lbnRzIG5lZWQgdG8gYmUgcmVtb3ZlZFxyXG5mdW5jdGlvbiB0cmltQXJyYXkoYXJyKSB7XHJcbiAgdmFyIGxhc3RJbmRleCA9IGFyci5sZW5ndGggLSAxO1xyXG4gIHZhciBzdGFydCA9IDA7XHJcbiAgZm9yICg7IHN0YXJ0IDw9IGxhc3RJbmRleDsgc3RhcnQrKykge1xyXG4gICAgaWYgKGFycltzdGFydF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVuZCA9IGxhc3RJbmRleDtcclxuICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XHJcbiAgICBpZiAoYXJyW2VuZF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gbGFzdEluZGV4KVxyXG4gICAgcmV0dXJuIGFycjtcclxuICBpZiAoc3RhcnQgPiBlbmQpXHJcbiAgICByZXR1cm4gW107XHJcbiAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kICsgMSk7XHJcbn1cclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IGEgd2luZG93cyBwYXRoIGludG8gdGhyZWUgcGFydHM6IFsqLCBkZXZpY2UsIHNsYXNoLFxyXG4vLyB0YWlsXSB3aW5kb3dzLW9ubHlcclxudmFyIHNwbGl0RGV2aWNlUmUgPVxyXG4gICAgL14oW2EtekEtWl06fFtcXFxcXFwvXXsyfVteXFxcXFxcL10rW1xcXFxcXC9dK1teXFxcXFxcL10rKT8oW1xcXFxcXC9dKT8oW1xcc1xcU10qPykkLztcclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IHRoZSB0YWlsIHBhcnQgb2YgdGhlIGFib3ZlIGludG8gWyosIGRpciwgYmFzZW5hbWUsIGV4dF1cclxudmFyIHNwbGl0VGFpbFJlID1cclxuICAgIC9eKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKSg/OltcXFxcXFwvXSopJC87XHJcblxyXG52YXIgd2luMzIgPSB7fTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XVxyXG5mdW5jdGlvbiB3aW4zMlNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIC8vIFNlcGFyYXRlIGRldmljZStzbGFzaCBmcm9tIHRhaWxcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKGZpbGVuYW1lKSxcclxuICAgICAgZGV2aWNlID0gKHJlc3VsdFsxXSB8fCAnJykgKyAocmVzdWx0WzJdIHx8ICcnKSxcclxuICAgICAgdGFpbCA9IHJlc3VsdFszXSB8fCAnJztcclxuICAvLyBTcGxpdCB0aGUgdGFpbCBpbnRvIGRpciwgYmFzZW5hbWUgYW5kIGV4dGVuc2lvblxyXG4gIHZhciByZXN1bHQyID0gc3BsaXRUYWlsUmUuZXhlYyh0YWlsKSxcclxuICAgICAgZGlyID0gcmVzdWx0MlsxXSxcclxuICAgICAgYmFzZW5hbWUgPSByZXN1bHQyWzJdLFxyXG4gICAgICBleHQgPSByZXN1bHQyWzNdO1xyXG4gIHJldHVybiBbZGV2aWNlLCBkaXIsIGJhc2VuYW1lLCBleHRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW4zMlN0YXRQYXRoKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKHBhdGgpLFxyXG4gICAgICBkZXZpY2UgPSByZXN1bHRbMV0gfHwgJycsXHJcbiAgICAgIGlzVW5jID0gISFkZXZpY2UgJiYgZGV2aWNlWzFdICE9PSAnOic7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRldmljZTogZGV2aWNlLFxyXG4gICAgaXNVbmM6IGlzVW5jLFxyXG4gICAgaXNBYnNvbHV0ZTogaXNVbmMgfHwgISFyZXN1bHRbMl0sIC8vIFVOQyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlXHJcbiAgICB0YWlsOiByZXN1bHRbM11cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVVTkNSb290KGRldmljZSkge1xyXG4gIHJldHVybiAnXFxcXFxcXFwnICsgZGV2aWNlLnJlcGxhY2UoL15bXFxcXFxcL10rLywgJycpLnJlcGxhY2UoL1tcXFxcXFwvXSsvZywgJ1xcXFwnKTtcclxufVxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG53aW4zMi5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkRGV2aWNlID0gJycsXHJcbiAgICAgIHJlc29sdmVkVGFpbCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aDtcclxuICAgIGlmIChpID49IDApIHtcclxuICAgICAgcGF0aCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHBhdGggPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gV2luZG93cyBoYXMgdGhlIGNvbmNlcHQgb2YgZHJpdmUtc3BlY2lmaWMgY3VycmVudCB3b3JraW5nXHJcbiAgICAgIC8vIGRpcmVjdG9yaWVzLiBJZiB3ZSd2ZSByZXNvbHZlZCBhIGRyaXZlIGxldHRlciBidXQgbm90IHlldCBhblxyXG4gICAgICAvLyBhYnNvbHV0ZSBwYXRoLCBnZXQgY3dkIGZvciB0aGF0IGRyaXZlLiBXZSdyZSBzdXJlIHRoZSBkZXZpY2UgaXMgbm90XHJcbiAgICAgIC8vIGFuIHVuYyBwYXRoIGF0IHRoaXMgcG9pbnRzLCBiZWNhdXNlIHVuYyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlLlxyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5lbnZbJz0nICsgcmVzb2x2ZWREZXZpY2VdO1xyXG4gICAgICAvLyBWZXJpZnkgdGhhdCBhIGRyaXZlLWxvY2FsIGN3ZCB3YXMgZm91bmQgYW5kIHRoYXQgaXQgYWN0dWFsbHkgcG9pbnRzXHJcbiAgICAgIC8vIHRvIG91ciBkcml2ZS4gSWYgbm90LCBkZWZhdWx0IHRvIHRoZSBkcml2ZSdzIHJvb3QuXHJcbiAgICAgIGlmICghcGF0aCB8fCBwYXRoLnN1YnN0cigwLCAzKS50b0xvd2VyQ2FzZSgpICE9PVxyXG4gICAgICAgICAgcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSArICdcXFxcJykge1xyXG4gICAgICAgIHBhdGggPSByZXNvbHZlZERldmljZSArICdcXFxcJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXN1bHQgPSB3aW4zMlN0YXRQYXRoKHBhdGgpLFxyXG4gICAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgICAgaXNBYnNvbHV0ZSA9IHJlc3VsdC5pc0Fic29sdXRlLFxyXG4gICAgICAgIHRhaWwgPSByZXN1bHQudGFpbDtcclxuXHJcbiAgICBpZiAoZGV2aWNlICYmXHJcbiAgICAgICAgcmVzb2x2ZWREZXZpY2UgJiZcclxuICAgICAgICBkZXZpY2UudG9Mb3dlckNhc2UoKSAhPT0gcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAvLyBUaGlzIHBhdGggcG9pbnRzIHRvIGFub3RoZXIgZGV2aWNlIHNvIGl0IGlzIG5vdCBhcHBsaWNhYmxlXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzb2x2ZWREZXZpY2UpIHtcclxuICAgICAgcmVzb2x2ZWREZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgcmVzb2x2ZWRUYWlsID0gdGFpbCArICdcXFxcJyArIHJlc29sdmVkVGFpbDtcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGlzQWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc29sdmVkRGV2aWNlICYmIHJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgcmVzb2x2ZWREZXZpY2VgIHBvaW50cyB0byBhbiBVTkNcclxuICAvLyByb290LiBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgcmVzb2x2ZWREZXZpY2UgPSBub3JtYWxpemVVTkNSb290KHJlc29sdmVkRGV2aWNlKTtcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLFxyXG4gIC8vIGJ1dCBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKVxyXG4gIC8vIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHJlc29sdmVkVGFpbCA9IG5vcm1hbGl6ZUFycmF5KHJlc29sdmVkVGFpbC5zcGxpdCgvW1xcXFxcXC9dKy8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIHJldHVybiAocmVzb2x2ZWREZXZpY2UgKyAocmVzb2x2ZWRBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHJlc29sdmVkVGFpbCkgfHxcclxuICAgICAgICAgJy4nO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0LmRldmljZSxcclxuICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgdGFpbCA9IHJlc3VsdC50YWlsLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gL1tcXFxcXFwvXSQvLnRlc3QodGFpbCk7XHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgdGFpbCBwYXRoXHJcbiAgdGFpbCA9IG5vcm1hbGl6ZUFycmF5KHRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSwgIWlzQWJzb2x1dGUpLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgaWYgKCF0YWlsICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICB0YWlsID0gJy4nO1xyXG4gIH1cclxuICBpZiAodGFpbCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICB0YWlsICs9ICdcXFxcJztcclxuICB9XHJcblxyXG4gIC8vIENvbnZlcnQgc2xhc2hlcyB0byBiYWNrc2xhc2hlcyB3aGVuIGBkZXZpY2VgIHBvaW50cyB0byBhbiBVTkMgcm9vdC5cclxuICAvLyBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgZGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRldmljZSArIChpc0Fic29sdXRlID8gJ1xcXFwnIDogJycpICsgdGFpbDtcclxufTtcclxuXHJcblxyXG53aW4zMi5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlN0YXRQYXRoKHBhdGgpLmlzQWJzb2x1dGU7XHJcbn07XHJcblxyXG53aW4zMi5qb2luID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHBhdGhzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcoYXJnKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZykge1xyXG4gICAgICBwYXRocy5wdXNoKGFyZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgam9pbmVkID0gcGF0aHMuam9pbignXFxcXCcpO1xyXG5cclxuICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgam9pbmVkIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIHR3byBzbGFzaGVzLCBiZWNhdXNlXHJcbiAgLy8gbm9ybWFsaXplKCkgd2lsbCBtaXN0YWtlIGl0IGZvciBhbiBVTkMgcGF0aCB0aGVuLlxyXG4gIC8vXHJcbiAgLy8gVGhpcyBzdGVwIGlzIHNraXBwZWQgd2hlbiBpdCBpcyB2ZXJ5IGNsZWFyIHRoYXQgdGhlIHVzZXIgYWN0dWFsbHlcclxuICAvLyBpbnRlbmRlZCB0byBwb2ludCBhdCBhbiBVTkMgcGF0aC4gVGhpcyBpcyBhc3N1bWVkIHdoZW4gdGhlIGZpcnN0XHJcbiAgLy8gbm9uLWVtcHR5IHN0cmluZyBhcmd1bWVudHMgc3RhcnRzIHdpdGggZXhhY3RseSB0d28gc2xhc2hlcyBmb2xsb3dlZCBieVxyXG4gIC8vIGF0IGxlYXN0IG9uZSBtb3JlIG5vbi1zbGFzaCBjaGFyYWN0ZXIuXHJcbiAgLy9cclxuICAvLyBOb3RlIHRoYXQgZm9yIG5vcm1hbGl6ZSgpIHRvIHRyZWF0IGEgcGF0aCBhcyBhbiBVTkMgcGF0aCBpdCBuZWVkcyB0b1xyXG4gIC8vIGhhdmUgYXQgbGVhc3QgMiBjb21wb25lbnRzLCBzbyB3ZSBkb24ndCBmaWx0ZXIgZm9yIHRoYXQgaGVyZS5cclxuICAvLyBUaGlzIG1lYW5zIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSBqb2luIHRvIGNvbnN0cnVjdCBVTkMgcGF0aHMgZnJvbVxyXG4gIC8vIGEgc2VydmVyIG5hbWUgYW5kIGEgc2hhcmUgbmFtZTsgZm9yIGV4YW1wbGU6XHJcbiAgLy8gICBwYXRoLmpvaW4oJy8vc2VydmVyJywgJ3NoYXJlJykgLT4gJ1xcXFxcXFxcc2VydmVyXFxcXHNoYXJlXFwnKVxyXG4gIGlmICghL15bXFxcXFxcL117Mn1bXlxcXFxcXC9dLy50ZXN0KHBhdGhzWzBdKSkge1xyXG4gICAgam9pbmVkID0gam9pbmVkLnJlcGxhY2UoL15bXFxcXFxcL117Mix9LywgJ1xcXFwnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aW4zMi5ub3JtYWxpemUoam9pbmVkKTtcclxufTtcclxuXHJcblxyXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxyXG4vLyBpdCB3aWxsIHNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoIGZyb20gJ2Zyb20nIHRvICd0bycsIGZvciBpbnN0YW5jZTpcclxuLy8gZnJvbSA9ICdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJ1xyXG4vLyB0byA9ICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJ1xyXG4vLyBUaGUgb3V0cHV0IG9mIHRoZSBmdW5jdGlvbiBzaG91bGQgYmU6ICcuLlxcXFwuLlxcXFxpbXBsXFxcXGJiYidcclxud2luMzIucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSB3aW4zMi5yZXNvbHZlKGZyb20pO1xyXG4gIHRvID0gd2luMzIucmVzb2x2ZSh0byk7XHJcblxyXG4gIC8vIHdpbmRvd3MgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlXHJcbiAgdmFyIGxvd2VyRnJvbSA9IGZyb20udG9Mb3dlckNhc2UoKTtcclxuICB2YXIgbG93ZXJUbyA9IHRvLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCdcXFxcJykpO1xyXG5cclxuICB2YXIgbG93ZXJGcm9tUGFydHMgPSB0cmltQXJyYXkobG93ZXJGcm9tLnNwbGl0KCdcXFxcJykpO1xyXG4gIHZhciBsb3dlclRvUGFydHMgPSB0cmltQXJyYXkobG93ZXJUby5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGxvd2VyRnJvbVBhcnRzLmxlbmd0aCwgbG93ZXJUb1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobG93ZXJGcm9tUGFydHNbaV0gIT09IGxvd2VyVG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChzYW1lUGFydHNMZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIHRvO1xyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGxvd2VyRnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xyXG4gIH1cclxuXHJcbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJ1xcXFwnKTtcclxufTtcclxuXHJcblxyXG53aW4zMi5fbWFrZUxvbmcgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgLy8gTm90ZTogdGhpcyB3aWxsICpwcm9iYWJseSogdGhyb3cgc29tZXdoZXJlLlxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSlcclxuICAgIHJldHVybiBwYXRoO1xyXG5cclxuICBpZiAoIXBhdGgpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHZhciByZXNvbHZlZFBhdGggPSB3aW4zMi5yZXNvbHZlKHBhdGgpO1xyXG5cclxuICBpZiAoL15bYS16QS1aXVxcOlxcXFwvLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBsb2NhbCBmaWxlc3lzdGVtIHBhdGgsIHdoaWNoIG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxyXG4gICAgLy8gdG8gbG9uZyBVTkMgcGF0aC5cclxuICAgIHJldHVybiAnXFxcXFxcXFw/XFxcXCcgKyByZXNvbHZlZFBhdGg7XHJcbiAgfSBlbHNlIGlmICgvXlxcXFxcXFxcW14/Ll0vLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBuZXR3b3JrIFVOQyBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFxVTkNcXFxcJyArIHJlc29sdmVkUGF0aC5zdWJzdHJpbmcoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG53aW4zMi5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSB3aW4zMlNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxud2luMzIuYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHdpbjMyU3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHdpbjMyU3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIGlmICghZGlyKSB7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9XHJcbiAgaWYgKGRpcltkaXIubGVuZ3RoIC0gMV0gPT09IHdpbjMyLnNlcCkge1xyXG4gICAgcmV0dXJuIGRpciArIGJhc2U7XHJcbiAgfVxyXG4gIHJldHVybiBkaXIgKyB3aW4zMi5zZXAgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICByb290OiBhbGxQYXJ0c1swXSxcclxuICAgIGRpcjogYWxsUGFydHNbMF0gKyBhbGxQYXJ0c1sxXS5zbGljZSgwLCAtMSksXHJcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcclxuICAgIGV4dDogYWxsUGFydHNbM10sXHJcbiAgICBuYW1lOiBhbGxQYXJ0c1syXS5zbGljZSgwLCBhbGxQYXJ0c1syXS5sZW5ndGggLSBhbGxQYXJ0c1szXS5sZW5ndGgpXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG53aW4zMi5zZXAgPSAnXFxcXCc7XHJcbndpbjMyLmRlbGltaXRlciA9ICc7JztcclxuXHJcblxyXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxyXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxyXG52YXIgc3BsaXRQYXRoUmUgPVxyXG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XHJcbnZhciBwb3NpeCA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LnJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcclxuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XHJcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aFswXSA9PT0gJy8nO1xyXG4gIH1cclxuXHJcbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxyXG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XHJcbn07XHJcblxyXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgaXNBYnNvbHV0ZSA9IHBvc2l4LmlzQWJzb2x1dGUocGF0aCksXHJcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBwYXRoICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkocGF0aC5zcGxpdCgnLycpLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcclxuICAgIHBhdGggPSAnLic7XHJcbiAgfVxyXG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcclxuICAgIHBhdGggKz0gJy8nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRoID0gJyc7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBzZWdtZW50ID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHNlZ21lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICBwYXRoICs9IHNlZ21lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0aCArPSAnLycgKyBzZWdtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwb3NpeC5ub3JtYWxpemUocGF0aCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XHJcbiAgZnJvbSA9IHBvc2l4LnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xyXG4gIHRvID0gcG9zaXgucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xyXG5cclxuICB2YXIgZnJvbVBhcnRzID0gdHJpbUFycmF5KGZyb20uc3BsaXQoJy8nKSk7XHJcbiAgdmFyIHRvUGFydHMgPSB0cmltQXJyYXkodG8uc3BsaXQoJy8nKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XHJcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XHJcbn07XHJcblxyXG5cclxucG9zaXguX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiBwYXRoO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmRpcm5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpLFxyXG4gICAgICByb290ID0gcmVzdWx0WzBdLFxyXG4gICAgICBkaXIgPSByZXN1bHRbMV07XHJcblxyXG4gIGlmICghcm9vdCAmJiAhZGlyKSB7XHJcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcclxuICAgIHJldHVybiAnLic7XHJcbiAgfVxyXG5cclxuICBpZiAoZGlyKSB7XHJcbiAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxyXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdCArIGRpcjtcclxufTtcclxuXHJcblxyXG5wb3NpeC5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xyXG4gIHZhciBmID0gcG9zaXhTcGxpdFBhdGgocGF0aClbMl07XHJcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xyXG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XHJcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIGY7XHJcbn07XHJcblxyXG5cclxucG9zaXguZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcG9zaXhTcGxpdFBhdGgocGF0aClbM107XHJcbn07XHJcblxyXG5cclxucG9zaXguZm9ybWF0ID0gZnVuY3Rpb24ocGF0aE9iamVjdCkge1xyXG4gIGlmICghdXRpbC5pc09iamVjdChwYXRoT2JqZWN0KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aE9iamVjdCcgbXVzdCBiZSBhbiBvYmplY3QsIG5vdCBcIiArIHR5cGVvZiBwYXRoT2JqZWN0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvb3QgPSBwYXRoT2JqZWN0LnJvb3QgfHwgJyc7XHJcblxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhyb290KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIidwYXRoT2JqZWN0LnJvb3QnIG11c3QgYmUgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBub3QgXCIgK1xyXG4gICAgICAgIHR5cGVvZiBwYXRoT2JqZWN0LnJvb3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGlyID0gcGF0aE9iamVjdC5kaXIgPyBwYXRoT2JqZWN0LmRpciArIHBvc2l4LnNlcCA6ICcnO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIHJldHVybiBkaXIgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIGFsbFBhcnRzWzFdID0gYWxsUGFydHNbMV0gfHwgJyc7XHJcbiAgYWxsUGFydHNbMl0gPSBhbGxQYXJ0c1syXSB8fCAnJztcclxuICBhbGxQYXJ0c1szXSA9IGFsbFBhcnRzWzNdIHx8ICcnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxucG9zaXguc2VwID0gJy8nO1xyXG5wb3NpeC5kZWxpbWl0ZXIgPSAnOic7XHJcblxyXG5cclxuaWYgKGlzV2luZG93cylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyO1xyXG5lbHNlIC8qIHBvc2l4ICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBwb3NpeDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXg7XHJcbm1vZHVsZS5leHBvcnRzLndpbjMyID0gd2luMzI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXRoL3BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IG5vb3AgPSAoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgdGhyb3cgRXJyb3IoJ21ldGhvZCB1bnN1cHBvcnRlZCBpbiBpc29tb3JwaGljLXBhdGgnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvbm9vcC50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcbmltcG9ydCB7IFBhdGhTcGVjIH0gZnJvbSAnLi9QYXRoLk5vZGUuc3BlYyc7XG5pbXBvcnQgeyBQbGF0Zm9ybVNwZWMgfSBmcm9tICcuL1BsYXRmb3JtLk5vZGUuc3BlYyc7XG5cbmNvbnN0IElzb21vcnBoaWNQYXRoVGVzdHMgPSBbXG4gIFBhdGhTcGVjLFxuICBQbGF0Zm9ybVNwZWMsXG5dO1xuY29uc3QgdGVzdCA9IG5ldyB0c1VuaXQuVGVzdChJc29tb3JwaGljUGF0aFRlc3RzKTtcbmNvbnN0IHJlc3VsdCA9IHRlc3QucnVuKCk7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnNvbGUubG9nKHJlc3VsdC5nZXRUYXBSZXN1bHRzKCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9SdW5uZXIuTm9kZS50cyIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RzVW5pdFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi90c1VuaXRBc3luY1wiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Uc1VuaXRNb2R1bGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzLXVuaXQvZGlzdC9zcmMvVHNVbml0TW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzVW5pdF8xID0gcmVxdWlyZShcIi4vdHNVbml0XCIpO1xudmFyIHRzVW5pdF8yID0gcmVxdWlyZShcIi4vdHNVbml0XCIpO1xuZXhwb3J0cy5UZXN0ID0gdHNVbml0XzIuVGVzdDtcbmV4cG9ydHMuVGVzdENvbnRleHQgPSB0c1VuaXRfMi5UZXN0Q29udGV4dDtcbmV4cG9ydHMuVGVzdENsYXNzID0gdHNVbml0XzIuVGVzdENsYXNzO1xuZXhwb3J0cy5GYWtlRmFjdG9yeSA9IHRzVW5pdF8yLkZha2VGYWN0b3J5O1xuZXhwb3J0cy5UZXN0RGVzY3JpcHRpb24gPSB0c1VuaXRfMi5UZXN0RGVzY3JpcHRpb247XG5leHBvcnRzLlRlc3REZWZpbml0aW9uID0gdHNVbml0XzIuVGVzdERlZmluaXRpb247XG5jbGFzcyBUZXN0QXN5bmMgZXh0ZW5kcyB0c1VuaXRfMS5UZXN0IHtcbiAgICBydW5BbGwodGVzdHMsIHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgIGxldCB0aGlzVGVzdCA9IHRlc3RzWzBdO1xuICAgICAgICB2YXIgdGVzdENsYXNzID0gdGhpc1Rlc3QudGVzdENsYXNzO1xuICAgICAgICB2YXIgZHluYW1pY1Rlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgdmFyIHRlc3RzR3JvdXBOYW1lID0gdGhpc1Rlc3QubmFtZTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSB0c1VuaXRfMS5GdW5jdGlvblByb3BlcnR5SGVscGVyLmdldEZ1bmN0aW9uTmFtZXModGVzdENsYXNzKTtcbiAgICAgICAgbGV0IGZ1bmN0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCB1bml0VGVzdE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2pdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmVzZXJ2ZWRGdW5jdGlvbk5hbWUodW5pdFRlc3ROYW1lKSAmJlxuICAgICAgICAgICAgICAgICEodW5pdFRlc3ROYW1lLnN1YnN0cmluZygwLCB0aGlzLnByaXZhdGVNZW1iZXJQcmVmaXgubGVuZ3RoKSA9PT0gdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4KSAmJlxuICAgICAgICAgICAgICAgICEodHlwZW9mIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXSAhPT0gJ2Z1bmN0aW9uJykgJiZcbiAgICAgICAgICAgICAgICAoIXRlc3RSdW5MaW1pdGVyIHx8IHRlc3RSdW5MaW1pdGVyLmlzVGVzdEFjdGl2ZSh1bml0VGVzdE5hbWUpKSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5wdXNoKHVuaXRUZXN0TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlbWFpbmluZ1Rlc3RzID0gdGVzdHMuc2xpY2UoMSk7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5ydW5BbGxGdW5jdGlvbnModGhpc1Rlc3QsIGZ1bmN0aW9ucywgdGVzdFJ1bkxpbWl0ZXIpO1xuICAgICAgICBpZiAocmVtYWluaW5nVGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMucnVuQWxsKHJlbWFpbmluZ1Rlc3RzLCB0ZXN0UnVuTGltaXRlcikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBydW5BbGxGdW5jdGlvbnModGhpc1Rlc3QsIGZ1bmN0aW9uTmFtZXMsIHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgIGxldCB1bml0VGVzdE5hbWUgPSBmdW5jdGlvbk5hbWVzWzBdO1xuICAgICAgICBsZXQgcmVtYWluaW5nRnVuY3Rpb25zID0gZnVuY3Rpb25OYW1lcy5zbGljZSgxKTtcbiAgICAgICAgdmFyIHRlc3RDbGFzcyA9IHRoaXNUZXN0LnRlc3RDbGFzcztcbiAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgIHZhciB0ZXN0c0dyb3VwTmFtZSA9IHRoaXNUZXN0Lm5hbWU7XG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICBpZiAodHlwZW9mIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycztcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnJ1bkFsbFBhcmFtZXRlcnModGhpc1Rlc3QsIHVuaXRUZXN0TmFtZSwgMCwgdGVzdFJ1bkxpbWl0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMucnVuU2luZ2xlVGVzdEFzeW5jKHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbWFpbmluZ0Z1bmN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKCgpID0+IHRoaXMucnVuQWxsRnVuY3Rpb25zKHRoaXNUZXN0LCByZW1haW5pbmdGdW5jdGlvbnMsIHRlc3RSdW5MaW1pdGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZS50aGVuKCh4KSA9PiB7XG4gICAgICAgICAgICB0ZXN0Q2xhc3MudGVhckRvd24gJiYgdGVzdENsYXNzLnRlYXJEb3duKCk7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgdGVzdENsYXNzLnRlYXJEb3duICYmIHRlc3RDbGFzcy50ZWFyRG93bigpO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJ1bkFsbFBhcmFtZXRlcnModGhpc1Rlc3QsIHVuaXRUZXN0TmFtZSwgcGFyYW1ldGVySW5kZXgsIHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgIGxldCB0ZXN0Q2xhc3MgPSB0aGlzVGVzdC50ZXN0Q2xhc3M7XG4gICAgICAgIGxldCBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICBsZXQgdGVzdHNHcm91cE5hbWUgPSB0aGlzVGVzdC5uYW1lO1xuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzO1xuICAgICAgICBsZXQgbWF4SW5kZXggPSBwYXJhbWV0ZXJzLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcmFtZXRlckluZGV4O1xuICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIpIHtcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IHBhcmFtZXRlcnMubGVuZ3RoICYmICF0ZXN0UnVuTGltaXRlci5pc1BhcmFtZXRlcnNTZXRBY3RpdmUoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPCBwYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuU2luZ2xlVGVzdEFzeW5jKHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5ydW5BbGxQYXJhbWV0ZXJzKHRoaXNUZXN0LCB1bml0VGVzdE5hbWUsIGluZGV4ICsgMSwgdGVzdFJ1bkxpbWl0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgIH1cbiAgICBydW5TaW5nbGVUZXN0QXN5bmModGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lLCBwYXJhbWV0ZXJzID0gbnVsbCwgcGFyYW1ldGVyU2V0SW5kZXggPSBudWxsKSB7XG4gICAgICAgIC8vIHJ1bm5pbmcgZXZlcnl0aGluZyBpbnNpZGUgLnRoZW4gc2F2ZXMgdXMgYSB0cnkvY2F0Y2hcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGVzdENsYXNzLnNldFVwICYmIHRlc3RDbGFzcy5zZXRVcCgpO1xuICAgICAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgICAgICB2YXIgYXJncyA9IChwYXJhbWV0ZXJTZXRJbmRleCAhPT0gbnVsbCkgPyBwYXJhbWV0ZXJzW3BhcmFtZXRlclNldEluZGV4XSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLmFwcGx5KHRlc3RDbGFzcywgYXJncyk7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXNzZXMucHVzaChuZXcgdHNVbml0XzEuVGVzdERlc2NyaXB0aW9uKHRlc3RzR3JvdXBOYW1lLCB1bml0VGVzdE5hbWUsIHBhcmFtZXRlclNldEluZGV4LCAnT0snKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgdHNVbml0XzEuVGVzdERlc2NyaXB0aW9uKHRlc3RzR3JvdXBOYW1lLCB1bml0VGVzdE5hbWUsIHBhcmFtZXRlclNldEluZGV4LCBlcnIudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBydW5Bc3luYyh0ZXN0UnVuTGltaXRlciA9IG51bGwpIHtcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBudWxsO1xuICAgICAgICB2YXIgdGVzdENvbnRleHQgPSBuZXcgdHNVbml0XzEuVGVzdENvbnRleHQoKTtcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlc3RSdW5MaW1pdGVyID0gdGhpcy50ZXN0UnVuTGltaXRlcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVzdHMgPSB0aGlzLnRlc3RzO1xuICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIpIHtcbiAgICAgICAgICAgIHRlc3RzID0gdGVzdHMuZmlsdGVyKCh4KSA9PiB0ZXN0UnVuTGltaXRlci5pc1Rlc3RzR3JvdXBBY3RpdmUoeC5uYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucnVuQWxsKHRlc3RzLCB0ZXN0UnVuTGltaXRlcik7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2UgcnVuQXN5bmNcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZSBydW5Bc3luY1wiKTtcbiAgICB9XG59XG5leHBvcnRzLlRlc3RBc3luYyA9IFRlc3RBc3luYztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRzVW5pdEFzeW5jLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdEFzeW5jLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9