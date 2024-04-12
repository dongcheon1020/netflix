import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewOn: false,
  videoOn: false,
};

export const stateSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    viewReview: (state) => {
      state.reviewOn = !state.reviewOn;
    },
    movieVideo: (state, action) => {
      state.videoOn = action.payload;
    },
  },
});

export const { viewReview, movieVideo } = stateSlice.actions;
export default stateSlice.reducer;
