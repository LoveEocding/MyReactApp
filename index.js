/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator }  from 'react-navigation-stack';
import FlatListDemo from './src/pages/FlatListDemo';

const AppRoot =createStackNavigator({
    App:{
        screen:App,
        navigationOptions :{
            title:'首页'
        }
    },
    FlatListDemo:{
        screen:FlatListDemo,
        navigationOptions:{
            title:'FlatListDemo'
        }
    }
})

AppRegistry.registerComponent(appName, () => createAppContainer(AppRoot));
