import React from "react";
import styles from "./BooksFilter.module.scss"
const quantityOptions = ["5", "10", "20", "30"];
const BooksFilter = (props) => {
  const { setQuantity, quantity } = props;
  const showOption = (quantity) => (
    <option value={quantity} key={quantity}>
      {quantity}
    </option>
  );
  return (
    <section className={styles.filter}>
      <h2>filters</h2>
      <label>
        <span>amount books</span>
        <select
          value={quantity}
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
          
        >
          {quantityOptions.map(showOption)}
        </select>
      </label>
    </section>
  );
};

export default BooksFilter;
