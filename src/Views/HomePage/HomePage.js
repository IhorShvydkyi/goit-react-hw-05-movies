import { useState, useEffect } from "react";
import * as apiServices from "../../Services/ApiService";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiServices.FetchPopularMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      <ul>
        {movies &&
          movies.map((movie) => <li key={movie.id}>{movie.original_title}</li>)}
      </ul>
    </>
  );
};

export default HomePage;
