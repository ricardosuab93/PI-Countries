import s from './LandingPage.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import A_large_blank_world_map from './A_large_blank_world_map.svg';
//import Home from '../Home/Home.jsx';

export default function LandingPage() {
  return (
    <div className={s.landingContainer}>
      <h1>Henry Countries</h1>
      <h3>Mi proyecto individual de SoyHenry</h3>
      <Link className={s.link} to= {'/home'}><h1> comencemos </h1></Link>
      {/* <img src={A_large_blank_world_map} alt='Mapa Mundi'/> */}
    </div>
  )
}
