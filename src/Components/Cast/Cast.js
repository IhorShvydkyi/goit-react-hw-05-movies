import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spiner from "../Loader/Loader";
import { Error } from "../../Views/HomePage/HomePage.styled";
import { CastView, CastList, CastListItem, CastImg } from "./Cast.Styled";

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
      {error && <Error>Sorry. Something is wrong </Error>}
      {loader && <Spiner />}
      {cast && (
        <CastView>
          <CastList>
            {cast.map(({ id, profile_path, name, character }) => (
              <CastListItem key={id}>
                {profile_path ? (
                  <CastImg src={`${photo}${profile_path}`} alt={name} />
                ) : (
                  <CastImg src={defaultPhoto} alt="" />
                )}
                {name}
                <span>Character: {character}</span>
              </CastListItem>
            ))}
          </CastList>
        </CastView>
      )}
    </>
  );
};

export default Cast;
