// typeof
// console.log(typeof 'abcdef') // 'string'
// console.log(typeof true)     // 'boolean'
// console.log(typeof 99)       // 'number'
// console.log(typeof Symbol()) // 'symbol'
// console.log(() => {})   // 'function'
// console.log(typeof undefined ) // 'undefined'

// console.log(typeof {})  // 'object'
// console.log(typeof [])  // 'object'
// console.log(typeof null)// 'object' 无法判定是否为 null


// instanceof
// console.log([] instanceof Array)            // true
// console.log(({}) instanceof Object)         // true
// console.log((()=>{}) instanceof Function)   // true

// let arr = []
// let obj = {}
// console.log(arr instanceof Object)
// console.log(arr instanceof Array)

// Object.prototype.toString()

console.log(Object.prototype.toString.call({}))              // '[object Object]'
console.log(Object.prototype.toString.call([]))              // '[object Array]'
console.log(Object.prototype.toString.call(() => {}))        // '[object Function]'
console.log(Object.prototype.toString.call('abcdef'))        // '[object String]'
console.log(Object.prototype.toString.call(99))               // '[object Number]'
console.log(Object.prototype.toString.call(true))            // '[object Boolean]'
console.log(Object.prototype.toString.call(Symbol()))        // '[object Symbol]'
console.log(Object.prototype.toString.call(null))          // '[object Null]'
console.log(Object.prototype.toString.call(undefined))       // '[object Undefined]'

console.log(Object.prototype.toString.call(new Date()))      // '[object Date]'
console.log(Object.prototype.toString.call(Math))            // '[object Math]'
console.log(Object.prototype.toString.call(new Set()))       // '[object Set]'
console.log(Object.prototype.toString.call(new WeakSet()))   // '[object WeakSet]'
console.log(Object.prototype.toString.call(new Map()))       // '[object Map]'
console.log(Object.prototype.toString.call(new WeakMap()))   // '[object WeakMap]'
