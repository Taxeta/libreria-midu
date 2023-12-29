import { useCallback } from "react";
import { LibraryItem } from "../types.ts";

interface LibraryApi {
  getBooks: () => Promise<LibraryItem[]>;
}

const useLibraryApi = (): LibraryApi => {
  const apiUrl = "/data/books.json";

  const getBooks = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);

      const data = await response.json();

      return data.library;
    } catch {
      throw new Error("Can't get any book");
    }
  }, [apiUrl]);

  return { getBooks };
};

export default useLibraryApi;
