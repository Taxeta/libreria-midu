import { ApiBook } from "../types";

export interface BooksState {
  library: ApiBook[];
}

export interface UiState {
  searchText: string;
  pendingBooks: string[];
}

export interface apiMapState {
  isApiLoaded: boolean;
}
