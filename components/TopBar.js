import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TopBar() {
  return (
    <View className="flex-row justify-between  top-9">
      <View className="self-start mx-4">
        <Ionicons name="ios-menu-outline" size={37} color="grey" />
      </View>
      <Image
        style={{ width: 180, height: 50 }}
        source={require("../assets/40lovelogo.png")}
      />
      <Image
        style={{ width: 50, height: 50 }}
        className="rounded-full self-end mx-2"
        source={require("../assets/Maida.jpg")}
      />
    </View>
  );
}
