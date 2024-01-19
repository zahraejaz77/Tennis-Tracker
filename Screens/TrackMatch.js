import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ScoreGrid from "../components/ScoreGrid";
import MatchTrack from "../components/MatchTrack";
import { Ionicons } from "@expo/vector-icons";

export default function TrackMatch({ navigation }) {
  return (
    <View className="  flex-1 relative z-40 mx-2">
      <View className="flex-row justify-between mt-2 mb-2">
        <Text className="text-black font-semibold text-base">
          Track Live Match {"              "}
        </Text>
        <TouchableOpacity>
          <Ionicons name="reload" size={24} color="grey" className="ml-11" />
        </TouchableOpacity>
      </View>
      <ScoreGrid serviceSelection={"1st Service"} />
      <MatchTrack />
      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle justify-center"
      >
        <TouchableOpacity onPress={() => navigation.navigate("TMBallPlay")}>
          <Text className=" text-black text-xl text-center font-bold">
            Undo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
