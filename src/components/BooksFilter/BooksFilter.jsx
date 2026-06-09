import React from "react";
import styles from "./BooksFilter.module.scss";
const quantityOptions = ["5", "10", "20", "30"];
const sortOptions = [
  { value: "title-asc", label: "Назва А-Я" },
  { value: "title-desc", label: "Назва Я-А" },
  { value: "author-asc", label: "Автор А-Я" },
  { value: "author-desc", label: "Автор Я-А" },
  { value: "year-desc", label: "Новіші спочатку" },
  { value: "year-asc", label: "Старіші спочатку" },
];
const BooksFilter = (props) => {
  const { setQuantity, quantity, sortBy, setSortBy } = props;
  const showOption = (quantity) => (
    <option value={quantity} key={quantity}>
      {quantity}
    </option>
  );
  const showOptionSort = (sort) => (
    <option value={sort.value} key={sort.value}>
      {sort.label}
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
      <label>
        <select
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        >
          {sortOptions.map(showOptionSort)}
        </select>
      </label>
    </section>
  );
};

export default BooksFilter;
