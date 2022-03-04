import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export function LogoTitle({ style }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        ...style,
      }}
    >
      <FontAwesome5 name="rocketchat" size={24} color="black" />
      <Text style={{ marginStart: 10, fontWeight: "bold" }}>Logo</Text>
    </View>
  );
}
