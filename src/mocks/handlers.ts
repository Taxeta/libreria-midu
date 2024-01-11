import { booksMock } from "./booksMock";
import { HttpResponse, http } from "msw";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_PUBLIC_URL}/data/books.json`, () => {
    return HttpResponse.json({ books: booksMock });
  }),
];

export const errorHandlers = [
  http.get(`${import.meta.env.VITE_API_PUBLIC_URL}/data/books.json`, () => {
    return HttpResponse.json(
      { error: "Can't receive the book" },
      { status: 404 },
    );
  }),
];
