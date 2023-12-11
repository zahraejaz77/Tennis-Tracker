import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
export default function VerticalScroll() {
  return (
    <View className="flex-row  justify-center top-7">
      <ScrollView vertical>
        <View className="justify-center flex-col">
          <Image
            source={require("../assets/maria-01.jpg")}
            className="w-40 h-40 rounded-lg"
          />
          <Text classname="justify-center text-center font-normal">Maria</Text>
        </View>
      </ScrollView>

      <ScrollView vertical>
        <View className="justify-center flex-col">
          <Image
            source={require("../assets/maria-01.jpg")}
            className="w-40 h-40 rounded-lg"
          />
          <Text classname="justify-center  text-center font-normal">Maria</Text>
        </View>
      </ScrollView>
    </View>
  );
}
