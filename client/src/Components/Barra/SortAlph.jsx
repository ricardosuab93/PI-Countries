import React from 'react';

const SortAlph = (props) => {  

  return (
    <div>
      <label>
        Sort alphabetically
        <select onChange={(e) => props.handleSortCountries(e)}>
          <option value='all'>All</option>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
      </label>
    </div>
  )
}

export default SortAlph
