import "./CountryDetail.css";
import NavBar from "./NavBar";

const BorderCountry = ({ country }) => {
  return <button className="border-country">{country}</button>;
};

const CountryDetail = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <button className="go-back-btn">
          <i className="fa-solid fa-arrow-left"></i>back
        </button>
        <div className="country-detail-container">
          <div className="country-detail-flag"></div>
          <div className="country-detail-data">
            <h1 className="country">Belgium</h1>
            <div className="detail-cols-container">
              <div className="details-col-1">
                <p className="detail">
                  <span>Native Name:</span> Belgie
                </p>
                <p className="detail">
                  <span>Population:</span> 11319511
                </p>
                <p className="detail">
                  <span>Region:</span> Europe
                </p>
                <p className="detail">
                  <span>Sub Region:</span> Western Europe
                </p>
                <p className="detail">
                  <span>Capital:</span> Brussels
                </p>
              </div>
              <div className="details-col-2">
                <p className="detail">
                  <span>Top Level Domain:</span> .be
                </p>
                <p className="detail">
                  <span>currencies:</span> Euro
                </p>
                <p className="detail">
                  <span>Languages:</span> Dutch, French, German
                </p>
              </div>
            </div>
            <div className="border-countries">
              <span>Border Countries: </span>
              <div className="borders">
                <BorderCountry country="France" />
                <BorderCountry country="Germany" />
                <BorderCountry country="Netherlands" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
