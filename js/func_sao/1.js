// 长方形面积的函数
/**
 * @return number
 * @param {number} w 
 * @param {number} h 
 */
function area(w, h) { // es5
    // console.log(w, h); // undefined
    // 两个参数 
    if (arguments.length < 2) {
      console.error('参数不够');
      throw new Error('参数不够');
    }
      
    if (typeof w != 'number' || typeof h != 'number') {
      throw new Error('参数类型有误');
    }
  
    return w * h;
  }
  
  console.log(area(1, 2));

// var area = function(w,h){ // 匿名函数

// }

// const getArea = (w,h) => w*h; // es6

// // 有什么问题不？