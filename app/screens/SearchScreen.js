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
 * The Search screen is for search a movie by title.
 */

const SearchScreen = ({ movie }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  primaryHeading: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
  },
});

export default SearchScreen;
