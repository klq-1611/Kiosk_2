import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import PayMethodsScreen from '../screens/PayMethodsScreen';
import PayQRScreen from '../screens/PayQRScreen';
import PayCashScreen from '../screens/PayCashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DiningMethodsScreen from '../screens/DiningMethodsScreen';
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                { headerShown: false }

            }>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="DinMethods" component={DiningMethodsScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Cart" options={{ presentation: "modal" }} component={CartScreen} />
                <Stack.Screen name="PayMethods" options={{ presentation: 'fullScreenModal' }} component={PayMethodsScreen} />
                <Stack.Screen name="Pay_QR" options={{ presentation: 'fullScreenModal' }} component={PayQRScreen} />
                <Stack.Screen name="Pay_Cash" options={{ presentation: 'fullScreenModal' }} component={PayCashScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}