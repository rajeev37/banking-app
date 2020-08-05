import { observable, configure, action } from "mobx"

configure({ enforceActions: "observed" })
export default class AppStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  
  @observable authUser =  JSON.parse(localStorage.getItem('role')) || {role: "anonymous", isLogin: false};
  @action setUserAuth(user) {
    console.log("user", user);
    if(user) {
      localStorage.setItem('role', JSON.stringify(user));
      this.authUser = JSON.parse(localStorage.getItem('role'));
    }
  }
  @action logout() {
    localStorage.removeItem('role');
    this.authUser = {role: "anonymous", isLogin: false}
  }

}