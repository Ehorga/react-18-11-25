import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Header.module.scss";

const Header = () => {
    const getActive = ({isActive}) => 
        classNames(styles.link , {[styles.active]: isActive})
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Logo</Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={getActive}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/game" className={getActive}>Game</NavLink>
          </li>
          <li>
            <NavLink to="/constructor" className={getActive}>Constructor</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
