import { useSelector } from "react-redux";
import readingList from "../../assets/archivos.png";
import "./BooksCounter.css";
import { RootState } from "../../store";
import { NavLink } from "react-router-dom";
import paths from "../../paths/paths";
import { scrollToTop } from "../ScrollToTop/ScrollToTop";

const BooksCounter = (): React.ReactElement => {
  const pendingBooks = useSelector(
    (state: RootState) => state.uiState.pendingBooks,
  );
  const books = useSelector((state: RootState) => state.booksState.library);

  const filteredBooks = pendingBooks.map((id) => {
    const bookDetails = books.find((book: { id: string }) => book.id === id);
    return bookDetails;
  });

  const booksToRead = filteredBooks.length;
  return (
    <section className="counter-books">
      <NavLink to={paths.readingList} onClick={scrollToTop}>
        <img className="counter-image" src={readingList} alt="lista lectura" />
      </NavLink>
      <span>{booksToRead}</span>
    </section>
  );
};

export default BooksCounter;
