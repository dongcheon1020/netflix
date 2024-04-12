import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewOn: false,
};

export const stateSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    viewReview: (state) => {
      state.reviewOn = !state.reviewOn;
    },
  },
});

export const { viewReview } = stateSlice.actions;
export default stateSlice.reducer;
