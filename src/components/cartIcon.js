import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';

export default function CartIcon() {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    if (!cartItems.length) return;
    return (
        <View className="fixed bottom-40 py-7 w-full z-50">
            <TouchableOpacity className="flex-row items-center justify-between bg-red-800 p-4 py-3 shadow-lg rounded-full"
                onPress={() => navigation.navigate("Cart")}
            >

                <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                    <Text className="text-white font-bold text-lg">{cartItems.length}</Text>
                </View>
                <Text className="text-white font-extrabold text-center text-xl">View Cart</Text>

                <Text className="text-white font-bold text-xl">${cartTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}