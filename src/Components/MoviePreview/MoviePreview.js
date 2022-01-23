const MoviePreview = ({ movie }) => {
  const photo = "https://image.tmdb.org/t/p/w500";
  const defaultPhoto = "../../Images/default-movie-1-3.png";

  const { title, poster_path, overview, genres, vote_average } = movie;
  return (
    <div>
      <div>
        {poster_path ? (
          <img src={`${photo}${poster_path}`} alt={title} />
        ) : (
          <img src={defaultPhoto} alt="" />
        )}
      </div>
      <div>
        <h2>
          {title}
          {""}
        </h2>
        <span>User score: {vote_average && vote_average * 10}%</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <div>
          <h3>Genres</h3>
          {genres && (
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePreview;
