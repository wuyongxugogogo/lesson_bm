import { observable, action } from 'mobx'
class Auth {
  @observable isLogin = false; // 没有和页面 绑定

  @action
  login() {
    this.isLogin = true;
  }
  logout() {
    this.login = false;
  }
}
export default new Auth();
