import axios from "axios";

const fetchCountries = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
};

const fecthCountry = async (code) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/alpha/${code}`
  );
  return response.data;
};

const restCountries = {
  fetchCountries,
  fecthCountry,
};

export default restCountries;
