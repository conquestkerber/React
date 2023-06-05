import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const API_KEY = "f2a2d2fe6411703b90cbfbb93a2afd50";

const Add = () => {
  const [findMovies, setFindMovies] = useState("");
  const [movies, setMovies] = useState([]);
  const requestData = async (event) => {
    try {
      const response = await axios.get(
        ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${event.target.value}`
      );
      console.log(response.status);
      console.log(response.data);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const searchMovieHandler = (event) => {
    event.preventDefault();
    setFindMovies(event.target.value);
    requestData(event);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Search for a movie"
        value={findMovies}
        onChange={searchMovieHandler}
      />
      {movies.length > 0 && (
        <ul className="movies-card">
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <MovieCard movie={movie} key={movie.id} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Add;
