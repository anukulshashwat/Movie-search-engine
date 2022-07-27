import React, { useEffect, useState } from "react";

import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// a37f36ea

const API_URL = "http://www.omdbapi.com?apikey=a37f36ea";

// const movie1 = {
//   Title: "Superman, Spiderman or Batman",
//   Year: "2011",
//   imdbID: "tt2084949",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const SearchMovies = async (title) => {
    const responce = await fetch(`${API_URL}&s=${title}`);
    const data = await responce.json();

    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    SearchMovies("Spiderman");
    return () => {};
  }, []);

  return (
    <div className="app">
      <h1>MovieKingdom</h1>

      <div className="search">
        <input
          type=""
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => SearchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
