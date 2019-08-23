import HomeStore from './home'

class RootStore {
    home: HomeStore

    constructor() {
        this.home = new HomeStore(this)
    }
}

export default RootStore