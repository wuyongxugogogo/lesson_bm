// js es6  class 关键字 面向对象
const UUID = require('uuid'); // 引入第三方库，

class Wallet {
    // 属性和方法组成
    constructor() { //构造函数里声明
        this._id = UUID.v1().replace(/-/g,""); //命名规则约定  _变量 私有
        // 创建时间 不能改
        this._createTime = + new Date(); // 类型转换
        // 余额 怎么设计？
        this._balance = 0; // 余额 设计成私有属性
        // 创建修改余额时间
        this._modifyTime = new Date();
        // console.log(this.id);
        // console.log('欢迎使用支付宝钱包');
        // 设计支付宝用的钱包， 几十亿人都在用的
        // 19979113182 
        // 数字货币的概念 比特币， 
        // 1. 唯一 id， autoincremnet  Node, 绝对不会重复 
    }
    getBalance() {
        return this._balance.toFixed(2);
    }
    // 能这么写吗？ 重置？
    // setBalance() {

    // }
    increaseBalance(increasedAmount) { //
        console.log('多了' + increasedAmount);
        this._balance += increasedAmount;
        console.log('存钱时间：' + this.setModifyTime());
        console.log('当前余额：' + this.getBalance());
    }
    decreaseBalance(decreasedAmount){
        console.log('少了' + decreasedAmount);
        this._balance -= decreasedAmount;
        console.log('消费时间：' + this.setModifyTime());
        console.log('当前余额：' + this.getBalance());
    }
    getCreateTime(){ // public
        return this._createTime;
    }
    getId() {
        return this._id;
    }
    setId() {
        throw new Error('私有属性_id 不可以修改');
    }
    setModifyTime(){
        return this._modifyTime;
    }

}

const zzwWallet = new Wallet(); //实例化
console.log(zzwWallet.getId());
// console.log(zzwWallet.setId());
console.log(zzwWallet.getCreateTime());
console.log(zzwWallet.getBalance());
zzwWallet.increaseBalance(10.0);
zzwWallet.decreaseBalance(8.1);
console.log(zzwWallet.getBalance());
// zzwWallet._id = '12212'; //id 属性只读， 但不能修改
// console.log(zzwWallet._id); // id 是zzwWallet 的public 属性