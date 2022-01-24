import styled from "@emotion/styled";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 28px;
  margin-left: 10px;
  border: 1px solid rgb(63, 36, 88);
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
  display: inline-block;
  font-size: 18px;
  padding: 0 5px;
  width: 170px;
  height: 25px;
  margin: 13px 0 13px 50px;
`;
