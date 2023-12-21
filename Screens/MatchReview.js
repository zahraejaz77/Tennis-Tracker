import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import VerticalScroll from "../components/VerticalScroll";
import HorizontalScroll from "../components/HorizontalScroll";

export default function MatchReview({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
      }}
      classsName=" bg-[#D9D9D9] relative flex flex-col "
    >
      <Text className="text-black top-5 self-center text-base font-semibold">
        Match Review
      </Text>
      <View
        style={{ width: 370, height: 156 }}
        className="bg-white flex-row justify-evenly self-center rounded-lg mx-3 top-12"
      >
        <View className=" flex-col items-center top-4">
          <Image
            className="absolute rounded-full "
            style={{ width: 100, height: 100 }}
            source={require("../assets/Maida.jpg")}
          />
          <Text className="text-black font-sm font-bold top-28 text-center">
            Maidah Highflyer
          </Text>
        </View>
        <View className="flex-col space-y-3 top-3">
          <View className="flex-row">
            <Text className="text-green-800 font-bold text-lg">2</Text>
            <Text className="text-black font-bold text-lg">-</Text>
            <Text className="text-black font-bold text-lg">0</Text>
          </View>
          <View className="flex-row">
            <Text className="text-green-800 font-bold text-lg">5</Text>
            <Text className="text-black font-bold text-lg">-</Text>
            <Text className="text-black font-bold text-lg">1</Text>
          </View>
          <View className="flex-row">
            <Text className="text-green-800 font-bold text-lg">3</Text>
            <Text className="text-black font-bold text-lg">-</Text>
            <Text className="text-black font-bold text-lg">3</Text>
          </View>
        </View>
        <View className=" flex-col items-center top-4">
          <Image
            className="absolute rounded-full"
            style={{ width: 100, height: 100 }}
            source={require("../assets/Bella.jpg")}
          />
          <Text className="text-black font-sm font-bold top-28 text-center">
            Bella Youh
          </Text>
        </View>
      </View>
      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle top-5 flex-row justify-center"
      >
        <>
          <TouchableOpacity onPress={() => navigation.navigate("TrackMatch")}>
            <Text className=" text-white text-med text-center font-semibold top-3 align-middle">
              Track Live Match
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </View>
  );
}
