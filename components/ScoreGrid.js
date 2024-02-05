import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const playerNames = ["Maidah Highflyer", "John"];
const gameScores = { player1: 0, player2: 0 };
const setScores = { player1: 0, player2: 0 };
const matchScores = { player1: 0, player2: 0 };
const totalScores = { player1: 0, player2: 0 };
const service = ["1st Service", "2nd Service"];

const matches = ["3:00", "1:25", "0:46", "0:56"]; // Match times

export default function ScoreGrid({ serviceSelection }) {
  return (
    <View>
      <View className="flex flex-row align-middle">
        <View className="flex-col self-center justify-between bg-gray-700 w-1/2 ">
          <View className="border-2 rounded-md pt-2 pb-2 flex-row justify-around ">
            <Text className=" font-bold text-center text-white text-lg ml-2">
              {playerNames[0]}
            </Text>
            {service === "1st Service" ? (
              <>
                <Ionicons name="tennisball" size={20} color="yellow" />
                <Ionicons name="tennisball" size={20} color="yellow" />
              </>
            ) : (
              <Ionicons name="tennisball" size={20} color="yellow" />
            )}
          </View>

          <View className="border-2  rounded-md pt-2 pb-2 flex-row w-full">
            <Text className=" font-bold text-center text-white text-lg ml-2">
              {playerNames[1]}
            </Text>
          </View>
        </View>
        <View className="flex-row  bg-gray-700 w-1/2">
          {[gameScores, setScores, matchScores, totalScores].map(
            (scoreType, index) => (
              <View
                key={index}
                className="flex-col self-center justify-evenly w-1/4 h-24 align-middle"
              >
                <Text className="text-white font-bold text-xl text-center justify-center  pt-2  rounded-md h-1/2 border-2 border-black">
                  {scoreType.player1}
                </Text>
                <Text className="text-white font-bold text-xl text-center justify-center  pt-2  rounded-md h-1/2 border-2 border-black">
                  {scoreType.player2}
                </Text>
              </View>
            )
          )}
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
