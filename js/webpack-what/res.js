// commonJS require module.exports 的原理
(function(obj) {
    let module = {}
    function __webpack__require(params) {
      // params => ./math.js
      // ./math.js 结果 拿到
      obj[params](module);
      console.log(module.exports);
      return module.exports;
    }
    obj['./index.js'](__webpack__require);
  })({
    './index.js': function (__webpack__require) {
      const sum = __webpack__require('./math.js');
      console.log(sum(10, 20))
    },
    './math.js': function (module) {
      module.exports = (a, b) => (a + b)
    }
  })
  // script
  // module.exports 如何在 浏览器上面运行的
  