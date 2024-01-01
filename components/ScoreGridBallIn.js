import { View, Text } from "react-native";
import React from "react";

export default function ScoreGridBallIn() {
  return (
    <View className="relative flex-1 flex-col top-7 align-middle self-center items-stretch">
      <View className="flex-row bg-[#31DA60] ">
        <View className="w-44 border-b-2 border-b-gray-300">
          <Text>Maidah Highflyer</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
      </View>
      <View className="flex-row bg-[#CCCCCC] ">
        <View className="w-44 ">
          <Text>Maidah Highflyer</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
        <View
          style={{ width: 30, height: 30 }}
          className="border-2 border-gray-300"
        >
          <Text> 12</Text>
        </View>
      </View>

      <View>
        <Text className="text-base font-semibold text-center top-2">
          {" "}
          Match Time: 3:00 1:25 0:46 0:56
        </Text>
      </View>
      <View className="flex-row justify-between border-t-2 border-blue-200 top-3">
        <Text> Maidah Highflyer</Text>
        <Text className="text-base text-blue-500 font-bold text-center">
          Ball In Play
        </Text>
        <Text> John</Text>
      </View>
      <View></View>
    </View>
  );
}
