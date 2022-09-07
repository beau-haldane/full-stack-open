import React, { useEffect } from 'react'
import axios from 'axios'

const DisplayCountry = ({country, resetSearch, api_key, weather, setWeather}) => {
  const getWeatherData = () => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}&units=metric`)
    .then(response => {
      setWeather(response.data)
    })
  }
  useEffect(getWeatherData, [])

  const commaNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (weather===undefined){
    return <div className="extra-padding">Loading...</div>
  }else{
  return(
    <div className="country-info">
      <div className="country-info-bg flex-space-between extra-padding">
        <div className="">
          <h3>{country.name.common}</h3>
          <p><b>Capital:</b> {country.capital}</p>
          <p><b>Population:</b> {commaNumber(country.population)}</p>
          <p><b>Languages</b></p>
          <ul>
            {
              Object
                .values(country.languages)
                .map(language => <li key={language}>{language}</li>)
            }
          </ul>
        </div>
        <div><img src={country.flags.png}></img></div>
      </div>

      <div className="country-info-bg flex-space-between extra-padding">
        <div>
          <h3>Weather in {country.capital}</h3>
          <p><b>Temperature:</b> {weather.main.temp} celsius</p>
          <p><b>Wind Speed:</b> {weather.wind.speed} m/s</p>
          <p><b>Wind Direction:</b> {weather.wind.deg} degrees</p>
        </div>
        <div className="weather-icon"><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img></div>
      </div>
      <button className="reset-button" onClick={resetSearch}>Back to Search</button>
    </div>
  )
}
}

export default DisplayCountry