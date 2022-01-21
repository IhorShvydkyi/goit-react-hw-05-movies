import "./App.css";
import { Routes, Route } from "react-router-dom";
import Container from "./Components/Container/Container";
import AppBar from "./Components/Navigation/Navigation";
import HomePage from "./Views/HomePage/HomePage";
import MoviesPage from "./Views/MoviesPage/MoviesPage";
function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Container>
  );
}
export default App;
