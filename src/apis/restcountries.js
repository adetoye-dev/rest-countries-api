import axios from "axios";

const fetchAllCountries = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
};

const fetchCountry = async (countryName) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  return response.data;
};

const fetchRegions = async (region) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/region/${region}`
  );
  return response.data;
};

const restcountries = {
  fetchAllCountries,
  fetchCountry,
  fetchRegions,
};

export default restcountries;
