import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BooksState } from "../types";
import { LibraryItem } from "../../types";

const initialBooksState: BooksState = {
  library: [],
};

const booksSlice = createSlice({
  name: "library",
  initialState: initialBooksState,
  reducers: {
    loadBooks: (
      currentBooksState,
      action: PayloadAction<LibraryItem[]>,
    ): BooksState => {
      const unitBook = action.payload.filter((book) => {
        return !currentBooksState.library.some(
          (hasBook) => hasBook.book.id === book.book.id,
        );
      });

      return {
        ...currentBooksState,
        library: [...currentBooksState.library, ...unitBook],
      };
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const { loadBooks: loadBooksActionCreator } = booksSlice.actions;
