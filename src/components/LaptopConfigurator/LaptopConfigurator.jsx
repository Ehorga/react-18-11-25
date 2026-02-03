import laptopData from "./data";
import styles from "./LaptopConfigurator.module.css";
import { useState } from "react";
const LaptopConfigurator = () => {
  const [result, setResult] = useState(null);
  const [CPU, setCPU] = useState("");
  const [RAM, setRam] = useState("");
  const [OPTIONS, setOPTIONS] = useState([]);
  const [Amount, setAmount] = useState(1);
  const showOption = (processor) => (
    <option value={processor.name} key={processor.name}>
      {processor.name} (+{processor.price})
    </option>
  );
  const showRadio = (ram) => (
    <label key={ram.name}>
      <input
        type="radio"
        name="ram"
        value={ram.name}
        checked={RAM === ram.name}
        onChange={changeRam}
      />
      <span>
        {ram.name} (+{ram.price})
      </span>
    </label>
  );
  const showCheckBox = (option) => (
    <label>
      <input
        type="checkbox"
        value={option.name}
        checked={OPTIONS.includes(option.name)}
        onChange={changeOptions}
      />
      <span>
        {option.name} (+{option.price})
      </span>
    </label>
  );
  const changeCPU = (event) => {
    setCPU(event.target.value);
  };
  const changeRam = (event) => {
    setRam(event.target.value);
  };
  const changeOptions = (event) => {
    const value = event.target.value;
    const newOptions = OPTIONS.includes(value)
      ? OPTIONS.filter((option) => option !== value)
      : [...OPTIONS, value];
    setOPTIONS(newOptions);
    console.log(value);
  };
  const changeAmount = (event) => {
    const value = event.target.value;
    setAmount(Number(value));
  };
  const calculate = () => {
    const CPUprice = laptopData.processors.find(
      (processor) => CPU === processor.name,
    ).price;
    const RAMprice = laptopData.ramVariants.find(
      (ramVariant) => RAM === ramVariant.name,
    ).price;
    const OptionPrice = OPTIONS.reduce((sum, option) => {
      const optionPrice = laptopData.extraOptions.find(
        (opt) => opt.name === option,
      ).price;
      return sum + optionPrice;
    }, 0);
    const summa = (CPUprice + RAMprice + OptionPrice) * Amount;
    setResult({ CPU, RAM, OPTIONS, Amount, summa });
    console.log(summa);
  };
  const isDisabled = !CPU || !RAM;
  return (
    <section className={styles.section}>
      <h2>Конфігуратор ноутбука</h2>
      <div>
        <label className={styles.column}>
          <span>1. Виберіть процесор</span>
          <select onChange={changeCPU} value={CPU}>
            <option value="">-- оберіть процесор --</option>
            {laptopData.processors.map(showOption)}
          </select>
        </label>
        <fieldset className={styles.column}>
          <legend>2. Оберіть обсяг оперативної пам’яті</legend>
          <div>{laptopData.ramVariants.map(showRadio)}</div>
        </fieldset>
        <fieldset className={styles.column}>
          <legend>3. Додаткові опції</legend>
          {laptopData.extraOptions.map(showCheckBox)}
        </fieldset>
        <label className={styles.column}>
          <span>4. Кількість пристроїв</span>
          <input type="number" value={Amount} min={1} onChange={changeAmount} />
        </label>
      </div>
      <button onClick={calculate} disabled={isDisabled}>
        Сформувати кошик
      </button>
      {result && (
        <div>
          <h2>Ваше замовлення:</h2>
          <p>
            <em>Процесор: </em>
            {result.CPU}
          </p>
          <p>
            <em>ОЗП: </em>
            {result.RAM}
          </p>
          <p>
            <em>Опції:</em>
            {result.OPTIONS.length ? result.OPTIONS.join(",") : "немає"}
          </p>
          <p>
            <em>Кількість:</em>
            {result.Amount}
          </p>
          <p>
            <strong>Підсумкова сума: {result.summa}$</strong>
          </p>
        </div>
      )}
    </section>
  );
};

export default LaptopConfigurator;
