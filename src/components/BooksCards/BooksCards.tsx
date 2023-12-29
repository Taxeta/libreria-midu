import { ApiBook } from "../../types";
import "./BooksCards.css";

interface BooksCardsProps {
  book: Partial<ApiBook>;
}

const BooksCards = ({
  book: { id, genre, pages, ISBN, synopsis, title, year, cover, author },
}: BooksCardsProps): React.ReactElement => {
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
          <button className="solid-button">Añadir lista lectura</button>
        </div>
      </div>
      <span className="card__description">{synopsis}</span>
    </article>
  );
};

export default BooksCards;
