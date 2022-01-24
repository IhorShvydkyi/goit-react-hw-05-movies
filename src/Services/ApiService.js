const KEY = "9b700ea139c541618f27512ac9d0b0cf";
const BASE_URL = "https://api.themoviedb.org/3";

export function FetchPopularMovies() {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}
`)
    .then((response) => response.json())
    .then((data) => data.results);
}

export function fetchMoviesByQuery(query) {
  return fetch(
    `${BASE_URL}/search/movie/?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}
export function fetchMoviesByMovieId(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US&page=1&`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}
export function fetchMovieCast(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}
