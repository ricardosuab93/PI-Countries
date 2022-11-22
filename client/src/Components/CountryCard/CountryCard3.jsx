import './CountryCard.css'
import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
  //console.log(props)
  return (
    <div className='cardCountry'>
      <Link className='cardLink' to={`/countries/${props.id}`}>
        <img src={props.flag} alt="country_flag" />
        <h3>{props.name}</h3>
        <h4>{props.continent}</h4>
      </Link>
    </div>
  )
}

export default CountryCard
