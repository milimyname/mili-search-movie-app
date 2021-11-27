import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./app/state/store";
import SearchScreen from "./app/screens/SearchScreen";
import MovieScreen from "./app/screens/MovieScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen name="Movie" component={MovieScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
