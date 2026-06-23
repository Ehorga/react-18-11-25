import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksCotalog from "../components/BooksCatalog/BooksCotalog";
import styles from "./pages.module.scss";
import BooksFilter from "../components/BooksFilter/BooksFilter";
import { getBooksThunk } from "./../store/bookSlice";
import { sortBooks ,filterBooks } from "../utils";

const BooksPage = () => {
  const [quantity, setQuantity] = useState("5");
  const [sortBy, setSortBy] = useState("title-asc");
  const [searchStr, setSearchStr] = useState("");
  const dispatch = useDispatch();
  const { books, isPending, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooksThunk({ _quantity: quantity }));
  }, [dispatch, quantity]);
  const newBooks = sortBooks(books, sortBy);
  const searchedBooks = filterBooks(newBooks, searchStr);
  return (
    <div className={styles.flex}>
      <div>
        <BooksFilter
          setQuantity={setQuantity}
          quantity={quantity}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setSearchStr={setSearchStr}
          searchStr={searchStr}
        />
      </div>
      <div>
        <BooksCotalog books={searchedBooks} isPending={isPending} error={error} />
      </div>
    </div>
  );
};

export default BooksPage;
