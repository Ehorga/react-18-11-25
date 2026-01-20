import laptopData from "./data";
import styles from "./LaptopConfigurator.module.css";
const LaptopConfigurator = () => {
  const showOption = (processor) => (
    <option value="" key={processor.name}>
      {processor.name} (+{processor.price})
    </option>
  );
  const showRadio = (ram) => (
    <label key={ram.name}>
      <input type="radio" name="ram" />
      <span>
        {ram.name} (+{ram.price})
      </span>
    </label>
  );
  const showCheckBox = (option) => (
    <label>
      <input type="checkbox" />
      <span>
        {option.name} (+{option.price})
      </span>
    </label>
  );
  return (
    <section className={styles.section}>
      <h2>Конфігуратор ноутбука</h2>
      <div>
        <label className={styles.column}>
          <span>1. Виберіть процесор</span>
          <select name="" id="">
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
          <input type="number" />
        </label>
      </div>
      <button>Сформувати кошик</button>
    </section>
  );
};

export default LaptopConfigurator;
