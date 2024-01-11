import { BrowserRouter } from "react-router-dom";
import BooksCards from "./BooksCards";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { setupStore } from "../../store";
import { booksMock } from "../../mocks/booksMock";
import { BooksState } from "../../store/types";

describe("Given a BookCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a book with title 'El Señor de los Anillos'", () => {
      const headingText = /Juego de Tronos/i;
      const id = /02/i;
      const author = /George R. R. Martin/i;
      const genre = /Fantasía/i;
      const year = /1996/i;

      const initialState: BooksState = {
        library: booksMock,
      };

      const store = setupStore({ booksState: initialState });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BooksCards book={booksMock[1]} />
          </Provider>
        </BrowserRouter>,
      );

      const titleText = screen.getByRole("heading", { name: headingText });
      const idBook = screen.getByText(id);
      const authorBook = screen.getByText(author);
      const genreBook = screen.getByText(genre);
      const yearBook = screen.getByText(year);

      expect(titleText).toBeInTheDocument();
      expect(idBook).toBeInTheDocument();
      expect(genreBook).toBeInTheDocument();
      expect(authorBook).toBeInTheDocument();
      expect(yearBook).toBeInTheDocument();
    });
  });
});
