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
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import VerticalScroll from "../components/VerticalScroll";
import HorizontalScroll from "../components/HorizontalScroll";
import ScreenContainer from "../components/ScreenContainer";
export default function Matches() {
  return (
    <ScreenContainer className="flex-1 relative">
      <View className="flex-1 relative">
        <View
          style={{ backgroundColor: "#FAFAFA" }}
          className="z-40 justify-between"
        >
          <View className="mx-4">
            <View className="flex-row items-stretch justify-between top-10">
              <Text className="text-black text-sm font-semibold">
                Recent Tracked Matches
              </Text>
              <Text className="text-gray-300 text-sm font-normal">See All</Text>
            </View>

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

            <View className="flex-row items-stretch align-middle self-center top-16 z-40 space-x-40">
              <Text className="text-black text-base font-semibold  ">
                Matches For you
              </Text>
              <Text className="text-gray-300 text-sm font-normal ">
                See All
              </Text>
            </View>
            <View className=" flex flex-row self-center bottom-5 align-middle items-stretch">
              <View className=" flex justify-evenly items-center align-middle self-center">
                <ScrollView vertical>
                  <View
                    style={{ width: 170, length: 212 }}
                    className="flex  align-middle self-center justify-around items-center rounded-3xl py-3 space-y-1  top-24 px-4 bg-white"
                  >
                    <Image
                      source={require("../assets/Gift.jpg")}
                      className=" rounded-lg"
                      style={{ width: 142, height: 100 }}
                    />
                    <Text className="text-black text-base font-semibold">
                      Maida & John
                    </Text>
                    <Text className="text-gray-600 text-sm ">Fri, 2 Sep</Text>
                    <Text className="text-black font-semibold">More Info</Text>
                  </View>
                  <View
                    style={{ width: 170, height: 212 }}
                    className=" flex  align-middle self-center justify-around items-center rounded-3xl py-3 space-y-1  top-24 px-4 bg-white"
                  >
                    <Image
                      source={require("../assets/player3.jpg")}
                      className=" rounded-lg"
                      style={{ width: 142, height: 100 }}
                    />
                    <Text className="text-black text-base font-semibold">
                      Maida & John
                    </Text>
                    <Text className="text-gray-600 text-sm ">Fri, 2 Sep</Text>
                    <Text className="text-black font-semibold">More Info</Text>
                  </View>
                  <View
                    style={{ width: 170, height: 212 }}
                    className="flex  align-middle self-center justify-around items-center rounded-3xl py-3 space-y-1  top-24 px-4 bg-white"
                  >
                    <Image
                      source={require("../assets/player3.jpg")}
                      className=" rounded-lg"
                      style={{ width: 142, height: 100 }}
                    />
                    <Text className="text-black text-base font-semibold">
                      Maida & John
                    </Text>
                    <Text className="text-gray-600 text-sm ">Fri, 2 Sep</Text>
                    <Text className="text-black font-semibold">More Info</Text>
                  </View>
                </ScrollView>
              </View>

              <ScrollView vertical>
                <View
                  style={{ width: 170, height: 212 }}
                  className="flex  align-middle self-center justify-around items-center rounded-3xl py-3 space-y-1  top-24 px-4 bg-white"
                >
                  <Image
                    source={require("../assets/two_players.jpg")}
                    className=" rounded-lg"
                    style={{ width: 142, height: 100 }}
                  />
                  <Text className="text-black text-base font-semibold">
                    Maida & John
                  </Text>
                  <Text className="text-gray-600 text-sm ">Fri, 2 Sep</Text>
                  <Text className="text-black font-semibold">More Info</Text>
                </View>
                <View
                  style={{ width: 170, height: 212 }}
                  className="flex  align-middle self-center justify-around items-center rounded-3xl py-3 space-y-1  top-24 px-4 bg-white"
                >
                  <Image
                    source={require("../assets/player3.jpg")}
                    className=" rounded-lg"
                    style={{ width: 142, height: 100 }}
                  />
                  <Text className="text-black text-base font-semibold">
                    Maida & John
                  </Text>
                  <Text className="text-gray-600 text-sm ">Fri, 2 Sep</Text>
                  <Text className="text-black font-semibold">More Info</Text>
                </View>
                <View
                  style={{ width: 170, length: 212 }}
                  className="flex  align-middle self-center justify-around items-center rounded-3xl py-3 space-y-1  top-24 px-4 bg-white"
                >
                  <Image
                    source={require("../assets/player3.jpg")}
                    className=" rounded-lg"
                    style={{ width: 142, height: 100 }}
                  />
                  <Text className="text-black text-base font-semibold">
                    Maida & John
                  </Text>
                  <Text className="text-gray-600 text-sm ">Fri, 2 Sep</Text>
                  <Text className="text-black font-semibold">More Info</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
}
