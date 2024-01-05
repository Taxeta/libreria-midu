import { useCallback, useEffect } from "react";
import useLibraryApi from "../../hooks/useLibraryApi";
import { useAppDispatch } from "../../store";
import { loadBooksActionCreator } from "../../store/books/booksSlice";
import BooksList from "../../components/BooksList/BooksList";
import "./LibraryPage.css";

const LibraryPage = (): React.ReactElement => {
  const { getBooks } = useLibraryApi();
  const dispatch = useAppDispatch();

  const loadLibraryPage = useCallback(async () => {
    const booksData = await getBooks();
    dispatch(loadBooksActionCreator(booksData));
  }, [getBooks, dispatch]);

  useEffect(() => {
    loadLibraryPage();
  }, [loadLibraryPage]);

  return (
    <section className="list-container">
      <h2 className="list__title">Lista de libros</h2>
      <BooksList />
    </section>
  );
};

export default LibraryPage;
