import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as apiService from "../../Services/ApiService";

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const photo = "https://image.tmdb.org/t/p/w500";
  const defaultPhoto = "../../Images/vin_diesel_2019.png";

  useEffect(() => {
    fetchMovieCast();
  }, [movieId]);

  const fetchMovieCast = () => {
    setLoader(true);

    apiService
      .fetchMovieCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(setLoader(false));
  };

  return (
    <>
      {error && <p>Sorry. Something is wrong </p>}
      {/* {loader && <Spiner />} */}
      {cast && (
        <div>
          <ul>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                {profile_path ? (
                  <img src={`${photo}${profile_path}`} alt={name} />
                ) : (
                  <img src={defaultPhoto} alt="" />
                )}
                {name}
                <span>Character: {character}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;
