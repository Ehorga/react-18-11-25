import {
  PIZZA_SIZES,
  TOPPINGS,
  DOUGH_TYPES,
  BASE_PRICE,
  TOPPING_PRICE,
} from "./data";
const PizzaConstructor = () => {
  const showSize = (size) => (
    <label key={size.label}>
      <input type="radio" value={size.value} name="size" />
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
    </section>
  );
};

export default PizzaConstructor;
