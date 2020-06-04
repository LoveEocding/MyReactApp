import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    const {navigation}=this.props;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",background:"red" }}>
          <Button 
           title={"点击跳转FlatListDemo"}
           onPress={()=>{
              navigation.navigate('FlatListDemo')
           }}
          />
        </View>

    );
  }
}