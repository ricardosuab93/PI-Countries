import React from 'react'
import s from './Barra.module.css'

function SortArea(props) {
  return (
    <div className={s.container}>
      <label className={s.label}>
        Orden por Area:
      </label>      
        <select className={s.select} onChange={(e) => props.handlesortCountriesArea(e)}>
          <option value='All'>Todos</option>
          <option value='asc'>Ascendentemente</option>
          <option value='desc'>Descendentemente</option>
        </select>
    </div>
  )
}

export default SortArea
