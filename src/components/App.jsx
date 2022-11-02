import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CountryCard from "./CountryCard";
import "./App.css";
import fetchCountries from "../apis/restcountries";
import { nanoid } from "nanoid";
import SearchBar from "./SearchBar";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const data = await fetchCountries();
      //   console.log(data);
      setCountries(data);
      setFilteredCountryList(data);
    };

    getAllCountries();
  }, []);

  const findCountry = (input) => {
    const filteredList = countries.filter((country) => {
      return (
        country.name.official.toLowerCase().includes(input.toLowerCase()) ||
        country.name.common.toLowerCase().includes(input.toLowerCase())
      );
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
      />
    );
  });

  return (
    <>
      <NavBar />
      <div className="search-container container">
        <SearchBar findCountry={findCountry} />
      </div>
      <main className="main container">{renderCountries}</main>
    </>
  );
};

export default App;
