//发红包功能
function hongbao(total,num){
    let arr=[];
    let restAmount=total;
    let restNum=num;
    //39个循环
    for(let i = 0 ; i < num-1 ; i++){
        let amount=total/num;
        arr.push(amount);
        restAmount-=amount;
    }
    arr.push(restAmount);//最后一个拿剩下的

    return arr;
}
console.log(hongbao(5,40));