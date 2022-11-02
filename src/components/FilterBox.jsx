import "./FilterBox.css";

const FilterBox = ({ handleChange }) => {
  return (
    <select
      name="filter"
      onChange={(e) => handleChange(e.target.value)}
      className="filter-box"
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterBox;
