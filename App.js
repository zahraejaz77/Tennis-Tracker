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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Matches from "./Screens/Matches";
import PlayerScreen from "./Screens/PlayerScreen";
import MoreScreen from "./Screens/MoreScreen";
import TrackMatch from "./Screens/TrackMatch";
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = "md-home-outline";
          } else if (route.name === "Matches") {
            iconName = "md-calendar-outline";
          }
          if (route.name === "Players") {
            iconName = "md-people-outline";
          } else if (route.name === "More") {
            iconName = "md-options-outline";
          }
          if (route.name === "Track Match") {
            iconName = "browsers-sharp";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={"white"} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "#31DA60",
        tabBarInactiveBackgroundColor: "#31DA60",
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        screenOptions={{ headerShown: false }}
      />
      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Players"
        component={PlayerScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Track Match"
        component={TrackMatch}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Slider1"
          component={Slider1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Slider2"
          component={Slider2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Slider3"
          component={Slider3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhoneNumberScreen"
          component={PhoneNumberScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    /*<View className="flex-1 relative">
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? 38 : 0,
            flex: 1,
          }}
          className="flex flex-1"
        >
          <View className="relative z-40 justify-between h-auto">

            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
        </View> */
  );
}
