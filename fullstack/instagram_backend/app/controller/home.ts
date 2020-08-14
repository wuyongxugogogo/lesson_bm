import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // node HTTP协议 基于应答式 ctx = request + response
    // ctx.response
    ctx.body = 'hello'
    // ctx.body = await ctx.service.test.sayHi('egg');
  }
}
