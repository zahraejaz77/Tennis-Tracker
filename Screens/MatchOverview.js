import { Image, Text, View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
export default function MatchOverview() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const PlayerNames = ["Maidah Highflyer", "Bella Youh"];
  const MatchProgress = [
    "1st Service",
    "Win %",
    "Win 1st Serve",
    "Win %",
    "Win 2nd Serve",
  ];
  const MatchProgressPercent = [46, 53, 46, 53, 46];
  const Scores = [
    { Player1: 2, Player2: 0 },
    { Player1: 5, Player2: 1 },
    { Player1: 3, Player2: 3 },
  ];
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
      }}
      classsName=" bg-[#D9D9D9] relative flex flex-col "
    >
      <Text className="text-black  mt-2 self-center text-base font-semibold">
        Match Overview
      </Text>
      <View
        style={{ width: 370, height: 156 }}
        className="bg-white flex-row justify-around self-center rounded-lg mx-3 mt-2 "
      >
        <View className=" flex-col justify-around">
          <Image
            className=" rounded-full "
            style={{ width: 100, height: 100 }}
            source={require("../assets/Maida.jpg")}
          />
          <Text className="text-black font-bold text-end">
            {PlayerNames[0]}
          </Text>
        </View>
        <View className="flex-col justify-center">
          {Scores.map((score, index) => (
            <View key={index} className="flex-row">
              <Text className="text-green-800 font-bold text-lg">
                {score.Player1}
              </Text>
              <Text className="text-black font-bold text-lg">-</Text>
              <Text className="text-black font-bold text-lg">
                {score.Player2}
              </Text>
            </View>
          ))}
        </View>
        <View className=" flex-col justify-around">
          <Image
            className=" rounded-full"
            style={{ width: 100, height: 100 }}
            source={require("../assets/Bella.jpg")}
          />
          <Text className="text-black font-sm font-bold text-center">
            {PlayerNames[1]}
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-around mb-1">
        <Text className="text-black font-bold text-start">46% </Text>
        <Text className="text-gray-500 font-bold text-center ">
          1st Service{" "}
        </Text>
        <Text className="text-black font-bold text-end">53% </Text>
      </View>
      <View className="flex flex-col self-center">
        <Progress.Bar progress={0.3} width={350} height={20} color="#31DA60" />
      </View>
      <View className="flex flex-row justify-around mb-1">
        <Text className="text-black font-bold text-start">46% </Text>
        <Text className="text-gray-500 font-bold text-center ">Win % </Text>
        <Text className="text-black font-bold text-end">53% </Text>
      </View>
      <View className="flex flex-col self-center">
        <Progress.Bar progress={0.3} width={350} height={20} color="#31DA60" />
      </View>
      <View className="flex flex-row justify-around mb-1">
        <Text className="text-black font-bold text-start">46% </Text>
        <Text className="text-gray-500 font-bold text-center ">
          Win 1st Serve{" "}
        </Text>
        <Text className="text-black font-bold text-end">53% </Text>
      </View>
      <View className="flex flex-col self-center">
        <Progress.Bar progress={0.3} width={350} height={20} color="#31DA60" />
      </View>
      <View className="flex flex-row justify-around mb-1">
        <Text className="text-black font-bold text-start">46% </Text>
        <Text className="text-gray-500 font-bold text-center ">Win % </Text>
        <Text className="text-black font-bold text-end">53% </Text>
      </View>
      <View className="flex flex-col self-center">
        <Progress.Bar progress={0.3} width={350} height={20} color="#31DA60" />
      </View>
      <View className="flex flex-row justify-around mb-1">
        <Text className="text-black font-bold text-start">46% </Text>
        <Text className="text-gray-500 font-bold text-center ">
          Win 2nd Serve{" "}
        </Text>
        <Text className="text-black font-bold text-end">53% </Text>
      </View>
      <View className="flex flex-col self-center">
        <Progress.Bar progress={0.3} width={350} height={20} color="#31DA60" />
      </View>
      <MatchProgress title="Winners" progress={50} />
      <View className="flex flex-row self-center">
        <Text className="pr-4 font-bold ">Share Match</Text>
        <View className="rounded-full bg-[#C7D2CE] p-2">
          <AntDesign name="upload" size={24} color="black" />
        </View>
      </View>
      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center justify-center flex-row"
      >
        <>
          <TouchableOpacity>
            <Text className=" text-black text-center self-center font-semibold ">
              More Details
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </View>
  );
}
