import { useAppSelector } from "../../store";
import BooksCards from "../BooksCards/BooksCards";

const BooksList = (): React.ReactElement => {
  const libraries = useAppSelector((state) => state.booksState.library);

  const renderedIds = new Set<string>();
  return (
    <ul>
      {libraries.map((library) => {
        if (renderedIds.has(library.id)) {
          return null;
        }
        renderedIds.add(library.id);
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
