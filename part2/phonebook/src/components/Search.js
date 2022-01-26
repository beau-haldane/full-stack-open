import React from 'react'

const Search = ({filter, handleFilterChange}) => {
    return(
        <div>
            Search phonebook <input value={filter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Search

