import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function HorizontalScroll() {
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{ width: 142, length: 100 }}
          className="flex justify-center items-center rounded-3xl py-3 space-y-1 mb-24 top-24 px-4 bg-white"
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
        <View className="flex justify-center items-center rounded-3xl py-3 space-y-1 mb-24 top-24 px-4">
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
        <View className="flex justify-center items-center rounded-3xl py-3 space-y-1 mb-24 top-24 px-4">
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
        <View className="flex justify-center items-center rounded-3xl py-3 space-y-1 mb-24 top-24 px-4">
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
      </ScrollView>
    </View>
  );
}
