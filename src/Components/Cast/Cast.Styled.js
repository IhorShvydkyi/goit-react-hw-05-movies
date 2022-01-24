import styled from "@emotion/styled";

export const CastView = styled.div`
  margin: 0 auto;
`;

export const CastList = styled.ul`
  display: flex;
  text-decoration: none;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 170px;
  align-items: center;
  text-align: center;
`;
export const CastImg = styled.img`
  display: block;
  margin: 15px 0;
  width: 120px;
  height: 180px;
  object-fit: cover;
`;
