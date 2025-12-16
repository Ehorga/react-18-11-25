import { useState } from "react";
import Quote from "../Quote/Quote";
import styles from "./QuoteList.module.css";
import quotes from "./quotes";

const QuoteList = () => {
  const [count, setCount] = useState(0);
  const showQuotes = (quote) => (
    <Quote key={quote.text} text={quote.text} author={quote.author} setCount = {setCount}/>
  );
  return <section className={styles.quotes}><p>{count}</p> {quotes.map(showQuotes)}</section>;
};

export default QuoteList;
