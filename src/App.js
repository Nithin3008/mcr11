import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import MovieListing from "./pages/MovieListing";
import NewMovie from "./pages/NewMovie";
import WatchlistPage from "./pages/WatchlistPage";
import EachMovie from "./pages/EachMovie";
function App() {
  return (
    <div className="App">
      <div className="sticky top-0">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<MovieListing />}></Route>
        <Route path="/Newmovie" element={<NewMovie />}></Route>
        <Route path="/Watchlist" element={<WatchlistPage />}></Route>
        <Route path="/Eachmovie/:movieId" element={<EachMovie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
