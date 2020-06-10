import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

export default class pageOneDemo extends Component {
    render() {
        const { navigation } = this.props;
        return <View style={{ flex: 1, backgroundColor: "gray", paddingTop: 30 }}>
            <Text style={Styles.text}>第一个初始页面</Text>
            <Button title={'返回上一个页面'} onPress={() => {
                navigation.goBack();
            }} ></Button>
            <Button title={'返回上一个页面'} onPress={() => {
                navigation.navigate('page2');
            }} ></Button>
        </View>
    }
}

const Styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white'
    }
})
