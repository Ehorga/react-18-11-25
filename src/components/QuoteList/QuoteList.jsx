import Quote from "../Quote/Quote";
import styles from "./QuoteList.module.css";
import quotes from "./quotes";

const QuoteList = () => {
  const showQuotes = (quote) => (
    <Quote key={quote.text} text={quote.text} author={quote.author} />
  );
  return <section className={styles.quotes}>{quotes.map(showQuotes)}</section>;
};

export default QuoteList;
