import { Link, useLocation } from "react-router-dom";
import { TrendingNowList, TrendingNowListItem } from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <TrendingNowList>
      {movies.map((movie) => (
        <TrendingNowListItem key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            style={{ textDecoration: "none" }}
          >
            {movie.title}
          </Link>
        </TrendingNowListItem>
      ))}
    </TrendingNowList>
  );
};
export default MoviesList;
