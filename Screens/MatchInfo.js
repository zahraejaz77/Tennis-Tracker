import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function MatchInfo({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#FAFAFA",
      }}
      className=" flex-1 flex-col align-middle self-center space-y-3"
    >
      <Text className="text-black top-5 self-center text-base font-semibold">
        Match Info
      </Text>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="Mom"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Tracker :
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="Add Player"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Player 1 -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="Add Player"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Player 2 -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="Court or location Name"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Court -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="Select"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Surface -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="Select"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Facility -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="ITF Junior Team"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Rally -
        </Text>
      </View>
      <View className="w-11/12 h-16 bg-white self-center top-7 rounded-lg z-20 justify-center">
        <TextInput
          placeholder="Final"
          //placeholderTextColor={"gray"}
          className="pl-24 top-3 text-base text-gray-700 z-30"
        ></TextInput>
        <Text className="text-black text-base font-semibold bottom-4 pl-4">
          {" "}
          Round -
        </Text>
      </View>
      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle top-5 flex-row justify-center"
      >
        <TouchableOpacity onPress={() => navigation.navigate("MatchFormat")}>
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
