import { useContext } from "react";
import { MovieContext } from "../context/MainReducer";

const NewMovie = () => {
  const { dispatch } = useContext(MovieContext);
  function AddNewMovie(event) {
    event.preventDefault();
    const newMovie = {
      title: event.target.title.value,
      year: Number(event.target.year.value),
      genre: event.target.genre.value.split(","),
      rating: Number(event.target.rating.value),
      director: event.target.director.value,
      writer: event.target.writer.value,
      cast: event.target.cast.value.split(","),
      summary: event.target.summary.value,
      imageURL: event.target.link.value,
    };
    console.log(newMovie);
    dispatch({ type: "addMovie", payload: newMovie });
  }
  return (
    <div>
      <form
        onSubmit={(event) => AddNewMovie(event)}
        className="flex flex-col w-56 space-y-2"
      >
        <p>Enter Tittle</p>
        <input id="title" className="bg-stone-200" type="text"></input>
        <p>Enter Summary</p>
        <input id="summary" className="bg-stone-200" type="text"></input>
        <p>Enter Year</p>
        <input id="year" className="bg-stone-200" type="text"></input>
        <p>Enter Cast</p>
        <input
          placeholder="Enter genre using ,"
          className="bg-stone-200"
          type="text"
          id="cast"
        ></input>
        <p>Enter Genre</p>
        <input
          placeholder="Enter genre using ,"
          className="bg-stone-200"
          type="text"
          id="genre"
        ></input>
        <p>Enter Rating</p>
        <input id="rating" className="bg-stone-200" type="text"></input>
        <p>Enter Director</p>
        <input id="director" className="bg-stone-200" type="text"></input>
        <p>Enter Writer</p>
        <input id="writer" className="bg-stone-200" type="text"></input>
        <p>Enter Image link</p>
        <input id="link" className="bg-stone-200" type="text"></input>
        <button
          className="text-xl text-white bg-blue-500 p-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewMovie;
