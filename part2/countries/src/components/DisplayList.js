import React from 'react'

const DisplayList = ({filteredList, showCountry}) => {
  
  return(
    <div>
      {filteredList
        .map(country => 
          <p className="country-result" key={country.name.common}>
            <button className="country-button" onClick={showCountry} id={country.name.common}>
              {country.name.common}
            </button>
          </p>
        )
      }
    </div>
  )
}

export default DisplayList