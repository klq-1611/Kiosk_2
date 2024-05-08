import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Categories from '../components/categories.js'
import { dishRow } from '../constants/index.js'
import DishRow from '../components/DishRow2.js'
import CartIcon from '../components/cartIcon.js'
import { getApi, postApi } from './test2.js'
import { TouchableOpacity } from 'react-native-web'


export default function HomeScreen({ }) {

    const [listDishRow, setListDishRow] = useState(dishRow)
    const [activeCategory, setActiveCategory] = useState(null)

    useEffect(() => {
        if (activeCategory) {
            const _dishRow = [...dishRow].filter(item => item.categoryId == activeCategory)
            setListDishRow(_dishRow)
        } else {
            setListDishRow(dishRow)

        }
    }, [activeCategory])
    const testApi = async () => {
        try {
            const response = await getApi('/posts')
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        testApi()
    }, [])
    return (

        <SafeAreaView className="bg-white">
            {/* <TouchableOpacity onPress={() => testApi()}>
                <View><Text>test api</Text></View>
            </TouchableOpacity> */}
            <Text className="flex-row items-center space-x-30 pl-10 pb-1 text-red-800 text-3xl font-extrabold">Oishi Hut</Text>
            <StatusBar barStyle="dark-content" />


            {/* main */}


            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginBottom: 20, minHeight: '100%' }}

            >

                <Text className="px-4 py-4 pt-5 text-black text-2xl font-bold">Menu</Text>
                {/* categories */}
                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                {/* dishes */}
                <View className="pb-36 bg-white">
                    {
                        listDishRow.map((dish, index) => <DishRow key={index} dish={dish} />)
                    }


                </View>
            </ScrollView>
            <View>
                <CartIcon />
            </View>

        </SafeAreaView>

    )
}