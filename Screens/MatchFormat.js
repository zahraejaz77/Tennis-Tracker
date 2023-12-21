import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function MatchFormat({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#FAFAFA",
      }}
      className=" flex-1 flex-col align-middle self-center space-y-4"
    >
      <Text className="text-black top-5 self-center text-base font-semibold">
        Format
      </Text>
      <Text className="text-black top-5 text-base font-semibold left-7">
        Score Rule
      </Text>

      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="YES"
          //placeholderTextColor={"gray"}
          className="left-36 top-3 text-base text-gray-700 z-30"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          AD Scoring -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="3"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30 left-11"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Rounds -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="7"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30 left-14"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Games for set -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="Anytime"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30 left-14"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Tie Break at -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="No Rule"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30 left-14"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Last Round
        </Text>
      </View>

      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle top-5 flex-row justify-center"
      >
        <TouchableOpacity onPress={() => navigation.navigate("MatchReview")}>
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
