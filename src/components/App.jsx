import "./App.css";
import Home from "./Home";
import CountryDetail from "./CountryDetail";
import { useNavigate, Routes, Route, Outlet } from "react-router-dom";
import restCountries from "../apis/restcountries";
import NavBar from "./NavBar";

const App = () => {
  const navigate = useNavigate();

  const viewCountry = async (code) => {
    const data = await restCountries.fecthCountry(code);
    navigate(`/countries/${data[0].name.common}`, {
      state: { ...data[0] },
    });
  };

  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  };

  //   useEffect(() => {
  //     viewCountry("bol");
  //   }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home viewCountry={viewCountry} />} />
        <Route
          path="countries/:id"
          element={<CountryDetail viewCountry={viewCountry} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
