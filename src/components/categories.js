import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { categories } from '../constants'
import { useState } from 'react'

export default function Categories({ activeCategory, setActiveCategory }) {

    return (
        <View style={{ marginTop: 10 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    categories.map((category, index) => {
                        let isActive = category.id == activeCategory;
                        let btnClass = isActive ? 'bg-red-800' : 'bg-red-100';
                        let textClass = isActive ? 'font-extrabold text-red-800' : 'text-red-400';
                        return (
                            <View key={index} className="flex justify-center items-center mr-8 mt-2">
                                <TouchableOpacity
                                    onPress={() => {
                                        if (activeCategory) {
                                            setActiveCategory(null)

                                        } else {

                                            setActiveCategory(category.id)
                                        }
                                    }}
                                    className={` rounded-full shadow bg-gray-200 items-center p-5 ${btnClass}`}
                                >
                                    <Image source={category.image} style={{ width: 45, height: 45 }} />
                                </TouchableOpacity>
                                <Text className={`font-bold mt-2 ${textClass}`}>{category.name}</Text>

                            </View>
                        )
                    })
                }
            </ScrollView >
        </View >
    )
}