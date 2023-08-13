import { createContext, useContext } from "react";
import { MovieContext } from "./MainReducer";

export const HelperContext = createContext();
export function HelperProvider({ children }) {
  const { WatchLater, MovieData, dispatch } = useContext(MovieContext);

  function addToWishList(title) {
    const x = MovieData.find((val) => val.title == title);
    const z = [...WatchLater, x];
    dispatch({ type: "addToWatchList", payload: z });
  }
  function watchLaterExist(title) {
    // console.log(WatchLater);
    const x = WatchLater.find((val) => val.title == title) ? true : false;
    return x;
  }
  function setSearch(search) {
    dispatch({ type: "setSearch", payload: search });
  }
  function removeFromWatchlist(title) {
    const x = WatchLater.filter((val) => val.title !== title);
    dispatch({ type: "addToWatchList", payload: x });
  }
  return (
    <HelperContext.Provider
      value={{ addToWishList, watchLaterExist, setSearch, removeFromWatchlist }}
    >
      {children}
    </HelperContext.Provider>
  );
}
