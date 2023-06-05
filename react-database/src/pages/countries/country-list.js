import { useState, useEffect } from "react";
import { findAll, findByContinent } from "../../services/countries.js";
import CountryListItem from "./country-list-item.js";
import Header from "../../components/UI/header.js";

function CountryList() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  const [filterBy, setFilterBy] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const res = await findAll();
    setCountries([...res]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showCountry = async (c) => {
    console.log(c);
    setCountry(c);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setFilterBy(e.target.value);
  };

  const submit = async () => {
    setLoading(true);
    const res = await findByContinent(filterBy);
    setCountries([...res]);
    setLoading(false);
  };

  return (
    <section>
      <Header />
      {country && country.name}

      <input type="text" onChange={handleChange} />
      <button onClick={submit}>FIND</button>

      <section>
        {loading && <p>loading...</p>}
        <ul>
          {countries.length > 0 &&
            countries.map((country) => (
              <CountryListItem country={country} showCountry={showCountry} />
            ))}
        </ul>
      </section>
    </section>
  );
}

export default CountryList;
