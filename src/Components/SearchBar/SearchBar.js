import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SearchbarStyled,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from "./SearchBar.styled";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleNameChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return toast("Please enter something :)");
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          placeholder="Your favorite movie"
          value={query}
          name="query"
          onChange={handleNameChange}
        />
        <SearchFormButton type="submit">
          <span>Search</span>
        </SearchFormButton>
      </SearchForm>
    </div>
  );
};
export default SearchBar;
