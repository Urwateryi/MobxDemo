## 安装mobx组件


```
npm install mobx mobx-react --save
```

## 安装装饰器

因为会用到ES7的装饰器（会适当的简化代码），所以在此安装一下


```
npm install babel-plugin-transform-decorators-legacy --save-dev
```

然后在`.babelrc`文件中配置，启用一下这个插件


```
"plugins": ["transform-decorators-legacy"]
```

>注意：transform-decorators-legacy 需放在首位，[参考issue](https://github.com/mobxjs/mobx/issues/105)


## 实现


创建一个store文件，把所有store放里面，在根RootStore里，把其他store实例化

```
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

    //被观察的字段
    @observable
    name = 'Zoey';

    //被观察的操作
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
```


```
import React, { PureComponent } from 'react';
import TestPage from "./app/TestPage";
import { Provider } from 'mobx-react'
import stores from './app/stores'

export default class App extends PureComponent {
    render() {
        return (
        //在根布局上，使用provider实现全局注册，rootStore为未来用到的地方inject的名字
            <Provider rootStore={stores}>
                <TestPage/>
            </Provider>
        );
    }
}
```

```
/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/21 0017
 */
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';

import { observer, inject } from "mobx-react";

//在需要使用的地方，使用inject方法注入store，observer为观察者
@inject('rootStore')
@observer
export default class TestPage extends Component {

    nameStore=this.props.rootStore.nameStore;
    ageStore=this.props.rootStore.ageStore;

    onChange() {
        this.nameStore.setName("Jack");
        this.ageStore.setAge("20");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{'姓名：'+this.nameStore.name+'\n 年龄：'+this.ageStore.age}</Text>
                <Text style={styles.btn} onPress={() => this.onChange()}>点我换换</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor : 'white',
    },btn:{
        marginTop:20,
        fontSize:20,
        fontWeight :'200',
        color :'black'
    }
});
```

[传送门](https://github.com/Urwateryi/MobxDemo.git)