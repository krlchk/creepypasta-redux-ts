import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICreepypastaState, IStorie } from "./types";
import axios from "axios";

export const fetchStories = createAsyncThunk<IStorie[]>(
  "stories/fetchStories",
  async () => {
    const response = await axios.get<IStorie[]>(
      "http://localhost:8000/stories",
    );
    return response.data;
  },
);

const initialState: ICreepypastaState = {
  stories: [],
  status: "idle",
  error: null as string | null,
};

export const creepypastaSlice = createSlice({
  name: "creepypasta",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStories.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.stories = action.payload;
    });
    builder.addCase(fetchStories.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error?.message || "Failed to fetch";
    });
  },
});

export const {
  //tbtb
} = creepypastaSlice.actions;

export default creepypastaSlice.reducer;
