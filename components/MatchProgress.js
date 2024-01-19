import { View, Text } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

export default function MatchProgress({ title, progress }) {
  return (
    <View>
      <View className="flex flex-row justify-around mb-1">
        <Text className="text-black font-bold text-start">`${progress}%`</Text>
        <Text className="text-gray-500 font-bold text-center ">{title} </Text>
        <Text className="text-black font-bold text-end">
          {`${100 - progress}%`}
        </Text>
      </View>
      <View className="flex flex-col self-center">
        <Progress.Bar
          progress={progress / 100}
          width={350}
          height={20}
          color="#31DA60"
        />
      </View>
    </View>
  );
}
