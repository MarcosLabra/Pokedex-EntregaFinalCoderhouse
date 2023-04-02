import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RegisterScreen from '../screens/RegisterScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Auth' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator

