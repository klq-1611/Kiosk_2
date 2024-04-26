import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { dishRow } from '../constants/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectHome } from '../slices/homeSlice.js'
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice.js'

export default function CartScreen({ }) {
  const Prices = useSelector(selectHome);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({})
  const dispatch = useDispatch();
  const [TaxFee, setTaxFee] = useState(0);

  useEffect(() => {
    let tax = cartTotal * 0.1;
    setTaxFee(parseFloat(tax.toFixed(2)));
  }, [cartTotal]);

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {})
    setGroupedItems(items);
  }, [cartItems])

  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: "red" }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {
          Object.entries(groupedItems).map(([key, items]) => {
            let dish = items[0];
            return (
              <View key={key} className="flex-row space-x-3 items-center bg-white py-2 rounded-3xl mb-3 mx-2 px-4 shadow-md">
                <Text className="font-bold" style={{ color: "black" }}> {items.length} x</Text>
                <Image className="h-14 w-14 rounded-full" source={dish.image} />
                <Text className="font-bold flex-1" style={{ color: "black" }}>{dish.name}</Text>
                <Text className="font-semibold text-base" style={{ color: "black" }}>${dish.price}</Text>
                <TouchableOpacity
                  className="p-1 rounded-full"
                  style={{ backgroundColor: "white" }}
                  onPress={() => dispatch(removeFromCart({ id: dish.id }))}
                >
                  <Icon.MinusCircle stroke="red" width="23" height="23" strokeWidth={2} />
                </TouchableOpacity>
              </View>
            )
          })

        }


      </ScrollView>
      {/* total */}
      <View style={{ backgroundColor: "#1d2939" }} className="p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="font-bold text-white">Sub Total</Text>
          <Text className="font-bold text-white">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-bold text-white">Tax Fee</Text>
          <Text className="font-bold text-white">${TaxFee}</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="font-extrabold text-xl text-white">Order Total</Text>

          <Text className="font-extrabold text-xl text-white">${(cartTotal + TaxFee).toFixed(2)}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PayMethods")}
            className="bg-red-800 py-3 rounded-full">
            <Text className="text-center text-white font-bold">Proceed with Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}