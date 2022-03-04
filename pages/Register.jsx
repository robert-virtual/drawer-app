import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Main");
        }}
      />

      <TouchableOpacity
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text>Login</Text>
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
