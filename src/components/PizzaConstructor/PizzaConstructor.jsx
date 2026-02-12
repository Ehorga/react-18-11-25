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
  const [isOrder, setIsOrder] = useState(false);
  const calculate = () => {
    const toppingPrice = topping.length * TOPPING_PRICE;
    const sizePrice =
      BASE_PRICE * PIZZA_SIZES.find((s) => s.value === size).multiplier;
    return (toppingPrice + sizePrice) * amount;
  };
  const order = { size, dough, topping, amount, total: calculate() };
  const showSize = (s) => (
    <label key={s.label}>
      <input
        type="radio"
        value={s.value}
        checked={size === s.value}
        onChange={() => {
          setSize(s.value);
        }}
        name="size"
      />
      <span>{s.label}</span>
    </label>
  );
  const showTopping = (t) => (
    <label key={t}>
      <input
        type="checkbox"
        value={t}
        checked={topping.includes(t)}
        onChange={() => {
          changeTopping(t);
        }}
        name="topping"
      />
      <span>{t}</span>
    </label>
  );
  const showDough = (d) => (
    <option value={d} key={d}>
      {d}{" "}
    </option>
  );
  const changeTopping = (t) => {
    setTopping((prev) =>
      prev.includes(t) ? prev.filter((tp) => tp !== t) : [...prev, t],
    );
  };
  if (isOrder) {
    return (
      <article>
        <h2>Дякуємо за замовлення</h2>
        <p>Очікуйте доставку піци.</p>
        <p>
          Розмір: {order.size}cm. Тип тіста: {order.dough}. Топінги: {order.topping.length>0?order.topping.join(", "):"none"}. Кількість порцій: {order.amount}.
        </p>
        <p>До оплати кур'єру: {order.total} грн</p>
      </article>
    );
  }
  return (
    <section>
      <h2>Конструктор піци</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsOrder(true);
        }}
      >
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
          <select
            value={dough}
            onChange={(event) => setDough(event.target.value)}
          >
            {" "}
            {DOUGH_TYPES.map(showDough)}
          </select>
        </fieldset>
        <fieldset>
          <legend>Кількість порцій</legend>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            min={1}
          />
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
          {order.topping.length > 0 ? order.topping.join(", ") : "немає"}
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
