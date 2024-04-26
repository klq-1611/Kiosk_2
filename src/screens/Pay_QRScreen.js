import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Pay_QRScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <View>
                <View className="relative pt-7 shadow-sm ">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ backgroundColor: "red" }}
                        className="absolute z-10 rounded-full p-1 shadow top-3 left-4"
                    >
                        <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                    </TouchableOpacity>
                    <View className={"mt-20"}>
                        <Text className="text-center font-bold text-3xl">Payment QR Code</Text>
                        <View className="flex w-full items-center mt-3 mb-3">

                            <Image source={require('../../assets/images/Cash_image.png')} style={{ width: 200, height: 200 }} />
                        </View>
                        <Text className="text-center font-bold text-color text-gray-400 text-lg">Waiting to be scanned for payment with ZaloPay</Text>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}