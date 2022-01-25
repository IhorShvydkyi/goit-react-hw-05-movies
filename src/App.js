import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spiner from "./Components/Loader/Loader";
import Container from "./Components/Container/Container";
import AppBar from "./Components/Navigation/Navigation";

const HomePage = lazy(() => import("./Views/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./Views/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Views/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("./Components/Cast/Cast"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews"));

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
export default App;
