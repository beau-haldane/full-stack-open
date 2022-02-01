import React from 'react'
import DisplayCountry from './DisplayCountry'
import DisplayList from './DisplayList';

const Countries = ({countries, country, filter, showCountry, resetSearch}) => {
    const filteredList = 
        countries
        .filter(country => country.name.common
        .toLowerCase()
        .includes(filter.toLowerCase()));

    if (filteredList.length > 10 ){
        return(
            <div>
                <h2>Countries</h2>
                Too many matches, specify another filter
            </div> 
        )
    } else if (Object.keys(country).length > 0){
        return (
            <DisplayCountry country = {country} resetSearch={resetSearch}/> 
        )  
    } else {
        
        return <DisplayList filteredList = {filteredList}  showCountry={showCountry} />
    }
}

export default Countries