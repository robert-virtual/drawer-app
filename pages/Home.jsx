import { Button, StyleSheet, Text, View } from "react-native";

export function Home({ navigation }) {
  function navegar() {
    navigation.navigate("Ajustes");
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Ajuetes" onPress={navegar} />
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
