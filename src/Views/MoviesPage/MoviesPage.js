import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as apiService from "../../Services/ApiService";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MoviesList from "../../Components/MoviesList/MoviesList";

const MoviesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoader(true);
    if (query.trim() === "") {
      return;
    }
    fetchMoviesByQuery();
  }, [query]);

  useEffect(() => {
    const queryBySearch =
      new URLSearchParams(location.search).get("query") ?? "";
    if (queryBySearch) {
      setQuery(queryBySearch);
    }
  }, [navigate, location]);
  const fetchMoviesByQuery = () => {
    setLoader(true);

    apiService
      .fetchMoviesByQuery(query)
      .then(({ results }) => setMovies(results))
      .then(
        navigate({
          ...location,
          search: `query=${query}`,
        })
      )

      .catch((error) => {
        toast("Trouble. Something is wrong :(");
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  const onSearchQuery = (queryBySearch) => {
    setMovies([]);
    setQuery(queryBySearch);
  };

  return (
    <>
      {error && <p>Sorry, something went wrong :( </p>}
      {<SearchBar onSubmit={onSearchQuery} />}
      {movies && <MoviesList movies={movies} />}
      <ToastContainer />
    </>
  );
};
export default MoviesPage;
