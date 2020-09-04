import Stack from './lib/Stack'
import ObjectStack from './lib/ObjStack'

const decimalToBinary = function (decNumber: number): string {
    const stack = new Stack();
    let number = decNumber;
    let rem;// 余数
    let binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2)
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString
}

const decimalToBinaryObjStack = function (decNumber: number): string {
    const stack = new ObjectStack();
    let number = decNumber;
    let rem; // 余数
    let binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
}

const testNumber = 999989993232287;
console.time("数组栈")
console.log(decimalToBinary(testNumber))
console.timeEnd("数组栈")

console.time("对象栈")
console.log(decimalToBinaryObjStack(testNumber))
console.timeEnd("对象栈")
