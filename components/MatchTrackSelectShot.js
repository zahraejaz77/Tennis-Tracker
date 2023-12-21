import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function MatchTrackSelectShot() {
  return (
    <View className="flex-col self-center top-48">
      <View className="flex-row ">
        <View
          style={{
            width: 180,
            height: 93,
            borderColor: "#31da60",
            borderWidth: 4,
          }}
          className=" justify-center"
        >
          <TouchableOpacity>
            <Text className="text-center text-base font-bold text-green-700">
              Ground
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 180,
            height: 93,
            borderColor: "#31da60",
            borderWidth: 4,
          }}
          className=" justify-center"
        >
          <TouchableOpacity>
            <Text className="text-center text-base font-bold text-green-700">
              Slice
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row ">
        <View className="flex-col">
          <View
            style={{
              width: 180,
              height: 93,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center  text-green-700 text-base font-bold">
                {" "}
                Volley
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 180,
              height: 93,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center text-base font-bold text-green-700">
                Lob
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 180,
              height: 93,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center text-base font-bold text-green-700">
                Passing Shot
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 180,
              height: 93,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center text-base font-bold text-green-700">
                Drop Shot
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-col">
          <View
            style={{
              width: 180,
              height: 93,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center  text-green-700 text-base font-bold">
                {" "}
                Smash
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 180,
              height: 93,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center text-base font-bold text-green-700">
                Net Ball
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 180,
              height: 93,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center text-base font-bold text-green-700">
                Bad Call
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 180,
              height: 93,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center text-base font-bold text-green-700">
                Other
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
