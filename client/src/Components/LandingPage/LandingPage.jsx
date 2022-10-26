import React from 'react';
import { Link } from 'react-router-dom';
//import Home from '../Home/Home.jsx';

export default function LandingPage() {
  return (
    <div>
      <h1>Henry Countries</h1>
      <h3>este es el landing</h3>
      <Link to= {'/home'}><h1> Comencemos </h1></Link>
    </div>
  )
}
