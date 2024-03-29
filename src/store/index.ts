import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { booksReducer } from "./books/booksSlice";
import { uiReducer } from "./ui/ui";
import { mapReducer } from "./mapSlice/mapSlice";
import { BooksState } from "./types";

const rootReducer = combineReducers({
  booksState: booksReducer,
  uiState: uiReducer,
  mapState: mapReducer,
});

export const setupStore = (preloadedState?: { booksState?: BooksState }) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
