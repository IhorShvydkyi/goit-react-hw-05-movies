import styled from "@emotion/styled";

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 28px;
  margin-left: 10px;
  border: 1px solid black;
  background-image: url("https://cdn-icons-png.flaticon.com/512/117/117848.png");
  background-size: 10%;
  background-repeat: no-repeat;
  background-position: 15px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  position: relative;
  &::hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: flex;
  width: 350px;
  height: auto;
  margin-bottom: 20px;
`;
