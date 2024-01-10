import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";

export default function MatchCard({ data }) {
  return (
    <View className="flex bg-white justify-center items-center rounded-3xl h-52 mx-2 ">
      <TouchableHighlight
        style={{ borderRadius: 20 }}
        underlayColor="#2ABE5C"
        onPress={() => {}}
      >
        <View className="flex justify-center items-center rounded-3xl py-3 space-y-1 px-4">
          <Image
            source={require("../assets/two_players.jpg")}
            className=" rounded-lg"
            style={{ width: 142, height: 100 }}
          />
          <Text className="text-black text-base font-semibold">
            {data.player1} & {data.player2}
          </Text>
          <Text className="text-gray-600 text-sm "> {data.date}</Text>
          <Text className="text-black font-semibold">More Info</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
