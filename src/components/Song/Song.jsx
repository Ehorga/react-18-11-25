import React, { useState } from "react";
import styles from "./Song.module.css";

const Song = (props) => {
  const { song } = props;
  const [isSelect, setIsSelect] = useState(false);
  const [isDesc, setIsDesc] = useState(false);
  const selectSong = () => {
    setIsSelect(!isSelect);
  };
  const showDescription = () => {
    setIsDesc(!isDesc);
  };
  return (
    <article
      className={styles.song}
      onClick={selectSong}
      style={{ border: isSelect ? "1px solid lime" : "1px solid black" }}
      onDoubleClick={showDescription}
    >
      <img src={song.image} alt={song.artist} />
      <div className={isDesc ? styles.show : styles.hide}>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
        <p>{song.genre}</p>
      </div>
    </article>
  );
};

export default Song;
