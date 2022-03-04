import { TouchableOpacity, Button, Text, StyleSheet, View } from "react-native";

export function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Main");
        }}
      />

      <TouchableOpacity
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text>Register</Text>
      </TouchableOpacity>
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
