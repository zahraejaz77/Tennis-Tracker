import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";

export default function Slider2({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View className="absolute ">
      <ImageBackground
        source={require("../assets/Slider2.jpg")}
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
      ></ImageBackground>
      <View className="z-40 absolute self-center w-80 top-96 my-48">
        <Text className="text-white text-lg font-bold text-center ">
          Court Booking and Reservations
        </Text>
        <Text className="text-white text-center ">
          Include real-time availability, payment processing, and reminders for
          scheduled matches.
        </Text>
      </View>
      <View className="z-40 absolute self-center w-72 top-96 my-48">
        <TouchableOpacity onPress={() => navigation.navigate("Slider3")}>
          <Text className="text-white text-xl font-bold text-right top-32">
            SKIP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
