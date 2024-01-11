import { booksMock } from "../../mocks/booksMock";
import { ApiBook } from "../../types";
import { booksReducer, loadBooksActionCreator } from "./booksSlice";

describe("Given a books slice", () => {
  describe("When it receives a loadBooks reducer and array of books", () => {
    test("Then it should return a new state with an fill books array", () => {
      interface newBooksState {
        library: { book: ApiBook }[];
      }

      const initialBooksState: newBooksState = {
        library: [],
      };
      const books = booksMock;

      const adaptedBooks = books.map((book) => ({ book }));

      const loadBooksAction = loadBooksActionCreator(adaptedBooks);

      const newBooksState = booksReducer(initialBooksState, loadBooksAction);

      const expectedState = { library: books };

      expect(newBooksState).toEqual(expectedState);
    });
  });
});
