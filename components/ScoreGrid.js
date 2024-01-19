import { View, Text } from "react-native";
import React from "react";

const playerNames = ["Maidah Highflyer", "John"];
const scores = [
  [12, 11, 13, 12, 3, 3, 12], // Scores for the first player
  [6, 12, 10, 13, 12, 6, 12], // Scores for the second player
];
const matches = ["3:00", "1:25", "0:46", "0:56"]; // Match times

export default function ScoreGrid({ serviceSelection }) {
  return (
    <View className="flex align-middle">
      {playerNames.map((player, playerIndex) => (
        <View className="flex-row self-center justify-between bg-green-200">
          <View className="w-44 border-2 border-gray-300 rounded-md pt-2 pb-2">
            <Text className=" font-semibold text-center">{player}</Text>
          </View>
          {scores[playerIndex].map((score, scoreIndex) => (
            <View
              key={scoreIndex}
              className="border-2 border-gray-300 rounded-md pt-2 pb-2 pr-2 pl-2"
            >
              <Text>{score}</Text>
            </View>
          ))}
        </View>
      ))}

      <View>
        <Text className="text-base font-bold text-center ">
          Match Time: {matches.join("  ")}
        </Text>
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
