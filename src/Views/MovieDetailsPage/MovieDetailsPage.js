import { useState, useEffect } from "react";
import { useParams, useLocation, Outlet, NavLink } from "react-router-dom";
import * as apiService from "../../Services/ApiService";
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoviePreview from "../../Components/MoviePreview/MoviePreview";

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
      {error && <p>'Something went wrong :('</p>}
      {/* {loader && <Spiner />} */}
      {movie && <MoviePreview movie={movie} />}

      <p>Additional information</p>
      {movie && (
        <div>
          <NavLink
            to={`/movies/${movie.id}/cast`}
            state={{ from: location.state.from }}
          >
            Cast
          </NavLink>
          <NavLink
            to={`/movies/${movie.id}/reviews`}
            state={{ from: location.state.from }}
          >
            Reviews
          </NavLink>
        </div>
      )}
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
