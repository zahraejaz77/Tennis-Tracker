import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
export default function VerticalScroll() {
  return (
    <View className="flex-row justify-around self-center mx-4">
      <ScrollView vertical>
        <View className="justify-center self-center align-middle">
          <Image
            source={require("../assets/maria-01.jpg")}
            className="w-40 h-40 rounded-lg"
          />
          <View className="self-center">
            <Text classname=" font-semibold">Maria</Text>
          </View>
        </View>
        <View className="justify-center  align-middle self-center">
          <Image
            source={require("../assets/playerphoto.jpg")}
            className="w-40 h-40 rounded-lg"
          />
          <View className="self-center">
            <Text classname=" font-semibold">Maida</Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView vertical>
        <View className="justify-center self-center align-middle">
          <Image
            source={require("../assets/player3.jpg")}
            className="w-40 h-40 rounded-lg"
          />
          <View className="self-center">
            <Text classname=" font-semibold">Bella</Text>
          </View>
        </View>
        <View className="justify-center  align-middle self-center">
          <Image
            source={require("../assets/Maida2.jpg")}
            className="w-40 h-40 rounded-lg"
          />
          <View className="self-center">
            <Text classname=" font-semibold">Lilly</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
