import React from 'react';


const FilterCont = (props) => {
 

  return (
    <div>
       {/* <input type='text' value={continent} placeholder='Busca tu pais...' onChange={handleInputChange} />       */}
      <label>
      Filter by continent:
        <select onChange={(e) => props.handleFilterContinent(e)} >
          <option value="All">All</option>
          <option value="South America"> South America </option>
          <option value="North America"> North America </option>
          <option value="Europe"> Europe </option>
          <option value="Africa"> Africa </option>
          <option value="Asia"> Asia </option>
          <option value="Oceania"> Oceania </option>
        </select>
      </label>
    </div>
  )
}

export default FilterCont
