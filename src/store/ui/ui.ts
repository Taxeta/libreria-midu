import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiState } from "../types";

const initialUiState: UiState = {
  searchText: "",
  pendingBooks: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setSearchText: (currentUiState: UiState, action: PayloadAction<string>) => {
      currentUiState.searchText = action.payload;
    },
    addBookPendingList: (state, action: PayloadAction<string>) => {
      state.pendingBooks.push(action.payload);
    },
    removeBookPendingList: (state, action: PayloadAction<string>) => {
      state.pendingBooks = state.pendingBooks.filter(
        (id) => id !== action.payload,
      );
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  setSearchText: setSearchTextActionCreator,
  addBookPendingList: addBookPendingListActionCreator,
  removeBookPendingList: removeBookPendingListActionCreator,
} = uiSlice.actions;
