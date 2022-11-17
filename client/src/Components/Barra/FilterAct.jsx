import s from './Barra.module.css'

import React from 'react'

const FilterAct = (props) => {  
  //console.log(props.activities)
  return (
    <div className={s.container}>
        <label className={s.label}>
          Filtra por actividad:
        </label>
          {(props.activities.length === 0)? <p>No se han creado actividades</p> :
            <select className={s.select} onChange={(e) => props.handleFilterActivity(e)} >
            <option value='All'> Todos </option>
            {
              props.activities?.map((a) => (
                <option value={a.name}>{a.name}</option>
              ))
            }
               
            </select>
          }
    </div>
  )
}

export default FilterAct
