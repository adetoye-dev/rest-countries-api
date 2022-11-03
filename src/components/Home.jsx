import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CountryCard from "./CountryCard";
import "./Home.css";
import restCountries from "../apis/restcountries";
import { nanoid } from "nanoid";
import SearchBar from "./SearchBar";
import FilterBox from "./FilterBox";

const Home = ({ viewCountry }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [filter, setFilter] = useState({
    isOn: false,
    value: "",
  });

  useEffect(() => {
    const getAllCountries = async () => {
      const data = await restCountries.fetchCountries();
      setCountries(data);
      setFilteredCountryList(data);
    };

    getAllCountries();
  }, []);

  const findCountry = (input) => {
    const filteredList = countries.filter((country) => {
      return filter.isOn
        ? (country.name.official.toLowerCase().includes(input.toLowerCase()) ||
            country.name.common.toLowerCase().includes(input.toLowerCase())) &&
            country.region.toLowerCase() === filter.value.toLowerCase()
        : country.name.official.toLowerCase().includes(input.toLowerCase()) ||
            country.name.common.toLowerCase().includes(input.toLowerCase());
    });

    setFilteredCountryList(filteredList);
  };

  const filterCountries = (region) => {
    if (region === "") {
      setFilter({ isOn: false, value: region });
      setFilteredCountryList(countries);
      return;
    }
    setFilter({ isOn: true, value: region });
    const filteredList = countries.filter((country) => {
      return country.region.toLowerCase() === region.toLowerCase();
    });
    setFilteredCountryList(filteredList);
  };

  const renderCountries = filteredCountryList.map((country) => {
    return (
      <CountryCard
        country={country.name.official}
        region={country.region}
        population={country.population}
        capital={country.capital}
        flag={country.flags.svg}
        key={nanoid()}
        viewCountry={() => viewCountry(country.cca3)}
      />
    );
  });

  return (
    <>
      <NavBar />
      <div className="search-container container">
        <SearchBar findCountry={findCountry} />
        <FilterBox handleChange={filterCountries} />
      </div>
      <main className="main container">{renderCountries}</main>
    </>
  );
};

export default Home;
