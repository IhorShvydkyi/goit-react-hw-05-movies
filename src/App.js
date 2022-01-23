import "./App.css";
import { Routes, Route } from "react-router-dom";
import Container from "./Components/Container/Container";
import AppBar from "./Components/Navigation/Navigation";
import HomePage from "./Views/HomePage/HomePage";
import MoviesPage from "./Views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./Views/MovieDetailsPage/MovieDetailsPage";
import Cast from "./Components/Cast/Cast";
import Reviews from "./Components/Reviews/Reviews";
function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
				<Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
      </Routes>
    </Container>
  );
}
export default App;
