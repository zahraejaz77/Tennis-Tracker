import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import MatchTrackSelectShot from "../components/MatchTrackSelectShot";
import ScoreGrid from "../components/ScoreGrid";

export default function TMSelectshot({ navigation }) {
  const [isToggled, setIsToggled] = useState(true);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <View className="  flex-1 relative z-40 mx-4 ">
      <View className="flex-row justify-between">
        <Text className="text-black font-semibold text-base">
          Track Live Match {"              "}
        </Text>
        <TouchableOpacity>
          <Ionicons name="reload" size={24} color="grey" className="ml-11" />
        </TouchableOpacity>
      </View>
      <ScoreGrid serviceSelection={"Select Shot"} />

      <View className="justify-center self-center mt-2 rounded-full w-64 h-8 border-2 border-lime-500 ">
        <TouchableOpacity
          className=" rounded-full w-40 h-10 top-1 self-center "
          onPress={handleToggle}
        >
          {isToggled ? (
            <View className="flex-row justify-between">
              <Text className="text-center w-40 text-white text-lg right-14 rounded-full bg-[#31DA60] ">
                {" "}
                Forehand
              </Text>
              <Text className=" text-sm font-semibold text-gray-500 top-1 right-10">
                Backhand
              </Text>
            </View>
          ) : (
            <View className="flex-row justify-between">
              <Text className=" text-sm font-semibold text-gray-500 top-1 right-4">
                Forehand
              </Text>
              <Text className=" w-40 text-center text-white text-lg  rounded-full bg-[#31DA60]  ">
                {" "}
                Backhand
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <MatchTrackSelectShot></MatchTrackSelectShot>

      <View
        style={{ width: 200, height: 35, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle mt-2"
      >
        <TouchableOpacity onPress={() => navigation.navigate("MatchComplete")}>
          <Text className=" text-black text-xl text-center font-semibold justify-center">
            Undo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
