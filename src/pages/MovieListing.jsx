import { useContext } from "react";
import { MovieContext } from "../context/MainReducer";
import Filters from "../components/Filters";
import Movietile from "../components/Movietile";

const MovieListing = () => {
  const { MovieData, GenreData, Search, Year } = useContext(MovieContext);
  let displayData = [...MovieData];
  console.log(displayData);
  console.log(Search);
  if (GenreData != "All Genre") {
    displayData = displayData.filter((val) => val.genre.includes(GenreData));
  }
  if (Search != "") {
    displayData = displayData.filter(
      (val) =>
        val.title.toLowerCase().includes(Search) ||
        val.director.toLowerCase().includes(Search) ||
        val.cast.includes(Search)
    );
    //  ||
    // displayData.filter((val) =>
    //   val.director.toLowerCase().includes(Search)
    // ) ||
    // displayData.filter((val) => val.cast.includes(Search));
  }
  if (Year !== 0) {
    displayData = displayData.filter((val) => val.year == Year);
  }
  return (
    <>
      <Filters></Filters>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {displayData.map((val) => (
          <Movietile movieItem={val}></Movietile>
        ))}
      </div>
    </>
  );
};

export default MovieListing;
