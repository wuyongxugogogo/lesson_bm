const http = require('http');

class MyKoa{
    constructor(){
        console.log('asd')
        this.fn = undefined;
    }
    listen(...args){
        console.log(args)
        let server = http.createServer(this.fn);
        server.listen(...args)
    }
    use(fn){
        this.fn = fn;
    }
}


module.exports = MyKoa