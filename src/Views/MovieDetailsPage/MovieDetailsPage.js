import { useState, useEffect, Suspense } from "react";
import {
  Routes,
  Route,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import * as apiService from "../../Services/ApiService";
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoviePreview from "../../Components/MoviePreview/MoviePreview";
import MovieAdditionalInformation from "../../Components/MovieAdditionalInformation/MovieAdditionalInformation";
import Cast from "../../Components/Cast/Cast";
import Reviews from "../../Components/Reviews/Reviews";

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
      {movie && <MovieAdditionalInformation />}
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/movies/:movieId/cast" element={<Cast />} />

          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
