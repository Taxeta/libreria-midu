import { ApiBook } from "../types";

export const booksMock: ApiBook[] = [
  {
    id: "01",
    title: "El Señor de los Anillos",
    pages: 1200,
    genre: "Fantasía",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    synopsis:
      "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
    year: 1954,
    ISBN: "978-0618640157",
    author: {
      name: "J.R.R. Tolkien",
      otherBooks: ["El Hobbit", "El Silmarillion"],
    },
  },
  {
    id: "02",
    title: "Juego de Tronos",
    pages: 694,
    genre: "Fantasía",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
    synopsis:
      "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
    year: 1996,
    ISBN: "978-0553103540",
    author: {
      name: "George R. R. Martin",
      otherBooks: [
        "Choque de Reyes",
        "Tormenta de Espadas",
        "Festín de Cuervos",
      ],
    },
  },
];
