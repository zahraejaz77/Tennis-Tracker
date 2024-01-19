import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ScoreGrid from "../components/ScoreGrid";

export default function MatchComplete({ navigation, WinnerName }) {
  return (
    <View className="relative flex-1 flex-col align-middle self-center items-stretch">
      <ScoreGrid serviceSelection={"Match Complete"} />

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
              {(WinnerName = "Maida")}
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
          <Text className=" text-black text-xl text-center font-bold top-3 align-middle">
            Match Complete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
