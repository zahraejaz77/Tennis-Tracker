import { View, Text } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

export default function DropDownSelect() {
  const [selectedValue, setSelectedValue] = useState("");
  const data = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <View>
      <SelectList data={data} setSelected={setSelectedValue}></SelectList>
    </View>
  );
}
