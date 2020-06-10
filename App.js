import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    const {navigation}=this.props;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",background:"red" }}>
          <Button 
           title={"FlatListDemo"}
           onPress={()=>{
              navigation.navigate('FlatListDemo',{name:'动态标题'})
           }}
          />
          <Button 
           title={"SectionListDemo"}
           onPress={()=>{
              navigation.navigate('SectionListDemo',{name:'动态',mode:''})
           }}
          />
        </View>

    );
  }
}