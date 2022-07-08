import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADDMOVIETOWATCHLIST", payload: movie });
  };
  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADDMOVIETOWATCHED", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVEMOVIEFROMWATCHLIST", payload: id });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVETOWATCHLIST", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVEFROMWATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
