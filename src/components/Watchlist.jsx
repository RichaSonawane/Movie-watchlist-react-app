import React from "react";
import MovieCard from "./MovieCard";
import styles from './Watchlist.module.css'

const Watchlist = (props) => {

    const movieDisplay = props.list.map((movie, index) => {
  return <MovieCard movie={movie} key={index} removeMovie={props.removemovie} list={props.list}/>;
    });

  return (
    <div className="watchlist">
      <h1 >My Watchlist</h1>
      <div className={styles.moviecontainer}>{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
