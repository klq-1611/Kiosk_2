import { View, Text, TouchableOpacity, Image } from 'react-native'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react';
import { Payment_Methods } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function PayMethods() {
  const navigation = useNavigation();
  const [activePayment_Methods, setActivePayment_Methods] = useState(null);


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
            <Text className="text-center font-bold text-3xl">Payment Methods</Text>
          </View>
        </View>

        <View className={"flex-row flex-wrap items-center left-5  mt-10 "} >
          {
            Payment_Methods.map((Payment_Methods, index) => {
              let isActive = Payment_Methods.id == activePayment_Methods;
              let btnClass = isActive ? 'bg-red-800' : 'bg-red-100';
              let textClass = isActive ? 'font-extrabold text-red-800' : 'text-red-400';
              return (
                <View key={index} className=" p-5 justify-center  items-center mr-8 mt-2 rounded-3xl" style={{ backgroundColor: "#1d2939" }}>
                  <TouchableOpacity

                    onPress={() => navigation.navigate(Payment_Methods.navigate)}

                    className={`rounded-3xl shadow m-3 items-center p-5 ${btnClass}`}
                    style={{ backgroundColor: "#991b1c" }}
                  >
                    <Image source={Payment_Methods.image} style={{ width: 70, height: 100 }} />
                  </TouchableOpacity>
                  <Text className={` font-bold text-2xl mt-2 ${textClass}`}>{Payment_Methods.name}</Text>

                </View>
              )
            })
          }
        </View>
      </View>
    </SafeAreaView >
  )
}