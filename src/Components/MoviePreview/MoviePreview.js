import {
  MoviePreviewStyled,
  MoviePreviewImg,
  MovieOverview,
  Overviews,
  GenresList,
  GenresListItem,
} from "./MoviePreview.styled";

const MoviePreview = ({ movie }) => {
  const photo = "https://image.tmdb.org/t/p/w500";
  const defaultPhoto = "../../Images/default-movie-1-3.png";

  const { title, poster_path, overview, genres, vote_average } = movie;
  return (
    <MoviePreviewStyled>
      <div>
        {poster_path ? (
          <MoviePreviewImg src={`${photo}${poster_path}`} alt={title} />
        ) : (
          <MoviePreviewImg src={defaultPhoto} alt="" />
        )}
      </div>
      <MovieOverview>
        <h2>{title}</h2>
        <span>User score: {vote_average && vote_average * 10}%</span>
        <h3>Overview</h3>
        <Overviews>{overview}</Overviews>
        <div>
          <h3>Genres</h3>
          {genres && (
            <GenresList>
              {genres.map(({ id, name }) => (
                <GenresListItem key={id}>{name}</GenresListItem>
              ))}
            </GenresList>
          )}
        </div>
      </MovieOverview>
    </MoviePreviewStyled>
  );
};

export default MoviePreview;
