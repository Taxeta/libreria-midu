import { useCallback, useEffect } from "react";
import useLibraryApi from "../../hooks/useLibraryApi";
import { useAppDispatch } from "../../store";
import { loadBooksActionCreator } from "../../store/books/booksSlice";
import BooksList from "../../components/BooksList/BooksList";

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
    <section>
      <h2>List of Books</h2>
      {<BooksList />}
    </section>
  );
};

export default LibraryPage;
