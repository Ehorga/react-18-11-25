import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./pages.module.scss"

const BookPage = () => {
  const { bookId } = useParams();
  const { books } = useSelector((state) => state.books);
  const currentBook = books.find((book) => String(book.id) === bookId);
 
  return (
    <section className={styles.bookSection}>
      <Link to="/books">Назад до списку</Link>
    {currentBook?<article>
    <p>{currentBook.genre}</p>
    <h1>{currentBook.title}</h1>
    <h3>Автор:{currentBook.author}</h3>
    <h3>Видавництво:{currentBook.publisher}</h3>
    <h3>Рік:{currentBook.published}</h3>
    <p>{currentBook.description}</p>
    </article>:<p>Книгу не знайдено.</p>}
    </section>
  );
};

export default BookPage;
