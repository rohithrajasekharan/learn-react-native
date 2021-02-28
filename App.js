import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthTab,HomeTab} from './navigations'

const Stack = createStackNavigator();
export default function App() {
    return (
            <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Auth" component={AuthTab} />
                    <Stack.Screen name="Home" component={HomeTab} />
                </Stack.Navigator>
            </NavigationContainer>
    );
}

