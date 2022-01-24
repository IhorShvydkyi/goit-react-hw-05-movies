import { StyledNavLink } from "./Navigation.styled";
const Navigation = () => {
  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </nav>
  );
};
export default Navigation;
