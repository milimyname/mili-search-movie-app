import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "./app/screens/SearchScreen";

export default function App() {
  const [movie, SetMovie] = useState();

  // Just check how to fetch a data from the API
  useEffect(async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=a2a1ab79&t=harry-potter`
    );
    const data = await res.json();
    SetMovie(data);
    console.log(movie["Actors"]);
  }, []);

  return <SearchScreen movie={movie} />;
}
