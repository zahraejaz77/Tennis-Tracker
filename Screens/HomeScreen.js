import {
  Image,
  StatusBar,
  Dimensions,
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

import { useCallback, useState } from "react";
import VerticalScroll from "../components/VerticalScroll";
import HorizontalScroll from "../components/HorizontalScroll";
import MatchCard from "../components/MatchCard";
import TopBar from "../components/TopBar";
import ScreenContainer from "../components/ScreenContainer";

export default function HomeScreen() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const matchData = [
    { id: 1, player1: "Maida ", player2: "John", date: "Fri, 2 Sep" },
    { id: 2, player1: "Bella", player2: "John", date: "Sat, 3 Sep" },
    { id: 3, player1: "Bella", player2: "John", date: "Sat, 3 Sep" },
    { id: 4, player1: "Bella", player2: "John", date: "Sat, 3 Sep" },
    { id: 5, player1: "Bella", player2: "John", date: "Sat, 3 Sep" },
  ];
  return (
    <ScreenContainer className="flex-1 relative">
      <View className="flex-1 relative">
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: "#DEF8E6",
          }}
          className=" relative z-40"
        >
          <TopBar></TopBar>
          {/* User Greeting*/}
          <View className="flex-col items-start top-11 mx-4">
            <Text style={{ color: "#625D5D" }} className=" text-smfont-normal">
              Hi Ruth
            </Text>
            <Text className="text-black text-base font-semibold">
              Find Your Match
            </Text>
          </View>

          {/*  search bar*/}
          <View className="flex-row self-center rounded-md h-12 top-14 bg-white justify-between w-11/12">
            <View className="self-center mx-2">
              <Ionicons name="search-outline" size={24} color="grey" />
            </View>
            <View className="z-50 right-32 self-center">
              <TextInput
                placeholder="Search"
                placeholderTextColor={"gray"}
                className="text-base text-gray-700 pl-8"
              ></TextInput>
            </View>
            <View className="self-center mx-2">
              <MaterialIcons
                name="settings-input-component"
                size={24}
                color="grey"
              />
            </View>
          </View>

          {/*  matches nearby */}
          <View className="flex-row  justify-between mx-4 space-x-40 top-16 ">
            <Text className="text-black self-start text-base font-semibold">
              Matches Nearby
            </Text>
            <Text className="text-gray-500 self-end text-sm font-normal">
              See All
            </Text>
          </View>

          {/*horizontal scroll*/}
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
            className="top-20"
          >
            {matchData.map((item) => (
              <MatchCard key={item.id} data={item} />
            ))}
          </ScrollView>
          {/*  Trending Players */}
          <View className="flex-row justify-between mx-4 bottom-5">
            <Text className="text-black self-start text-base font-semibold  ">
              Trending Players
            </Text>
            <Text className="text-gray-500 text-sm self-end font-normal ">
              See All
            </Text>
          </View>

          {/*vertical scroll*/}
          <View>
            <VerticalScroll />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
}
