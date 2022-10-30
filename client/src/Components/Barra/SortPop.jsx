import React from 'react';

const SortPop = (props) => {  

  return (
    <div>
      <label>
        Sort by population
        <select onChange={(e) => props.handleSortCountries(e)}>
          <option >All</option>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
      </label>      
    </div>
  )
}

export default SortPop
