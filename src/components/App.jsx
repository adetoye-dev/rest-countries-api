import "./App.css";
import Home from "./Home";
import CountryDetail from "./CountryDetail";
import { useNavigate, Routes, Route } from "react-router-dom";
import restCountries from "../apis/restcountries";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  const viewCountry = async (code) => {
    const data = await restCountries.fecthCountry(code);
    navigate(`/countries/${data[0].name.common}`, {
      state: { ...data[0] },
    });
  };

  useEffect(() => {
    viewCountry("bol");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="countries/:id"
        element={<CountryDetail viewCountry={viewCountry} />}
      />
    </Routes>
  );
};

export default App;
