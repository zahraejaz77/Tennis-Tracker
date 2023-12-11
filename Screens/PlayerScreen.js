import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import HorizontalScroll from "../components/HorizontalScroll";
import VerticalScroll from "../components/VerticalScroll";

export default function PlayerScreen() {
  return (
    <View
      style={{ height: "100%" }}
      className="relative flex-1 justify-between mx-4 "
    >
      <View className=" flex-row  justify-between align-middle top-7">
        <Ionicons name="arrow-back" size={24} color="black" />
        <View
          style={{ width: 40, height: 40, backgroundColor: "#31da60" }}
          className=" rounded-full "
        >
          <Ionicons name="tv-outline" size={24} color="white" />
        </View>
      </View>
      <View className="flex-col self-center justify-around top-9 space-y-2">
        <Image
          className=" rounded-full self-center"
          style={{ width: 100, height: 100 }}
          source={require("../assets/Maida2.jpg")}
        />
        <Text className="text-lg self-center">Maida</Text>
        <TouchableOpacity>
          <View
            style={{ backgroundColor: "#31da60", width: 164, height: 52 }}
            className="flex-row rounded-full self-center justify-center space-x-2"
          >
            <View className="top-3">
              <SimpleLineIcons name="user-following" size={25} color="white" />
            </View>
            <Text className="text-white text-lg font-bold top-2"> Follow</Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{ width: 232 }}
          className="text-center justify-center text-sm font-semibold"
        >
          I am a passionate tennis player, positive and I love food.
        </Text>
      </View>
      <View></View>
      <HorizontalScroll></HorizontalScroll>
      <VerticalScroll></VerticalScroll>
    </View>
  );
}
