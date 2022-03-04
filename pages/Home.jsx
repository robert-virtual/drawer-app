import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { useLayoutEffect } from "react";

export function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginEnd: 10 }}
          onPress={() => navigation.navigate("Cart")}
        >
          <Entypo name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
