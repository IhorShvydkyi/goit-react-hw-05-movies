import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as apiService from "../../Services/ApiService";

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews();
  }, [movieId]);

  const fetchMovieReviews = () => {
    setLoader(true);

    apiService
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results))

      .catch((error) => {
        setError(error);
      })

      .finally(() => setLoader(false));
  };

  return (
    <>
      {error && <p>Sorry. Something is wrong </p>}
      {/* {loader && <Spiner />} */}
      {
        <div>
          <ul>
            {reviews.length > 0 ? (
              reviews.map(({ content, author, id }) => (
                <li key={id}>
                  <p>Author: {author}</p>
                  <p>{content}</p>
                </li>
              ))
            ) : (
              <p>We don't have any reviews for this movie</p>
            )}
          </ul>
        </div>
      }
    </>
  );
};

export default Reviews;
