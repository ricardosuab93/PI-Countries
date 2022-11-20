import './Comp404.css'

import React from 'react';
import { Link } from 'react-router-dom';

import Page404 from '../../Images/404.jpg'

function Comp404() {
  return (
    <div className='mainContainer'>
      <img src={Page404} alt='404' />
      <Link to='/home'>
        <button>Go Home</button>
      </Link>
    </div>
  )
}

export default Comp404
