import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import VerticalScroll from "../components/VerticalScroll";
import ScreenContainer from "../components/ScreenContainer";
import MatchCard from "../components/MatchCard";

export default function PlayerScreen() {
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
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        className=" flex-1 justify-around bg-[#DEF8E6]"
      >
        {/* // icons */}
        <View className=" flex-row justify-between align-middle mt-2 pl-2 pr-2">
          <Ionicons name="arrow-back" size={24} color="black" />
          <View className=" rounded-full self-center justify-center align-middle bg-[#31DA60] pl-2 pr-2 pt-2 pb-2">
            <Ionicons name="tv-outline" size={24} color="white" />
          </View>
        </View>
        <View className="flex-col self-center justify-around space-y-2 ">
          <Image
            className=" rounded-full self-center"
            style={{ width: 100, height: 100 }}
            source={require("../assets/Maida2.jpg")}
          />
          <Text className="text-lg self-center">Maida</Text>
          <TouchableOpacity>
            <View className="flex-row rounded-full self-center align-middle justify-center pt-2 pb-2 pl-4 pr-4 space-x-2 bg-[#31DA60]">
              <SimpleLineIcons name="user-following" size={25} color="white" />
              <Text className="text-white text-lg font-bold "> Follow</Text>
            </View>
          </TouchableOpacity>
          <View className="self-center">
            <Text className="text-center justify-center align-middle text-sm font-semibold w-52">
              I am a passionate tennis player, positive and I love food.
            </Text>
          </View>
        </View>
        {/* ////utr buttons */}
        <View className="flex-row space-x-3 w-full self-center justify-around mt-2 pl-2 pr-2">
          <View className="bg-[#ced6d4] rounded-md  justify-center self-center align-middle pt-2 w-32 pb-2">
            <TouchableOpacity>
              <Text className="text-center text-sm"> UTR 9.6</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#ced6d4] rounded-md justify-center self-center align-middle w-32 pt-2 pl-2 pr-2 pb-2">
            <TouchableOpacity>
              <Text className="text-center text-sm">Add to Favourites</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#ced6d4] rounded-md  justify-center self-center align-middle w-32 pt-2 pl-2 pr-2 pb-2">
            <TouchableOpacity>
              <Text className="text-center text-sm"> Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ////stats */}
        <View className="flex-row space-x-3 w-full self-center justify-around px-4 mt-2 ">
          <View className="w-32 h-14 justify-center self-center align-middle border-2 border-gray-300">
            <Text className="text-center text-lg font-bold"> 96</Text>
            <Text className="text-center text-sm text-gray-500"> Matches</Text>
          </View>
          <View className="w-32 h-14 justify-center self-center align-middle  border-2 border-gray-300">
            <Text className="text-center text-lg font-bold"> 3M</Text>
            <Text className="text-center text-sm text-gray-500">
              {" "}
              Followers
            </Text>
          </View>
          <View className="w-32 h-14 justify-center self-center align-middle  border-2 border-gray-300">
            <Text className="text-center text-lg font-bold"> 96%</Text>
            <Text className="text-center text-sm text-gray-500"> Win rate</Text>
          </View>
        </View>
        {/* //// ///// ////text matches played */}
        <View>
          <Text className="text-black  text-base font-semibold mt-2 pl-2 ">
            Matches Played
          </Text>
        </View>
        {/* //// */}
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
          className="mt-2"
        >
          {matchData.map((item) => (
            <MatchCard key={item.id} data={item} />
          ))}
        </ScrollView>
        {/* ////text photos */}
        <View>
          <Text className="text-black text-base font-semibold">Photos</Text>
        </View>

        {/* ///photos */}
        {/* <View className="flex-col self-center justify-center space-y-4 top-96">
          <View className="flex-row self-center justify-center space-x-4">
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
          </View>
          <View className="flex-row self-center justify-center space-x-4">
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
          </View>
          <View className="flex-row self-center justify-center space-x-4">
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
          </View>
          <View className="flex-row self-center justify-center space-x-4">
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
          </View>
          <View className="flex-row self-center justify-center space-x-4">
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
            <Image
              className="rounded-xl"
              source={require("../assets/playerphoto.jpg")}
              style={{ width: 170, height: 175 }}
            />
          </View>
        </View> */}
      </View>
    </ScreenContainer>
  );
}
