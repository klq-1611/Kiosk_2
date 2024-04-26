import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { emptyCart } from '../slices/cartSlice'
import { useDispatch } from 'react-redux'

export default function Pay_CashScreen() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const finishOrder = () => {
        navigation.navigate('Welcome')
        dispatch(emptyCart());
    }

    return (

        <SafeAreaView>
            <View>
                <View className="  shadow-sm h-screen">
                    <TouchableOpacity
                        onPress={finishOrder}
                        style={{ backgroundColor: "red" }}
                        className="absolute left-1/2 -translate-x-12 -translate-y-20 bottom-20 z-20 rounded-full p-8 shadow "
                    >
                        <Icon.ArrowRight strokeWidth={3} stroke="white" viewBox="5 3 17 18" />
                    </TouchableOpacity>
                    <View className={"mt-20"}>
                        <Text className="text-center font-bold text-xl text-gray-400">WE MUST SAY,</Text>
                        <Text className="text-center font-bold text-3xl text-gray-400">YOU'VE GREAT</Text>
                        <Text className="text-center font-bold text-3xl text-gray-400">CHOICE OF TASTE</Text>
                        <View className='flex w-full items-center mt-2 mb-2'>

                            <Image className="" source={require('../../assets/images/Cooking_image.png')} style={{ width: 200, height: 200 }}></Image>
                        </View>
                        <Text className="text-center font-bold text-3xl text-gray-400">YOUR ORDER NUMBER IS</Text>
                        <Text className="text-center font-bold text-3xl text-gray-400">23</Text>
                        <Text className="text-center font-bold text-3xl text-gray-400">PAY AT COUNTER WHEN</Text>
                        <Text className="text-center font-bold text-3xl text-gray-400">YOUR ORDER WILL BE READY</Text>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}