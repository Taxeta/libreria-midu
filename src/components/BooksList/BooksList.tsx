import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";
import BooksCards from "../BooksCards/BooksCards";
import "./BooksList.css";
import { setSearchTextActionCreator } from "../../store/ui/ui";
import { ApiBook } from "../../types";

const BooksList = (): React.ReactElement => {
  const dispatch = useDispatch();
  const libraries = useAppSelector((state) => state.booksState.library);
  const searchBook = useAppSelector((state) => state.uiState.searchText);

  const bookRepeatedId = new Set<string>();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    dispatch(setSearchTextActionCreator(searchText.toLowerCase()));
  };

  const filterBooks = searchBook
    ? libraries.filter(
        (library: { title?: string }) =>
          library &&
          library.title &&
          library.title.toLowerCase().includes(searchBook),
      )
    : libraries;

  return (
    <div className="container-list">
      <input
        type="text"
        value={searchBook}
        onChange={handleSearchChange}
        placeholder="Busca un libro..."
        className="search-book--input"
      />
      <ul className="content-list">
        {filterBooks.map((library: Partial<ApiBook> | null) => {
          if (!library || !library.id || bookRepeatedId.has(library.id)) {
            return null;
          }
          bookRepeatedId.add(library.id!);
          return (
            <li className="book-content" key={library.id}>
              <BooksCards book={library} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksList;
