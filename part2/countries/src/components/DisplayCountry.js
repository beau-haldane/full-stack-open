import React from 'react'

const DisplayCountry = ({country, resetSearch}) => {
    country = country[0]
    return(
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {
                    Object
                        .values(country.languages)
                        .map(language => <li key={language}>{language}</li>)
                }
            </ul>
            <img src={country.flags.png}></img>
            <button onClick={resetSearch}>Back</button>
        </div>
    )
}

export default DisplayCountry