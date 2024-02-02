import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ScoreGrid from "../components/ScoreGrid";
const playerNames = { player1: "Maida", player2: "John" };
export default function SelectService({ navigation }) {
  return (
    <View className="flex relative">
      <ScoreGrid serviceSelection={"1st Service"} />
      <Text className="text-center font-semibold text-2xl text-teal-900">
        Who is serving first?
      </Text>
      <View className="flex-row justify-between h-4/5 ">
        <View className=" border-black border-2 w-1/2 flex-col justify-center rounded-md mt-4">
          <TouchableOpacity onPress={() => navigation.navigate("TrackMatch")}>
            <Text className="self-center text-center  text-3xl">
              {playerNames.player1}
            </Text>
          </TouchableOpacity>
        </View>
        <View className=" border-black border-2 w-1/2 flex-col justify-center rounded-md mt-4">
          <TouchableOpacity onPress={() => navigation.navigate("TrackMatch")}>
            <Text className="self-center text-center  text-3xl">
              {playerNames.player2}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
