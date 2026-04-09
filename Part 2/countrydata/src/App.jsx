import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const match = countries.filter((x) =>
    x.name.common.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div>
      <form>
        <div>
          find countries <input value={value} onChange={handleChange} />
        </div>
      </form>
      <div>
        <Output match={match} />
      </div>
    </div>
  );
};

const Output = ({ match }) => {
  const hits = match.length;
  
  if (hits > 10) {
    return <p>Too many matches. Specify another filter</p>;
  } else if (hits <= 10 && hits !== 1) {
    return match.map((x) => (
      <p key={x.cca3}>{x.name.common}<button onClick={<Country country={x.cca3}/>}></button><br /></p>
    ));
  } else {
    return <Country country={match[0]} />;
  }
};

const Country = ({ country }) => {
  const languageList = Object.values(country.languages || {});

  return (
    <div>
      <div>
        <h1>{country.name.common}</h1>
      </div>
      <div>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
      </div>
      <div>
        <h2>Languages</h2>
      </div>
      <div>
        <ul>
          {languageList.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div>{/*weather api call results go here*/}</div>
    </div>
  );
};

export default App;
