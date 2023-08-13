import { useContext } from "react";
import { HelperContext } from "../context/HelperFunction";
import { useNavigate } from "react-router";

const Movietile = ({ movieItem, removeButton }) => {
  const { addToWishList, watchLaterExist, removeFromWatchlist } =
    useContext(HelperContext);
  const nav = useNavigate();
  return (
    <div className="flex flex-col w-60 items-center  p-2">
      <div onClick={() => nav(`/Eachmovie/${movieItem.title}`)}>
        <img className="h-56 w-56 rounded-lg" src={movieItem.imageURL}></img>
      </div>
      <div>
        <p className="text-2xl font-bold">{movieItem.title}</p>
        <p>{movieItem.summary}</p>

        <div className="text-white text-lg space-x-4 mt-5">
          <button className="bg-black  p-2 rounded">Star</button>
          <button
            onClick={() =>
              watchLaterExist(movieItem.title)
                ? removeFromWatchlist(movieItem.title)
                : addToWishList(movieItem.title)
            }
            className="bg-black p-2 rounded"
            // disabled={watchLaterExist(movieItem.title)}
          >
            {watchLaterExist(movieItem.title)
              ? "Remove watchlater"
              : "Add Watchlater"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movietile;
