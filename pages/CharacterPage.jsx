import { StyleSheet, Text, Image, View } from "react-native";

export function CharacterPage({ route }) {
  const { gender, created, name, image, species, status } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={{ borderRadius: 20, width: 150, height: 150 }}
      />
      <Text style={{ fontSize: 15 }}>{species}</Text>
      <Text style={{ color: "gray" }}>{status}</Text>
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <Text style={{ color: "gray" }}>{gender}</Text>
      <Text style={{ color: "gray" }}>
        {new Date(created).toLocaleDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
