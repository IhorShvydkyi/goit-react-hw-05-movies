import { NavLink, useLocation } from "react-router-dom";
const MovieAdditionalInformation = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <h3>Additional information</h3>
        <nav>
          <NavLink
            to={`/movies/:movieId/cast`}
            state={{ from: location.state.from }}
          >
            Cast{" "}
          </NavLink>
          <NavLink
            to={`/movies/:movieId/reviews`}
            state={{ from: location.state.from }}
          >
            Reviews{" "}
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
export default MovieAdditionalInformation;
