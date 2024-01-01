import { ScrollView } from "react-native";

const ScreenContainer = ({ children, className }) => {
  return <ScrollView className={className}>{children}</ScrollView>;
};

export default ScreenContainer;
