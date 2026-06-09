import { SORT_FILTER } from "../constants";

export const sortBooks = (books, sortBy) => {
  switch (sortBy) {
    case SORT_FILTER.AUTHOR_ASC:
      return books.toSorted((book1, book2) =>        book1.author.localeCompare(book2.author),
      );
    case SORT_FILTER.AUTHOR_DESC:
      return books.toSorted((book1, book2) =>        book2.author.localeCompare(book1.author),
      );
    case SORT_FILTER.TITLE_ASC:
      return books.toSorted((book1, book2) =>        book1.title.localeCompare(book2.title),
      );
    case SORT_FILTER.TIILE_DESC:
      return books.toSorted((book1, book2) =>        book2.title.localeCompare(book1.title),
      );
    case SORT_FILTER.YEAR_ASC:
      return books.toSorted((book1, book2) =>        book1.published.localeCompare(book2.published),
      );
    case SORT_FILTER.YEAR_DESC:
      return books.toSorted((book1, book2) =>        book2.published.localeCompare(book1.published),
      );

    default:
      return books;
  }
};
