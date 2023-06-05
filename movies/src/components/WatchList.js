import React, { useContext } from "react";
import { GlobalContext } from "../state/GlobalState";
import MovieCardImage from "./MovieCardImage";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);

  return (
    <div>
      <ul className="movies-card">
        {watchList.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCardImage movie={movie} type={false} key={movie.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;
