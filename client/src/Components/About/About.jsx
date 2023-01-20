import './About.css'

import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='contenedorAbout'>
      <div className='contenedorTitAbout'>
        <Link className='link' to='/home'><h1>Henry Countries</h1></Link>
      </div>
      <div className='boxAbout'>
        <div className='titAbout'>
            <h3>Acerca de este proyecto</h3>
        </div>
        <div className='contentAbout'>
            <p className='pAbout'>
                Les presento mi primera aplicación de página única (SPA), usando React para FrontEnd y Redux. Todos los componentes fueron desarrollados con CSS sin el uso de bibliotecas externas. El SPA consume datos de una API ("restcountries" - https://restcountries.com/v3.1/all) a través de un Back End desarrollado en Node.JS usando Express , añadiendo nuevas funcionalidades a la API original. Algunas funcionalidades del proyecto: Búsquedas, pedidos, filtros, creación de actividades y muchas más que están en desarrollo
            </p>
            <h4 className='h4About'>Tecnologias usadas:</h4>
            <ul className='listAbout'>
                <li className='liAbout'><a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel='noopener noreferrer'><img className='imgAbout' src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a> </li>
                <li className='liAbout'><a href="https://www.w3schools.com/css/" target='_blank' rel='noopener noreferrer'><img className='imgAbout' src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50"/></a> </li>
                <li className='liAbout'><a href="https://www.javascript.com/" target="_blank" rel='noopener noreferrer'><img className='imgAbout' src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a> </li>
                <li className='liAbout'><a href="https://reactjs.org/" target='_blank' rel='noopener noreferrer'><img className='imgAbout' src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a> </li>
                <li className='liAbout'><a href="https://redux.js.org/" target="_blank" rel='noopener noreferrer'><img className='imgAbout' src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" height="50" /></a> </li>
                <li className='liAbout'><a href="https://nodejs.org/" target="_blank" rel='noopener noreferrer'><img className='imgAbout' src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a></li>
                <li className='liAbout'><a href="https://expressjs.com/" target="_blank" rel='noopener noreferrer'><img className='imgAbout' src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="50" /></a></li>
                <li className='liAbout'><a href="https://github.com/" target="_blank" rel='noopener noreferrer'><img className='imgAbout' src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a> </li>
                <li></li>
                <li></li>
            </ul>
            <h4 className='h4About'>Más acerca de mi:</h4>
            <ul className='listAbout'>
                <li className='liAbout'><a href="https://www.linkedin.com/in/ricardosuab93/" target="_blank" rel='noopener noreferrer'><img className='imgAbout' src="https://img.freepik.com/free-icon/linkedin_318-183415.jpg?w=2000" alt="HTML5" height="50" /></a> </li>
                <li className='liAbout'><a href="https://github.com/ricardosuab93" target='_blank' rel='noopener noreferrer'><img className='imgAbout' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="CSS3" height="50"/></a> </li>
                {/* <li className='liAbout'><a href="https://www.javascript.com/" target="_blank" rel='noopener noreferrer'><img className='imgAbout' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="JavaScript" height="50" /></a> </li> */}
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default About
