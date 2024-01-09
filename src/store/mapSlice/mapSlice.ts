import { createSlice } from "@reduxjs/toolkit";
import { apiMapState } from "../types";

const apiLoadState: apiMapState = {
  isApiLoaded: false,
};

const mapSlice = createSlice({
  name: "map",
  initialState: apiLoadState,
  reducers: {
    setApiLoaded: (state) => {
      state.isApiLoaded = true;
    },
  },
});

export const mapReducer = mapSlice.reducer;
export const { setApiLoaded: setApiLoadedActionCreator } = mapSlice.actions;
