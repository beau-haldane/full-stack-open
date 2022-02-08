import React, { useState, useEffect } from 'react'
import axios                from 'axios'

const DisplayCountry = ({country, resetSearch, api_key, weather, setWeather}) => {
    // console.log(weather.name===country.capital[0]);
    const getWeatherData = () => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}&units=metric`)
          .then(response => {
            setWeather(response.data)
          })
      }
      useEffect(getWeatherData, [])


    if (weather===undefined){
        return <div>Loading...</div>
    }else{
        console.log(weather.weather[0].icon);
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

            <h3>Weather in {country.capital}</h3>
                <p>Temperature: {weather.main.temp} celsius</p>
                <p>Wind: {weather.wind.speed} m/s direction {weather.wind.deg} degrees</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <button onClick={resetSearch}>Back</button>
        </div>
    )
            }
}

export default DisplayCountry