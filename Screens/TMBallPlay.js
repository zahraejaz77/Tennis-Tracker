import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ScoreGrid from "../components/ScoreGrid";
import MatchTrackBallIn from "../components/MatchTrackBallIn";

export default function TMBallPlay({ navigation }) {
  return (
    <View className="  flex-1 relative mx-4 ">
      <View className="flex-row justify-between ">
        <Text className="text-black font-semibold text-base">
          Track Live Match {"              "}
        </Text>
        <TouchableOpacity>
          <Ionicons name="reload" size={24} color="grey" className="ml-11" />
        </TouchableOpacity>
      </View>
      <ScoreGrid serviceSelection={"Ball In Play"} />
      <MatchTrackBallIn />
      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle justify-center"
      >
        <TouchableOpacity onPress={() => navigation.navigate("TMSelectshot")}>
          <Text className=" text-white text-xl text-center font-semibold">
            Undo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
