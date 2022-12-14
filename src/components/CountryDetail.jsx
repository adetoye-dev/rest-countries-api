import "./CountryDetail.css";
import { useLocation, Link } from "react-router-dom";
import countryCodeList from "../data.json";

const BorderCountry = ({ country, viewCountry }) => {
  return (
    <button className="border-country" onClick={viewCountry}>
      {country}
    </button>
  );
};

const CountryDetail = ({ viewCountry }) => {
  const { state } = useLocation();

  const currencies = Object.values(state.currencies).map((item) => item.name);
  return (
    <div className="container">
      <Link className="go-back-btn" to="/">
        <i className="fa-solid fa-arrow-left"></i>back
      </Link>
      <div className="country-detail-container">
        <div className="country-detail-flag">
          <img src={state.flags.svg} alt="country flag" />
        </div>
        <div className="country-detail-data">
          <h1 className="country">{state.name.official}</h1>
          <div className="detail-cols-container">
            <div className="details-col-1">
              <p className="detail">
                <span>Native Name:</span> {state.name.common}
              </p>
              <p className="detail">
                <span>Population:</span>{" "}
                {parseInt(state.population)
                  .toLocaleString("en")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p className="detail">
                <span>Region:</span> {state.region}
              </p>
              <p className="detail">
                <span>Sub Region:</span> {state.subregion}
              </p>
              <p className="detail">
                <span>Capital:</span> {state.capital}
              </p>
            </div>
            <div className="details-col-2">
              <p className="detail">
                <span>Top Level Domain:</span> {state.tld}
              </p>
              <p className="detail">
                <span>currencies:</span> {currencies.join(", ")}
              </p>
              <p className="detail">
                <span>Languages:</span>{" "}
                {Object.values(state.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className="border-countries">
            <span>Border Countries: </span>
            <div className="borders">
              {state.borders
                ? state.borders.map((item) => (
                    <BorderCountry
                      key={item}
                      country={countryCodeList[item]}
                      viewCountry={() => viewCountry(item)}
                    />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
