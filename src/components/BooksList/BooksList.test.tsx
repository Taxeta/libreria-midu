import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import BooksList from "./BooksList";
import { setupStore } from "../../store";
import { BooksState } from "../../store/types";
import { booksMock } from "../../mocks/booksMock";

describe("Given a BookList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a book with title 'El Señor de los Anillos'", () => {
      const headingText = /El Señor de los Anillos/i;

      const initialState: BooksState = {
        library: booksMock,
      };

      const store = setupStore({ booksState: initialState });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BooksList />
          </Provider>
        </BrowserRouter>,
      );

      const titleText = screen.getByRole("heading", { name: headingText });

      expect(titleText).toBeInTheDocument();
    });
  });
});
