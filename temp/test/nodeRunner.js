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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMDY2ZDRiNWY3ZTlmZTFmOThlMCIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaEVBLHNDQUFtRTtBQUNuRSwwQ0FBbUM7QUFDbkMsc0NBQThCO0FBRTlCLE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsT0FBTyxFQUFFLFdBQUk7SUFDYixRQUFRLEVBQUUsV0FBSTtDQUNmLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxZQUFTLENBQUM7QUFpRWIsNkJBQUs7QUFoRXZCLE1BQU0sWUFBWSxHQUFHLFlBQVMsQ0FBQztBQStEYiw2QkFBSztBQTdEdkIsSUFBSSxhQUFhLENBQUM7QUFDbEIsRUFBRSxDQUFDLENBQUMsZ0JBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNaLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBQUMsSUFBSSxDQUFDLENBQUM7SUFDTixhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUNELElBQUksZ0JBQWdCLENBQUM7QUEyQ0MscUNBQVM7QUExQy9CLElBQUksV0FBVyxDQUFDO0FBMkNDLDJCQUFJO0FBMUNyQixJQUFJLGNBQWMsQ0FBQztBQTJDQyxpQ0FBTztBQTFDM0IsSUFBSSxpQkFBaUIsQ0FBQztBQTJDQyx1Q0FBVTtBQTFDakMsSUFBSSxlQUFlLENBQUM7QUEyQ0MsbUNBQVE7QUExQzdCLElBQUksY0FBYyxDQUFDO0FBMkNDLGlDQUFPO0FBMUMzQixJQUFJLGVBQWUsQ0FBQztBQTJDQyxtQ0FBUTtBQTFDN0IsSUFBSSxjQUFjLENBQUM7QUEyQ0MsaUNBQU87QUExQzNCLElBQUksVUFBVSxDQUFDO0FBMkNDLGdDQUFVO0FBMUMxQixJQUFJLGdCQUFnQixDQUFDO0FBMkNDLHFDQUFTO0FBMUMvQixJQUFJLFlBQVksQ0FBQztBQTJDQyw2QkFBSztBQTFDdkIsSUFBSSxhQUFhLENBQUM7QUEyQ0MsK0JBQU07QUF6Q3pCLEVBQUUsQ0FBQyxDQUFDLGdCQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDWixvQ0FBZ0IsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO0lBQzFDLDBCQUFXLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNoQyxnQ0FBYyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDdEMsc0NBQWlCLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUM1QyxrQ0FBZSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDeEMsZ0NBQWMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQ3RDLGtDQUFlLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxnQ0FBYyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDdEMsK0JBQVUsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDO0lBQzlCLG9DQUFnQixHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7SUFDMUMsNEJBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ2xDLDhCQUFhLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUN0QyxDQUFDO0FBQUMsSUFBSSxDQUFDLENBQUM7SUFDTixvQ0FBZ0IsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO0lBQzFDLDBCQUFXLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNoQyxnQ0FBYyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDdEMsc0NBQWlCLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUM1QyxrQ0FBZSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDeEMsZ0NBQWMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQ3RDLGtDQUFlLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxnQ0FBYyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDdEMsK0JBQVUsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDO0lBQzlCLG9DQUFnQixHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7SUFDMUMsNEJBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ2xDLDhCQUFhLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUN0QyxDQUFDO0FBRUQsa0JBQWUsYUFBYSxDQUFDOzs7Ozs7OztBQzNEN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixFQUFFOztBQUUxQjtBQUNBO0FBQ0EsdUJBQXVCLElBQUk7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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SUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVc7V0FDdEMsT0FBTyxTQUFTLENBQUMsUUFBUSxLQUFLLFFBQVE7V0FDdEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVXLGlCQUFTLEdBQUcsR0FBWSxFQUFFO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRVcsY0FBTSxHQUFHLEdBQVksRUFBRTtJQUNsQyxNQUFNLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsQ0FBQztBQUN6RSxDQUFDLENBQUM7Ozs7Ozs7QUNsQ0YsaUMiLCJmaWxlIjoiaXNvbW9ycGhpYy1wYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ1dGlsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlzb21vcnBoaWMtcGF0aFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInV0aWxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImlzb21vcnBoaWMtcGF0aFwiXSA9IGZhY3Rvcnkocm9vdFtcInV0aWxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMDY2ZDRiNWY3ZTlmZTFmOThlMCIsImltcG9ydCB7IHdpbjMyIGFzIHdpbjMyQmFzZSwgcG9zaXggYXMgcG9zaXhCYXNlIH0gZnJvbSAncGF0aC9wYXRoJztcbmltcG9ydCB7IGlzV2luIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9ub29wJztcblxuY29uc3QgdW5zdXBwb3J0ZWRNZXRob2RzID0ge1xuICByZXNvbHZlOiBub29wLFxuICByZWxhdGl2ZTogbm9vcCxcbn07XG5cbmNvbnN0IHdpbjMyUnVudGltZSA9IHdpbjMyQmFzZTtcbmNvbnN0IHBvc2l4UnVudGltZSA9IHBvc2l4QmFzZTtcblxubGV0IGRlZmF1bHRFeHBvcnQ7XG5pZiAoaXNXaW4oKSkge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luMzJSdW50aW1lKTtcbn0gZWxzZSB7XG4gIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwb3NpeFJ1bnRpbWUpO1xufVxubGV0IG5vcm1hbGl6ZVJ1bnRpbWU7XG5sZXQgam9pblJ1bnRpbWU7XG5sZXQgcmVzb2x2ZVJ1bnRpbWU7XG5sZXQgaXNBYnNvbHV0ZVJ1bnRpbWU7XG5sZXQgcmVsYXRpdmVSdW50aW1lO1xubGV0IGRpcm5hbWVSdW50aW1lO1xubGV0IGJhc2VuYW1lUnVudGltZTtcbmxldCBleHRuYW1lUnVudGltZTtcbmxldCBzZXBSdW50aW1lO1xubGV0IGRlbGltaXRlclJ1bnRpbWU7XG5sZXQgcGFyc2VSdW50aW1lO1xubGV0IGZvcm1hdFJ1bnRpbWU7XG5cbmlmIChpc1dpbigpKSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHdpbjMyUnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHdpbjMyUnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHdpbjMyUnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZm9ybWF0O1xufSBlbHNlIHtcbiAgbm9ybWFsaXplUnVudGltZSA9IHBvc2l4UnVudGltZS5ub3JtYWxpemU7XG4gIGpvaW5SdW50aW1lID0gcG9zaXhSdW50aW1lLmpvaW47XG4gIHJlc29sdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlc29sdmU7XG4gIGlzQWJzb2x1dGVSdW50aW1lID0gcG9zaXhSdW50aW1lLmlzQWJzb2x1dGU7XG4gIHJlbGF0aXZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZWxhdGl2ZTtcbiAgZGlybmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGlybmFtZTtcbiAgYmFzZW5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmJhc2VuYW1lO1xuICBleHRuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5leHRuYW1lO1xuICBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcbiAgZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XG4gIHBhcnNlUnVudGltZSA9IHBvc2l4UnVudGltZS5wYXJzZTtcbiAgZm9ybWF0UnVudGltZSA9IHBvc2l4UnVudGltZS5mb3JtYXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRFeHBvcnQ7XG5leHBvcnQge1xuICBub3JtYWxpemVSdW50aW1lIGFzIG5vcm1hbGl6ZSxcbiAgam9pblJ1bnRpbWUgYXMgam9pbixcbiAgcmVzb2x2ZVJ1bnRpbWUgYXMgcmVzb2x2ZSxcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgYXMgaXNBYnNvbHV0ZSxcbiAgcmVsYXRpdmVSdW50aW1lIGFzIHJlbGF0aXZlLFxuICBkaXJuYW1lUnVudGltZSBhcyBkaXJuYW1lLFxuICBiYXNlbmFtZVJ1bnRpbWUgYXMgYmFzZW5hbWUsXG4gIGV4dG5hbWVSdW50aW1lIGFzIGV4dG5hbWUsXG4gIHNlcFJ1bnRpbWUgYXMgc2VwUnVudGltZSxcbiAgZGVsaW1pdGVyUnVudGltZSBhcyBkZWxpbWl0ZXIsXG4gIHBhcnNlUnVudGltZSBhcyBwYXJzZSxcbiAgZm9ybWF0UnVudGltZSBhcyBmb3JtYXQsXG4gIHBvc2l4UnVudGltZSBhcyBwb3NpeCxcbiAgd2luMzJSdW50aW1lIGFzIHdpbjMyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wYXRoLnRzIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGF0aC9wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vcGF0aCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXgudHMiLCJleHBvcnQgY29uc3Qgbm9vcCA9IChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9ub29wLnRzIiwiZXhwb3J0IGNvbnN0IGlzTWFjID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1dpbiA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wbGF0Zm9ybS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1dGlsXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5NGNmMmI3ODI3ZDQ0YmFiM2JkNyIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3RzLXVuaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy8uL3Rlc3QvUGF0aC5Ob2RlLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9QbGF0Zm9ybS5Ob2RlLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pc29tb3JwaGljLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXRoL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9SdW5uZXIuTm9kZS50cyIsIndlYnBhY2s6Ly8vLi9+L3RzLXVuaXQvZGlzdC9zcmMvVHNVbml0TW9kdWxlLmpzIiwid2VicGFjazovLy8uL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXRBc3luYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUU7O0FBRTFCO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUU7O0FBRTFCO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZD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O0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QyIsImZpbGUiOiJub2RlUnVubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ1dGlsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5vZGVSdW5uZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJub2RlUnVubmVyXCJdID0gZmFjdG9yeShyb290W1widXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NGNmMmI3ODI3ZDQ0YmFiM2JkNyIsImltcG9ydCB7IHdpbjMyIGFzIHdpbjMyQmFzZSwgcG9zaXggYXMgcG9zaXhCYXNlIH0gZnJvbSAncGF0aC9wYXRoJztcbmltcG9ydCB7IGlzV2luIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9ub29wJztcblxuY29uc3QgdW5zdXBwb3J0ZWRNZXRob2RzID0ge1xuICByZXNvbHZlOiBub29wLFxuICByZWxhdGl2ZTogbm9vcCxcbn07XG5cbmNvbnN0IHdpbjMyUnVudGltZSA9IHdpbjMyQmFzZTtcbmNvbnN0IHBvc2l4UnVudGltZSA9IHBvc2l4QmFzZTtcblxubGV0IGRlZmF1bHRFeHBvcnQ7XG5pZiAoaXNXaW4oKSkge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luMzJSdW50aW1lKTtcbn0gZWxzZSB7XG4gIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwb3NpeFJ1bnRpbWUpO1xufVxubGV0IG5vcm1hbGl6ZVJ1bnRpbWU7XG5sZXQgam9pblJ1bnRpbWU7XG5sZXQgcmVzb2x2ZVJ1bnRpbWU7XG5sZXQgaXNBYnNvbHV0ZVJ1bnRpbWU7XG5sZXQgcmVsYXRpdmVSdW50aW1lO1xubGV0IGRpcm5hbWVSdW50aW1lO1xubGV0IGJhc2VuYW1lUnVudGltZTtcbmxldCBleHRuYW1lUnVudGltZTtcbmxldCBzZXBSdW50aW1lO1xubGV0IGRlbGltaXRlclJ1bnRpbWU7XG5sZXQgcGFyc2VSdW50aW1lO1xubGV0IGZvcm1hdFJ1bnRpbWU7XG5cbmlmIChpc1dpbigpKSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHdpbjMyUnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHdpbjMyUnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHdpbjMyUnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZm9ybWF0O1xufSBlbHNlIHtcbiAgbm9ybWFsaXplUnVudGltZSA9IHBvc2l4UnVudGltZS5ub3JtYWxpemU7XG4gIGpvaW5SdW50aW1lID0gcG9zaXhSdW50aW1lLmpvaW47XG4gIHJlc29sdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlc29sdmU7XG4gIGlzQWJzb2x1dGVSdW50aW1lID0gcG9zaXhSdW50aW1lLmlzQWJzb2x1dGU7XG4gIHJlbGF0aXZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZWxhdGl2ZTtcbiAgZGlybmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGlybmFtZTtcbiAgYmFzZW5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmJhc2VuYW1lO1xuICBleHRuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5leHRuYW1lO1xuICBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcbiAgZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XG4gIHBhcnNlUnVudGltZSA9IHBvc2l4UnVudGltZS5wYXJzZTtcbiAgZm9ybWF0UnVudGltZSA9IHBvc2l4UnVudGltZS5mb3JtYXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRFeHBvcnQ7XG5leHBvcnQge1xuICBub3JtYWxpemVSdW50aW1lIGFzIG5vcm1hbGl6ZSxcbiAgam9pblJ1bnRpbWUgYXMgam9pbixcbiAgcmVzb2x2ZVJ1bnRpbWUgYXMgcmVzb2x2ZSxcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgYXMgaXNBYnNvbHV0ZSxcbiAgcmVsYXRpdmVSdW50aW1lIGFzIHJlbGF0aXZlLFxuICBkaXJuYW1lUnVudGltZSBhcyBkaXJuYW1lLFxuICBiYXNlbmFtZVJ1bnRpbWUgYXMgYmFzZW5hbWUsXG4gIGV4dG5hbWVSdW50aW1lIGFzIGV4dG5hbWUsXG4gIHNlcFJ1bnRpbWUgYXMgc2VwUnVudGltZSxcbiAgZGVsaW1pdGVyUnVudGltZSBhcyBkZWxpbWl0ZXIsXG4gIHBhcnNlUnVudGltZSBhcyBwYXJzZSxcbiAgZm9ybWF0UnVudGltZSBhcyBmb3JtYXQsXG4gIHBvc2l4UnVudGltZSBhcyBwb3NpeCxcbiAgd2luMzJSdW50aW1lIGFzIHdpbjMyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wYXRoLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc3JjL1RzVW5pdE1vZHVsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzLXVuaXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKiB0c1VuaXQgKGMpIENvcHlyaWdodCAyMDEyLTIwMTUgU3RldmUgRmVudG9uLCBsaWNlbnNlZCB1bmRlciBBcGFjaGUgMi4wIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZS1GZW50b24vdHNVbml0ICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBUZXN0IHtcbiAgICBjb25zdHJ1Y3RvciguLi50ZXN0TW9kdWxlcykge1xuICAgICAgICB0aGlzLnByaXZhdGVNZW1iZXJQcmVmaXggPSAnXyc7XG4gICAgICAgIHRoaXMucGFzc2VzID0gW107XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMudGVzdHMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNlcnZlZE1ldGhvZE5hbWVDb250YWluZXIgPSBuZXcgVGVzdENsYXNzKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlVGVzdExpbWl0ZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXN0TW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRlc3RNb2R1bGUgPSB0ZXN0TW9kdWxlc1tpXTtcbiAgICAgICAgICAgIGlmICh0ZXN0TW9kdWxlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdGVzdE1vZHVsZVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUZXN0Q2xhc3MobmV3IHRlc3RNb2R1bGUsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0ZXN0TW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVzdENsYXNzKG5ldyB0ZXN0TW9kdWxlW3Byb3BdLCBwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkVGVzdENsYXNzKHRlc3RDbGFzcywgbmFtZSA9ICdUZXN0cycpIHtcbiAgICAgICAgdGhpcy50ZXN0cy5wdXNoKG5ldyBUZXN0RGVmaW5pdGlvbih0ZXN0Q2xhc3MsIG5hbWUpKTtcbiAgICB9XG4gICAgcnVuKHRlc3RSdW5MaW1pdGVyID0gbnVsbCkge1xuICAgICAgICB2YXIgcGFyYW1ldGVycyA9IG51bGw7XG4gICAgICAgIHZhciB0ZXN0Q29udGV4dCA9IG5ldyBUZXN0Q29udGV4dCgpO1xuICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVzdFJ1bkxpbWl0ZXIgPSB0aGlzLnRlc3RSdW5MaW1pdGVyO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXN0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHRlc3RDbGFzcyA9IHRoaXMudGVzdHNbaV0udGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgICAgICB2YXIgdGVzdHNHcm91cE5hbWUgPSB0aGlzLnRlc3RzW2ldLm5hbWU7XG4gICAgICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIgJiYgIXRlc3RSdW5MaW1pdGVyLmlzVGVzdHNHcm91cEFjdGl2ZSh0ZXN0c0dyb3VwTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlci5nZXRGdW5jdGlvbk5hbWVzKHRlc3RDbGFzcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFRlc3ROYW1lID0gcHJvcGVydHlOYW1lc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Jlc2VydmVkRnVuY3Rpb25OYW1lKHVuaXRUZXN0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfHwgKHVuaXRUZXN0TmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4Lmxlbmd0aCkgPT09IHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeClcbiAgICAgICAgICAgICAgICAgICAgfHwgKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0gIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0ZXN0UnVuTGltaXRlciAmJiAhdGVzdFJ1bkxpbWl0ZXIuaXNUZXN0QWN0aXZlKHVuaXRUZXN0TmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBwYXJhbWV0ZXJzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyICYmICF0ZXN0UnVuTGltaXRlci5pc1BhcmFtZXRlcnNTZXRBY3RpdmUocGFyYW1ldGVySW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1blNpbmdsZVRlc3QodGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lLCBwYXJhbWV0ZXJzLCBwYXJhbWV0ZXJJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuU2luZ2xlVGVzdCh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2hvd1Jlc3VsdHModGFyZ2V0KSB7XG4gICAgICAgIHZhciBlbGVtO1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IHRhcmdldDtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9ICc8YXJ0aWNsZT4nICtcbiAgICAgICAgICAgICc8aDE+JyArIHRoaXMuZ2V0VGVzdFJlc3VsdCgpICsgJzwvaDE+JyArXG4gICAgICAgICAgICAnPHA+JyArIHRoaXMuZ2V0VGVzdFN1bW1hcnkoKSArICc8L3A+JyArXG4gICAgICAgICAgICB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0Q2xlYW5lcigpICtcbiAgICAgICAgICAgICc8c2VjdGlvbiBpZD1cInRzRmFpbFwiPicgK1xuICAgICAgICAgICAgJzxoMj5FcnJvcnM8L2gyPicgK1xuICAgICAgICAgICAgJzx1bCBjbGFzcz1cImJhZFwiPicgKyB0aGlzLmdldFRlc3RSZXN1bHRMaXN0KHRoaXMuZXJyb3JzKSArICc8L3VsPicgK1xuICAgICAgICAgICAgJzwvc2VjdGlvbj4nICtcbiAgICAgICAgICAgICc8c2VjdGlvbiBpZD1cInRzT2theVwiPicgK1xuICAgICAgICAgICAgJzxoMj5QYXNzaW5nIFRlc3RzPC9oMj4nICtcbiAgICAgICAgICAgICc8dWwgY2xhc3M9XCJnb29kXCI+JyArIHRoaXMuZ2V0VGVzdFJlc3VsdExpc3QodGhpcy5wYXNzZXMpICsgJzwvdWw+JyArXG4gICAgICAgICAgICAnPC9zZWN0aW9uPicgK1xuICAgICAgICAgICAgJzwvYXJ0aWNsZT4nICtcbiAgICAgICAgICAgIHRoaXMudGVzdFJ1bkxpbWl0ZXIuZ2V0TGltaXRDbGVhbmVyKCk7XG4gICAgICAgIGVsZW0uaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRUYXBSZXN1bHRzKCkge1xuICAgICAgICB2YXIgbmV3TGluZSA9ICdcXHJcXG4nO1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSAnMS4uJyArICh0aGlzLnBhc3Nlcy5sZW5ndGggKyB0aGlzLmVycm9ycy5sZW5ndGgpLnRvU3RyaW5nKCkgKyBuZXdMaW5lO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSAnbm90IG9rICcgKyB0aGlzLmVycm9yc1tpXS5tZXNzYWdlICsgJyAnICsgdGhpcy5lcnJvcnNbaV0udGVzdE5hbWUgKyAnOicgKyB0aGlzLmVycm9yc1tpXS5mdW5jTmFtZSArIG5ld0xpbmU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gJ29rICcgKyB0aGlzLnBhc3Nlc1tpXS50ZXN0TmFtZSArICc6JyArIHRoaXMucGFzc2VzW2ldLmZ1bmNOYW1lICsgbmV3TGluZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIGNyZWF0ZVRlc3RMaW1pdGVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0UnVuTGltaXRlciA9IG5ldyBUZXN0UnVuTGltaXRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkgeyB9XG4gICAgfVxuICAgIGlzUmVzZXJ2ZWRGdW5jdGlvbk5hbWUoZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3BlcnR5SGVscGVyXG4gICAgICAgICAgICAuZ2V0RnVuY3Rpb25OYW1lcyh0aGlzLnJlc2VydmVkTWV0aG9kTmFtZUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5zb21lKG1lbSA9PiBtZW0gPT09IGZ1bmN0aW9uTmFtZSk7XG4gICAgfVxuICAgIHJ1blNpbmdsZVRlc3QodGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lLCBwYXJhbWV0ZXJzID0gbnVsbCwgcGFyYW1ldGVyU2V0SW5kZXggPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGVzdENsYXNzWydzZXRVcCddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0ZXN0Q2xhc3NbJ3NldFVwJ10oKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgICAgICB2YXIgYXJncyA9IChwYXJhbWV0ZXJTZXRJbmRleCAhPT0gbnVsbCkgPyBwYXJhbWV0ZXJzW3BhcmFtZXRlclNldEluZGV4XSA6IG51bGw7XG4gICAgICAgICAgICBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0uYXBwbHkodGVzdENsYXNzLCBhcmdzKTtcbiAgICAgICAgICAgIHRoaXMucGFzc2VzLnB1c2gobmV3IFRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgJ09LJykpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgZXJyLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRlc3RDbGFzc1sndGVhckRvd24nXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGVzdENsYXNzWyd0ZWFyRG93biddKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VGVzdFJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmxlbmd0aCA9PT0gMCA/ICdUZXN0IFBhc3NlZCcgOiAnVGVzdCBGYWlsZWQnO1xuICAgIH1cbiAgICBnZXRUZXN0U3VtbWFyeSgpIHtcbiAgICAgICAgcmV0dXJuICdUb3RhbCB0ZXN0czogPHNwYW4gaWQ9XCJ0c1VuaXRUb3RhbENvdXRcIj4nICsgKHRoaXMucGFzc2VzLmxlbmd0aCArIHRoaXMuZXJyb3JzLmxlbmd0aCkudG9TdHJpbmcoKSArICc8L3NwYW4+LiAnICtcbiAgICAgICAgICAgICdQYXNzZWQgdGVzdHM6IDxzcGFuIGlkPVwidHNVbml0UGFzc0NvdW50XCIgY2xhc3M9XCJnb29kXCI+JyArIHRoaXMucGFzc2VzLmxlbmd0aCArICc8L3NwYW4+LiAnICtcbiAgICAgICAgICAgICdGYWlsZWQgdGVzdHM6IDxzcGFuIGlkPVwidHNVbml0RmFpbENvdW50XCIgY2xhc3M9XCJiYWRcIj4nICsgdGhpcy5lcnJvcnMubGVuZ3RoICsgJzwvc3Bhbj4uJztcbiAgICB9XG4gICAgZ2V0VGVzdFJlc3VsdExpc3QodGVzdFJlc3VsdHMpIHtcbiAgICAgICAgdmFyIGxpc3QgPSAnJztcbiAgICAgICAgdmFyIGdyb3VwID0gJyc7XG4gICAgICAgIHZhciBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXN0UmVzdWx0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRlc3RSZXN1bHRzW2ldO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC50ZXN0TmFtZSAhPT0gZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBncm91cCA9IHJlc3VsdC50ZXN0TmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ICs9ICc8L2xpPjwvdWw+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlzdCArPSAnPGxpPicgKyB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0ZXJGb3JHcm91cChncm91cCkgKyByZXN1bHQudGVzdE5hbWUgKyAnPHVsPic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0Q2xhc3MgPSAocmVzdWx0Lm1lc3NhZ2UgPT09ICdPSycpID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJztcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbkxhYmFsID0gcmVzdWx0LmZ1bmNOYW1lICsgKChyZXN1bHQucGFyYW1ldGVyU2V0TnVtYmVyID09PSBudWxsKVxuICAgICAgICAgICAgICAgID8gJygpJ1xuICAgICAgICAgICAgICAgIDogJygnICsgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdGVyRm9yVGVzdChncm91cCwgcmVzdWx0LmZ1bmNOYW1lLCByZXN1bHQucGFyYW1ldGVyU2V0TnVtYmVyKSArICcgcGFyYW1hdGVyIHNldDogJyArIHJlc3VsdC5wYXJhbWV0ZXJTZXROdW1iZXIgKyAnKScpO1xuICAgICAgICAgICAgbGlzdCArPSAnPGxpIGNsYXNzPVwiJyArIHJlc3VsdENsYXNzICsgJ1wiPicgKyB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0ZXJGb3JUZXN0KGdyb3VwLCByZXN1bHQuZnVuY05hbWUpICsgZnVuY3Rpb25MYWJhbCArICc6ICcgKyB0aGlzLmVuY29kZUh0bWxFbnRpdGllcyhyZXN1bHQubWVzc2FnZSkgKyAnPC9saT4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0ICsgJzwvdWw+JztcbiAgICB9XG4gICAgZW5jb2RlSHRtbEVudGl0aWVzKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0ID0gVGVzdDtcbmNsYXNzIFRlc3RSdW5MaW1pdGVyUnVuQWxsIHtcbiAgICBpc1Rlc3RzR3JvdXBBY3RpdmUoZ3JvdXBOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc1Rlc3RBY3RpdmUodGVzdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlzUGFyYW1ldGVyc1NldEFjdGl2ZShwYXJhbWF0ZXJzU2V0TnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbmNsYXNzIFRlc3RSdW5MaW1pdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncm91cE5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnRlc3ROYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnNldFJlZnJlc2hPbkxpbmtzV2l0aEhhc2goKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTdHJpbmdJbnRvVGVzdHNMaW1pdCh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgfVxuICAgIGlzVGVzdHNHcm91cEFjdGl2ZShncm91cE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXBOYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cE5hbWUgPT09IGdyb3VwTmFtZTtcbiAgICB9XG4gICAgaXNUZXN0QWN0aXZlKHRlc3ROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRlc3ROYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50ZXN0TmFtZSA9PT0gdGVzdE5hbWU7XG4gICAgfVxuICAgIGlzUGFyYW1ldGVyc1NldEFjdGl2ZShwYXJhbWF0ZXJzU2V0KSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtZXRlclNldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVyU2V0ID09PSBwYXJhbWF0ZXJzU2V0O1xuICAgIH1cbiAgICBnZXRMaW1pdGVyRm9yVGVzdChncm91cE5hbWUsIHRlc3ROYW1lLCBwYXJhbWV0ZXJTZXQgPSBudWxsKSB7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJTZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRlc3ROYW1lICs9ICcoJyArIHBhcmFtZXRlclNldCArICcpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyZuYnNwOzxhIGhyZWY9XCIjJyArIGdyb3VwTmFtZSArICcvJyArIHRlc3ROYW1lICsgJ1xcXCIgY2xhc3M9XCJhc2NpaVwiPiYjOTY1ODs8L2E+Jm5ic3A7JztcbiAgICB9XG4gICAgZ2V0TGltaXRlckZvckdyb3VwKGdyb3VwTmFtZSkge1xuICAgICAgICByZXR1cm4gJyZuYnNwOzxhIGhyZWY9XCIjJyArIGdyb3VwTmFtZSArICdcIiBjbGFzcz1cImFzY2lpXCI+JiM5NjU4OzwvYT4mbmJzcDsnO1xuICAgIH1cbiAgICBnZXRMaW1pdENsZWFuZXIoKSB7XG4gICAgICAgIHJldHVybiAnPHA+PGEgaHJlZj1cIiNcIj5SdW4gYWxsIHRlc3RzIDxzcGFuIGNsYXNzPVwiYXNjaWlcIj4mIzk2NTg7PC9zcGFuPjwvYT48L3A+JztcbiAgICB9XG4gICAgc2V0UmVmcmVzaE9uTGlua3NXaXRoSGFzaCgpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzSGFuZGxlciA9IHdpbmRvdy5vbmhhc2hjaGFuZ2U7XG4gICAgICAgIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJldmlvdXNIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNIYW5kbGVyLmNhbGwod2luZG93LCBldik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHRyYW5zbGF0ZVN0cmluZ0ludG9UZXN0c0xpbWl0KHZhbHVlKSB7XG4gICAgICAgIHZhciByZWdleCA9IC9eIyhbX2EtekEtWjAtOV0rKSgoXFwvKFtfYS16QS1aMC05XSspKShcXCgoWzAtOV0rKVxcKSk/KT8kLztcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ2V4LmV4ZWModmFsdWUpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAxICYmICEhcmVzdWx0WzFdKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHJlc3VsdFsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDQgJiYgISFyZXN1bHRbNF0pIHtcbiAgICAgICAgICAgIHRoaXMudGVzdE5hbWUgPSByZXN1bHRbNF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiA2ICYmICEhcmVzdWx0WzZdKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlclNldCA9IHBhcnNlSW50KHJlc3VsdFs2XSwgMTApO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0UnVuTGltaXRlciA9IFRlc3RSdW5MaW1pdGVyO1xuY2xhc3MgVGVzdENvbnRleHQge1xuICAgIHNldFVwKCkge1xuICAgIH1cbiAgICB0ZWFyRG93bigpIHtcbiAgICB9XG4gICAgYXJlSWRlbnRpY2FsKGV4cGVjdGVkLCBhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoZXhwZWN0ZWQgIT09IGFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlSWRlbnRpY2FsIGZhaWxlZCB3aGVuIGdpdmVuICcgK1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRWYXJpYWJsZShleHBlY3RlZCkgKyAnIGFuZCAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFyZU5vdElkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKGV4cGVjdGVkID09PSBhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZU5vdElkZW50aWNhbCBmYWlsZWQgd2hlbiBnaXZlbiAnICtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50VmFyaWFibGUoZXhwZWN0ZWQpICsgJyBhbmQgJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmVDb2xsZWN0aW9uc0lkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVzdWx0VG9TdHJpbmcocmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgbXNnID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtc2cgPSAnWycgKyByZXN1bHQucG9wKCkgKyAnXScgKyBtc2c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXNnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb21wYXJlQXJyYXkgPSAoZXhwZWN0ZWQsIGFjdHVhbCwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB2YXIgaW5kZXhTdHJpbmcgPSAnJztcbiAgICAgICAgICAgIGlmIChleHBlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgPSByZXN1bHRUb1N0cmluZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc0lkZW50aWNhbCBmYWlsZWQgd2hlbiBhcnJheSBhJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgaXMgbnVsbCBhbmQgYicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIGlzIG5vdCBudWxsJywgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gY29ycmVjdDogYm90aCBhcmUgbnVsbHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdHVhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc0lkZW50aWNhbCBmYWlsZWQgd2hlbiBhcnJheSBhJyArXG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyBpcyBub3QgbnVsbCBhbmQgYicgK1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgaXMgbnVsbCcsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4cGVjdGVkLmxlbmd0aCAhPT0gYWN0dWFsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc0lkZW50aWNhbCBmYWlsZWQgd2hlbiBsZW5ndGggb2YgYXJyYXkgYScgK1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKGxlbmd0aDogJyArIGV4cGVjdGVkLmxlbmd0aCArICcpIGlzIGRpZmZlcmVudCBvZiBsZW5ndGggb2YgYXJyYXkgYicgK1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKGxlbmd0aDogJyArIGFjdHVhbC5sZW5ndGggKyAnKScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgoZXhwZWN0ZWRbaV0gaW5zdGFuY2VvZiBBcnJheSkgJiYgKGFjdHVhbFtpXSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyZUFycmF5KGV4cGVjdGVkW2ldLCBhY3R1YWxbaV0sIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXhwZWN0ZWRbaV0gIT09IGFjdHVhbFtpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgPSByZXN1bHRUb1N0cmluZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc0lkZW50aWNhbCBmYWlsZWQgd2hlbiBlbGVtZW50IGEnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyAoJyArIHRoaXMucHJpbnRWYXJpYWJsZShleHBlY3RlZFtpXSkgKyAnKSBpcyBkaWZmZXJlbnQgdGhhbiBlbGVtZW50IGInICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyAoJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWxbaV0pICsgJyknLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGNvbXBhcmVBcnJheShleHBlY3RlZCwgYWN0dWFsLCBbXSk7XG4gICAgfVxuICAgIGFyZUNvbGxlY3Rpb25zTm90SWRlbnRpY2FsKGV4cGVjdGVkLCBhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5hcmVDb2xsZWN0aW9uc0lkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc05vdElkZW50aWNhbCBmYWlsZWQgd2hlbiBib3RoIGNvbGxlY3Rpb25zIGFyZSBpZGVudGljYWwnLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgaXNUcnVlKGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmICghYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc1RydWUgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0ZhbHNlKGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzRmFsc2UgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1RydXRoeShhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoIWFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNUcnVlIGZhaWxlZCB3aGVuIGdpdmVuICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNGYWxzZXkoYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKGFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNGYWxzZSBmYWlsZWQgd2hlbiBnaXZlbiAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93cyhhLCBtZXNzYWdlID0gJycsIGVycm9yU3RyaW5nID0gJycpIHtcbiAgICAgICAgdmFyIGFjdHVhbDtcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhY3R1YWwgPSBhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGEuZm4pIHtcbiAgICAgICAgICAgIGFjdHVhbCA9IGEuZm47XG4gICAgICAgICAgICBtZXNzYWdlID0gYS5tZXNzYWdlO1xuICAgICAgICAgICAgZXJyb3JTdHJpbmcgPSBhLmV4Y2VwdGlvblN0cmluZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFjdHVhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgaWYgKCFlcnJvclN0cmluZyB8fCBleC5tZXNzYWdlID09PSBlcnJvclN0cmluZykge1xuICAgICAgICAgICAgICAgIGlzVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvclN0cmluZyAmJiBleC5tZXNzYWdlICE9PSBlcnJvclN0cmluZykge1xuICAgICAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2RpZmZlcmVudCBlcnJvciBzdHJpbmcgdGhhbiBzdXBwbGllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNUaHJvd24pIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2RpZCBub3QgdGhyb3cgYW4gZXJyb3InLCBtZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2VzTm90VGhyb3coYWN0dWFsLCBtZXNzYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhY3R1YWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ3RocmV3IGFuIGVycm9yICcgKyBleCwgbWVzc2FnZSB8fCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhlY3V0ZXNXaXRoaW4oYWN0dWFsLCB0aW1lTGltaXQsIG1lc3NhZ2UgPSBudWxsKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRpbWVUb1N0cmluZyh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydE9mRXhlY3V0aW9uID0gZ2V0VGltZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYWN0dWFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc0V4ZWN1dGVUaW1lTGVzc1RoYW5MaW1pdCBmYWlscyB3aGVuIGdpdmVuIGNvZGUgdGhyb3dzIGFuIGV4Y2VwdGlvbjogXCInICsgZXggKyAnXCInLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhlY3V0aW5nVGltZSA9IGdldFRpbWUoKSAtIHN0YXJ0T2ZFeGVjdXRpb247XG4gICAgICAgIGlmIChleGVjdXRpbmdUaW1lID4gdGltZUxpbWl0KSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc0V4ZWN1dGVUaW1lTGVzc1RoYW5MaW1pdCBmYWlscyB3aGVuIGV4ZWN1dGlvbiB0aW1lIG9mIGdpdmVuIGNvZGUgKCcgKyB0aW1lVG9TdHJpbmcoZXhlY3V0aW5nVGltZSkgKyAnIG1zKSAnICtcbiAgICAgICAgICAgICAgICAnZXhjZWVkIHRoZSBnaXZlbiBsaW1pdCgnICsgdGltZVRvU3RyaW5nKHRpbWVMaW1pdCkgKyAnIG1zKScsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZhaWwobWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2ZhaWwnLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgZ2V0RXJyb3IocmVzdWx0TWVzc2FnZSwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKHJlc3VsdE1lc3NhZ2UgKyAnLiAnICsgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihyZXN1bHRNZXNzYWdlKTtcbiAgICB9XG4gICAgc3RhdGljIGdldE5hbWVPZkNsYXNzKGlucHV0Q2xhc3MpIHtcbiAgICAgICAgLy8gc2VlOiBodHRwczovL3d3dy5zdGV2ZWZlbnRvbi5jby51ay9Db250ZW50L0Jsb2cvRGF0ZS8yMDEzMDQvQmxvZy9PYnRhaW5pbmctQS1DbGFzcy1OYW1lLUF0LVJ1bnRpbWUtSW4tVHlwZVNjcmlwdC9cbiAgICAgICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb24gKC57MSx9KVxcKC87XG4gICAgICAgIHZhciByZXN1bHRzID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoaW5wdXRDbGFzcy5jb25zdHJ1Y3Rvci50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogJyc7XG4gICAgfVxuICAgIHByaW50VmFyaWFibGUodmFyaWFibGUpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1wibnVsbFwiJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhcmlhYmxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuICd7b2JqZWN0OiAnICsgVGVzdENvbnRleHQuZ2V0TmFtZU9mQ2xhc3ModmFyaWFibGUpICsgJ30nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAneycgKyAodHlwZW9mIHZhcmlhYmxlKSArICd9IFwiJyArIHZhcmlhYmxlICsgJ1wiJztcbiAgICB9XG59XG5leHBvcnRzLlRlc3RDb250ZXh0ID0gVGVzdENvbnRleHQ7XG5jbGFzcyBUZXN0Q2xhc3MgZXh0ZW5kcyBUZXN0Q29udGV4dCB7XG4gICAgcGFyYW1ldGVyaXplVW5pdFRlc3QobWV0aG9kLCBwYXJhbWV0ZXJzQXJyYXkpIHtcbiAgICAgICAgbWV0aG9kLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzQXJyYXk7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0Q2xhc3MgPSBUZXN0Q2xhc3M7XG5jbGFzcyBGYWtlRmFjdG9yeSB7XG4gICAgc3RhdGljIGdldEZha2Uob2JqLCAuLi5pbXBsZW1lbnRhdGlvbnMpIHtcbiAgICAgICAgdmFyIGZha2VUeXBlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB0aGlzLnBvcHVsYXRlRmFrZVR5cGUoZmFrZVR5cGUsIG9iaik7XG4gICAgICAgIHZhciBmYWtlID0gbmV3IGZha2VUeXBlKCk7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlci5nZXRBbGxQcm9wZXJ0eU5hbWVzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgZmFrZVtwcm9wZXJ0eU5hbWVzW2tdXSA9IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coJ0RlZmF1bHQgZmFrZSBjYWxsZWQuJyk7IH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1lbWJlck5hbWVJbmRleCA9IDA7XG4gICAgICAgIHZhciBtZW1iZXJWYWx1ZUluZGV4ID0gMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbXBsZW1lbnRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpbXBsID0gaW1wbGVtZW50YXRpb25zW2ldO1xuICAgICAgICAgICAgZmFrZVtpbXBsW21lbWJlck5hbWVJbmRleF1dID0gaW1wbFttZW1iZXJWYWx1ZUluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFrZTtcbiAgICB9XG4gICAgc3RhdGljIHBvcHVsYXRlRmFrZVR5cGUoZmFrZSwgdG9Db3B5KSB7XG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlci5nZXRBbGxQcm9wZXJ0eU5hbWVzKHRvQ29weSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgIGZha2VbcHJvcGVydHldID0gdG9Db3B5W3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZmFrZTtcbiAgICAgICAgfTtcbiAgICAgICAgX18ucHJvdG90eXBlID0gdG9Db3B5LnByb3RvdHlwZTtcbiAgICAgICAgZmFrZS5wcm90b3R5cGUgPSBuZXcgX18oKTtcbiAgICB9XG59XG5leHBvcnRzLkZha2VGYWN0b3J5ID0gRmFrZUZhY3Rvcnk7XG5jbGFzcyBUZXN0RGVmaW5pdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGVzdENsYXNzLCBuYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdERlZmluaXRpb24gPSBUZXN0RGVmaW5pdGlvbjtcbmNsYXNzIFRlc3REZXNjcmlwdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGVzdE5hbWUsIGZ1bmNOYW1lLCBwYXJhbWV0ZXJTZXROdW1iZXIsIG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy50ZXN0TmFtZSA9IHRlc3ROYW1lO1xuICAgICAgICB0aGlzLmZ1bmNOYW1lID0gZnVuY05hbWU7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2V0TnVtYmVyID0gcGFyYW1ldGVyU2V0TnVtYmVyO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdERlc2NyaXB0aW9uID0gVGVzdERlc2NyaXB0aW9uO1xuY2xhc3MgRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlciB7XG4gICAgc3RhdGljIHdhbGtJbXBsKG9iaiwgcmVzdWx0cykge1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvd25Qcm9wZXJ0aWVzT2ZPYmogPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICAgICAgICBvd25Qcm9wZXJ0aWVzT2ZPYmouZm9yRWFjaChtZW0gPT4gcmVzdWx0cy5hZGQobWVtKSk7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICAgICAgICBpZiAocHJvdG90eXBlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvdHlwZSk7XG4gICAgICAgIHByb3BOYW1lcy5mb3JFYWNoKG1lbSA9PiByZXN1bHRzLmFkZChtZW0pKTtcbiAgICAgICAgdGhpcy53YWxrSW1wbChvYmoucHJvdG90eXBlLCByZXN1bHRzKTtcbiAgICAgICAgdGhpcy53YWxrSW1wbChwcm90b3R5cGUsIHJlc3VsdHMpO1xuICAgIH1cbiAgICBzdGF0aWMgd2FsayhvYmopIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy53YWxrSW1wbChvYmosIHJlc3VsdHMpO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShyZXN1bHRzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEZ1bmN0aW9uTmFtZXModHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy53YWxrKHR5cGUpXG4gICAgICAgICAgICAuZmlsdGVyKG1lbSA9PiB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gdHlwZVttZW1dO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZCBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmXG4gICAgICAgICAgICAgICAgKG1ldGhvZCAhPT0gdHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICBtZXRob2QucHJvdG90eXBlICE9PVxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFByb3RvdHlwZU9mKHR5cGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRBbGxQcm9wZXJ0eU5hbWVzKHR5cGUpIHtcbiAgICAgICAgbGV0IHByb3BlcnRpZXMgPSB0aGlzLndhbGsodHlwZSk7XG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25Qcm9wcyA9IHRoaXMud2FsayhGdW5jdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcy5maWx0ZXIobWVtID0+ICFmdW5jdGlvblByb3BzLnNvbWUoZnVuY1Byb3AgPT4gZnVuY1Byb3AgPT09IG1lbSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLmZpbHRlcihtZW0gPT4ge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHR5cGVbbWVtXTtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QgIT09IHR5cGUgJiZcbiAgICAgICAgICAgICAgICBtZXRob2QucHJvdG90eXBlICE9PVxuICAgICAgICAgICAgICAgICAgICBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRQcm90b3R5cGVPZih0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5GdW5jdGlvblByb3BlcnR5SGVscGVyID0gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRzVW5pdC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInV0aWxcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgaXNNYWMgPSAoKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcm9jZXNzXG4gICYmIHR5cGVvZiBwcm9jZXNzLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAmJiBwcm9jZXNzLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkgPT09ICdkYXJ3aW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbWFjJykgPiAtMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzV2luID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnd2luMzInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB0eXBlb2YgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAgICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbicpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSAoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vZGUgPSAoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3BsYXRmb3JtLnRzIiwiaW1wb3J0ICogYXMgdHNVbml0IGZyb20gJ3RzLXVuaXQnO1xuaW1wb3J0ICogYXMgaXNvbW9ycGhpY1BhdGggZnJvbSAnLi4vJztcblxuZXhwb3J0IGNsYXNzIFBhdGhTcGVjIGV4dGVuZHMgdHNVbml0LlRlc3RDbGFzcyB7XG4gICAgdGVzdERlZmF1bHRFeHBvcnQoKSB7XG4gICAgICBkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4uL2xpYi9wYXRoJyldO1xuICAgICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICd3aW4zMicpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcbiAgICAgIGxldCBwYXRoID0gcmVxdWlyZSgnLi4vbGliL3BhdGgnKS5kZWZhdWx0O1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ1xcXFwnLCBwYXRoLnNlcCwgJ2RlZmF1bHQgc2VwZXJhdG9yIHNob3VsZCBiZSB3aW4zMiBcIlxcXFxcIiBhZnRlciBpbiB3aW5kb3dzIGVudmlyb25tZW50Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnOycsIHBhdGguZGVsaW1pdGVyLCAnZGVmYXVsdCBkZWxpbWl0ZXIgc2hvdWxkIGJlIHdpbjMyIFwiO1wiIGFmdGVyIGluIHdpbmRvd3MgZW52aXJvbm1lbnQnKTtcbiAgICAgIGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi4vbGliL3BhdGgnKV07XG4gICAgICAocHJvY2VzcyBhcyBhbnkpLl9fZGVmaW5lR2V0dGVyX18oJ3BsYXRmb3JtJywgKCkgPT4gJ2RhcndpbicpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcbiAgICAgIHBhdGggPSByZXF1aXJlKCcuLi9saWIvcGF0aCcpLmRlZmF1bHQ7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhdGguc2VwLCAnZGVmYXVsdCBzZXBlcmF0b3Igc2hvdWxkIGJlIHBvc2l4IFwiL1wiIGFmdGVyIGluIG1hYyBlbnZpcm9ubWVudCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJzonLCBwYXRoLmRlbGltaXRlciwgJ2RlZmF1bHQgZGVsaW1pdGVyIHNob3VsZCBiZSBwb3NpeCBcIi9cIiBhZnRlciBpbiBtYWMgZW52aXJvbm1lbnQnKTtcbiAgICB9XG5cbiAgICB0ZXN0V2luMzJCYXNlbmFtZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnbXlmaWxlLmh0bWwnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5iYXNlbmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxuICAgICAgICAnd2luMzIgYmFzZW5hbWUgc2hvdWxkIHBhcnNlIGZpbGUgbmFtZSBmcm9tIHdpbmRvd3MgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdteWZpbGUuaHRtbCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmJhc2VuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgICAnd2luMzIgYmFzZW5hbWUgc2hvdWxkIHBhcnNlIGZpbGUgbmFtZSBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4QmFzZW5hbWUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ215ZmlsZS5odG1sJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuYmFzZW5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3Bvc2l4IGJhc2VuYW1lIHNob3VsZCBub3QgcGFyc2Ugd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ215ZmlsZS5odG1sJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuYmFzZW5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAgICdwb3NpeCBiYXNlbmFtZSBzaG91bGQgcGFyc2UgZmlsZSBuYW1lIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0V2luMzJTZXAoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnXFxcXCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLnNlcCwgJ3dpbjMyIHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiXFxcXFwiIHNlcCcpO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhTZXAoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIGlzb21vcnBoaWNQYXRoLnBvc2l4LnNlcCwgJ3Bvc2l4IHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiL1wiIHNlcCcpO1xuICAgIH1cbiAgICB0ZXN0V2luMzJEZWxpbWl0ZXIoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnOycsIGlzb21vcnBoaWNQYXRoLndpbjMyLmRlbGltaXRlciwgJ3dpbjMyIHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiO1wiIGRlbGltaXRlcicpO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhEZWxpbWl0ZXIoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnOicsIGlzb21vcnBoaWNQYXRoLnBvc2l4LmRlbGltaXRlciwgJ3Bvc2l4IHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiO1wiIGRlbGltaXRlcicpO1xuICAgIH1cbiAgICB0ZXN0V2luMzJEaXJuYW1lKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICdDOlxcXFx0ZW1wJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZGlybmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxuICAgICAgICAnd2luMzIgZGlybmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGRpcmVjdG9yeSBwYXRoIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy90ZW1wJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZGlybmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3dpbjMyIGRpcm5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBkaXJlY3RvcnkgcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4RGlybmFtZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnQzpcXFxcdGVtcCcsXG4gICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5kaXJuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sJyksXG4gICAgICAncG9zaXggYmFzZW5hbWUgc2hvdWxkIG5vdCBwYXJzZSB3aW5kb3dzIHBhdGgnLFxuICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy90ZW1wJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZGlybmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcbiAgICAgICAgJ3Bvc2l4IGRpcm5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBkaXJlY3RvcnkgcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFdpbjMyRXh0bmFtZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLmh0bWwnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sJyksXG4gICAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBleHRlbnNpb24gZnJvbSB3aW5kb3dzIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLmh0bWwnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuanMnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5qcycpLFxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgZXh0ZW5zaW9uIGZyb20gd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5qcycsIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sLmpzJyksXG4gICAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5qcycsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwuanMnKSxcbiAgICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIHByZS1maXhlZCBleHRlbnNpb24gZnJvbSB3aW5kb3dzIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLmpzJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwuaHRtbC5qcycpLFxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcHJlLWZpeGVkIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4RXh0bmFtZSgpIHtcblxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuaHRtbCcsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXG4gICAgICAgICdwb3NpeCBleHRuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5qcycsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sLmpzJyksXG4gICAgICAgICdwb3NpeCBleHRuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy5qcycsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sLmh0bWwuanMnKSxcbiAgICAgICAgJ3Bvc2l4IGV4dG5hbWUgc2hvdWxkIHBhcnNlIHByZS1maXhlZCBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RXaW4zMkZvcm1hdCgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvaG9tZS91c2VyL2RpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICAgIGRpcjogJy9ob21lL3VzZXIvZGlyJyxcbiAgICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcbiAgICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICd3aW4zMiBmb3JtYXQgc2hvdWxkIG5vdCBmb3JtYXQgcG9zaXggUGFyc2VkUGF0aCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ3BhdGhcXFxcZGlyXFxcXGZpbGUudHh0JywgaXNvbW9ycGhpY1BhdGgud2luMzIuZm9ybWF0KHtcbiAgICAgICAgcm9vdDogJ0M6XFxcXCcsXG4gICAgICAgIGRpcjogJ3BhdGhcXFxcZGlyJyxcbiAgICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcbiAgICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICd3aW4zMiBmb3JtYXQgc2hvdWxkIGZvcm1hdCB3aW5kb3dzIFBhcnNlZFBhdGggd2l0aCByb290IGFuZCBkaXInKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XG4gICAgICAgIGRpcjogJ0M6XFxcXHBhdGhcXFxcZGlyJyxcbiAgICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcbiAgICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICd3aW4zMiBmb3JtYXQgc2hvdWxkIGZvcm1hdCB3aW5kb3dzIFBhcnNlZFBhdGggd2l0aCBkaXInKTtcbiAgICB9XG4gICAgdGVzdFBvc2l4Rm9ybWF0KCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ0M6XFxcXHBhdGhcXFxcZGlyL2ZpbGUudHh0JywgaXNvbW9ycGhpY1BhdGgucG9zaXguZm9ybWF0KHtcbiAgICAgICAgZGlyOiAnQzpcXFxccGF0aFxcXFxkaXInLFxuICAgICAgICBiYXNlOiAnZmlsZS50eHQnLFxuICAgICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3Bvc2l4IGZvcm1hdCBzaG91bGQgbm90IGZvcm1hdCB3aW5kb3dzIFBhcnNlZFBhdGgnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvaG9tZS91c2VyL2Rpci9maWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLnBvc2l4LmZvcm1hdCh7XG4gICAgICAgIHJvb3Q6ICcvaWdub3JlZCcsXG4gICAgICAgIGRpcjogJy9ob21lL3VzZXIvZGlyJyxcbiAgICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcbiAgICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICdwb3NpeCBmb3JtYXQgc2hvdWxkIGZvcm1hdCBwb3NpeCBQYXJzZWRQYXRoIHdpdGggcm9vdCBhbmQgZGlyJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC5wb3NpeC5mb3JtYXQoe1xuICAgICAgICBkaXI6ICcvaG9tZS91c2VyL2RpcicsXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAncG9zaXggZm9ybWF0IHNob3VsZCBmb3JtYXQgcG9zaXggUGFyc2VkUGF0aCB3aXRoIGRpcicpO1xuICAgIH1cbiAgICB0ZXN0V2luMzJBYnNvbHV0ZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCcvL3NlcnZlcicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHBvc2l4IGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICB0cnVlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCdcXFxcXFxcXHNlcnZlcicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIHRydWUsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJ0M6L2Zvby8uLicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIHRydWUsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJ0M6XFxcXGZvb1xcXFwuLicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCdiYXJcXFxcYmF6JyksXG4gICAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcmVsYXRpdmUgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCdiYXIvYmF6JyksXG4gICAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgcmVsYXRpdmUgcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCcuJyksXG4gICAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHJlbGF0aXZlIHBvc2l4IG9wZXJhdG9yJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeEFic29sdXRlKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIHRydWUsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJy8vc2VydmVyJyksXG4gICAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgcG9zaXggYWJzb2x1dGUgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIHRydWUsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJy9iYXovLi4nKSxcbiAgICAgICAgJ3Bvc2l4IGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciBwb3NpeCBhYnNvbHV0ZSBwYXRoIHdpdGggcmVsYXRpdmUgb3BlcmF0b3Igc3VmZml4JyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ1xcXFxcXFxcc2VydmVyJyksXG4gICAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdDOi9mb28vLi4nKSxcbiAgICAgICAgJ3Bvc2l4IGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3Igd2luZG93cyBhYnNvbHV0ZSBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ0M6XFxcXGZvb1xcXFwuLicpLFxuICAgICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnYmFyXFxcXGJheicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIHJlbGF0aXZlIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnYmFyL2JheicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHJlbGF0aXZlIHBvc2l4IHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnLicpLFxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHJlbGF0aXZlIHBvc2l4IG9wZXJhdG9yJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RXaW4zMkpvaW4oKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXGZvb1xcXFxiYXJcXFxcYmF6XFxcXGFzZGYnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5qb2luKCdDOlxcXFxmb28nLCAnYmFyJywgJ2JhelxcXFxhc2RmJywgJ3F1dXgnLCAnLi4nKSxcbiAgICAgICAgJ3dpbjMyIGpvaW4gc2hvdWxkIHJldHVybiBqb2luZWQgd2luZG93cyBwYXRoIGdpdmVuIHdpbmRvd3MgZnJhZ21lbnRzJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ1xcXFxmb29cXFxcYmFyXFxcXGJhelxcXFxhc2RmJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuam9pbignL2ZvbycsICdiYXInLCAnYmF6L2FzZGYnLCAncXV1eCcsICcuLicpLFxuICAgICAgICAnd2luMzIgam9pbiBzaG91bGQgcmV0dXJuIGpvaW5lZCB3aW5kb3dzIHBhdGggZ2l2ZW4gcG9zaXggZnJhZ21lbnRzJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeEpvaW4oKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ1xcXFxmb28vYmFyL2JhelxcXFxhc2RmJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguam9pbignXFxcXGZvbycsICdiYXInLCAnYmF6XFxcXGFzZGYnLCAncXV1eCcsICcuLicpLFxuICAgICAgICAncG9zaXggam9pbiBzaG91bGQgbm90IHJldHVybiBqb2luZWQgcG9zaXggcGF0aCBnaXZlbiB3aW5kb3dzIGZyYWdtZW50cycsXG4gICAgICApO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcvZm9vL2Jhci9iYXovYXNkZicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmpvaW4oJy9mb28nLCAnYmFyJywgJ2Jhei9hc2RmJywgJ3F1dXgnLCAnLi4nKSxcbiAgICAgICAgJ3Bvc2l4IGpvaW4gc2hvdWxkIHJldHVybiBqb2luZWQgcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0V2luMzJOb3JtYWxpemUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXHRlbXBcXFxcZm9vXFxcXGJhcicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLm5vcm1hbGl6ZSgnQzovLy8vdGVtcFxcXFxcXFxcL1xcXFwvXFxcXC9mb28vYmFyJyksXG4gICAgICAgICd3aW4zMiBzaG91bGQgbm9ybWFsaXplIG1peGVkIHBhdGggdG8gd2luZG93cyBzZXBlcmF0b3InLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnQzpcXFxcdGVtcFxcXFxmb29cXFxcJyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIubm9ybWFsaXplKCdDOlxcXFx0ZW1wXFxcXFxcXFxmb29cXFxcYmFyXFxcXC4uXFxcXCcpLFxuICAgICAgICAnd2luMzIgc2hvdWxkIG5vcm1hbGl6ZSB3aW5kb3dzIHBhdGggdG8gd2luZG93cyBzZXBlcmF0b3InLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnXFxcXGZvb1xcXFxiYXJcXFxcYmF6XFxcXGFzZGYnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5ub3JtYWxpemUoJy9mb28vYmFyLy9iYXovYXNkZi9xdXV4Ly4uJyksXG4gICAgICAgICd3aW5kMzIgc2hvdWxkIG5vcm1hbGl6ZSBwb3NpeCBwYXRoIHRvIHdpbmRvd3Mgc2VwZXJhdG9yJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeE5vcm1hbGl6ZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnQzpcXFxcdGVtcFxcXFxcXFxcZm9vXFxcXGJhclxcXFwuLlxcXFwnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5ub3JtYWxpemUoJ0M6XFxcXHRlbXBcXFxcXFxcXGZvb1xcXFxiYXJcXFxcLi5cXFxcJyksXG4gICAgICAgICdwb3NpeCBzaG91bGQgbm90IG5vcm1hbGl6ZSB3aW5kb3dzIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnL2Zvby9iYXIvYmF6L2FzZGYnLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5ub3JtYWxpemUoJy9mb28vYmFyLy9iYXovYXNkZi9xdXV4Ly4uJyksXG4gICAgICAgICdwb3NpeCBzaG91bGQgbm9ybWFsaXplIHBvc2l4IHBhdGggdG8gcG9zaXggc2VwZXJhdG9yJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RXaW4zMlBhcnNlKCkge1xuICAgICAgY29uc3QgcGFyc2VkUG9zaXggPSBpc29tb3JwaGljUGF0aC53aW4zMi5wYXJzZSgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvJywgcGFyc2VkUG9zaXgucm9vdCwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIHJvb3QnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvaG9tZS91c2VyL2RpcicsIHBhcnNlZFBvc2l4LmRpciwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGRpcicpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUudHh0JywgcGFyc2VkUG9zaXguYmFzZSwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGJhc2UnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcudHh0JywgcGFyc2VkUG9zaXguZXh0LCAnd2luMzIgc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggZXh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnZmlsZScsIHBhcnNlZFBvc2l4Lm5hbWUsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBuYW1lJyk7XG5cbiAgICAgIGNvbnN0IHBhcnNlZFdpbmRvd3MgPSBpc29tb3JwaGljUGF0aC53aW4zMi5wYXJzZSgnQzpcXFxccGF0aFxcXFxkaXJcXFxcZmlsZS50eHQnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFwnLCBwYXJzZWRXaW5kb3dzLnJvb3QsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIHJvb3QnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpcicsIHBhcnNlZFdpbmRvd3MuZGlyLCAnd2luMzIgc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBkaXInKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlLnR4dCcsIHBhcnNlZFdpbmRvd3MuYmFzZSwgJ3dpbjMyIHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggYmFzZScpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy50eHQnLCBwYXJzZWRXaW5kb3dzLmV4dCwgJ3dpbjMyIHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggZXh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnZmlsZScsIHBhcnNlZFdpbmRvd3MubmFtZSwgJ3dpbjMyIHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggbmFtZScpO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhQYXJzZSgpIHtcbiAgICAgIGNvbnN0IHBhcnNlZFBvc2l4ID0gaXNvbW9ycGhpY1BhdGgucG9zaXgucGFyc2UoJy9ob21lL3VzZXIvZGlyL2ZpbGUudHh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhcnNlZFBvc2l4LnJvb3QsICdwb3NpeCBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCByb290Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXInLCBwYXJzZWRQb3NpeC5kaXIsICdwb3NpeCBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBkaXInKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlLnR4dCcsIHBhcnNlZFBvc2l4LmJhc2UsICdwb3NpeCBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBiYXNlJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFBvc2l4LmV4dCwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGV4dCcpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUnLCBwYXJzZWRQb3NpeC5uYW1lLCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggbmFtZScpO1xuXG4gICAgICBjb25zdCBwYXJzZWRXaW5kb3dzID0gaXNvbW9ycGhpY1BhdGgucG9zaXgucGFyc2UoJ0M6XFxcXHBhdGhcXFxcZGlyXFxcXGZpbGUudHh0Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnJywgcGFyc2VkV2luZG93cy5yb290LCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCByb290Jyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnJywgcGFyc2VkV2luZG93cy5kaXIsICdwb3NpeCBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGRpcicpO1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ0M6XFxcXHBhdGhcXFxcZGlyXFxcXGZpbGUudHh0JywgcGFyc2VkV2luZG93cy5iYXNlLCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBiYXNlJyk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFdpbmRvd3MuZXh0LCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBleHQnKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlJywgcGFyc2VkV2luZG93cy5uYW1lLCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBuYW1lJyk7XG4gICAgfVxuICAgIHRlc3RXaW4zMlJlc29sdmUoKSB7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXGZvb1xcXFxiYXJcXFxcYmF6JyxcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIucmVzb2x2ZSgnQzpcXFxcZm9vXFxcXGJhcicsICcuXFxcXGJheicpLFxuICAgICAgICAnd2luMzIgc2hvdWxkIHJlc29sdmUgd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJ1xcXFxmb29cXFxcYmFyXFxcXGJheicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLnJlc29sdmUoJy9mb28vYmFyJywgJy4vYmF6JyksXG4gICAgICAgICd3aW4zMiBzaG91bGQgcmVzb2x2ZSBwb3NpeCBwYXRoIHRvIHdpbmRvd3MgZm9ybWF0JyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3NpeFJlc29sdmUoKSB7XG4gICAgICB0aGlzLmFyZU5vdElkZW50aWNhbChcbiAgICAgICAgJ0M6XFxcXGZvb1xcXFxiYXIvLlxcXFxiYXonLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5yZXNvbHZlKCdDOlxcXFxmb29cXFxcYmFyJywgJy5cXFxcYmF6JyksXG4gICAgICAgICdwb3NpeCBzaG91bGQgbm90IHJlc29sdmUgd2luZG93cyBwYXRoJyxcbiAgICAgICk7XG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcbiAgICAgICAgJy9mb28vYmFyL2JheicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LnJlc29sdmUoJy9mb28vYmFyJywgJy4vYmF6JyksXG4gICAgICAgICdwb3NpeCBzaG91bGQgcmVzb2x2ZSBwb3NpeCBwYXRoJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRlc3RXaW4zMlJlbGF0aXZlKCkge1xuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXG4gICAgICAgICcuLlxcXFwuLlxcXFxpbXBsXFxcXGJiYicsXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLnJlbGF0aXZlKCdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJywgJ0M6XFxcXG9yYW5kZWFcXFxcaW1wbFxcXFxiYmInKSxcbiAgICAgICAgJ3dpbjMyIHNob3VsZCByZWxhdGl2ZSB3aW5kb3dzIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInLFxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5yZWxhdGl2ZSgnL2RhdGEvb3JhbmRlYS90ZXN0L2FhYScsICcvZGF0YS9vcmFuZGVhL2ltcGwvYmJiJyksXG4gICAgICAgICd3aW4zMiBzaG91bGQgcmVsYXRpdmUgcG9zaXggcGF0aCB0byB3aW5kb3dzIGZvcm1hdCcsXG4gICAgICApO1xuICAgIH1cbiAgICB0ZXN0UG9zaXhSZWxhdGl2ZSgpIHtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLi4vLlxcXFxiYXonLCBpc29tb3JwaGljUGF0aC5wb3NpeC5yZWxhdGl2ZSgnQzpcXFxcZm9vXFxcXGJhcicsICcuXFxcXGJheicpLFxuICAgICAgICAncG9zaXggc2hvdWxkIG5vdCByZWxhdGl2ZSB3aW5kb3dzIHBhdGgnLFxuICAgICAgKTtcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxuICAgICAgICAnLi4vLi4vaW1wbC9iYmInLFxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5yZWxhdGl2ZSgnL2RhdGEvb3JhbmRlYS90ZXN0L2FhYScsICcvZGF0YS9vcmFuZGVhL2ltcGwvYmJiJyksXG4gICAgICAgICdwb3NpeCBzaG91bGQgcmVsYXRpdmUgcG9zaXggcGF0aCcsXG4gICAgICApO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9QYXRoLk5vZGUuc3BlYy50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcbmltcG9ydCB7IGlzV2luLCBpc01hYywgaXNOb2RlLCBpc0Jyb3dzZXIgfSBmcm9tICcuLi9saWIvcGxhdGZvcm0nO1xuXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1TcGVjIGV4dGVuZHMgdHNVbml0LlRlc3RDbGFzcyB7XG4gICAgdGVzdE9zKCkge1xuICAgICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICd3aW4zMicpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcbiAgICAgIHRoaXMuaXNUcnVlKGlzV2luKCksICdpc1dpbiBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHdpbmRvd3MgcGxhdGZvcm0gaWQ6IFwid2luMzJcIicpO1xuICAgICAgdGhpcy5pc0ZhbHNlKGlzTWFjKCksICdpc01hYyBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIHBsYXRmb3JtIGlkOiBcIndpbjMyXCInKTtcbiAgICAgIChwcm9jZXNzIGFzIGFueSkuX19kZWZpbmVHZXR0ZXJfXygncGxhdGZvcm0nLCAoKSA9PiAnZGFyd2luJyk7IC8vIHN0dWIgcGxhdGZvcm0gY2FsbFxuICAgICAgdGhpcy5pc0ZhbHNlKGlzV2luKCksICdpc1dpbiBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciBtYWMgcGxhdGZvcm0gaWQ6IFwiZGFyd2luXCInKTtcbiAgICAgIHRoaXMuaXNUcnVlKGlzTWFjKCksICdpc01hYyBzaG91bGQgcmV0dXJuIHRydWUgZm9yIG1hYyBwbGF0Zm9ybSBpZDogXCJkYXJ3aW5cIicpO1xuICAgIH1cbiAgICB0ZXN0RW52KCkge1xuICAgICAgdGhpcy5pc1RydWUoaXNOb2RlKCksICdpc05vZGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciBub2RlIHNwZWMnKTtcbiAgICAgIHRoaXMuaXNGYWxzZShpc0Jyb3dzZXIoKSwgJ2lzQnJvd3NlciBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciBicm93c2VyIHNwZWMnKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L1BsYXRmb3JtLk5vZGUuc3BlYy50cyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInV0aWxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widXRpbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpc29tb3JwaGljLXBhdGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpc29tb3JwaGljLXBhdGhcIl0gPSBmYWN0b3J5KHJvb3RbXCJ1dGlsXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXRoXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuY29uc3QgcGxhdGZvcm1fMSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5jb25zdCBub29wXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuY29uc3QgdW5zdXBwb3J0ZWRNZXRob2RzID0ge1xuICAgIHJlc29sdmU6IG5vb3BfMS5ub29wLFxuICAgIHJlbGF0aXZlOiBub29wXzEubm9vcCxcbn07XG5jb25zdCB3aW4zMlJ1bnRpbWUgPSBwYXRoXzEud2luMzI7XG5leHBvcnRzLndpbjMyID0gd2luMzJSdW50aW1lO1xuY29uc3QgcG9zaXhSdW50aW1lID0gcGF0aF8xLnBvc2l4O1xuZXhwb3J0cy5wb3NpeCA9IHBvc2l4UnVudGltZTtcbmxldCBkZWZhdWx0RXhwb3J0O1xuaWYgKHBsYXRmb3JtXzEuaXNXaW4oKSkge1xuICAgIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCB3aW4zMlJ1bnRpbWUpO1xufVxuZWxzZSB7XG4gICAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIHBvc2l4UnVudGltZSk7XG59XG5sZXQgbm9ybWFsaXplUnVudGltZTtcbmV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplUnVudGltZTtcbmxldCBqb2luUnVudGltZTtcbmV4cG9ydHMuam9pbiA9IGpvaW5SdW50aW1lO1xubGV0IHJlc29sdmVSdW50aW1lO1xuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZVJ1bnRpbWU7XG5sZXQgaXNBYnNvbHV0ZVJ1bnRpbWU7XG5leHBvcnRzLmlzQWJzb2x1dGUgPSBpc0Fic29sdXRlUnVudGltZTtcbmxldCByZWxhdGl2ZVJ1bnRpbWU7XG5leHBvcnRzLnJlbGF0aXZlID0gcmVsYXRpdmVSdW50aW1lO1xubGV0IGRpcm5hbWVSdW50aW1lO1xuZXhwb3J0cy5kaXJuYW1lID0gZGlybmFtZVJ1bnRpbWU7XG5sZXQgYmFzZW5hbWVSdW50aW1lO1xuZXhwb3J0cy5iYXNlbmFtZSA9IGJhc2VuYW1lUnVudGltZTtcbmxldCBleHRuYW1lUnVudGltZTtcbmV4cG9ydHMuZXh0bmFtZSA9IGV4dG5hbWVSdW50aW1lO1xubGV0IHNlcFJ1bnRpbWU7XG5leHBvcnRzLnNlcFJ1bnRpbWUgPSBzZXBSdW50aW1lO1xubGV0IGRlbGltaXRlclJ1bnRpbWU7XG5leHBvcnRzLmRlbGltaXRlciA9IGRlbGltaXRlclJ1bnRpbWU7XG5sZXQgcGFyc2VSdW50aW1lO1xuZXhwb3J0cy5wYXJzZSA9IHBhcnNlUnVudGltZTtcbmxldCBmb3JtYXRSdW50aW1lO1xuZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXRSdW50aW1lO1xuaWYgKHBsYXRmb3JtXzEuaXNXaW4oKSkge1xuICAgIGV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplUnVudGltZSA9IHdpbjMyUnVudGltZS5ub3JtYWxpemU7XG4gICAgZXhwb3J0cy5qb2luID0gam9pblJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuam9pbjtcbiAgICBleHBvcnRzLnJlc29sdmUgPSByZXNvbHZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZXNvbHZlO1xuICAgIGV4cG9ydHMuaXNBYnNvbHV0ZSA9IGlzQWJzb2x1dGVSdW50aW1lID0gd2luMzJSdW50aW1lLmlzQWJzb2x1dGU7XG4gICAgZXhwb3J0cy5yZWxhdGl2ZSA9IHJlbGF0aXZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZWxhdGl2ZTtcbiAgICBleHBvcnRzLmRpcm5hbWUgPSBkaXJuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5kaXJuYW1lO1xuICAgIGV4cG9ydHMuYmFzZW5hbWUgPSBiYXNlbmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuYmFzZW5hbWU7XG4gICAgZXhwb3J0cy5leHRuYW1lID0gZXh0bmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZXh0bmFtZTtcbiAgICBleHBvcnRzLnNlcFJ1bnRpbWUgPSBzZXBSdW50aW1lID0gd2luMzJSdW50aW1lLnNlcDtcbiAgICBleHBvcnRzLmRlbGltaXRlciA9IGRlbGltaXRlclJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGVsaW1pdGVyO1xuICAgIGV4cG9ydHMucGFyc2UgPSBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XG4gICAgZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXRSdW50aW1lID0gd2luMzJSdW50aW1lLmZvcm1hdDtcbn1cbmVsc2Uge1xuICAgIGV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplUnVudGltZSA9IHBvc2l4UnVudGltZS5ub3JtYWxpemU7XG4gICAgZXhwb3J0cy5qb2luID0gam9pblJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuam9pbjtcbiAgICBleHBvcnRzLnJlc29sdmUgPSByZXNvbHZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZXNvbHZlO1xuICAgIGV4cG9ydHMuaXNBYnNvbHV0ZSA9IGlzQWJzb2x1dGVSdW50aW1lID0gcG9zaXhSdW50aW1lLmlzQWJzb2x1dGU7XG4gICAgZXhwb3J0cy5yZWxhdGl2ZSA9IHJlbGF0aXZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZWxhdGl2ZTtcbiAgICBleHBvcnRzLmRpcm5hbWUgPSBkaXJuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5kaXJuYW1lO1xuICAgIGV4cG9ydHMuYmFzZW5hbWUgPSBiYXNlbmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuYmFzZW5hbWU7XG4gICAgZXhwb3J0cy5leHRuYW1lID0gZXh0bmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZXh0bmFtZTtcbiAgICBleHBvcnRzLnNlcFJ1bnRpbWUgPSBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcbiAgICBleHBvcnRzLmRlbGltaXRlciA9IGRlbGltaXRlclJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGVsaW1pdGVyO1xuICAgIGV4cG9ydHMucGFyc2UgPSBwYXJzZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucGFyc2U7XG4gICAgZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXRSdW50aW1lID0gcG9zaXhSdW50aW1lLmZvcm1hdDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRFeHBvcnQ7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcblxyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygwKSk7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm5vb3AgPSAoZnJvbSwgdG8pID0+IHtcbiAgICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNNYWMgPSAoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3NcbiAgICAgICAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICAgICAgICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ2RhcndpbicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICAgICAgICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcbmV4cG9ydHMuaXNXaW4gPSAoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3NcbiAgICAgICAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICAgICAgICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ3dpbjMyJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignd2luJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZXhwb3J0cy5pc0Jyb3dzZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufTtcbmV4cG9ydHMuaXNOb2RlID0gKCkgPT4ge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0F4TURZMlpEUmlOV1kzWlRsbVpURm1PVGhsTUNJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmNHRjBhQzUwY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDNCaGRHZ3ZjR0YwYUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWRITWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMjV2YjNBdWRITWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMM0JzWVhSbWIzSnRMblJ6SWl3aWQyVmljR0ZqYXpvdkx5OWxlSFJsY201aGJDQmNJblYwYVd4Y0lpSmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0QlExWkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4dFJFRkJNa01zWTBGQll6czdRVUZGZWtRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFEwRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1FVRkRka1FzZVVOQlFXbERMR1ZCUVdVN1FVRkRhRVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc09FUkJRWE5FTEN0RVFVRXJSRHM3UVVGRmNrZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN08wRkRhRVZCTEhORFFVRnRSVHRCUVVOdVJTd3dRMEZCYlVNN1FVRkRia01zYzBOQlFUaENPMEZCUlRsQ0xFMUJRVTBzYTBKQlFXdENMRWRCUVVjN1NVRkRla0lzVDBGQlR5eEZRVUZGTEZkQlFVazdTVUZEWWl4UlFVRlJMRVZCUVVVc1YwRkJTVHREUVVObUxFTkJRVU03UVVGRlJpeE5RVUZOTEZsQlFWa3NSMEZCUnl4WlFVRlRMRU5CUVVNN1FVRnBSV0lzTmtKQlFVczdRVUZvUlhaQ0xFMUJRVTBzV1VGQldTeEhRVUZITEZsQlFWTXNRMEZCUXp0QlFTdEVZaXcyUWtGQlN6dEJRVGRFZGtJc1NVRkJTU3hoUVVGaExFTkJRVU03UVVGRGJFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1owSkJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTmFMR0ZCUVdFc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOc1JDeERRVUZETzBGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRUaXhoUVVGaExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU03UVVGRGJFUXNRMEZCUXp0QlFVTkVMRWxCUVVrc1owSkJRV2RDTEVOQlFVTTdRVUV5UTBNc2NVTkJRVk03UVVFeFF5OUNMRWxCUVVrc1YwRkJWeXhEUVVGRE8wRkJNa05ETERKQ1FVRkpPMEZCTVVOeVFpeEpRVUZKTEdOQlFXTXNRMEZCUXp0QlFUSkRReXhwUTBGQlR6dEJRVEZETTBJc1NVRkJTU3hwUWtGQmFVSXNRMEZCUXp0QlFUSkRReXgxUTBGQlZUdEJRVEZEYWtNc1NVRkJTU3hsUVVGbExFTkJRVU03UVVFeVEwTXNiVU5CUVZFN1FVRXhRemRDTEVsQlFVa3NZMEZCWXl4RFFVRkRPMEZCTWtORExHbERRVUZQTzBGQk1VTXpRaXhKUVVGSkxHVkJRV1VzUTBGQlF6dEJRVEpEUXl4dFEwRkJVVHRCUVRGRE4wSXNTVUZCU1N4alFVRmpMRU5CUVVNN1FVRXlRME1zYVVOQlFVODdRVUV4UXpOQ0xFbEJRVWtzVlVGQlZTeERRVUZETzBGQk1rTkRMR2REUVVGVk8wRkJNVU14UWl4SlFVRkpMR2RDUVVGblFpeERRVUZETzBGQk1rTkRMSEZEUVVGVE8wRkJNVU12UWl4SlFVRkpMRmxCUVZrc1EwRkJRenRCUVRKRFF5dzJRa0ZCU3p0QlFURkRka0lzU1VGQlNTeGhRVUZoTEVOQlFVTTdRVUV5UTBNc0swSkJRVTA3UVVGNlEzcENMRVZCUVVVc1EwRkJReXhEUVVGRExHZENRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRXaXh2UTBGQlowSXNSMEZCUnl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRekZETERCQ1FVRlhMRWRCUVVjc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5vUXl4blEwRkJZeXhIUVVGSExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZEZEVNc2MwTkJRV2xDTEVkQlFVY3NXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNMVF5eHJRMEZCWlN4SFFVRkhMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGVFTXNaME5CUVdNc1IwRkJSeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzUkRMR3REUVVGbExFZEJRVWNzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTjRReXhuUTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRkRU1zSzBKQlFWVXNSMEZCUnl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRE8wbEJRemxDTEc5RFFVRm5RaXhIUVVGSExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZETVVNc05FSkJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTJ4RExEaENRVUZoTEVkQlFVY3NXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVOMFF5eERRVUZETzBGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRUaXh2UTBGQlowSXNSMEZCUnl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRekZETERCQ1FVRlhMRWRCUVVjc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5vUXl4blEwRkJZeXhIUVVGSExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZEZEVNc2MwTkJRV2xDTEVkQlFVY3NXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNMVF5eHJRMEZCWlN4SFFVRkhMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGVFTXNaME5CUVdNc1IwRkJSeXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzUkRMR3REUVVGbExFZEJRVWNzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTjRReXhuUTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRkRU1zSzBKQlFWVXNSMEZCUnl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRE8wbEJRemxDTEc5RFFVRm5RaXhIUVVGSExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZETVVNc05FSkJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTJ4RExEaENRVUZoTEVkQlFVY3NXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVOMFF5eERRVUZETzBGQlJVUXNhMEpCUVdVc1lVRkJZU3hEUVVGRE96czdPenM3T3p0QlF6TkVOMEk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN08wRkJSMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xHdENRVUZyUWp0QlFVTnVRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZGQlFWRXNiMEpCUVc5Q08wRkJRelZDTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxGRkJRVkVzVlVGQlZUdEJRVU5zUWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhkQ1FVRjNRaXhGUVVGRk96dEJRVVV4UWp0QlFVTkJPMEZCUTBFc2RVSkJRWFZDTEVsQlFVazdPMEZCUlROQ096dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2IwTkJRVzlETEZOQlFWTTdRVUZETjBNN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEhOQ1FVRnpRanRCUVVOMlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h2UTBGQmIwTTdRVUZEY0VNN1FVRkRRU3huUWtGQlowSXNSVUZCUlR0QlFVTnNRaXh4UTBGQmNVTXNSMEZCUnp0QlFVTjRRenM3UVVGRlFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzV1VGQldUdEJRVU0zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxDdENRVUVyUWl3eVFrRkJNa0k3UVVGRE1VUTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRXNiMEpCUVc5Q096czdRVUZIY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEVzTmtKQlFUWkNMRWxCUVVrN1FVRkRha003T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHZRMEZCYjBNc09FSkJRVGhDTzBGQlEyeEZPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzYzBKQlFYTkNPMEZCUTNaRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzV1VGQldUdEJRVU0zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNLMEpCUVN0Q0xITkNRVUZ6UWp0QlFVTnlSRHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRibTVDUVN4cFEwRkJkVUk3T3pzN096czdPenM3UVVOQlZpeFpRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRlpMRVZCUVVVc1JVRkJWU3hGUVVGVkxFVkJRVVU3U1VGRGRrUXNUVUZCVFN4TFFVRkxMRU5CUVVNc2RVTkJRWFZETEVOQlFVTXNRMEZCUXp0QlFVTjJSQ3hEUVVGRExFTkJRVU03T3pzN096czdPenM3UVVOR1Z5eGhRVUZMTEVkQlFVY3NSMEZCV1N4RlFVRkZPMGxCUTJwRExFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVODdWMEZEVWl4UFFVRlBMRTlCUVU4c1EwRkJReXhSUVVGUkxFdEJRVXNzVVVGQlVUdFhRVU53UXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRMME1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTmtMRU5CUVVNN1NVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4VFFVRlRMRXRCUVVzc1YwRkJWenRYUVVONFF5eFBRVUZQTEZOQlFWTXNRMEZCUXl4UlFVRlJMRXRCUVVzc1VVRkJVVHRYUVVOMFF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTk9MRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRFppeERRVUZETzBGQlEwZ3NRMEZCUXl4RFFVRkRPMEZCUlZjc1lVRkJTeXhIUVVGSExFZEJRVmtzUlVGQlJUdEpRVU5xUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUE8xZEJRMUlzVDBGQlR5eFBRVUZQTEVOQlFVTXNVVUZCVVN4TFFVRkxMRkZCUVZFN1YwRkRjRU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6bERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRFpDeERRVUZETzBsQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzVTBGQlV5eExRVUZMTEZkQlFWYzdWMEZEZEVNc1QwRkJUeXhUUVVGVExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRTdWMEZEZEVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFRpeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTJZc1EwRkJRenRCUVVOSUxFTkJRVU1zUTBGQlF6dEJRVVZYTEdsQ1FVRlRMRWRCUVVjc1IwRkJXU3hGUVVGRk8wbEJRM0pETEUxQlFVMHNRMEZCUXl4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWExFTkJRVU03UVVGRGRrTXNRMEZCUXl4RFFVRkRPMEZCUlZjc1kwRkJUU3hIUVVGSExFZEJRVmtzUlVGQlJUdEpRVU5zUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ5eEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRmRCUVZjc1EwRkJRenRCUVVONlJTeERRVUZETEVOQlFVTTdPenM3T3pzN1FVTnNRMFlzYVVNaUxDSm1hV3hsSWpvaWFYTnZiVzl5Y0docFl5MXdZWFJvTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpZFhScGJGd2lLU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYQ0oxZEdsc1hDSmRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwWlhod2IzSjBjMXRjSW1semIyMXZjbkJvYVdNdGNHRjBhRndpWFNBOUlHWmhZM1J2Y25rb2NtVnhkV2x5WlNoY0luVjBhV3hjSWlrcE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJbWx6YjIxdmNuQm9hV010Y0dGMGFGd2lYU0E5SUdaaFkzUnZjbmtvY205dmRGdGNJblYwYVd4Y0lsMHBPMXh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjgxWDE4cElIdGNibkpsZEhWeWJpQmNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z2FXUmxiblJwZEhrZ1puVnVZM1JwYjI0Z1ptOXlJR05oYkd4cGJtY2dhR0Z5Ylc5dWVTQnBiWEJ2Y25SeklIZHBkR2dnZEdobElHTnZjbkpsWTNRZ1kyOXVkR1Y0ZEZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VwSUhzZ2NtVjBkWEp1SUhaaGJIVmxPeUI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWEhSbGJuVnRaWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFoyVjBPaUJuWlhSMFpYSmNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBeUtUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NBeE1EWTJaRFJpTldZM1pUbG1aVEZtT1RobE1DSXNJbWx0Y0c5eWRDQjdJSGRwYmpNeUlHRnpJSGRwYmpNeVFtRnpaU3dnY0c5emFYZ2dZWE1nY0c5emFYaENZWE5sSUgwZ1puSnZiU0FuY0dGMGFDOXdZWFJvSnp0Y2JtbHRjRzl5ZENCN0lHbHpWMmx1SUgwZ1puSnZiU0FuTGk5d2JHRjBabTl5YlNjN1hHNXBiWEJ2Y25RZ2V5QnViMjl3SUgwZ1puSnZiU0FuTGk5dWIyOXdKenRjYmx4dVkyOXVjM1FnZFc1emRYQndiM0owWldSTlpYUm9iMlJ6SUQwZ2UxeHVJQ0J5WlhOdmJIWmxPaUJ1YjI5d0xGeHVJQ0J5Wld4aGRHbDJaVG9nYm05dmNDeGNibjA3WEc1Y2JtTnZibk4wSUhkcGJqTXlVblZ1ZEdsdFpTQTlJSGRwYmpNeVFtRnpaVHRjYm1OdmJuTjBJSEJ2YzJsNFVuVnVkR2x0WlNBOUlIQnZjMmw0UW1GelpUdGNibHh1YkdWMElHUmxabUYxYkhSRmVIQnZjblE3WEc1cFppQW9hWE5YYVc0b0tTa2dlMXh1SUNCa1pXWmhkV3gwUlhod2IzSjBJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnZDJsdU16SlNkVzUwYVcxbEtUdGNibjBnWld4elpTQjdYRzRnSUdSbFptRjFiSFJGZUhCdmNuUWdQU0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0J3YjNOcGVGSjFiblJwYldVcE8xeHVmVnh1YkdWMElHNXZjbTFoYkdsNlpWSjFiblJwYldVN1hHNXNaWFFnYW05cGJsSjFiblJwYldVN1hHNXNaWFFnY21WemIyeDJaVkoxYm5ScGJXVTdYRzVzWlhRZ2FYTkJZbk52YkhWMFpWSjFiblJwYldVN1hHNXNaWFFnY21Wc1lYUnBkbVZTZFc1MGFXMWxPMXh1YkdWMElHUnBjbTVoYldWU2RXNTBhVzFsTzF4dWJHVjBJR0poYzJWdVlXMWxVblZ1ZEdsdFpUdGNibXhsZENCbGVIUnVZVzFsVW5WdWRHbHRaVHRjYm14bGRDQnpaWEJTZFc1MGFXMWxPMXh1YkdWMElHUmxiR2x0YVhSbGNsSjFiblJwYldVN1hHNXNaWFFnY0dGeWMyVlNkVzUwYVcxbE8xeHViR1YwSUdadmNtMWhkRkoxYm5ScGJXVTdYRzVjYm1sbUlDaHBjMWRwYmlncEtTQjdYRzRnSUc1dmNtMWhiR2w2WlZKMWJuUnBiV1VnUFNCM2FXNHpNbEoxYm5ScGJXVXVibTl5YldGc2FYcGxPMXh1SUNCcWIybHVVblZ1ZEdsdFpTQTlJSGRwYmpNeVVuVnVkR2x0WlM1cWIybHVPMXh1SUNCeVpYTnZiSFpsVW5WdWRHbHRaU0E5SUhkcGJqTXlVblZ1ZEdsdFpTNXlaWE52YkhabE8xeHVJQ0JwYzBGaWMyOXNkWFJsVW5WdWRHbHRaU0E5SUhkcGJqTXlVblZ1ZEdsdFpTNXBjMEZpYzI5c2RYUmxPMXh1SUNCeVpXeGhkR2wyWlZKMWJuUnBiV1VnUFNCM2FXNHpNbEoxYm5ScGJXVXVjbVZzWVhScGRtVTdYRzRnSUdScGNtNWhiV1ZTZFc1MGFXMWxJRDBnZDJsdU16SlNkVzUwYVcxbExtUnBjbTVoYldVN1hHNGdJR0poYzJWdVlXMWxVblZ1ZEdsdFpTQTlJSGRwYmpNeVVuVnVkR2x0WlM1aVlYTmxibUZ0WlR0Y2JpQWdaWGgwYm1GdFpWSjFiblJwYldVZ1BTQjNhVzR6TWxKMWJuUnBiV1V1WlhoMGJtRnRaVHRjYmlBZ2MyVndVblZ1ZEdsdFpTQTlJSGRwYmpNeVVuVnVkR2x0WlM1elpYQTdYRzRnSUdSbGJHbHRhWFJsY2xKMWJuUnBiV1VnUFNCM2FXNHpNbEoxYm5ScGJXVXVaR1ZzYVcxcGRHVnlPMXh1SUNCd1lYSnpaVkoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdWNHRnljMlU3WEc0Z0lHWnZjbTFoZEZKMWJuUnBiV1VnUFNCM2FXNHpNbEoxYm5ScGJXVXVabTl5YldGME8xeHVmU0JsYkhObElIdGNiaUFnYm05eWJXRnNhWHBsVW5WdWRHbHRaU0E5SUhCdmMybDRVblZ1ZEdsdFpTNXViM0p0WVd4cGVtVTdYRzRnSUdwdmFXNVNkVzUwYVcxbElEMGdjRzl6YVhoU2RXNTBhVzFsTG1wdmFXNDdYRzRnSUhKbGMyOXNkbVZTZFc1MGFXMWxJRDBnY0c5emFYaFNkVzUwYVcxbExuSmxjMjlzZG1VN1hHNGdJR2x6UVdKemIyeDFkR1ZTZFc1MGFXMWxJRDBnY0c5emFYaFNkVzUwYVcxbExtbHpRV0p6YjJ4MWRHVTdYRzRnSUhKbGJHRjBhWFpsVW5WdWRHbHRaU0E5SUhCdmMybDRVblZ1ZEdsdFpTNXlaV3hoZEdsMlpUdGNiaUFnWkdseWJtRnRaVkoxYm5ScGJXVWdQU0J3YjNOcGVGSjFiblJwYldVdVpHbHlibUZ0WlR0Y2JpQWdZbUZ6Wlc1aGJXVlNkVzUwYVcxbElEMGdjRzl6YVhoU2RXNTBhVzFsTG1KaGMyVnVZVzFsTzF4dUlDQmxlSFJ1WVcxbFVuVnVkR2x0WlNBOUlIQnZjMmw0VW5WdWRHbHRaUzVsZUhSdVlXMWxPMXh1SUNCelpYQlNkVzUwYVcxbElEMGdjRzl6YVhoU2RXNTBhVzFsTG5ObGNEdGNiaUFnWkdWc2FXMXBkR1Z5VW5WdWRHbHRaU0E5SUhCdmMybDRVblZ1ZEdsdFpTNWtaV3hwYldsMFpYSTdYRzRnSUhCaGNuTmxVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1d1lYSnpaVHRjYmlBZ1ptOXliV0YwVW5WdWRHbHRaU0E5SUhCdmMybDRVblZ1ZEdsdFpTNW1iM0p0WVhRN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1JsWm1GMWJIUkZlSEJ2Y25RN1hHNWxlSEJ2Y25RZ2UxeHVJQ0J1YjNKdFlXeHBlbVZTZFc1MGFXMWxJR0Z6SUc1dmNtMWhiR2w2WlN4Y2JpQWdhbTlwYmxKMWJuUnBiV1VnWVhNZ2FtOXBiaXhjYmlBZ2NtVnpiMngyWlZKMWJuUnBiV1VnWVhNZ2NtVnpiMngyWlN4Y2JpQWdhWE5CWW5OdmJIVjBaVkoxYm5ScGJXVWdZWE1nYVhOQlluTnZiSFYwWlN4Y2JpQWdjbVZzWVhScGRtVlNkVzUwYVcxbElHRnpJSEpsYkdGMGFYWmxMRnh1SUNCa2FYSnVZVzFsVW5WdWRHbHRaU0JoY3lCa2FYSnVZVzFsTEZ4dUlDQmlZWE5sYm1GdFpWSjFiblJwYldVZ1lYTWdZbUZ6Wlc1aGJXVXNYRzRnSUdWNGRHNWhiV1ZTZFc1MGFXMWxJR0Z6SUdWNGRHNWhiV1VzWEc0Z0lITmxjRkoxYm5ScGJXVWdZWE1nYzJWd1VuVnVkR2x0WlN4Y2JpQWdaR1ZzYVcxcGRHVnlVblZ1ZEdsdFpTQmhjeUJrWld4cGJXbDBaWElzWEc0Z0lIQmhjbk5sVW5WdWRHbHRaU0JoY3lCd1lYSnpaU3hjYmlBZ1ptOXliV0YwVW5WdWRHbHRaU0JoY3lCbWIzSnRZWFFzWEc0Z0lIQnZjMmw0VW5WdWRHbHRaU0JoY3lCd2IzTnBlQ3hjYmlBZ2QybHVNekpTZFc1MGFXMWxJR0Z6SUhkcGJqTXlMRnh1ZlR0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOXdZWFJvTG5Seklpd2lMeThnUTI5d2VYSnBaMmgwSUVwdmVXVnVkQ3dnU1c1akxpQmhibVFnYjNSb1pYSWdUbTlrWlNCamIyNTBjbWxpZFhSdmNuTXVYSEpjYmk4dlhISmNiaTh2SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoWEhKY2JpOHZJR052Y0hrZ2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JrYjJOMWJXVnVkR0YwYVc5dUlHWnBiR1Z6SUNoMGFHVmNjbHh1THk4Z1hDSlRiMlowZDJGeVpWd2lLU3dnZEc4Z1pHVmhiQ0JwYmlCMGFHVWdVMjltZEhkaGNtVWdkMmwwYUc5MWRDQnlaWE4wY21samRHbHZiaXdnYVc1amJIVmthVzVuWEhKY2JpOHZJSGRwZEdodmRYUWdiR2x0YVhSaGRHbHZiaUIwYUdVZ2NtbG5hSFJ6SUhSdklIVnpaU3dnWTI5d2VTd2diVzlrYVdaNUxDQnRaWEpuWlN3Z2NIVmliR2x6YUN4Y2NseHVMeThnWkdsemRISnBZblYwWlN3Z2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUhSb1pTQlRiMlowZDJGeVpTd2dZVzVrSUhSdklIQmxjbTFwZEZ4eVhHNHZMeUJ3WlhKemIyNXpJSFJ2SUhkb2IyMGdkR2hsSUZOdlpuUjNZWEpsSUdseklHWjFjbTVwYzJobFpDQjBieUJrYnlCemJ5d2djM1ZpYW1WamRDQjBieUIwYUdWY2NseHVMeThnWm05c2JHOTNhVzVuSUdOdmJtUnBkR2x2Ym5NNlhISmNiaTh2WEhKY2JpOHZJRlJvWlNCaFltOTJaU0JqYjNCNWNtbG5hSFFnYm05MGFXTmxJR0Z1WkNCMGFHbHpJSEJsY20xcGMzTnBiMjRnYm05MGFXTmxJSE5vWVd4c0lHSmxJR2x1WTJ4MVpHVmtYSEpjYmk4dklHbHVJR0ZzYkNCamIzQnBaWE1nYjNJZ2MzVmljM1JoYm5ScFlXd2djRzl5ZEdsdmJuTWdiMllnZEdobElGTnZablIzWVhKbExseHlYRzR2TDF4eVhHNHZMeUJVU0VVZ1UwOUdWRmRCVWtVZ1NWTWdVRkpQVmtsRVJVUWdYQ0pCVXlCSlUxd2lMQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUlpJRTlHSUVGT1dTQkxTVTVFTENCRldGQlNSVk5UWEhKY2JpOHZJRTlTSUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBaY2NseHVMeThnVFVWU1EwaEJUbFJCUWtsTVNWUlpMQ0JHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGx4eVhHNHZMeUJPVHlCRlZrVk9WQ0JUU0VGTVRDQlVTRVVnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3hjY2x4dUx5OGdSRUZOUVVkRlV5QlBVaUJQVkVoRlVpQk1TVUZDU1V4SlZGa3NJRmRJUlZSSVJWSWdTVTRnUVU0Z1FVTlVTVTlPSUU5R0lFTlBUbFJTUVVOVUxDQlVUMUpVSUU5U1hISmNiaTh2SUU5VVNFVlNWMGxUUlN3Z1FWSkpVMGxPUnlCR1VrOU5MQ0JQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VWY2NseHVMeThnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9JRlJJUlNCVFQwWlVWMEZTUlM1Y2NseHVYSEpjYmlkMWMyVWdjM1J5YVdOMEp6dGNjbHh1WEhKY2JseHlYRzUyWVhJZ2FYTlhhVzVrYjNkeklEMGdjSEp2WTJWemN5NXdiR0YwWm05eWJTQTlQVDBnSjNkcGJqTXlKenRjY2x4dWRtRnlJSFYwYVd3Z1BTQnlaWEYxYVhKbEtDZDFkR2xzSnlrN1hISmNibHh5WEc1Y2NseHVMeThnY21WemIyeDJaWE1nTGlCaGJtUWdMaTRnWld4bGJXVnVkSE1nYVc0Z1lTQndZWFJvSUdGeWNtRjVJSGRwZEdnZ1pHbHlaV04wYjNKNUlHNWhiV1Z6SUhSb1pYSmxYSEpjYmk4dklHMTFjM1FnWW1VZ2JtOGdjMnhoYzJobGN5QnZjaUJrWlhacFkyVWdibUZ0WlhNZ0tHTTZYRndwSUdsdUlIUm9aU0JoY25KaGVWeHlYRzR2THlBb2MyOGdZV3h6YnlCdWJ5QnNaV0ZrYVc1bklHRnVaQ0IwY21GcGJHbHVaeUJ6YkdGemFHVnpJQzBnYVhRZ1pHOWxjeUJ1YjNRZ1pHbHpkR2x1WjNWcGMyaGNjbHh1THk4Z2NtVnNZWFJwZG1VZ1lXNWtJR0ZpYzI5c2RYUmxJSEJoZEdoektWeHlYRzVtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZCY25KaGVTaHdZWEowY3l3Z1lXeHNiM2RCWW05MlpWSnZiM1FwSUh0Y2NseHVJQ0IyWVhJZ2NtVnpJRDBnVzEwN1hISmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCd1lYSjBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHlYRzRnSUNBZ2RtRnlJSEFnUFNCd1lYSjBjMXRwWFR0Y2NseHVYSEpjYmlBZ0lDQXZMeUJwWjI1dmNtVWdaVzF3ZEhrZ2NHRnlkSE5jY2x4dUlDQWdJR2xtSUNnaGNDQjhmQ0J3SUQwOVBTQW5MaWNwWEhKY2JpQWdJQ0FnSUdOdmJuUnBiblZsTzF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2h3SUQwOVBTQW5MaTRuS1NCN1hISmNiaUFnSUNBZ0lHbG1JQ2h5WlhNdWJHVnVaM1JvSUNZbUlISmxjMXR5WlhNdWJHVnVaM1JvSUMwZ01WMGdJVDA5SUNjdUxpY3BJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYTXVjRzl3S0NrN1hISmNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZV3hzYjNkQlltOTJaVkp2YjNRcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhNdWNIVnphQ2duTGk0bktUdGNjbHh1SUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdjbVZ6TG5CMWMyZ29jQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdjbVZ6TzF4eVhHNTlYSEpjYmx4eVhHNHZMeUJ5WlhSMWNtNXpJR0Z1SUdGeWNtRjVJSGRwZEdnZ1pXMXdkSGtnWld4bGJXVnVkSE1nY21WdGIzWmxaQ0JtY205dElHVnBkR2hsY2lCbGJtUWdiMllnZEdobElHbHVjSFYwWEhKY2JpOHZJR0Z5Y21GNUlHOXlJSFJvWlNCdmNtbG5hVzVoYkNCaGNuSmhlU0JwWmlCdWJ5QmxiR1Z0Wlc1MGN5QnVaV1ZrSUhSdklHSmxJSEpsYlc5MlpXUmNjbHh1Wm5WdVkzUnBiMjRnZEhKcGJVRnljbUY1S0dGeWNpa2dlMXh5WEc0Z0lIWmhjaUJzWVhOMFNXNWtaWGdnUFNCaGNuSXViR1Z1WjNSb0lDMGdNVHRjY2x4dUlDQjJZWElnYzNSaGNuUWdQU0F3TzF4eVhHNGdJR1p2Y2lBb095QnpkR0Z5ZENBOFBTQnNZWE4wU1c1a1pYZzdJSE4wWVhKMEt5c3BJSHRjY2x4dUlDQWdJR2xtSUNoaGNuSmJjM1JoY25SZEtWeHlYRzRnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhaaGNpQmxibVFnUFNCc1lYTjBTVzVrWlhnN1hISmNiaUFnWm05eUlDZzdJR1Z1WkNBK1BTQXdPeUJsYm1RdExTa2dlMXh5WEc0Z0lDQWdhV1lnS0dGeWNsdGxibVJkS1Z4eVhHNGdJQ0FnSUNCaWNtVmhhenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR2xtSUNoemRHRnlkQ0E5UFQwZ01DQW1KaUJsYm1RZ1BUMDlJR3hoYzNSSmJtUmxlQ2xjY2x4dUlDQWdJSEpsZEhWeWJpQmhjbkk3WEhKY2JpQWdhV1lnS0hOMFlYSjBJRDRnWlc1a0tWeHlYRzRnSUNBZ2NtVjBkWEp1SUZ0ZE8xeHlYRzRnSUhKbGRIVnliaUJoY25JdWMyeHBZMlVvYzNSaGNuUXNJR1Z1WkNBcklERXBPMXh5WEc1OVhISmNibHh5WEc0dkx5QlNaV2RsZUNCMGJ5QnpjR3hwZENCaElIZHBibVJ2ZDNNZ2NHRjBhQ0JwYm5SdklIUm9jbVZsSUhCaGNuUnpPaUJiS2l3Z1pHVjJhV05sTENCemJHRnphQ3hjY2x4dUx5OGdkR0ZwYkYwZ2QybHVaRzkzY3kxdmJteDVYSEpjYm5aaGNpQnpjR3hwZEVSbGRtbGpaVkpsSUQxY2NseHVJQ0FnSUM5ZUtGdGhMWHBCTFZwZE9ueGJYRnhjWEZ4Y0wxMTdNbjFiWGx4Y1hGeGNYQzlkSzF0Y1hGeGNYRnd2WFN0YlhseGNYRnhjWEM5ZEt5ay9LRnRjWEZ4Y1hGd3ZYU2svS0Z0Y1hITmNYRk5kS2o4cEpDODdYSEpjYmx4eVhHNHZMeUJTWldkbGVDQjBieUJ6Y0d4cGRDQjBhR1VnZEdGcGJDQndZWEowSUc5bUlIUm9aU0JoWW05MlpTQnBiblJ2SUZzcUxDQmthWElzSUdKaGMyVnVZVzFsTENCbGVIUmRYSEpjYm5aaGNpQnpjR3hwZEZSaGFXeFNaU0E5WEhKY2JpQWdJQ0F2WGloYlhGeHpYRnhUWFNvL0tTZ29QenBjWEM1N01Td3lmWHhiWGx4Y1hGeGNYQzlkS3o5OEtTaGNYQzViWGk1Y1hDOWNYRnhjWFNwOEtTa29QenBiWEZ4Y1hGeGNMMTBxS1NRdk8xeHlYRzVjY2x4dWRtRnlJSGRwYmpNeUlEMGdlMzA3WEhKY2JseHlYRzR2THlCR2RXNWpkR2x2YmlCMGJ5QnpjR3hwZENCaElHWnBiR1Z1WVcxbElHbHVkRzhnVzNKdmIzUXNJR1JwY2l3Z1ltRnpaVzVoYldVc0lHVjRkRjFjY2x4dVpuVnVZM1JwYjI0Z2QybHVNekpUY0d4cGRGQmhkR2dvWm1sc1pXNWhiV1VwSUh0Y2NseHVJQ0F2THlCVFpYQmhjbUYwWlNCa1pYWnBZMlVyYzJ4aGMyZ2dabkp2YlNCMFlXbHNYSEpjYmlBZ2RtRnlJSEpsYzNWc2RDQTlJSE53YkdsMFJHVjJhV05sVW1VdVpYaGxZeWhtYVd4bGJtRnRaU2tzWEhKY2JpQWdJQ0FnSUdSbGRtbGpaU0E5SUNoeVpYTjFiSFJiTVYwZ2ZId2dKeWNwSUNzZ0tISmxjM1ZzZEZzeVhTQjhmQ0FuSnlrc1hISmNiaUFnSUNBZ0lIUmhhV3dnUFNCeVpYTjFiSFJiTTEwZ2ZId2dKeWM3WEhKY2JpQWdMeThnVTNCc2FYUWdkR2hsSUhSaGFXd2dhVzUwYnlCa2FYSXNJR0poYzJWdVlXMWxJR0Z1WkNCbGVIUmxibk5wYjI1Y2NseHVJQ0IyWVhJZ2NtVnpkV3gwTWlBOUlITndiR2wwVkdGcGJGSmxMbVY0WldNb2RHRnBiQ2tzWEhKY2JpQWdJQ0FnSUdScGNpQTlJSEpsYzNWc2RESmJNVjBzWEhKY2JpQWdJQ0FnSUdKaGMyVnVZVzFsSUQwZ2NtVnpkV3gwTWxzeVhTeGNjbHh1SUNBZ0lDQWdaWGgwSUQwZ2NtVnpkV3gwTWxzelhUdGNjbHh1SUNCeVpYUjFjbTRnVzJSbGRtbGpaU3dnWkdseUxDQmlZWE5sYm1GdFpTd2daWGgwWFR0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdkMmx1TXpKVGRHRjBVR0YwYUNod1lYUm9LU0I3WEhKY2JpQWdkbUZ5SUhKbGMzVnNkQ0E5SUhOd2JHbDBSR1YyYVdObFVtVXVaWGhsWXlod1lYUm9LU3hjY2x4dUlDQWdJQ0FnWkdWMmFXTmxJRDBnY21WemRXeDBXekZkSUh4OElDY25MRnh5WEc0Z0lDQWdJQ0JwYzFWdVl5QTlJQ0VoWkdWMmFXTmxJQ1ltSUdSbGRtbGpaVnN4WFNBaFBUMGdKem9uTzF4eVhHNGdJSEpsZEhWeWJpQjdYSEpjYmlBZ0lDQmtaWFpwWTJVNklHUmxkbWxqWlN4Y2NseHVJQ0FnSUdselZXNWpPaUJwYzFWdVl5eGNjbHh1SUNBZ0lHbHpRV0p6YjJ4MWRHVTZJR2x6Vlc1aklIeDhJQ0VoY21WemRXeDBXekpkTENBdkx5QlZUa01nY0dGMGFITWdZWEpsSUdGc2QyRjVjeUJoWW5OdmJIVjBaVnh5WEc0Z0lDQWdkR0ZwYkRvZ2NtVnpkV3gwV3pOZFhISmNiaUFnZlR0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdibTl5YldGc2FYcGxWVTVEVW05dmRDaGtaWFpwWTJVcElIdGNjbHh1SUNCeVpYUjFjbTRnSjF4Y1hGeGNYRnhjSnlBcklHUmxkbWxqWlM1eVpYQnNZV05sS0M5ZVcxeGNYRnhjWEM5ZEt5OHNJQ2NuS1M1eVpYQnNZV05sS0M5YlhGeGNYRnhjTDEwckwyY3NJQ2RjWEZ4Y0p5azdYSEpjYm4xY2NseHVYSEpjYmk4dklIQmhkR2d1Y21WemIyeDJaU2hiWm5KdmJTQXVMaTVkTENCMGJ5bGNjbHh1ZDJsdU16SXVjbVZ6YjJ4MlpTQTlJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJSFpoY2lCeVpYTnZiSFpsWkVSbGRtbGpaU0E5SUNjbkxGeHlYRzRnSUNBZ0lDQnlaWE52YkhabFpGUmhhV3dnUFNBbkp5eGNjbHh1SUNBZ0lDQWdjbVZ6YjJ4MlpXUkJZbk52YkhWMFpTQTlJR1poYkhObE8xeHlYRzVjY2x4dUlDQm1iM0lnS0haaGNpQnBJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0F0SURFN0lHa2dQajBnTFRFN0lHa3RMU2tnZTF4eVhHNGdJQ0FnZG1GeUlIQmhkR2c3WEhKY2JpQWdJQ0JwWmlBb2FTQStQU0F3S1NCN1hISmNiaUFnSUNBZ0lIQmhkR2dnUFNCaGNtZDFiV1Z1ZEhOYmFWMDdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0Z5WlhOdmJIWmxaRVJsZG1salpTa2dlMXh5WEc0Z0lDQWdJQ0J3WVhSb0lEMGdjSEp2WTJWemN5NWpkMlFvS1R0Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUM4dklGZHBibVJ2ZDNNZ2FHRnpJSFJvWlNCamIyNWpaWEIwSUc5bUlHUnlhWFpsTFhOd1pXTnBabWxqSUdOMWNuSmxiblFnZDI5eWEybHVaMXh5WEc0Z0lDQWdJQ0F2THlCa2FYSmxZM1J2Y21sbGN5NGdTV1lnZDJVbmRtVWdjbVZ6YjJ4MlpXUWdZU0JrY21sMlpTQnNaWFIwWlhJZ1luVjBJRzV2ZENCNVpYUWdZVzVjY2x4dUlDQWdJQ0FnTHk4Z1lXSnpiMngxZEdVZ2NHRjBhQ3dnWjJWMElHTjNaQ0JtYjNJZ2RHaGhkQ0JrY21sMlpTNGdWMlVuY21VZ2MzVnlaU0IwYUdVZ1pHVjJhV05sSUdseklHNXZkRnh5WEc0Z0lDQWdJQ0F2THlCaGJpQjFibU1nY0dGMGFDQmhkQ0IwYUdseklIQnZhVzUwY3l3Z1ltVmpZWFZ6WlNCMWJtTWdjR0YwYUhNZ1lYSmxJR0ZzZDJGNWN5QmhZbk52YkhWMFpTNWNjbHh1SUNBZ0lDQWdjR0YwYUNBOUlIQnliMk5sYzNNdVpXNTJXeWM5SnlBcklISmxjMjlzZG1Wa1JHVjJhV05sWFR0Y2NseHVJQ0FnSUNBZ0x5OGdWbVZ5YVdaNUlIUm9ZWFFnWVNCa2NtbDJaUzFzYjJOaGJDQmpkMlFnZDJGeklHWnZkVzVrSUdGdVpDQjBhR0YwSUdsMElHRmpkSFZoYkd4NUlIQnZhVzUwYzF4eVhHNGdJQ0FnSUNBdkx5QjBieUJ2ZFhJZ1pISnBkbVV1SUVsbUlHNXZkQ3dnWkdWbVlYVnNkQ0IwYnlCMGFHVWdaSEpwZG1VbmN5QnliMjkwTGx4eVhHNGdJQ0FnSUNCcFppQW9JWEJoZEdnZ2ZId2djR0YwYUM1emRXSnpkSElvTUN3Z015a3VkRzlNYjNkbGNrTmhjMlVvS1NBaFBUMWNjbHh1SUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVZrUkdWMmFXTmxMblJ2VEc5M1pYSkRZWE5sS0NrZ0t5QW5YRnhjWENjcElIdGNjbHh1SUNBZ0lDQWdJQ0J3WVhSb0lEMGdjbVZ6YjJ4MlpXUkVaWFpwWTJVZ0t5QW5YRnhjWENjN1hISmNiaUFnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2THlCVGEybHdJR1Z0Y0hSNUlHRnVaQ0JwYm5aaGJHbGtJR1Z1ZEhKcFpYTmNjbHh1SUNBZ0lHbG1JQ2doZFhScGJDNXBjMU4wY21sdVp5aHdZWFJvS1NrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RCY21kMWJXVnVkSE1nZEc4Z2NHRjBhQzV5WlhOdmJIWmxJRzExYzNRZ1ltVWdjM1J5YVc1bmN5Y3BPMXh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doY0dGMGFDa2dlMXh5WEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCMllYSWdjbVZ6ZFd4MElEMGdkMmx1TXpKVGRHRjBVR0YwYUNod1lYUm9LU3hjY2x4dUlDQWdJQ0FnSUNCa1pYWnBZMlVnUFNCeVpYTjFiSFF1WkdWMmFXTmxMRnh5WEc0Z0lDQWdJQ0FnSUdselZXNWpJRDBnY21WemRXeDBMbWx6Vlc1akxGeHlYRzRnSUNBZ0lDQWdJR2x6UVdKemIyeDFkR1VnUFNCeVpYTjFiSFF1YVhOQlluTnZiSFYwWlN4Y2NseHVJQ0FnSUNBZ0lDQjBZV2xzSUQwZ2NtVnpkV3gwTG5SaGFXdzdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tHUmxkbWxqWlNBbUpseHlYRzRnSUNBZ0lDQWdJSEpsYzI5c2RtVmtSR1YyYVdObElDWW1YSEpjYmlBZ0lDQWdJQ0FnWkdWMmFXTmxMblJ2VEc5M1pYSkRZWE5sS0NrZ0lUMDlJSEpsYzI5c2RtVmtSR1YyYVdObExuUnZURzkzWlhKRFlYTmxLQ2twSUh0Y2NseHVJQ0FnSUNBZ0x5OGdWR2hwY3lCd1lYUm9JSEJ2YVc1MGN5QjBieUJoYm05MGFHVnlJR1JsZG1salpTQnpieUJwZENCcGN5QnViM1FnWVhCd2JHbGpZV0pzWlZ4eVhHNGdJQ0FnSUNCamIyNTBhVzUxWlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvSVhKbGMyOXNkbVZrUkdWMmFXTmxLU0I3WEhKY2JpQWdJQ0FnSUhKbGMyOXNkbVZrUkdWMmFXTmxJRDBnWkdWMmFXTmxPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdhV1lnS0NGeVpYTnZiSFpsWkVGaWMyOXNkWFJsS1NCN1hISmNiaUFnSUNBZ0lISmxjMjlzZG1Wa1ZHRnBiQ0E5SUhSaGFXd2dLeUFuWEZ4Y1hDY2dLeUJ5WlhOdmJIWmxaRlJoYVd3N1hISmNiaUFnSUNBZ0lISmxjMjlzZG1Wa1FXSnpiMngxZEdVZ1BTQnBjMEZpYzI5c2RYUmxPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDaHlaWE52YkhabFpFUmxkbWxqWlNBbUppQnlaWE52YkhabFpFRmljMjlzZFhSbEtTQjdYSEpjYmlBZ0lDQWdJR0p5WldGck8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0x5OGdRMjl1ZG1WeWRDQnpiR0Z6YUdWeklIUnZJR0poWTJ0emJHRnphR1Z6SUhkb1pXNGdZSEpsYzI5c2RtVmtSR1YyYVdObFlDQndiMmx1ZEhNZ2RHOGdZVzRnVlU1RFhISmNiaUFnTHk4Z2NtOXZkQzRnUVd4emJ5QnpjWFZoYzJnZ2JYVnNkR2x3YkdVZ2MyeGhjMmhsY3lCcGJuUnZJR0VnYzJsdVoyeGxJRzl1WlNCM2FHVnlaU0JoY0hCeWIzQnlhV0YwWlM1Y2NseHVJQ0JwWmlBb2FYTlZibU1wSUh0Y2NseHVJQ0FnSUhKbGMyOXNkbVZrUkdWMmFXTmxJRDBnYm05eWJXRnNhWHBsVlU1RFVtOXZkQ2h5WlhOdmJIWmxaRVJsZG1salpTazdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQXZMeUJCZENCMGFHbHpJSEJ2YVc1MElIUm9aU0J3WVhSb0lITm9iM1ZzWkNCaVpTQnlaWE52YkhabFpDQjBieUJoSUdaMWJHd2dZV0p6YjJ4MWRHVWdjR0YwYUN4Y2NseHVJQ0F2THlCaWRYUWdhR0Z1Wkd4bElISmxiR0YwYVhabElIQmhkR2h6SUhSdklHSmxJSE5oWm1VZ0tHMXBaMmgwSUdoaGNIQmxiaUIzYUdWdUlIQnliMk5sYzNNdVkzZGtLQ2xjY2x4dUlDQXZMeUJtWVdsc2N5bGNjbHh1WEhKY2JpQWdMeThnVG05eWJXRnNhWHBsSUhSb1pTQjBZV2xzSUhCaGRHaGNjbHh1SUNCeVpYTnZiSFpsWkZSaGFXd2dQU0J1YjNKdFlXeHBlbVZCY25KaGVTaHlaWE52YkhabFpGUmhhV3d1YzNCc2FYUW9MMXRjWEZ4Y1hGd3ZYU3N2S1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBaGNtVnpiMngyWldSQlluTnZiSFYwWlNrdWFtOXBiaWduWEZ4Y1hDY3BPMXh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdLSEpsYzI5c2RtVmtSR1YyYVdObElDc2dLSEpsYzI5c2RtVmtRV0p6YjJ4MWRHVWdQeUFuWEZ4Y1hDY2dPaUFuSnlrZ0t5QnlaWE52YkhabFpGUmhhV3dwSUh4OFhISmNiaUFnSUNBZ0lDQWdJQ2N1Snp0Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1M2FXNHpNaTV1YjNKdFlXeHBlbVVnUFNCbWRXNWpkR2x2Ymlod1lYUm9LU0I3WEhKY2JpQWdkbUZ5SUhKbGMzVnNkQ0E5SUhkcGJqTXlVM1JoZEZCaGRHZ29jR0YwYUNrc1hISmNiaUFnSUNBZ0lHUmxkbWxqWlNBOUlISmxjM1ZzZEM1a1pYWnBZMlVzWEhKY2JpQWdJQ0FnSUdselZXNWpJRDBnY21WemRXeDBMbWx6Vlc1akxGeHlYRzRnSUNBZ0lDQnBjMEZpYzI5c2RYUmxJRDBnY21WemRXeDBMbWx6UVdKemIyeDFkR1VzWEhKY2JpQWdJQ0FnSUhSaGFXd2dQU0J5WlhOMWJIUXVkR0ZwYkN4Y2NseHVJQ0FnSUNBZ2RISmhhV3hwYm1kVGJHRnphQ0E5SUM5YlhGeGNYRnhjTDEwa0x5NTBaWE4wS0hSaGFXd3BPMXh5WEc1Y2NseHVJQ0F2THlCT2IzSnRZV3hwZW1VZ2RHaGxJSFJoYVd3Z2NHRjBhRnh5WEc0Z0lIUmhhV3dnUFNCdWIzSnRZV3hwZW1WQmNuSmhlU2gwWVdsc0xuTndiR2wwS0M5YlhGeGNYRnhjTDEwckx5a3NJQ0ZwYzBGaWMyOXNkWFJsS1M1cWIybHVLQ2RjWEZ4Y0p5azdYSEpjYmx4eVhHNGdJR2xtSUNnaGRHRnBiQ0FtSmlBaGFYTkJZbk52YkhWMFpTa2dlMXh5WEc0Z0lDQWdkR0ZwYkNBOUlDY3VKenRjY2x4dUlDQjlYSEpjYmlBZ2FXWWdLSFJoYVd3Z0ppWWdkSEpoYVd4cGJtZFRiR0Z6YUNrZ2UxeHlYRzRnSUNBZ2RHRnBiQ0FyUFNBblhGeGNYQ2M3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0F2THlCRGIyNTJaWEowSUhOc1lYTm9aWE1nZEc4Z1ltRmphM05zWVhOb1pYTWdkMmhsYmlCZ1pHVjJhV05sWUNCd2IybHVkSE1nZEc4Z1lXNGdWVTVESUhKdmIzUXVYSEpjYmlBZ0x5OGdRV3h6YnlCemNYVmhjMmdnYlhWc2RHbHdiR1VnYzJ4aGMyaGxjeUJwYm5SdklHRWdjMmx1WjJ4bElHOXVaU0IzYUdWeVpTQmhjSEJ5YjNCeWFXRjBaUzVjY2x4dUlDQnBaaUFvYVhOVmJtTXBJSHRjY2x4dUlDQWdJR1JsZG1salpTQTlJRzV2Y20xaGJHbDZaVlZPUTFKdmIzUW9aR1YyYVdObEtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lISmxkSFZ5YmlCa1pYWnBZMlVnS3lBb2FYTkJZbk52YkhWMFpTQS9JQ2RjWEZ4Y0p5QTZJQ2NuS1NBcklIUmhhV3c3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1ZDJsdU16SXVhWE5CWW5OdmJIVjBaU0E5SUdaMWJtTjBhVzl1S0hCaGRHZ3BJSHRjY2x4dUlDQnlaWFIxY200Z2QybHVNekpUZEdGMFVHRjBhQ2h3WVhSb0tTNXBjMEZpYzI5c2RYUmxPMXh5WEc1OU8xeHlYRzVjY2x4dWQybHVNekl1YW05cGJpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJSFpoY2lCd1lYUm9jeUE5SUZ0ZE8xeHlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0IyWVhJZ1lYSm5JRDBnWVhKbmRXMWxiblJ6VzJsZE8xeHlYRzRnSUNBZ2FXWWdLQ0YxZEdsc0xtbHpVM1J5YVc1bktHRnlaeWtwSUh0Y2NseHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25RWEpuZFcxbGJuUnpJSFJ2SUhCaGRHZ3VhbTlwYmlCdGRYTjBJR0psSUhOMGNtbHVaM01uS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdsbUlDaGhjbWNwSUh0Y2NseHVJQ0FnSUNBZ2NHRjBhSE11Y0hWemFDaGhjbWNwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dVhISmNiaUFnZG1GeUlHcHZhVzVsWkNBOUlIQmhkR2h6TG1wdmFXNG9KMXhjWEZ3bktUdGNjbHh1WEhKY2JpQWdMeThnVFdGclpTQnpkWEpsSUhSb1lYUWdkR2hsSUdwdmFXNWxaQ0J3WVhSb0lHUnZaWE51SjNRZ2MzUmhjblFnZDJsMGFDQjBkMjhnYzJ4aGMyaGxjeXdnWW1WallYVnpaVnh5WEc0Z0lDOHZJRzV2Y20xaGJHbDZaU2dwSUhkcGJHd2diV2x6ZEdGclpTQnBkQ0JtYjNJZ1lXNGdWVTVESUhCaGRHZ2dkR2hsYmk1Y2NseHVJQ0F2TDF4eVhHNGdJQzh2SUZSb2FYTWdjM1JsY0NCcGN5QnphMmx3Y0dWa0lIZG9aVzRnYVhRZ2FYTWdkbVZ5ZVNCamJHVmhjaUIwYUdGMElIUm9aU0IxYzJWeUlHRmpkSFZoYkd4NVhISmNiaUFnTHk4Z2FXNTBaVzVrWldRZ2RHOGdjRzlwYm5RZ1lYUWdZVzRnVlU1RElIQmhkR2d1SUZSb2FYTWdhWE1nWVhOemRXMWxaQ0IzYUdWdUlIUm9aU0JtYVhKemRGeHlYRzRnSUM4dklHNXZiaTFsYlhCMGVTQnpkSEpwYm1jZ1lYSm5kVzFsYm5SeklITjBZWEowY3lCM2FYUm9JR1Y0WVdOMGJIa2dkSGR2SUhOc1lYTm9aWE1nWm05c2JHOTNaV1FnWW5sY2NseHVJQ0F2THlCaGRDQnNaV0Z6ZENCdmJtVWdiVzl5WlNCdWIyNHRjMnhoYzJnZ1kyaGhjbUZqZEdWeUxseHlYRzRnSUM4dlhISmNiaUFnTHk4Z1RtOTBaU0IwYUdGMElHWnZjaUJ1YjNKdFlXeHBlbVVvS1NCMGJ5QjBjbVZoZENCaElIQmhkR2dnWVhNZ1lXNGdWVTVESUhCaGRHZ2dhWFFnYm1WbFpITWdkRzljY2x4dUlDQXZMeUJvWVhabElHRjBJR3hsWVhOMElESWdZMjl0Y0c5dVpXNTBjeXdnYzI4Z2QyVWdaRzl1SjNRZ1ptbHNkR1Z5SUdadmNpQjBhR0YwSUdobGNtVXVYSEpjYmlBZ0x5OGdWR2hwY3lCdFpXRnVjeUIwYUdGMElIUm9aU0IxYzJWeUlHTmhiaUIxYzJVZ2FtOXBiaUIwYnlCamIyNXpkSEoxWTNRZ1ZVNURJSEJoZEdoeklHWnliMjFjY2x4dUlDQXZMeUJoSUhObGNuWmxjaUJ1WVcxbElHRnVaQ0JoSUhOb1lYSmxJRzVoYldVN0lHWnZjaUJsZUdGdGNHeGxPbHh5WEc0Z0lDOHZJQ0FnY0dGMGFDNXFiMmx1S0NjdkwzTmxjblpsY2ljc0lDZHphR0Z5WlNjcElDMCtJQ2RjWEZ4Y1hGeGNYSE5sY25abGNseGNYRnh6YUdGeVpWeGNKeWxjY2x4dUlDQnBaaUFvSVM5ZVcxeGNYRnhjWEM5ZGV6SjlXMTVjWEZ4Y1hGd3ZYUzh1ZEdWemRDaHdZWFJvYzFzd1hTa3BJSHRjY2x4dUlDQWdJR3B2YVc1bFpDQTlJR3B2YVc1bFpDNXlaWEJzWVdObEtDOWVXMXhjWEZ4Y1hDOWRleklzZlM4c0lDZGNYRnhjSnlrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCeVpYUjFjbTRnZDJsdU16SXVibTl5YldGc2FYcGxLR3B2YVc1bFpDazdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVMeThnY0dGMGFDNXlaV3hoZEdsMlpTaG1jbTl0TENCMGJ5bGNjbHh1THk4Z2FYUWdkMmxzYkNCemIyeDJaU0IwYUdVZ2NtVnNZWFJwZG1VZ2NHRjBhQ0JtY205dElDZG1jbTl0SnlCMGJ5QW5kRzhuTENCbWIzSWdhVzV6ZEdGdVkyVTZYSEpjYmk4dklHWnliMjBnUFNBblF6cGNYRnhjYjNKaGJtUmxZVnhjWEZ4MFpYTjBYRnhjWEdGaFlTZGNjbHh1THk4Z2RHOGdQU0FuUXpwY1hGeGNiM0poYm1SbFlWeGNYRnhwYlhCc1hGeGNYR0ppWWlkY2NseHVMeThnVkdobElHOTFkSEIxZENCdlppQjBhR1VnWm5WdVkzUnBiMjRnYzJodmRXeGtJR0psT2lBbkxpNWNYRnhjTGk1Y1hGeGNhVzF3YkZ4Y1hGeGlZbUluWEhKY2JuZHBiak15TG5KbGJHRjBhWFpsSUQwZ1puVnVZM1JwYjI0b1puSnZiU3dnZEc4cElIdGNjbHh1SUNCbWNtOXRJRDBnZDJsdU16SXVjbVZ6YjJ4MlpTaG1jbTl0S1R0Y2NseHVJQ0IwYnlBOUlIZHBiak15TG5KbGMyOXNkbVVvZEc4cE8xeHlYRzVjY2x4dUlDQXZMeUIzYVc1a2IzZHpJR2x6SUc1dmRDQmpZWE5sSUhObGJuTnBkR2wyWlZ4eVhHNGdJSFpoY2lCc2IzZGxja1p5YjIwZ1BTQm1jbTl0TG5SdlRHOTNaWEpEWVhObEtDazdYSEpjYmlBZ2RtRnlJR3h2ZDJWeVZHOGdQU0IwYnk1MGIweHZkMlZ5UTJGelpTZ3BPMXh5WEc1Y2NseHVJQ0IyWVhJZ2RHOVFZWEowY3lBOUlIUnlhVzFCY25KaGVTaDBieTV6Y0d4cGRDZ25YRnhjWENjcEtUdGNjbHh1WEhKY2JpQWdkbUZ5SUd4dmQyVnlSbkp2YlZCaGNuUnpJRDBnZEhKcGJVRnljbUY1S0d4dmQyVnlSbkp2YlM1emNHeHBkQ2duWEZ4Y1hDY3BLVHRjY2x4dUlDQjJZWElnYkc5M1pYSlViMUJoY25SeklEMGdkSEpwYlVGeWNtRjVLR3h2ZDJWeVZHOHVjM0JzYVhRb0oxeGNYRnduS1NrN1hISmNibHh5WEc0Z0lIWmhjaUJzWlc1bmRHZ2dQU0JOWVhSb0xtMXBiaWhzYjNkbGNrWnliMjFRWVhKMGN5NXNaVzVuZEdnc0lHeHZkMlZ5Vkc5UVlYSjBjeTVzWlc1bmRHZ3BPMXh5WEc0Z0lIWmhjaUJ6WVcxbFVHRnlkSE5NWlc1bmRHZ2dQU0JzWlc1bmRHZzdYSEpjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnYVdZZ0tHeHZkMlZ5Um5KdmJWQmhjblJ6VzJsZElDRTlQU0JzYjNkbGNsUnZVR0Z5ZEhOYmFWMHBJSHRjY2x4dUlDQWdJQ0FnYzJGdFpWQmhjblJ6VEdWdVozUm9JRDBnYVR0Y2NseHVJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JwWmlBb2MyRnRaVkJoY25SelRHVnVaM1JvSUQwOUlEQXBJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQjBienRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSFpoY2lCdmRYUndkWFJRWVhKMGN5QTlJRnRkTzF4eVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNCellXMWxVR0Z5ZEhOTVpXNW5kR2c3SUdrZ1BDQnNiM2RsY2taeWIyMVFZWEowY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh5WEc0Z0lDQWdiM1YwY0hWMFVHRnlkSE11Y0hWemFDZ25MaTRuS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUc5MWRIQjFkRkJoY25SeklEMGdiM1YwY0hWMFVHRnlkSE11WTI5dVkyRjBLSFJ2VUdGeWRITXVjMnhwWTJVb2MyRnRaVkJoY25SelRHVnVaM1JvS1NrN1hISmNibHh5WEc0Z0lISmxkSFZ5YmlCdmRYUndkWFJRWVhKMGN5NXFiMmx1S0NkY1hGeGNKeWs3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1ZDJsdU16SXVYMjFoYTJWTWIyNW5JRDBnWm5WdVkzUnBiMjRvY0dGMGFDa2dlMXh5WEc0Z0lDOHZJRTV2ZEdVNklIUm9hWE1nZDJsc2JDQXFjSEp2WW1GaWJIa3FJSFJvY205M0lITnZiV1YzYUdWeVpTNWNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlRkSEpwYm1jb2NHRjBhQ2twWEhKY2JpQWdJQ0J5WlhSMWNtNGdjR0YwYUR0Y2NseHVYSEpjYmlBZ2FXWWdLQ0Z3WVhSb0tTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z0p5YzdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQjJZWElnY21WemIyeDJaV1JRWVhSb0lEMGdkMmx1TXpJdWNtVnpiMngyWlNod1lYUm9LVHRjY2x4dVhISmNiaUFnYVdZZ0tDOWVXMkV0ZWtFdFdsMWNYRHBjWEZ4Y0x5NTBaWE4wS0hKbGMyOXNkbVZrVUdGMGFDa3BJSHRjY2x4dUlDQWdJQzh2SUhCaGRHZ2dhWE1nYkc5allXd2dabWxzWlhONWMzUmxiU0J3WVhSb0xDQjNhR2xqYUNCdVpXVmtjeUIwYnlCaVpTQmpiMjUyWlhKMFpXUmNjbHh1SUNBZ0lDOHZJSFJ2SUd4dmJtY2dWVTVESUhCaGRHZ3VYSEpjYmlBZ0lDQnlaWFIxY200Z0oxeGNYRnhjWEZ4Y1AxeGNYRnduSUNzZ2NtVnpiMngyWldSUVlYUm9PMXh5WEc0Z0lIMGdaV3h6WlNCcFppQW9MMTVjWEZ4Y1hGeGNYRnRlUHk1ZEx5NTBaWE4wS0hKbGMyOXNkbVZrVUdGMGFDa3BJSHRjY2x4dUlDQWdJQzh2SUhCaGRHZ2dhWE1nYm1WMGQyOXlheUJWVGtNZ2NHRjBhQ3dnZDJocFkyZ2dibVZsWkhNZ2RHOGdZbVVnWTI5dWRtVnlkR1ZrWEhKY2JpQWdJQ0F2THlCMGJ5QnNiMjVuSUZWT1F5QndZWFJvTGx4eVhHNGdJQ0FnY21WMGRYSnVJQ2RjWEZ4Y1hGeGNYRDljWEZ4Y1ZVNURYRnhjWENjZ0t5QnlaWE52YkhabFpGQmhkR2d1YzNWaWMzUnlhVzVuS0RJcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUhCaGRHZzdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVkMmx1TXpJdVpHbHlibUZ0WlNBOUlHWjFibU4wYVc5dUtIQmhkR2dwSUh0Y2NseHVJQ0IyWVhJZ2NtVnpkV3gwSUQwZ2QybHVNekpUY0d4cGRGQmhkR2dvY0dGMGFDa3NYSEpjYmlBZ0lDQWdJSEp2YjNRZ1BTQnlaWE4xYkhSYk1GMHNYSEpjYmlBZ0lDQWdJR1JwY2lBOUlISmxjM1ZzZEZzeFhUdGNjbHh1WEhKY2JpQWdhV1lnS0NGeWIyOTBJQ1ltSUNGa2FYSXBJSHRjY2x4dUlDQWdJQzh2SUU1dklHUnBjbTVoYldVZ2QyaGhkSE52WlhabGNseHlYRzRnSUNBZ2NtVjBkWEp1SUNjdUp6dGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHbG1JQ2hrYVhJcElIdGNjbHh1SUNBZ0lDOHZJRWwwSUdoaGN5QmhJR1JwY201aGJXVXNJSE4wY21sd0lIUnlZV2xzYVc1bklITnNZWE5vWEhKY2JpQWdJQ0JrYVhJZ1BTQmthWEl1YzNWaWMzUnlLREFzSUdScGNpNXNaVzVuZEdnZ0xTQXhLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQnliMjkwSUNzZ1pHbHlPMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibmRwYmpNeUxtSmhjMlZ1WVcxbElEMGdablZ1WTNScGIyNG9jR0YwYUN3Z1pYaDBLU0I3WEhKY2JpQWdkbUZ5SUdZZ1BTQjNhVzR6TWxOd2JHbDBVR0YwYUNod1lYUm9LVnN5WFR0Y2NseHVJQ0F2THlCVVQwUlBPaUJ0WVd0bElIUm9hWE1nWTI5dGNHRnlhWE52YmlCallYTmxMV2x1YzJWdWMybDBhWFpsSUc5dUlIZHBibVJ2ZDNNL1hISmNiaUFnYVdZZ0tHVjRkQ0FtSmlCbUxuTjFZbk4wY2lndE1TQXFJR1Y0ZEM1c1pXNW5kR2dwSUQwOVBTQmxlSFFwSUh0Y2NseHVJQ0FnSUdZZ1BTQm1Mbk4xWW5OMGNpZ3dMQ0JtTG14bGJtZDBhQ0F0SUdWNGRDNXNaVzVuZEdncE8xeHlYRzRnSUgxY2NseHVJQ0J5WlhSMWNtNGdaanRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUzYVc0ek1pNWxlSFJ1WVcxbElEMGdablZ1WTNScGIyNG9jR0YwYUNrZ2UxeHlYRzRnSUhKbGRIVnliaUIzYVc0ek1sTndiR2wwVUdGMGFDaHdZWFJvS1ZzelhUdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNTNhVzR6TWk1bWIzSnRZWFFnUFNCbWRXNWpkR2x2Ymlod1lYUm9UMkpxWldOMEtTQjdYSEpjYmlBZ2FXWWdLQ0YxZEdsc0xtbHpUMkpxWldOMEtIQmhkR2hQWW1wbFkzUXBLU0I3WEhKY2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0Z4eVhHNGdJQ0FnSUNBZ0lGd2lVR0Z5WVcxbGRHVnlJQ2R3WVhSb1QySnFaV04wSnlCdGRYTjBJR0psSUdGdUlHOWlhbVZqZEN3Z2JtOTBJRndpSUNzZ2RIbHdaVzltSUhCaGRHaFBZbXBsWTNSY2NseHVJQ0FnSUNrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCMllYSWdjbTl2ZENBOUlIQmhkR2hQWW1wbFkzUXVjbTl2ZENCOGZDQW5KenRjY2x4dVhISmNiaUFnYVdZZ0tDRjFkR2xzTG1selUzUnlhVzVuS0hKdmIzUXBLU0I3WEhKY2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0Z4eVhHNGdJQ0FnSUNBZ0lGd2lKM0JoZEdoUFltcGxZM1F1Y205dmRDY2diWFZ6ZENCaVpTQmhJSE4wY21sdVp5QnZjaUIxYm1SbFptbHVaV1FzSUc1dmRDQmNJaUFyWEhKY2JpQWdJQ0FnSUNBZ2RIbHdaVzltSUhCaGRHaFBZbXBsWTNRdWNtOXZkRnh5WEc0Z0lDQWdLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSFpoY2lCa2FYSWdQU0J3WVhSb1QySnFaV04wTG1ScGNqdGNjbHh1SUNCMllYSWdZbUZ6WlNBOUlIQmhkR2hQWW1wbFkzUXVZbUZ6WlNCOGZDQW5KenRjY2x4dUlDQnBaaUFvSVdScGNpa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlHSmhjMlU3WEhKY2JpQWdmVnh5WEc0Z0lHbG1JQ2hrYVhKYlpHbHlMbXhsYm1kMGFDQXRJREZkSUQwOVBTQjNhVzR6TWk1elpYQXBJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQmthWElnS3lCaVlYTmxPMXh5WEc0Z0lIMWNjbHh1SUNCeVpYUjFjbTRnWkdseUlDc2dkMmx1TXpJdWMyVndJQ3NnWW1GelpUdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNTNhVzR6TWk1d1lYSnpaU0E5SUdaMWJtTjBhVzl1S0hCaGRHaFRkSEpwYm1jcElIdGNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlRkSEpwYm1jb2NHRjBhRk4wY21sdVp5a3BJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1hDSlFZWEpoYldWMFpYSWdKM0JoZEdoVGRISnBibWNuSUcxMWMzUWdZbVVnWVNCemRISnBibWNzSUc1dmRDQmNJaUFySUhSNWNHVnZaaUJ3WVhSb1UzUnlhVzVuWEhKY2JpQWdJQ0FwTzF4eVhHNGdJSDFjY2x4dUlDQjJZWElnWVd4c1VHRnlkSE1nUFNCM2FXNHpNbE53YkdsMFVHRjBhQ2h3WVhSb1UzUnlhVzVuS1R0Y2NseHVJQ0JwWmlBb0lXRnNiRkJoY25SeklIeDhJR0ZzYkZCaGNuUnpMbXhsYm1kMGFDQWhQVDBnTkNrZ2UxeHlYRzRnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa2x1ZG1Gc2FXUWdjR0YwYUNBblhDSWdLeUJ3WVhSb1UzUnlhVzVuSUNzZ1hDSW5YQ0lwTzF4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z2UxeHlYRzRnSUNBZ2NtOXZkRG9nWVd4c1VHRnlkSE5iTUYwc1hISmNiaUFnSUNCa2FYSTZJR0ZzYkZCaGNuUnpXekJkSUNzZ1lXeHNVR0Z5ZEhOYk1WMHVjMnhwWTJVb01Dd2dMVEVwTEZ4eVhHNGdJQ0FnWW1GelpUb2dZV3hzVUdGeWRITmJNbDBzWEhKY2JpQWdJQ0JsZUhRNklHRnNiRkJoY25Seld6TmRMRnh5WEc0Z0lDQWdibUZ0WlRvZ1lXeHNVR0Z5ZEhOYk1sMHVjMnhwWTJVb01Dd2dZV3hzVUdGeWRITmJNbDB1YkdWdVozUm9JQzBnWVd4c1VHRnlkSE5iTTEwdWJHVnVaM1JvS1Z4eVhHNGdJSDA3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1ZDJsdU16SXVjMlZ3SUQwZ0oxeGNYRnduTzF4eVhHNTNhVzR6TWk1a1pXeHBiV2wwWlhJZ1BTQW5PeWM3WEhKY2JseHlYRzVjY2x4dUx5OGdVM0JzYVhRZ1lTQm1hV3hsYm1GdFpTQnBiblJ2SUZ0eWIyOTBMQ0JrYVhJc0lHSmhjMlZ1WVcxbExDQmxlSFJkTENCMWJtbDRJSFpsY25OcGIyNWNjbHh1THk4Z0ozSnZiM1FuSUdseklHcDFjM1FnWVNCemJHRnphQ3dnYjNJZ2JtOTBhR2x1Wnk1Y2NseHVkbUZ5SUhOd2JHbDBVR0YwYUZKbElEMWNjbHh1SUNBZ0lDOWVLRnhjTHo5OEtTaGJYRnh6WEZ4VFhTby9LU2dvUHpwY1hDNTdNU3d5Zlh4YlhseGNMMTByUDN3cEtGeGNMbHRlTGx4Y0wxMHFmQ2twS0Q4NlcxeGNMMTBxS1NRdk8xeHlYRzUyWVhJZ2NHOXphWGdnUFNCN2ZUdGNjbHh1WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ3YjNOcGVGTndiR2wwVUdGMGFDaG1hV3hsYm1GdFpTa2dlMXh5WEc0Z0lISmxkSFZ5YmlCemNHeHBkRkJoZEdoU1pTNWxlR1ZqS0dacGJHVnVZVzFsS1M1emJHbGpaU2d4S1R0Y2NseHVmVnh5WEc1Y2NseHVYSEpjYmk4dklIQmhkR2d1Y21WemIyeDJaU2hiWm5KdmJTQXVMaTVkTENCMGJ5bGNjbHh1THk4Z2NHOXphWGdnZG1WeWMybHZibHh5WEc1d2IzTnBlQzV5WlhOdmJIWmxJRDBnWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnZG1GeUlISmxjMjlzZG1Wa1VHRjBhQ0E5SUNjbkxGeHlYRzRnSUNBZ0lDQnlaWE52YkhabFpFRmljMjlzZFhSbElEMGdabUZzYzJVN1hISmNibHh5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVRzZ2FTQStQU0F0TVNBbUppQWhjbVZ6YjJ4MlpXUkJZbk52YkhWMFpUc2dhUzB0S1NCN1hISmNiaUFnSUNCMllYSWdjR0YwYUNBOUlDaHBJRDQ5SURBcElEOGdZWEpuZFcxbGJuUnpXMmxkSURvZ2NISnZZMlZ6Y3k1amQyUW9LVHRjY2x4dVhISmNiaUFnSUNBdkx5QlRhMmx3SUdWdGNIUjVJR0Z1WkNCcGJuWmhiR2xrSUdWdWRISnBaWE5jY2x4dUlDQWdJR2xtSUNnaGRYUnBiQzVwYzFOMGNtbHVaeWh3WVhSb0tTa2dlMXh5WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkQmNtZDFiV1Z1ZEhNZ2RHOGdjR0YwYUM1eVpYTnZiSFpsSUcxMWMzUWdZbVVnYzNSeWFXNW5jeWNwTzF4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGNHRjBhQ2tnZTF4eVhHNGdJQ0FnSUNCamIyNTBhVzUxWlR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaWE52YkhabFpGQmhkR2dnUFNCd1lYUm9JQ3NnSnk4bklDc2djbVZ6YjJ4MlpXUlFZWFJvTzF4eVhHNGdJQ0FnY21WemIyeDJaV1JCWW5OdmJIVjBaU0E5SUhCaGRHaGJNRjBnUFQwOUlDY3ZKenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJQzh2SUVGMElIUm9hWE1nY0c5cGJuUWdkR2hsSUhCaGRHZ2djMmh2ZFd4a0lHSmxJSEpsYzI5c2RtVmtJSFJ2SUdFZ1puVnNiQ0JoWW5OdmJIVjBaU0J3WVhSb0xDQmlkWFJjY2x4dUlDQXZMeUJvWVc1a2JHVWdjbVZzWVhScGRtVWdjR0YwYUhNZ2RHOGdZbVVnYzJGbVpTQW9iV2xuYUhRZ2FHRndjR1Z1SUhkb1pXNGdjSEp2WTJWemN5NWpkMlFvS1NCbVlXbHNjeWxjY2x4dVhISmNiaUFnTHk4Z1RtOXliV0ZzYVhwbElIUm9aU0J3WVhSb1hISmNiaUFnY21WemIyeDJaV1JRWVhSb0lEMGdibTl5YldGc2FYcGxRWEp5WVhrb2NtVnpiMngyWldSUVlYUm9Mbk53YkdsMEtDY3ZKeWtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSVhKbGMyOXNkbVZrUVdKemIyeDFkR1VwTG1wdmFXNG9KeThuS1R0Y2NseHVYSEpjYmlBZ2NtVjBkWEp1SUNnb2NtVnpiMngyWldSQlluTnZiSFYwWlNBL0lDY3ZKeUE2SUNjbktTQXJJSEpsYzI5c2RtVmtVR0YwYUNrZ2ZId2dKeTRuTzF4eVhHNTlPMXh5WEc1Y2NseHVMeThnY0dGMGFDNXViM0p0WVd4cGVtVW9jR0YwYUNsY2NseHVMeThnY0c5emFYZ2dkbVZ5YzJsdmJseHlYRzV3YjNOcGVDNXViM0p0WVd4cGVtVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYSEpjYmlBZ2RtRnlJR2x6UVdKemIyeDFkR1VnUFNCd2IzTnBlQzVwYzBGaWMyOXNkWFJsS0hCaGRHZ3BMRnh5WEc0Z0lDQWdJQ0IwY21GcGJHbHVaMU5zWVhOb0lEMGdjR0YwYUNBbUppQndZWFJvVzNCaGRHZ3ViR1Z1WjNSb0lDMGdNVjBnUFQwOUlDY3ZKenRjY2x4dVhISmNiaUFnTHk4Z1RtOXliV0ZzYVhwbElIUm9aU0J3WVhSb1hISmNiaUFnY0dGMGFDQTlJRzV2Y20xaGJHbDZaVUZ5Y21GNUtIQmhkR2d1YzNCc2FYUW9KeThuS1N3Z0lXbHpRV0p6YjJ4MWRHVXBMbXB2YVc0b0p5OG5LVHRjY2x4dVhISmNiaUFnYVdZZ0tDRndZWFJvSUNZbUlDRnBjMEZpYzI5c2RYUmxLU0I3WEhKY2JpQWdJQ0J3WVhSb0lEMGdKeTRuTzF4eVhHNGdJSDFjY2x4dUlDQnBaaUFvY0dGMGFDQW1KaUIwY21GcGJHbHVaMU5zWVhOb0tTQjdYSEpjYmlBZ0lDQndZWFJvSUNzOUlDY3ZKenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQW9hWE5CWW5OdmJIVjBaU0EvSUNjdkp5QTZJQ2NuS1NBcklIQmhkR2c3WEhKY2JuMDdYSEpjYmx4eVhHNHZMeUJ3YjNOcGVDQjJaWEp6YVc5dVhISmNibkJ2YzJsNExtbHpRV0p6YjJ4MWRHVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYSEpjYmlBZ2NtVjBkWEp1SUhCaGRHZ3VZMmhoY2tGMEtEQXBJRDA5UFNBbkx5YzdYSEpjYm4wN1hISmNibHh5WEc0dkx5QndiM05wZUNCMlpYSnphVzl1WEhKY2JuQnZjMmw0TG1wdmFXNGdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0IyWVhJZ2NHRjBhQ0E5SUNjbk8xeHlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0IyWVhJZ2MyVm5iV1Z1ZENBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjY2x4dUlDQWdJR2xtSUNnaGRYUnBiQzVwYzFOMGNtbHVaeWh6WldkdFpXNTBLU2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRITWdkRzhnY0dGMGFDNXFiMmx1SUcxMWMzUWdZbVVnYzNSeWFXNW5jeWNwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYVdZZ0tITmxaMjFsYm5RcElIdGNjbHh1SUNBZ0lDQWdhV1lnS0NGd1lYUm9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2NHRjBhQ0FyUFNCelpXZHRaVzUwTzF4eVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lIQmhkR2dnS3owZ0p5OG5JQ3NnYzJWbmJXVnVkRHRjY2x4dUlDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dUlDQnlaWFIxY200Z2NHOXphWGd1Ym05eWJXRnNhWHBsS0hCaGRHZ3BPMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNiaTh2SUhCaGRHZ3VjbVZzWVhScGRtVW9abkp2YlN3Z2RHOHBYSEpjYmk4dklIQnZjMmw0SUhabGNuTnBiMjVjY2x4dWNHOXphWGd1Y21Wc1lYUnBkbVVnUFNCbWRXNWpkR2x2YmlobWNtOXRMQ0IwYnlrZ2UxeHlYRzRnSUdaeWIyMGdQU0J3YjNOcGVDNXlaWE52YkhabEtHWnliMjBwTG5OMVluTjBjaWd4S1R0Y2NseHVJQ0IwYnlBOUlIQnZjMmw0TG5KbGMyOXNkbVVvZEc4cExuTjFZbk4wY2lneEtUdGNjbHh1WEhKY2JpQWdkbUZ5SUdaeWIyMVFZWEowY3lBOUlIUnlhVzFCY25KaGVTaG1jbTl0TG5Od2JHbDBLQ2N2SnlrcE8xeHlYRzRnSUhaaGNpQjBiMUJoY25SeklEMGdkSEpwYlVGeWNtRjVLSFJ2TG5Od2JHbDBLQ2N2SnlrcE8xeHlYRzVjY2x4dUlDQjJZWElnYkdWdVozUm9JRDBnVFdGMGFDNXRhVzRvWm5KdmJWQmhjblJ6TG14bGJtZDBhQ3dnZEc5UVlYSjBjeTVzWlc1bmRHZ3BPMXh5WEc0Z0lIWmhjaUJ6WVcxbFVHRnlkSE5NWlc1bmRHZ2dQU0JzWlc1bmRHZzdYSEpjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnYVdZZ0tHWnliMjFRWVhKMGMxdHBYU0FoUFQwZ2RHOVFZWEowYzF0cFhTa2dlMXh5WEc0Z0lDQWdJQ0J6WVcxbFVHRnlkSE5NWlc1bmRHZ2dQU0JwTzF4eVhHNGdJQ0FnSUNCaWNtVmhhenRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSFpoY2lCdmRYUndkWFJRWVhKMGN5QTlJRnRkTzF4eVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNCellXMWxVR0Z5ZEhOTVpXNW5kR2c3SUdrZ1BDQm1jbTl0VUdGeWRITXViR1Z1WjNSb095QnBLeXNwSUh0Y2NseHVJQ0FnSUc5MWRIQjFkRkJoY25SekxuQjFjMmdvSnk0dUp5azdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnZkWFJ3ZFhSUVlYSjBjeUE5SUc5MWRIQjFkRkJoY25SekxtTnZibU5oZENoMGIxQmhjblJ6TG5Oc2FXTmxLSE5oYldWUVlYSjBjMHhsYm1kMGFDa3BPMXh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdiM1YwY0hWMFVHRnlkSE11YW05cGJpZ25MeWNwTzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5CdmMybDRMbDl0WVd0bFRHOXVaeUE5SUdaMWJtTjBhVzl1S0hCaGRHZ3BJSHRjY2x4dUlDQnlaWFIxY200Z2NHRjBhRHRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzV3YjNOcGVDNWthWEp1WVcxbElEMGdablZ1WTNScGIyNG9jR0YwYUNrZ2UxeHlYRzRnSUhaaGNpQnlaWE4xYkhRZ1BTQndiM05wZUZOd2JHbDBVR0YwYUNod1lYUm9LU3hjY2x4dUlDQWdJQ0FnY205dmRDQTlJSEpsYzNWc2RGc3dYU3hjY2x4dUlDQWdJQ0FnWkdseUlEMGdjbVZ6ZFd4MFd6RmRPMXh5WEc1Y2NseHVJQ0JwWmlBb0lYSnZiM1FnSmlZZ0lXUnBjaWtnZTF4eVhHNGdJQ0FnTHk4Z1RtOGdaR2x5Ym1GdFpTQjNhR0YwYzI5bGRtVnlYSEpjYmlBZ0lDQnlaWFIxY200Z0p5NG5PMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdhV1lnS0dScGNpa2dlMXh5WEc0Z0lDQWdMeThnU1hRZ2FHRnpJR0VnWkdseWJtRnRaU3dnYzNSeWFYQWdkSEpoYVd4cGJtY2djMnhoYzJoY2NseHVJQ0FnSUdScGNpQTlJR1JwY2k1emRXSnpkSElvTUN3Z1pHbHlMbXhsYm1kMGFDQXRJREVwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY21WMGRYSnVJSEp2YjNRZ0t5QmthWEk3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1Y0c5emFYZ3VZbUZ6Wlc1aGJXVWdQU0JtZFc1amRHbHZiaWh3WVhSb0xDQmxlSFFwSUh0Y2NseHVJQ0IyWVhJZ1ppQTlJSEJ2YzJsNFUzQnNhWFJRWVhSb0tIQmhkR2dwV3pKZE8xeHlYRzRnSUM4dklGUlBSRTg2SUcxaGEyVWdkR2hwY3lCamIyMXdZWEpwYzI5dUlHTmhjMlV0YVc1elpXNXphWFJwZG1VZ2IyNGdkMmx1Wkc5M2N6OWNjbHh1SUNCcFppQW9aWGgwSUNZbUlHWXVjM1ZpYzNSeUtDMHhJQ29nWlhoMExteGxibWQwYUNrZ1BUMDlJR1Y0ZENrZ2UxeHlYRzRnSUNBZ1ppQTlJR1l1YzNWaWMzUnlLREFzSUdZdWJHVnVaM1JvSUMwZ1pYaDBMbXhsYm1kMGFDazdYSEpjYmlBZ2ZWeHlYRzRnSUhKbGRIVnliaUJtTzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5CdmMybDRMbVY0ZEc1aGJXVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYSEpjYmlBZ2NtVjBkWEp1SUhCdmMybDRVM0JzYVhSUVlYUm9LSEJoZEdncFd6TmRPMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibkJ2YzJsNExtWnZjbTFoZENBOUlHWjFibU4wYVc5dUtIQmhkR2hQWW1wbFkzUXBJSHRjY2x4dUlDQnBaaUFvSVhWMGFXd3VhWE5QWW1wbFkzUW9jR0YwYUU5aWFtVmpkQ2twSUh0Y2NseHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdYQ0pRWVhKaGJXVjBaWElnSjNCaGRHaFBZbXBsWTNRbklHMTFjM1FnWW1VZ1lXNGdiMkpxWldOMExDQnViM1FnWENJZ0t5QjBlWEJsYjJZZ2NHRjBhRTlpYW1WamRGeHlYRzRnSUNBZ0tUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIWmhjaUJ5YjI5MElEMGdjR0YwYUU5aWFtVmpkQzV5YjI5MElIeDhJQ2NuTzF4eVhHNWNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlRkSEpwYm1jb2NtOXZkQ2twSUh0Y2NseHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdYQ0luY0dGMGFFOWlhbVZqZEM1eWIyOTBKeUJ0ZFhOMElHSmxJR0VnYzNSeWFXNW5JRzl5SUhWdVpHVm1hVzVsWkN3Z2JtOTBJRndpSUN0Y2NseHVJQ0FnSUNBZ0lDQjBlWEJsYjJZZ2NHRjBhRTlpYW1WamRDNXliMjkwWEhKY2JpQWdJQ0FwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnZG1GeUlHUnBjaUE5SUhCaGRHaFBZbXBsWTNRdVpHbHlJRDhnY0dGMGFFOWlhbVZqZEM1a2FYSWdLeUJ3YjNOcGVDNXpaWEFnT2lBbkp6dGNjbHh1SUNCMllYSWdZbUZ6WlNBOUlIQmhkR2hQWW1wbFkzUXVZbUZ6WlNCOGZDQW5KenRjY2x4dUlDQnlaWFIxY200Z1pHbHlJQ3NnWW1GelpUdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNXdiM05wZUM1d1lYSnpaU0E5SUdaMWJtTjBhVzl1S0hCaGRHaFRkSEpwYm1jcElIdGNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlRkSEpwYm1jb2NHRjBhRk4wY21sdVp5a3BJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1hDSlFZWEpoYldWMFpYSWdKM0JoZEdoVGRISnBibWNuSUcxMWMzUWdZbVVnWVNCemRISnBibWNzSUc1dmRDQmNJaUFySUhSNWNHVnZaaUJ3WVhSb1UzUnlhVzVuWEhKY2JpQWdJQ0FwTzF4eVhHNGdJSDFjY2x4dUlDQjJZWElnWVd4c1VHRnlkSE1nUFNCd2IzTnBlRk53YkdsMFVHRjBhQ2h3WVhSb1UzUnlhVzVuS1R0Y2NseHVJQ0JwWmlBb0lXRnNiRkJoY25SeklIeDhJR0ZzYkZCaGNuUnpMbXhsYm1kMGFDQWhQVDBnTkNrZ2UxeHlYRzRnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJa2x1ZG1Gc2FXUWdjR0YwYUNBblhDSWdLeUJ3WVhSb1UzUnlhVzVuSUNzZ1hDSW5YQ0lwTzF4eVhHNGdJSDFjY2x4dUlDQmhiR3hRWVhKMGMxc3hYU0E5SUdGc2JGQmhjblJ6V3pGZElIeDhJQ2NuTzF4eVhHNGdJR0ZzYkZCaGNuUnpXekpkSUQwZ1lXeHNVR0Z5ZEhOYk1sMGdmSHdnSnljN1hISmNiaUFnWVd4c1VHRnlkSE5iTTEwZ1BTQmhiR3hRWVhKMGMxc3pYU0I4ZkNBbkp6dGNjbHh1WEhKY2JpQWdjbVYwZFhKdUlIdGNjbHh1SUNBZ0lISnZiM1E2SUdGc2JGQmhjblJ6V3pCZExGeHlYRzRnSUNBZ1pHbHlPaUJoYkd4UVlYSjBjMXN3WFNBcklHRnNiRkJoY25Seld6RmRMbk5zYVdObEtEQXNJQzB4S1N4Y2NseHVJQ0FnSUdKaGMyVTZJR0ZzYkZCaGNuUnpXekpkTEZ4eVhHNGdJQ0FnWlhoME9pQmhiR3hRWVhKMGMxc3pYU3hjY2x4dUlDQWdJRzVoYldVNklHRnNiRkJoY25Seld6SmRMbk5zYVdObEtEQXNJR0ZzYkZCaGNuUnpXekpkTG14bGJtZDBhQ0F0SUdGc2JGQmhjblJ6V3pOZExteGxibWQwYUNsY2NseHVJQ0I5TzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5CdmMybDRMbk5sY0NBOUlDY3ZKenRjY2x4dWNHOXphWGd1WkdWc2FXMXBkR1Z5SUQwZ0p6b25PMXh5WEc1Y2NseHVYSEpjYm1sbUlDaHBjMWRwYm1SdmQzTXBYSEpjYmlBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCM2FXNHpNanRjY2x4dVpXeHpaU0F2S2lCd2IzTnBlQ0FxTDF4eVhHNGdJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjRzl6YVhnN1hISmNibHh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeTV3YjNOcGVDQTlJSEJ2YzJsNE8xeHlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5NTNhVzR6TWlBOUlIZHBiak15TzF4eVhHNWNibHh1WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk5Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU1hHNHZMeUF1TDM0dmNHRjBhQzl3WVhSb0xtcHpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQXhYRzR2THlCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUNJc0ltVjRjRzl5ZENBcUlHWnliMjBnSnk0dmNHRjBhQ2M3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmFXNWtaWGd1ZEhNaUxDSmxlSEJ2Y25RZ1kyOXVjM1FnYm05dmNDQTlJQ2htY205dE9pQnpkSEpwYm1jc0lIUnZPaUJ6ZEhKcGJtY3BPaUJ6ZEhKcGJtY2dQVDRnZTF4dUlDQjBhSEp2ZHlCRmNuSnZjaWduYldWMGFHOWtJSFZ1YzNWd2NHOXlkR1ZrSUdsdUlHbHpiMjF2Y25Cb2FXTXRjR0YwYUNjcE8xeHVmVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5dWIyOXdMblJ6SWl3aVpYaHdiM0owSUdOdmJuTjBJR2x6VFdGaklEMGdLQ2s2SUdKdmIyeGxZVzRnUFQ0Z2UxeHVJQ0JwWmlBb2NISnZZMlZ6YzF4dUlDQW1KaUIwZVhCbGIyWWdjSEp2WTJWemN5NXdiR0YwWm05eWJTQTlQVDBnSjNOMGNtbHVaeWRjYmlBZ0ppWWdjSEp2WTJWemN5NXdiR0YwWm05eWJTNTBiMHh2ZDJWeVEyRnpaU2dwSUQwOVBTQW5aR0Z5ZDJsdUp5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCdVlYWnBaMkYwYjNJZ0lUMDlJQ2QxYm1SbFptbHVaV1FuWEc0Z0lDWW1JSFI1Y0dWdlppQnVZWFpwWjJGMGIzSXVjR3hoZEdadmNtMGdQVDA5SUNkemRISnBibWNuWEc0Z0lDWW1JRzVoZG1sbllYUnZjaTV3YkdGMFptOXliUzUwYjB4dmQyVnlRMkZ6WlNncExtbHVaR1Y0VDJZb0oyMWhZeWNwSUQ0Z0xURXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMxZHBiaUE5SUNncE9pQmliMjlzWldGdUlEMCtJSHRjYmlBZ2FXWWdLSEJ5YjJObGMzTmNiaUFnSmlZZ2RIbHdaVzltSUhCeWIyTmxjM011Y0d4aGRHWnZjbTBnUFQwOUlDZHpkSEpwYm1jblhHNGdJQ1ltSUhCeWIyTmxjM011Y0d4aGRHWnZjbTB1ZEc5TWIzZGxja05oYzJVb0tTQTlQVDBnSjNkcGJqTXlKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQnVZWFpwWjJGMGIzSWdJVDA5SUNkMWJtUmxabWx1WldRblhHNGdJQ0FnSmlZZ2RIbHdaVzltSUc1aGRtbG5ZWFJ2Y2k1d2JHRjBabTl5YlNBOVBUMGdKM04wY21sdVp5ZGNiaUFnSUNBbUppQnVZWFpwWjJGMGIzSXVjR3hoZEdadmNtMHVkRzlNYjNkbGNrTmhjMlVvS1M1cGJtUmxlRTltS0NkM2FXNG5LU0ErSUMweEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOQ2NtOTNjMlZ5SUQwZ0tDazZJR0p2YjJ4bFlXNGdQVDRnZTF4dUlDQnlaWFIxY200Z2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDYzdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOT2IyUmxJRDBnS0NrNklHSnZiMnhsWVc0Z1BUNGdlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSGRwYm1SdmR5QTlQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkSGx3Wlc5bUlIQnliMk5sYzNNZ0lUMDlJQ2QxYm1SbFptbHVaV1FuTzF4dWZUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTl3YkdGMFptOXliUzUwY3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NtVnhkV2x5WlNoY0luVjBhV3hjSWlrN1hHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdaWGgwWlhKdVlXd2dYQ0oxZEdsc1hDSmNiaTh2SUcxdlpIVnNaU0JwWkNBOUlEVmNiaTh2SUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9pc29tb3JwaGljLXBhdGguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGF0aC9wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBub29wID0gKGZyb206IHN0cmluZywgdG86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHRocm93IEVycm9yKCdtZXRob2QgdW5zdXBwb3J0ZWQgaW4gaXNvbW9ycGhpYy1wYXRoJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL25vb3AudHMiLCJpbXBvcnQgKiBhcyB0c1VuaXQgZnJvbSAndHMtdW5pdCc7XG5pbXBvcnQgeyBQYXRoU3BlYyB9IGZyb20gJy4vUGF0aC5Ob2RlLnNwZWMnO1xuaW1wb3J0IHsgUGxhdGZvcm1TcGVjIH0gZnJvbSAnLi9QbGF0Zm9ybS5Ob2RlLnNwZWMnO1xuXG5jb25zdCBJc29tb3JwaGljUGF0aFRlc3RzID0gW1xuICBQYXRoU3BlYyxcbiAgUGxhdGZvcm1TcGVjLFxuXTtcbmNvbnN0IHRlc3QgPSBuZXcgdHNVbml0LlRlc3QoSXNvbW9ycGhpY1BhdGhUZXN0cyk7XG5jb25zdCByZXN1bHQgPSB0ZXN0LnJ1bigpO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zb2xlLmxvZyhyZXN1bHQuZ2V0VGFwUmVzdWx0cygpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvUnVubmVyLk5vZGUudHMiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi90c1VuaXRcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vdHNVbml0QXN5bmNcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VHNVbml0TW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2Rpc3Qvc3JjL1RzVW5pdE1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c1VuaXRfMSA9IHJlcXVpcmUoXCIuL3RzVW5pdFwiKTtcbnZhciB0c1VuaXRfMiA9IHJlcXVpcmUoXCIuL3RzVW5pdFwiKTtcbmV4cG9ydHMuVGVzdCA9IHRzVW5pdF8yLlRlc3Q7XG5leHBvcnRzLlRlc3RDb250ZXh0ID0gdHNVbml0XzIuVGVzdENvbnRleHQ7XG5leHBvcnRzLlRlc3RDbGFzcyA9IHRzVW5pdF8yLlRlc3RDbGFzcztcbmV4cG9ydHMuRmFrZUZhY3RvcnkgPSB0c1VuaXRfMi5GYWtlRmFjdG9yeTtcbmV4cG9ydHMuVGVzdERlc2NyaXB0aW9uID0gdHNVbml0XzIuVGVzdERlc2NyaXB0aW9uO1xuZXhwb3J0cy5UZXN0RGVmaW5pdGlvbiA9IHRzVW5pdF8yLlRlc3REZWZpbml0aW9uO1xuY2xhc3MgVGVzdEFzeW5jIGV4dGVuZHMgdHNVbml0XzEuVGVzdCB7XG4gICAgcnVuQWxsKHRlc3RzLCB0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICBsZXQgdGhpc1Rlc3QgPSB0ZXN0c1swXTtcbiAgICAgICAgdmFyIHRlc3RDbGFzcyA9IHRoaXNUZXN0LnRlc3RDbGFzcztcbiAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgIHZhciB0ZXN0c0dyb3VwTmFtZSA9IHRoaXNUZXN0Lm5hbWU7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gdHNVbml0XzEuRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlci5nZXRGdW5jdGlvbk5hbWVzKHRlc3RDbGFzcyk7XG4gICAgICAgIGxldCBmdW5jdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgdW5pdFRlc3ROYW1lID0gcHJvcGVydHlOYW1lc1tqXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Jlc2VydmVkRnVuY3Rpb25OYW1lKHVuaXRUZXN0TmFtZSkgJiZcbiAgICAgICAgICAgICAgICAhKHVuaXRUZXN0TmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4Lmxlbmd0aCkgPT09IHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeCkgJiZcbiAgICAgICAgICAgICAgICAhKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0gIT09ICdmdW5jdGlvbicpICYmXG4gICAgICAgICAgICAgICAgKCF0ZXN0UnVuTGltaXRlciB8fCB0ZXN0UnVuTGltaXRlci5pc1Rlc3RBY3RpdmUodW5pdFRlc3ROYW1lKSkpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnMucHVzaCh1bml0VGVzdE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZW1haW5pbmdUZXN0cyA9IHRlc3RzLnNsaWNlKDEpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucnVuQWxsRnVuY3Rpb25zKHRoaXNUZXN0LCBmdW5jdGlvbnMsIHRlc3RSdW5MaW1pdGVyKTtcbiAgICAgICAgaWYgKHJlbWFpbmluZ1Rlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB0aGlzLnJ1bkFsbChyZW1haW5pbmdUZXN0cywgdGVzdFJ1bkxpbWl0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcnVuQWxsRnVuY3Rpb25zKHRoaXNUZXN0LCBmdW5jdGlvbk5hbWVzLCB0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICBsZXQgdW5pdFRlc3ROYW1lID0gZnVuY3Rpb25OYW1lc1swXTtcbiAgICAgICAgbGV0IHJlbWFpbmluZ0Z1bmN0aW9ucyA9IGZ1bmN0aW9uTmFtZXMuc2xpY2UoMSk7XG4gICAgICAgIHZhciB0ZXN0Q2xhc3MgPSB0aGlzVGVzdC50ZXN0Q2xhc3M7XG4gICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICB2YXIgdGVzdHNHcm91cE5hbWUgPSB0aGlzVGVzdC5uYW1lO1xuICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0gZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5ydW5BbGxQYXJhbWV0ZXJzKHRoaXNUZXN0LCB1bml0VGVzdE5hbWUsIDAsIHRlc3RSdW5MaW1pdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnJ1blNpbmdsZVRlc3RBc3luYyh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1haW5pbmdGdW5jdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigoKSA9PiB0aGlzLnJ1bkFsbEZ1bmN0aW9ucyh0aGlzVGVzdCwgcmVtYWluaW5nRnVuY3Rpb25zLCB0ZXN0UnVuTGltaXRlcikpO1xuICAgICAgICB9XG4gICAgICAgIHByb21pc2UudGhlbigoeCkgPT4ge1xuICAgICAgICAgICAgdGVzdENsYXNzLnRlYXJEb3duICYmIHRlc3RDbGFzcy50ZWFyRG93bigpO1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHRlc3RDbGFzcy50ZWFyRG93biAmJiB0ZXN0Q2xhc3MudGVhckRvd24oKTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBydW5BbGxQYXJhbWV0ZXJzKHRoaXNUZXN0LCB1bml0VGVzdE5hbWUsIHBhcmFtZXRlckluZGV4LCB0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICBsZXQgdGVzdENsYXNzID0gdGhpc1Rlc3QudGVzdENsYXNzO1xuICAgICAgICBsZXQgZHluYW1pY1Rlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgbGV0IHRlc3RzR3JvdXBOYW1lID0gdGhpc1Rlc3QubmFtZTtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycztcbiAgICAgICAgbGV0IG1heEluZGV4ID0gcGFyYW1ldGVycy5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJhbWV0ZXJJbmRleDtcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCBwYXJhbWV0ZXJzLmxlbmd0aCAmJiAhdGVzdFJ1bkxpbWl0ZXIuaXNQYXJhbWV0ZXJzU2V0QWN0aXZlKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgcGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1blNpbmdsZVRlc3RBc3luYyh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUsIHBhcmFtZXRlcnMsIGluZGV4KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMucnVuQWxsUGFyYW1ldGVycyh0aGlzVGVzdCwgdW5pdFRlc3ROYW1lLCBpbmRleCArIDEsIHRlc3RSdW5MaW1pdGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICB9XG4gICAgcnVuU2luZ2xlVGVzdEFzeW5jKHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycyA9IG51bGwsIHBhcmFtZXRlclNldEluZGV4ID0gbnVsbCkge1xuICAgICAgICAvLyBydW5uaW5nIGV2ZXJ5dGhpbmcgaW5zaWRlIC50aGVuIHNhdmVzIHVzIGEgdHJ5L2NhdGNoXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRlc3RDbGFzcy5zZXRVcCAmJiB0ZXN0Q2xhc3Muc2V0VXAoKTtcbiAgICAgICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSAocGFyYW1ldGVyU2V0SW5kZXggIT09IG51bGwpID8gcGFyYW1ldGVyc1twYXJhbWV0ZXJTZXRJbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5hcHBseSh0ZXN0Q2xhc3MsIGFyZ3MpO1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFzc2VzLnB1c2gobmV3IHRzVW5pdF8xLlRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgJ09LJykpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IHRzVW5pdF8xLlRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgZXJyLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuQXN5bmModGVzdFJ1bkxpbWl0ZXIgPSBudWxsKSB7XG4gICAgICAgIHZhciBwYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgdmFyIHRlc3RDb250ZXh0ID0gbmV3IHRzVW5pdF8xLlRlc3RDb250ZXh0KCk7XG4gICAgICAgIGlmICh0ZXN0UnVuTGltaXRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZXN0UnVuTGltaXRlciA9IHRoaXMudGVzdFJ1bkxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRlc3RzID0gdGhpcy50ZXN0cztcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgICAgICB0ZXN0cyA9IHRlc3RzLmZpbHRlcigoeCkgPT4gdGVzdFJ1bkxpbWl0ZXIuaXNUZXN0c0dyb3VwQWN0aXZlKHgubmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bkFsbCh0ZXN0cywgdGVzdFJ1bkxpbWl0ZXIpO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlIHJ1bkFzeW5jXCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2UgcnVuQXN5bmNcIik7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0QXN5bmMgPSBUZXN0QXN5bmM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10c1VuaXRBc3luYy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXRBc3luYy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==