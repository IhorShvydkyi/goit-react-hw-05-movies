import { StyledNavLink } from "./Navigation.styled";
const Navigation = () => {
  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <br />
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </nav>
  );
};
export default Navigation;
