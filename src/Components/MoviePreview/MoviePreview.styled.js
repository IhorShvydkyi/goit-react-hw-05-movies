import styled from "@emotion/styled";

export const MoviePreviewStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MoviePreviewImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 15px 0;
  width: 250px;
  object-fit: cover;
`;
export const MovieOverview = styled.div`
  width: 500px;
`;

export const Overviews = styled.p`
  text-align: justify;
`;

export const GenresList = styled.ul`
  margin: 0;
  padding-left: 13px;
`;

export const GenresListItem = styled.li`
  display: flex;
  justify-content: flex-start;
`;

export const ButtonBack = styled.button`
  margin-top: 4px;
  cursor: pointer;
  padding: 5px;
  font-size: 15px;
  border-radius: 4px;
  border-color: black;
  background-color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
