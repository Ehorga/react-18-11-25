import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./Quote.module.css";

const Quote = (props) => {
  const { text, author, setCount } = props;
  const [isChoose, setIsChoose] = useState(false);
  console.log(isChoose);
  const changeChoose = () => {
    setIsChoose(!isChoose);
    setCount((prev) => (isChoose ? prev - 1 : prev + 1));
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
Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default Quote;
