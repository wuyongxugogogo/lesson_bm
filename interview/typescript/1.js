const getUserInfo = function(user){
    return `name: ${user.name}, age: ${user.age}`
}
// 潜在bug
// getUserInfo({name: 'koala', age: 18})

// 错误调用
// getUserInfo()
// getUserInfo({name: 'koala'})
// getUserInfo({name: 'koala', height: 1.66})
// 利用返回值