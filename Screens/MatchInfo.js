import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SectionList,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DropDown from "../components/DropDown";
import DropDownSelect from "../components/DropDownSelect";
import { SelectList } from "react-native-dropdown-select-list";

export default function MatchInfo({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [selectedTracker, setSelectedTracker] = useState("");
  const [selectedPlayer1, setSelectedPlayer1] = useState("");
  const [selectedPlayer2, setSelectedPlayer2] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedSurface, setSelectedSurface] = useState("");
  const [selectedFacility, setSelectedFacility] = useState("");
  const [selectedRally, setSelectedRally] = useState("");
  const dataTracker = [
    { label: "Mom", value: "Maida" },
    { label: "Bella", value: "Bella" },
    { label: "Ruth", value: "Ruth" },
  ];
  const dataPlayer1 = [
    { label: "Maida", value: "Mom" },
    { label: "Dad", value: "Dad" },
    { label: "Ruth", value: "Ruth" },
  ];
  const dataPlayer2 = [
    { label: "Maida", value: "Mom" },
    { label: "Dad", value: "Dad" },
    { label: "Ruth", value: "Ruth" },
  ];
  const dataCourt = [
    { label: "Tenis ", value: "Tenis World" },
    { label: "Dubai", value: "Dubai" },
  ];
  const dataSurface = [
    { label: "Surface A", value: "Surface A" },
    { label: "Surface B", value: "Surface B" },
    { label: "Ruth", value: "Ruth" },
  ];
  const dataFacility = [
    { label: "Mom", value: "Mom" },
    { label: "Dad", value: "Dad" },
    { label: "Ruth", value: "Ruth" },
  ];
  const dataRally = [
    { label: "ITF Junior Team", value: "ITF Junior Team" },
    { label: "Dad", value: "Dad" },
    { label: "Ruth", value: "Ruth" },
  ];
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#DCF9E4",
      }}
      className=" flex-1 flex-col align-middle self-center space-y-4"
    >
      <Text className="text-black top-5 self-center text-base font-semibold">
        Match Info
      </Text>
      <View className="align-middle w-11/12 h-16 border border-green-400 bg-white self-center relative top-7 rounded-lg z-50 justify-center flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Tracker :
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataTracker}
            setSelected={setSelectedTracker}
            boxStyles={{ borderColor: "white" }}
            placeholder="Select Tracker"
            dropdownItemStyles={{
              backgroundColor: "white",
              borderColor: "green",
            }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View className="align-middle w-11/12 h-16 border relative border-green-400 bg-white self-center top-7 rounded-lg z-40 justify-center flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Player 1 :
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataPlayer1}
            setSelected={setSelectedPlayer1}
            boxStyles={{ borderColor: "white" }}
            placeholder="Select Player"
            dropdownItemStyles={{ backgroundColor: "white" }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View className="align-middle w-11/12 h-16 border relative border-green-400 bg-white self-center top-7 rounded-lg z-30 justify-center flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Player 2 :
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataPlayer2}
            setSelected={setSelectedPlayer2}
            boxStyles={{ borderColor: "white" }}
            placeholder="Select Player"
            dropdownItemStyles={{ backgroundColor: "white" }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View className="align-middle w-11/12 h-16 border relative border-green-400 bg-white self-center top-7 rounded-lg justify-center z-20 flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Court :
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataCourt}
            setSelected={setSelectedCourt}
            boxStyles={{ borderColor: "white" }}
            placeholder="Court or Location Name"
            dropdownItemStyles={{ backgroundColor: "white" }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View className="align-middle w-11/12 h-16 border relative z-10 border-green-400 bg-white self-center top-7 rounded-lg  justify-center flex-row">
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Surface :
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataSurface}
            setSelected={setSelectedSurface}
            boxStyles={{ borderColor: "white" }}
            placeholder="Selected Surface"
            dropdownItemStyles={{ backgroundColor: "white" }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View
        style={{ zIndex: 8 }}
        className="align-middle w-11/12 h-16 border relative border-green-400 bg-white self-center top-7 rounded-lg justify-center flex-row"
      >
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Facility:
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataFacility}
            setSelected={setSelectedFacility}
            boxStyles={{ borderColor: "white" }}
            placeholder="Select Facility"
            dropdownItemStyles={{ backgroundColor: "white" }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View
        style={{ zIndex: 5 }}
        className="align-middle w-11/12 h-16 border relative  border-green-400 bg-white self-center top-7 rounded-lg justify-center flex-row"
      >
        <Text className="text-black text-base font-semibold pl-4 top-4">
          {" "}
          Rally :
        </Text>
        <View className="w-3/5 left-3 top-2 align-middle">
          <SelectList
            data={dataRally}
            setSelected={setSelectedRally}
            boxStyles={{ borderColor: "white" }}
            placeholder="Select Rally"
            dropdownItemStyles={{ backgroundColor: "white" }}
            dropdownStyles={{
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 8,
            }}
          ></SelectList>
        </View>
      </View>
      <View
        style={{ width: 343, height: 53, backgroundColor: "#31DA60" }}
        className=" rounded-full self-center align-middle top-10 flex-row justify-center"
      >
        <TouchableOpacity onPress={() => navigation.navigate("MatchFormat")}>
          <Text className=" text-white text-xl text-center font-semibold top-3 align-middle">
            Next
          </Text>
          <View className=" pl-20 bottom-4">
            <Ionicons name="arrow-forward-outline" size={30} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
