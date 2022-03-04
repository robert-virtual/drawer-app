import { useState, useEffect } from "react";
import {
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initItems = async () => {
  let items = [];
  let string = await AsyncStorage.getItem("items");
  if (string) {
    items = JSON.parse(string);
  }
  return items;
};

export function Ajustes() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      setItems(await initItems());
    })();
    console.log(items);
  }, []);

  async function guardar() {
    if (!key || !value) {
      return alert("Falta datos");
    }
    await AsyncStorage.setItem(key, value);
    guardarItems();
    return alert("informacion guardada");
  }
  async function guardarItems() {
    setItems([...items, { key, value }]);
  }
  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem("items", JSON.stringify(items));
    })();
  }, [items]);
  return (
    <View style={styles.container}>
      <TextInput
        value={key}
        onChangeText={setKey}
        style={styles.input}
        placeholder="clave"
      />
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder="valor"
      />
      <Button title="Guardar" onPress={guardar} />
      <Text style={{ marginTop: 20, fontSize: 25 }}>Lista</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.input}>
            <Text>{item.key}</Text>
            <Text>{item.value}</Text>
          </View>
        )}
      />
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
  input: {
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#F7F7F7",
    padding: 10,
  },
});
