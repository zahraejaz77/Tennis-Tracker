import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import PhoneNumberScreen from "./PhoneNumberScreen";

export default function LoginScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, position: "relative" }}
      className=" text-center flex-1 flex-col "
    >
      {/*<Image
        className="absolute h-full w-full"
        style={{ width: 282, height: 83 }}
        source={require("../assets/bg1.jfif")}
  />*/}
      <Image
        className="self-center top-7"
        style={{ width: 282, height: 83 }}
        source={require("../assets/40lovelogo.png")}
      />
      <View
        style={{ backgroundColor: "#191919", width: 340, height: 450 }}
        className="absolute rounded-3xl self-center top-40 "
      >
        <Text className="text-white self-center text-lg top-7 font-bold">
          Login
        </Text>
        <Text className="text-white self-center text-sm text-center top-11">
          Please enter your mobile
        </Text>
        <Text className="text-white self-center text-sm text-center top-11">
          number to Login
        </Text>
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor="#FFFFFF"
          keyboardType="numeric"
          className="border-b-2 border-b-slate-600 self-center top-24"
          style={{ width: "80%" }}
        ></TextInput>
        <TouchableOpacity>
          <Text className="text-white text-right mr-7 text-sm top-28 ">
            Forgot Mobile Number?
          </Text>
        </TouchableOpacity>
        <View
          style={{ backgroundColor: "#31da60" }}
          className="rounded-full self-center absolute h-12 w-56 justify-center top-80"
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PhoneNumberScreen")}
          >
            <Text className="text-white text-center text-lg font-medium">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row top-64 self-center">
          <Text className="text-white  text-sm ">Don't have an account?</Text>
          <Text style={{ color: "#31da60" }} className=" text-sm ">
            {" "}
            Register
          </Text>
        </View>
      </View>
    </View>
  );
}
