function CountryListItem(props) {
    const { country } = props
    const showCountry = (country) => {
        props.showCountry(country)
    }
    return (
        <li key={country.id}>
            <h3>{country.flag} {country.name} ({country.code})</h3>
            <p>Capital: {country.capital}</p>
            <p>Continent: {country.continent}</p>
            <button onClick={() => showCountry(country)}>Show</button>
        </li>
    )
}

export default CountryListItem