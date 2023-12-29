import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiState } from "../types";

const initialUiState: UiState = {
  searchText: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setSearchText: (currentUiState: UiState, action: PayloadAction<string>) => {
      currentUiState.searchText = action.payload;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const { setSearchText: setSearchTextActionCreator } = uiSlice.actions;
