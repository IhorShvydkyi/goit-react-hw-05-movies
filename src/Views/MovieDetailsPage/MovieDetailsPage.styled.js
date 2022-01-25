import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const AdditionalInformationTitle = styled.p`
  display: flex;
  justify-content: center;
`;

export const MovieNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 10px;
  align-items: center;
`;
export const StyledNavLink = styled(NavLink)`
  margin: 10px;
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #000;
  display: flex;
  justify-content: center;
  text-decoration: none;
  width: 75px;

  border: 1px solid black;
  border-radius: 2px;
`;
