import React, { useEffect, useState } from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [movie, SetMovie] = useState();

  // Just check how to fetch a data from the API
  useEffect(async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=a2a1ab79&t=harry-potter`
    );
    const data = await res.json();
    SetMovie(data);
  }, []);

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Text>{movie["Actors"]}</Text>
      </View>
      {/* <Route exact path="/" component={Home} /> */}
    </NativeRouter>
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
