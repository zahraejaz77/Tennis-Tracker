import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import OTPScreen from "./Screens/OTPScreen";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import PhoneNumberScreen from "./Screens/PhoneNumberScreen";

export default function App() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="auto" />
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 40 : 0,
          flex: 1,
        }}
        className="flex flex-1"
      >
        <View className="mx-4 relative z-40 justify-between h-auto">
          <HomeScreen />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </View>
  );
}
