import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const AdditionalInformation = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const MovieDetails = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const DetailsNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #000;
  display: inline-block;
  text-decoration: none;

  border: 1px solid black;
  border-radius: 2px;
  background-color: #d6d1d0;
`;
