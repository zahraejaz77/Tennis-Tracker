import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TopMatchBar() {
  return (
    <View className="flex-row justify-around absolute">
      <Text className="text-black font-semibold text-base">
        Track Live Match {"              "}
      </Text>

      <Ionicons name="reload" size={24} color="grey" className="ml-11" />
    </View>
  );
}
