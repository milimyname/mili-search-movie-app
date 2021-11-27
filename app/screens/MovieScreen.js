import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
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
      <View></View>
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
    backgroundColor: "rgba(0,0,0, .6)",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 75,
  },
});

export default MovieScreen;
