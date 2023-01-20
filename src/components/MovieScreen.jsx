import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieScreen.module.css";

const MovieScreen = (props) => {
  const movieDisplay = props.movieList.map((movie, index) => {
    return <MovieCard addMovie={props.addMovie} removeMovie={props.removemovie} movie={movie} key={index} list={props.list}/>;

    // return (

    //     <ul key={index}>
    //       <h2>{movie.original_title}</h2>
    //     </ul>
    // );
  });

const decrement =()=>{
 if(props.page !== 1){
  return props.setPage(props.page-1)
 }
}
const increment=()=>{
  return props.setPage(props.page+1);
  
}
//console.log(props.page);

  return (
    <div className="page">
      <h1>Richa's Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className={styles.moviecontainer}>{movieDisplay}</div>
    </div>
  );
};
export default MovieScreen;
