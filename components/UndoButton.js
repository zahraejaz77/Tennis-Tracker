import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function UndoButton() {
  return (
    <View className=" flex items-center justify-items-center absolute top-96 my-60">
      <TouchableOpacity>
        <Text className="bg-green-500 text-white text-3xl rounded-full ">
          {"      "}Undo{"       "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
