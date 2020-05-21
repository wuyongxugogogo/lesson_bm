// async awaits
const fs = require('fs');
const promise1 = new Promise((resolve, reject) => {
  // 
  // 回调
  fs.readFile('./package.json', (err, info) => {
    resolve(info);
  })
})
const promise2 = (info) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./p.json', info, (err) => {
      if (!err) {
        resolve();
      } else {
        reject()
      }
    })
  })
}
const promise3 = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}
// 异步转同步： X
// 写法上同步，执行起来依然异步 （Pending， Fullfiled， Reject）
// then 链式调用
// promise1
// .then((info) => {
//   return promise2(info);
// })
// .then(() => {
//   return promise3(3000);
// })
// .then(() => {
//   console.log('ok')
// })

async function run() {
  // await 接一个 promise 那么后面代码就会等着，等 promise resolve 才会执行
  // async + await 替代了 .then
  let info = await promise1   // promise1 info === resolve了什么
  await promise2(info);
  await promise3(3000);
  console.log('ok')
  // ...code
}
run();

// 同步的
// let a = 1 + 1;
// let b = a + 3;
// let c = b + 4;

// fs.readFile('./package.json', (err, info) => {
//   resolve(info);
// })
// 异步的顺序，保证异步顺序 怎么办？？？
// 1：原始写法：回调函数嵌套在一起，可能形成回调地狱
fs.readFile('./package.json', (err, info) => {
  // 读完
  // 在写
  fs.writeFile('./p.json', info, (err) => {
    if (!err) {
      setTimeout(() => {
        console.log('ok');
        // 嵌套
      }, 2000)
    }
  })
})
// 回调  ->  promise 只是  以 then 这个 api，保证了 异步任务的顺序
// XmlHttqrequest ->  axios
