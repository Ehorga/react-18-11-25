import HeroiCart from "./HeroiCart";
import herois from "./heroi";
import styles from "./Herois.module.css";
import { useState } from "react";

const Herois = () => {
  const [selectHero, setSelectHero] = useState("");
  const [listHerois, setListHerois] = useState(herois);
  const changHeroRating = (id, newRating) => {
    setListHerois((prev) =>
      prev.map((hero) =>
        hero.id === id ? { ...hero, rating: newRating } : hero
      )
    );
    if (selectHero?.id === id ) {
      setSelectHero((prev)=>({...prev,rating:newRating}))
    }
  };
  const ShowHeroCart = (hero) => (
    <HeroiCart
      key={hero.id}
      hero={hero}
      setSelectHero={setSelectHero}
      isSelect={selectHero?.id === hero.id}
      changHeroRating={changHeroRating}
    />
  );
  return (
    <section>
      <h2 className={styles.title}>Choose favorite hero</h2>

      <div className={styles.herois}>{listHerois.map(ShowHeroCart)}</div>
      <h2 className={styles.title}>Your choice</h2>
      <div className={styles.selectHero}>
        {selectHero ? (
          <HeroiCart hero={selectHero} changHeroRating={changHeroRating} />
        ) : (
          <p>Героя ще не вибрано</p>
        )}
      </div>
    </section>
  );
};

export default Herois;
