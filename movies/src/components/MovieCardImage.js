import React, { useContext } from "react";
import "../components/MovieCard.css";
import { GlobalContext } from "../state/GlobalState";

const MovieCardImage = ({ movie, type }) => {
  const { removeMovieFromWatched, removeMovieFromWatchList } =
    useContext(GlobalContext);

  return (
    <div className="card">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title}`}
        />
      ) : (
        <p>{movie.title}</p>
      )}
      {type ? (
        <div className="container">
          <button
            className="remove-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            X
          </button>
          <button className="view-btn">View more</button>
        </div>
      ) : (
        <div className="container">
          <button
            className="remove-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            X
          </button>
          <button className="view-btn">View more</button>
        </div>
      )}
    </div>
  );
};

export default MovieCardImage;
