import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spiner from "../../Components/Loader/Loader";
import * as apiServices from "../../Services/ApiService";
import MoviesList from "../../Components/MoviesList/MoviesList";
import { Error, HomePageTitle } from "./HomePage.styled";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    FetchPopularMovies();
  }, []);

  const FetchPopularMovies = () => {
    setLoader(true);

    apiServices
      .FetchPopularMovies()
      .then(({ results }) => setMovies(results))
      .catch((error) => {
        toast("Trouble. Something is wrong :(");
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  return (
    <>
      {error && <Error>Sorry. Something went wrong </Error>}
      {loader && <Spiner />}
      {movies && (
        <>
          <HomePageTitle>Trending today</HomePageTitle>
          <MoviesList movies={movies} />
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default HomePage;
