const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
let m = 0;
myEmitter.on('price',()=>{
    console.log('价格变了')
})
myEmitter.once('event', () => {
    console.log(++m);
});
myEmitter.emit('price');
myEmitter.emit('event');
// 打印: 1
myEmitter.emit('event');
