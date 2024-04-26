import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';


export default function WelcomeScreen() {
  const animation = useRef(null);
  const navigation = useNavigation();

  return (
    <View className="bg-[#e3bbbc] flex-1 justify-center items-center space-y-10 relative">
      <Image
        source={require("../../assets/images/background.png")}
        style={{
          position: "absolute",
          width: wp(100),
          height: hp(100),
          resizeMode: "cover",
        }}
      />

      <StatusBar style="light" />

      {/* Lottie Logo */}
      <View>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: wp(80),
            height: hp(50),
          }}
          source={require("../../assets/lottie/fastfood-logo.json")}
        />
      </View>

      {/* Title and Subtitle */}
      <View className="flex items-center space-y-2">
        <Text
          className="text-red-800 font-extrabold tracking-widest"
          style={{
            fontSize: hp(5),
          }}
        >
          Oishi Hut
        </Text>

        <Text
          className="text-red-800 tracking-widest font-medium"
          style={{
            fontSize: hp(2.5),
          }}
        >
          Explore some delicious Food
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingVertical: hp(1.5),
            paddingHorizontal: hp(5),
            borderRadius: hp(1.5),
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-red-800 font-bold"
            style={{ fontSize: hp(2.5), }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}