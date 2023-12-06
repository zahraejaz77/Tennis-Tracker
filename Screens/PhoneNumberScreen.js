import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function PhoneNumberScreen() {
  return (
    <View
      style={{ flex: 1, position: "relative" }}
      className=" text-center flex-1 flex-col "
    >
      <Image
        className="self-center top-10"
        style={{ width: 78, height: 61 }}
        source={require("../assets/F-logo.gif")}
      />
      <View className="absolute self-center top-40 ">
        <Text className="text-black self-center text-lg top-7 font-semibold">
          Welcome To FortyLove!
        </Text>
        <Text className="text-black self-center text-sm top-7">
          Type in your phone number to sign up.
        </Text>
        <TextInput
          placeholder="+1"
          placeholderTextColor="#000000"
          keyboardType="numeric"
          className="border-2 border-green-400 self-center top-24 rounded-full"
          style={{ width: 350, height: 57 }}
        ></TextInput>
        <View
          style={{ backgroundColor: "#31da60", width: 350, height: 57 }}
          className="rounded-full self-center absolute justify-center top-56"
        >
          <TouchableOpacity>
            <Text className="text-white text-center text-lg font-medium">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        className="self-center top-96 my-48 "
        style={{ width: 180, height: 53 }}
        source={require("../assets/40lovelogo.png")}
      />
    </View>
  );
}
