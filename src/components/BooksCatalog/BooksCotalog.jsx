import Book from "./Book";
import styles from "./BooksCatalog.module.scss";

const BooksCotalog = (props) => {
  const { books, isPending, error } = props;

  if (isPending) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <section className={styles.books}>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BooksCotalog;
