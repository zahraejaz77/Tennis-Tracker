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
        className="relative flex-1 justify-around bg-[#DEF8E6]"
      >
        <View className=" flex-row  justify-between align-middle top-7">
          <Ionicons name="arrow-back" size={24} color="black" />
          <View
            style={{ width: 40, height: 40, backgroundColor: "#31da60" }}
            className=" rounded-full "
          >
            <View className="top-2 left-2">
              <Ionicons name="tv-outline" size={24} color="white" />
            </View>
          </View>
        </View>
        <View className="flex-col self-center justify-around top-9 space-y-2">
          <Image
            className=" rounded-full self-center"
            style={{ width: 100, height: 100 }}
            source={require("../assets/Maida2.jpg")}
          />
          <Text className="text-lg self-center">Maida</Text>
          <TouchableOpacity>
            <View
              style={{ backgroundColor: "#2ABE5C", width: 164, height: 52 }}
              className="flex-row rounded-full self-center justify-center space-x-2"
            >
              <View className="top-3">
                <SimpleLineIcons
                  name="user-following"
                  size={25}
                  color="white"
                />
              </View>
              <Text className="text-white text-lg font-bold top-2">
                {" "}
                Follow
              </Text>
            </View>
          </TouchableOpacity>
          <View className="self-center">
            <Text
              style={{ width: 232 }}
              className="text-center justify-center align-middle text-sm font-semibold"
            >
              I am a passionate tennis player, positive and I love food.
            </Text>
          </View>
          <View className="flex-row space-x-3 w-full self-center justify-around px-4">
            <View className="bg-[#ced6d4] rounded-md w-32 h-9 justify-center self-center align-middle">
              <TouchableOpacity>
                <Text className="text-center text-sm"> UTR 9.6</Text>
              </TouchableOpacity>
            </View>
            <View className="bg-[#ced6d4] rounded-md w-32 h-9 justify-center self-center align-middle">
              <TouchableOpacity>
                <Text className="text-center text-sm">Add to Favourites</Text>
              </TouchableOpacity>
            </View>
            <View className="bg-[#ced6d4] rounded-md w-32 h-9 justify-center self-center align-middle">
              <TouchableOpacity>
                <Text className="text-center text-sm"> Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row space-x-3 w-full self-center justify-around px-4">
            <View className="w-32 h-12 justify-center self-center align-middle border-2 border-gray-300">
              <View className="flex-col self-center"></View>
              <Text className="text-center text-lg font-bold"> 96</Text>
              <Text className="text-center text-sm text-gray-500">
                {" "}
                Matches
              </Text>
            </View>
            <View className="w-32 h-12 justify-center self-center align-middle  border-2 border-gray-300">
              <View className="flex-col self-center"></View>
              <Text className="text-center text-lg font-bold"> 3M</Text>
              <Text className="text-center text-sm text-gray-500">
                {" "}
                Followers
              </Text>
            </View>
            <View className="w-32 h-12 justify-center self-center align-middle  border-2 border-gray-300">
              <View className="flex-col self-center"></View>
              <Text className="text-center text-lg font-bold"> 96%</Text>
              <Text className="text-center text-sm text-gray-500">
                {" "}
                Win rate
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text className="text-black top-10 text-base font-semibold left-7">
            Matches Played
          </Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
          className="top-12"
        >
          {matchData.map((item) => (
            <MatchCard key={item.id} data={item} />
          ))}
        </ScrollView>
        <View>
          <Text className="text-black bottom-44 text-base font-semibold left-7">
            Photos
          </Text>
        </View>
        {/*<View className="flex-col self-center justify-center space-y-4 top-96">
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
        </View>*/}
      </View>
    </ScreenContainer>
  );
}
