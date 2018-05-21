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