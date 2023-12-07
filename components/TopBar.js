import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TopBar() {
  return (
    <View className="flex-row justify-between align-middle top-9">
      <Ionicons name="ios-menu-outline" size={24} color="grey" />
      <Image
        style={{ width: 157, height: 38 }}
        source={require("../assets/40lovelogo.png")}
      />
      <Image
        style={{ width: 42, height: 42 }}
        source={require("../assets/user.png")}
      />
    </View>
  );
}
