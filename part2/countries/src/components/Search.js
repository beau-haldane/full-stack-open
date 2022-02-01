import React from 'react'

const Search = ({filter, handleFilterChange}) => {
    return(
        <div>
            Search Countries <input value={filter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Search

