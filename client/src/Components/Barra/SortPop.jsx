import s from './Barra.module.css'

import React from 'react';

const SortPop = (props) => {  
  return (
    <div className={s.container}>
      <label className={s.label}>
        Orden por Poblacion:
      </label>      
        <select className={s.select} onChange={(e) => props.handleSortCountries(e)}>
          <option value='All'>Todos</option>
          <option value='asc'>Ascendentemente</option>
          <option value='desc'>Descendentemente</option>
        </select>
    </div>
  )
}

export default SortPop
