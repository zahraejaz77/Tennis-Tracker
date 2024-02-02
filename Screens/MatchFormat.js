import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import CheckBox from "../components/CheckBox";

export default function MatchFormat({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [selectedADScoring, setSelectedADScoring] = useState("");
  const [selectedRounds, setSelectedRounds] = useState("");
  const [selectedGames, setSelectedGames] = useState("");
  const [selectedTieBreak, setSelectedTieBreak] = useState("");
  const [selectedLastRound, setSelectedLastRound] = useState("");
  const dataADScoring = [
    { label: "YES", value: "YES" },
    { label: "NO", value: "NO" },
  ];
  const dataRounds = [
    { label: "3", value: "3" },
    { label: "5", value: "5" },
    { label: "7", value: "7" },
  ];
  const dataGames = [
    { label: "3", value: "3" },
    { label: "5", value: "5" },
    { label: "7", value: "7" },
  ];
  const dataTieBreak = [
    { label: "Anytime", value: "Anytime" },
    { label: "6-6", value: "6-6" },
  ];
  const dataLastRound = [
    { label: "No Rule", value: "No Rule" },
    { label: "7th Round", value: "7th Round" },
  ];
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#DCF9E4",
      }}
      className=" flex-1 flex-col align-middle self-center space-y-4"
    >
      <Text className="text-black top-5 self-center text-base font-semibold">
        Format
      </Text>
      <Text className="text-black top-5 text-base font-semibold left-7">
        Score Rule
      </Text>
      <View className="align-middle w-11/12 h-16 border border-green-400 bg-white self-center relative top-7 rounded-lg z-50 justify-center flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          AD Scoring
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <CheckBox Option1="Yes" Option2="No"></CheckBox>
        </View>
      </View>
      <View className="align-middle w-11/12 h-16 border border-green-400 bg-white self-center relative top-7 rounded-lg z-40 justify-center flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Rounds
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataRounds}
            setSelected={setSelectedRounds}
            boxStyles={{ borderColor: "white" }}
            placeholder="Select Rounds"
            dropdownItemStyles={{
              backgroundColor: "white",
              borderColor: "green",
            }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View className="align-middle w-11/12 h-16 border border-green-400 bg-white self-center relative top-7 rounded-lg z-30 justify-center flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Games For Set
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataGames}
            setSelected={setSelectedGames}
            boxStyles={{ borderColor: "white" }}
            placeholder="Select Games for Set"
            dropdownItemStyles={{
              backgroundColor: "white",
              borderColor: "green",
            }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View className="align-middle w-11/12 h-16 border border-green-400 bg-white self-center relative top-7 rounded-lg z-20 justify-center flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Tie-at Break
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataTieBreak}
            setSelected={setSelectedTieBreak}
            boxStyles={{ borderColor: "white" }}
            placeholder="Select Tie-at Break"
            dropdownItemStyles={{
              backgroundColor: "white",
              borderColor: "green",
            }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View className="align-middle w-11/12 h-16 border border-green-400 bg-white self-center relative top-7 rounded-lg z-10 justify-center flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Last Round
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataLastRound}
            setSelected={setSelectedLastRound}
            boxStyles={{ borderColor: "white" }}
            placeholder="Select Last Round"
            dropdownItemStyles={{
              backgroundColor: "white",
              borderColor: "green",
            }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>

      <View
        style={{ width: 343, height: 53, backgroundColor: "#52E07A" }}
        className=" rounded-full self-center align-middle top-5 flex-row justify-center"
      >
        <TouchableOpacity onPress={() => navigation.navigate("SelectService")}>
          <Text className=" text-white text-xl text-center font-semibold top-3 align-middle">
            Next
          </Text>
          <View className=" pl-20 bottom-4">
            <Ionicons name="arrow-forward-outline" size={30} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
