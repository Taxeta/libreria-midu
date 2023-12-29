import { useAppSelector } from "../../store";
import BooksCards from "../BooksCards/BooksCards";
import "./BooksList.css";

const BooksList = (): React.ReactElement => {
  const libraries = useAppSelector((state) => state.booksState.library);

  const bookRepeatedId = new Set<string>();

  return (
    <ul className="content-list">
      {libraries.map((library) => {
        if (bookRepeatedId.has(library.id)) {
          return null;
        }
        bookRepeatedId.add(library.id);
        return (
          <li className="book-content" key={library.id}>
            <BooksCards book={library} />
          </li>
        );
      })}
    </ul>
  );
};

export default BooksList;
