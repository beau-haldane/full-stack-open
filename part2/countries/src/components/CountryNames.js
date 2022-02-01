import React from 'react'

const CountryNames = ({countries, filter}) => {

    const filteredList = 
        countries
        .filter(country => country.name.common
        .toLowerCase()
        .includes(filter.toLowerCase()));

        console.log(filteredList.length)

    if (filteredList.length > 10){
        return(
            <div>
                <h2>Countries</h2>
                Too many matches, specify another filter
            </div> 
        )
    } else if (filteredList.length === 1){
        const country = filteredList[0]
        console.log(country)
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
            </div>
        )
    } else {
        return(
            <div>
                <h2>Countries</h2>
                {
                    filteredList
                    .map(country => 
                    <p key={country.name.common}>{country.name.common}</p>
                    )
                }
            </div>
        )}
}

export default CountryNames