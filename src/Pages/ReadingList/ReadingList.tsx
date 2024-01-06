import PendingBooks from "../../components/PendingBooks/PendingBooks";
import "./ReadingList.css";

const ReadingList = (): React.ReactElement => {
  return (
    <section className="reading-list">
      <h2 className="list__title">Tú lista de lectura</h2>
      <PendingBooks />
    </section>
  );
};

export default ReadingList;
