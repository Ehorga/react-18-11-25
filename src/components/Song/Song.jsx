import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./Song.module.css";

const Song = (props) => {
  const { song, setPlaySong } = props;
  const [isSelect, setIsSelect] = useState(false);
  const selectSong = () => {
    setIsSelect(!isSelect);
    setPlaySong(song.title);
  };
  return (
    <article
      className={styles.song}
      onClick={selectSong}
      style={{ border: isSelect ? "1px solid lime" : "1px solid black" }}
    >
      <img src={song.image} alt={song.artist} />
      <div>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
        <p>{song.genre}</p>
      </div>
    </article>
  );
};
Song.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  setPlaySong: PropTypes.func.isRequired,
};

export default Song;
