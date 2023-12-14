import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { supabase } from "./lib/supabase_module"; // Import your Supabase client

const OTPLoginComponent = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  const handleVerification = async () => {
    try {
      const { error } = await supabase.auth.verifyOTP({
        phone: "+923335985575", // Replace with your phone number
        otp,
      });

      if (error) {
        Alert.alert("Error", error.message);
      } else {
        navigation.navigate("Home"); // Redirect to the home screen after successful verification
      }
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
    }
  };

  return (
    <View>
      <Text>Enter OTP:</Text>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={(text) => setOtp(text)}
      />
      <Button title="Verify OTP" onPress={handleVerification} />
    </View>
  );
};

export default OTPLoginComponent;
