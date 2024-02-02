import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const playerNames = ["Maidah Highflyer", "John"];
const scores = [
  (gameScores = { player1: 15, player2: 30 }),
  (setScores = { player1: 1, player2: 0 }),
  (matchScores = { player1: 0, player2: 0 }),
  (totalScores = { player1: 0, player2: 0 }),
];

const matches = ["3:00", "1:25", "0:46", "0:56"]; // Match times

export default function ScoreGrid({ serviceSelection }) {
  return (
    <View>
      <View className="flex bg-purple-500 flex-row align-middle">
        <View className="flex-col self-center justify-between bg-gray-600 w-1/2 ">
          <View className="border-2 rounded-md pt-2 pb-2 flex-row justify-around ">
            <Text className=" font-bold text-center text-white text-lg ml-2">
              {playerNames[0]}
            </Text>
            <Ionicons name="tennisball" size={20} color="yellow" />
            <Ionicons name="tennisball" size={20} color="yellow" />
          </View>

          <View className="border-2  rounded-md pt-2 pb-2 flex-row w-full">
            <Text className=" font-bold text-center text-white text-lg ml-2">
              {playerNames[1]}
            </Text>
          </View>
        </View>
        <View className="flex-row  bg-gray-600 w-1/2">
          <View className="flex-col rounded-md self-center justify-around w-1/4 h-24 border-2 border-black ">
            <Text className="text-white font-bold text-xl text-center justify-center ">
              {gameScores.player1}
            </Text>
            <Text className="text-white font-bold text-xl text-center justify-center">
              {gameScores.player2}
            </Text>
          </View>
          <View className="flex-col rounded-md self-center justify-around w-1/4 h-24 border-2 border-black">
            <Text className="text-white font-bold text-xl text-center justify-center ">
              {setScores.player1}
            </Text>
            <Text className="text-white font-bold text-xl text-center justify-center ">
              {setScores.player2}
            </Text>
          </View>
          <View className="flex-col rounded-md self-center justify-around w-1/4 h-24 border-2 border-black">
            <Text className="text-white font-bold text-xl text-center justify-center ">
              {matchScores.player1}
            </Text>
            <Text className="text-white font-bold text-xl text-center justify-center ">
              {matchScores.player2}
            </Text>
          </View>
          <View className="flex-col rounded-md self-center justify-around w-1/4 h-24 border-2 border-black">
            <Text className="text-white font-bold text-xl text-center justify-center ">
              {totalScores.player1}
            </Text>
            <Text className="text-white font-bold text-xl text-center justify-center ">
              {totalScores.player2}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row justify-between border-t-2 border-blue-200 ">
        <Text>{playerNames[0]}</Text>
        <Text className="text-base text-gray-600 font-bold text-center">
          {serviceSelection}
        </Text>
        <Text>{playerNames[1]}</Text>
      </View>
    </View>
  );
}
