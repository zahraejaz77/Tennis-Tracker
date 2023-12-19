import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import TopMatchBar from "../components/TopMatchBar";
import UndoButton from "../components/UndoButton";
import { Ionicons } from "@expo/vector-icons";
import ScoreGridBallIn from "../components/ScoreGridBallIn";
import MatchTrackBallIn from "../components/MatchTrackBallIn";

export default function TMBallPlay() {
  return (
    <View className="  flex-1 relative z-40 mx-4 ">
      <View className="flex-row justify-between top-6">
        <Text className="text-black font-semibold text-base">
          Track Live Match {"              "}
        </Text>
        <TouchableOpacity>
          <Ionicons name="reload" size={24} color="grey" className="ml-11" />
        </TouchableOpacity>
      </View>
      <ScoreGridBallIn />
      <MatchTrackBallIn />
      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full bottom-3 self-center align-middle"
      >
        <TouchableOpacity>
          <Text className=" text-white text-xl text-center font-semibold top-3">
            Undo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
