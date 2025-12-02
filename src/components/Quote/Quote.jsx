import React, { useState } from "react";
import styles from "./Quote.module.css";

const Quote = (props) => {
  const { text, author } = props;
  const [isChoose, setIsChoose] = useState(false);
  console.log(isChoose);
  const changeChoose = () => {
    setIsChoose(!isChoose);
  };
  return (
    <blockquote
      className={styles.quote}
      onClick={changeChoose}
      style={{ backgroundColor: isChoose ? "pink" : "rgb(236, 236, 239)" }}
    >
      <p>{text}</p>
      <p className={styles.author}>— {author}</p>
    </blockquote>
  );
};

export default Quote;
