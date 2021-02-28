
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TabBar} from '../components';
import {Login} from '../screens';
import {Signup} from '../screens';

const Tab = createBottomTabNavigator();

export default function AuthTab() {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props}  initialRouteName="Login"/>}>
            <Tab.Screen name="Login" component={Login} 
        initialParams={{ icon: 'home' }}/>
            <Tab.Screen name="Signup" component={Signup} 
        initialParams={{ icon: 'search1' }}/>
        </Tab.Navigator>
    );
}