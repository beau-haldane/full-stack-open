import React from 'react'

const DisplayList = ({filteredList, showCountry}) => {
    return(
        <div>
                <h2>Countries</h2>
                {
                    filteredList
                    .map(country => 
                        <p key={country.name.common}>
                            {country.name.common}
                            <button 
                                onClick={showCountry}
                                id = {country.name.common}
                            >
                                Show More
                            </button>
                        </p>
                    )
                }
            </div>
    )
}

export default DisplayList