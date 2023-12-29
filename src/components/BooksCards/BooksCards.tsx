import { ApiBook } from "../../types";

interface BooksCardsProps {
  book: Partial<ApiBook>;
}

const BooksCards = ({
  book: { id, genre, pages, ISBN, synopsis, title, year, cover, author },
}: BooksCardsProps): React.ReactElement => {
  return (
    <article>
      <span>#{id}</span>
      <h2>{title}</h2>
      <img src={cover} alt={`${title} book`} width={80} height={80} />
      <span>{year}</span>
      <span>{author?.name}</span>
      <span>{author?.otherBooks}</span>
      <span>{genre}</span>
      <span>{pages}</span>
      <span>{ISBN}</span>
      <span>{synopsis}</span>
    </article>
  );
};

export default BooksCards;
