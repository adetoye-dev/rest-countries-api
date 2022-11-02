import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CountryCard from "./CountryCard";
import "./App.css";
import restcountries from "../apis/restcountries";

const App = () => {
  const [countries, setCountries] = useState([]);

  const searchCountry = async (country) => {
    const data = await restcountries.fetchCountry(country);
    console.log(data);
    setCountries(data);
  };

  const searchRegion = async (region) => {
    const data = await restcountries.fetchRegions(region);
    console.log(data);
  };

  useEffect(() => {
    const getAllCountries = async () => {
      const data = await restcountries.fetchAllCountries();
      console.log(data);
    };

    // getAllCountries();
    searchCountry("america");
    // searchRegion("africa");
  }, []);

  const renderCountries = countries.map((country) => {
    return (
      <CountryCard
        country={country.name.official}
        region={country.region}
        population={country.population}
        capital={country.capital[0]}
        flag={country.flags.svg}
        key={country.tld[0]}
      />
    );
  });

  return (
    <>
      <NavBar />
      <main className="main container">{renderCountries}</main>
    </>
  );
};

export default App;
