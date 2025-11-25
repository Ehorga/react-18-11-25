import React from 'react';
import styles from "./Song.module.css"

const Song = (props) => {
    const {song}= props
    return (
        <article className={styles.song}>
         <img src={song.image} alt={song.artist} />
         <h3>{song.title}</h3>
         <p>{song.artist}</p>
         <p>{song.genre}</p>   
        </article>
    );
}

export default Song;
