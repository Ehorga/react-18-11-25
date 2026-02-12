import { useState } from "react";
import {
  PIZZA_SIZES,
  TOPPINGS,
  DOUGH_TYPES,
  BASE_PRICE,
  TOPPING_PRICE,
} from "./data";
const PizzaConstructor = () => {
  const [size, setSize] = useState(PIZZA_SIZES[0].value);
  const [topping, setTopping] = useState([]);
  const [dough, setDough] = useState(DOUGH_TYPES[0]);
  const [amount, setAmount] = useState(1);
  const [order, setOrder] = useState({ size, dough , topping , amount , total:0});

  const showSize = (size) => (
    <label key={size.label}>
      <input type="radio" value={size.value} checked={size=== size.value} onChange={()=>setSize(size.value)} name="size" />
      <span>{size.label}</span>
    </label>
  );
  const showTopping = (topping) => (
    <label key={topping}>
      <input type="checkbox" value={topping} name="topping" />
      <span>{topping}</span>
    </label>
  );
  const showDough = (dough) => (
    <option value={dough} key={dough}>
      {dough}{" "}
    </option>
  );
  return (
    <section>
      <h2>Конструктор піци</h2>
      <form>
        <fieldset>
          <legend>Розмір піци</legend>
          <div>{PIZZA_SIZES.map(showSize)}</div>
        </fieldset>
        <fieldset>
          <legend>Топінги</legend>
          <div>{TOPPINGS.map(showTopping)}</div>
        </fieldset>
        <fieldset>
          <legend>Тип тіста</legend>
          <select> {DOUGH_TYPES.map(showDough)}</select>
        </fieldset>
        <fieldset>
          <legend>Кількість порцій</legend>
          <input type="number" min={1} />
        </fieldset>
        <button type="submit">Замовити</button>
      </form>
      <article>
        <h2>Ваше замовлення:</h2>
        <p>
          <strong>Розмір:</strong>
          {order.size}
        </p>
        <p>
          <strong>Тип тіста:</strong>
          {order.dough}
        </p>
        <p>
          <strong>Топінги:</strong>
          {order.topping.length>0? order.topping.join(", ") : "немає"}
        </p>
        <p>
          <strong>Кількість порцій:</strong>
          {order.amount}
        </p>
        <p>
          <strong>Сума:</strong>
          {order.total}
        </p>
      </article>
    </section>
  );
};

export default PizzaConstructor;
