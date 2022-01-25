import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const TrendingNowList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;
export const TrendingNowListItem = styled.li`
  list-style: none;
  margin-bottom: 6px;
`;

export const StyledLink = styled(Link)`
  color: black;
  font-size: 22px;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #2196f3;
  }
`;
