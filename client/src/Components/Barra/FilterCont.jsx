import s from './Barra.module.css'

import React from 'react';


const FilterCont = (props) => {
  return (
    <div className={s.container}>
      <label className={s.label}>
        Filtra por continente:
      </label>
        <select className={s.select} onChange={(e) => props.handleFilterContinent(e)} >
          <option value="All">Todos</option>
          <option value="South America"> South America </option>
          <option value="North America"> North America </option>
          <option value="Europe"> Europe </option>
          <option value="Africa"> Africa </option>
          <option value="Asia"> Asia </option>
          <option value="Oceania"> Oceania </option>
        </select>
    </div>
  )
}

export default FilterCont
