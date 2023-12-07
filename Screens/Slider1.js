import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Slider1() {
  return (
    <View className="absolute ">
      <ImageBackground
        source={require("../assets/Slider1.jpg")}
        style={{ width: 400, height: 800 }}
      ></ImageBackground>
      <View className="z-40 absolute self-center w-72 top-96 my-48">
        <Text className="text-white text-lg font-bold text-center ">
          Improve Player Skills
        </Text>
        <Text className="text-white text-center ">
          Fortylove can track a player's progress and offer tips to refine your
          technique.
        </Text>
      </View>
      <View className="z-40 absolute self-center w-72 top-96 my-48">
        <TouchableOpacity>
          <Text className="text-white text-xl font-bold text-right top-32">
            SKIP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
