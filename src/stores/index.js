import AppStore from "./AppStore/AppStore";

class RootStore {
    constructor() {
        this.appStore = new AppStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;