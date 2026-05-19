import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksThunk } from "./../../store/bookSlice";

const BooksCotalog = () => {
  const dispatch = useDispatch();
  const { books, isPending, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooksThunk());
  }, [dispatch]);
  if (isPending) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <section>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </section>
  );
};

export default BooksCotalog;
