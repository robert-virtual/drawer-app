import { View, Image, Text, TouchableOpacity } from "react-native";

export function Character({
  onPress,
  character: { gender, created, name, image, species, status },
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 5,
        marginVertical: 5,
        flexDirection: "row",
      }}
    >
      <Image
        source={{ uri: image }}
        style={{ borderRadius: 20, width: 150, height: 150 }}
      />
      <View style={{ marginStart: 5, justifyContent: "space-between" }}>
        <Text style={{ fontSize: 15 }}>{species}</Text>
        <Text style={{ color: "gray" }}>{status}</Text>
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <Text style={{ color: "gray" }}>{gender}</Text>
        <Text style={{ color: "gray" }}>
          {new Date(created).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
