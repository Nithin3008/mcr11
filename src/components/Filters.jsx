import { useContext } from "react";
import { MovieContext } from "../context/MainReducer";
import { useNavigate } from "react-router";

const Filters = () => {
  const { MovieData, GenreData, Rating, Year, dispatch } =
    useContext(MovieContext);
  const genre = MovieData.map((val) => val.genre);
  const genre1 = [...new Set(genre.flat())];
  const years = MovieData.map((val) => val.year);
  const releaseYears = [...new Set(years)];
  const nav = useNavigate();
  return (
    <div className="flex justify-around items-center p-4">
      <h1 className="text-2xl font-semibold">Movies</h1>
      <select
        onChange={(e) =>
          dispatch({ type: "setGenre", payload: e.target.value })
        }
      >
        <option selected>{GenreData}</option>
        <option>All Genre</option>
        {genre1.map((val) => (
          <option>{val}</option>
        ))}
      </select>
      <select
        onChange={(e) =>
          dispatch({ type: "setYear", payload: Number(e.target.value) })
        }
      >
        <option value="0" selected>
          Year{" "}
        </option>
        {releaseYears.map((val) => (
          <option>{val}</option>
        ))}
      </select>
      <select
        onChange={(e) =>
          dispatch({ type: "setRating", payload: Number(e.target.value) })
        }
      >
        <option selected>{Rating}</option>

        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
      </select>
      <button
        onClick={() => nav("/Newmovie")}
        className="bg-black text-xl text-white rounded p-2"
      >
        Add Movie
      </button>
    </div>
  );
};

export default Filters;
