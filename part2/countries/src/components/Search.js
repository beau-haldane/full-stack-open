import React from 'react'

const Search = ({filter, handleFilterChange, showSearch}) => {
  if (showSearch === true){
    return(
      <div>
        <input id="drop-shadow" type="text" value={filter} placeholder='Search for a Country...' onChange={handleFilterChange}/>
      </div>
    )
  }else{
    return(
      <div>
      </div>
    )
  }
}

export default Search