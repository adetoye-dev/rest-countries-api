import "./CountryCard.css";

const CountryCard = (props) => {
  return (
    <div className="country-card" onClick={props.viewCountry}>
      <div className="country-card-img">
        <img src={props.flag} alt="country flag" />
      </div>
      <div className="country-card-data">
        <h2 className="country-name">{props.country}</h2>
        <div className="country-data">
          <div className="population">
            <span>population:</span> {props.population}
          </div>
          <div className="region">
            <span>region:</span> {props.region}
          </div>
          <div className="capital">
            <span>capital:</span> {props.capital}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
