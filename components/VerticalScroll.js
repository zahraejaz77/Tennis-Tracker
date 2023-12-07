import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function VerticalScroll() {
  return (
    <View className="flex-row  justify-center top-3 self-center items-center">
      <ScrollView vertical>
        <View className="justify-center flex-col items-center py-5">
          <Image
            source={require("../assets/maria-01.jpg")}
            className="rounded-lg"
            style={{ width: 169, height: 175 }}
          />
          <Text classname="justify-center text-center font-normal">Maria</Text>
        </View>
        <View className="justify-center flex-col items-center ">
          <Image
            source={require("../assets/maria-01.jpg")}
            className="rounded-lg"
            style={{ width: 169, height: 175 }}
          />
          <Text classname="justify-center text-center font-normal ">Maria</Text>
        </View>
        <View className="justify-center flex-col items-center">
          <Image
            source={require("../assets/maria-01.jpg")}
            className="rounded-lg"
            style={{ width: 169, height: 175 }}
          />
          <Text classname="justify-center text-center font-normal ">Maria</Text>
        </View>
      </ScrollView>

      <ScrollView vertical>
        <View className="justify-center flex-col items-center py-5">
          <Image
            source={require("../assets/maria-01.jpg")}
            className="rounded-lg"
            style={{ width: 169, height: 175 }}
          />
          <Text classname="justify-center text-center font-normal">Maria</Text>
        </View>
        <View className="justify-center flex-col items-center ">
          <Image
            source={require("../assets/maria-01.jpg")}
            className="rounded-lg"
            style={{ width: 169, height: 175 }}
          />
          <Text classname="justify-center text-center font-normal ">Maria</Text>
        </View>
        <View className="justify-center flex-col items-center">
          <Image
            source={require("../assets/maria-01.jpg")}
            className="rounded-lg"
            style={{ width: 169, height: 175 }}
          />
          <Text classname="justify-center text-center font-normal ">Maria</Text>
        </View>
      </ScrollView>
    </View>
  );
}
