import React, { Component } from 'react';
import {Text,View,SectionList, StyleSheet,RefreshControl,ActivityIndicator,TextInput} from 'react-native';

//定义一个数组
const CITY_NAMES=[{data:['北京','重庆','天津','北京'],title:'第一个分类'},{data:['北京','重庆','天津','北京'],title:'第二个分类'},{data:['北京','重庆','天津','北京'],title:'第三个分类'}]
const Styles =StyleSheet.create({
    container:{
    },
    item:{
      width:'100%',
      height:80,
      backgroundColor:'blue',
      color:'#FFFFFF',
      alignItems:'center',
      justifyContent:'center',
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
    },
    render_type_head:{
       height:50,
       backgroundColor:'#F5DEB3',
       alignItems:'center',
       justifyContent:'center'
    },
    separator:{
       height:1,
       backgroundColor:'#8A2BE2',
       flex:1
    },
    textInput:{
        height:50,
        borderWidth:1,
        marginTop:10,
        borderColor:'black'
    }
})
export default class  SectionListDemo extends Component{
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
    //渲染分组组件
    _renderTypeHead=({section})=>(
        <View style={Styles.render_type_head}>
          <Text style={Styles.render_type_head_txt}>{section.title}</Text>
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
        const { navigation } =this.props;
        const { state,setParams}=navigation;
        const { params}=state;
        const showText=params&&params.mode==='edit'?'正在编辑':'编辑完成';
        return(
           
            <View>
                  <TextInput
              style={Styles.textInput} 
              onChangeText={text=>{
                setParams({name:text})
              }}
             />
               <SectionList 
               sections={this.state.dataArray}
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
                renderSectionHeader={(data)=>this._renderTypeHead(data)}
                ItemSeparatorComponent={()=><View style={Styles.separator}></View>}
               />
            </View>
        )
    }
}

