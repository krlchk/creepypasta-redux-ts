import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICreepypastaState, IStorie } from "./types";
import axios from "axios";

export const fetchStories = createAsyncThunk<IStorie[]>(
  "stories/fetchStories",
  async () => {
    const response = await axios.get<IStorie[]>(
      "http://localhost:3001/stories",
    );
    return response.data;
  },
);

const initialState: ICreepypastaState = {
  stories: [],
  filteredStories: [],
  readStories: [],
  readStorie: null,
  isModalOpen: false,
  sortingCategory: "byRatingDescending",
  searchText: "",
  status: "idle",
  error: null as string | null,
};

export const creepypastaSlice = createSlice({
  name: "creepypasta",
  initialState,
  reducers: {
    sortByName: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload.toLowerCase();
      if (!state.searchText) {
        state.filteredStories = state.stories;
      } else {
        state.filteredStories = state.stories.filter((story) =>
          story.title.toLowerCase().includes(state.searchText),
        );
      }
    },
    setSortByRatingDescending: (state) => {
      state.sortingCategory = "byRatingDescending";
      state.filteredStories = state.stories.toSorted(
        (a, b) => b.rating - a.rating,
      );
      alert("Sorted by rating descending!");
      state.isModalOpen = false;
    },
    setSortByRatingAscending: (state) => {
      state.sortingCategory = "byRatingAscending";
      state.filteredStories = state.stories.toSorted(
        (a, b) => a.rating - b.rating,
      );
      alert("Sorted by rating ascending!");
      state.isModalOpen = false;
    },
    setSortByTimeDescending: (state) => {
      state.sortingCategory = "byTimeDescending";

      state.filteredStories = state.stories.toSorted(
        (a, b) => b.readTime - a.readTime,
      );
      alert("Sorted by read time descending!");
      state.isModalOpen = false;
    },
    setSortByTimeAscending: (state) => {
      state.sortingCategory = "byTimeAscending";
      state.filteredStories = state.stories.toSorted(
        (a, b) => a.readTime - b.readTime,
      );
      alert("Sorted by read time ascending!");
      state.isModalOpen = false;
    },
    setSortFromAToZ: (state) => {
      state.sortingCategory = "fromAToZ";
      state.filteredStories = state.stories.toSorted(function (a, b) {
        const textA = a.title.toUpperCase();
        const textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      alert("Sorted by alphabet!");
      state.isModalOpen = false;
    },

    openModalWindow: (state) => {
      state.isModalOpen = true;
    },
    closeModalWindow: (state) => {
      state.isModalOpen = false;
    },
    toTheReadStorie: (state, action: PayloadAction<IStorie | undefined>) => {
      if (action.payload !== undefined) {
        state.readStorie = action.payload;
        state.readStories.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStories.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.stories = action.payload;
      state.filteredStories = action.payload;
    });
    builder.addCase(fetchStories.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error?.message || "Failed to fetch";
    });
  },
});

export const {
  setSortByRatingDescending,
  setSortByRatingAscending,
  setSortByTimeDescending,
  setSortByTimeAscending,
  toTheReadStorie,
  setSortFromAToZ,
  sortByName,
  openModalWindow,
  closeModalWindow,
} = creepypastaSlice.actions;

export default creepypastaSlice.reducer;
