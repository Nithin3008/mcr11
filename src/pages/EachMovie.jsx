import { useContext } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../context/MainReducer";
import { HelperContext } from "../context/HelperFunction";
const EachMovie = () => {
  const { MovieData } = useContext(MovieContext);
  const { addToWishList, watchLaterExist } = useContext(HelperContext);
  const { movieId } = useParams();
  const dispalyMovie = MovieData.find((val) => val.title == movieId);

  console.log(movieId);
  return (
    <>
      <div className="flex p-4">
        <div>
          <img className="h-2/4 w-fit" src={dispalyMovie.imageURL}></img>
        </div>
        <div>
          <div>
            <h1>{dispalyMovie.title}</h1>
            <p>{dispalyMovie.summary}</p>
            <p>Year: {dispalyMovie.year}</p>
            <p>Rating:{dispalyMovie.rating}</p>
            <p>Director:{dispalyMovie.director}</p>
            <p>Writer:{dispalyMovie.wirter}</p>
            <p>Cast:{dispalyMovie.cast}</p>
          </div>
          <div className="text-xl text-white space-x-2">
            <button className="bg-black  p-2 rounded">Star</button>
            <button
              onClick={() => addToWishList(dispalyMovie.title)}
              className="bg-black p-2 rounded"
              // disabled={watchLaterExist(movieItem.title)}
            >
              {watchLaterExist(dispalyMovie.title)
                ? "Added Watchlist"
                : "Add to Watchlist"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachMovie;
