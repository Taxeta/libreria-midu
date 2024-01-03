import { useDispatch, useSelector } from "react-redux";
import { ApiBook } from "../../types";
import "./BooksCards.css";
import { RootState } from "../../store/index";
import {
  addBookPendingListActionCreator,
  removeBookPendingListActionCreator,
} from "../../store/ui/ui";

interface BooksCardsProps {
  book: Partial<ApiBook>;
}

const BooksCards = ({
  book: { id, genre, pages, ISBN, synopsis, title, year, cover, author },
}: BooksCardsProps): React.ReactElement => {
  const dispatch = useDispatch();

  const isBookPendingList = useSelector((state: RootState) =>
    state.uiState.pendingBooks.includes(id!),
  );

  const handleAddPending = () => {
    dispatch(addBookPendingListActionCreator(id!));
  };

  const handleRemovePending = () => {
    dispatch(removeBookPendingListActionCreator(id!));
  };

  return (
    <article className="card-content">
      <div className="card__title">
        <span className="card__number">#{id}</span>
        <h2 className="card__book-title">{title}</h2>
      </div>
      <div className="card__data">
        <img
          className="card__image"
          src={cover}
          alt={`${title} book`}
          width="35%"
          height="35%"
        />
        <div className="card__especifies">
          <span>{author?.name}</span>
          <span>{author?.otherBooks.join(`, `)}</span>
          <span>{genre}</span>
          <span>{year}</span>
          <span>Pages: {pages}</span>
          <span>BookId: {ISBN}</span>
          {isBookPendingList ? (
            <button className="solid-button" onClick={handleRemovePending}>
              Quitar lista lectura
            </button>
          ) : (
            <button className="solid-button" onClick={handleAddPending}>
              Añadir lista lectura
            </button>
          )}
        </div>
      </div>
      <span className="card__description">{synopsis}</span>
    </article>
  );
};

export default BooksCards;
