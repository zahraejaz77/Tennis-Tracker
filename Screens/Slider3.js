import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Slider3() {
  return (
    <View className="absolute ">
      <ImageBackground
        source={require("../assets/Slider3.jpg")}
        style={{ width: 400, height: 800 }}
      ></ImageBackground>
      <View className="z-40 absolute self-center w-80 top-96 my-52">
        <Text className="text-black text-lg font-bold text-center ">
          Matchmaking and Networking
        </Text>
        <Text className="text-black text-center ">
          Facilitate matchmaking between tennis players of similar skill levels,
          allowing them to find opponents for friendly matches
        </Text>
      </View>
      <View className="z-40 absolute self-center w-72 top-96 my-48">
        <TouchableOpacity>
          <Text className="text-black text-xl font-bold text-right top-32">
            SKIP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
