import { View, Text } from "react-native";
import React from "react";

export default function MatchTrack() {
  return (
    <View className="flex-col absolute top-20">
      <View className="flex-row">
        <View className="border-4 border-green-500 px-16 py-16">
          <Text>Ball in</Text>
        </View>
        <View className="border-4 border-green-500 px-16 py-16">
          <Text>Runner</Text>
        </View>
      </View>
      <View className="flex-row ">
        <View className="flex-col">
          <View className="border-4 border-green-500 px-16 py-16">
            <Text>Fault</Text>
          </View>
          <View className="border-4 border-green-500 px-16 py-16">
            <Text>Ace</Text>
          </View>
        </View>
        <View className="border-4 border-green-500 px-16 py-32">
          <Text>Return Error</Text>
        </View>
      </View>
    </View>
  );
}
