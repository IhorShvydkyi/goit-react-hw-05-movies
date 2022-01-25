import { Link, useLocation } from "react-router-dom";
import {
  TrendingNowList,
  TrendingNowListItem,
  StyledLink,
} from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <TrendingNowList>
      {movies.map((movie) => (
        <TrendingNowListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </StyledLink>
        </TrendingNowListItem>
      ))}
    </TrendingNowList>
  );
};
export default MoviesList;
