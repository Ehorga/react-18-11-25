import React from "react";
import styles from "./Quote.module.css";

const Quote = (props) => {
  const { text, author } = props;
  return (
    <blockquote className={styles.quote}>
      <p>{text}</p>
      <p className={styles.author}>— {author}</p>
    </blockquote>
  );
};

export default Quote;
