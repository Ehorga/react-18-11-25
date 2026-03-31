import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import styles from "./Quote.module.css";
import { ContextClick } from "../../contexts";

const Quote = (props) => {
  const { setAmountClicks } = useContext(ContextClick);
  const { text, author, setCount } = props;
  const [isChoose, setIsChoose] = useState(false);
  const changeChoose = () => {
    setIsChoose(!isChoose);
    setCount((prev) => (isChoose ? prev - 1 : prev + 1));
    setAmountClicks((prev) => prev + 1);
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
