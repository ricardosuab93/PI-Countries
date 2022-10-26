import './CountryCard.css'
import React from 'react';

const CountryCard = (props) => {
  return (
    <div className='card'>
      <img src={props.flag} alt="country_flag" />
      <h3>{props.name}</h3>
      <h4>{props.continent}</h4>
    </div>
  )
}

export default CountryCard
