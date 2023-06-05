import React, { useContext } from "react";
import "../components/MovieCard.css";
import { GlobalContext } from "../state/GlobalState";

const MovieCard = ({ movie }) => {
  const { watched, watchList, addMovieToWatchList, addMovieToWatched } =
    useContext(GlobalContext);
  let findInWatchList = watchList.find((obj) => obj.id === movie.id);
  let findInWatched = watched.find((obj) => obj.id === movie.id);
  const watchListDisable = findInWatchList ? true : false;
  const watchedDisable = findInWatched ? true : false;
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title}`}
      />
      <div className="container">
        <h4>
          <b>{movie.title}</b>
        </h4>
        <p>{movie.vote_average}</p>
        <button
          className="btn-addToWatchList"
          disabled={watchListDisable}
          onClick={() => addMovieToWatchList(movie)}
        >
          Add to watchList
        </button>
        <button
          className="btn-addToWatched"
          disabled={watchedDisable}
          onClick={() => addMovieToWatched(movie)}
        >
          Add to watched
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
