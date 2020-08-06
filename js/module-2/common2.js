const {done,obj} = require('./common1')
console.log(done);
console.log(obj);
setTimeout(() => {
    console.log(done)
    console.log(obj)
}, 5000); 