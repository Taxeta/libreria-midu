import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BooksState } from "../types.ts";
import { ApiBook } from "../../types.ts";

const initialBooksState: BooksState = {
  library: [],
};

const storedBooksState = localStorage.getItem("booksState");
const proloadBooksState = storedBooksState
  ? JSON.parse(storedBooksState)
  : initialBooksState;

const booksSlice = createSlice({
  name: "library",
  initialState: proloadBooksState,
  reducers: {
    loadBooks: (
      currentBooksState,
      action: PayloadAction<{ book: ApiBook }[]>,
    ): BooksState => {
      const newBooks = action.payload.map((libraryItem) => libraryItem.book);

      const updatedBooksState = {
        ...currentBooksState,
        library: [...currentBooksState.library, ...newBooks],
      };
      localStorage.setItem("booksState", JSON.stringify(updatedBooksState));

      return updatedBooksState;
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const { loadBooks: loadBooksActionCreator } = booksSlice.actions;
