import HeroiCart from "./HeroiCart";
import herois from "./heroi";
import styles from "./Herois.module.css";
import { useState } from "react";

const Herois = () => {
  const [selectHero, setSelectHero] = useState("");
  const ShowHeroCart = (hero) => (
    <HeroiCart
      key={hero.id}
      hero={hero}
      setSelectHero={setSelectHero}
      isSelect={selectHero?.id === hero.id}
    />
  );
  return (
    <section>
      <h2 className={styles.title}>Choose favorite hero</h2>

      <div className={styles.herois}>{herois.map(ShowHeroCart)}</div>
      <h2 className={styles.title}>Your choice</h2>
      <div className={styles.selectHero}>
        {selectHero ? (
          <HeroiCart hero={selectHero} />
        ) : (
          <p>Героя ще не вибрано</p>
        )}
      </div>
    </section>
  );
};

export default Herois;
