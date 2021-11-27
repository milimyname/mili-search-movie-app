import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    addMovies: (state, action) => {
      state.movies = [action.payload];
    },
  },
});

export const { addTitle, addMovies } = movieSlice.actions;

export default movieSlice.reducer;
