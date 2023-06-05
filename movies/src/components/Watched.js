import React, { useContext } from "react";
import { GlobalContext } from "../state/GlobalState";
import MovieCardImage from "./MovieCardImage";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div>
      <ul className="movies-card">
        {watched.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCardImage movie={movie} type={true} key={movie.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Watched;
