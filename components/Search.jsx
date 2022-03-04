import { TouchableOpacity, TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
export function Search({ value, onChangeText, placeholder, onSubmit }) {
  return (
    <View
      style={{
        backgroundColor: "#f3f3f3f3",
        borderRadius: 20,
        padding: 2.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <EvilIcons name="search" size={18} color="black" />
      <TextInput
        style={{ padding: 2.5, borderWidth: 0 }}
        value={value}
        keyboardType="web-search"
        onChangeText={onChangeText}
        placeholder={placeholder}
        onSubmitEditing={onSubmit}
      />
      <TouchableOpacity onPress={() => onChangeText("")}>
        <EvilIcons name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
