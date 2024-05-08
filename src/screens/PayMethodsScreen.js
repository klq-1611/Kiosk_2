import { View, Text, TouchableOpacity, Image } from 'react-native'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react';
import { PaymentMethods } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function PayMethods() {
  const navigation = useNavigation();
  const [activePaymentMethods, setActivePaymentMethods] = useState(null);


  return (
    <SafeAreaView>
      <View className="relative py-4 shadow-sm">
        <View className="relative pt-7 shadow-sm ">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: "red" }}
            className="absolute z-10 rounded-full p-1 shadow left-4"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
          </TouchableOpacity>
          <View className={"mt-20"}>
            <Text className="text-center font-bold text-3xl text-red-800">Payment Methods</Text>
          </View>
        </View>

        <View className={"flex-row flex-wrap items-center left-5  mt-10 "} >
          {
            PaymentMethods.map((PaymentMethods, index) => {
              let isActive = PaymentMethods.id == activePaymentMethods;
              let btnClass = isActive ? 'bg-red-800' : 'bg-red-100';
              let textClass = isActive ? 'font-extrabold text-red-800' : 'text-red-400';
              return (
                <View key={index} className=" p-3 justify-center  items-center mr-7 mt-2 rounded-3xl" style={{ backgroundColor: "#1d2939" }}>
                  <TouchableOpacity

                    onPress={() => {
                      navigation.navigate(PaymentMethods.navigate)

                    }}

                    className={`rounded-3xl shadow m-3 items-center p-4  ${btnClass}`}
                    style={{ backgroundColor: "#991b1c" }}
                  >
                    <Image source={PaymentMethods.image} style={{ width: 100, height: 100 }} />
                  </TouchableOpacity>
                  <Text className={` font-bold text-2xl mt-2 ${textClass}`}>{PaymentMethods.name}</Text>

                </View>
              )
            })
          }
        </View>
      </View>
    </SafeAreaView >
  )
}