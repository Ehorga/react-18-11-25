// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getBooksThunk } from "./../../store/bookSlice";
import Book from "./Book";
import styles from "./BooksCatalog.module.scss"

const BooksCotalog = () => {
  // const dispatch = useDispatch();
  const { books, isPending, error } = useSelector((state) => state.books);
  // useEffect(() => {
  //   dispatch(getBooksThunk());
  // }, [dispatch]);
  if (isPending) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <section className={styles.books}>
      {books.map((book) => (
        <Book key={book.id} book= {book}/>
      ))}
    </section>
  );
};

export default BooksCotalog;
