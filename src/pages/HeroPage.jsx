import React from "react";
import Herois from "./../components/Herois/Herois";
import ScrollPosition from "../components/ScrollPosition/ScrollPosition";
import styles from "./pages.module.scss"


const HeroPage = () => {
    const scrollTop = () => {window.scrollTo({top:0 , behavior:"smooth"})}
  return (
    <div>
      <ScrollPosition
        render={({ scrollPosY }) => (
          <>
            {/* <section className={styles["scroll-container"]}>
              <p>curren position scroll Y = {scrollPosY}</p>
            </section> */}
            {scrollPosY > 200 && <button className={styles.up} onClick={scrollTop}>up</button>}
          </>
        )}
      />
      <Herois />
    </div>
  );
};

export default HeroPage;
