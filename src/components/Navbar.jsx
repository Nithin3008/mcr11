import { useContext } from "react";
import { MovieContext } from "../context/MainReducer";
import { HelperContext } from "../context/HelperFunction";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { setSearch } = useContext(HelperContext);
  const nav = useNavigate();
  return (
    <>
      <nav className="flex text-white bg-black items-center justify-between p-5">
        <h1 className="text-2xl font-bold ">IMDB</h1>
        <input
          className=" rounded h-8 outline-none text-black p-2 text-lg"
          type="text"
          placeholder="Search your Movie"
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <div className="space-x-3">
          <button onClick={() => nav("/")}>Movies</button>
          <button onClick={() => nav("/Watchlist")}>Watch List</button>
          <button>Starred Movies</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
