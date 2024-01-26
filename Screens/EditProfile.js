import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
export default function EditProfile() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const profileDataInput = [
    {
      id: 1,
      label: "Email",
      placeholder: "abc@gmail.com",
    },
    {
      id: 2,
      label: "Phone",
      placeholder: "+1 5178 049217",
    },
    {
      id: 3,
      label: "Name",
      placeholder: "Maida",
    },
    {
      id: 4,
      label: "Player 2 ",
      placeholder: "Add Player",
    },
    {
      id: 5,
      label: "Nationality",
      placeholder: "Canada",
    },
    {
      id: 6,
      label: "Hometown",
      placeholder: "Onatario",
    },

    {
      id: 7,
      label: "Age",
      placeholder: "26",
    },
    {
      id: 8,
      label: "Gender",
      placeholder: "Female",
    },
    {
      id: 9,
      label: "Plays",
      placeholder: "Right Handed",
    },
  ];
  return (
    <ScrollView horizontal={false}>
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        className=" flex-1 flex-col align-middle self-center bg-[#DCF9E4]"
      >
        <View className="bg-white">
          <View className="flex-row justify-between align-middle mt-4 pl-2 pr-2">
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text className="text-lg font-bold">Profile</Text>
            <MaterialIcons name="edit" size={24} color="black" />
          </View>

          <View className="flex-col self-center justify-around mt-6  ">
            <Image
              className=" rounded-full self-center"
              style={{ width: 100, height: 100 }}
              source={require("../assets/Maida2.jpg")}
            />

            <Text className="text-lg text-center self-center ">Maida</Text>
          </View>
          <Text className="text-2xl text-gray-600 font-semibold text-center mt-4 mb-3 ">
            {" "}
            Edit Profile{" "}
          </Text>
        </View>
        <View className="">
          {profileDataInput.map((item) => (
            <View
              key={item.label}
              className="flex-row border-b-2 border-b-gray-300 "
            >
              <Text className="text-center font-semibold text-xl justify-center pl-4 pt-2 pb-2 ">
                {item.label}
              </Text>
              <TextInput
                placeholder={item.placeholder}
                placeholderTextColor="gray"
                className="text-center self center text-xl font-semibold pl-10 align-middle "
              ></TextInput>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
