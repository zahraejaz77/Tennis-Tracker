import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import VerticalScroll from "../components/VerticalScroll";
import HorizontalScroll from "../components/HorizontalScroll";
import { AntDesign } from "@expo/vector-icons";

export default function MatchOverview() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
      }}
      classsName=" bg-[#D9D9D9] relative flex flex-col "
    >
      <Text className="text-black top-4 self-center text-base font-semibold">
        Match Overview
      </Text>
      <View
        style={{ width: 370, height: 156 }}
        className="bg-white flex-row justify-evenly self-center rounded-lg mx-3 top-6"
      >
        <View className=" flex-col items-center top-4">
          <Image
            className="absolute rounded-full "
            style={{ width: 100, height: 100 }}
            source={require("../assets/Maida.jpg")}
          />
          <Text className="text-black font-sm font-bold top-28 text-center">
            Maidah Highflyer
          </Text>
        </View>
        <View className="flex-col  top-3">
          <View className="flex-row">
            <Text className="text-green-800 font-bold text-lg">2</Text>
            <Text className="text-black font-bold text-lg">-</Text>
            <Text className="text-black font-bold text-lg">0</Text>
          </View>
          <View className="flex-row">
            <Text className="text-green-800 font-bold text-lg">5</Text>
            <Text className="text-black font-bold text-lg">-</Text>
            <Text className="text-black font-bold text-lg">1</Text>
          </View>
          <View className="flex-row">
            <Text className="text-green-800 font-bold text-lg">3</Text>
            <Text className="text-black font-bold text-lg">-</Text>
            <Text className="text-black font-bold text-lg">3</Text>
          </View>
        </View>
        <View className=" flex-col items-center top-4">
          <Image
            className="absolute rounded-full"
            style={{ width: 100, height: 100 }}
            source={require("../assets/Bella.jpg")}
          />
          <Text className="text-black font-sm font-bold top-28 text-center">
            Bella Youh
          </Text>
        </View>
      </View>
      <View className="bg-white top-10 self-center rounded-3xl flex flex-col w-11/12">
        <View className="flex-row justify-around mx-4">
          <Text className=" text-base font-semibold">57%</Text>
          <Text className="text-gray-500 text-base font-semibold">
            {" "}
            1ST SERVICE
          </Text>
          <Text className=" text-base font-semibold"> 46%</Text>
        </View>
        <View className="flex ">
          <View className="w-11/12 self-center  bg-[#D5DEDB] rounded-full h-8"></View>
          <View className="w-6/12 self-center bottom-8 bg-[#3E7D68] left-10 rounded-br-full rounded-tr-full h-8"></View>
          <View className="w-6/12 self-center bottom-16 bg-[#31DA60] right-10 rounded-bl-full rounded-tl-full h-8"></View>
        </View>
        <View className="flex-row justify-around mx-4">
          <Text className=" text-base font-semibold">57%</Text>
          <Text className="text-gray-500 text-base font-semibold"> WIN %</Text>
          <Text className=" text-base font-semibold"> 46%</Text>
        </View>
        <View className="w-11/12 self-center  bg-[#D5DEDB] rounded-full h-8"></View>
        <View className="w-6/12 self-center bottom-8 bg-[#3E7D68] left-10 rounded-br-full rounded-tr-full h-8"></View>
        <View className="w-6/12 self-center bottom-16 bg-[#31DA60] right-10 rounded-bl-full rounded-tl-full h-8"></View>
        <View className="flex-row justify-around mx-4">
          <Text className=" text-base font-semibold">57%</Text>
          <Text className="text-gray-500 text-base font-semibold">
            {" "}
            WIN 1ST SERVE
          </Text>
          <Text className=" text-base font-semibold"> 46%</Text>
        </View>
        <View className="flex ">
          <View className="w-11/12 self-center  bg-[#D5DEDB] rounded-full h-8"></View>
          <View className="w-6/12 self-center bottom-8 bg-[#3E7D68] left-10 rounded-br-full rounded-tr-full h-8"></View>
          <View className="w-6/12 self-center bottom-16 bg-[#31DA60] right-10 rounded-bl-full rounded-tl-full h-8"></View>
        </View>
      </View>
      <View className="flex flex-row self-center">
        <Text className="pr-4 font-bold top-2 ">Share Match</Text>
        <View className="rounded-full bg-[#C7D2CE] p-2">
          <AntDesign name="upload" size={24} color="black" />
        </View>
      </View>
      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle top-20 flex-row justify-center z-20"
      >
        <>
          <TouchableOpacity>
            <Text className=" text-white text-med text-center font-semibold top-3 align-middle">
              More Details
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </View>
  );
}
