import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function OTPScreen() {
  return (
    <View
      style={{ flex: 1, position: "relative" }}
      className=" text-center flex-1 flex-col "
    >
      <View className="top-40">
        <Text className="text-xl absolute self-center ">OTP Verification</Text>
      </View>
      <View>
        <Text className="text-xs absolute self-center text-center top-48">
          Enter the 4 digits sent to +2348104700434
        </Text>
      </View>
      <View className="flex-row space-x-3 absolute justify-center self-center top-64">
        <TextInput
          style={{ borderColor: "#31da60", borderWidth: 2 }}
          className="w-16 h-16 rounded-md"
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={{ borderColor: "#31da60", borderWidth: 2 }}
          className="w-16 h-16 rounded-md"
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={{ borderColor: "#31da60", borderWidth: 2 }}
          className="w-16 h-16 rounded-md"
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={{ borderColor: "#31da60", borderWidth: 2 }}
          className="w-16 h-16 rounded-md"
          keyboardType="numeric"
          maxLength={1}
        />
      </View>
      <Text className="text-xs absolute self-center text-center top-96 my-36">
        We have sent you an access code via SMS for Mobile number verification
      </Text>
      <View
        style={{ backgroundColor: "#31da60" }}
        className="rounded-full self-center absolute h-12 w-56 justify-center inset-y-80 top-96 my-64"
      >
        <TouchableOpacity>
          <Text className="text-white text-center text-lg font-medium">
            Verify Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
