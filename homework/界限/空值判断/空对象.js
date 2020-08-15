let obj = {};

// console.log(obj && obj.name ? '不为空' : '为空')

// Object.keys() Object.getOwnPropertyNames() 
// 返回的都是属性名的数组 
// 当返回是一个空数组的时候 这个对象就为空

// console.log(Object.keys(obj).length === 0)
// console.log(Object.getOwnPropertyNames(obj).length === 0)

// 将对象转换为字符串
// let a = JSON.stringify(obj)
// console.log(a === '{}')

// for...in 
// function judgeObj(obj){
//     for(let key in obj){
//         return false
//     }
//     return true
// }
// console.log(judgeObj(obj))