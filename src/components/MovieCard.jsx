import React from "react";
import styles from './MovieCard.module.css'

const MovieCard = (props) => {

    const inWatchlist = props.list.filter((mov) => {
      return mov.id === props.movie.id;
    });

    const button =
      inWatchlist.length === 0 ? (
        <button onClick={() => props.addMovie(props.movie)}>Add to List</button>
      ) : (
        <button onClick={() => props.removeMovie(props.movie)}>Remove</button>
      );

  return (
    <div className={styles.moviecard}>
        <div className={styles.movie}>
            <img className={styles.center} src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} />
            <h3>{props.movie.original_title}</h3>
        </div>
      
        {button}
    </div>
);
  }
export default MovieCard;
