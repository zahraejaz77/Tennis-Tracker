import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import PhoneNumberScreen from "./PhoneNumberScreen";

export default function LoginScreen({ navigation }) {
  return (
    <View className="flex flex-col ">
      <Image
        className="self-center  mt-20 my-auto"
        style={{ width: 282, height: 83 }}
        source={require("../assets/40lovelogo.png")}
      />
      <View
        className="bg-[#191919] h-2/3 w-11/12 align-middle flex self-center  rounded-3xl "
      >
        <View className="flex flex-col mt-24">
        <Text className="text-white text-2xl self-center font-bold">
          Login
        </Text>
        <Text className="text-white self-center text-sm text-center ">
          Please enter your mobile
        </Text>
        <Text className="text-white self-center text-sm text-center ">
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
          className="rounded-full self-cente justify-center "
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PhoneNumberScreen")}
          >
          
          </TouchableOpacity>
        </View>
        </View>
        <View className="flex-row  self-center">
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
