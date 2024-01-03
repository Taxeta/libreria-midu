import PendingBooks from "../../components/PendingBooks/PendingBooks";

const ReadingList = (): React.ReactElement => {
  return (
    <section>
      <h2>Tú lista de lectura</h2>
      <PendingBooks />
    </section>
  );
};

export default ReadingList;
