import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form className="search-form">
      <span className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
