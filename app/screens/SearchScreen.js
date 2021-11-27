import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { addTitle, addMovies } from "../state/movieSlice";

/*
 * The Search screen is for search a movie by title and display them.
 */

const SearchScreen = ({ navigation }) => {
  // Title and Movies will be called from the Redux store
  const title = useSelector((state) => state.movie.title);
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  // Check if there's a movie in API and save it in the redux store
  useEffect(async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=a2a1ab79&t=${title
        .toLowerCase()
        .replace(" ", "-")}`
    );
    const data = await res.json();
    if (data["Error"]) return;
    dispatch(addMovies(data));
  }, [title]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.primaryHeading}>
          Find Movies, TV Shows and more...
        </Text>
        {/* Customized the Searchbar */}
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
          inputStyle={{ backgroundColor: "#F39189", color: "#fff" }}
          placeholder="Search a movie..."
          placeholderTextColor="rgba(0,0,0, .2)"
          onChangeText={(e) => dispatch(addTitle(e))}
          value={title}
        />
      </View>
      {movies.length > 0 && (
        <View style={styles.movie}>
          <Image
            style={styles.poster}
            source={{
              uri: `${movies[0]["Poster"]}`,
            }}
          />
          <View style={styles.movieInfo}>
            <Text style={styles.secondaryHeading}>{movies[0]["Title"]}</Text>
            <Text style={styles.released}>{movies[0]["Released"]}</Text>
            <Text style={styles.ratings}>
              {movies[0]["Ratings"].map(
                (rating) =>
                  `${
                    rating["Source"] === "Internet Movie Database"
                      ? "IMDb"
                      : "RT"
                  }: ${rating["Value"]}  `
              )}
            </Text>
            <Text style={styles.genre}>Genre: {movies[0]["Genre"]}</Text>
            <Text style={styles.actors}>Actors: {movies[0]["Actors"]}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Movie")}
              style={styles.btnLearnMore}
            >
              <Text style={styles.textLearnMore}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginHorizontal: 20,
    marginTop: 80,
    // overflow: "hidden",
  },
  primaryHeading: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
  },
  movie: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 0,
  },
  poster: {
    height: 200,
    width: 150,
    borderRadius: 10,
    marginRight: 20,
  },
  movieInfo: {
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
  },
  secondaryHeading: {
    fontSize: 20,
    fontWeight: "700",
    width: "80%",
    marginBottom: 10,
  },
  released: { marginBottom: 5 },
  ratings: {
    fontWeight: "600",
    marginBottom: 5,
  },
  genre: {
    marginBottom: 5,
  },
  btnLearnMore: {
    backgroundColor: "#F39189",
    borderRadius: 10,
    alignSelf: "flex-end",
    marginTop: "auto",
    marginRight: "10%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textLearnMore: {
    color: "#ffffff",
    fontWeight: "600",
  },
});

export default SearchScreen;
