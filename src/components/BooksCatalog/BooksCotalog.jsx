import Book from "./Book";
import styles from "./BooksCatalog.module.scss";
import { getBooksWord } from "../../utils/getPluralForm";

const BooksCotalog = (props) => {
  const { books, isPending, error } = props;

  if (isPending) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <>
      <p>За вашим запитом знайдено {books.length} {getBooksWord(books.length)}</p>

      <section className={styles.books}>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </section>
    </>
  );
};

export default BooksCotalog;
