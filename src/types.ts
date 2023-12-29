export interface LibraryItem {
  book: ApiBook;
}

export interface ApiBook {
  id: string;
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  };
}
