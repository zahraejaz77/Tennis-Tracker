import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import OTPScreen from "./Screens/OTPScreen";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import PhoneNumberScreen from "./Screens/PhoneNumberScreen";
import Slider1 from "./Screens/Slider1";
import Slider2 from "./Screens/Slider2";
import Slider3 from "./Screens/Slider3";

export default function App() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="auto" />
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 38 : 0,
          flex: 1,
        }}
        className="flex flex-1"
      >
        <View className="relative z-40 justify-between h-auto">
          <Slider3></Slider3>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </View>
  );
}
