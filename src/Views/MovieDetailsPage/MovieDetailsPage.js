import { useState, useEffect } from "react";
import { useParams, useLocation, Outlet, NavLink } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as apiService from "../../Services/ApiService";
import MoviePreview from "../../Components/MoviePreview/MoviePreview";
import Spiner from "../../Components/Loader/Loader";
import { Error } from "../HomePage/HomePage.styled";
import {
  AdditionalInformation,
  MovieDetails,
  DetailsNav,
  StyledNavLink,
} from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesByMovieId();
  }, [movieId]);

  const fetchMoviesByMovieId = () => {
    setLoader(true);

    apiService
      .fetchMoviesByMovieId(movieId)
      .then((movie) => setMovie(movie))
      .catch((error) => {
        toast("Something went wrong :(");
        setError(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <>
      {error && <Error>'Something went wrong :('</Error>}
      {loader && <Spiner />}
      {movie && <MoviePreview movie={movie} />}

      <AdditionalInformation>
        <DetailsNav>
          <p>Additional information</p>
          {movie && (
            <MovieDetails>
              <StyledNavLink
                to={`/movies/${movie.id}/cast`}
                state={{ from: location.state.from }}
              >
                Cast
              </StyledNavLink>
              <StyledNavLink
                to={`/movies/${movie.id}/reviews`}
                state={{ from: location.state.from }}
              >
                Reviews
              </StyledNavLink>
              <Outlet />
            </MovieDetails>
          )}
        </DetailsNav>
      </AdditionalInformation>
    </>
  );
};
export default MovieDetailsPage;
