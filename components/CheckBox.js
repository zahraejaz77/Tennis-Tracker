import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function CheckBox({ Option1, Option2 }) {
  const [selected, setSelected] = useState(true);
  return (
    <View className=" border-green-300 rounded-md border-2 flex-row space-x-4 self-center w-40 top-2">
      <TouchableOpacity
        onPress={() => {
          setSelected(!selected);
        }}
      >
        {selected ? (
          <View className="flex-row ">
            <Text className="text-white text-base font-semibold bg-green-300 rounded text-center w-1/2">
              {Option1}
            </Text>
            <Text className="text-gray-400 text-base font-semibold text-center w-1/2">
              {Option2}
            </Text>
          </View>
        ) : (
          <View className="flex-row w-40 ">
            <Text className="text-white text-base font-semibold text-center bg-green-300 rounded w-1/2">
              {Option2}
            </Text>
            <Text className="text-gray-400 text-center text-base font-semibold w-1/2">
              {Option1}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
