/**
 * @format
 */
import  React from 'react';
import {
    AppRegistry, Button,Text
} from 'react-native';
import App from './App';
import {
    name as appName
} from './app.json';
import {
    createAppContainer
} from 'react-navigation'
import {
    createStackNavigator
} from 'react-navigation-stack';
import FlatListDemo from './src/pages/FlatListDemo';
import SectionListDemo from './src/pages/SectionListDemo';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import  Iconicons   from 'react-native-vector-icons/Ionicons'
import 'react-native-gesture-handler';

//创建底部导航器
const BottomTabNavigator=createBottomTabNavigator({
    App: {
        screen: App,
        navigationOptions:{
            tabBarLable:({tintColor,focused})=>(<Text style={{ color:focused?'orange':'red' }}>主页</Text>),
            tabBarIcon:({tintColor,focused})=>(
                <Iconicons 
                name={'ios-home'}
                size={26}
                style={{ color:tintColor }}
                />
            )
        }
    },
    FlatListDemo: {
        screen: FlatListDemo,
        navigationOptions:{
            tabBarLable:({tintColor,focused})=>(<Text style={{ color:focused?'orange':'red' }}>Flat</Text>),
            tabBarIcon:({tintColor,focused})=>(
                <Iconicons 
                name={'ios-power'}
                size={26}
                style={{ color:tintColor }}
                />
            )
        }
    },
},{
    tabBarOptions:{
        activeTintColor:'red'
    }
})

const AppRoot = createStackNavigator({
    App: {
        screen: BottomTabNavigator,
        navigationOptions: {
            title: '首页'
        }
    },
    FlatListDemo: {
        screen: FlatListDemo,
        // 动态设置选项
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params && navigation.state.params.name}`
        })
    },
    SectionListDemo: {
        screen: SectionListDemo,
        //自定义交互
        navigationOptions: (props) => {
            const { navigation } = props;
            const { state, setParams } = navigation;
            const { params } = state;
            return ({
                title: 'SectionListDemo',
                headerRight:(<Button title={'右侧按钮'} />),
            })
        }
    }

}, {
    defaultNavigationOptions: {
        // header:null, 隐藏头部
    }
})

AppRegistry.registerComponent(appName, () => createAppContainer(AppRoot));