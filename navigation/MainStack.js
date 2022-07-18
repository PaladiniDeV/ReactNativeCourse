import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Login from '../screens/Login'
import Products from '../screens/Products'
import Prueba from '../screens/Prueba'

 
const Stack = createNativeStackNavigator()
 
const MainStack = () => {
 
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{
                    headerShown: false,
                }}
            >

                <Stack.Screen
                    name = 'Login'
                    component = { Login }
                    screenOptions = {{
                        headerShown: false,
                    }}
                />
                
                <Stack.Screen
                    name = 'Home'
                    component = { Home }
                />
    
                <Stack.Screen
                    name = 'Profile'
                    component = { Profile }
                />

                <Stack.Screen
                    name = 'Products'
                    component = { Products }
                />

                <Stack.Screen
                    name = 'Prueba'
                    component = { Prueba }
                />
    
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;