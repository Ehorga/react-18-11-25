import React from "react";
import songs from "./data";
import Song from "../Song/Song";
import styles from "./Playlist.module.css"

const Playlist = () => {
  const showSong = (song, index) => <Song key={index} song={song} />;
  return (
    <section>
      <h2>Playlist</h2>
      <div className={styles.playlist}>{songs.map(showSong)}</div>
    </section>
  );
};

export default Playlist;
