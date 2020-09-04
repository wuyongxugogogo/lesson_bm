"use strict";
exports.__esModule = true;
var Stack_1 = require("./lib/Stack");
var ObjStack_1 = require("./lib/ObjStack");
var decimalToBinary = function (decNumber) {
    var stack = new Stack_1["default"]();
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var decimalToBinaryObjStack = function (decNumber) {
    var stack = new ObjStack_1["default"]();
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var testNumber = 999989993232287;
console.time("数组栈");
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈");
console.time("对象栈");
console.log(decimalToBinaryObjStack(testNumber));
console.timeEnd("对象栈");
