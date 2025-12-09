import { useState } from "react";
import _ from "lodash";
import styles from "./RockPaperScissors.module.css";
const RockPaperScissors = () => {
  const choices = ["Камінь", "Ножиці", "Папір"];
  const [choiceUser, setChoiceUser] = useState("");
  const [choiseComputer, setChoiseComputer] = useState("");
  const [result, setResult] = useState("");
  const calcResult = (user, computer) => {
    if (user === computer) {
      setResult("Нічия!");
    } else if (
      (user === "Камінь" && computer === "Ножиці") ||
      (user === "Ножиці" && computer === "Папір") ||
      (user === "Папір" && computer === "Камінь")
    ) {
      setResult("Ти переміг! 🎉");
    } else {
      setResult("Комп’ютер переміг 😢");
    }
  };
  const play = (value) => {
    setChoiceUser(value);
    const index = _.random(0, choices.length - 1);
    setChoiseComputer(choices[index]);
    calcResult(value, choices[index]);
  };
  const showButton = (value) => (
    <button key={value} onClick={() => play(value)}>
      {value}
    </button>
  );
  return (
    <section className={styles.header}>
      <h2>Гра “Камінь, Ножиці, Папір”</h2>
      <div className={styles.buttons}>{choices.map(showButton)}</div>
      {choiceUser && (
        <div>
          <p>Твій вибір:{choiceUser}</p>
          <p>Вибір комп’ютера:{choiseComputer}</p>
          <p>{result}</p>
        </div>
      )}
    </section>
  );
};

export default RockPaperScissors;
