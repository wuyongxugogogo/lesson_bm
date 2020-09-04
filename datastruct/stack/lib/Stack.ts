// 数据结构由什么组成?
// ADT 数据和操作数据方法
// 原始数据 items: any[]
// 方法: constructor this.items = []
// 入栈: push
// 出栈: pop
// 获取栈顶元素 peek
// 数量 size
// 是否为空
// 清空 clear
// toString 输出

export default class Stack {
    private items:any[];
    constructor() {
      this.items = []
    }
    push(item: any) {
      this.items.push(item)
    }
    pop() {
      return this.items.pop()
    }
    peek() {
      return this.items[this.items.length - 1]
    }
    isEmpty():boolean {
      return this.items.length === 0
    }
    clear() {
      this.items = []
    }
    size():number {
      return this.items.length
    }
    toString():string {
      return this.items.toString()
    }
    find() {
      // 性能问题
      
    }
  }
  