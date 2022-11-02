import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ findCountry }) => {
  const [country, setCountry] = useState("");

  const handleChange = (input) => {
    setCountry(input);
    findCountry(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    findCountry(country);
    setCountry("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <span className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a country..."
        value={country}
        autoComplete="false"
        onChange={(e) => handleChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
