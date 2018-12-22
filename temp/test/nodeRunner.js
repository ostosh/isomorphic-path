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
const win32Runtime = Object.assign({}, path_1.win32, platform_1.isBrowser() ? unsupportedMethods : {});
exports.win32 = win32Runtime;
const posixRuntime = Object.assign({}, path_1.posix, platform_1.isBrowser() ? unsupportedMethods : {});
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
const win32Runtime = Object.assign({}, path_1.win32, platform_1.isBrowser() ? unsupportedMethods : {});
exports.win32 = win32Runtime;
const posixRuntime = Object.assign({}, path_1.posix, platform_1.isBrowser() ? unsupportedMethods : {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5YjE1MTc3YWQ2MmE4N2ZjNjcxNyIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3BhdGgvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaEVBLHNDQUFtRTtBQUNuRSwwQ0FBOEM7QUFDOUMsc0NBQThCO0FBRTlCLE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsT0FBTyxFQUFFLFdBQUk7SUFDYixRQUFRLEVBQUUsV0FBSTtDQUNmLENBQUM7QUFFRixNQUFNLFlBQVksR0FBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxZQUFTLEVBQUUs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QUFFVyxhQUFLLEdBQUcsR0FBWSxFQUFFO0lBQ2pDLEVBQUUsQ0FBQyxDQUFDLE9BQU87V0FDUixPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUTtXQUNwQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxTQUFTLEtBQUssV0FBVztXQUN0QyxPQUFPLFNBQVMsQ0FBQyxRQUFRLEtBQUssUUFBUTtXQUN0QyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRVcsaUJBQVMsR0FBRyxHQUFZLEVBQUU7SUFDckMsTUFBTSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQztBQUN2QyxDQUFDLENBQUM7QUFFVyxjQUFNLEdBQUcsR0FBWSxFQUFFO0lBQ2xDLE1BQU0sQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxDQUFDO0FBQ3pFLENBQUMsQ0FBQzs7Ozs7OztBQ2xDRixpQyIsImZpbGUiOiJpc29tb3JwaGljLXBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInV0aWxcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaXNvbW9ycGhpYy1wYXRoXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiaXNvbW9ycGhpYy1wYXRoXCJdID0gZmFjdG9yeShyb290W1widXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDliMTUxNzdhZDYyYTg3ZmM2NzE3IiwiaW1wb3J0IHsgd2luMzIgYXMgd2luMzJCYXNlLCBwb3NpeCBhcyBwb3NpeEJhc2UgfSBmcm9tICdwYXRoL3BhdGgnO1xuaW1wb3J0IHsgaXNXaW4sIGlzQnJvd3NlciB9IGZyb20gJy4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vbm9vcCc7XG5cbmNvbnN0IHVuc3VwcG9ydGVkTWV0aG9kcyA9IHtcbiAgcmVzb2x2ZTogbm9vcCxcbiAgcmVsYXRpdmU6IG5vb3AsXG59O1xuXG5jb25zdCB3aW4zMlJ1bnRpbWUgPSAgT2JqZWN0LmFzc2lnbih7fSwgd2luMzJCYXNlLCBpc0Jyb3dzZXIoKSA/IHVuc3VwcG9ydGVkTWV0aG9kcyA6IHt9KTtcbmNvbnN0IHBvc2l4UnVudGltZSA9IE9iamVjdC5hc3NpZ24oe30sIHBvc2l4QmFzZSwgIGlzQnJvd3NlcigpID8gdW5zdXBwb3J0ZWRNZXRob2RzIDoge30pO1xuXG5sZXQgZGVmYXVsdEV4cG9ydDtcbmlmIChpc1dpbigpKSB7XG4gIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCB3aW4zMlJ1bnRpbWUpO1xufSBlbHNlIHtcbiAgZGVmYXVsdEV4cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIHBvc2l4UnVudGltZSk7XG59XG5sZXQgbm9ybWFsaXplUnVudGltZTtcbmxldCBqb2luUnVudGltZTtcbmxldCByZXNvbHZlUnVudGltZTtcbmxldCBpc0Fic29sdXRlUnVudGltZTtcbmxldCByZWxhdGl2ZVJ1bnRpbWU7XG5sZXQgZGlybmFtZVJ1bnRpbWU7XG5sZXQgYmFzZW5hbWVSdW50aW1lO1xubGV0IGV4dG5hbWVSdW50aW1lO1xubGV0IHNlcFJ1bnRpbWU7XG5sZXQgZGVsaW1pdGVyUnVudGltZTtcbmxldCBwYXJzZVJ1bnRpbWU7XG5sZXQgZm9ybWF0UnVudGltZTtcblxuaWYgKGlzV2luKCkpIHtcbiAgbm9ybWFsaXplUnVudGltZSA9IHdpbjMyUnVudGltZS5ub3JtYWxpemU7XG4gIGpvaW5SdW50aW1lID0gd2luMzJSdW50aW1lLmpvaW47XG4gIHJlc29sdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlc29sdmU7XG4gIGlzQWJzb2x1dGVSdW50aW1lID0gd2luMzJSdW50aW1lLmlzQWJzb2x1dGU7XG4gIHJlbGF0aXZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZWxhdGl2ZTtcbiAgZGlybmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGlybmFtZTtcbiAgYmFzZW5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmJhc2VuYW1lO1xuICBleHRuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5leHRuYW1lO1xuICBzZXBSdW50aW1lID0gd2luMzJSdW50aW1lLnNlcDtcbiAgZGVsaW1pdGVyUnVudGltZSA9IHdpbjMyUnVudGltZS5kZWxpbWl0ZXI7XG4gIHBhcnNlUnVudGltZSA9IHdpbjMyUnVudGltZS5wYXJzZTtcbiAgZm9ybWF0UnVudGltZSA9IHdpbjMyUnVudGltZS5mb3JtYXQ7XG59IGVsc2Uge1xuICBub3JtYWxpemVSdW50aW1lID0gcG9zaXhSdW50aW1lLm5vcm1hbGl6ZTtcbiAgam9pblJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuam9pbjtcbiAgcmVzb2x2ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucmVzb2x2ZTtcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuaXNBYnNvbHV0ZTtcbiAgcmVsYXRpdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlbGF0aXZlO1xuICBkaXJuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5kaXJuYW1lO1xuICBiYXNlbmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuYmFzZW5hbWU7XG4gIGV4dG5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmV4dG5hbWU7XG4gIHNlcFJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuc2VwO1xuICBkZWxpbWl0ZXJSdW50aW1lID0gcG9zaXhSdW50aW1lLmRlbGltaXRlcjtcbiAgcGFyc2VSdW50aW1lID0gcG9zaXhSdW50aW1lLnBhcnNlO1xuICBmb3JtYXRSdW50aW1lID0gcG9zaXhSdW50aW1lLmZvcm1hdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdEV4cG9ydDtcbmV4cG9ydCB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgYXMgbm9ybWFsaXplLFxuICBqb2luUnVudGltZSBhcyBqb2luLFxuICByZXNvbHZlUnVudGltZSBhcyByZXNvbHZlLFxuICBpc0Fic29sdXRlUnVudGltZSBhcyBpc0Fic29sdXRlLFxuICByZWxhdGl2ZVJ1bnRpbWUgYXMgcmVsYXRpdmUsXG4gIGRpcm5hbWVSdW50aW1lIGFzIGRpcm5hbWUsXG4gIGJhc2VuYW1lUnVudGltZSBhcyBiYXNlbmFtZSxcbiAgZXh0bmFtZVJ1bnRpbWUgYXMgZXh0bmFtZSxcbiAgc2VwUnVudGltZSBhcyBzZXBSdW50aW1lLFxuICBkZWxpbWl0ZXJSdW50aW1lIGFzIGRlbGltaXRlcixcbiAgcGFyc2VSdW50aW1lIGFzIHBhcnNlLFxuICBmb3JtYXRSdW50aW1lIGFzIGZvcm1hdCxcbiAgcG9zaXhSdW50aW1lIGFzIHBvc2l4LFxuICB3aW4zMlJ1bnRpbWUgYXMgd2luMzIsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3BhdGgudHMiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcclxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XHJcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxyXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcclxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcclxuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXHJcbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxyXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1JcclxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxyXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcclxuXHJcblxyXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcclxuLy8gbXVzdCBiZSBubyBzbGFzaGVzIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XHJcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxyXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xyXG4gIHZhciByZXMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcCA9IHBhcnRzW2ldO1xyXG5cclxuICAgIC8vIGlnbm9yZSBlbXB0eSBwYXJ0c1xyXG4gICAgaWYgKCFwIHx8IHAgPT09ICcuJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgaWYgKHAgPT09ICcuLicpIHtcclxuICAgICAgaWYgKHJlcy5sZW5ndGggJiYgcmVzW3Jlcy5sZW5ndGggLSAxXSAhPT0gJy4uJykge1xyXG4gICAgICAgIHJlcy5wb3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xyXG4gICAgICAgIHJlcy5wdXNoKCcuLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMucHVzaChwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8vIHJldHVybnMgYW4gYXJyYXkgd2l0aCBlbXB0eSBlbGVtZW50cyByZW1vdmVkIGZyb20gZWl0aGVyIGVuZCBvZiB0aGUgaW5wdXRcclxuLy8gYXJyYXkgb3IgdGhlIG9yaWdpbmFsIGFycmF5IGlmIG5vIGVsZW1lbnRzIG5lZWQgdG8gYmUgcmVtb3ZlZFxyXG5mdW5jdGlvbiB0cmltQXJyYXkoYXJyKSB7XHJcbiAgdmFyIGxhc3RJbmRleCA9IGFyci5sZW5ndGggLSAxO1xyXG4gIHZhciBzdGFydCA9IDA7XHJcbiAgZm9yICg7IHN0YXJ0IDw9IGxhc3RJbmRleDsgc3RhcnQrKykge1xyXG4gICAgaWYgKGFycltzdGFydF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVuZCA9IGxhc3RJbmRleDtcclxuICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XHJcbiAgICBpZiAoYXJyW2VuZF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gbGFzdEluZGV4KVxyXG4gICAgcmV0dXJuIGFycjtcclxuICBpZiAoc3RhcnQgPiBlbmQpXHJcbiAgICByZXR1cm4gW107XHJcbiAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kICsgMSk7XHJcbn1cclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IGEgd2luZG93cyBwYXRoIGludG8gdGhyZWUgcGFydHM6IFsqLCBkZXZpY2UsIHNsYXNoLFxyXG4vLyB0YWlsXSB3aW5kb3dzLW9ubHlcclxudmFyIHNwbGl0RGV2aWNlUmUgPVxyXG4gICAgL14oW2EtekEtWl06fFtcXFxcXFwvXXsyfVteXFxcXFxcL10rW1xcXFxcXC9dK1teXFxcXFxcL10rKT8oW1xcXFxcXC9dKT8oW1xcc1xcU10qPykkLztcclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IHRoZSB0YWlsIHBhcnQgb2YgdGhlIGFib3ZlIGludG8gWyosIGRpciwgYmFzZW5hbWUsIGV4dF1cclxudmFyIHNwbGl0VGFpbFJlID1cclxuICAgIC9eKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKSg/OltcXFxcXFwvXSopJC87XHJcblxyXG52YXIgd2luMzIgPSB7fTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XVxyXG5mdW5jdGlvbiB3aW4zMlNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIC8vIFNlcGFyYXRlIGRldmljZStzbGFzaCBmcm9tIHRhaWxcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKGZpbGVuYW1lKSxcclxuICAgICAgZGV2aWNlID0gKHJlc3VsdFsxXSB8fCAnJykgKyAocmVzdWx0WzJdIHx8ICcnKSxcclxuICAgICAgdGFpbCA9IHJlc3VsdFszXSB8fCAnJztcclxuICAvLyBTcGxpdCB0aGUgdGFpbCBpbnRvIGRpciwgYmFzZW5hbWUgYW5kIGV4dGVuc2lvblxyXG4gIHZhciByZXN1bHQyID0gc3BsaXRUYWlsUmUuZXhlYyh0YWlsKSxcclxuICAgICAgZGlyID0gcmVzdWx0MlsxXSxcclxuICAgICAgYmFzZW5hbWUgPSByZXN1bHQyWzJdLFxyXG4gICAgICBleHQgPSByZXN1bHQyWzNdO1xyXG4gIHJldHVybiBbZGV2aWNlLCBkaXIsIGJhc2VuYW1lLCBleHRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW4zMlN0YXRQYXRoKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKHBhdGgpLFxyXG4gICAgICBkZXZpY2UgPSByZXN1bHRbMV0gfHwgJycsXHJcbiAgICAgIGlzVW5jID0gISFkZXZpY2UgJiYgZGV2aWNlWzFdICE9PSAnOic7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRldmljZTogZGV2aWNlLFxyXG4gICAgaXNVbmM6IGlzVW5jLFxyXG4gICAgaXNBYnNvbHV0ZTogaXNVbmMgfHwgISFyZXN1bHRbMl0sIC8vIFVOQyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlXHJcbiAgICB0YWlsOiByZXN1bHRbM11cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVVTkNSb290KGRldmljZSkge1xyXG4gIHJldHVybiAnXFxcXFxcXFwnICsgZGV2aWNlLnJlcGxhY2UoL15bXFxcXFxcL10rLywgJycpLnJlcGxhY2UoL1tcXFxcXFwvXSsvZywgJ1xcXFwnKTtcclxufVxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG53aW4zMi5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkRGV2aWNlID0gJycsXHJcbiAgICAgIHJlc29sdmVkVGFpbCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aDtcclxuICAgIGlmIChpID49IDApIHtcclxuICAgICAgcGF0aCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHBhdGggPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gV2luZG93cyBoYXMgdGhlIGNvbmNlcHQgb2YgZHJpdmUtc3BlY2lmaWMgY3VycmVudCB3b3JraW5nXHJcbiAgICAgIC8vIGRpcmVjdG9yaWVzLiBJZiB3ZSd2ZSByZXNvbHZlZCBhIGRyaXZlIGxldHRlciBidXQgbm90IHlldCBhblxyXG4gICAgICAvLyBhYnNvbHV0ZSBwYXRoLCBnZXQgY3dkIGZvciB0aGF0IGRyaXZlLiBXZSdyZSBzdXJlIHRoZSBkZXZpY2UgaXMgbm90XHJcbiAgICAgIC8vIGFuIHVuYyBwYXRoIGF0IHRoaXMgcG9pbnRzLCBiZWNhdXNlIHVuYyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlLlxyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5lbnZbJz0nICsgcmVzb2x2ZWREZXZpY2VdO1xyXG4gICAgICAvLyBWZXJpZnkgdGhhdCBhIGRyaXZlLWxvY2FsIGN3ZCB3YXMgZm91bmQgYW5kIHRoYXQgaXQgYWN0dWFsbHkgcG9pbnRzXHJcbiAgICAgIC8vIHRvIG91ciBkcml2ZS4gSWYgbm90LCBkZWZhdWx0IHRvIHRoZSBkcml2ZSdzIHJvb3QuXHJcbiAgICAgIGlmICghcGF0aCB8fCBwYXRoLnN1YnN0cigwLCAzKS50b0xvd2VyQ2FzZSgpICE9PVxyXG4gICAgICAgICAgcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSArICdcXFxcJykge1xyXG4gICAgICAgIHBhdGggPSByZXNvbHZlZERldmljZSArICdcXFxcJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXN1bHQgPSB3aW4zMlN0YXRQYXRoKHBhdGgpLFxyXG4gICAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgICAgaXNBYnNvbHV0ZSA9IHJlc3VsdC5pc0Fic29sdXRlLFxyXG4gICAgICAgIHRhaWwgPSByZXN1bHQudGFpbDtcclxuXHJcbiAgICBpZiAoZGV2aWNlICYmXHJcbiAgICAgICAgcmVzb2x2ZWREZXZpY2UgJiZcclxuICAgICAgICBkZXZpY2UudG9Mb3dlckNhc2UoKSAhPT0gcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAvLyBUaGlzIHBhdGggcG9pbnRzIHRvIGFub3RoZXIgZGV2aWNlIHNvIGl0IGlzIG5vdCBhcHBsaWNhYmxlXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzb2x2ZWREZXZpY2UpIHtcclxuICAgICAgcmVzb2x2ZWREZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgcmVzb2x2ZWRUYWlsID0gdGFpbCArICdcXFxcJyArIHJlc29sdmVkVGFpbDtcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGlzQWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc29sdmVkRGV2aWNlICYmIHJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgcmVzb2x2ZWREZXZpY2VgIHBvaW50cyB0byBhbiBVTkNcclxuICAvLyByb290LiBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgcmVzb2x2ZWREZXZpY2UgPSBub3JtYWxpemVVTkNSb290KHJlc29sdmVkRGV2aWNlKTtcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLFxyXG4gIC8vIGJ1dCBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKVxyXG4gIC8vIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHJlc29sdmVkVGFpbCA9IG5vcm1hbGl6ZUFycmF5KHJlc29sdmVkVGFpbC5zcGxpdCgvW1xcXFxcXC9dKy8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIHJldHVybiAocmVzb2x2ZWREZXZpY2UgKyAocmVzb2x2ZWRBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHJlc29sdmVkVGFpbCkgfHxcclxuICAgICAgICAgJy4nO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0LmRldmljZSxcclxuICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgdGFpbCA9IHJlc3VsdC50YWlsLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gL1tcXFxcXFwvXSQvLnRlc3QodGFpbCk7XHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgdGFpbCBwYXRoXHJcbiAgdGFpbCA9IG5vcm1hbGl6ZUFycmF5KHRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSwgIWlzQWJzb2x1dGUpLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgaWYgKCF0YWlsICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICB0YWlsID0gJy4nO1xyXG4gIH1cclxuICBpZiAodGFpbCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICB0YWlsICs9ICdcXFxcJztcclxuICB9XHJcblxyXG4gIC8vIENvbnZlcnQgc2xhc2hlcyB0byBiYWNrc2xhc2hlcyB3aGVuIGBkZXZpY2VgIHBvaW50cyB0byBhbiBVTkMgcm9vdC5cclxuICAvLyBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgZGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRldmljZSArIChpc0Fic29sdXRlID8gJ1xcXFwnIDogJycpICsgdGFpbDtcclxufTtcclxuXHJcblxyXG53aW4zMi5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlN0YXRQYXRoKHBhdGgpLmlzQWJzb2x1dGU7XHJcbn07XHJcblxyXG53aW4zMi5qb2luID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHBhdGhzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcoYXJnKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZykge1xyXG4gICAgICBwYXRocy5wdXNoKGFyZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgam9pbmVkID0gcGF0aHMuam9pbignXFxcXCcpO1xyXG5cclxuICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgam9pbmVkIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIHR3byBzbGFzaGVzLCBiZWNhdXNlXHJcbiAgLy8gbm9ybWFsaXplKCkgd2lsbCBtaXN0YWtlIGl0IGZvciBhbiBVTkMgcGF0aCB0aGVuLlxyXG4gIC8vXHJcbiAgLy8gVGhpcyBzdGVwIGlzIHNraXBwZWQgd2hlbiBpdCBpcyB2ZXJ5IGNsZWFyIHRoYXQgdGhlIHVzZXIgYWN0dWFsbHlcclxuICAvLyBpbnRlbmRlZCB0byBwb2ludCBhdCBhbiBVTkMgcGF0aC4gVGhpcyBpcyBhc3N1bWVkIHdoZW4gdGhlIGZpcnN0XHJcbiAgLy8gbm9uLWVtcHR5IHN0cmluZyBhcmd1bWVudHMgc3RhcnRzIHdpdGggZXhhY3RseSB0d28gc2xhc2hlcyBmb2xsb3dlZCBieVxyXG4gIC8vIGF0IGxlYXN0IG9uZSBtb3JlIG5vbi1zbGFzaCBjaGFyYWN0ZXIuXHJcbiAgLy9cclxuICAvLyBOb3RlIHRoYXQgZm9yIG5vcm1hbGl6ZSgpIHRvIHRyZWF0IGEgcGF0aCBhcyBhbiBVTkMgcGF0aCBpdCBuZWVkcyB0b1xyXG4gIC8vIGhhdmUgYXQgbGVhc3QgMiBjb21wb25lbnRzLCBzbyB3ZSBkb24ndCBmaWx0ZXIgZm9yIHRoYXQgaGVyZS5cclxuICAvLyBUaGlzIG1lYW5zIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSBqb2luIHRvIGNvbnN0cnVjdCBVTkMgcGF0aHMgZnJvbVxyXG4gIC8vIGEgc2VydmVyIG5hbWUgYW5kIGEgc2hhcmUgbmFtZTsgZm9yIGV4YW1wbGU6XHJcbiAgLy8gICBwYXRoLmpvaW4oJy8vc2VydmVyJywgJ3NoYXJlJykgLT4gJ1xcXFxcXFxcc2VydmVyXFxcXHNoYXJlXFwnKVxyXG4gIGlmICghL15bXFxcXFxcL117Mn1bXlxcXFxcXC9dLy50ZXN0KHBhdGhzWzBdKSkge1xyXG4gICAgam9pbmVkID0gam9pbmVkLnJlcGxhY2UoL15bXFxcXFxcL117Mix9LywgJ1xcXFwnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aW4zMi5ub3JtYWxpemUoam9pbmVkKTtcclxufTtcclxuXHJcblxyXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxyXG4vLyBpdCB3aWxsIHNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoIGZyb20gJ2Zyb20nIHRvICd0bycsIGZvciBpbnN0YW5jZTpcclxuLy8gZnJvbSA9ICdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJ1xyXG4vLyB0byA9ICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJ1xyXG4vLyBUaGUgb3V0cHV0IG9mIHRoZSBmdW5jdGlvbiBzaG91bGQgYmU6ICcuLlxcXFwuLlxcXFxpbXBsXFxcXGJiYidcclxud2luMzIucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSB3aW4zMi5yZXNvbHZlKGZyb20pO1xyXG4gIHRvID0gd2luMzIucmVzb2x2ZSh0byk7XHJcblxyXG4gIC8vIHdpbmRvd3MgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlXHJcbiAgdmFyIGxvd2VyRnJvbSA9IGZyb20udG9Mb3dlckNhc2UoKTtcclxuICB2YXIgbG93ZXJUbyA9IHRvLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCdcXFxcJykpO1xyXG5cclxuICB2YXIgbG93ZXJGcm9tUGFydHMgPSB0cmltQXJyYXkobG93ZXJGcm9tLnNwbGl0KCdcXFxcJykpO1xyXG4gIHZhciBsb3dlclRvUGFydHMgPSB0cmltQXJyYXkobG93ZXJUby5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGxvd2VyRnJvbVBhcnRzLmxlbmd0aCwgbG93ZXJUb1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobG93ZXJGcm9tUGFydHNbaV0gIT09IGxvd2VyVG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChzYW1lUGFydHNMZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIHRvO1xyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGxvd2VyRnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xyXG4gIH1cclxuXHJcbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJ1xcXFwnKTtcclxufTtcclxuXHJcblxyXG53aW4zMi5fbWFrZUxvbmcgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgLy8gTm90ZTogdGhpcyB3aWxsICpwcm9iYWJseSogdGhyb3cgc29tZXdoZXJlLlxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSlcclxuICAgIHJldHVybiBwYXRoO1xyXG5cclxuICBpZiAoIXBhdGgpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHZhciByZXNvbHZlZFBhdGggPSB3aW4zMi5yZXNvbHZlKHBhdGgpO1xyXG5cclxuICBpZiAoL15bYS16QS1aXVxcOlxcXFwvLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBsb2NhbCBmaWxlc3lzdGVtIHBhdGgsIHdoaWNoIG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxyXG4gICAgLy8gdG8gbG9uZyBVTkMgcGF0aC5cclxuICAgIHJldHVybiAnXFxcXFxcXFw/XFxcXCcgKyByZXNvbHZlZFBhdGg7XHJcbiAgfSBlbHNlIGlmICgvXlxcXFxcXFxcW14/Ll0vLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBuZXR3b3JrIFVOQyBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFxVTkNcXFxcJyArIHJlc29sdmVkUGF0aC5zdWJzdHJpbmcoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG53aW4zMi5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSB3aW4zMlNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxud2luMzIuYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHdpbjMyU3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHdpbjMyU3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIGlmICghZGlyKSB7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9XHJcbiAgaWYgKGRpcltkaXIubGVuZ3RoIC0gMV0gPT09IHdpbjMyLnNlcCkge1xyXG4gICAgcmV0dXJuIGRpciArIGJhc2U7XHJcbiAgfVxyXG4gIHJldHVybiBkaXIgKyB3aW4zMi5zZXAgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICByb290OiBhbGxQYXJ0c1swXSxcclxuICAgIGRpcjogYWxsUGFydHNbMF0gKyBhbGxQYXJ0c1sxXS5zbGljZSgwLCAtMSksXHJcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcclxuICAgIGV4dDogYWxsUGFydHNbM10sXHJcbiAgICBuYW1lOiBhbGxQYXJ0c1syXS5zbGljZSgwLCBhbGxQYXJ0c1syXS5sZW5ndGggLSBhbGxQYXJ0c1szXS5sZW5ndGgpXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG53aW4zMi5zZXAgPSAnXFxcXCc7XHJcbndpbjMyLmRlbGltaXRlciA9ICc7JztcclxuXHJcblxyXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxyXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxyXG52YXIgc3BsaXRQYXRoUmUgPVxyXG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XHJcbnZhciBwb3NpeCA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LnJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcclxuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XHJcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aFswXSA9PT0gJy8nO1xyXG4gIH1cclxuXHJcbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxyXG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XHJcbn07XHJcblxyXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgaXNBYnNvbHV0ZSA9IHBvc2l4LmlzQWJzb2x1dGUocGF0aCksXHJcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBwYXRoICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkocGF0aC5zcGxpdCgnLycpLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcclxuICAgIHBhdGggPSAnLic7XHJcbiAgfVxyXG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcclxuICAgIHBhdGggKz0gJy8nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRoID0gJyc7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBzZWdtZW50ID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHNlZ21lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICBwYXRoICs9IHNlZ21lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0aCArPSAnLycgKyBzZWdtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwb3NpeC5ub3JtYWxpemUocGF0aCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XHJcbiAgZnJvbSA9IHBvc2l4LnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xyXG4gIHRvID0gcG9zaXgucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xyXG5cclxuICB2YXIgZnJvbVBhcnRzID0gdHJpbUFycmF5KGZyb20uc3BsaXQoJy8nKSk7XHJcbiAgdmFyIHRvUGFydHMgPSB0cmltQXJyYXkodG8uc3BsaXQoJy8nKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XHJcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XHJcbn07XHJcblxyXG5cclxucG9zaXguX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiBwYXRoO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmRpcm5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpLFxyXG4gICAgICByb290ID0gcmVzdWx0WzBdLFxyXG4gICAgICBkaXIgPSByZXN1bHRbMV07XHJcblxyXG4gIGlmICghcm9vdCAmJiAhZGlyKSB7XHJcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcclxuICAgIHJldHVybiAnLic7XHJcbiAgfVxyXG5cclxuICBpZiAoZGlyKSB7XHJcbiAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxyXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdCArIGRpcjtcclxufTtcclxuXHJcblxyXG5wb3NpeC5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xyXG4gIHZhciBmID0gcG9zaXhTcGxpdFBhdGgocGF0aClbMl07XHJcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xyXG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XHJcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIGY7XHJcbn07XHJcblxyXG5cclxucG9zaXguZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcG9zaXhTcGxpdFBhdGgocGF0aClbM107XHJcbn07XHJcblxyXG5cclxucG9zaXguZm9ybWF0ID0gZnVuY3Rpb24ocGF0aE9iamVjdCkge1xyXG4gIGlmICghdXRpbC5pc09iamVjdChwYXRoT2JqZWN0KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aE9iamVjdCcgbXVzdCBiZSBhbiBvYmplY3QsIG5vdCBcIiArIHR5cGVvZiBwYXRoT2JqZWN0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvb3QgPSBwYXRoT2JqZWN0LnJvb3QgfHwgJyc7XHJcblxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhyb290KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIidwYXRoT2JqZWN0LnJvb3QnIG11c3QgYmUgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBub3QgXCIgK1xyXG4gICAgICAgIHR5cGVvZiBwYXRoT2JqZWN0LnJvb3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGlyID0gcGF0aE9iamVjdC5kaXIgPyBwYXRoT2JqZWN0LmRpciArIHBvc2l4LnNlcCA6ICcnO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIHJldHVybiBkaXIgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIGFsbFBhcnRzWzFdID0gYWxsUGFydHNbMV0gfHwgJyc7XHJcbiAgYWxsUGFydHNbMl0gPSBhbGxQYXJ0c1syXSB8fCAnJztcclxuICBhbGxQYXJ0c1szXSA9IGFsbFBhcnRzWzNdIHx8ICcnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxucG9zaXguc2VwID0gJy8nO1xyXG5wb3NpeC5kZWxpbWl0ZXIgPSAnOic7XHJcblxyXG5cclxuaWYgKGlzV2luZG93cylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyO1xyXG5lbHNlIC8qIHBvc2l4ICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBwb3NpeDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXg7XHJcbm1vZHVsZS5leHBvcnRzLndpbjMyID0gd2luMzI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYXRoL3BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9wYXRoJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LnRzIiwiZXhwb3J0IGNvbnN0IG5vb3AgPSAoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgdGhyb3cgRXJyb3IoJ21ldGhvZCB1bnN1cHBvcnRlZCBpbiBpc29tb3JwaGljLXBhdGgnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvbm9vcC50cyIsImV4cG9ydCBjb25zdCBpc01hYyA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKHByb2Nlc3NcbiAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICYmIHByb2Nlc3MucGxhdGZvcm0udG9Mb3dlckNhc2UoKSA9PT0gJ2RhcndpbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJ1xuICAmJiB0eXBlb2YgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAmJiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtYWMnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNXaW4gPSAoKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcm9jZXNzXG4gICYmIHR5cGVvZiBwcm9jZXNzLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAmJiBwcm9jZXNzLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkgPT09ICd3aW4zMicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXG4gICAgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignd2luJykgPiAtMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9ICgpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTm9kZSA9ICgpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvcGxhdGZvcm0udHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXRpbFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNmNiM2M5OWU4MWMzZjBmZGU1NCIsIndlYnBhY2s6Ly8vLi9saWIvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9+L3RzLXVuaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90cy11bml0L2Rpc3Qvc3JjL3RzVW5pdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYXRmb3JtLnRzIiwid2VicGFjazovLy8uL3Rlc3QvUGF0aC5Ob2RlLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9QbGF0Zm9ybS5Ob2RlLnNwZWMudHMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pc29tb3JwaGljLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXRoL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9SdW5uZXIuTm9kZS50cyIsIndlYnBhY2s6Ly8vLi9+L3RzLXVuaXQvZGlzdC9zcmMvVHNVbml0TW9kdWxlLmpzIiwid2VicGFjazovLy8uL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXRBc3luYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxHQUFHO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscURB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUU7O0FBRTFCO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSTs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QyIsImZpbGUiOiJub2RlUnVubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ1dGlsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5vZGVSdW5uZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJub2RlUnVubmVyXCJdID0gZmFjdG9yeShyb290W1widXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNmNiM2M5OWU4MWMzZjBmZGU1NCIsImltcG9ydCB7IHdpbjMyIGFzIHdpbjMyQmFzZSwgcG9zaXggYXMgcG9zaXhCYXNlIH0gZnJvbSAncGF0aC9wYXRoJztcbmltcG9ydCB7IGlzV2luLCBpc0Jyb3dzZXIgfSBmcm9tICcuL3BsYXRmb3JtJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL25vb3AnO1xuXG5jb25zdCB1bnN1cHBvcnRlZE1ldGhvZHMgPSB7XG4gIHJlc29sdmU6IG5vb3AsXG4gIHJlbGF0aXZlOiBub29wLFxufTtcblxuY29uc3Qgd2luMzJSdW50aW1lID0gIE9iamVjdC5hc3NpZ24oe30sIHdpbjMyQmFzZSwgaXNCcm93c2VyKCkgPyB1bnN1cHBvcnRlZE1ldGhvZHMgOiB7fSk7XG5jb25zdCBwb3NpeFJ1bnRpbWUgPSBPYmplY3QuYXNzaWduKHt9LCBwb3NpeEJhc2UsICBpc0Jyb3dzZXIoKSA/IHVuc3VwcG9ydGVkTWV0aG9kcyA6IHt9KTtcblxubGV0IGRlZmF1bHRFeHBvcnQ7XG5pZiAoaXNXaW4oKSkge1xuICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luMzJSdW50aW1lKTtcbn0gZWxzZSB7XG4gIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwb3NpeFJ1bnRpbWUpO1xufVxubGV0IG5vcm1hbGl6ZVJ1bnRpbWU7XG5sZXQgam9pblJ1bnRpbWU7XG5sZXQgcmVzb2x2ZVJ1bnRpbWU7XG5sZXQgaXNBYnNvbHV0ZVJ1bnRpbWU7XG5sZXQgcmVsYXRpdmVSdW50aW1lO1xubGV0IGRpcm5hbWVSdW50aW1lO1xubGV0IGJhc2VuYW1lUnVudGltZTtcbmxldCBleHRuYW1lUnVudGltZTtcbmxldCBzZXBSdW50aW1lO1xubGV0IGRlbGltaXRlclJ1bnRpbWU7XG5sZXQgcGFyc2VSdW50aW1lO1xubGV0IGZvcm1hdFJ1bnRpbWU7XG5cbmlmIChpc1dpbigpKSB7XG4gIG5vcm1hbGl6ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUubm9ybWFsaXplO1xuICBqb2luUnVudGltZSA9IHdpbjMyUnVudGltZS5qb2luO1xuICByZXNvbHZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZXNvbHZlO1xuICBpc0Fic29sdXRlUnVudGltZSA9IHdpbjMyUnVudGltZS5pc0Fic29sdXRlO1xuICByZWxhdGl2ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucmVsYXRpdmU7XG4gIGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XG4gIGJhc2VuYW1lUnVudGltZSA9IHdpbjMyUnVudGltZS5iYXNlbmFtZTtcbiAgZXh0bmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZXh0bmFtZTtcbiAgc2VwUnVudGltZSA9IHdpbjMyUnVudGltZS5zZXA7XG4gIGRlbGltaXRlclJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZGVsaW1pdGVyO1xuICBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XG4gIGZvcm1hdFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZm9ybWF0O1xufSBlbHNlIHtcbiAgbm9ybWFsaXplUnVudGltZSA9IHBvc2l4UnVudGltZS5ub3JtYWxpemU7XG4gIGpvaW5SdW50aW1lID0gcG9zaXhSdW50aW1lLmpvaW47XG4gIHJlc29sdmVSdW50aW1lID0gcG9zaXhSdW50aW1lLnJlc29sdmU7XG4gIGlzQWJzb2x1dGVSdW50aW1lID0gcG9zaXhSdW50aW1lLmlzQWJzb2x1dGU7XG4gIHJlbGF0aXZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZWxhdGl2ZTtcbiAgZGlybmFtZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuZGlybmFtZTtcbiAgYmFzZW5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmJhc2VuYW1lO1xuICBleHRuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5leHRuYW1lO1xuICBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcbiAgZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XG4gIHBhcnNlUnVudGltZSA9IHBvc2l4UnVudGltZS5wYXJzZTtcbiAgZm9ybWF0UnVudGltZSA9IHBvc2l4UnVudGltZS5mb3JtYXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRFeHBvcnQ7XG5leHBvcnQge1xuICBub3JtYWxpemVSdW50aW1lIGFzIG5vcm1hbGl6ZSxcbiAgam9pblJ1bnRpbWUgYXMgam9pbixcbiAgcmVzb2x2ZVJ1bnRpbWUgYXMgcmVzb2x2ZSxcbiAgaXNBYnNvbHV0ZVJ1bnRpbWUgYXMgaXNBYnNvbHV0ZSxcbiAgcmVsYXRpdmVSdW50aW1lIGFzIHJlbGF0aXZlLFxuICBkaXJuYW1lUnVudGltZSBhcyBkaXJuYW1lLFxuICBiYXNlbmFtZVJ1bnRpbWUgYXMgYmFzZW5hbWUsXG4gIGV4dG5hbWVSdW50aW1lIGFzIGV4dG5hbWUsXG4gIHNlcFJ1bnRpbWUgYXMgc2VwUnVudGltZSxcbiAgZGVsaW1pdGVyUnVudGltZSBhcyBkZWxpbWl0ZXIsXG4gIHBhcnNlUnVudGltZSBhcyBwYXJzZSxcbiAgZm9ybWF0UnVudGltZSBhcyBmb3JtYXQsXG4gIHBvc2l4UnVudGltZSBhcyBwb3NpeCxcbiAgd2luMzJSdW50aW1lIGFzIHdpbjMyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9wYXRoLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc3JjL1RzVW5pdE1vZHVsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzLXVuaXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKiB0c1VuaXQgKGMpIENvcHlyaWdodCAyMDEyLTIwMTUgU3RldmUgRmVudG9uLCBsaWNlbnNlZCB1bmRlciBBcGFjaGUgMi4wIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZS1GZW50b24vdHNVbml0ICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBUZXN0IHtcbiAgICBjb25zdHJ1Y3RvciguLi50ZXN0TW9kdWxlcykge1xuICAgICAgICB0aGlzLnByaXZhdGVNZW1iZXJQcmVmaXggPSAnXyc7XG4gICAgICAgIHRoaXMucGFzc2VzID0gW107XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMudGVzdHMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNlcnZlZE1ldGhvZE5hbWVDb250YWluZXIgPSBuZXcgVGVzdENsYXNzKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlVGVzdExpbWl0ZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXN0TW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRlc3RNb2R1bGUgPSB0ZXN0TW9kdWxlc1tpXTtcbiAgICAgICAgICAgIGlmICh0ZXN0TW9kdWxlLmhhc093blByb3BlcnR5KFwibmFtZVwiKSkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdGVzdE1vZHVsZVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUZXN0Q2xhc3MobmV3IHRlc3RNb2R1bGUsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0ZXN0TW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVzdENsYXNzKG5ldyB0ZXN0TW9kdWxlW3Byb3BdLCBwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkVGVzdENsYXNzKHRlc3RDbGFzcywgbmFtZSA9ICdUZXN0cycpIHtcbiAgICAgICAgdGhpcy50ZXN0cy5wdXNoKG5ldyBUZXN0RGVmaW5pdGlvbih0ZXN0Q2xhc3MsIG5hbWUpKTtcbiAgICB9XG4gICAgcnVuKHRlc3RSdW5MaW1pdGVyID0gbnVsbCkge1xuICAgICAgICB2YXIgcGFyYW1ldGVycyA9IG51bGw7XG4gICAgICAgIHZhciB0ZXN0Q29udGV4dCA9IG5ldyBUZXN0Q29udGV4dCgpO1xuICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVzdFJ1bkxpbWl0ZXIgPSB0aGlzLnRlc3RSdW5MaW1pdGVyO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXN0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHRlc3RDbGFzcyA9IHRoaXMudGVzdHNbaV0udGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgICAgICB2YXIgdGVzdHNHcm91cE5hbWUgPSB0aGlzLnRlc3RzW2ldLm5hbWU7XG4gICAgICAgICAgICBpZiAodGVzdFJ1bkxpbWl0ZXIgJiYgIXRlc3RSdW5MaW1pdGVyLmlzVGVzdHNHcm91cEFjdGl2ZSh0ZXN0c0dyb3VwTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlci5nZXRGdW5jdGlvbk5hbWVzKHRlc3RDbGFzcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFRlc3ROYW1lID0gcHJvcGVydHlOYW1lc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Jlc2VydmVkRnVuY3Rpb25OYW1lKHVuaXRUZXN0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfHwgKHVuaXRUZXN0TmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4Lmxlbmd0aCkgPT09IHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeClcbiAgICAgICAgICAgICAgICAgICAgfHwgKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0gIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0ZXN0UnVuTGltaXRlciAmJiAhdGVzdFJ1bkxpbWl0ZXIuaXNUZXN0QWN0aXZlKHVuaXRUZXN0TmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5wYXJhbWV0ZXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBwYXJhbWV0ZXJzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyICYmICF0ZXN0UnVuTGltaXRlci5pc1BhcmFtZXRlcnNTZXRBY3RpdmUocGFyYW1ldGVySW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1blNpbmdsZVRlc3QodGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lLCBwYXJhbWV0ZXJzLCBwYXJhbWV0ZXJJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuU2luZ2xlVGVzdCh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2hvd1Jlc3VsdHModGFyZ2V0KSB7XG4gICAgICAgIHZhciBlbGVtO1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IHRhcmdldDtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9ICc8YXJ0aWNsZT4nICtcbiAgICAgICAgICAgICc8aDE+JyArIHRoaXMuZ2V0VGVzdFJlc3VsdCgpICsgJzwvaDE+JyArXG4gICAgICAgICAgICAnPHA+JyArIHRoaXMuZ2V0VGVzdFN1bW1hcnkoKSArICc8L3A+JyArXG4gICAgICAgICAgICB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0Q2xlYW5lcigpICtcbiAgICAgICAgICAgICc8c2VjdGlvbiBpZD1cInRzRmFpbFwiPicgK1xuICAgICAgICAgICAgJzxoMj5FcnJvcnM8L2gyPicgK1xuICAgICAgICAgICAgJzx1bCBjbGFzcz1cImJhZFwiPicgKyB0aGlzLmdldFRlc3RSZXN1bHRMaXN0KHRoaXMuZXJyb3JzKSArICc8L3VsPicgK1xuICAgICAgICAgICAgJzwvc2VjdGlvbj4nICtcbiAgICAgICAgICAgICc8c2VjdGlvbiBpZD1cInRzT2theVwiPicgK1xuICAgICAgICAgICAgJzxoMj5QYXNzaW5nIFRlc3RzPC9oMj4nICtcbiAgICAgICAgICAgICc8dWwgY2xhc3M9XCJnb29kXCI+JyArIHRoaXMuZ2V0VGVzdFJlc3VsdExpc3QodGhpcy5wYXNzZXMpICsgJzwvdWw+JyArXG4gICAgICAgICAgICAnPC9zZWN0aW9uPicgK1xuICAgICAgICAgICAgJzwvYXJ0aWNsZT4nICtcbiAgICAgICAgICAgIHRoaXMudGVzdFJ1bkxpbWl0ZXIuZ2V0TGltaXRDbGVhbmVyKCk7XG4gICAgICAgIGVsZW0uaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRUYXBSZXN1bHRzKCkge1xuICAgICAgICB2YXIgbmV3TGluZSA9ICdcXHJcXG4nO1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSAnMS4uJyArICh0aGlzLnBhc3Nlcy5sZW5ndGggKyB0aGlzLmVycm9ycy5sZW5ndGgpLnRvU3RyaW5nKCkgKyBuZXdMaW5lO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSAnbm90IG9rICcgKyB0aGlzLmVycm9yc1tpXS5tZXNzYWdlICsgJyAnICsgdGhpcy5lcnJvcnNbaV0udGVzdE5hbWUgKyAnOicgKyB0aGlzLmVycm9yc1tpXS5mdW5jTmFtZSArIG5ld0xpbmU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gJ29rICcgKyB0aGlzLnBhc3Nlc1tpXS50ZXN0TmFtZSArICc6JyArIHRoaXMucGFzc2VzW2ldLmZ1bmNOYW1lICsgbmV3TGluZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIGNyZWF0ZVRlc3RMaW1pdGVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0UnVuTGltaXRlciA9IG5ldyBUZXN0UnVuTGltaXRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkgeyB9XG4gICAgfVxuICAgIGlzUmVzZXJ2ZWRGdW5jdGlvbk5hbWUoZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3BlcnR5SGVscGVyXG4gICAgICAgICAgICAuZ2V0RnVuY3Rpb25OYW1lcyh0aGlzLnJlc2VydmVkTWV0aG9kTmFtZUNvbnRhaW5lcilcbiAgICAgICAgICAgIC5zb21lKG1lbSA9PiBtZW0gPT09IGZ1bmN0aW9uTmFtZSk7XG4gICAgfVxuICAgIHJ1blNpbmdsZVRlc3QodGVzdENsYXNzLCB1bml0VGVzdE5hbWUsIHRlc3RzR3JvdXBOYW1lLCBwYXJhbWV0ZXJzID0gbnVsbCwgcGFyYW1ldGVyU2V0SW5kZXggPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGVzdENsYXNzWydzZXRVcCddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0ZXN0Q2xhc3NbJ3NldFVwJ10oKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgICAgICB2YXIgYXJncyA9IChwYXJhbWV0ZXJTZXRJbmRleCAhPT0gbnVsbCkgPyBwYXJhbWV0ZXJzW3BhcmFtZXRlclNldEluZGV4XSA6IG51bGw7XG4gICAgICAgICAgICBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0uYXBwbHkodGVzdENsYXNzLCBhcmdzKTtcbiAgICAgICAgICAgIHRoaXMucGFzc2VzLnB1c2gobmV3IFRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgJ09LJykpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgZXJyLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRlc3RDbGFzc1sndGVhckRvd24nXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGVzdENsYXNzWyd0ZWFyRG93biddKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VGVzdFJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmxlbmd0aCA9PT0gMCA/ICdUZXN0IFBhc3NlZCcgOiAnVGVzdCBGYWlsZWQnO1xuICAgIH1cbiAgICBnZXRUZXN0U3VtbWFyeSgpIHtcbiAgICAgICAgcmV0dXJuICdUb3RhbCB0ZXN0czogPHNwYW4gaWQ9XCJ0c1VuaXRUb3RhbENvdXRcIj4nICsgKHRoaXMucGFzc2VzLmxlbmd0aCArIHRoaXMuZXJyb3JzLmxlbmd0aCkudG9TdHJpbmcoKSArICc8L3NwYW4+LiAnICtcbiAgICAgICAgICAgICdQYXNzZWQgdGVzdHM6IDxzcGFuIGlkPVwidHNVbml0UGFzc0NvdW50XCIgY2xhc3M9XCJnb29kXCI+JyArIHRoaXMucGFzc2VzLmxlbmd0aCArICc8L3NwYW4+LiAnICtcbiAgICAgICAgICAgICdGYWlsZWQgdGVzdHM6IDxzcGFuIGlkPVwidHNVbml0RmFpbENvdW50XCIgY2xhc3M9XCJiYWRcIj4nICsgdGhpcy5lcnJvcnMubGVuZ3RoICsgJzwvc3Bhbj4uJztcbiAgICB9XG4gICAgZ2V0VGVzdFJlc3VsdExpc3QodGVzdFJlc3VsdHMpIHtcbiAgICAgICAgdmFyIGxpc3QgPSAnJztcbiAgICAgICAgdmFyIGdyb3VwID0gJyc7XG4gICAgICAgIHZhciBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXN0UmVzdWx0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRlc3RSZXN1bHRzW2ldO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC50ZXN0TmFtZSAhPT0gZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBncm91cCA9IHJlc3VsdC50ZXN0TmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ICs9ICc8L2xpPjwvdWw+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlzdCArPSAnPGxpPicgKyB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0ZXJGb3JHcm91cChncm91cCkgKyByZXN1bHQudGVzdE5hbWUgKyAnPHVsPic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0Q2xhc3MgPSAocmVzdWx0Lm1lc3NhZ2UgPT09ICdPSycpID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJztcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbkxhYmFsID0gcmVzdWx0LmZ1bmNOYW1lICsgKChyZXN1bHQucGFyYW1ldGVyU2V0TnVtYmVyID09PSBudWxsKVxuICAgICAgICAgICAgICAgID8gJygpJ1xuICAgICAgICAgICAgICAgIDogJygnICsgdGhpcy50ZXN0UnVuTGltaXRlci5nZXRMaW1pdGVyRm9yVGVzdChncm91cCwgcmVzdWx0LmZ1bmNOYW1lLCByZXN1bHQucGFyYW1ldGVyU2V0TnVtYmVyKSArICcgcGFyYW1hdGVyIHNldDogJyArIHJlc3VsdC5wYXJhbWV0ZXJTZXROdW1iZXIgKyAnKScpO1xuICAgICAgICAgICAgbGlzdCArPSAnPGxpIGNsYXNzPVwiJyArIHJlc3VsdENsYXNzICsgJ1wiPicgKyB0aGlzLnRlc3RSdW5MaW1pdGVyLmdldExpbWl0ZXJGb3JUZXN0KGdyb3VwLCByZXN1bHQuZnVuY05hbWUpICsgZnVuY3Rpb25MYWJhbCArICc6ICcgKyB0aGlzLmVuY29kZUh0bWxFbnRpdGllcyhyZXN1bHQubWVzc2FnZSkgKyAnPC9saT4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0ICsgJzwvdWw+JztcbiAgICB9XG4gICAgZW5jb2RlSHRtbEVudGl0aWVzKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0ID0gVGVzdDtcbmNsYXNzIFRlc3RSdW5MaW1pdGVyUnVuQWxsIHtcbiAgICBpc1Rlc3RzR3JvdXBBY3RpdmUoZ3JvdXBOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc1Rlc3RBY3RpdmUodGVzdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlzUGFyYW1ldGVyc1NldEFjdGl2ZShwYXJhbWF0ZXJzU2V0TnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbmNsYXNzIFRlc3RSdW5MaW1pdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncm91cE5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnRlc3ROYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnNldFJlZnJlc2hPbkxpbmtzV2l0aEhhc2goKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTdHJpbmdJbnRvVGVzdHNMaW1pdCh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgfVxuICAgIGlzVGVzdHNHcm91cEFjdGl2ZShncm91cE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXBOYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cE5hbWUgPT09IGdyb3VwTmFtZTtcbiAgICB9XG4gICAgaXNUZXN0QWN0aXZlKHRlc3ROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRlc3ROYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50ZXN0TmFtZSA9PT0gdGVzdE5hbWU7XG4gICAgfVxuICAgIGlzUGFyYW1ldGVyc1NldEFjdGl2ZShwYXJhbWF0ZXJzU2V0KSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtZXRlclNldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVyU2V0ID09PSBwYXJhbWF0ZXJzU2V0O1xuICAgIH1cbiAgICBnZXRMaW1pdGVyRm9yVGVzdChncm91cE5hbWUsIHRlc3ROYW1lLCBwYXJhbWV0ZXJTZXQgPSBudWxsKSB7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJTZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRlc3ROYW1lICs9ICcoJyArIHBhcmFtZXRlclNldCArICcpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyZuYnNwOzxhIGhyZWY9XCIjJyArIGdyb3VwTmFtZSArICcvJyArIHRlc3ROYW1lICsgJ1xcXCIgY2xhc3M9XCJhc2NpaVwiPiYjOTY1ODs8L2E+Jm5ic3A7JztcbiAgICB9XG4gICAgZ2V0TGltaXRlckZvckdyb3VwKGdyb3VwTmFtZSkge1xuICAgICAgICByZXR1cm4gJyZuYnNwOzxhIGhyZWY9XCIjJyArIGdyb3VwTmFtZSArICdcIiBjbGFzcz1cImFzY2lpXCI+JiM5NjU4OzwvYT4mbmJzcDsnO1xuICAgIH1cbiAgICBnZXRMaW1pdENsZWFuZXIoKSB7XG4gICAgICAgIHJldHVybiAnPHA+PGEgaHJlZj1cIiNcIj5SdW4gYWxsIHRlc3RzIDxzcGFuIGNsYXNzPVwiYXNjaWlcIj4mIzk2NTg7PC9zcGFuPjwvYT48L3A+JztcbiAgICB9XG4gICAgc2V0UmVmcmVzaE9uTGlua3NXaXRoSGFzaCgpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzSGFuZGxlciA9IHdpbmRvdy5vbmhhc2hjaGFuZ2U7XG4gICAgICAgIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJldmlvdXNIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNIYW5kbGVyLmNhbGwod2luZG93LCBldik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHRyYW5zbGF0ZVN0cmluZ0ludG9UZXN0c0xpbWl0KHZhbHVlKSB7XG4gICAgICAgIHZhciByZWdleCA9IC9eIyhbX2EtekEtWjAtOV0rKSgoXFwvKFtfYS16QS1aMC05XSspKShcXCgoWzAtOV0rKVxcKSk/KT8kLztcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ2V4LmV4ZWModmFsdWUpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAxICYmICEhcmVzdWx0WzFdKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHJlc3VsdFsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDQgJiYgISFyZXN1bHRbNF0pIHtcbiAgICAgICAgICAgIHRoaXMudGVzdE5hbWUgPSByZXN1bHRbNF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiA2ICYmICEhcmVzdWx0WzZdKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlclNldCA9IHBhcnNlSW50KHJlc3VsdFs2XSwgMTApO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0UnVuTGltaXRlciA9IFRlc3RSdW5MaW1pdGVyO1xuY2xhc3MgVGVzdENvbnRleHQge1xuICAgIHNldFVwKCkge1xuICAgIH1cbiAgICB0ZWFyRG93bigpIHtcbiAgICB9XG4gICAgYXJlSWRlbnRpY2FsKGV4cGVjdGVkLCBhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoZXhwZWN0ZWQgIT09IGFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignYXJlSWRlbnRpY2FsIGZhaWxlZCB3aGVuIGdpdmVuICcgK1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRWYXJpYWJsZShleHBlY3RlZCkgKyAnIGFuZCAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFyZU5vdElkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKGV4cGVjdGVkID09PSBhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2FyZU5vdElkZW50aWNhbCBmYWlsZWQgd2hlbiBnaXZlbiAnICtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50VmFyaWFibGUoZXhwZWN0ZWQpICsgJyBhbmQgJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmVDb2xsZWN0aW9uc0lkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVzdWx0VG9TdHJpbmcocmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgbXNnID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtc2cgPSAnWycgKyByZXN1bHQucG9wKCkgKyAnXScgKyBtc2c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXNnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb21wYXJlQXJyYXkgPSAoZXhwZWN0ZWQsIGFjdHVhbCwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB2YXIgaW5kZXhTdHJpbmcgPSAnJztcbiAgICAgICAgICAgIGlmIChleHBlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgPSByZXN1bHRUb1N0cmluZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc0lkZW50aWNhbCBmYWlsZWQgd2hlbiBhcnJheSBhJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgaXMgbnVsbCBhbmQgYicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgKyAnIGlzIG5vdCBudWxsJywgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gY29ycmVjdDogYm90aCBhcmUgbnVsbHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdHVhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc0lkZW50aWNhbCBmYWlsZWQgd2hlbiBhcnJheSBhJyArXG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyBpcyBub3QgbnVsbCBhbmQgYicgK1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgaXMgbnVsbCcsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4cGVjdGVkLmxlbmd0aCAhPT0gYWN0dWFsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nID0gcmVzdWx0VG9TdHJpbmcocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc0lkZW50aWNhbCBmYWlsZWQgd2hlbiBsZW5ndGggb2YgYXJyYXkgYScgK1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKGxlbmd0aDogJyArIGV4cGVjdGVkLmxlbmd0aCArICcpIGlzIGRpZmZlcmVudCBvZiBsZW5ndGggb2YgYXJyYXkgYicgK1xuICAgICAgICAgICAgICAgICAgICBpbmRleFN0cmluZyArICcgKGxlbmd0aDogJyArIGFjdHVhbC5sZW5ndGggKyAnKScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgoZXhwZWN0ZWRbaV0gaW5zdGFuY2VvZiBBcnJheSkgJiYgKGFjdHVhbFtpXSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyZUFycmF5KGV4cGVjdGVkW2ldLCBhY3R1YWxbaV0sIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXhwZWN0ZWRbaV0gIT09IGFjdHVhbFtpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhTdHJpbmcgPSByZXN1bHRUb1N0cmluZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc0lkZW50aWNhbCBmYWlsZWQgd2hlbiBlbGVtZW50IGEnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyAoJyArIHRoaXMucHJpbnRWYXJpYWJsZShleHBlY3RlZFtpXSkgKyAnKSBpcyBkaWZmZXJlbnQgdGhhbiBlbGVtZW50IGInICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4U3RyaW5nICsgJyAoJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWxbaV0pICsgJyknLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGNvbXBhcmVBcnJheShleHBlY3RlZCwgYWN0dWFsLCBbXSk7XG4gICAgfVxuICAgIGFyZUNvbGxlY3Rpb25zTm90SWRlbnRpY2FsKGV4cGVjdGVkLCBhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5hcmVDb2xsZWN0aW9uc0lkZW50aWNhbChleHBlY3RlZCwgYWN0dWFsKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdhcmVDb2xsZWN0aW9uc05vdElkZW50aWNhbCBmYWlsZWQgd2hlbiBib3RoIGNvbGxlY3Rpb25zIGFyZSBpZGVudGljYWwnLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgaXNUcnVlKGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmICghYWN0dWFsKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc1RydWUgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0ZhbHNlKGFjdHVhbCwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2lzRmFsc2UgZmFpbGVkIHdoZW4gZ2l2ZW4gJyArIHRoaXMucHJpbnRWYXJpYWJsZShhY3R1YWwpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1RydXRoeShhY3R1YWwsIG1lc3NhZ2UgPSAnJykge1xuICAgICAgICBpZiAoIWFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNUcnVlIGZhaWxlZCB3aGVuIGdpdmVuICcgKyB0aGlzLnByaW50VmFyaWFibGUoYWN0dWFsKSwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNGYWxzZXkoYWN0dWFsLCBtZXNzYWdlID0gJycpIHtcbiAgICAgICAgaWYgKGFjdHVhbCkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5nZXRFcnJvcignaXNGYWxzZSBmYWlsZWQgd2hlbiBnaXZlbiAnICsgdGhpcy5wcmludFZhcmlhYmxlKGFjdHVhbCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93cyhhLCBtZXNzYWdlID0gJycsIGVycm9yU3RyaW5nID0gJycpIHtcbiAgICAgICAgdmFyIGFjdHVhbDtcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhY3R1YWwgPSBhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGEuZm4pIHtcbiAgICAgICAgICAgIGFjdHVhbCA9IGEuZm47XG4gICAgICAgICAgICBtZXNzYWdlID0gYS5tZXNzYWdlO1xuICAgICAgICAgICAgZXJyb3JTdHJpbmcgPSBhLmV4Y2VwdGlvblN0cmluZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFjdHVhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgaWYgKCFlcnJvclN0cmluZyB8fCBleC5tZXNzYWdlID09PSBlcnJvclN0cmluZykge1xuICAgICAgICAgICAgICAgIGlzVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvclN0cmluZyAmJiBleC5tZXNzYWdlICE9PSBlcnJvclN0cmluZykge1xuICAgICAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2RpZmZlcmVudCBlcnJvciBzdHJpbmcgdGhhbiBzdXBwbGllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNUaHJvd24pIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2RpZCBub3QgdGhyb3cgYW4gZXJyb3InLCBtZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2VzTm90VGhyb3coYWN0dWFsLCBtZXNzYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhY3R1YWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ3RocmV3IGFuIGVycm9yICcgKyBleCwgbWVzc2FnZSB8fCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhlY3V0ZXNXaXRoaW4oYWN0dWFsLCB0aW1lTGltaXQsIG1lc3NhZ2UgPSBudWxsKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRpbWVUb1N0cmluZyh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydE9mRXhlY3V0aW9uID0gZ2V0VGltZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYWN0dWFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc0V4ZWN1dGVUaW1lTGVzc1RoYW5MaW1pdCBmYWlscyB3aGVuIGdpdmVuIGNvZGUgdGhyb3dzIGFuIGV4Y2VwdGlvbjogXCInICsgZXggKyAnXCInLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhlY3V0aW5nVGltZSA9IGdldFRpbWUoKSAtIHN0YXJ0T2ZFeGVjdXRpb247XG4gICAgICAgIGlmIChleGVjdXRpbmdUaW1lID4gdGltZUxpbWl0KSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmdldEVycm9yKCdpc0V4ZWN1dGVUaW1lTGVzc1RoYW5MaW1pdCBmYWlscyB3aGVuIGV4ZWN1dGlvbiB0aW1lIG9mIGdpdmVuIGNvZGUgKCcgKyB0aW1lVG9TdHJpbmcoZXhlY3V0aW5nVGltZSkgKyAnIG1zKSAnICtcbiAgICAgICAgICAgICAgICAnZXhjZWVkIHRoZSBnaXZlbiBsaW1pdCgnICsgdGltZVRvU3RyaW5nKHRpbWVMaW1pdCkgKyAnIG1zKScsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZhaWwobWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIHRocm93IHRoaXMuZ2V0RXJyb3IoJ2ZhaWwnLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgZ2V0RXJyb3IocmVzdWx0TWVzc2FnZSwgbWVzc2FnZSA9ICcnKSB7XG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKHJlc3VsdE1lc3NhZ2UgKyAnLiAnICsgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihyZXN1bHRNZXNzYWdlKTtcbiAgICB9XG4gICAgc3RhdGljIGdldE5hbWVPZkNsYXNzKGlucHV0Q2xhc3MpIHtcbiAgICAgICAgLy8gc2VlOiBodHRwczovL3d3dy5zdGV2ZWZlbnRvbi5jby51ay9Db250ZW50L0Jsb2cvRGF0ZS8yMDEzMDQvQmxvZy9PYnRhaW5pbmctQS1DbGFzcy1OYW1lLUF0LVJ1bnRpbWUtSW4tVHlwZVNjcmlwdC9cbiAgICAgICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb24gKC57MSx9KVxcKC87XG4gICAgICAgIHZhciByZXN1bHRzID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoaW5wdXRDbGFzcy5jb25zdHJ1Y3Rvci50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogJyc7XG4gICAgfVxuICAgIHByaW50VmFyaWFibGUodmFyaWFibGUpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1wibnVsbFwiJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhcmlhYmxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuICd7b2JqZWN0OiAnICsgVGVzdENvbnRleHQuZ2V0TmFtZU9mQ2xhc3ModmFyaWFibGUpICsgJ30nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAneycgKyAodHlwZW9mIHZhcmlhYmxlKSArICd9IFwiJyArIHZhcmlhYmxlICsgJ1wiJztcbiAgICB9XG59XG5leHBvcnRzLlRlc3RDb250ZXh0ID0gVGVzdENvbnRleHQ7XG5jbGFzcyBUZXN0Q2xhc3MgZXh0ZW5kcyBUZXN0Q29udGV4dCB7XG4gICAgcGFyYW1ldGVyaXplVW5pdFRlc3QobWV0aG9kLCBwYXJhbWV0ZXJzQXJyYXkpIHtcbiAgICAgICAgbWV0aG9kLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzQXJyYXk7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0Q2xhc3MgPSBUZXN0Q2xhc3M7XG5jbGFzcyBGYWtlRmFjdG9yeSB7XG4gICAgc3RhdGljIGdldEZha2Uob2JqLCAuLi5pbXBsZW1lbnRhdGlvbnMpIHtcbiAgICAgICAgdmFyIGZha2VUeXBlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB0aGlzLnBvcHVsYXRlRmFrZVR5cGUoZmFrZVR5cGUsIG9iaik7XG4gICAgICAgIHZhciBmYWtlID0gbmV3IGZha2VUeXBlKCk7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlci5nZXRBbGxQcm9wZXJ0eU5hbWVzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgZmFrZVtwcm9wZXJ0eU5hbWVzW2tdXSA9IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coJ0RlZmF1bHQgZmFrZSBjYWxsZWQuJyk7IH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1lbWJlck5hbWVJbmRleCA9IDA7XG4gICAgICAgIHZhciBtZW1iZXJWYWx1ZUluZGV4ID0gMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbXBsZW1lbnRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpbXBsID0gaW1wbGVtZW50YXRpb25zW2ldO1xuICAgICAgICAgICAgZmFrZVtpbXBsW21lbWJlck5hbWVJbmRleF1dID0gaW1wbFttZW1iZXJWYWx1ZUluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFrZTtcbiAgICB9XG4gICAgc3RhdGljIHBvcHVsYXRlRmFrZVR5cGUoZmFrZSwgdG9Db3B5KSB7XG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlci5nZXRBbGxQcm9wZXJ0eU5hbWVzKHRvQ29weSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgIGZha2VbcHJvcGVydHldID0gdG9Db3B5W3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZmFrZTtcbiAgICAgICAgfTtcbiAgICAgICAgX18ucHJvdG90eXBlID0gdG9Db3B5LnByb3RvdHlwZTtcbiAgICAgICAgZmFrZS5wcm90b3R5cGUgPSBuZXcgX18oKTtcbiAgICB9XG59XG5leHBvcnRzLkZha2VGYWN0b3J5ID0gRmFrZUZhY3Rvcnk7XG5jbGFzcyBUZXN0RGVmaW5pdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGVzdENsYXNzLCBuYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdERlZmluaXRpb24gPSBUZXN0RGVmaW5pdGlvbjtcbmNsYXNzIFRlc3REZXNjcmlwdGlvbiB7XG4gICAgY29uc3RydWN0b3IodGVzdE5hbWUsIGZ1bmNOYW1lLCBwYXJhbWV0ZXJTZXROdW1iZXIsIG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy50ZXN0TmFtZSA9IHRlc3ROYW1lO1xuICAgICAgICB0aGlzLmZ1bmNOYW1lID0gZnVuY05hbWU7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2V0TnVtYmVyID0gcGFyYW1ldGVyU2V0TnVtYmVyO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cbn1cbmV4cG9ydHMuVGVzdERlc2NyaXB0aW9uID0gVGVzdERlc2NyaXB0aW9uO1xuY2xhc3MgRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlciB7XG4gICAgc3RhdGljIHdhbGtJbXBsKG9iaiwgcmVzdWx0cykge1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvd25Qcm9wZXJ0aWVzT2ZPYmogPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICAgICAgICBvd25Qcm9wZXJ0aWVzT2ZPYmouZm9yRWFjaChtZW0gPT4gcmVzdWx0cy5hZGQobWVtKSk7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICAgICAgICBpZiAocHJvdG90eXBlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvdHlwZSk7XG4gICAgICAgIHByb3BOYW1lcy5mb3JFYWNoKG1lbSA9PiByZXN1bHRzLmFkZChtZW0pKTtcbiAgICAgICAgdGhpcy53YWxrSW1wbChvYmoucHJvdG90eXBlLCByZXN1bHRzKTtcbiAgICAgICAgdGhpcy53YWxrSW1wbChwcm90b3R5cGUsIHJlc3VsdHMpO1xuICAgIH1cbiAgICBzdGF0aWMgd2FsayhvYmopIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy53YWxrSW1wbChvYmosIHJlc3VsdHMpO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShyZXN1bHRzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEZ1bmN0aW9uTmFtZXModHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy53YWxrKHR5cGUpXG4gICAgICAgICAgICAuZmlsdGVyKG1lbSA9PiB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gdHlwZVttZW1dO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZCBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmXG4gICAgICAgICAgICAgICAgKG1ldGhvZCAhPT0gdHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICBtZXRob2QucHJvdG90eXBlICE9PVxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFByb3RvdHlwZU9mKHR5cGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRBbGxQcm9wZXJ0eU5hbWVzKHR5cGUpIHtcbiAgICAgICAgbGV0IHByb3BlcnRpZXMgPSB0aGlzLndhbGsodHlwZSk7XG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25Qcm9wcyA9IHRoaXMud2FsayhGdW5jdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcy5maWx0ZXIobWVtID0+ICFmdW5jdGlvblByb3BzLnNvbWUoZnVuY1Byb3AgPT4gZnVuY1Byb3AgPT09IG1lbSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLmZpbHRlcihtZW0gPT4ge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHR5cGVbbWVtXTtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QgIT09IHR5cGUgJiZcbiAgICAgICAgICAgICAgICBtZXRob2QucHJvdG90eXBlICE9PVxuICAgICAgICAgICAgICAgICAgICBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRQcm90b3R5cGVPZih0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5GdW5jdGlvblByb3BlcnR5SGVscGVyID0gRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRzVW5pdC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInV0aWxcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgaXNNYWMgPSAoKTogYm9vbGVhbiA9PiB7XG4gIGlmIChwcm9jZXNzXG4gICYmIHR5cGVvZiBwcm9jZXNzLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAmJiBwcm9jZXNzLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkgPT09ICdkYXJ3aW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgJiYgdHlwZW9mIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbWFjJykgPiAtMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzV2luID0gKCk6IGJvb2xlYW4gPT4ge1xuICBpZiAocHJvY2Vzc1xuICAmJiB0eXBlb2YgcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3N0cmluZydcbiAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnd2luMzInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB0eXBlb2YgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xuICAgICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbicpID4gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSAoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vZGUgPSAoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3BsYXRmb3JtLnRzIiwiaW1wb3J0ICogYXMgdHNVbml0IGZyb20gJ3RzLXVuaXQnO1xyXG5pbXBvcnQgKiBhcyBpc29tb3JwaGljUGF0aCBmcm9tICcuLi8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGhTcGVjIGV4dGVuZHMgdHNVbml0LlRlc3RDbGFzcyB7XHJcbiAgICB0ZXN0RGVmYXVsdEV4cG9ydCgpIHtcclxuICAgICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuLi9saWIvcGF0aCcpXTtcclxuICAgICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICd3aW4zMicpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcclxuICAgICAgbGV0IHBhdGggPSByZXF1aXJlKCcuLi9saWIvcGF0aCcpLmRlZmF1bHQ7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdcXFxcJywgcGF0aC5zZXAsICdkZWZhdWx0IHNlcGVyYXRvciBzaG91bGQgYmUgd2luMzIgXCJcXFxcXCIgYWZ0ZXIgaW4gd2luZG93cyBlbnZpcm9ubWVudCcpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnOycsIHBhdGguZGVsaW1pdGVyLCAnZGVmYXVsdCBkZWxpbWl0ZXIgc2hvdWxkIGJlIHdpbjMyIFwiO1wiIGFmdGVyIGluIHdpbmRvd3MgZW52aXJvbm1lbnQnKTtcclxuICAgICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuLi9saWIvcGF0aCcpXTtcclxuICAgICAgKHByb2Nlc3MgYXMgYW55KS5fX2RlZmluZUdldHRlcl9fKCdwbGF0Zm9ybScsICgpID0+ICdkYXJ3aW4nKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXHJcbiAgICAgIHBhdGggPSByZXF1aXJlKCcuLi9saWIvcGF0aCcpLmRlZmF1bHQ7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvJywgcGF0aC5zZXAsICdkZWZhdWx0IHNlcGVyYXRvciBzaG91bGQgYmUgcG9zaXggXCIvXCIgYWZ0ZXIgaW4gbWFjIGVudmlyb25tZW50Jyk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCc6JywgcGF0aC5kZWxpbWl0ZXIsICdkZWZhdWx0IGRlbGltaXRlciBzaG91bGQgYmUgcG9zaXggXCIvXCIgYWZ0ZXIgaW4gbWFjIGVudmlyb25tZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFdpbjMyQmFzZW5hbWUoKSB7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICdteWZpbGUuaHRtbCcsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuYmFzZW5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcclxuICAgICAgICAnd2luMzIgYmFzZW5hbWUgc2hvdWxkIHBhcnNlIGZpbGUgbmFtZSBmcm9tIHdpbmRvd3MgcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICdteWZpbGUuaHRtbCcsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuYmFzZW5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXHJcbiAgICAgICAgJ3dpbjMyIGJhc2VuYW1lIHNob3VsZCBwYXJzZSBmaWxlIG5hbWUgZnJvbSBwb3NpeCBwYXRoJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRlc3RQb3NpeEJhc2VuYW1lKCkge1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICAnbXlmaWxlLmh0bWwnLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmJhc2VuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5odG1sJyksXHJcbiAgICAgICAgJ3Bvc2l4IGJhc2VuYW1lIHNob3VsZCBub3QgcGFyc2Ugd2luZG93cyBwYXRoJyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJ215ZmlsZS5odG1sJyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5iYXNlbmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcclxuICAgICAgICAncG9zaXggYmFzZW5hbWUgc2hvdWxkIHBhcnNlIGZpbGUgbmFtZSBmcm9tIHBvc2l4IHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGVzdFdpbjMyU2VwKCkge1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnXFxcXCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLnNlcCwgJ3dpbjMyIHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiXFxcXFwiIHNlcCcpO1xyXG4gICAgfVxyXG4gICAgdGVzdFBvc2l4U2VwKCkge1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIGlzb21vcnBoaWNQYXRoLnBvc2l4LnNlcCwgJ3Bvc2l4IHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiL1wiIHNlcCcpO1xyXG4gICAgfVxyXG4gICAgdGVzdFdpbjMyRGVsaW1pdGVyKCkge1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnOycsIGlzb21vcnBoaWNQYXRoLndpbjMyLmRlbGltaXRlciwgJ3dpbjMyIHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiO1wiIGRlbGltaXRlcicpO1xyXG4gICAgfVxyXG4gICAgdGVzdFBvc2l4RGVsaW1pdGVyKCkge1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnOicsIGlzb21vcnBoaWNQYXRoLnBvc2l4LmRlbGltaXRlciwgJ3Bvc2l4IHNob3VsZCBjb3JyZWN0bHkgaW1wbGVtZW50IFwiO1wiIGRlbGltaXRlcicpO1xyXG4gICAgfVxyXG4gICAgdGVzdFdpbjMyRGlybmFtZSgpIHtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJ0M6XFxcXHRlbXAnLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmRpcm5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwnKSxcclxuICAgICAgICAnd2luMzIgZGlybmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGRpcmVjdG9yeSBwYXRoIGZyb20gd2luZG93cyBwYXRoJyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJy90ZW1wJyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5kaXJuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxyXG4gICAgICAgICd3aW4zMiBkaXJuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZGlyZWN0b3J5IHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRlc3RQb3NpeERpcm5hbWUoKSB7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICdDOlxcXFx0ZW1wJyxcclxuICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZGlybmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxyXG4gICAgICAncG9zaXggYmFzZW5hbWUgc2hvdWxkIG5vdCBwYXJzZSB3aW5kb3dzIHBhdGgnLFxyXG4gICAgKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJy90ZW1wJyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5kaXJuYW1lKCcvdGVtcC9teWZpbGUuaHRtbCcpLFxyXG4gICAgICAgICdwb3NpeCBkaXJuYW1lIHNob3VsZCBwYXJzZSBwYXJlbnQgZGlyZWN0b3J5IHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRlc3RXaW4zMkV4dG5hbWUoKSB7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICcuaHRtbCcsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnQzpcXFxcdGVtcFxcXFxteWZpbGUuaHRtbCcpLFxyXG4gICAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBleHRlbnNpb24gZnJvbSB3aW5kb3dzIHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICAnLmh0bWwnLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sJyksXHJcbiAgICAgICAgJ3dpbjMyIGV4dG5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICAnLmpzJyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5leHRuYW1lKCdDOlxcXFx0ZW1wXFxcXG15ZmlsZS5qcycpLFxyXG4gICAgICAgICd3aW4zMiBleHRuYW1lIHNob3VsZCBwYXJzZSBleHRlbnNpb24gZnJvbSB3aW5kb3dzIHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICAnLmpzJywgaXNvbW9ycGhpY1BhdGgud2luMzIuZXh0bmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwuanMnKSxcclxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICcuanMnLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJ0M6XFxcXHRlbXBcXFxcbXlmaWxlLmh0bWwuanMnKSxcclxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcHJlLWZpeGVkIGV4dGVuc2lvbiBmcm9tIHdpbmRvd3MgcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICcuanMnLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sLmh0bWwuanMnKSxcclxuICAgICAgICAnd2luMzIgZXh0bmFtZSBzaG91bGQgcGFyc2UgcHJlLWZpeGVkIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGVzdFBvc2l4RXh0bmFtZSgpIHtcclxuXHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICcuaHRtbCcsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguZXh0bmFtZSgnL3RlbXAvbXlmaWxlLmh0bWwnKSxcclxuICAgICAgICAncG9zaXggZXh0bmFtZSBzaG91bGQgcGFyc2UgcGFyZW50IGV4dGVuc2lvbiBwYXRoIGZyb20gcG9zaXggcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICcuanMnLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmV4dG5hbWUoJy90ZW1wL215ZmlsZS5odG1sLmpzJyksXHJcbiAgICAgICAgJ3Bvc2l4IGV4dG5hbWUgc2hvdWxkIHBhcnNlIHBhcmVudCBleHRlbnNpb24gcGF0aCBmcm9tIHBvc2l4IHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICAnLmpzJyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5leHRuYW1lKCcvdGVtcC9teWZpbGUuaHRtbC5odG1sLmpzJyksXHJcbiAgICAgICAgJ3Bvc2l4IGV4dG5hbWUgc2hvdWxkIHBhcnNlIHByZS1maXhlZCBwYXJlbnQgZXh0ZW5zaW9uIHBhdGggZnJvbSBwb3NpeCBwYXRoJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRlc3RXaW4zMkZvcm1hdCgpIHtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy9ob21lL3VzZXIvZGlyXFxcXGZpbGUudHh0JywgaXNvbW9ycGhpY1BhdGgud2luMzIuZm9ybWF0KHtcclxuICAgICAgICBkaXI6ICcvaG9tZS91c2VyL2RpcicsXHJcbiAgICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcclxuICAgICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3dpbjMyIGZvcm1hdCBzaG91bGQgbm90IGZvcm1hdCBwb3NpeCBQYXJzZWRQYXRoJyk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLndpbjMyLmZvcm1hdCh7XHJcbiAgICAgICAgcm9vdDogJ0M6XFxcXCcsXHJcbiAgICAgICAgZGlyOiAncGF0aFxcXFxkaXInLFxyXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXHJcbiAgICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICd3aW4zMiBmb3JtYXQgc2hvdWxkIGZvcm1hdCB3aW5kb3dzIFBhcnNlZFBhdGggd2l0aCByb290IGFuZCBkaXInKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ0M6XFxcXHBhdGhcXFxcZGlyXFxcXGZpbGUudHh0JywgaXNvbW9ycGhpY1BhdGgud2luMzIuZm9ybWF0KHtcclxuICAgICAgICBkaXI6ICdDOlxcXFxwYXRoXFxcXGRpcicsXHJcbiAgICAgICAgYmFzZTogJ2ZpbGUudHh0JyxcclxuICAgICAgfSBhcyBpc29tb3JwaGljUGF0aC5QYXJzZWRQYXRoKSwgJ3dpbjMyIGZvcm1hdCBzaG91bGQgZm9ybWF0IHdpbmRvd3MgUGFyc2VkUGF0aCB3aXRoIGRpcicpO1xyXG4gICAgfVxyXG4gICAgdGVzdFBvc2l4Rm9ybWF0KCkge1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnQzpcXFxccGF0aFxcXFxkaXIvZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC5wb3NpeC5mb3JtYXQoe1xyXG4gICAgICAgIGRpcjogJ0M6XFxcXHBhdGhcXFxcZGlyJyxcclxuICAgICAgICBiYXNlOiAnZmlsZS50eHQnLFxyXG4gICAgICB9IGFzIGlzb21vcnBoaWNQYXRoLlBhcnNlZFBhdGgpLCAncG9zaXggZm9ybWF0IHNob3VsZCBub3QgZm9ybWF0IHdpbmRvd3MgUGFyc2VkUGF0aCcpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnLCBpc29tb3JwaGljUGF0aC5wb3NpeC5mb3JtYXQoe1xyXG4gICAgICAgIHJvb3Q6ICcvaWdub3JlZCcsXHJcbiAgICAgICAgZGlyOiAnL2hvbWUvdXNlci9kaXInLFxyXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXHJcbiAgICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICdwb3NpeCBmb3JtYXQgc2hvdWxkIGZvcm1hdCBwb3NpeCBQYXJzZWRQYXRoIHdpdGggcm9vdCBhbmQgZGlyJyk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvaG9tZS91c2VyL2Rpci9maWxlLnR4dCcsIGlzb21vcnBoaWNQYXRoLnBvc2l4LmZvcm1hdCh7XHJcbiAgICAgICAgZGlyOiAnL2hvbWUvdXNlci9kaXInLFxyXG4gICAgICAgIGJhc2U6ICdmaWxlLnR4dCcsXHJcbiAgICAgIH0gYXMgaXNvbW9ycGhpY1BhdGguUGFyc2VkUGF0aCksICdwb3NpeCBmb3JtYXQgc2hvdWxkIGZvcm1hdCBwb3NpeCBQYXJzZWRQYXRoIHdpdGggZGlyJyk7XHJcbiAgICB9XHJcbiAgICB0ZXN0V2luMzJBYnNvbHV0ZSgpIHtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCcvL3NlcnZlcicpLFxyXG4gICAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgcG9zaXggYWJzb2x1dGUgcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnXFxcXFxcXFxzZXJ2ZXInKSxcclxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnQzovZm9vLy4uJyksXHJcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciB3aW5kb3dzIGFic29sdXRlIHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJ0M6XFxcXGZvb1xcXFwuLicpLFxyXG4gICAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3Igd2luZG93cyBhYnNvbHV0ZSBwYXRoJyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuaXNBYnNvbHV0ZSgnYmFyXFxcXGJheicpLFxyXG4gICAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcmVsYXRpdmUgcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmlzQWJzb2x1dGUoJ2Jhci9iYXonKSxcclxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHJlbGF0aXZlIHBvc2l4IHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5pc0Fic29sdXRlKCcuJyksXHJcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgcmVsYXRpdmUgcG9zaXggb3BlcmF0b3InLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGVzdFBvc2l4QWJzb2x1dGUoKSB7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnLy9zZXJ2ZXInKSxcclxuICAgICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHBvc2l4IGFic29sdXRlIHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJy9iYXovLi4nKSxcclxuICAgICAgICAncG9zaXggaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHBvc2l4IGFic29sdXRlIHBhdGggd2l0aCByZWxhdGl2ZSBvcGVyYXRvciBzdWZmaXgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdcXFxcXFxcXHNlcnZlcicpLFxyXG4gICAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ0M6L2Zvby8uLicpLFxyXG4gICAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ0M6XFxcXGZvb1xcXFwuLicpLFxyXG4gICAgICAgICdwb3NpeCBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgYWJzb2x1dGUgcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmlzQWJzb2x1dGUoJ2JhclxcXFxiYXonKSxcclxuICAgICAgICAnd2luMzIgaXNBYnNvbHV0ZSBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciB3aW5kb3dzIHJlbGF0aXZlIHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5pc0Fic29sdXRlKCdiYXIvYmF6JyksXHJcbiAgICAgICAgJ3dpbjMyIGlzQWJzb2x1dGUgc2hvdWxkIHJldHVybiB0cnVlIGZvciByZWxhdGl2ZSBwb3NpeCBwYXRoJyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXguaXNBYnNvbHV0ZSgnLicpLFxyXG4gICAgICAgICd3aW4zMiBpc0Fic29sdXRlIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgcmVsYXRpdmUgcG9zaXggb3BlcmF0b3InLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGVzdFdpbjMySm9pbigpIHtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJ0M6XFxcXGZvb1xcXFxiYXJcXFxcYmF6XFxcXGFzZGYnLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLmpvaW4oJ0M6XFxcXGZvbycsICdiYXInLCAnYmF6XFxcXGFzZGYnLCAncXV1eCcsICcuLicpLFxyXG4gICAgICAgICd3aW4zMiBqb2luIHNob3VsZCByZXR1cm4gam9pbmVkIHdpbmRvd3MgcGF0aCBnaXZlbiB3aW5kb3dzIGZyYWdtZW50cycsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICdcXFxcZm9vXFxcXGJhclxcXFxiYXpcXFxcYXNkZicsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIuam9pbignL2ZvbycsICdiYXInLCAnYmF6L2FzZGYnLCAncXV1eCcsICcuLicpLFxyXG4gICAgICAgICd3aW4zMiBqb2luIHNob3VsZCByZXR1cm4gam9pbmVkIHdpbmRvd3MgcGF0aCBnaXZlbiBwb3NpeCBmcmFnbWVudHMnLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGVzdFBvc2l4Sm9pbigpIHtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJ1xcXFxmb28vYmFyL2JhelxcXFxhc2RmJyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5qb2luKCdcXFxcZm9vJywgJ2JhcicsICdiYXpcXFxcYXNkZicsICdxdXV4JywgJy4uJyksXHJcbiAgICAgICAgJ3Bvc2l4IGpvaW4gc2hvdWxkIG5vdCByZXR1cm4gam9pbmVkIHBvc2l4IHBhdGggZ2l2ZW4gd2luZG93cyBmcmFnbWVudHMnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICAnL2Zvby9iYXIvYmF6L2FzZGYnLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLnBvc2l4LmpvaW4oJy9mb28nLCAnYmFyJywgJ2Jhei9hc2RmJywgJ3F1dXgnLCAnLi4nKSxcclxuICAgICAgICAncG9zaXggam9pbiBzaG91bGQgcmV0dXJuIGpvaW5lZCBwb3NpeCBwYXRoJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRlc3RXaW4zMk5vcm1hbGl6ZSgpIHtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJ0M6XFxcXHRlbXBcXFxcZm9vXFxcXGJhcicsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIubm9ybWFsaXplKCdDOi8vLy90ZW1wXFxcXFxcXFwvXFxcXC9cXFxcL2Zvby9iYXInKSxcclxuICAgICAgICAnd2luMzIgc2hvdWxkIG5vcm1hbGl6ZSBtaXhlZCBwYXRoIHRvIHdpbmRvd3Mgc2VwZXJhdG9yJyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJ0M6XFxcXHRlbXBcXFxcZm9vXFxcXCcsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIubm9ybWFsaXplKCdDOlxcXFx0ZW1wXFxcXFxcXFxmb29cXFxcYmFyXFxcXC4uXFxcXCcpLFxyXG4gICAgICAgICd3aW4zMiBzaG91bGQgbm9ybWFsaXplIHdpbmRvd3MgcGF0aCB0byB3aW5kb3dzIHNlcGVyYXRvcicsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICdcXFxcZm9vXFxcXGJhclxcXFxiYXpcXFxcYXNkZicsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxyXG4gICAgICAgICd3aW5kMzIgc2hvdWxkIG5vcm1hbGl6ZSBwb3NpeCBwYXRoIHRvIHdpbmRvd3Mgc2VwZXJhdG9yJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRlc3RQb3NpeE5vcm1hbGl6ZSgpIHtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJ0M6XFxcXHRlbXBcXFxcXFxcXGZvb1xcXFxiYXJcXFxcLi5cXFxcJyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5ub3JtYWxpemUoJ0M6XFxcXHRlbXBcXFxcXFxcXGZvb1xcXFxiYXJcXFxcLi5cXFxcJyksXHJcbiAgICAgICAgJ3Bvc2l4IHNob3VsZCBub3Qgbm9ybWFsaXplIHdpbmRvd3MgcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICcvZm9vL2Jhci9iYXovYXNkZicsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgubm9ybWFsaXplKCcvZm9vL2Jhci8vYmF6L2FzZGYvcXV1eC8uLicpLFxyXG4gICAgICAgICdwb3NpeCBzaG91bGQgbm9ybWFsaXplIHBvc2l4IHBhdGggdG8gcG9zaXggc2VwZXJhdG9yJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRlc3RXaW4zMlBhcnNlKCkge1xyXG4gICAgICBjb25zdCBwYXJzZWRQb3NpeCA9IGlzb21vcnBoaWNQYXRoLndpbjMyLnBhcnNlKCcvaG9tZS91c2VyL2Rpci9maWxlLnR4dCcpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLycsIHBhcnNlZFBvc2l4LnJvb3QsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCByb290Jyk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcvaG9tZS91c2VyL2RpcicsIHBhcnNlZFBvc2l4LmRpciwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGRpcicpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnZmlsZS50eHQnLCBwYXJzZWRQb3NpeC5iYXNlLCAnd2luMzIgc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggYmFzZScpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFBvc2l4LmV4dCwgJ3dpbjMyIHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGV4dCcpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnZmlsZScsIHBhcnNlZFBvc2l4Lm5hbWUsICd3aW4zMiBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBuYW1lJyk7XHJcblxyXG4gICAgICBjb25zdCBwYXJzZWRXaW5kb3dzID0gaXNvbW9ycGhpY1BhdGgud2luMzIucGFyc2UoJ0M6XFxcXHBhdGhcXFxcZGlyXFxcXGZpbGUudHh0Jyk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFwnLCBwYXJzZWRXaW5kb3dzLnJvb3QsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIHJvb3QnKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ0M6XFxcXHBhdGhcXFxcZGlyJywgcGFyc2VkV2luZG93cy5kaXIsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGRpcicpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnZmlsZS50eHQnLCBwYXJzZWRXaW5kb3dzLmJhc2UsICd3aW4zMiBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIGJhc2UnKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy50eHQnLCBwYXJzZWRXaW5kb3dzLmV4dCwgJ3dpbjMyIHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggZXh0Jyk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdmaWxlJywgcGFyc2VkV2luZG93cy5uYW1lLCAnd2luMzIgc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBuYW1lJyk7XHJcbiAgICB9XHJcbiAgICB0ZXN0UG9zaXhQYXJzZSgpIHtcclxuICAgICAgY29uc3QgcGFyc2VkUG9zaXggPSBpc29tb3JwaGljUGF0aC5wb3NpeC5wYXJzZSgnL2hvbWUvdXNlci9kaXIvZmlsZS50eHQnKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy8nLCBwYXJzZWRQb3NpeC5yb290LCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggcm9vdCcpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnL2hvbWUvdXNlci9kaXInLCBwYXJzZWRQb3NpeC5kaXIsICdwb3NpeCBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBkaXInKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUudHh0JywgcGFyc2VkUG9zaXguYmFzZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSBwb3NpeCBwYXRoIGJhc2UnKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJy50eHQnLCBwYXJzZWRQb3NpeC5leHQsICdwb3NpeCBzaG91bGQgcGFyc2UgcG9zaXggcGF0aCBleHQnKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ2ZpbGUnLCBwYXJzZWRQb3NpeC5uYW1lLCAncG9zaXggc2hvdWxkIHBhcnNlIHBvc2l4IHBhdGggbmFtZScpO1xyXG5cclxuICAgICAgY29uc3QgcGFyc2VkV2luZG93cyA9IGlzb21vcnBoaWNQYXRoLnBvc2l4LnBhcnNlKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnJywgcGFyc2VkV2luZG93cy5yb290LCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCByb290Jyk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCcnLCBwYXJzZWRXaW5kb3dzLmRpciwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggZGlyJyk7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKCdDOlxcXFxwYXRoXFxcXGRpclxcXFxmaWxlLnR4dCcsIHBhcnNlZFdpbmRvd3MuYmFzZSwgJ3Bvc2l4IHNob3VsZCBwYXJzZSB3aW5kb3dzIHBhdGggYmFzZScpO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbCgnLnR4dCcsIHBhcnNlZFdpbmRvd3MuZXh0LCAncG9zaXggc2hvdWxkIHBhcnNlIHdpbmRvd3MgcGF0aCBleHQnKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoJ0M6XFxcXHBhdGhcXFxcZGlyXFxcXGZpbGUnLCBwYXJzZWRXaW5kb3dzLm5hbWUsICdwb3NpeCBzaG91bGQgcGFyc2Ugd2luZG93cyBwYXRoIG5hbWUnKTtcclxuICAgIH1cclxuICAgIHRlc3RXaW4zMlJlc29sdmUoKSB7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICdDOlxcXFxmb29cXFxcYmFyXFxcXGJheicsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgud2luMzIucmVzb2x2ZSgnQzpcXFxcZm9vXFxcXGJhcicsICcuXFxcXGJheicpLFxyXG4gICAgICAgICd3aW4zMiBzaG91bGQgcmVzb2x2ZSB3aW5kb3dzIHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZU5vdElkZW50aWNhbChcclxuICAgICAgICAnXFxcXGZvb1xcXFxiYXJcXFxcYmF6JyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5yZXNvbHZlKCcvZm9vL2JhcicsICcuL2JheicpLFxyXG4gICAgICAgICd3aW4zMiBzaG91bGQgbm90IHJlc29sdmUgcG9zaXggcGF0aCB0byB3aW5kb3dzIGZvcm1hdCcsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0ZXN0UG9zaXhSZXNvbHZlKCkge1xyXG4gICAgICB0aGlzLmFyZU5vdElkZW50aWNhbChcclxuICAgICAgICAnQzpcXFxcZm9vXFxcXGJhci8uXFxcXGJheicsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgucmVzb2x2ZSgnQzpcXFxcZm9vXFxcXGJhcicsICcuXFxcXGJheicpLFxyXG4gICAgICAgICdwb3NpeCBzaG91bGQgbm90IHJlc29sdmUgd2luZG93cyBwYXRoJyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJy9mb28vYmFyL2JheicsXHJcbiAgICAgICAgaXNvbW9ycGhpY1BhdGgucG9zaXgucmVzb2x2ZSgnL2Zvby9iYXInLCAnLi9iYXonKSxcclxuICAgICAgICAncG9zaXggc2hvdWxkIHJlc29sdmUgcG9zaXggcGF0aCcsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0ZXN0V2luMzJSZWxhdGl2ZSgpIHtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJy4uXFxcXC4uXFxcXGltcGxcXFxcYmJiJyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC53aW4zMi5yZWxhdGl2ZSgnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYScsICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJyksXHJcbiAgICAgICAgJ3dpbjMyIHNob3VsZCByZWxhdGl2ZSB3aW5kb3dzIHBhdGgnLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFyZUlkZW50aWNhbChcclxuICAgICAgICAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInLFxyXG4gICAgICAgIGlzb21vcnBoaWNQYXRoLndpbjMyLnJlbGF0aXZlKCcvZGF0YS9vcmFuZGVhL3Rlc3QvYWFhJywgJy9kYXRhL29yYW5kZWEvaW1wbC9iYmInKSxcclxuICAgICAgICAnd2luMzIgc2hvdWxkIHJlbGF0aXZlIHBvc2l4IHBhdGggdG8gd2luZG93cyBmb3JtYXQnLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGVzdFBvc2l4UmVsYXRpdmUoKSB7XHJcbiAgICAgIHRoaXMuYXJlSWRlbnRpY2FsKFxyXG4gICAgICAgICcuLi8uXFxcXGJheicsIGlzb21vcnBoaWNQYXRoLnBvc2l4LnJlbGF0aXZlKCdDOlxcXFxmb29cXFxcYmFyJywgJy5cXFxcYmF6JyksXHJcbiAgICAgICAgJ3Bvc2l4IHNob3VsZCBub3QgcmVsYXRpdmUgd2luZG93cyBwYXRoJyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hcmVJZGVudGljYWwoXHJcbiAgICAgICAgJy4uLy4uL2ltcGwvYmJiJyxcclxuICAgICAgICBpc29tb3JwaGljUGF0aC5wb3NpeC5yZWxhdGl2ZSgnL2RhdGEvb3JhbmRlYS90ZXN0L2FhYScsICcvZGF0YS9vcmFuZGVhL2ltcGwvYmJiJyksXHJcbiAgICAgICAgJ3Bvc2l4IHNob3VsZCByZWxhdGl2ZSBwb3NpeCBwYXRoJyxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9QYXRoLk5vZGUuc3BlYy50cyIsImltcG9ydCAqIGFzIHRzVW5pdCBmcm9tICd0cy11bml0JztcclxuaW1wb3J0IHsgaXNXaW4sIGlzTWFjLCBpc05vZGUsIGlzQnJvd3NlciB9IGZyb20gJy4uL2xpYi9wbGF0Zm9ybSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1TcGVjIGV4dGVuZHMgdHNVbml0LlRlc3RDbGFzcyB7XHJcbiAgICB0ZXN0T3MoKSB7XHJcbiAgICAgIChwcm9jZXNzIGFzIGFueSkuX19kZWZpbmVHZXR0ZXJfXygncGxhdGZvcm0nLCAoKSA9PiAnd2luMzInKTsgLy8gc3R1YiBwbGF0Zm9ybSBjYWxsXHJcbiAgICAgIHRoaXMuaXNUcnVlKGlzV2luKCksICdpc1dpbiBzaG91bGQgcmV0dXJuIHRydWUgZm9yIHdpbmRvd3MgcGxhdGZvcm0gaWQ6IFwid2luMzJcIicpO1xyXG4gICAgICB0aGlzLmlzRmFsc2UoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gZmFsc2UgZm9yIHdpbmRvd3MgcGxhdGZvcm0gaWQ6IFwid2luMzJcIicpO1xyXG4gICAgICAocHJvY2VzcyBhcyBhbnkpLl9fZGVmaW5lR2V0dGVyX18oJ3BsYXRmb3JtJywgKCkgPT4gJ2RhcndpbicpOyAvLyBzdHViIHBsYXRmb3JtIGNhbGxcclxuICAgICAgdGhpcy5pc0ZhbHNlKGlzV2luKCksICdpc1dpbiBzaG91bGQgcmV0dXJuIGZhbHNlIGZvciBtYWMgcGxhdGZvcm0gaWQ6IFwiZGFyd2luXCInKTtcclxuICAgICAgdGhpcy5pc1RydWUoaXNNYWMoKSwgJ2lzTWFjIHNob3VsZCByZXR1cm4gdHJ1ZSBmb3IgbWFjIHBsYXRmb3JtIGlkOiBcImRhcndpblwiJyk7XHJcbiAgICB9XHJcbiAgICB0ZXN0RW52KCkge1xyXG4gICAgICB0aGlzLmlzVHJ1ZShpc05vZGUoKSwgJ2lzTm9kZSBzaG91bGQgcmV0dXJuIHRydWUgZm9yIG5vZGUgc3BlYycpO1xyXG4gICAgICB0aGlzLmlzRmFsc2UoaXNCcm93c2VyKCksICdpc0Jyb3dzZXIgc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgYnJvd3NlciBzcGVjJyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9QbGF0Zm9ybS5Ob2RlLnNwZWMudHMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ1dGlsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInV0aWxcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaXNvbW9ycGhpYy1wYXRoXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidXRpbFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiaXNvbW9ycGhpYy1wYXRoXCJdID0gZmFjdG9yeShyb290W1widXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhdGhfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XHJcbmNvbnN0IHBsYXRmb3JtXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xyXG5jb25zdCBub29wXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xyXG5jb25zdCB1bnN1cHBvcnRlZE1ldGhvZHMgPSB7XHJcbiAgICByZXNvbHZlOiBub29wXzEubm9vcCxcclxuICAgIHJlbGF0aXZlOiBub29wXzEubm9vcCxcclxufTtcclxuY29uc3Qgd2luMzJSdW50aW1lID0gT2JqZWN0LmFzc2lnbih7fSwgcGF0aF8xLndpbjMyLCBwbGF0Zm9ybV8xLmlzQnJvd3NlcigpID8gdW5zdXBwb3J0ZWRNZXRob2RzIDoge30pO1xyXG5leHBvcnRzLndpbjMyID0gd2luMzJSdW50aW1lO1xyXG5jb25zdCBwb3NpeFJ1bnRpbWUgPSBPYmplY3QuYXNzaWduKHt9LCBwYXRoXzEucG9zaXgsIHBsYXRmb3JtXzEuaXNCcm93c2VyKCkgPyB1bnN1cHBvcnRlZE1ldGhvZHMgOiB7fSk7XHJcbmV4cG9ydHMucG9zaXggPSBwb3NpeFJ1bnRpbWU7XHJcbmxldCBkZWZhdWx0RXhwb3J0O1xyXG5pZiAocGxhdGZvcm1fMS5pc1dpbigpKSB7XHJcbiAgICBkZWZhdWx0RXhwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luMzJSdW50aW1lKTtcclxufVxyXG5lbHNlIHtcclxuICAgIGRlZmF1bHRFeHBvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwb3NpeFJ1bnRpbWUpO1xyXG59XHJcbmxldCBub3JtYWxpemVSdW50aW1lO1xyXG5leHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZVJ1bnRpbWU7XHJcbmxldCBqb2luUnVudGltZTtcclxuZXhwb3J0cy5qb2luID0gam9pblJ1bnRpbWU7XHJcbmxldCByZXNvbHZlUnVudGltZTtcclxuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZVJ1bnRpbWU7XHJcbmxldCBpc0Fic29sdXRlUnVudGltZTtcclxuZXhwb3J0cy5pc0Fic29sdXRlID0gaXNBYnNvbHV0ZVJ1bnRpbWU7XHJcbmxldCByZWxhdGl2ZVJ1bnRpbWU7XHJcbmV4cG9ydHMucmVsYXRpdmUgPSByZWxhdGl2ZVJ1bnRpbWU7XHJcbmxldCBkaXJuYW1lUnVudGltZTtcclxuZXhwb3J0cy5kaXJuYW1lID0gZGlybmFtZVJ1bnRpbWU7XHJcbmxldCBiYXNlbmFtZVJ1bnRpbWU7XHJcbmV4cG9ydHMuYmFzZW5hbWUgPSBiYXNlbmFtZVJ1bnRpbWU7XHJcbmxldCBleHRuYW1lUnVudGltZTtcclxuZXhwb3J0cy5leHRuYW1lID0gZXh0bmFtZVJ1bnRpbWU7XHJcbmxldCBzZXBSdW50aW1lO1xyXG5leHBvcnRzLnNlcFJ1bnRpbWUgPSBzZXBSdW50aW1lO1xyXG5sZXQgZGVsaW1pdGVyUnVudGltZTtcclxuZXhwb3J0cy5kZWxpbWl0ZXIgPSBkZWxpbWl0ZXJSdW50aW1lO1xyXG5sZXQgcGFyc2VSdW50aW1lO1xyXG5leHBvcnRzLnBhcnNlID0gcGFyc2VSdW50aW1lO1xyXG5sZXQgZm9ybWF0UnVudGltZTtcclxuZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXRSdW50aW1lO1xyXG5pZiAocGxhdGZvcm1fMS5pc1dpbigpKSB7XHJcbiAgICBleHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUubm9ybWFsaXplO1xyXG4gICAgZXhwb3J0cy5qb2luID0gam9pblJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuam9pbjtcclxuICAgIGV4cG9ydHMucmVzb2x2ZSA9IHJlc29sdmVSdW50aW1lID0gd2luMzJSdW50aW1lLnJlc29sdmU7XHJcbiAgICBleHBvcnRzLmlzQWJzb2x1dGUgPSBpc0Fic29sdXRlUnVudGltZSA9IHdpbjMyUnVudGltZS5pc0Fic29sdXRlO1xyXG4gICAgZXhwb3J0cy5yZWxhdGl2ZSA9IHJlbGF0aXZlUnVudGltZSA9IHdpbjMyUnVudGltZS5yZWxhdGl2ZTtcclxuICAgIGV4cG9ydHMuZGlybmFtZSA9IGRpcm5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmRpcm5hbWU7XHJcbiAgICBleHBvcnRzLmJhc2VuYW1lID0gYmFzZW5hbWVSdW50aW1lID0gd2luMzJSdW50aW1lLmJhc2VuYW1lO1xyXG4gICAgZXhwb3J0cy5leHRuYW1lID0gZXh0bmFtZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZXh0bmFtZTtcclxuICAgIGV4cG9ydHMuc2VwUnVudGltZSA9IHNlcFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuc2VwO1xyXG4gICAgZXhwb3J0cy5kZWxpbWl0ZXIgPSBkZWxpbWl0ZXJSdW50aW1lID0gd2luMzJSdW50aW1lLmRlbGltaXRlcjtcclxuICAgIGV4cG9ydHMucGFyc2UgPSBwYXJzZVJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUucGFyc2U7XHJcbiAgICBleHBvcnRzLmZvcm1hdCA9IGZvcm1hdFJ1bnRpbWUgPSB3aW4zMlJ1bnRpbWUuZm9ybWF0O1xyXG59XHJcbmVsc2Uge1xyXG4gICAgZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemVSdW50aW1lID0gcG9zaXhSdW50aW1lLm5vcm1hbGl6ZTtcclxuICAgIGV4cG9ydHMuam9pbiA9IGpvaW5SdW50aW1lID0gcG9zaXhSdW50aW1lLmpvaW47XHJcbiAgICBleHBvcnRzLnJlc29sdmUgPSByZXNvbHZlUnVudGltZSA9IHBvc2l4UnVudGltZS5yZXNvbHZlO1xyXG4gICAgZXhwb3J0cy5pc0Fic29sdXRlID0gaXNBYnNvbHV0ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUuaXNBYnNvbHV0ZTtcclxuICAgIGV4cG9ydHMucmVsYXRpdmUgPSByZWxhdGl2ZVJ1bnRpbWUgPSBwb3NpeFJ1bnRpbWUucmVsYXRpdmU7XHJcbiAgICBleHBvcnRzLmRpcm5hbWUgPSBkaXJuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5kaXJuYW1lO1xyXG4gICAgZXhwb3J0cy5iYXNlbmFtZSA9IGJhc2VuYW1lUnVudGltZSA9IHBvc2l4UnVudGltZS5iYXNlbmFtZTtcclxuICAgIGV4cG9ydHMuZXh0bmFtZSA9IGV4dG5hbWVSdW50aW1lID0gcG9zaXhSdW50aW1lLmV4dG5hbWU7XHJcbiAgICBleHBvcnRzLnNlcFJ1bnRpbWUgPSBzZXBSdW50aW1lID0gcG9zaXhSdW50aW1lLnNlcDtcclxuICAgIGV4cG9ydHMuZGVsaW1pdGVyID0gZGVsaW1pdGVyUnVudGltZSA9IHBvc2l4UnVudGltZS5kZWxpbWl0ZXI7XHJcbiAgICBleHBvcnRzLnBhcnNlID0gcGFyc2VSdW50aW1lID0gcG9zaXhSdW50aW1lLnBhcnNlO1xyXG4gICAgZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXRSdW50aW1lID0gcG9zaXhSdW50aW1lLmZvcm1hdDtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0RXhwb3J0O1xyXG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcblxyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KF9fd2VicGFja19yZXF1aXJlX18oMCkpO1xyXG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5ub29wID0gKGZyb20sIHRvKSA9PiB7XHJcbiAgICB0aHJvdyBFcnJvcignbWV0aG9kIHVuc3VwcG9ydGVkIGluIGlzb21vcnBoaWMtcGF0aCcpO1xyXG59O1xyXG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pc01hYyA9ICgpID0+IHtcclxuICAgIGlmIChwcm9jZXNzXHJcbiAgICAgICAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnZGFyd2luJykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAmJiB0eXBlb2YgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICYmIG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5pc1dpbiA9ICgpID0+IHtcclxuICAgIGlmIChwcm9jZXNzXHJcbiAgICAgICAgJiYgdHlwZW9mIHByb2Nlc3MucGxhdGZvcm0gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgJiYgcHJvY2Vzcy5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpID09PSAnd2luMzInKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICYmIHR5cGVvZiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgJiYgbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignd2luJykgPiAtMSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLmlzQnJvd3NlciA9ICgpID0+IHtcclxuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcclxufTtcclxuZXhwb3J0cy5pc05vZGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xyXG59O1xyXG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTVZakUxTVRjM1lXUTJNbUU0TjJaak5qY3hOeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2Y0dGMGFDNTBjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMM0JoZEdndmNHRjBhQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1ZEhNaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwyNXZiM0F1ZEhNaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwzQnNZWFJtYjNKdExuUnpJaXdpZDJWaWNHRmphem92THk5bGVIUmxjbTVoYkNCY0luVjBhV3hjSWlKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUXNUenRCUTFaQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3h0UkVGQk1rTXNZMEZCWXpzN1FVRkZla1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3TzBGRGFFVkJMSE5EUVVGdFJUdEJRVU51UlN3d1EwRkJPRU03UVVGRE9VTXNjME5CUVRoQ08wRkJSVGxDTEUxQlFVMHNhMEpCUVd0Q0xFZEJRVWM3U1VGRGVrSXNUMEZCVHl4RlFVRkZMRmRCUVVrN1NVRkRZaXhSUVVGUkxFVkJRVVVzVjBGQlNUdERRVU5tTEVOQlFVTTdRVUZGUml4TlFVRk5MRmxCUVZrc1IwRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4WlFVRlRMRVZCUVVVc2IwSkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRnBSWGhGTERaQ1FVRkxPMEZCYUVWMlFpeE5RVUZOTEZsQlFWa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeFpRVUZUTEVWQlFVY3NiMEpCUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUVyUkhoRkxEWkNRVUZMTzBGQk4wUjJRaXhKUVVGSkxHRkJRV0VzUTBGQlF6dEJRVU5zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhuUWtGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFvc1lVRkJZU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRMnhFTEVOQlFVTTdRVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOT0xHRkJRV0VzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU5zUkN4RFFVRkRPMEZCUTBRc1NVRkJTU3huUWtGQlowSXNRMEZCUXp0QlFUSkRReXh4UTBGQlV6dEJRVEZETDBJc1NVRkJTU3hYUVVGWExFTkJRVU03UVVFeVEwTXNNa0pCUVVrN1FVRXhRM0pDTEVsQlFVa3NZMEZCWXl4RFFVRkRPMEZCTWtORExHbERRVUZQTzBGQk1VTXpRaXhKUVVGSkxHbENRVUZwUWl4RFFVRkRPMEZCTWtORExIVkRRVUZWTzBGQk1VTnFReXhKUVVGSkxHVkJRV1VzUTBGQlF6dEJRVEpEUXl4dFEwRkJVVHRCUVRGRE4wSXNTVUZCU1N4alFVRmpMRU5CUVVNN1FVRXlRME1zYVVOQlFVODdRVUV4UXpOQ0xFbEJRVWtzWlVGQlpTeERRVUZETzBGQk1rTkRMRzFEUVVGUk8wRkJNVU0zUWl4SlFVRkpMR05CUVdNc1EwRkJRenRCUVRKRFF5eHBRMEZCVHp0QlFURkRNMElzU1VGQlNTeFZRVUZWTEVOQlFVTTdRVUV5UTBNc1owTkJRVlU3UVVFeFF6RkNMRWxCUVVrc1owSkJRV2RDTEVOQlFVTTdRVUV5UTBNc2NVTkJRVk03UVVFeFF5OUNMRWxCUVVrc1dVRkJXU3hEUVVGRE8wRkJNa05ETERaQ1FVRkxPMEZCTVVOMlFpeEpRVUZKTEdGQlFXRXNRMEZCUXp0QlFUSkRReXdyUWtGQlRUdEJRWHBEZWtJc1JVRkJSU3hEUVVGRExFTkJRVU1zWjBKQlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOYUxHOURRVUZuUWl4SFFVRkhMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRE1VTXNNRUpCUVZjc1IwRkJSeXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETzBsQlEyaERMR2REUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjBReXh6UTBGQmFVSXNSMEZCUnl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wbEJRelZETEd0RFFVRmxMRWRCUVVjc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU40UXl4blEwRkJZeXhIUVVGSExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZEZEVNc2EwTkJRV1VzUjBGQlJ5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTNoRExHZERRVUZqTEVkQlFVY3NXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVOMFF5d3JRa0ZCVlN4SFFVRkhMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRE9VSXNiME5CUVdkQ0xFZEJRVWNzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTXhReXcwUWtGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRiRU1zT0VKQlFXRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wRkJRM1JETEVOQlFVTTdRVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOT0xHOURRVUZuUWl4SFFVRkhMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRE1VTXNNRUpCUVZjc1IwRkJSeXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETzBsQlEyaERMR2REUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjBReXh6UTBGQmFVSXNSMEZCUnl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wbEJRelZETEd0RFFVRmxMRWRCUVVjc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU40UXl4blEwRkJZeXhIUVVGSExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZEZEVNc2EwTkJRV1VzUjBGQlJ5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTNoRExHZERRVUZqTEVkQlFVY3NXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVOMFF5d3JRa0ZCVlN4SFFVRkhMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRE9VSXNiME5CUVdkQ0xFZEJRVWNzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTXhReXcwUWtGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRiRU1zT0VKQlFXRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wRkJRM1JETEVOQlFVTTdRVUZGUkN4clFrRkJaU3hoUVVGaExFTkJRVU03T3pzN096czdPMEZETTBRM1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3UVVGSFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzYTBKQlFXdENPMEZCUTI1RE96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVVN4dlFrRkJiMEk3UVVGRE5VSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzVVVGQlVTeFZRVUZWTzBGQlEyeENPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNkMEpCUVhkQ0xFVkJRVVU3TzBGQlJURkNPMEZCUTBFN1FVRkRRU3gxUWtGQmRVSXNTVUZCU1RzN1FVRkZNMEk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3h2UTBGQmIwTXNVMEZCVXp0QlFVTTNRenRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNjMEpCUVhOQ08wRkJRM1pETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHOURRVUZ2UXp0QlFVTndRenRCUVVOQkxHZENRVUZuUWl4RlFVRkZPMEZCUTJ4Q0xIRkRRVUZ4UXl4SFFVRkhPMEZCUTNoRE96dEJRVVZCTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpeFpRVUZaTzBGQlF6ZENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzSzBKQlFTdENMREpDUVVFeVFqdEJRVU14UkR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVN4dlFrRkJiMEk3T3p0QlFVZHdRanRCUVVOQk8wRkJRMEU3UVVGRFFTdzJRa0ZCTmtJc1NVRkJTVHRCUVVOcVF6czdPMEZCUjBFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEc5RFFVRnZReXc0UWtGQk9FSTdRVUZEYkVVN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpeHpRa0ZCYzBJN1FVRkRka003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpeFpRVUZaTzBGQlF6ZENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3clFrRkJLMElzYzBKQlFYTkNPMEZCUTNKRU8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOdWJrSkJMR2xEUVVGMVFqczdPenM3T3pzN096dEJRMEZXTEZsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVZrc1JVRkJSU3hGUVVGVkxFVkJRVlVzUlVGQlJUdEpRVU4yUkN4TlFVRk5MRXRCUVVzc1EwRkJReXgxUTBGQmRVTXNRMEZCUXl4RFFVRkRPMEZCUTNaRUxFTkJRVU1zUTBGQlF6czdPenM3T3pzN096dEJRMFpYTEdGQlFVc3NSMEZCUnl4SFFVRlpMRVZCUVVVN1NVRkRha01zUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHp0WFFVTlNMRTlCUVU4c1QwRkJUeXhEUVVGRExGRkJRVkVzUzBGQlN5eFJRVUZSTzFkQlEzQkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTJRc1EwRkJRenRKUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRk5CUVZNc1MwRkJTeXhYUVVGWE8xZEJRM2hETEU5QlFVOHNVMEZCVXl4RFFVRkRMRkZCUVZFc1MwRkJTeXhSUVVGUk8xZEJRM1JETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU40UkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTA0c1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU5tTEVOQlFVTTdRVUZEU0N4RFFVRkRMRU5CUVVNN1FVRkZWeXhoUVVGTExFZEJRVWNzUjBGQldTeEZRVUZGTzBsQlEycERMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVTg3VjBGRFVpeFBRVUZQTEU5QlFVOHNRMEZCUXl4UlFVRlJMRXRCUVVzc1VVRkJVVHRYUVVOd1F5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5rTEVOQlFVTTdTVUZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eFRRVUZUTEV0QlFVc3NWMEZCVnp0WFFVTjBReXhQUVVGUExGTkJRVk1zUTBGQlF5eFJRVUZSTEV0QlFVc3NVVUZCVVR0WFFVTjBReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTmtMRU5CUVVNN1NVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5PTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRaaXhEUVVGRE8wRkJRMGdzUTBGQlF5eERRVUZETzBGQlJWY3NhVUpCUVZNc1IwRkJSeXhIUVVGWkxFVkJRVVU3U1VGRGNrTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1RVRkJUU3hMUVVGTExGZEJRVmNzUTBGQlF6dEJRVU4yUXl4RFFVRkRMRU5CUVVNN1FVRkZWeXhqUVVGTkxFZEJRVWNzUjBGQldTeEZRVUZGTzBsQlEyeERMRTFCUVUwc1EwRkJReXhQUVVGUExFMUJRVTBzUzBGQlN5eFhRVUZYTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1YwRkJWeXhEUVVGRE8wRkJRM3BGTEVOQlFVTXNRMEZCUXpzN096czdPenRCUTJ4RFJpeHBReUlzSW1acGJHVWlPaUpwYzI5dGIzSndhR2xqTFhCaGRHZ3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSjFkR2xzWENJcEtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0Y0luVjBhV3hjSWwwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lhWE52Ylc5eWNHaHBZeTF3WVhSb1hDSmRJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpZFhScGJGd2lLU2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aWFYTnZiVzl5Y0docFl5MXdZWFJvWENKZElEMGdabUZqZEc5eWVTaHliMjkwVzF3aWRYUnBiRndpWFNrN1hHNTlLU2gwYUdsekxDQm1kVzVqZEdsdmJpaGZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4Rlh6VmZYeWtnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJwWkdWdWRHbDBlU0JtZFc1amRHbHZiaUJtYjNJZ1kyRnNiR2x1WnlCb1lYSnRiMjU1SUdsdGNHOXlkSE1nZDJsMGFDQjBhR1VnWTI5eWNtVmpkQ0JqYjI1MFpYaDBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5Zkxta2dQU0JtZFc1amRHbHZiaWgyWVd4MVpTa2dleUJ5WlhSMWNtNGdkbUZzZFdVN0lIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZTF4dUlGeDBYSFJjZEZ4MFkyOXVabWxuZFhKaFlteGxPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmNkR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnWEhSY2RGeDBYSFJuWlhRNklHZGxkSFJsY2x4dUlGeDBYSFJjZEgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJRElwTzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZZbTl2ZEhOMGNtRndJRGxpTVRVeE56ZGhaRFl5WVRnM1ptTTJOekUzSWl3aWFXMXdiM0owSUhzZ2QybHVNeklnWVhNZ2QybHVNekpDWVhObExDQndiM05wZUNCaGN5QndiM05wZUVKaGMyVWdmU0JtY205dElDZHdZWFJvTDNCaGRHZ25PMXh1YVcxd2IzSjBJSHNnYVhOWGFXNHNJR2x6UW5KdmQzTmxjaUI5SUdaeWIyMGdKeTR2Y0d4aGRHWnZjbTBuTzF4dWFXMXdiM0owSUhzZ2JtOXZjQ0I5SUdaeWIyMGdKeTR2Ym05dmNDYzdYRzVjYm1OdmJuTjBJSFZ1YzNWd2NHOXlkR1ZrVFdWMGFHOWtjeUE5SUh0Y2JpQWdjbVZ6YjJ4MlpUb2dibTl2Y0N4Y2JpQWdjbVZzWVhScGRtVTZJRzV2YjNBc1hHNTlPMXh1WEc1amIyNXpkQ0IzYVc0ek1sSjFiblJwYldVZ1BTQWdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkMmx1TXpKQ1lYTmxMQ0JwYzBKeWIzZHpaWElvS1NBL0lIVnVjM1Z3Y0c5eWRHVmtUV1YwYUc5a2N5QTZJSHQ5S1R0Y2JtTnZibk4wSUhCdmMybDRVblZ1ZEdsdFpTQTlJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJSEJ2YzJsNFFtRnpaU3dnSUdselFuSnZkM05sY2lncElEOGdkVzV6ZFhCd2IzSjBaV1JOWlhSb2IyUnpJRG9nZTMwcE8xeHVYRzVzWlhRZ1pHVm1ZWFZzZEVWNGNHOXlkRHRjYm1sbUlDaHBjMWRwYmlncEtTQjdYRzRnSUdSbFptRjFiSFJGZUhCdmNuUWdQU0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0IzYVc0ek1sSjFiblJwYldVcE8xeHVmU0JsYkhObElIdGNiaUFnWkdWbVlYVnNkRVY0Y0c5eWRDQTlJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJSEJ2YzJsNFVuVnVkR2x0WlNrN1hHNTlYRzVzWlhRZ2JtOXliV0ZzYVhwbFVuVnVkR2x0WlR0Y2JteGxkQ0JxYjJsdVVuVnVkR2x0WlR0Y2JteGxkQ0J5WlhOdmJIWmxVblZ1ZEdsdFpUdGNibXhsZENCcGMwRmljMjlzZFhSbFVuVnVkR2x0WlR0Y2JteGxkQ0J5Wld4aGRHbDJaVkoxYm5ScGJXVTdYRzVzWlhRZ1pHbHlibUZ0WlZKMWJuUnBiV1U3WEc1c1pYUWdZbUZ6Wlc1aGJXVlNkVzUwYVcxbE8xeHViR1YwSUdWNGRHNWhiV1ZTZFc1MGFXMWxPMXh1YkdWMElITmxjRkoxYm5ScGJXVTdYRzVzWlhRZ1pHVnNhVzFwZEdWeVVuVnVkR2x0WlR0Y2JteGxkQ0J3WVhKelpWSjFiblJwYldVN1hHNXNaWFFnWm05eWJXRjBVblZ1ZEdsdFpUdGNibHh1YVdZZ0tHbHpWMmx1S0NrcElIdGNiaUFnYm05eWJXRnNhWHBsVW5WdWRHbHRaU0E5SUhkcGJqTXlVblZ1ZEdsdFpTNXViM0p0WVd4cGVtVTdYRzRnSUdwdmFXNVNkVzUwYVcxbElEMGdkMmx1TXpKU2RXNTBhVzFsTG1wdmFXNDdYRzRnSUhKbGMyOXNkbVZTZFc1MGFXMWxJRDBnZDJsdU16SlNkVzUwYVcxbExuSmxjMjlzZG1VN1hHNGdJR2x6UVdKemIyeDFkR1ZTZFc1MGFXMWxJRDBnZDJsdU16SlNkVzUwYVcxbExtbHpRV0p6YjJ4MWRHVTdYRzRnSUhKbGJHRjBhWFpsVW5WdWRHbHRaU0E5SUhkcGJqTXlVblZ1ZEdsdFpTNXlaV3hoZEdsMlpUdGNiaUFnWkdseWJtRnRaVkoxYm5ScGJXVWdQU0IzYVc0ek1sSjFiblJwYldVdVpHbHlibUZ0WlR0Y2JpQWdZbUZ6Wlc1aGJXVlNkVzUwYVcxbElEMGdkMmx1TXpKU2RXNTBhVzFsTG1KaGMyVnVZVzFsTzF4dUlDQmxlSFJ1WVcxbFVuVnVkR2x0WlNBOUlIZHBiak15VW5WdWRHbHRaUzVsZUhSdVlXMWxPMXh1SUNCelpYQlNkVzUwYVcxbElEMGdkMmx1TXpKU2RXNTBhVzFsTG5ObGNEdGNiaUFnWkdWc2FXMXBkR1Z5VW5WdWRHbHRaU0E5SUhkcGJqTXlVblZ1ZEdsdFpTNWtaV3hwYldsMFpYSTdYRzRnSUhCaGNuTmxVblZ1ZEdsdFpTQTlJSGRwYmpNeVVuVnVkR2x0WlM1d1lYSnpaVHRjYmlBZ1ptOXliV0YwVW5WdWRHbHRaU0E5SUhkcGJqTXlVblZ1ZEdsdFpTNW1iM0p0WVhRN1hHNTlJR1ZzYzJVZ2UxeHVJQ0J1YjNKdFlXeHBlbVZTZFc1MGFXMWxJRDBnY0c5emFYaFNkVzUwYVcxbExtNXZjbTFoYkdsNlpUdGNiaUFnYW05cGJsSjFiblJwYldVZ1BTQndiM05wZUZKMWJuUnBiV1V1YW05cGJqdGNiaUFnY21WemIyeDJaVkoxYm5ScGJXVWdQU0J3YjNOcGVGSjFiblJwYldVdWNtVnpiMngyWlR0Y2JpQWdhWE5CWW5OdmJIVjBaVkoxYm5ScGJXVWdQU0J3YjNOcGVGSjFiblJwYldVdWFYTkJZbk52YkhWMFpUdGNiaUFnY21Wc1lYUnBkbVZTZFc1MGFXMWxJRDBnY0c5emFYaFNkVzUwYVcxbExuSmxiR0YwYVhabE8xeHVJQ0JrYVhKdVlXMWxVblZ1ZEdsdFpTQTlJSEJ2YzJsNFVuVnVkR2x0WlM1a2FYSnVZVzFsTzF4dUlDQmlZWE5sYm1GdFpWSjFiblJwYldVZ1BTQndiM05wZUZKMWJuUnBiV1V1WW1GelpXNWhiV1U3WEc0Z0lHVjRkRzVoYldWU2RXNTBhVzFsSUQwZ2NHOXphWGhTZFc1MGFXMWxMbVY0ZEc1aGJXVTdYRzRnSUhObGNGSjFiblJwYldVZ1BTQndiM05wZUZKMWJuUnBiV1V1YzJWd08xeHVJQ0JrWld4cGJXbDBaWEpTZFc1MGFXMWxJRDBnY0c5emFYaFNkVzUwYVcxbExtUmxiR2x0YVhSbGNqdGNiaUFnY0dGeWMyVlNkVzUwYVcxbElEMGdjRzl6YVhoU2RXNTBhVzFsTG5CaGNuTmxPMXh1SUNCbWIzSnRZWFJTZFc1MGFXMWxJRDBnY0c5emFYaFNkVzUwYVcxbExtWnZjbTFoZER0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdaR1ZtWVhWc2RFVjRjRzl5ZER0Y2JtVjRjRzl5ZENCN1hHNGdJRzV2Y20xaGJHbDZaVkoxYm5ScGJXVWdZWE1nYm05eWJXRnNhWHBsTEZ4dUlDQnFiMmx1VW5WdWRHbHRaU0JoY3lCcWIybHVMRnh1SUNCeVpYTnZiSFpsVW5WdWRHbHRaU0JoY3lCeVpYTnZiSFpsTEZ4dUlDQnBjMEZpYzI5c2RYUmxVblZ1ZEdsdFpTQmhjeUJwYzBGaWMyOXNkWFJsTEZ4dUlDQnlaV3hoZEdsMlpWSjFiblJwYldVZ1lYTWdjbVZzWVhScGRtVXNYRzRnSUdScGNtNWhiV1ZTZFc1MGFXMWxJR0Z6SUdScGNtNWhiV1VzWEc0Z0lHSmhjMlZ1WVcxbFVuVnVkR2x0WlNCaGN5QmlZWE5sYm1GdFpTeGNiaUFnWlhoMGJtRnRaVkoxYm5ScGJXVWdZWE1nWlhoMGJtRnRaU3hjYmlBZ2MyVndVblZ1ZEdsdFpTQmhjeUJ6WlhCU2RXNTBhVzFsTEZ4dUlDQmtaV3hwYldsMFpYSlNkVzUwYVcxbElHRnpJR1JsYkdsdGFYUmxjaXhjYmlBZ2NHRnljMlZTZFc1MGFXMWxJR0Z6SUhCaGNuTmxMRnh1SUNCbWIzSnRZWFJTZFc1MGFXMWxJR0Z6SUdadmNtMWhkQ3hjYmlBZ2NHOXphWGhTZFc1MGFXMWxJR0Z6SUhCdmMybDRMRnh1SUNCM2FXNHpNbEoxYm5ScGJXVWdZWE1nZDJsdU16SXNYRzU5TzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwzQmhkR2d1ZEhNaUxDSXZMeUJEYjNCNWNtbG5hSFFnU205NVpXNTBMQ0JKYm1NdUlHRnVaQ0J2ZEdobGNpQk9iMlJsSUdOdmJuUnlhV0oxZEc5eWN5NWNjbHh1THk5Y2NseHVMeThnVUdWeWJXbHpjMmx2YmlCcGN5Qm9aWEpsWW5rZ1ozSmhiblJsWkN3Z1puSmxaU0J2WmlCamFHRnlaMlVzSUhSdklHRnVlU0J3WlhKemIyNGdiMkowWVdsdWFXNW5JR0ZjY2x4dUx5OGdZMjl3ZVNCdlppQjBhR2x6SUhOdlpuUjNZWEpsSUdGdVpDQmhjM052WTJsaGRHVmtJR1J2WTNWdFpXNTBZWFJwYjI0Z1ptbHNaWE1nS0hSb1pWeHlYRzR2THlCY0lsTnZablIzWVhKbFhDSXBMQ0IwYnlCa1pXRnNJR2x1SUhSb1pTQlRiMlowZDJGeVpTQjNhWFJvYjNWMElISmxjM1J5YVdOMGFXOXVMQ0JwYm1Oc2RXUnBibWRjY2x4dUx5OGdkMmwwYUc5MWRDQnNhVzFwZEdGMGFXOXVJSFJvWlNCeWFXZG9kSE1nZEc4Z2RYTmxMQ0JqYjNCNUxDQnRiMlJwWm5rc0lHMWxjbWRsTENCd2RXSnNhWE5vTEZ4eVhHNHZMeUJrYVhOMGNtbGlkWFJsTENCemRXSnNhV05sYm5ObExDQmhibVF2YjNJZ2MyVnNiQ0JqYjNCcFpYTWdiMllnZEdobElGTnZablIzWVhKbExDQmhibVFnZEc4Z2NHVnliV2wwWEhKY2JpOHZJSEJsY25OdmJuTWdkRzhnZDJodmJTQjBhR1VnVTI5bWRIZGhjbVVnYVhNZ1puVnlibWx6YUdWa0lIUnZJR1J2SUhOdkxDQnpkV0pxWldOMElIUnZJSFJvWlZ4eVhHNHZMeUJtYjJ4c2IzZHBibWNnWTI5dVpHbDBhVzl1Y3pwY2NseHVMeTljY2x4dUx5OGdWR2hsSUdGaWIzWmxJR052Y0hseWFXZG9kQ0J1YjNScFkyVWdZVzVrSUhSb2FYTWdjR1Z5YldsemMybHZiaUJ1YjNScFkyVWdjMmhoYkd3Z1ltVWdhVzVqYkhWa1pXUmNjbHh1THk4Z2FXNGdZV3hzSUdOdmNHbGxjeUJ2Y2lCemRXSnpkR0Z1ZEdsaGJDQndiM0owYVc5dWN5QnZaaUIwYUdVZ1UyOW1kSGRoY21VdVhISmNiaTh2WEhKY2JpOHZJRlJJUlNCVFQwWlVWMEZTUlNCSlV5QlFVazlXU1VSRlJDQmNJa0ZUSUVsVFhDSXNJRmRKVkVoUFZWUWdWMEZTVWtGT1ZGa2dUMFlnUVU1WklFdEpUa1FzSUVWWVVGSkZVMU5jY2x4dUx5OGdUMUlnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmx4eVhHNHZMeUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NJRVpKVkU1RlUxTWdSazlTSUVFZ1VFRlNWRWxEVlV4QlVpQlFWVkpRVDFORklFRk9SQ0JPVDA1SlRrWlNTVTVIUlUxRlRsUXVJRWxPWEhKY2JpOHZJRTVQSUVWV1JVNVVJRk5JUVV4TUlGUklSU0JCVlZSSVQxSlRJRTlTSUVOUFVGbFNTVWRJVkNCSVQweEVSVkpUSUVKRklFeEpRVUpNUlNCR1QxSWdRVTVaSUVOTVFVbE5MRnh5WEc0dkx5QkVRVTFCUjBWVElFOVNJRTlVU0VWU0lFeEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFKY2NseHVMeThnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNJRTlWVkNCUFJpQlBVaUJKVGlCRFQwNU9SVU5VU1U5T0lGZEpWRWdnVkVoRklGTlBSbFJYUVZKRklFOVNJRlJJUlZ4eVhHNHZMeUJWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNGdWRWhGSUZOUFJsUlhRVkpGTGx4eVhHNWNjbHh1SjNWelpTQnpkSEpwWTNRbk8xeHlYRzVjY2x4dVhISmNiblpoY2lCcGMxZHBibVJ2ZDNNZ1BTQndjbTlqWlhOekxuQnNZWFJtYjNKdElEMDlQU0FuZDJsdU16SW5PMXh5WEc1MllYSWdkWFJwYkNBOUlISmxjWFZwY21Vb0ozVjBhV3duS1R0Y2NseHVYSEpjYmx4eVhHNHZMeUJ5WlhOdmJIWmxjeUF1SUdGdVpDQXVMaUJsYkdWdFpXNTBjeUJwYmlCaElIQmhkR2dnWVhKeVlYa2dkMmwwYUNCa2FYSmxZM1J2Y25rZ2JtRnRaWE1nZEdobGNtVmNjbHh1THk4Z2JYVnpkQ0JpWlNCdWJ5QnpiR0Z6YUdWeklHOXlJR1JsZG1salpTQnVZVzFsY3lBb1l6cGNYQ2tnYVc0Z2RHaGxJR0Z5Y21GNVhISmNiaTh2SUNoemJ5QmhiSE52SUc1dklHeGxZV1JwYm1jZ1lXNWtJSFJ5WVdsc2FXNW5JSE5zWVhOb1pYTWdMU0JwZENCa2IyVnpJRzV2ZENCa2FYTjBhVzVuZFdsemFGeHlYRzR2THlCeVpXeGhkR2wyWlNCaGJtUWdZV0p6YjJ4MWRHVWdjR0YwYUhNcFhISmNibVoxYm1OMGFXOXVJRzV2Y20xaGJHbDZaVUZ5Y21GNUtIQmhjblJ6TENCaGJHeHZkMEZpYjNabFVtOXZkQ2tnZTF4eVhHNGdJSFpoY2lCeVpYTWdQU0JiWFR0Y2NseHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhCaGNuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNCMllYSWdjQ0E5SUhCaGNuUnpXMmxkTzF4eVhHNWNjbHh1SUNBZ0lDOHZJR2xuYm05eVpTQmxiWEIwZVNCd1lYSjBjMXh5WEc0Z0lDQWdhV1lnS0NGd0lIeDhJSEFnUFQwOUlDY3VKeWxjY2x4dUlDQWdJQ0FnWTI5dWRHbHVkV1U3WEhKY2JseHlYRzRnSUNBZ2FXWWdLSEFnUFQwOUlDY3VMaWNwSUh0Y2NseHVJQ0FnSUNBZ2FXWWdLSEpsY3k1c1pXNW5kR2dnSmlZZ2NtVnpXM0psY3k1c1pXNW5kR2dnTFNBeFhTQWhQVDBnSnk0dUp5a2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGN5NXdiM0FvS1R0Y2NseHVJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGhiR3h2ZDBGaWIzWmxVbTl2ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsY3k1d2RYTm9LQ2N1TGljcE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQnlaWE11Y0hWemFDaHdLVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQnlaWE03WEhKY2JuMWNjbHh1WEhKY2JpOHZJSEpsZEhWeWJuTWdZVzRnWVhKeVlYa2dkMmwwYUNCbGJYQjBlU0JsYkdWdFpXNTBjeUJ5WlcxdmRtVmtJR1p5YjIwZ1pXbDBhR1Z5SUdWdVpDQnZaaUIwYUdVZ2FXNXdkWFJjY2x4dUx5OGdZWEp5WVhrZ2IzSWdkR2hsSUc5eWFXZHBibUZzSUdGeWNtRjVJR2xtSUc1dklHVnNaVzFsYm5SeklHNWxaV1FnZEc4Z1ltVWdjbVZ0YjNabFpGeHlYRzVtZFc1amRHbHZiaUIwY21sdFFYSnlZWGtvWVhKeUtTQjdYSEpjYmlBZ2RtRnlJR3hoYzNSSmJtUmxlQ0E5SUdGeWNpNXNaVzVuZEdnZ0xTQXhPMXh5WEc0Z0lIWmhjaUJ6ZEdGeWRDQTlJREE3WEhKY2JpQWdabTl5SUNnN0lITjBZWEowSUR3OUlHeGhjM1JKYm1SbGVEc2djM1JoY25Rckt5a2dlMXh5WEc0Z0lDQWdhV1lnS0dGeWNsdHpkR0Z5ZEYwcFhISmNiaUFnSUNBZ0lHSnlaV0ZyTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnZG1GeUlHVnVaQ0E5SUd4aGMzUkpibVJsZUR0Y2NseHVJQ0JtYjNJZ0tEc2daVzVrSUQ0OUlEQTdJR1Z1WkMwdEtTQjdYSEpjYmlBZ0lDQnBaaUFvWVhKeVcyVnVaRjBwWEhKY2JpQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdhV1lnS0hOMFlYSjBJRDA5UFNBd0lDWW1JR1Z1WkNBOVBUMGdiR0Z6ZEVsdVpHVjRLVnh5WEc0Z0lDQWdjbVYwZFhKdUlHRnljanRjY2x4dUlDQnBaaUFvYzNSaGNuUWdQaUJsYm1RcFhISmNiaUFnSUNCeVpYUjFjbTRnVzEwN1hISmNiaUFnY21WMGRYSnVJR0Z5Y2k1emJHbGpaU2h6ZEdGeWRDd2daVzVrSUNzZ01TazdYSEpjYm4xY2NseHVYSEpjYmk4dklGSmxaMlY0SUhSdklITndiR2wwSUdFZ2QybHVaRzkzY3lCd1lYUm9JR2x1ZEc4Z2RHaHlaV1VnY0dGeWRITTZJRnNxTENCa1pYWnBZMlVzSUhOc1lYTm9MRnh5WEc0dkx5QjBZV2xzWFNCM2FXNWtiM2R6TFc5dWJIbGNjbHh1ZG1GeUlITndiR2wwUkdWMmFXTmxVbVVnUFZ4eVhHNGdJQ0FnTDE0b1cyRXRla0V0V2wwNmZGdGNYRnhjWEZ3dlhYc3lmVnRlWEZ4Y1hGeGNMMTByVzF4Y1hGeGNYQzlkSzF0ZVhGeGNYRnhjTDEwcktUOG9XMXhjWEZ4Y1hDOWRLVDhvVzF4Y2MxeGNVMTBxUHlra0x6dGNjbHh1WEhKY2JpOHZJRkpsWjJWNElIUnZJSE53YkdsMElIUm9aU0IwWVdsc0lIQmhjblFnYjJZZ2RHaGxJR0ZpYjNabElHbHVkRzhnV3lvc0lHUnBjaXdnWW1GelpXNWhiV1VzSUdWNGRGMWNjbHh1ZG1GeUlITndiR2wwVkdGcGJGSmxJRDFjY2x4dUlDQWdJQzllS0Z0Y1hITmNYRk5kS2o4cEtDZy9PbHhjTG5zeExESjlmRnRlWEZ4Y1hGeGNMMTByUDN3cEtGeGNMbHRlTGx4Y0wxeGNYRnhkS253cEtTZy9PbHRjWEZ4Y1hGd3ZYU29wSkM4N1hISmNibHh5WEc1MllYSWdkMmx1TXpJZ1BTQjdmVHRjY2x4dVhISmNiaTh2SUVaMWJtTjBhVzl1SUhSdklITndiR2wwSUdFZ1ptbHNaVzVoYldVZ2FXNTBieUJiY205dmRDd2daR2x5TENCaVlYTmxibUZ0WlN3Z1pYaDBYVnh5WEc1bWRXNWpkR2x2YmlCM2FXNHpNbE53YkdsMFVHRjBhQ2htYVd4bGJtRnRaU2tnZTF4eVhHNGdJQzh2SUZObGNHRnlZWFJsSUdSbGRtbGpaU3R6YkdGemFDQm1jbTl0SUhSaGFXeGNjbHh1SUNCMllYSWdjbVZ6ZFd4MElEMGdjM0JzYVhSRVpYWnBZMlZTWlM1bGVHVmpLR1pwYkdWdVlXMWxLU3hjY2x4dUlDQWdJQ0FnWkdWMmFXTmxJRDBnS0hKbGMzVnNkRnN4WFNCOGZDQW5KeWtnS3lBb2NtVnpkV3gwV3pKZElIeDhJQ2NuS1N4Y2NseHVJQ0FnSUNBZ2RHRnBiQ0E5SUhKbGMzVnNkRnN6WFNCOGZDQW5KenRjY2x4dUlDQXZMeUJUY0d4cGRDQjBhR1VnZEdGcGJDQnBiblJ2SUdScGNpd2dZbUZ6Wlc1aGJXVWdZVzVrSUdWNGRHVnVjMmx2Ymx4eVhHNGdJSFpoY2lCeVpYTjFiSFF5SUQwZ2MzQnNhWFJVWVdsc1VtVXVaWGhsWXloMFlXbHNLU3hjY2x4dUlDQWdJQ0FnWkdseUlEMGdjbVZ6ZFd4ME1sc3hYU3hjY2x4dUlDQWdJQ0FnWW1GelpXNWhiV1VnUFNCeVpYTjFiSFF5V3pKZExGeHlYRzRnSUNBZ0lDQmxlSFFnUFNCeVpYTjFiSFF5V3pOZE8xeHlYRzRnSUhKbGRIVnliaUJiWkdWMmFXTmxMQ0JrYVhJc0lHSmhjMlZ1WVcxbExDQmxlSFJkTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQjNhVzR6TWxOMFlYUlFZWFJvS0hCaGRHZ3BJSHRjY2x4dUlDQjJZWElnY21WemRXeDBJRDBnYzNCc2FYUkVaWFpwWTJWU1pTNWxlR1ZqS0hCaGRHZ3BMRnh5WEc0Z0lDQWdJQ0JrWlhacFkyVWdQU0J5WlhOMWJIUmJNVjBnZkh3Z0p5Y3NYSEpjYmlBZ0lDQWdJR2x6Vlc1aklEMGdJU0ZrWlhacFkyVWdKaVlnWkdWMmFXTmxXekZkSUNFOVBTQW5PaWM3WEhKY2JpQWdjbVYwZFhKdUlIdGNjbHh1SUNBZ0lHUmxkbWxqWlRvZ1pHVjJhV05sTEZ4eVhHNGdJQ0FnYVhOVmJtTTZJR2x6Vlc1akxGeHlYRzRnSUNBZ2FYTkJZbk52YkhWMFpUb2dhWE5WYm1NZ2ZId2dJU0Z5WlhOMWJIUmJNbDBzSUM4dklGVk9ReUJ3WVhSb2N5QmhjbVVnWVd4M1lYbHpJR0ZpYzI5c2RYUmxYSEpjYmlBZ0lDQjBZV2xzT2lCeVpYTjFiSFJiTTExY2NseHVJQ0I5TzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnViM0p0WVd4cGVtVlZUa05TYjI5MEtHUmxkbWxqWlNrZ2UxeHlYRzRnSUhKbGRIVnliaUFuWEZ4Y1hGeGNYRnduSUNzZ1pHVjJhV05sTG5KbGNHeGhZMlVvTDE1YlhGeGNYRnhjTDEwckx5d2dKeWNwTG5KbGNHeGhZMlVvTDF0Y1hGeGNYRnd2WFNzdlp5d2dKMXhjWEZ3bktUdGNjbHh1ZlZ4eVhHNWNjbHh1THk4Z2NHRjBhQzV5WlhOdmJIWmxLRnRtY205dElDNHVMbDBzSUhSdktWeHlYRzUzYVc0ek1pNXlaWE52YkhabElEMGdablZ1WTNScGIyNG9LU0I3WEhKY2JpQWdkbUZ5SUhKbGMyOXNkbVZrUkdWMmFXTmxJRDBnSnljc1hISmNiaUFnSUNBZ0lISmxjMjlzZG1Wa1ZHRnBiQ0E5SUNjbkxGeHlYRzRnSUNBZ0lDQnlaWE52YkhabFpFRmljMjlzZFhSbElEMGdabUZzYzJVN1hISmNibHh5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVRzZ2FTQStQU0F0TVRzZ2FTMHRLU0I3WEhKY2JpQWdJQ0IyWVhJZ2NHRjBhRHRjY2x4dUlDQWdJR2xtSUNocElENDlJREFwSUh0Y2NseHVJQ0FnSUNBZ2NHRjBhQ0E5SUdGeVozVnRaVzUwYzF0cFhUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JWEpsYzI5c2RtVmtSR1YyYVdObEtTQjdYSEpjYmlBZ0lDQWdJSEJoZEdnZ1BTQndjbTlqWlhOekxtTjNaQ2dwTzF4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnTHk4Z1YybHVaRzkzY3lCb1lYTWdkR2hsSUdOdmJtTmxjSFFnYjJZZ1pISnBkbVV0YzNCbFkybG1hV01nWTNWeWNtVnVkQ0IzYjNKcmFXNW5YSEpjYmlBZ0lDQWdJQzh2SUdScGNtVmpkRzl5YVdWekxpQkpaaUIzWlNkMlpTQnlaWE52YkhabFpDQmhJR1J5YVhabElHeGxkSFJsY2lCaWRYUWdibTkwSUhsbGRDQmhibHh5WEc0Z0lDQWdJQ0F2THlCaFluTnZiSFYwWlNCd1lYUm9MQ0JuWlhRZ1kzZGtJR1p2Y2lCMGFHRjBJR1J5YVhabExpQlhaU2R5WlNCemRYSmxJSFJvWlNCa1pYWnBZMlVnYVhNZ2JtOTBYSEpjYmlBZ0lDQWdJQzh2SUdGdUlIVnVZeUJ3WVhSb0lHRjBJSFJvYVhNZ2NHOXBiblJ6TENCaVpXTmhkWE5sSUhWdVl5QndZWFJvY3lCaGNtVWdZV3gzWVhseklHRmljMjlzZFhSbExseHlYRzRnSUNBZ0lDQndZWFJvSUQwZ2NISnZZMlZ6Y3k1bGJuWmJKejBuSUNzZ2NtVnpiMngyWldSRVpYWnBZMlZkTzF4eVhHNGdJQ0FnSUNBdkx5QldaWEpwWm5rZ2RHaGhkQ0JoSUdSeWFYWmxMV3h2WTJGc0lHTjNaQ0IzWVhNZ1ptOTFibVFnWVc1a0lIUm9ZWFFnYVhRZ1lXTjBkV0ZzYkhrZ2NHOXBiblJ6WEhKY2JpQWdJQ0FnSUM4dklIUnZJRzkxY2lCa2NtbDJaUzRnU1dZZ2JtOTBMQ0JrWldaaGRXeDBJSFJ2SUhSb1pTQmtjbWwyWlNkeklISnZiM1F1WEhKY2JpQWdJQ0FnSUdsbUlDZ2hjR0YwYUNCOGZDQndZWFJvTG5OMVluTjBjaWd3TENBektTNTBiMHh2ZDJWeVEyRnpaU2dwSUNFOVBWeHlYRzRnSUNBZ0lDQWdJQ0FnY21WemIyeDJaV1JFWlhacFkyVXVkRzlNYjNkbGNrTmhjMlVvS1NBcklDZGNYRnhjSnlrZ2UxeHlYRzRnSUNBZ0lDQWdJSEJoZEdnZ1BTQnlaWE52YkhabFpFUmxkbWxqWlNBcklDZGNYRnhjSnp0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzh2SUZOcmFYQWdaVzF3ZEhrZ1lXNWtJR2x1ZG1Gc2FXUWdaVzUwY21sbGMxeHlYRzRnSUNBZ2FXWWdLQ0YxZEdsc0xtbHpVM1J5YVc1bktIQmhkR2dwS1NCN1hISmNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMEZ5WjNWdFpXNTBjeUIwYnlCd1lYUm9MbkpsYzI5c2RtVWdiWFZ6ZENCaVpTQnpkSEpwYm1kekp5azdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0Z3WVhSb0tTQjdYSEpjYmlBZ0lDQWdJR052Ym5ScGJuVmxPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhaaGNpQnlaWE4xYkhRZ1BTQjNhVzR6TWxOMFlYUlFZWFJvS0hCaGRHZ3BMRnh5WEc0Z0lDQWdJQ0FnSUdSbGRtbGpaU0E5SUhKbGMzVnNkQzVrWlhacFkyVXNYSEpjYmlBZ0lDQWdJQ0FnYVhOVmJtTWdQU0J5WlhOMWJIUXVhWE5WYm1Nc1hISmNiaUFnSUNBZ0lDQWdhWE5CWW5OdmJIVjBaU0E5SUhKbGMzVnNkQzVwYzBGaWMyOXNkWFJsTEZ4eVhHNGdJQ0FnSUNBZ0lIUmhhV3dnUFNCeVpYTjFiSFF1ZEdGcGJEdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb1pHVjJhV05sSUNZbVhISmNiaUFnSUNBZ0lDQWdjbVZ6YjJ4MlpXUkVaWFpwWTJVZ0ppWmNjbHh1SUNBZ0lDQWdJQ0JrWlhacFkyVXVkRzlNYjNkbGNrTmhjMlVvS1NBaFBUMGdjbVZ6YjJ4MlpXUkVaWFpwWTJVdWRHOU1iM2RsY2tOaGMyVW9LU2tnZTF4eVhHNGdJQ0FnSUNBdkx5QlVhR2x6SUhCaGRHZ2djRzlwYm5SeklIUnZJR0Z1YjNSb1pYSWdaR1YyYVdObElITnZJR2wwSUdseklHNXZkQ0JoY0hCc2FXTmhZbXhsWEhKY2JpQWdJQ0FnSUdOdmJuUnBiblZsTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2doY21WemIyeDJaV1JFWlhacFkyVXBJSHRjY2x4dUlDQWdJQ0FnY21WemIyeDJaV1JFWlhacFkyVWdQU0JrWlhacFkyVTdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQnBaaUFvSVhKbGMyOXNkbVZrUVdKemIyeDFkR1VwSUh0Y2NseHVJQ0FnSUNBZ2NtVnpiMngyWldSVVlXbHNJRDBnZEdGcGJDQXJJQ2RjWEZ4Y0p5QXJJSEpsYzI5c2RtVmtWR0ZwYkR0Y2NseHVJQ0FnSUNBZ2NtVnpiMngyWldSQlluTnZiSFYwWlNBOUlHbHpRV0p6YjJ4MWRHVTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tISmxjMjlzZG1Wa1JHVjJhV05sSUNZbUlISmxjMjlzZG1Wa1FXSnpiMngxZEdVcElIdGNjbHh1SUNBZ0lDQWdZbkpsWVdzN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNWNjbHh1SUNBdkx5QkRiMjUyWlhKMElITnNZWE5vWlhNZ2RHOGdZbUZqYTNOc1lYTm9aWE1nZDJobGJpQmdjbVZ6YjJ4MlpXUkVaWFpwWTJWZ0lIQnZhVzUwY3lCMGJ5QmhiaUJWVGtOY2NseHVJQ0F2THlCeWIyOTBMaUJCYkhOdklITnhkV0Z6YUNCdGRXeDBhWEJzWlNCemJHRnphR1Z6SUdsdWRHOGdZU0J6YVc1bmJHVWdiMjVsSUhkb1pYSmxJR0Z3Y0hKdmNISnBZWFJsTGx4eVhHNGdJR2xtSUNocGMxVnVZeWtnZTF4eVhHNGdJQ0FnY21WemIyeDJaV1JFWlhacFkyVWdQU0J1YjNKdFlXeHBlbVZWVGtOU2IyOTBLSEpsYzI5c2RtVmtSR1YyYVdObEtUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lDOHZJRUYwSUhSb2FYTWdjRzlwYm5RZ2RHaGxJSEJoZEdnZ2MyaHZkV3hrSUdKbElISmxjMjlzZG1Wa0lIUnZJR0VnWm5Wc2JDQmhZbk52YkhWMFpTQndZWFJvTEZ4eVhHNGdJQzh2SUdKMWRDQm9ZVzVrYkdVZ2NtVnNZWFJwZG1VZ2NHRjBhSE1nZEc4Z1ltVWdjMkZtWlNBb2JXbG5hSFFnYUdGd2NHVnVJSGRvWlc0Z2NISnZZMlZ6Y3k1amQyUW9LVnh5WEc0Z0lDOHZJR1poYVd4ektWeHlYRzVjY2x4dUlDQXZMeUJPYjNKdFlXeHBlbVVnZEdobElIUmhhV3dnY0dGMGFGeHlYRzRnSUhKbGMyOXNkbVZrVkdGcGJDQTlJRzV2Y20xaGJHbDZaVUZ5Y21GNUtISmxjMjlzZG1Wa1ZHRnBiQzV6Y0d4cGRDZ3ZXMXhjWEZ4Y1hDOWRLeThwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNGeVpYTnZiSFpsWkVGaWMyOXNkWFJsS1M1cWIybHVLQ2RjWEZ4Y0p5azdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQW9jbVZ6YjJ4MlpXUkVaWFpwWTJVZ0t5QW9jbVZ6YjJ4MlpXUkJZbk52YkhWMFpTQS9JQ2RjWEZ4Y0p5QTZJQ2NuS1NBcklISmxjMjlzZG1Wa1ZHRnBiQ2tnZkh4Y2NseHVJQ0FnSUNBZ0lDQWdKeTRuTzF4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYm5kcGJqTXlMbTV2Y20xaGJHbDZaU0E5SUdaMWJtTjBhVzl1S0hCaGRHZ3BJSHRjY2x4dUlDQjJZWElnY21WemRXeDBJRDBnZDJsdU16SlRkR0YwVUdGMGFDaHdZWFJvS1N4Y2NseHVJQ0FnSUNBZ1pHVjJhV05sSUQwZ2NtVnpkV3gwTG1SbGRtbGpaU3hjY2x4dUlDQWdJQ0FnYVhOVmJtTWdQU0J5WlhOMWJIUXVhWE5WYm1Nc1hISmNiaUFnSUNBZ0lHbHpRV0p6YjJ4MWRHVWdQU0J5WlhOMWJIUXVhWE5CWW5OdmJIVjBaU3hjY2x4dUlDQWdJQ0FnZEdGcGJDQTlJSEpsYzNWc2RDNTBZV2xzTEZ4eVhHNGdJQ0FnSUNCMGNtRnBiR2x1WjFOc1lYTm9JRDBnTDF0Y1hGeGNYRnd2WFNRdkxuUmxjM1FvZEdGcGJDazdYSEpjYmx4eVhHNGdJQzh2SUU1dmNtMWhiR2w2WlNCMGFHVWdkR0ZwYkNCd1lYUm9YSEpjYmlBZ2RHRnBiQ0E5SUc1dmNtMWhiR2w2WlVGeWNtRjVLSFJoYVd3dWMzQnNhWFFvTDF0Y1hGeGNYRnd2WFNzdktTd2dJV2x6UVdKemIyeDFkR1VwTG1wdmFXNG9KMXhjWEZ3bktUdGNjbHh1WEhKY2JpQWdhV1lnS0NGMFlXbHNJQ1ltSUNGcGMwRmljMjlzZFhSbEtTQjdYSEpjYmlBZ0lDQjBZV2xzSUQwZ0p5NG5PMXh5WEc0Z0lIMWNjbHh1SUNCcFppQW9kR0ZwYkNBbUppQjBjbUZwYkdsdVoxTnNZWE5vS1NCN1hISmNiaUFnSUNCMFlXbHNJQ3M5SUNkY1hGeGNKenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJQzh2SUVOdmJuWmxjblFnYzJ4aGMyaGxjeUIwYnlCaVlXTnJjMnhoYzJobGN5QjNhR1Z1SUdCa1pYWnBZMlZnSUhCdmFXNTBjeUIwYnlCaGJpQlZUa01nY205dmRDNWNjbHh1SUNBdkx5QkJiSE52SUhOeGRXRnphQ0J0ZFd4MGFYQnNaU0J6YkdGemFHVnpJR2x1ZEc4Z1lTQnphVzVuYkdVZ2IyNWxJSGRvWlhKbElHRndjSEp2Y0hKcFlYUmxMbHh5WEc0Z0lHbG1JQ2hwYzFWdVl5a2dlMXh5WEc0Z0lDQWdaR1YyYVdObElEMGdibTl5YldGc2FYcGxWVTVEVW05dmRDaGtaWFpwWTJVcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NtVjBkWEp1SUdSbGRtbGpaU0FySUNocGMwRmljMjlzZFhSbElEOGdKMXhjWEZ3bklEb2dKeWNwSUNzZ2RHRnBiRHRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUzYVc0ek1pNXBjMEZpYzI5c2RYUmxJRDBnWm5WdVkzUnBiMjRvY0dGMGFDa2dlMXh5WEc0Z0lISmxkSFZ5YmlCM2FXNHpNbE4wWVhSUVlYUm9LSEJoZEdncExtbHpRV0p6YjJ4MWRHVTdYSEpjYm4wN1hISmNibHh5WEc1M2FXNHpNaTVxYjJsdUlEMGdablZ1WTNScGIyNG9LU0I3WEhKY2JpQWdkbUZ5SUhCaGRHaHpJRDBnVzEwN1hISmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjY2x4dUlDQWdJSFpoY2lCaGNtY2dQU0JoY21kMWJXVnVkSE5iYVYwN1hISmNiaUFnSUNCcFppQW9JWFYwYVd3dWFYTlRkSEpwYm1jb1lYSm5LU2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRITWdkRzhnY0dGMGFDNXFiMmx1SUcxMWMzUWdZbVVnYzNSeWFXNW5jeWNwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYVdZZ0tHRnlaeWtnZTF4eVhHNGdJQ0FnSUNCd1lYUm9jeTV3ZFhOb0tHRnlaeWs3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0IyWVhJZ2FtOXBibVZrSUQwZ2NHRjBhSE11YW05cGJpZ25YRnhjWENjcE8xeHlYRzVjY2x4dUlDQXZMeUJOWVd0bElITjFjbVVnZEdoaGRDQjBhR1VnYW05cGJtVmtJSEJoZEdnZ1pHOWxjMjRuZENCemRHRnlkQ0IzYVhSb0lIUjNieUJ6YkdGemFHVnpMQ0JpWldOaGRYTmxYSEpjYmlBZ0x5OGdibTl5YldGc2FYcGxLQ2tnZDJsc2JDQnRhWE4wWVd0bElHbDBJR1p2Y2lCaGJpQlZUa01nY0dGMGFDQjBhR1Z1TGx4eVhHNGdJQzh2WEhKY2JpQWdMeThnVkdocGN5QnpkR1Z3SUdseklITnJhWEJ3WldRZ2QyaGxiaUJwZENCcGN5QjJaWEo1SUdOc1pXRnlJSFJvWVhRZ2RHaGxJSFZ6WlhJZ1lXTjBkV0ZzYkhsY2NseHVJQ0F2THlCcGJuUmxibVJsWkNCMGJ5QndiMmx1ZENCaGRDQmhiaUJWVGtNZ2NHRjBhQzRnVkdocGN5QnBjeUJoYzNOMWJXVmtJSGRvWlc0Z2RHaGxJR1pwY25OMFhISmNiaUFnTHk4Z2JtOXVMV1Z0Y0hSNUlITjBjbWx1WnlCaGNtZDFiV1Z1ZEhNZ2MzUmhjblJ6SUhkcGRHZ2daWGhoWTNSc2VTQjBkMjhnYzJ4aGMyaGxjeUJtYjJ4c2IzZGxaQ0JpZVZ4eVhHNGdJQzh2SUdGMElHeGxZWE4wSUc5dVpTQnRiM0psSUc1dmJpMXpiR0Z6YUNCamFHRnlZV04wWlhJdVhISmNiaUFnTHk5Y2NseHVJQ0F2THlCT2IzUmxJSFJvWVhRZ1ptOXlJRzV2Y20xaGJHbDZaU2dwSUhSdklIUnlaV0YwSUdFZ2NHRjBhQ0JoY3lCaGJpQlZUa01nY0dGMGFDQnBkQ0J1WldWa2N5QjBiMXh5WEc0Z0lDOHZJR2hoZG1VZ1lYUWdiR1ZoYzNRZ01pQmpiMjF3YjI1bGJuUnpMQ0J6YnlCM1pTQmtiMjRuZENCbWFXeDBaWElnWm05eUlIUm9ZWFFnYUdWeVpTNWNjbHh1SUNBdkx5QlVhR2x6SUcxbFlXNXpJSFJvWVhRZ2RHaGxJSFZ6WlhJZ1kyRnVJSFZ6WlNCcWIybHVJSFJ2SUdOdmJuTjBjblZqZENCVlRrTWdjR0YwYUhNZ1puSnZiVnh5WEc0Z0lDOHZJR0VnYzJWeWRtVnlJRzVoYldVZ1lXNWtJR0VnYzJoaGNtVWdibUZ0WlRzZ1ptOXlJR1Y0WVcxd2JHVTZYSEpjYmlBZ0x5OGdJQ0J3WVhSb0xtcHZhVzRvSnk4dmMyVnlkbVZ5Snl3Z0ozTm9ZWEpsSnlrZ0xUNGdKMXhjWEZ4Y1hGeGNjMlZ5ZG1WeVhGeGNYSE5vWVhKbFhGd25LVnh5WEc0Z0lHbG1JQ2doTDE1YlhGeGNYRnhjTDExN01uMWJYbHhjWEZ4Y1hDOWRMeTUwWlhOMEtIQmhkR2h6V3pCZEtTa2dlMXh5WEc0Z0lDQWdhbTlwYm1Wa0lEMGdhbTlwYm1Wa0xuSmxjR3hoWTJVb0wxNWJYRnhjWEZ4Y0wxMTdNaXg5THl3Z0oxeGNYRnduS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhKbGRIVnliaUIzYVc0ek1pNXViM0p0WVd4cGVtVW9hbTlwYm1Wa0tUdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNHZMeUJ3WVhSb0xuSmxiR0YwYVhabEtHWnliMjBzSUhSdktWeHlYRzR2THlCcGRDQjNhV3hzSUhOdmJIWmxJSFJvWlNCeVpXeGhkR2wyWlNCd1lYUm9JR1p5YjIwZ0oyWnliMjBuSUhSdklDZDBieWNzSUdadmNpQnBibk4wWVc1alpUcGNjbHh1THk4Z1puSnZiU0E5SUNkRE9seGNYRnh2Y21GdVpHVmhYRnhjWEhSbGMzUmNYRnhjWVdGaEoxeHlYRzR2THlCMGJ5QTlJQ2RET2x4Y1hGeHZjbUZ1WkdWaFhGeGNYR2x0Y0d4Y1hGeGNZbUppSjF4eVhHNHZMeUJVYUdVZ2IzVjBjSFYwSUc5bUlIUm9aU0JtZFc1amRHbHZiaUJ6YUc5MWJHUWdZbVU2SUNjdUxseGNYRnd1TGx4Y1hGeHBiWEJzWEZ4Y1hHSmlZaWRjY2x4dWQybHVNekl1Y21Wc1lYUnBkbVVnUFNCbWRXNWpkR2x2YmlobWNtOXRMQ0IwYnlrZ2UxeHlYRzRnSUdaeWIyMGdQU0IzYVc0ek1pNXlaWE52YkhabEtHWnliMjBwTzF4eVhHNGdJSFJ2SUQwZ2QybHVNekl1Y21WemIyeDJaU2gwYnlrN1hISmNibHh5WEc0Z0lDOHZJSGRwYm1SdmQzTWdhWE1nYm05MElHTmhjMlVnYzJWdWMybDBhWFpsWEhKY2JpQWdkbUZ5SUd4dmQyVnlSbkp2YlNBOUlHWnliMjB1ZEc5TWIzZGxja05oYzJVb0tUdGNjbHh1SUNCMllYSWdiRzkzWlhKVWJ5QTlJSFJ2TG5SdlRHOTNaWEpEWVhObEtDazdYSEpjYmx4eVhHNGdJSFpoY2lCMGIxQmhjblJ6SUQwZ2RISnBiVUZ5Y21GNUtIUnZMbk53YkdsMEtDZGNYRnhjSnlrcE8xeHlYRzVjY2x4dUlDQjJZWElnYkc5M1pYSkdjbTl0VUdGeWRITWdQU0IwY21sdFFYSnlZWGtvYkc5M1pYSkdjbTl0TG5Od2JHbDBLQ2RjWEZ4Y0p5a3BPMXh5WEc0Z0lIWmhjaUJzYjNkbGNsUnZVR0Z5ZEhNZ1BTQjBjbWx0UVhKeVlYa29iRzkzWlhKVWJ5NXpjR3hwZENnblhGeGNYQ2NwS1R0Y2NseHVYSEpjYmlBZ2RtRnlJR3hsYm1kMGFDQTlJRTFoZEdndWJXbHVLR3h2ZDJWeVJuSnZiVkJoY25SekxteGxibWQwYUN3Z2JHOTNaWEpVYjFCaGNuUnpMbXhsYm1kMGFDazdYSEpjYmlBZ2RtRnlJSE5oYldWUVlYSjBjMHhsYm1kMGFDQTlJR3hsYm1kMGFEdGNjbHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHeGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0JwWmlBb2JHOTNaWEpHY205dFVHRnlkSE5iYVYwZ0lUMDlJR3h2ZDJWeVZHOVFZWEowYzF0cFhTa2dlMXh5WEc0Z0lDQWdJQ0J6WVcxbFVHRnlkSE5NWlc1bmRHZ2dQU0JwTzF4eVhHNGdJQ0FnSUNCaWNtVmhhenRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR2xtSUNoellXMWxVR0Z5ZEhOTVpXNW5kR2dnUFQwZ01Da2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIUnZPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdkbUZ5SUc5MWRIQjFkRkJoY25SeklEMGdXMTA3WEhKY2JpQWdabTl5SUNoMllYSWdhU0E5SUhOaGJXVlFZWEowYzB4bGJtZDBhRHNnYVNBOElHeHZkMlZ5Um5KdmJWQmhjblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQnZkWFJ3ZFhSUVlYSjBjeTV3ZFhOb0tDY3VMaWNwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnYjNWMGNIVjBVR0Z5ZEhNZ1BTQnZkWFJ3ZFhSUVlYSjBjeTVqYjI1allYUW9kRzlRWVhKMGN5NXpiR2xqWlNoellXMWxVR0Z5ZEhOTVpXNW5kR2dwS1R0Y2NseHVYSEpjYmlBZ2NtVjBkWEp1SUc5MWRIQjFkRkJoY25SekxtcHZhVzRvSjF4Y1hGd25LVHRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUzYVc0ek1pNWZiV0ZyWlV4dmJtY2dQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYSEpjYmlBZ0x5OGdUbTkwWlRvZ2RHaHBjeUIzYVd4c0lDcHdjbTlpWVdKc2VTb2dkR2h5YjNjZ2MyOXRaWGRvWlhKbExseHlYRzRnSUdsbUlDZ2hkWFJwYkM1cGMxTjBjbWx1Wnlod1lYUm9LU2xjY2x4dUlDQWdJSEpsZEhWeWJpQndZWFJvTzF4eVhHNWNjbHh1SUNCcFppQW9JWEJoZEdncElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlBbkp6dGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIWmhjaUJ5WlhOdmJIWmxaRkJoZEdnZ1BTQjNhVzR6TWk1eVpYTnZiSFpsS0hCaGRHZ3BPMXh5WEc1Y2NseHVJQ0JwWmlBb0wxNWJZUzE2UVMxYVhWeGNPbHhjWEZ3dkxuUmxjM1FvY21WemIyeDJaV1JRWVhSb0tTa2dlMXh5WEc0Z0lDQWdMeThnY0dGMGFDQnBjeUJzYjJOaGJDQm1hV3hsYzNsemRHVnRJSEJoZEdnc0lIZG9hV05vSUc1bFpXUnpJSFJ2SUdKbElHTnZiblpsY25SbFpGeHlYRzRnSUNBZ0x5OGdkRzhnYkc5dVp5QlZUa01nY0dGMGFDNWNjbHh1SUNBZ0lISmxkSFZ5YmlBblhGeGNYRnhjWEZ3L1hGeGNYQ2NnS3lCeVpYTnZiSFpsWkZCaGRHZzdYSEpjYmlBZ2ZTQmxiSE5sSUdsbUlDZ3ZYbHhjWEZ4Y1hGeGNXMTQvTGwwdkxuUmxjM1FvY21WemIyeDJaV1JRWVhSb0tTa2dlMXh5WEc0Z0lDQWdMeThnY0dGMGFDQnBjeUJ1WlhSM2IzSnJJRlZPUXlCd1lYUm9MQ0IzYUdsamFDQnVaV1ZrY3lCMGJ5QmlaU0JqYjI1MlpYSjBaV1JjY2x4dUlDQWdJQzh2SUhSdklHeHZibWNnVlU1RElIQmhkR2d1WEhKY2JpQWdJQ0J5WlhSMWNtNGdKMXhjWEZ4Y1hGeGNQMXhjWEZ4VlRrTmNYRnhjSnlBcklISmxjMjlzZG1Wa1VHRjBhQzV6ZFdKemRISnBibWNvTWlrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCeVpYUjFjbTRnY0dGMGFEdGNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNTNhVzR6TWk1a2FYSnVZVzFsSUQwZ1puVnVZM1JwYjI0b2NHRjBhQ2tnZTF4eVhHNGdJSFpoY2lCeVpYTjFiSFFnUFNCM2FXNHpNbE53YkdsMFVHRjBhQ2h3WVhSb0tTeGNjbHh1SUNBZ0lDQWdjbTl2ZENBOUlISmxjM1ZzZEZzd1hTeGNjbHh1SUNBZ0lDQWdaR2x5SUQwZ2NtVnpkV3gwV3pGZE8xeHlYRzVjY2x4dUlDQnBaaUFvSVhKdmIzUWdKaVlnSVdScGNpa2dlMXh5WEc0Z0lDQWdMeThnVG04Z1pHbHlibUZ0WlNCM2FHRjBjMjlsZG1WeVhISmNiaUFnSUNCeVpYUjFjbTRnSnk0bk8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2FXWWdLR1JwY2lrZ2UxeHlYRzRnSUNBZ0x5OGdTWFFnYUdGeklHRWdaR2x5Ym1GdFpTd2djM1J5YVhBZ2RISmhhV3hwYm1jZ2MyeGhjMmhjY2x4dUlDQWdJR1JwY2lBOUlHUnBjaTV6ZFdKemRISW9NQ3dnWkdseUxteGxibWQwYUNBdElERXBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjbVYwZFhKdUlISnZiM1FnS3lCa2FYSTdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVkMmx1TXpJdVltRnpaVzVoYldVZ1BTQm1kVzVqZEdsdmJpaHdZWFJvTENCbGVIUXBJSHRjY2x4dUlDQjJZWElnWmlBOUlIZHBiak15VTNCc2FYUlFZWFJvS0hCaGRHZ3BXekpkTzF4eVhHNGdJQzh2SUZSUFJFODZJRzFoYTJVZ2RHaHBjeUJqYjIxd1lYSnBjMjl1SUdOaGMyVXRhVzV6Wlc1emFYUnBkbVVnYjI0Z2QybHVaRzkzY3o5Y2NseHVJQ0JwWmlBb1pYaDBJQ1ltSUdZdWMzVmljM1J5S0MweElDb2daWGgwTG14bGJtZDBhQ2tnUFQwOUlHVjRkQ2tnZTF4eVhHNGdJQ0FnWmlBOUlHWXVjM1ZpYzNSeUtEQXNJR1l1YkdWdVozUm9JQzBnWlhoMExteGxibWQwYUNrN1hISmNiaUFnZlZ4eVhHNGdJSEpsZEhWeWJpQm1PMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibmRwYmpNeUxtVjRkRzVoYldVZ1BTQm1kVzVqZEdsdmJpaHdZWFJvS1NCN1hISmNiaUFnY21WMGRYSnVJSGRwYmpNeVUzQnNhWFJRWVhSb0tIQmhkR2dwV3pOZE8xeHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JuZHBiak15TG1admNtMWhkQ0E5SUdaMWJtTjBhVzl1S0hCaGRHaFBZbXBsWTNRcElIdGNjbHh1SUNCcFppQW9JWFYwYVd3dWFYTlBZbXBsWTNRb2NHRjBhRTlpYW1WamRDa3BJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1hDSlFZWEpoYldWMFpYSWdKM0JoZEdoUFltcGxZM1FuSUcxMWMzUWdZbVVnWVc0Z2IySnFaV04wTENCdWIzUWdYQ0lnS3lCMGVYQmxiMllnY0dGMGFFOWlhbVZqZEZ4eVhHNGdJQ0FnS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhaaGNpQnliMjkwSUQwZ2NHRjBhRTlpYW1WamRDNXliMjkwSUh4OElDY25PMXh5WEc1Y2NseHVJQ0JwWmlBb0lYVjBhV3d1YVhOVGRISnBibWNvY205dmRDa3BJSHRjY2x4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1hDSW5jR0YwYUU5aWFtVmpkQzV5YjI5MEp5QnRkWE4wSUdKbElHRWdjM1J5YVc1bklHOXlJSFZ1WkdWbWFXNWxaQ3dnYm05MElGd2lJQ3RjY2x4dUlDQWdJQ0FnSUNCMGVYQmxiMllnY0dGMGFFOWlhbVZqZEM1eWIyOTBYSEpjYmlBZ0lDQXBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdkbUZ5SUdScGNpQTlJSEJoZEdoUFltcGxZM1F1WkdseU8xeHlYRzRnSUhaaGNpQmlZWE5sSUQwZ2NHRjBhRTlpYW1WamRDNWlZWE5sSUh4OElDY25PMXh5WEc0Z0lHbG1JQ2doWkdseUtTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z1ltRnpaVHRjY2x4dUlDQjlYSEpjYmlBZ2FXWWdLR1JwY2x0a2FYSXViR1Z1WjNSb0lDMGdNVjBnUFQwOUlIZHBiak15TG5ObGNDa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlHUnBjaUFySUdKaGMyVTdYSEpjYmlBZ2ZWeHlYRzRnSUhKbGRIVnliaUJrYVhJZ0t5QjNhVzR6TWk1elpYQWdLeUJpWVhObE8xeHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JuZHBiak15TG5CaGNuTmxJRDBnWm5WdVkzUnBiMjRvY0dGMGFGTjBjbWx1WnlrZ2UxeHlYRzRnSUdsbUlDZ2hkWFJwYkM1cGMxTjBjbWx1Wnlod1lYUm9VM1J5YVc1bktTa2dlMXh5WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjY2x4dUlDQWdJQ0FnSUNCY0lsQmhjbUZ0WlhSbGNpQW5jR0YwYUZOMGNtbHVaeWNnYlhWemRDQmlaU0JoSUhOMGNtbHVaeXdnYm05MElGd2lJQ3NnZEhsd1pXOW1JSEJoZEdoVGRISnBibWRjY2x4dUlDQWdJQ2s3WEhKY2JpQWdmVnh5WEc0Z0lIWmhjaUJoYkd4UVlYSjBjeUE5SUhkcGJqTXlVM0JzYVhSUVlYUm9LSEJoZEdoVGRISnBibWNwTzF4eVhHNGdJR2xtSUNnaFlXeHNVR0Z5ZEhNZ2ZId2dZV3hzVUdGeWRITXViR1Z1WjNSb0lDRTlQU0EwS1NCN1hISmNiaUFnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lTVzUyWVd4cFpDQndZWFJvSUNkY0lpQXJJSEJoZEdoVGRISnBibWNnS3lCY0lpZGNJaWs3WEhKY2JpQWdmVnh5WEc0Z0lISmxkSFZ5YmlCN1hISmNiaUFnSUNCeWIyOTBPaUJoYkd4UVlYSjBjMXN3WFN4Y2NseHVJQ0FnSUdScGNqb2dZV3hzVUdGeWRITmJNRjBnS3lCaGJHeFFZWEowYzFzeFhTNXpiR2xqWlNnd0xDQXRNU2tzWEhKY2JpQWdJQ0JpWVhObE9pQmhiR3hRWVhKMGMxc3lYU3hjY2x4dUlDQWdJR1Y0ZERvZ1lXeHNVR0Z5ZEhOYk0xMHNYSEpjYmlBZ0lDQnVZVzFsT2lCaGJHeFFZWEowYzFzeVhTNXpiR2xqWlNnd0xDQmhiR3hRWVhKMGMxc3lYUzVzWlc1bmRHZ2dMU0JoYkd4UVlYSjBjMXN6WFM1c1pXNW5kR2dwWEhKY2JpQWdmVHRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUzYVc0ek1pNXpaWEFnUFNBblhGeGNYQ2M3WEhKY2JuZHBiak15TG1SbGJHbHRhWFJsY2lBOUlDYzdKenRjY2x4dVhISmNibHh5WEc0dkx5QlRjR3hwZENCaElHWnBiR1Z1WVcxbElHbHVkRzhnVzNKdmIzUXNJR1JwY2l3Z1ltRnpaVzVoYldVc0lHVjRkRjBzSUhWdWFYZ2dkbVZ5YzJsdmJseHlYRzR2THlBbmNtOXZkQ2NnYVhNZ2FuVnpkQ0JoSUhOc1lYTm9MQ0J2Y2lCdWIzUm9hVzVuTGx4eVhHNTJZWElnYzNCc2FYUlFZWFJvVW1VZ1BWeHlYRzRnSUNBZ0wxNG9YRnd2UDN3cEtGdGNYSE5jWEZOZEtqOHBLQ2cvT2x4Y0xuc3hMREo5ZkZ0ZVhGd3ZYU3MvZkNrb1hGd3VXMTR1WEZ3dlhTcDhLU2tvUHpwYlhGd3ZYU29wSkM4N1hISmNiblpoY2lCd2IzTnBlQ0E5SUh0OU8xeHlYRzVjY2x4dVhISmNibVoxYm1OMGFXOXVJSEJ2YzJsNFUzQnNhWFJRWVhSb0tHWnBiR1Z1WVcxbEtTQjdYSEpjYmlBZ2NtVjBkWEp1SUhOd2JHbDBVR0YwYUZKbExtVjRaV01vWm1sc1pXNWhiV1VwTG5Oc2FXTmxLREVwTzF4eVhHNTlYSEpjYmx4eVhHNWNjbHh1THk4Z2NHRjBhQzV5WlhOdmJIWmxLRnRtY205dElDNHVMbDBzSUhSdktWeHlYRzR2THlCd2IzTnBlQ0IyWlhKemFXOXVYSEpjYm5CdmMybDRMbkpsYzI5c2RtVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0IyWVhJZ2NtVnpiMngyWldSUVlYUm9JRDBnSnljc1hISmNiaUFnSUNBZ0lISmxjMjlzZG1Wa1FXSnpiMngxZEdVZ1BTQm1ZV3h6WlR0Y2NseHVYSEpjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dMU0F4T3lCcElENDlJQzB4SUNZbUlDRnlaWE52YkhabFpFRmljMjlzZFhSbE95QnBMUzBwSUh0Y2NseHVJQ0FnSUhaaGNpQndZWFJvSUQwZ0tHa2dQajBnTUNrZ1B5QmhjbWQxYldWdWRITmJhVjBnT2lCd2NtOWpaWE56TG1OM1pDZ3BPMXh5WEc1Y2NseHVJQ0FnSUM4dklGTnJhWEFnWlcxd2RIa2dZVzVrSUdsdWRtRnNhV1FnWlc1MGNtbGxjMXh5WEc0Z0lDQWdhV1lnS0NGMWRHbHNMbWx6VTNSeWFXNW5LSEJoZEdncEtTQjdYSEpjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjBGeVozVnRaVzUwY3lCMGJ5QndZWFJvTG5KbGMyOXNkbVVnYlhWemRDQmlaU0J6ZEhKcGJtZHpKeWs3WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NGd1lYUm9LU0I3WEhKY2JpQWdJQ0FnSUdOdmJuUnBiblZsTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISmxjMjlzZG1Wa1VHRjBhQ0E5SUhCaGRHZ2dLeUFuTHljZ0t5QnlaWE52YkhabFpGQmhkR2c3WEhKY2JpQWdJQ0J5WlhOdmJIWmxaRUZpYzI5c2RYUmxJRDBnY0dGMGFGc3dYU0E5UFQwZ0p5OG5PMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMeThnUVhRZ2RHaHBjeUJ3YjJsdWRDQjBhR1VnY0dGMGFDQnphRzkxYkdRZ1ltVWdjbVZ6YjJ4MlpXUWdkRzhnWVNCbWRXeHNJR0ZpYzI5c2RYUmxJSEJoZEdnc0lHSjFkRnh5WEc0Z0lDOHZJR2hoYm1Sc1pTQnlaV3hoZEdsMlpTQndZWFJvY3lCMGJ5QmlaU0J6WVdabElDaHRhV2RvZENCb1lYQndaVzRnZDJobGJpQndjbTlqWlhOekxtTjNaQ2dwSUdaaGFXeHpLVnh5WEc1Y2NseHVJQ0F2THlCT2IzSnRZV3hwZW1VZ2RHaGxJSEJoZEdoY2NseHVJQ0J5WlhOdmJIWmxaRkJoZEdnZ1BTQnViM0p0WVd4cGVtVkJjbkpoZVNoeVpYTnZiSFpsWkZCaGRHZ3VjM0JzYVhRb0p5OG5LU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FoY21WemIyeDJaV1JCWW5OdmJIVjBaU2t1YW05cGJpZ25MeWNwTzF4eVhHNWNjbHh1SUNCeVpYUjFjbTRnS0NoeVpYTnZiSFpsWkVGaWMyOXNkWFJsSUQ4Z0p5OG5JRG9nSnljcElDc2djbVZ6YjJ4MlpXUlFZWFJvS1NCOGZDQW5MaWM3WEhKY2JuMDdYSEpjYmx4eVhHNHZMeUJ3WVhSb0xtNXZjbTFoYkdsNlpTaHdZWFJvS1Z4eVhHNHZMeUJ3YjNOcGVDQjJaWEp6YVc5dVhISmNibkJ2YzJsNExtNXZjbTFoYkdsNlpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNjbHh1SUNCMllYSWdhWE5CWW5OdmJIVjBaU0E5SUhCdmMybDRMbWx6UVdKemIyeDFkR1VvY0dGMGFDa3NYSEpjYmlBZ0lDQWdJSFJ5WVdsc2FXNW5VMnhoYzJnZ1BTQndZWFJvSUNZbUlIQmhkR2hiY0dGMGFDNXNaVzVuZEdnZ0xTQXhYU0E5UFQwZ0p5OG5PMXh5WEc1Y2NseHVJQ0F2THlCT2IzSnRZV3hwZW1VZ2RHaGxJSEJoZEdoY2NseHVJQ0J3WVhSb0lEMGdibTl5YldGc2FYcGxRWEp5WVhrb2NHRjBhQzV6Y0d4cGRDZ25MeWNwTENBaGFYTkJZbk52YkhWMFpTa3VhbTlwYmlnbkx5Y3BPMXh5WEc1Y2NseHVJQ0JwWmlBb0lYQmhkR2dnSmlZZ0lXbHpRV0p6YjJ4MWRHVXBJSHRjY2x4dUlDQWdJSEJoZEdnZ1BTQW5MaWM3WEhKY2JpQWdmVnh5WEc0Z0lHbG1JQ2h3WVhSb0lDWW1JSFJ5WVdsc2FXNW5VMnhoYzJncElIdGNjbHh1SUNBZ0lIQmhkR2dnS3owZ0p5OG5PMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjbVYwZFhKdUlDaHBjMEZpYzI5c2RYUmxJRDhnSnk4bklEb2dKeWNwSUNzZ2NHRjBhRHRjY2x4dWZUdGNjbHh1WEhKY2JpOHZJSEJ2YzJsNElIWmxjbk5wYjI1Y2NseHVjRzl6YVhndWFYTkJZbk52YkhWMFpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNjbHh1SUNCeVpYUjFjbTRnY0dGMGFDNWphR0Z5UVhRb01Da2dQVDA5SUNjdkp6dGNjbHh1ZlR0Y2NseHVYSEpjYmk4dklIQnZjMmw0SUhabGNuTnBiMjVjY2x4dWNHOXphWGd1YW05cGJpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJSFpoY2lCd1lYUm9JRDBnSnljN1hISmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjY2x4dUlDQWdJSFpoY2lCelpXZHRaVzUwSUQwZ1lYSm5kVzFsYm5SelcybGRPMXh5WEc0Z0lDQWdhV1lnS0NGMWRHbHNMbWx6VTNSeWFXNW5LSE5sWjIxbGJuUXBLU0I3WEhKY2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owRnlaM1Z0Wlc1MGN5QjBieUJ3WVhSb0xtcHZhVzRnYlhWemRDQmlaU0J6ZEhKcGJtZHpKeWs3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JwWmlBb2MyVm5iV1Z1ZENrZ2UxeHlYRzRnSUNBZ0lDQnBaaUFvSVhCaGRHZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCd1lYUm9JQ3M5SUhObFoyMWxiblE3WEhKY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ2NHRjBhQ0FyUFNBbkx5Y2dLeUJ6WldkdFpXNTBPMXh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc0Z0lISmxkSFZ5YmlCd2IzTnBlQzV1YjNKdFlXeHBlbVVvY0dGMGFDazdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVMeThnY0dGMGFDNXlaV3hoZEdsMlpTaG1jbTl0TENCMGJ5bGNjbHh1THk4Z2NHOXphWGdnZG1WeWMybHZibHh5WEc1d2IzTnBlQzV5Wld4aGRHbDJaU0E5SUdaMWJtTjBhVzl1S0daeWIyMHNJSFJ2S1NCN1hISmNiaUFnWm5KdmJTQTlJSEJ2YzJsNExuSmxjMjlzZG1Vb1puSnZiU2t1YzNWaWMzUnlLREVwTzF4eVhHNGdJSFJ2SUQwZ2NHOXphWGd1Y21WemIyeDJaU2gwYnlrdWMzVmljM1J5S0RFcE8xeHlYRzVjY2x4dUlDQjJZWElnWm5KdmJWQmhjblJ6SUQwZ2RISnBiVUZ5Y21GNUtHWnliMjB1YzNCc2FYUW9KeThuS1NrN1hISmNiaUFnZG1GeUlIUnZVR0Z5ZEhNZ1BTQjBjbWx0UVhKeVlYa29kRzh1YzNCc2FYUW9KeThuS1NrN1hISmNibHh5WEc0Z0lIWmhjaUJzWlc1bmRHZ2dQU0JOWVhSb0xtMXBiaWhtY205dFVHRnlkSE11YkdWdVozUm9MQ0IwYjFCaGNuUnpMbXhsYm1kMGFDazdYSEpjYmlBZ2RtRnlJSE5oYldWUVlYSjBjMHhsYm1kMGFDQTlJR3hsYm1kMGFEdGNjbHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHeGxibWQwYURzZ2FTc3JLU0I3WEhKY2JpQWdJQ0JwWmlBb1puSnZiVkJoY25SelcybGRJQ0U5UFNCMGIxQmhjblJ6VzJsZEtTQjdYSEpjYmlBZ0lDQWdJSE5oYldWUVlYSjBjMHhsYm1kMGFDQTlJR2s3WEhKY2JpQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdkbUZ5SUc5MWRIQjFkRkJoY25SeklEMGdXMTA3WEhKY2JpQWdabTl5SUNoMllYSWdhU0E5SUhOaGJXVlFZWEowYzB4bGJtZDBhRHNnYVNBOElHWnliMjFRWVhKMGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4eVhHNGdJQ0FnYjNWMGNIVjBVR0Z5ZEhNdWNIVnphQ2duTGk0bktUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lHOTFkSEIxZEZCaGNuUnpJRDBnYjNWMGNIVjBVR0Z5ZEhNdVkyOXVZMkYwS0hSdlVHRnlkSE11YzJ4cFkyVW9jMkZ0WlZCaGNuUnpUR1Z1WjNSb0tTazdYSEpjYmx4eVhHNGdJSEpsZEhWeWJpQnZkWFJ3ZFhSUVlYSjBjeTVxYjJsdUtDY3ZKeWs3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1Y0c5emFYZ3VYMjFoYTJWTWIyNW5JRDBnWm5WdVkzUnBiMjRvY0dGMGFDa2dlMXh5WEc0Z0lISmxkSFZ5YmlCd1lYUm9PMXh5WEc1OU8xeHlYRzVjY2x4dVhISmNibkJ2YzJsNExtUnBjbTVoYldVZ1BTQm1kVzVqZEdsdmJpaHdZWFJvS1NCN1hISmNiaUFnZG1GeUlISmxjM1ZzZENBOUlIQnZjMmw0VTNCc2FYUlFZWFJvS0hCaGRHZ3BMRnh5WEc0Z0lDQWdJQ0J5YjI5MElEMGdjbVZ6ZFd4MFd6QmRMRnh5WEc0Z0lDQWdJQ0JrYVhJZ1BTQnlaWE4xYkhSYk1WMDdYSEpjYmx4eVhHNGdJR2xtSUNnaGNtOXZkQ0FtSmlBaFpHbHlLU0I3WEhKY2JpQWdJQ0F2THlCT2J5QmthWEp1WVcxbElIZG9ZWFJ6YjJWMlpYSmNjbHh1SUNBZ0lISmxkSFZ5YmlBbkxpYzdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnBaaUFvWkdseUtTQjdYSEpjYmlBZ0lDQXZMeUJKZENCb1lYTWdZU0JrYVhKdVlXMWxMQ0J6ZEhKcGNDQjBjbUZwYkdsdVp5QnpiR0Z6YUZ4eVhHNGdJQ0FnWkdseUlEMGdaR2x5TG5OMVluTjBjaWd3TENCa2FYSXViR1Z1WjNSb0lDMGdNU2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdjbTl2ZENBcklHUnBjanRjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzV3YjNOcGVDNWlZWE5sYm1GdFpTQTlJR1oxYm1OMGFXOXVLSEJoZEdnc0lHVjRkQ2tnZTF4eVhHNGdJSFpoY2lCbUlEMGdjRzl6YVhoVGNHeHBkRkJoZEdnb2NHRjBhQ2xiTWwwN1hISmNiaUFnTHk4Z1ZFOUVUem9nYldGclpTQjBhR2x6SUdOdmJYQmhjbWx6YjI0Z1kyRnpaUzFwYm5ObGJuTnBkR2wyWlNCdmJpQjNhVzVrYjNkelAxeHlYRzRnSUdsbUlDaGxlSFFnSmlZZ1ppNXpkV0p6ZEhJb0xURWdLaUJsZUhRdWJHVnVaM1JvS1NBOVBUMGdaWGgwS1NCN1hISmNiaUFnSUNCbUlEMGdaaTV6ZFdKemRISW9NQ3dnWmk1c1pXNW5kR2dnTFNCbGVIUXViR1Z1WjNSb0tUdGNjbHh1SUNCOVhISmNiaUFnY21WMGRYSnVJR1k3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1Y0c5emFYZ3VaWGgwYm1GdFpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNjbHh1SUNCeVpYUjFjbTRnY0c5emFYaFRjR3hwZEZCaGRHZ29jR0YwYUNsYk0xMDdYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVjRzl6YVhndVptOXliV0YwSUQwZ1puVnVZM1JwYjI0b2NHRjBhRTlpYW1WamRDa2dlMXh5WEc0Z0lHbG1JQ2doZFhScGJDNXBjMDlpYW1WamRDaHdZWFJvVDJKcVpXTjBLU2tnZTF4eVhHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY2NseHVJQ0FnSUNBZ0lDQmNJbEJoY21GdFpYUmxjaUFuY0dGMGFFOWlhbVZqZENjZ2JYVnpkQ0JpWlNCaGJpQnZZbXBsWTNRc0lHNXZkQ0JjSWlBcklIUjVjR1Z2WmlCd1lYUm9UMkpxWldOMFhISmNiaUFnSUNBcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2RtRnlJSEp2YjNRZ1BTQndZWFJvVDJKcVpXTjBMbkp2YjNRZ2ZId2dKeWM3WEhKY2JseHlYRzRnSUdsbUlDZ2hkWFJwYkM1cGMxTjBjbWx1WnloeWIyOTBLU2tnZTF4eVhHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY2NseHVJQ0FnSUNBZ0lDQmNJaWR3WVhSb1QySnFaV04wTG5KdmIzUW5JRzExYzNRZ1ltVWdZU0J6ZEhKcGJtY2diM0lnZFc1a1pXWnBibVZrTENCdWIzUWdYQ0lnSzF4eVhHNGdJQ0FnSUNBZ0lIUjVjR1Z2WmlCd1lYUm9UMkpxWldOMExuSnZiM1JjY2x4dUlDQWdJQ2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0IyWVhJZ1pHbHlJRDBnY0dGMGFFOWlhbVZqZEM1a2FYSWdQeUJ3WVhSb1QySnFaV04wTG1ScGNpQXJJSEJ2YzJsNExuTmxjQ0E2SUNjbk8xeHlYRzRnSUhaaGNpQmlZWE5sSUQwZ2NHRjBhRTlpYW1WamRDNWlZWE5sSUh4OElDY25PMXh5WEc0Z0lISmxkSFZ5YmlCa2FYSWdLeUJpWVhObE8xeHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JuQnZjMmw0TG5CaGNuTmxJRDBnWm5WdVkzUnBiMjRvY0dGMGFGTjBjbWx1WnlrZ2UxeHlYRzRnSUdsbUlDZ2hkWFJwYkM1cGMxTjBjbWx1Wnlod1lYUm9VM1J5YVc1bktTa2dlMXh5WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjY2x4dUlDQWdJQ0FnSUNCY0lsQmhjbUZ0WlhSbGNpQW5jR0YwYUZOMGNtbHVaeWNnYlhWemRDQmlaU0JoSUhOMGNtbHVaeXdnYm05MElGd2lJQ3NnZEhsd1pXOW1JSEJoZEdoVGRISnBibWRjY2x4dUlDQWdJQ2s3WEhKY2JpQWdmVnh5WEc0Z0lIWmhjaUJoYkd4UVlYSjBjeUE5SUhCdmMybDRVM0JzYVhSUVlYUm9LSEJoZEdoVGRISnBibWNwTzF4eVhHNGdJR2xtSUNnaFlXeHNVR0Z5ZEhNZ2ZId2dZV3hzVUdGeWRITXViR1Z1WjNSb0lDRTlQU0EwS1NCN1hISmNiaUFnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGd2lTVzUyWVd4cFpDQndZWFJvSUNkY0lpQXJJSEJoZEdoVGRISnBibWNnS3lCY0lpZGNJaWs3WEhKY2JpQWdmVnh5WEc0Z0lHRnNiRkJoY25Seld6RmRJRDBnWVd4c1VHRnlkSE5iTVYwZ2ZId2dKeWM3WEhKY2JpQWdZV3hzVUdGeWRITmJNbDBnUFNCaGJHeFFZWEowYzFzeVhTQjhmQ0FuSnp0Y2NseHVJQ0JoYkd4UVlYSjBjMXN6WFNBOUlHRnNiRkJoY25Seld6TmRJSHg4SUNjbk8xeHlYRzVjY2x4dUlDQnlaWFIxY200Z2UxeHlYRzRnSUNBZ2NtOXZkRG9nWVd4c1VHRnlkSE5iTUYwc1hISmNiaUFnSUNCa2FYSTZJR0ZzYkZCaGNuUnpXekJkSUNzZ1lXeHNVR0Z5ZEhOYk1WMHVjMnhwWTJVb01Dd2dMVEVwTEZ4eVhHNGdJQ0FnWW1GelpUb2dZV3hzVUdGeWRITmJNbDBzWEhKY2JpQWdJQ0JsZUhRNklHRnNiRkJoY25Seld6TmRMRnh5WEc0Z0lDQWdibUZ0WlRvZ1lXeHNVR0Z5ZEhOYk1sMHVjMnhwWTJVb01Dd2dZV3hzVUdGeWRITmJNbDB1YkdWdVozUm9JQzBnWVd4c1VHRnlkSE5iTTEwdWJHVnVaM1JvS1Z4eVhHNGdJSDA3WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1Y0c5emFYZ3VjMlZ3SUQwZ0p5OG5PMXh5WEc1d2IzTnBlQzVrWld4cGJXbDBaWElnUFNBbk9pYzdYSEpjYmx4eVhHNWNjbHh1YVdZZ0tHbHpWMmx1Wkc5M2N5bGNjbHh1SUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhkcGJqTXlPMXh5WEc1bGJITmxJQzhxSUhCdmMybDRJQ292WEhKY2JpQWdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQndiM05wZUR0Y2NseHVYSEpjYm0xdlpIVnNaUzVsZUhCdmNuUnpMbkJ2YzJsNElEMGdjRzl6YVhnN1hISmNibTF2WkhWc1pTNWxlSEJ2Y25SekxuZHBiak15SUQwZ2QybHVNekk3WEhKY2JseHVYRzVjYmk4dkx5OHZMeTh2THk4dkx5OHZMeTh2TDF4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZKY2JpOHZJQzR2Zmk5d1lYUm9MM0JoZEdndWFuTmNiaTh2SUcxdlpIVnNaU0JwWkNBOUlERmNiaTh2SUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3SWl3aVpYaHdiM0owSUNvZ1puSnZiU0FuTGk5d1lYUm9KenRjY2x4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwybHVaR1Y0TG5Seklpd2laWGh3YjNKMElHTnZibk4wSUc1dmIzQWdQU0FvWm5KdmJUb2djM1J5YVc1bkxDQjBiem9nYzNSeWFXNW5LVG9nYzNSeWFXNW5JRDArSUh0Y2JpQWdkR2h5YjNjZ1JYSnliM0lvSjIxbGRHaHZaQ0IxYm5OMWNIQnZjblJsWkNCcGJpQnBjMjl0YjNKd2FHbGpMWEJoZEdnbktUdGNibjA3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmJtOXZjQzUwY3lJc0ltVjRjRzl5ZENCamIyNXpkQ0JwYzAxaFl5QTlJQ2dwT2lCaWIyOXNaV0Z1SUQwK0lIdGNiaUFnYVdZZ0tIQnliMk5sYzNOY2JpQWdKaVlnZEhsd1pXOW1JSEJ5YjJObGMzTXVjR3hoZEdadmNtMGdQVDA5SUNkemRISnBibWNuWEc0Z0lDWW1JSEJ5YjJObGMzTXVjR3hoZEdadmNtMHVkRzlNYjNkbGNrTmhjMlVvS1NBOVBUMGdKMlJoY25kcGJpY3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2JtRjJhV2RoZEc5eUlDRTlQU0FuZFc1a1pXWnBibVZrSjF4dUlDQW1KaUIwZVhCbGIyWWdibUYyYVdkaGRHOXlMbkJzWVhSbWIzSnRJRDA5UFNBbmMzUnlhVzVuSjF4dUlDQW1KaUJ1WVhacFoyRjBiM0l1Y0d4aGRHWnZjbTB1ZEc5TWIzZGxja05oYzJVb0tTNXBibVJsZUU5bUtDZHRZV01uS1NBK0lDMHhLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlhhVzRnUFNBb0tUb2dZbTl2YkdWaGJpQTlQaUI3WEc0Z0lHbG1JQ2h3Y205alpYTnpYRzRnSUNZbUlIUjVjR1Z2WmlCd2NtOWpaWE56TG5Cc1lYUm1iM0p0SUQwOVBTQW5jM1J5YVc1bkoxeHVJQ0FtSmlCd2NtOWpaWE56TG5Cc1lYUm1iM0p0TG5SdlRHOTNaWEpEWVhObEtDa2dQVDA5SUNkM2FXNHpNaWNwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdmU0JsYkhObElHbG1JQ2gwZVhCbGIyWWdibUYyYVdkaGRHOXlJQ0U5UFNBbmRXNWtaV1pwYm1Wa0oxeHVJQ0FnSUNZbUlIUjVjR1Z2WmlCdVlYWnBaMkYwYjNJdWNHeGhkR1p2Y20wZ1BUMDlJQ2R6ZEhKcGJtY25YRzRnSUNBZ0ppWWdibUYyYVdkaGRHOXlMbkJzWVhSbWIzSnRMblJ2VEc5M1pYSkRZWE5sS0NrdWFXNWtaWGhQWmlnbmQybHVKeWtnUGlBdE1Ta2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdselFuSnZkM05sY2lBOUlDZ3BPaUJpYjI5c1pXRnVJRDArSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5PMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdselRtOWtaU0E5SUNncE9pQmliMjlzWldGdUlEMCtJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUIzYVc1a2IzY2dQVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSFI1Y0dWdlppQndjbTlqWlhOeklDRTlQU0FuZFc1a1pXWnBibVZrSnp0Y2JuMDdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2Y0d4aGRHWnZjbTB1ZEhNaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb1hDSjFkR2xzWENJcE8xeHVYRzVjYmk4dkx5OHZMeTh2THk4dkx5OHZMeTh2TDF4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZKY2JpOHZJR1Y0ZEdWeWJtRnNJRndpZFhScGJGd2lYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQTFYRzR2THlCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUNKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9pc29tb3JwaGljLXBhdGguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcclxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG5cclxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXHJcbi8vIG11c3QgYmUgbm8gc2xhc2hlcyBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxyXG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcclxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxyXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcclxuXHJcbiAgICAvLyBpZ25vcmUgZW1wdHkgcGFydHNcclxuICAgIGlmICghcCB8fCBwID09PSAnLicpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIGlmIChwID09PSAnLi4nKSB7XHJcbiAgICAgIGlmIChyZXMubGVuZ3RoICYmIHJlc1tyZXMubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcclxuICAgICAgICByZXMucG9wKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcclxuICAgICAgICByZXMucHVzaCgnLi4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGFuIGFycmF5IHdpdGggZW1wdHkgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGlucHV0XHJcbi8vIGFycmF5IG9yIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBubyBlbGVtZW50cyBuZWVkIHRvIGJlIHJlbW92ZWRcclxuZnVuY3Rpb24gdHJpbUFycmF5KGFycikge1xyXG4gIHZhciBsYXN0SW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcclxuICB2YXIgc3RhcnQgPSAwO1xyXG4gIGZvciAoOyBzdGFydCA8PSBsYXN0SW5kZXg7IHN0YXJ0KyspIHtcclxuICAgIGlmIChhcnJbc3RhcnRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHZhciBlbmQgPSBsYXN0SW5kZXg7XHJcbiAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xyXG4gICAgaWYgKGFycltlbmRdKVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RJbmRleClcclxuICAgIHJldHVybiBhcnI7XHJcbiAgaWYgKHN0YXJ0ID4gZW5kKVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xyXG59XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIHRocmVlIHBhcnRzOiBbKiwgZGV2aWNlLCBzbGFzaCxcclxuLy8gdGFpbF0gd2luZG93cy1vbmx5XHJcbnZhciBzcGxpdERldmljZVJlID1cclxuICAgIC9eKFthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/KFtcXFxcXFwvXSk/KFtcXHNcXFNdKj8pJC87XHJcblxyXG4vLyBSZWdleCB0byBzcGxpdCB0aGUgdGFpbCBwYXJ0IG9mIHRoZSBhYm92ZSBpbnRvIFsqLCBkaXIsIGJhc2VuYW1lLCBleHRdXHJcbnZhciBzcGxpdFRhaWxSZSA9XHJcbiAgICAvXihbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcXFxcXC9dKz98KShcXC5bXi5cXC9cXFxcXSp8KSkoPzpbXFxcXFxcL10qKSQvO1xyXG5cclxudmFyIHdpbjMyID0ge307XHJcblxyXG4vLyBGdW5jdGlvbiB0byBzcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF1cclxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcclxuICAvLyBTZXBhcmF0ZSBkZXZpY2Urc2xhc2ggZnJvbSB0YWlsXHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhmaWxlbmFtZSksXHJcbiAgICAgIGRldmljZSA9IChyZXN1bHRbMV0gfHwgJycpICsgKHJlc3VsdFsyXSB8fCAnJyksXHJcbiAgICAgIHRhaWwgPSByZXN1bHRbM10gfHwgJyc7XHJcbiAgLy8gU3BsaXQgdGhlIHRhaWwgaW50byBkaXIsIGJhc2VuYW1lIGFuZCBleHRlbnNpb25cclxuICB2YXIgcmVzdWx0MiA9IHNwbGl0VGFpbFJlLmV4ZWModGFpbCksXHJcbiAgICAgIGRpciA9IHJlc3VsdDJbMV0sXHJcbiAgICAgIGJhc2VuYW1lID0gcmVzdWx0MlsyXSxcclxuICAgICAgZXh0ID0gcmVzdWx0MlszXTtcclxuICByZXR1cm4gW2RldmljZSwgZGlyLCBiYXNlbmFtZSwgZXh0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luMzJTdGF0UGF0aChwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHNwbGl0RGV2aWNlUmUuZXhlYyhwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0WzFdIHx8ICcnLFxyXG4gICAgICBpc1VuYyA9ICEhZGV2aWNlICYmIGRldmljZVsxXSAhPT0gJzonO1xyXG4gIHJldHVybiB7XHJcbiAgICBkZXZpY2U6IGRldmljZSxcclxuICAgIGlzVW5jOiBpc1VuYyxcclxuICAgIGlzQWJzb2x1dGU6IGlzVW5jIHx8ICEhcmVzdWx0WzJdLCAvLyBVTkMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZVxyXG4gICAgdGFpbDogcmVzdWx0WzNdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpIHtcclxuICByZXR1cm4gJ1xcXFxcXFxcJyArIGRldmljZS5yZXBsYWNlKC9eW1xcXFxcXC9dKy8sICcnKS5yZXBsYWNlKC9bXFxcXFxcL10rL2csICdcXFxcJyk7XHJcbn1cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxud2luMzIucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByZXNvbHZlZERldmljZSA9ICcnLFxyXG4gICAgICByZXNvbHZlZFRhaWwgPSAnJyxcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xyXG4gICAgdmFyIHBhdGg7XHJcbiAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgIHBhdGggPSBhcmd1bWVudHNbaV07XHJcbiAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZERldmljZSkge1xyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xyXG4gICAgICAvLyBkaXJlY3Rvcmllcy4gSWYgd2UndmUgcmVzb2x2ZWQgYSBkcml2ZSBsZXR0ZXIgYnV0IG5vdCB5ZXQgYW5cclxuICAgICAgLy8gYWJzb2x1dGUgcGF0aCwgZ2V0IGN3ZCBmb3IgdGhhdCBkcml2ZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxyXG4gICAgICAvLyBhbiB1bmMgcGF0aCBhdCB0aGlzIHBvaW50cywgYmVjYXVzZSB1bmMgcGF0aHMgYXJlIGFsd2F5cyBhYnNvbHV0ZS5cclxuICAgICAgcGF0aCA9IHByb2Nlc3MuZW52Wyc9JyArIHJlc29sdmVkRGV2aWNlXTtcclxuICAgICAgLy8gVmVyaWZ5IHRoYXQgYSBkcml2ZS1sb2NhbCBjd2Qgd2FzIGZvdW5kIGFuZCB0aGF0IGl0IGFjdHVhbGx5IHBvaW50c1xyXG4gICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxyXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5zdWJzdHIoMCwgMykudG9Mb3dlckNhc2UoKSAhPT1cclxuICAgICAgICAgIHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkgKyAnXFxcXCcpIHtcclxuICAgICAgICBwYXRoID0gcmVzb2x2ZWREZXZpY2UgKyAnXFxcXCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgICBkZXZpY2UgPSByZXN1bHQuZGV2aWNlLFxyXG4gICAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgICB0YWlsID0gcmVzdWx0LnRhaWw7XHJcblxyXG4gICAgaWYgKGRldmljZSAmJlxyXG4gICAgICAgIHJlc29sdmVkRGV2aWNlICYmXHJcbiAgICAgICAgZGV2aWNlLnRvTG93ZXJDYXNlKCkgIT09IHJlc29sdmVkRGV2aWNlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgLy8gVGhpcyBwYXRoIHBvaW50cyB0byBhbm90aGVyIGRldmljZSBzbyBpdCBpcyBub3QgYXBwbGljYWJsZVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHJlc29sdmVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIHJlc29sdmVkVGFpbCA9IHRhaWwgKyAnXFxcXCcgKyByZXNvbHZlZFRhaWw7XHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNvbHZlZERldmljZSAmJiByZXNvbHZlZEFic29sdXRlKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydCBzbGFzaGVzIHRvIGJhY2tzbGFzaGVzIHdoZW4gYHJlc29sdmVkRGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DXHJcbiAgLy8gcm9vdC4gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIHJlc29sdmVkRGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChyZXNvbHZlZERldmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCxcclxuICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcclxuICAvLyBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSB0YWlsIHBhdGhcclxuICByZXNvbHZlZFRhaWwgPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignXFxcXCcpO1xyXG5cclxuICByZXR1cm4gKHJlc29sdmVkRGV2aWNlICsgKHJlc29sdmVkQWJzb2x1dGUgPyAnXFxcXCcgOiAnJykgKyByZXNvbHZlZFRhaWwpIHx8XHJcbiAgICAgICAgICcuJztcclxufTtcclxuXHJcblxyXG53aW4zMi5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHdpbjMyU3RhdFBhdGgocGF0aCksXHJcbiAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgIGlzVW5jID0gcmVzdWx0LmlzVW5jLFxyXG4gICAgICBpc0Fic29sdXRlID0gcmVzdWx0LmlzQWJzb2x1dGUsXHJcbiAgICAgIHRhaWwgPSByZXN1bHQudGFpbCxcclxuICAgICAgdHJhaWxpbmdTbGFzaCA9IC9bXFxcXFxcL10kLy50ZXN0KHRhaWwpO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHRhaWwgPSBub3JtYWxpemVBcnJheSh0YWlsLnNwbGl0KC9bXFxcXFxcL10rLyksICFpc0Fic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIGlmICghdGFpbCAmJiAhaXNBYnNvbHV0ZSkge1xyXG4gICAgdGFpbCA9ICcuJztcclxuICB9XHJcbiAgaWYgKHRhaWwgJiYgdHJhaWxpbmdTbGFzaCkge1xyXG4gICAgdGFpbCArPSAnXFxcXCc7XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgZGV2aWNlYCBwb2ludHMgdG8gYW4gVU5DIHJvb3QuXHJcbiAgLy8gQWxzbyBzcXVhc2ggbXVsdGlwbGUgc2xhc2hlcyBpbnRvIGEgc2luZ2xlIG9uZSB3aGVyZSBhcHByb3ByaWF0ZS5cclxuICBpZiAoaXNVbmMpIHtcclxuICAgIGRldmljZSA9IG5vcm1hbGl6ZVVOQ1Jvb3QoZGV2aWNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXZpY2UgKyAoaXNBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHRhaWw7XHJcbn07XHJcblxyXG5cclxud2luMzIuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gd2luMzJTdGF0UGF0aChwYXRoKS5pc0Fic29sdXRlO1xyXG59O1xyXG5cclxud2luMzIuam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKGFyZykpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcclxuICAgIH1cclxuICAgIGlmIChhcmcpIHtcclxuICAgICAgcGF0aHMucHVzaChhcmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGpvaW5lZCA9IHBhdGhzLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGpvaW5lZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCB0d28gc2xhc2hlcywgYmVjYXVzZVxyXG4gIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cclxuICAvL1xyXG4gIC8vIFRoaXMgc3RlcCBpcyBza2lwcGVkIHdoZW4gaXQgaXMgdmVyeSBjbGVhciB0aGF0IHRoZSB1c2VyIGFjdHVhbGx5XHJcbiAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxyXG4gIC8vIG5vbi1lbXB0eSBzdHJpbmcgYXJndW1lbnRzIHN0YXJ0cyB3aXRoIGV4YWN0bHkgdHdvIHNsYXNoZXMgZm9sbG93ZWQgYnlcclxuICAvLyBhdCBsZWFzdCBvbmUgbW9yZSBub24tc2xhc2ggY2hhcmFjdGVyLlxyXG4gIC8vXHJcbiAgLy8gTm90ZSB0aGF0IGZvciBub3JtYWxpemUoKSB0byB0cmVhdCBhIHBhdGggYXMgYW4gVU5DIHBhdGggaXQgbmVlZHMgdG9cclxuICAvLyBoYXZlIGF0IGxlYXN0IDIgY29tcG9uZW50cywgc28gd2UgZG9uJ3QgZmlsdGVyIGZvciB0aGF0IGhlcmUuXHJcbiAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cclxuICAvLyBhIHNlcnZlciBuYW1lIGFuZCBhIHNoYXJlIG5hbWU7IGZvciBleGFtcGxlOlxyXG4gIC8vICAgcGF0aC5qb2luKCcvL3NlcnZlcicsICdzaGFyZScpIC0+ICdcXFxcXFxcXHNlcnZlclxcXFxzaGFyZVxcJylcclxuICBpZiAoIS9eW1xcXFxcXC9dezJ9W15cXFxcXFwvXS8udGVzdChwYXRoc1swXSkpIHtcclxuICAgIGpvaW5lZCA9IGpvaW5lZC5yZXBsYWNlKC9eW1xcXFxcXC9dezIsfS8sICdcXFxcJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luMzIubm9ybWFsaXplKGpvaW5lZCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gaXQgd2lsbCBzb2x2ZSB0aGUgcmVsYXRpdmUgcGF0aCBmcm9tICdmcm9tJyB0byAndG8nLCBmb3IgaW5zdGFuY2U6XHJcbi8vIGZyb20gPSAnQzpcXFxcb3JhbmRlYVxcXFx0ZXN0XFxcXGFhYSdcclxuLy8gdG8gPSAnQzpcXFxcb3JhbmRlYVxcXFxpbXBsXFxcXGJiYidcclxuLy8gVGhlIG91dHB1dCBvZiB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlOiAnLi5cXFxcLi5cXFxcaW1wbFxcXFxiYmInXHJcbndpbjMyLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICBmcm9tID0gd2luMzIucmVzb2x2ZShmcm9tKTtcclxuICB0byA9IHdpbjMyLnJlc29sdmUodG8pO1xyXG5cclxuICAvLyB3aW5kb3dzIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZVxyXG4gIHZhciBsb3dlckZyb20gPSBmcm9tLnRvTG93ZXJDYXNlKCk7XHJcbiAgdmFyIGxvd2VyVG8gPSB0by50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICB2YXIgdG9QYXJ0cyA9IHRyaW1BcnJheSh0by5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxvd2VyRnJvbVBhcnRzID0gdHJpbUFycmF5KGxvd2VyRnJvbS5zcGxpdCgnXFxcXCcpKTtcclxuICB2YXIgbG93ZXJUb1BhcnRzID0gdHJpbUFycmF5KGxvd2VyVG8uc3BsaXQoJ1xcXFwnKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihsb3dlckZyb21QYXJ0cy5sZW5ndGgsIGxvd2VyVG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGxvd2VyRnJvbVBhcnRzW2ldICE9PSBsb3dlclRvUGFydHNbaV0pIHtcclxuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc2FtZVBhcnRzTGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBsb3dlckZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCdcXFxcJyk7XHJcbn07XHJcblxyXG5cclxud2luMzIuX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aCkpXHJcbiAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gd2luMzIucmVzb2x2ZShwYXRoKTtcclxuXHJcbiAgaWYgKC9eW2EtekEtWl1cXDpcXFxcLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbG9jYWwgZmlsZXN5c3RlbSBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFwnICsgcmVzb2x2ZWRQYXRoO1xyXG4gIH0gZWxzZSBpZiAoL15cXFxcXFxcXFtePy5dLy50ZXN0KHJlc29sdmVkUGF0aCkpIHtcclxuICAgIC8vIHBhdGggaXMgbmV0d29yayBVTkMgcGF0aCwgd2hpY2ggbmVlZHMgdG8gYmUgY29udmVydGVkXHJcbiAgICAvLyB0byBsb25nIFVOQyBwYXRoLlxyXG4gICAgcmV0dXJuICdcXFxcXFxcXD9cXFxcVU5DXFxcXCcgKyByZXNvbHZlZFBhdGguc3Vic3RyaW5nKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG5cclxud2luMzIuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTcGxpdFBhdGgocGF0aCksXHJcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXHJcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcclxuXHJcbiAgaWYgKCFyb290ICYmICFkaXIpIHtcclxuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxyXG4gICAgcmV0dXJuICcuJztcclxuICB9XHJcblxyXG4gIGlmIChkaXIpIHtcclxuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXHJcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb290ICsgZGlyO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XHJcbiAgdmFyIGYgPSB3aW4zMlNwbGl0UGF0aChwYXRoKVsyXTtcclxuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XHJcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcclxuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gZjtcclxufTtcclxuXHJcblxyXG53aW4zMi5leHRuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlNwbGl0UGF0aChwYXRoKVszXTtcclxufTtcclxuXHJcblxyXG53aW4zMi5mb3JtYXQgPSBmdW5jdGlvbihwYXRoT2JqZWN0KSB7XHJcbiAgaWYgKCF1dGlsLmlzT2JqZWN0KHBhdGhPYmplY3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoT2JqZWN0JyBtdXN0IGJlIGFuIG9iamVjdCwgbm90IFwiICsgdHlwZW9mIHBhdGhPYmplY3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgcm9vdCA9IHBhdGhPYmplY3Qucm9vdCB8fCAnJztcclxuXHJcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHJvb3QpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiJ3BhdGhPYmplY3Qucm9vdCcgbXVzdCBiZSBhIHN0cmluZyBvciB1bmRlZmluZWQsIG5vdCBcIiArXHJcbiAgICAgICAgdHlwZW9mIHBhdGhPYmplY3Qucm9vdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciBkaXIgPSBwYXRoT2JqZWN0LmRpcjtcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICBpZiAoIWRpcikge1xyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG4gIGlmIChkaXJbZGlyLmxlbmd0aCAtIDFdID09PSB3aW4zMi5zZXApIHtcclxuICAgIHJldHVybiBkaXIgKyBiYXNlO1xyXG4gIH1cclxuICByZXR1cm4gZGlyICsgd2luMzIuc2VwICsgYmFzZTtcclxufTtcclxuXHJcblxyXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSB3aW4zMlNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxud2luMzIuc2VwID0gJ1xcXFwnO1xyXG53aW4zMi5kZWxpbWl0ZXIgPSAnOyc7XHJcblxyXG5cclxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cclxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cclxudmFyIHNwbGl0UGF0aFJlID1cclxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xyXG52YXIgcG9zaXggPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcclxufVxyXG5cclxuXHJcbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xyXG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGhbMF0gPT09ICcvJztcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcclxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xyXG59O1xyXG5cclxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIGlzQWJzb2x1dGUgPSBwb3NpeC5pc0Fic29sdXRlKHBhdGgpLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gcGF0aCAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09ICcvJztcclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXHJcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcclxuXHJcbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICBwYXRoID0gJy4nO1xyXG4gIH1cclxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICBwYXRoICs9ICcvJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XHJcbn07XHJcblxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LmpvaW4gPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcGF0aCA9ICcnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghdXRpbC5pc1N0cmluZyhzZWdtZW50KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSBzZWdtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGggKz0gJy8nICsgc2VnbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcG9zaXgubm9ybWFsaXplKHBhdGgpO1xyXG59O1xyXG5cclxuXHJcbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXgucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSBwb3NpeC5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcclxuICB0byA9IHBvc2l4LnJlc29sdmUodG8pLnN1YnN0cigxKTtcclxuXHJcbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW1BcnJheShmcm9tLnNwbGl0KCcvJykpO1xyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCcvJykpO1xyXG5cclxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xyXG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xyXG5cclxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4Ll9tYWtlTG9uZyA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG5wb3NpeC5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSBwb3NpeFNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxucG9zaXguYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHBvc2l4U3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyID8gcGF0aE9iamVjdC5kaXIgKyBwb3NpeC5zZXAgOiAnJztcclxuICB2YXIgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fCAnJztcclxuICByZXR1cm4gZGlyICsgYmFzZTtcclxufTtcclxuXHJcblxyXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocGF0aFN0cmluZykpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhTdHJpbmcnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBwYXRoU3RyaW5nXHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgYWxsUGFydHMgPSBwb3NpeFNwbGl0UGF0aChwYXRoU3RyaW5nKTtcclxuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xyXG4gIH1cclxuICBhbGxQYXJ0c1sxXSA9IGFsbFBhcnRzWzFdIHx8ICcnO1xyXG4gIGFsbFBhcnRzWzJdID0gYWxsUGFydHNbMl0gfHwgJyc7XHJcbiAgYWxsUGFydHNbM10gPSBhbGxQYXJ0c1szXSB8fCAnJztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IGFsbFBhcnRzWzBdLFxyXG4gICAgZGlyOiBhbGxQYXJ0c1swXSArIGFsbFBhcnRzWzFdLnNsaWNlKDAsIC0xKSxcclxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxyXG4gICAgZXh0OiBhbGxQYXJ0c1szXSxcclxuICAgIG5hbWU6IGFsbFBhcnRzWzJdLnNsaWNlKDAsIGFsbFBhcnRzWzJdLmxlbmd0aCAtIGFsbFBhcnRzWzNdLmxlbmd0aClcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnNlcCA9ICcvJztcclxucG9zaXguZGVsaW1pdGVyID0gJzonO1xyXG5cclxuXHJcbmlmIChpc1dpbmRvd3MpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW4zMjtcclxuZWxzZSAvKiBwb3NpeCAqL1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4O1xyXG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGF0aC9wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBub29wID0gKGZyb206IHN0cmluZywgdG86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHRocm93IEVycm9yKCdtZXRob2QgdW5zdXBwb3J0ZWQgaW4gaXNvbW9ycGhpYy1wYXRoJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL25vb3AudHMiLCJpbXBvcnQgKiBhcyB0c1VuaXQgZnJvbSAndHMtdW5pdCc7XHJcbmltcG9ydCB7IFBhdGhTcGVjIH0gZnJvbSAnLi9QYXRoLk5vZGUuc3BlYyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtU3BlYyB9IGZyb20gJy4vUGxhdGZvcm0uTm9kZS5zcGVjJztcclxuXHJcbmNvbnN0IElzb21vcnBoaWNQYXRoVGVzdHMgPSBbXHJcbiAgUGF0aFNwZWMsXHJcbiAgUGxhdGZvcm1TcGVjLFxyXG5dO1xyXG5jb25zdCB0ZXN0ID0gbmV3IHRzVW5pdC5UZXN0KElzb21vcnBoaWNQYXRoVGVzdHMpO1xyXG5jb25zdCByZXN1bHQgPSB0ZXN0LnJ1bigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuY29uc29sZS5sb2cocmVzdWx0LmdldFRhcFJlc3VsdHMoKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvUnVubmVyLk5vZGUudHMiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi90c1VuaXRcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vdHNVbml0QXN5bmNcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VHNVbml0TW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90cy11bml0L2Rpc3Qvc3JjL1RzVW5pdE1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c1VuaXRfMSA9IHJlcXVpcmUoXCIuL3RzVW5pdFwiKTtcbnZhciB0c1VuaXRfMiA9IHJlcXVpcmUoXCIuL3RzVW5pdFwiKTtcbmV4cG9ydHMuVGVzdCA9IHRzVW5pdF8yLlRlc3Q7XG5leHBvcnRzLlRlc3RDb250ZXh0ID0gdHNVbml0XzIuVGVzdENvbnRleHQ7XG5leHBvcnRzLlRlc3RDbGFzcyA9IHRzVW5pdF8yLlRlc3RDbGFzcztcbmV4cG9ydHMuRmFrZUZhY3RvcnkgPSB0c1VuaXRfMi5GYWtlRmFjdG9yeTtcbmV4cG9ydHMuVGVzdERlc2NyaXB0aW9uID0gdHNVbml0XzIuVGVzdERlc2NyaXB0aW9uO1xuZXhwb3J0cy5UZXN0RGVmaW5pdGlvbiA9IHRzVW5pdF8yLlRlc3REZWZpbml0aW9uO1xuY2xhc3MgVGVzdEFzeW5jIGV4dGVuZHMgdHNVbml0XzEuVGVzdCB7XG4gICAgcnVuQWxsKHRlc3RzLCB0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICBsZXQgdGhpc1Rlc3QgPSB0ZXN0c1swXTtcbiAgICAgICAgdmFyIHRlc3RDbGFzcyA9IHRoaXNUZXN0LnRlc3RDbGFzcztcbiAgICAgICAgdmFyIGR5bmFtaWNUZXN0Q2xhc3MgPSB0ZXN0Q2xhc3M7XG4gICAgICAgIHZhciB0ZXN0c0dyb3VwTmFtZSA9IHRoaXNUZXN0Lm5hbWU7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gdHNVbml0XzEuRnVuY3Rpb25Qcm9wZXJ0eUhlbHBlci5nZXRGdW5jdGlvbk5hbWVzKHRlc3RDbGFzcyk7XG4gICAgICAgIGxldCBmdW5jdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgdW5pdFRlc3ROYW1lID0gcHJvcGVydHlOYW1lc1tqXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Jlc2VydmVkRnVuY3Rpb25OYW1lKHVuaXRUZXN0TmFtZSkgJiZcbiAgICAgICAgICAgICAgICAhKHVuaXRUZXN0TmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5wcml2YXRlTWVtYmVyUHJlZml4Lmxlbmd0aCkgPT09IHRoaXMucHJpdmF0ZU1lbWJlclByZWZpeCkgJiZcbiAgICAgICAgICAgICAgICAhKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0gIT09ICdmdW5jdGlvbicpICYmXG4gICAgICAgICAgICAgICAgKCF0ZXN0UnVuTGltaXRlciB8fCB0ZXN0UnVuTGltaXRlci5pc1Rlc3RBY3RpdmUodW5pdFRlc3ROYW1lKSkpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnMucHVzaCh1bml0VGVzdE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZW1haW5pbmdUZXN0cyA9IHRlc3RzLnNsaWNlKDEpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucnVuQWxsRnVuY3Rpb25zKHRoaXNUZXN0LCBmdW5jdGlvbnMsIHRlc3RSdW5MaW1pdGVyKTtcbiAgICAgICAgaWYgKHJlbWFpbmluZ1Rlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB0aGlzLnJ1bkFsbChyZW1haW5pbmdUZXN0cywgdGVzdFJ1bkxpbWl0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcnVuQWxsRnVuY3Rpb25zKHRoaXNUZXN0LCBmdW5jdGlvbk5hbWVzLCB0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICBsZXQgdW5pdFRlc3ROYW1lID0gZnVuY3Rpb25OYW1lc1swXTtcbiAgICAgICAgbGV0IHJlbWFpbmluZ0Z1bmN0aW9ucyA9IGZ1bmN0aW9uTmFtZXMuc2xpY2UoMSk7XG4gICAgICAgIHZhciB0ZXN0Q2xhc3MgPSB0aGlzVGVzdC50ZXN0Q2xhc3M7XG4gICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICB2YXIgdGVzdHNHcm91cE5hbWUgPSB0aGlzVGVzdC5uYW1lO1xuICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0gZHluYW1pY1Rlc3RDbGFzc1t1bml0VGVzdE5hbWVdLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5ydW5BbGxQYXJhbWV0ZXJzKHRoaXNUZXN0LCB1bml0VGVzdE5hbWUsIDAsIHRlc3RSdW5MaW1pdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnJ1blNpbmdsZVRlc3RBc3luYyh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1haW5pbmdGdW5jdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigoKSA9PiB0aGlzLnJ1bkFsbEZ1bmN0aW9ucyh0aGlzVGVzdCwgcmVtYWluaW5nRnVuY3Rpb25zLCB0ZXN0UnVuTGltaXRlcikpO1xuICAgICAgICB9XG4gICAgICAgIHByb21pc2UudGhlbigoeCkgPT4ge1xuICAgICAgICAgICAgdGVzdENsYXNzLnRlYXJEb3duICYmIHRlc3RDbGFzcy50ZWFyRG93bigpO1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHRlc3RDbGFzcy50ZWFyRG93biAmJiB0ZXN0Q2xhc3MudGVhckRvd24oKTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBydW5BbGxQYXJhbWV0ZXJzKHRoaXNUZXN0LCB1bml0VGVzdE5hbWUsIHBhcmFtZXRlckluZGV4LCB0ZXN0UnVuTGltaXRlcikge1xuICAgICAgICBsZXQgdGVzdENsYXNzID0gdGhpc1Rlc3QudGVzdENsYXNzO1xuICAgICAgICBsZXQgZHluYW1pY1Rlc3RDbGFzcyA9IHRlc3RDbGFzcztcbiAgICAgICAgbGV0IHRlc3RzR3JvdXBOYW1lID0gdGhpc1Rlc3QubmFtZTtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBkeW5hbWljVGVzdENsYXNzW3VuaXRUZXN0TmFtZV0ucGFyYW1ldGVycztcbiAgICAgICAgbGV0IG1heEluZGV4ID0gcGFyYW1ldGVycy5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJhbWV0ZXJJbmRleDtcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCBwYXJhbWV0ZXJzLmxlbmd0aCAmJiAhdGVzdFJ1bkxpbWl0ZXIuaXNQYXJhbWV0ZXJzU2V0QWN0aXZlKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgcGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1blNpbmdsZVRlc3RBc3luYyh0ZXN0Q2xhc3MsIHVuaXRUZXN0TmFtZSwgdGVzdHNHcm91cE5hbWUsIHBhcmFtZXRlcnMsIGluZGV4KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMucnVuQWxsUGFyYW1ldGVycyh0aGlzVGVzdCwgdW5pdFRlc3ROYW1lLCBpbmRleCArIDEsIHRlc3RSdW5MaW1pdGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICB9XG4gICAgcnVuU2luZ2xlVGVzdEFzeW5jKHRlc3RDbGFzcywgdW5pdFRlc3ROYW1lLCB0ZXN0c0dyb3VwTmFtZSwgcGFyYW1ldGVycyA9IG51bGwsIHBhcmFtZXRlclNldEluZGV4ID0gbnVsbCkge1xuICAgICAgICAvLyBydW5uaW5nIGV2ZXJ5dGhpbmcgaW5zaWRlIC50aGVuIHNhdmVzIHVzIGEgdHJ5L2NhdGNoXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRlc3RDbGFzcy5zZXRVcCAmJiB0ZXN0Q2xhc3Muc2V0VXAoKTtcbiAgICAgICAgICAgIHZhciBkeW5hbWljVGVzdENsYXNzID0gdGVzdENsYXNzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSAocGFyYW1ldGVyU2V0SW5kZXggIT09IG51bGwpID8gcGFyYW1ldGVyc1twYXJhbWV0ZXJTZXRJbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGR5bmFtaWNUZXN0Q2xhc3NbdW5pdFRlc3ROYW1lXS5hcHBseSh0ZXN0Q2xhc3MsIGFyZ3MpO1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFzc2VzLnB1c2gobmV3IHRzVW5pdF8xLlRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgJ09LJykpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IHRzVW5pdF8xLlRlc3REZXNjcmlwdGlvbih0ZXN0c0dyb3VwTmFtZSwgdW5pdFRlc3ROYW1lLCBwYXJhbWV0ZXJTZXRJbmRleCwgZXJyLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcnVuQXN5bmModGVzdFJ1bkxpbWl0ZXIgPSBudWxsKSB7XG4gICAgICAgIHZhciBwYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgdmFyIHRlc3RDb250ZXh0ID0gbmV3IHRzVW5pdF8xLlRlc3RDb250ZXh0KCk7XG4gICAgICAgIGlmICh0ZXN0UnVuTGltaXRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZXN0UnVuTGltaXRlciA9IHRoaXMudGVzdFJ1bkxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRlc3RzID0gdGhpcy50ZXN0cztcbiAgICAgICAgaWYgKHRlc3RSdW5MaW1pdGVyKSB7XG4gICAgICAgICAgICB0ZXN0cyA9IHRlc3RzLmZpbHRlcigoeCkgPT4gdGVzdFJ1bkxpbWl0ZXIuaXNUZXN0c0dyb3VwQWN0aXZlKHgubmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bkFsbCh0ZXN0cywgdGVzdFJ1bkxpbWl0ZXIpO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlIHJ1bkFzeW5jXCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2UgcnVuQXN5bmNcIik7XG4gICAgfVxufVxuZXhwb3J0cy5UZXN0QXN5bmMgPSBUZXN0QXN5bmM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10c1VuaXRBc3luYy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdHMtdW5pdC9kaXN0L3NyYy90c1VuaXRBc3luYy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==