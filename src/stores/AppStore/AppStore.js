import { observable, configure, action } from "mobx"

configure({ enforceActions: "observed" })
export default class AppStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  
  @observable authUser = {isLogin: false, role: "anonymous"};
  @action setUserAuth(user) {
    this.authUser = user;
  }

}