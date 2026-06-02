import { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksCotalog from '../components/BooksCatalog/BooksCotalog';
import styles from "./pages.module.scss"
import BooksFilter from '../components/BooksFilter/BooksFilter';
import { getBooksThunk } from './../store/bookSlice';

const BooksPage = () => {
    const [quantity, setQuantity] = useState("5");
     const dispatch = useDispatch();
//   const { books, isPending, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooksThunk({_quantity: quantity}));
  }, [dispatch , quantity]);
    return (
        <div className={styles.flex}>
            <div><BooksFilter setQuantity={setQuantity} quantity={quantity}/></div>
            <div><BooksCotalog/></div>
        </div>
    );
}

export default BooksPage;
