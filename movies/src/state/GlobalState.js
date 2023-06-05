import React, { createContext, useReducer, useEffect } from "react";

//initial state if there some in localStorage
const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case "ADD_TO_WATCHED":
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };

    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    case "REMOVE_FROM_WATCH_LIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  //actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };
  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_TO_WATCHED", payload: movie });
  };
  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCH_LIST", payload: id });
  };
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
        addMovieToWatched,
        removeMovieFromWatched,
        removeMovieFromWatchList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
