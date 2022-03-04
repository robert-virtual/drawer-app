import { FlatList, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { useEffect, useLayoutEffect, useState } from "react";
import { Character, Search } from "../components";
import { api_url } from "../App";
import axios from "axios";
function filterFun({ name }, search = "") {
  return name.toLowerCase().includes(search.toLowerCase());
}
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
  function showResult() {
    alert(search);
  }

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(api_url);
      setCharacters(data.results);
      setSearchable(data.results);
    })();
  }, []);

  const [characters, setCharacters] = useState([{ name: "" }]);
  const [searchable, setSearchable] = useState([{ name: "" }]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (!search) {
      return setSearchable(characters);
    }
    setSearchable((items) => items.filter((e) => filterFun(e, search)));
  }, [search]);
  function openCharacter(character) {
    return (e) => {
      navigation.navigate("Character", character);
    };
  }
  return (
    <View style={styles.container}>
      <Search
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar..."
        onSubmit={showResult}
      />
      <FlatList
        keyExtractor={(e) => e.id}
        data={searchable}
        ItemSeparatorComponent={() => (
          <View
            style={{ height: 2, backgroundColor: "#f3f3f3", width: "100%" }}
          />
        )}
        renderItem={({ item }) => (
          <Character onPress={openCharacter(item)} character={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  },
});
