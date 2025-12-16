import React, { useState } from "react";
import songs from "./data";
import Song from "../Song/Song";
import styles from "./Playlist.module.css";

const Playlist = () => {
  const [playSong, setPlaySong] = useState("");
  const showSong = (song, index) => (
    <Song key={index} song={song} setPlaySong={setPlaySong} />
  );
  return (
    <section>
      <h2>Playlist</h2>
      <div className={styles.playlist}>{songs.map(showSong)}</div>
      <p>Play now : {playSong}</p>
    </section>
  );
};

export default Playlist;
