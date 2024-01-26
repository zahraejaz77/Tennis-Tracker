import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";

export default function Slider1({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      className="flex-1 relative"
      style={{
        width: windowWidth,
        height: windowHeight,
      }}
    >
      <StatusBar style="auto" />

      <View className=" relative z-40 justify-between h-auto">
        <View className="absolute ">
          <ImageBackground
            source={require("../assets/Slider1.jpg")}
            style={{
              width: windowWidth,
              height: windowHeight,
            }}
          ></ImageBackground>
          <View className="z-40 absolute self-center w-72 top-96 my-48">
            <Text className="text-white text-lg font-bold text-center ">
              Improve Player Skills
            </Text>
            <Text className="text-white text-center ">
              Fortylove can track a player's progress and offer tips to refine
              your technique.
            </Text>
          </View>
          <View className="z-40 absolute self-center w-72 top-96 my-48">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text className="text-white text-xl font-bold text-right top-32">
                SKIP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
