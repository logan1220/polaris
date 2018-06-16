import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { YellowBox } from 'react-native';
import Home from './src/containers/Home';
import Test from './src/containers/Test';
import { Feather } from '@expo/vector-icons';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Tabs = createBottomTabNavigator({
    Home: {
        screen: Home,
        icon: (<Feather name="home" size={32} color="white" />)
    },
    Test: {
        screen: Test,
    }
}, {
    navigationOptions: {
        tabBarIcon: (<Feather name="home" size={32} color="white" />)
    },
    tabBarOptions: {
        style: {
            backgroundColor: '#989998',
        },
        showIcon: true,
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
    }
});

const RootStack = createStackNavigator({
    Tab: {
        screen: Tabs,
    },
}, {
    navigationOptions: {
        headerTitle: 'test',
        headerStyle: {
            backgroundColor: '#79ed81'
        }
    },
});

export default class App extends React.Component {

    render() {
        return (
            <RootStack />
        );
    }
}
