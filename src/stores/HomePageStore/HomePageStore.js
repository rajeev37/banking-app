import { observable, decorate, action } from "mobx";
import { customersGetApi } from "../../util/services";

// TODO.. Use store for data store and apis response.
let HomePageStore = observable({
  customersList: [],
  customersListAPi:  function() {
      customersGetApi()
        .then((data) => {
            console.log("*api", data);
            return this.customersList = data
        })
  }
  
})

export default HomePageStore;