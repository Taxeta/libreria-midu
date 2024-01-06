import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiState } from "../types";

const storedUiState = localStorage.getItem("uiState");
const initialUiState: UiState = storedUiState
  ? JSON.parse(storedUiState)
  : {
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

      localStorage.setItem("uiState", JSON.stringify(state));
    },
    removeBookPendingList: (state, action: PayloadAction<string>) => {
      state.pendingBooks = state.pendingBooks.filter(
        (id) => id !== action.payload,
      );
      localStorage.setItem("uiState", JSON.stringify(state));
    },
    setPendingBooks: (state, action: PayloadAction<string[]>) => {
      state.pendingBooks = action.payload;

      localStorage.setItem("uiState", JSON.stringify(state));
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  setSearchText: setSearchTextActionCreator,
  addBookPendingList: addBookPendingListActionCreator,
  removeBookPendingList: removeBookPendingListActionCreator,
  setPendingBooks: setPendingBooksActionCreator,
} = uiSlice.actions;
