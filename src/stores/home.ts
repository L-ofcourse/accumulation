import { action, computed, observable, reaction } from 'mobx'
import RootStore from './root'

export default class HomeStore {
    private _store: RootStore

    @observable private _str: string = '0.0'

    constructor(store: RootStore) {
        this._store = store
    }

    @computed 
    public get str() {
        return this._str
    }

    public set str(value: string) {
        this._str = value
    }
} 