import { StyledNavLink, Nav } from "./Navigation.styled";
const Navigation = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </Nav>
  );
};
export default Navigation;
