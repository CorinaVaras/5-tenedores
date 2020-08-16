import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { SearchBar, Icon, ListItem } from "react-native-elements";

const Search = (props) => {
  const { navigation } = props;
  const [search, setSearch] = useState("");

  return (
    <View>
      <SearchBar
        placeholder="Busca tu restaurante..."
        onChangeText={(e) => setSearch(e)}
        value={search}
        containerStyle={styles.searchBar}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 20,
  },
});
