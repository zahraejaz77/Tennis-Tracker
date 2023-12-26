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
import { AntDesign } from "@expo/vector-icons";

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

      <Text className="text-black  self-start text-base top-16 font-semibold pl-8">
        New Match
      </Text>

      <View className="bg-white w-11/12 h-72 self-center rounded-2xl top-20">
        <View className="flex flex-row self-center">
          <Text className="pr-4 font-bold top-2">Share Match</Text>
          <View className="rounded-full bg-[#C7D2CE] p-2">
            <AntDesign name="upload" size={24} color="black" />
          </View>
        </View>
        <View className="self-center top-2 flex flex-col bg-[#C7D2CE] w-10/12 h-11 rounded-xl align-middle">
          <TouchableOpacity className=" bg-[#31DA60] h-11 w-4/12 rounded-xl">
            <Text className="self-center align-middle font-semibold top-3">
              {" "}
              Invite Friends
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" top-5 self-center bg-[#31DA60] h-6 w-2/12 rounded-xl">
            <Text className="self-center align-middle font-semibold ">
              {" "}
              BET
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around top-8">
          <Text className="font-semibold text-yellow-500">58</Text>
          <Text className="font-semibold text-gray-600">20 %</Text>
          <Text className="font-semibold text-red-700">18 %</Text>
        </View>
        <Text className="font-bold top-8 left-9 ">Heropool</Text>
        <View className="self-center top-10  bg-[#bec0c0] w-10/12 h-1 "></View>

        <View className="justify-around flex flex-row top-12">
          <View className="self-center flex">
            <AntDesign name="like1" size={24} color="gray" />
            <Text>5</Text>
          </View>
          <View className="self-center flex">
            <AntDesign name="dislike1" size={24} color="gray" />
            <Text>5</Text>
          </View>
          <View className="self-center flex">
            <AntDesign name="heart" size={24} color="gray" />
            <Text>5</Text>
          </View>
          <View className="self-center flex">
            <Text>Who will win?</Text>
          </View>
          <View className="self-center flex">
            <AntDesign name="like1" size={24} color="gray" />
            <Text>5</Text>
          </View>
          <View className="self-center flex">
            <AntDesign name="dislike1" size={24} color="gray" />
            <Text>5</Text>
          </View>
          <View className="self-center flex">
            <AntDesign name="heart" size={24} color="gray" />
            <Text>5</Text>
          </View>
        </View>
      </View>
      <View className=" flex flex-row justify-around top-14 mx-3">
        <View className="self-center bg-[#DBEAE5] h-24 w-36 mx-10 rounded-lg">
          <AntDesign name="user" size={24} color="gray" />
          <Text className="text-lg text-gray-500 self-center"> 2 users</Text>
        </View>
        <View className="self-center bg-[#DBEAE5] h-24 mx-10 w-36 rounded-lg"></View>
        <View className="self-center bg-[#DBEAE5] h-24 w-36 mx-10 rounded-lg"></View>
      </View>

      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle top-20 flex-row justify-center"
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
