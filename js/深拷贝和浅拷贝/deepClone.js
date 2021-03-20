function cloneObject(obj) {
  let newObj = {}; 

  for(let key in obj) {
    if(typeof obj[key] === 'object') {
      newObj[key] = cloneObject(obj[key]);//如果某个属性还是引用类型，递归调用
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj
}

// 测试
let obj1 = {
  name: 'name',
  sex: 'sex',
  a: {
      b:{
          c:1
      }
  }
}
const obj2 = cloneObject(obj1);
obj2.name = 'wuyongxu';
console.log(obj1, obj2);