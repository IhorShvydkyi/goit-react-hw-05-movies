import { useState, useEffect } from "react";
import * as apiServices from "../../Services/ApiService";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={() => {}}
      />
      <button type="submit" onClick={() => {}}>
        <label>Search</label>
      </button>
    </div>
  );
};
export default MoviesPage;
