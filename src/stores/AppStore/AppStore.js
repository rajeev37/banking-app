import { customersGetApi } from "../../util/services";

class AppStore {
  user = {
    role: "Anonymous",
    authenticated: false
  };
  setUserAuth(role, isAuth) {
    return this.user = {role: role, authenticated: isAuth}
  }
  customersList = [];
  customersListAPi() {
      customersGetApi()
        .then((data) => {
            console.log("*api", data);
            return this.customersList = data
        })
  }
  
}

export default new AppStore();