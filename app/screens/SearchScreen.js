import React, { useEffect, useState } from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { SearchBar } from "react-native-elements";

/*
 * The Search screen is for search a movie by title and display them.
 */

const SearchScreen = ({ movie }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.primaryHeading}>
          Find Movies, TV Shows and more...
        </Text>
        <SearchBar
          containerStyle={{
            backgroundColor: "#F39189",
            borderRadius: 10,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
          inputContainerStyle={{
            backgroundColor: "#F39189",
          }}
          searchIcon={{ color: "#ffffff" }}
          clearIcon={{ color: "#ffffff" }}
          inputStyle={{ backgroundColor: "#F39189" }}
          placeholder="Search a movie..."
          placeholderTextColor="#ffffff"
          // onChangeText={()=> }
        />
      </View>
      {/* <View>{movie["Actors"]}</View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  primaryHeading: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
  },
});

export default SearchScreen;
