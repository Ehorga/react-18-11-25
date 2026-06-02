import styles from "./BooksCatalog.module.scss"

const Book = (props) => {
    const {book} = props
    return (
        <article className={styles.book}>
            <p>{book.genre}</p>
            <h2>{book.title}</h2>
            <p>Автор: {book.author}</p>
            <p>Рік: {book.published.substr(0,4)}</p>
        </article>
    );
}

export default Book;
