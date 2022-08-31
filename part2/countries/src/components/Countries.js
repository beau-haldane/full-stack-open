import React from 'react'
import DisplayCountry from './DisplayCountry'
import DisplayList from './DisplayList';

const Countries = ({countries, country, filter, showCountry, resetSearch, api_key, weather, setWeather}) => {
  const filteredList = 
    countries
    .filter(filterCountry => filterCountry.name.common
    .toLowerCase()
    .includes(filter.toLowerCase()));

  if (filter.length === 0 ){
    return(
      <div className="extra-padding">
        Begin typing the name of a country to narrow your search.
      </div> 
    )
  } else if (filteredList.length > 10 ){
    return(
      <div className="extra-padding">
        Too many matches, please narrow your search by typing the name of a country.
      </div> 
    )
  } else if (filter.length !== 0 && filteredList.length === 0){
    return (
      <div className="extra-padding">
        Sorry, no results were found, please try another search term.
      </div>
    )  
  } else if (Object.keys(country).length > 0){
    return (
      <DisplayCountry 
          country = {country} 
          resetSearch={resetSearch}
          api_key={api_key}
          weather={weather}
          setWeather={setWeather}
      /> 
    )  
  } else {
    return <DisplayList 
      filteredList= {filteredList}  
      showCountry={showCountry}
    />
  }
}

export default Countries