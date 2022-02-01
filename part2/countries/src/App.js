import React, { useState, useEffect } from 'react'
import Countries                      from './components/Countries'
import Search                         from './components/Search'
// import DisplayList                    from './components/DisplayList';
import axios                          from 'axios'

const App = () => {

  // ----- States ----- //
      
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [filter, setFilter] = useState('')
  const [showMore, setShowMore] = useState(false)

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  const showCountry = (event) => {
    setShowMore(!showMore)
    setCountry(
      countries.filter(country => country.name.common === event.target.id )
    )
  }

  const resetSearch = (event) => {
    setCountry('')
  }

  // ----- Functions -----//

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countryNames = countries.map(country => <p>{country.name.common}</p>)

  // ----- Website ----- //

  return (
    <div>
      <Search filter={filter} handleFilterChange={handleFilterChange} />
      <Countries countries={countries} country={country} filter={filter} showCountry={showCountry} resetSearch={resetSearch}/>
    </div>
  );
}

export default App;