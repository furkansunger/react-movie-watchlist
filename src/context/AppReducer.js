// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADDMOVIETOWATCHLIST": {
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    }
    case "ADDMOVIETOWATCHED": {
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    }
    case "REMOVEMOVIEFROMWATCHLIST": {
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    }
    case "MOVETOWATCHLIST": {
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    }
    case "REMOVEFROMWATCHED": {
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
