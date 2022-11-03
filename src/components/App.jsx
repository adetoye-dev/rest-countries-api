import "./App.css";
import Home from "./Home";
import CountryDetail from "./CountryDetail";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<CountryDetail />} />
    </Routes>
  );
};

export default App;
