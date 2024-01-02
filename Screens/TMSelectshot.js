import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import TopMatchBar from "../components/TopMatchBar";
import UndoButton from "../components/UndoButton";
import { Ionicons } from "@expo/vector-icons";
import ScoreGridBallIn from "../components/ScoreGridBallIn";
import MatchTrackBallIn from "../components/MatchTrackBallIn";
import ScoreGridSelectShot from "../components/ScoreGridSelectShot";
import MatchTrackSelectShot from "../components/MatchTrackSelectShot";

export default function TMSelectshot({ navigation }) {
  const ToggleButton = () => {};
  const [isToggled, setIsToggled] = useState(true);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

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
      <ScoreGridSelectShot></ScoreGridSelectShot>
      <MatchTrackSelectShot></MatchTrackSelectShot>
      <View className="justify-center self-center bottom-96 my-16 rounded-full w-64 h-8 border-2 border-lime-500 ">
        <TouchableOpacity
          className=" rounded-full w-40 h-10 top-1 self-center "
          onPress={handleToggle}
        >
          {isToggled ? (
            <Text className="text-center text-white text-lg right-14 rounded-full bg-[#31DA60] ">
              {" "}
              Forehand
            </Text>
          ) : (
            <Text className="text-center text-white text-lg left-14 rounded-full bg-[#31DA60]  ">
              {" "}
              Backhand
            </Text>
          )}
          <View className="flex-row justify-between">
            <Text className=" text-sm font-semibold text-gray-500 bottom-7 right-4">
              Forehand
            </Text>
            <Text className=" text-sm font-semibold text-gray-500 bottom-7 left-4">
              Backhand
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{ width: 200, height: 35, backgroundColor: "#31DA60" }}
        className=" rounded-full top-9 self-center align-middle"
      >
        <TouchableOpacity onPress={() => navigation.navigate("MatchComplete")}>
          <Text className=" text-white text-xl text-center font-semibold top-1">
            Undo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
