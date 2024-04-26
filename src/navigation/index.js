import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import PayMethodsScreen from '../screens/PayMethodsScreen';
import Pay_QRScreen from '../screens/Pay_QRScreen';
import Pay_CashScreen from '../screens/Pay_CashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                { headerShown: false }

            }>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Cart" options={{ presentation: "modal" }} component={CartScreen} />
                <Stack.Screen name="PayMethods" options={{ presentation: 'fullScreenModal' }} component={PayMethodsScreen} />
                <Stack.Screen name="Pay_QR" options={{ presentation: 'fullScreenModal' }} component={Pay_QRScreen} />
                <Stack.Screen name="Pay_Cash" options={{ presentation: 'fullScreenModal' }} component={Pay_CashScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}