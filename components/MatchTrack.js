import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function MatchTrack() {
  return (
    <View className="flex-col self-center mt-2 ">
      <View className="flex-row ">
        <View
          style={{
            width: 180,
            height: 155,
            borderColor: "#31da60",
            borderWidth: 4,
          }}
          className=" justify-center rounded-xl border-4 pt-4 pb-4 pl-4 pr-4 mt-1 mb-1 mr-1 ml-1"
        >
          <TouchableOpacity>
            <Text className="text-center text-base font-bold">Ball in</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 180,
            height: 155,
            borderColor: "#31da60",
            borderWidth: 4,
          }}
          className=" justify-center rounded-xl border-4 pt-4 pb-4 pl-4 pr-4 mt-1 mb-1 mr-1 ml-1"
        >
          <TouchableOpacity>
            <Text className="text-center text-base font-bold">Runner</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row ">
        <View className="flex-col">
          <View
            style={{
              width: 180,
              height: 155,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center rounded-xl border-4 pt-4 pb-4 pl-4 pr-4 mt-1 mb-1 mr-1 ml-1"
          >
            <TouchableOpacity>
              <Text className="text-center  text-red-700 text-base font-bold">
                {" "}
                Fault
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 180,
              height: 155,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center rounded-xl border-4 pt-4 pb-4 pl-4 pr-4 mt-1 mb-1 mr-1 ml-1"
          >
            <TouchableOpacity>
              <Text className="text-center text-base font-bold">Ace</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 180,
            height: 310,
            borderColor: "#31da60",
            borderWidth: 4,
          }}
          className=" justify-center rounded-xl border-4 pt-4 pb-4 pl-4 pr-4 mt-1 mb-1 mr-1 ml-1"
        >
          <TouchableOpacity>
            <Text className="text-center text-red-700 text-base font-bold">
              Return Error
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
