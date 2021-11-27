import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieTitle: "",
};

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    addMovieTitle: (state, action) => {
      state.movieTitle = action.payload.title;
    },
  },
});

export const { addMovieTitle } = movieSlice.actions;

export default movieSlice.reducer;
