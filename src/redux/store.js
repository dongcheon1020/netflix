import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./reducer";

export const store = configureStore({
  reducer: {
    review: reviewReducer,
  },
});
