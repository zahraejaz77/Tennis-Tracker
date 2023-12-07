import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function Slider1({ navigation }) {
  return (
    <View className="flex-1 relative">
      <StatusBar style="auto" />

      <View className="relative z-40 justify-between h-auto">
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
              Fortylove can track a player's progress and offer tips to refine
              your technique.
            </Text>
          </View>
          <View className="z-40 absolute self-center w-72 top-96 my-48">
            <TouchableOpacity onPress={() => navigation.navigate("Slider2")}>
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
