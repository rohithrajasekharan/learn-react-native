
import React from 'react';
import {Home} from '../screens';
import {Second} from '../screens';
import {Third} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TabBar} from '../components';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props}  initialRouteName="Home"/>}>
            <Tab.Screen name="Home" component={Home} 
        initialParams={{ icon: 'home' }}/>
            <Tab.Screen name="Second" component={Second} 
        initialParams={{ icon: 'search1' }}/>
          <Tab.Screen name="Third" component={Third} 
        initialParams={{ icon: 'profile' }}/>
        </Tab.Navigator>
    );
}