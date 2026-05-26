import React from 'react';
import BooksCotalog from '../components/BooksCatalog/BooksCotalog';
import styles from "./pages.module.scss"

const BooksPage = () => {
    return (
        <div className={styles.flex}>
            <div>filter</div>
            <div><BooksCotalog/></div>
        </div>
    );
}

export default BooksPage;
