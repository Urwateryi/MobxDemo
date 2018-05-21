/**
 * Description:根store
 *
 * Author: zoe
 * Time: 2018/5/21 0016
 */
import { observable,action } from 'mobx'

class RootStore {
    constructor() {
        this.nameStore = new NameStore();
        this.ageStore = new AgeStore();
    }
}

class NameStore{

    @observable
    name = 'Zoey';

    @action
    setName(newName){
        this.name=newName;
    }
}

class AgeStore{

    @observable
    age = '18';

    @action
    setAge(newAge){
        this.age=newAge;
    }
}

export default new RootStore();