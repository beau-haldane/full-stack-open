import React, { useState, useEffect }  from 'react'
import CountryNames              from './components/CountryNames'
import Search               from './components/Search'
import axios from 'axios'

const App = () => {

  // ----- States ----- //
      
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])
  
  // ----- Functions -----//

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countryNames = countries.map(country => <p>{country.name.common}</p>)

  // ----- Website ----- //

  return (
    <div className="App">
      <Search filter={filter} handleFilterChange={handleFilterChange} />
      <CountryNames countries={countries} filter={filter} />
    </div>
  );
}

export default App;