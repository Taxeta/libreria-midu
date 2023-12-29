import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BooksState } from "../types.ts";
import { ApiBook } from "../../types.ts";

const initialBooksState: BooksState = {
  library: [],
};

const booksSlice = createSlice({
  name: "library",
  initialState: initialBooksState,
  reducers: {
    loadBooks: (
      currentBooksState,
      action: PayloadAction<{ book: ApiBook }[]>,
    ): BooksState => {
      const newBooks = action.payload.map((libraryItem) => libraryItem.book);

      return {
        ...currentBooksState,
        library: [...currentBooksState.library, ...newBooks],
      };
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const { loadBooks: loadBooksActionCreator } = booksSlice.actions;
