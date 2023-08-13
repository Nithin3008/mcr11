import { useContext } from "react";
import { MovieContext } from "../context/MainReducer";
import Filters from "../components/Filters";
import Movietile from "../components/Movietile";

const MovieListing = () => {
  const { MovieData, GenreData, Search, Year, Rating } =
    useContext(MovieContext);
  let displayData = [...MovieData];
  if (GenreData != "All Genre") {
    displayData = displayData.filter((val) => val.genre.includes(GenreData));
  }
  if (Search != "") {
    displayData = displayData.filter(
      (val) =>
        val.title.toLowerCase().includes(Search.toLowerCase()) ||
        val.director.toLowerCase().includes(Search.toLowerCase()) ||
        val.cast.some((item) =>
          item.toLowerCase().includes(Search.toLowerCase())
        )
    );
  }
  console.log(Search, Year, Rating, GenreData);
  if (Year != 0) {
    displayData = displayData.filter((val) => val.year == Year);
  }
  console.log(displayData);
  if (Rating != 0 || Rating !== null) {
    displayData = displayData.filter((val) => val.rating >= Rating);
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
