import NavBar from "./NavBar";
import "./App.css";
import restcountries from "../apis/restcountries";
import { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);

  const searchCountry = async (country) => {
    const data = await restcountries.fetchCountry(country);
    console.log(data);
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
    // searchCountry("nigeria");
    // searchRegion("africa");
  }, []);

  return (
    <>
      <NavBar />
      <h1>hello from app</h1>
    </>
  );
};

export default App;
