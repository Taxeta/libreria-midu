import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import "./PendingBooks.css";

const PendingBooks = (): React.ReactElement => {
  const pendingBooks = useSelector(
    (state: RootState) => state.uiState.pendingBooks,
  );
  const books = useSelector((state: RootState) => state.booksState.library);

  const filteredBooks = pendingBooks.map((id) => {
    const bookDetails = books.find((book) => book.id === id);
    return bookDetails;
  });

  const booksToRead = filteredBooks.length;

  useEffect(() => {
    const pendingBooksId = JSON.stringify(pendingBooks);
    sessionStorage.setItem("pendingBooks", pendingBooksId);
  }, [pendingBooks]);

  return (
    <section className="pending-book">
      <span className="book-counter">Libros por leer: {booksToRead}</span>
      <ul className="books-data">
        {filteredBooks.map((book) => (
          <li className="books-container" key={book?.id}>
            <span>#{book?.id}</span>
            <span className="book__title">{book?.title}</span>
            <span>{book?.author?.name}</span>
            <img
              className="book__image"
              src={book?.cover}
              alt={book?.title}
              width="30%"
              height="30%"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PendingBooks;
