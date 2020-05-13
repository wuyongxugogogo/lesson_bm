var name1 = 'lilei';
function test(){
    var name = 0;
    function test1(){
        return name ++;
    }
    return test1;
}
var fn = test();
console.log(fn());
console.log(fn());
console.log(fn());