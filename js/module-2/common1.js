console.log('1 开始')
var done = false
module.exports.done = done;
let obj = {
    a: 1, b: 2
}
module.exports.obj = obj
setTimeout(() => {
    done = true
    obj.a = 1111
}, 3000)