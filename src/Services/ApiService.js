const KEY = "9b700ea139c541618f27512ac9d0b0cf";
const BASE_URL = "https://api.themoviedb.org/3";

export function FetchPopularMovies() {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}
`)
    .then((resp) => resp.json())
    .then((data) => data.results);
}

export function FetchMoviesByQuery(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  )
    .then((resp) => resp.json())
    .then((data) => data.results);
}
