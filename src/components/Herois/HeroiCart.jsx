import PropTypes from "prop-types";
import styles from './Herois.module.css'
import classNames from "classnames";
const HeroiCart = (props) => {
  const { hero , setSelectHero, isSelect} = props;
  const choiceHero =()=>{
    setSelectHero(hero)
  }
const heroClass = classNames(styles.article, {
    [styles["select"]]:isSelect
})
  return (
    <article className={heroClass} onClick={choiceHero}>
      <h3>{hero.name}</h3>
      <p>power : {hero.power}</p>
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
