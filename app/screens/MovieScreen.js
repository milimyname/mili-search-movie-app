import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";

/*
 * Movie Section displays all info about a movie.
 *
 */

const MovieScreen = ({ navigation }) => {
  const [movie] = useSelector((state) => state.movie.movies);
  return (
    <View style={styles.movieContainer}>
      <View style={styles.moviePlay}>
        <Image
          style={styles.poster}
          source={{
            uri: `${movie["Poster"]}`,
          }}
        />
        <Icon
          style={styles.iconPlayArrow}
          name="play-outline"
          type="ionicon"
          color="#ffffff"
        />
      </View>
      <View style={styles.movieInfo}>
        <Text style={styles.title}>{movie["Title"]}</Text>
        <Text style={styles.desc}>{movie["Plot"]}</Text>
        <View style={styles.country}>
          <View style={styles.countriesTag}>
            <Text style={styles.tagStyle}>Countries</Text>
          </View>
          <Text>{movie["Country"]}</Text>
        </View>
        <View style={styles.country}>
          <View style={styles.countriesTag}>
            <Text style={styles.tagStyle}>Languages</Text>
          </View>
          <Text>{movie["Language"]}</Text>
        </View>
        <View style={styles.country}>
          <View style={styles.countriesTag}>
            <Text style={styles.tagStyle}>Genre</Text>
          </View>
          <Text>{movie["Genre"]}</Text>
        </View>
        <View style={styles.country}>
          <View style={styles.countriesTag}>
            <Text style={styles.tagStyle}>Box Office</Text>
          </View>
          <Text>{movie["BoxOffice"]}</Text>
        </View>
        <View style={styles.country}>
          <View style={styles.countriesTag}>
            <Text style={styles.tagStyle}>Director</Text>
          </View>
          <Text>{movie["Director"]}</Text>
        </View>
        <View style={styles.country}>
          <View style={styles.countriesTag}>
            <Text style={styles.tagStyle}>Actors</Text>
          </View>
          <Text>{movie["Actors"]}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
  },
  moviePlay: {
    // position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  poster: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "170%",
    width: "100%",
  },
  iconPlayArrow: {
    backgroundColor: "rgba(243, 145, 137, .6)",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 75,
  },
  movieInfo: {
    display: "flex",
    marginTop: "25%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    alignSelf: "flex-start",
  },
  desc: {
    fontSize: 16,
    marginTop: 10,
  },
  country: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  countriesTag: {
    backgroundColor: "#F39189",
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 10,
  },
  tagStyle: { fontWeight: "400", color: "#ffffff" },
});

export default MovieScreen;
