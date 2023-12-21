import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function MatchComplete({ navigation }) {
  return (
    <View className="relative flex-1 flex-col top-7 align-middle self-center items-stretch">
      <View className="flex-row">
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
      <View className="flex-row">
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

        <Text> John</Text>
      </View>
      <View className="top-16 space-y-3">
        <View
          style={{ width: 160, height: 24 }}
          className=" rounded-sm self-center align-middle flex-row justify-center border-blue-500 "
        >
          <TouchableOpacity>
            <Text className="text-cyan-600 text-sm text-center font-semibold top-3 align-middle">
              Match Complete
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: 160, height: 53 }}
          className=" bg-[#E4E4E4] rounded-sm self-center align-middle flex-row justify-center"
        >
          <TouchableOpacity>
            <Text className=" text-base text-center font-semibold top-3 align-middle">
              Maida
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: 160, height: 53 }}
          className=" bg-[#E4E4E4] rounded-sm self-center align-middle flex-row justify-center"
        >
          <TouchableOpacity>
            <Text className="text-base text-center font-semibold top-3 align-middle">
              Is the Winner
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle top-80 flex-row justify-center"
      >
        <TouchableOpacity onPress={() => navigation.navigate("MatchOverview")}>
          <Text className=" text-white text-xl text-center font-semibold top-3 align-middle">
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
