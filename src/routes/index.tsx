import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackRoutes } from './navigation-types';


import Home from '../pages/Home';
import AboutMovie from '../pages/AboutMovie';
import Profile from '../pages/Profile';


const Stack = createNativeStackNavigator<RootStackRoutes>();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AboutMovie" component={AboutMovie} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;