import React, { useState, useEffect } from 'react'
import Countries                      from './components/Countries'
import Search                         from './components/Search'
// import DisplayList                    from './components/DisplayList';
import axios                          from 'axios'

const App = () => {

  // ----- States ----- //
      
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [weather, setWeather] = useState()
  const [filter, setFilter] = useState('')
  const [showMore, setShowMore] = useState(false)

  const getCountryData = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(getCountryData, [])
 
  const api_key = process.env.REACT_APP_API_KEY
  

   // ----- Functions -----//

  const showCountry = (event) => {
    const selectedCountry = countries.filter(filterCountry => filterCountry.name.common === event.target.id)
    setShowMore(!showMore)
    setCountry(
       selectedCountry[0]
    )
  }

  const resetSearch = (event) => {
    setCountry('')
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  // ----- Website ----- //

  return (
    <div>
      <Search 
        filter={filter} 
        handleFilterChange={handleFilterChange} 
      />
      <Countries 
        countries={countries} 
        country={country} 
        filter={filter} 
        showCountry={showCountry} 
        resetSearch={resetSearch}
        api_key={api_key}
        weather={weather}
        setWeather={setWeather}

        // setWeather={setWeather}
      />
    </div>
  );
}

export default App;