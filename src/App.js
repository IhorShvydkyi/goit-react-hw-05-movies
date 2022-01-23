import "./App.css";
import { Routes, Route } from "react-router-dom";
import Container from "./Components/Container/Container";
import AppBar from "./Components/Navigation/Navigation";
import HomePage from "./Views/HomePage/HomePage";
import MoviesPage from "./Views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./Views/MovieDetailsPage/MovieDetailsPage";
function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </Container>
  );
}
export default App;
