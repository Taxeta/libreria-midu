import { useCallback, useEffect } from "react";
import useLibraryApi from "../../hooks/useLibraryApi";
import { useAppDispatch } from "../../store";
import { loadBooksActionCreator } from "../../store/books/booksSlice";

const LibraryPage = (): React.ReactElement => {
  const { getBooks } = useLibraryApi();
  const dispatch = useAppDispatch();

  const loadLibraryPage = useCallback(async () => {
    const booksData = await getBooks();
    dispatch(loadBooksActionCreator(booksData));
  }, [getBooks, dispatch]);

  useEffect(() => {
    loadLibraryPage();
  });

  return (
    <section>
      <h2>List of Books</h2>
    </section>
  );
};

export default LibraryPage;