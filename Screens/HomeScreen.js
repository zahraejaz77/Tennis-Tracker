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

import { useCallback, useState } from "react";
import VerticalScroll from "../components/VerticalScroll";
import HorizontalScroll from "../components/HorizontalScroll";
import TopBar from "../components/TopBar";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#FAFAFA" }} className=" relative z-40">
      <TopBar></TopBar>
      {/* User Greeting*/}
      <View className="flex-col items-start top-11">
        <Text style={{ color: "#625D5D" }} className=" text-smfont-normal">
          Hi Ruth
        </Text>
        <Text className="text-black text-base font-semibold">
          Find Your Match
        </Text>
      </View>

      {/*  search bar*/}
      <View
        style={{ width: 350, height: 45 }}
        className="flex-row  z-50 top-16 bg-white justify-between"
      >
        <Ionicons name="search-outline" size={24} color="grey" />

        <MaterialIcons name="settings-input-component" size={24} color="grey" />
      </View>
      <View className="z-50 top-5 left-10">
        <TextInput
          placeholder="Search"
          placeholderTextColor={"gray"}
          className="text-base text-gray-700"
        ></TextInput>
      </View>

      {/*  matches nearby */}
      <View className="flex-row items-stretch  space-x-40 top-20">
        <Text className="text-black text-base font-semibold">
          Matches Nearby
        </Text>
        <Text className="text-gray-300 text-sm font-normal">See All</Text>
      </View>

      {/*horizontal scroll*/}
      <HorizontalScroll></HorizontalScroll>
      {/*  Trending Players */}
      <View className="flex-row items-stretch top-4 z-40 space-x-40">
        <Text className="text-black text-base font-semibold  ">
          Trending Players
        </Text>
        <Text className="text-gray-300 text-sm font-normal ">See All</Text>
      </View>

      {/*vertical scroll*/}
      <VerticalScroll />
    </View>
  );
}
