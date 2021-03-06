import React, { Component } from 'react';
import {Text,View,FlatList, StyleSheet,RefreshControl,ActivityIndicator} from 'react-native';

//定义一个数组
const CITY_NAMES=['北京','重庆','天津','北京','重庆','天津','北京','重庆','天津','北京','重庆','天津','北京','重庆','天津',]
const Styles =StyleSheet.create({
    container:{
    },
    item:{
      width:'100%',
      height:200,
      backgroundColor:'blue',
      color:'#FFFFFF',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:20
    },
    text:{
       fontSize:24,
       color:'white'
    },
    indicatorContainer:{
       alignItems:'center'
    },
    indicator:{
       color:'red'
    }
    
})
export default class  FlatListDemo extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:false,
            dataArray:CITY_NAMES
        }
    }
    //渲染item
    _renderItem=(data)=>(
         <View style={Styles.item}>
        <Text style={Styles.text}>{data.item}</Text>
        </View>
        
    )
    //渲染上滑加载更多组件
    _renderLoadingMore=()=>(
         <View style={Styles.indicatorContainer}>
             <ActivityIndicator 
               style={Styles.indicator}
               color={'red'}
               size={'large'}
               animating={true}
             />
             <Text>正在加载更多</Text>
         </View>  
    )
    loadData(refreshing=true){
        if(refreshing){
            this.setState({
                isLoading:true
            });
        }
        setTimeout(() => {
            let dataArray=[];
            dataArray=[...this.state.dataArray,...this.state.dataArray];
            this.setState({
                dataArray:dataArray,
                isLoading:false
            })
        }, 2000);
    }
    render(){  
        return(
            <View>
               <FlatList 
               data={this.state.dataArray}
               keyExtractor={(item,index)=>index+''}
               renderItem={(data)=>this._renderItem(data)}
               refreshControl={ <RefreshControl 
                  title={"加载中"}
                  colors={['red']}
                  refreshing={this.state.isLoading}
                  onRefresh={()=>{this.loadData()}}
               /> }
                ListFooterComponent={()=>this._renderLoadingMore()}
                onEndReached={()=>{this.loadData(false)}}
               />
            </View>
        )
    }
}

