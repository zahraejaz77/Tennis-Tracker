import { View, Text } from "react-native";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";

export default function DropDown() {
  const [selectedValue, setSelectedValue] = useState(null);
  const placeholder = {
    label: "Select an option...",
    value: null,
  };
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <View>
      <Text className="text-lg">Select an option:</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      {selectedValue && (
        <Text className="text-lg">Selected: {selectedValue}</Text>
      )}
    </View>
  );
}
