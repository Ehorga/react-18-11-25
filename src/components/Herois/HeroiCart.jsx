import PropTypes from "prop-types";
import styles from "./Herois.module.css";
import classNames from "classnames";
const HeroiCart = (props) => {
  const { hero, setSelectHero, isSelect, changHeroRating } = props;
  const choiceHero = () => {
    setSelectHero(hero);
  };
  const heroClass = classNames(styles.article, {
    [styles["select"]]: isSelect,
  });
  const addRating = (event) => {
    event.stopPropagation();
    changHeroRating(hero.id, Math.min(5, hero.rating + 1));
    // changHeroRating(hero.id, hero.rating + 1 >= 5? 5 : hero.rating +1);
  };
  const subRating = (event) => {
    event.stopPropagation();
    changHeroRating(hero.id, Math.max(1, hero.rating - 1));
    // changHeroRating(hero.id, hero.rating - 1 <= 1? 1 : hero.rating -1);
  };
  return (
    <article className={heroClass} onClick={choiceHero}>
      <h3>{hero.name}</h3>
      <div className={styles.info}>
        <p>power : {hero.power}</p>
        <div>
          <span>{hero.rating}</span>
          <button onClick={addRating}>👍🏻</button>
          <button onClick={subRating}>👎🏻</button>
        </div>
      </div>
    </article>
  );
};
HeroiCart.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    power: PropTypes.number.isRequired,
  }),
};
export default HeroiCart;
