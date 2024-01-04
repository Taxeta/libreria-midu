import { useDispatch } from "react-redux";
import PendingBooks from "../../components/PendingBooks/PendingBooks";
import { useEffect } from "react";
import { setPendingBooksActionCreator } from "../../store/ui/ui";
import "./ReadingList.css";

const ReadingList = (): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedPendingBooks = sessionStorage.getItem("pendingBooks");
    if (storedPendingBooks) {
      const parsedPendingBooks = JSON.parse(storedPendingBooks);
      dispatch(setPendingBooksActionCreator(parsedPendingBooks));
    }
  }, [dispatch]);

  return (
    <section className="reading-list">
      <h2 className="list__title">Tú lista de lectura</h2>
      <PendingBooks />
    </section>
  );
};

export default ReadingList;
