import { configureStore } from "@reduxjs/toolkit";
import creepypastaReducer from "../components/store/slices";

export const store = configureStore({
  reducer: {
    creepypasta: creepypastaReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
