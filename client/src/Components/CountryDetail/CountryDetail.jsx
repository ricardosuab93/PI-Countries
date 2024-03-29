import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import './CountryDetail.css';
import imgLoading from '../../Images/a2d9a-mapamundi.webp'
import * as actions from '../../Redux/actions';

import imgReverse from '../../Images/globe-15.webp'

const CountryDetail = (props) => {
  const dispatch = useDispatch();
  let id = props.match.params.id;
  //let { id } = useParams();

  console.log(id);
  
  const countryDetail = useSelector(state => state.countryDetail)[0];
  console.log(countryDetail);

  React.useEffect(() => { dispatch(actions.getCountryDetail(id)) }, [id, dispatch] ) //asdad
  

  const formatNumber = (num) => {
    let str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");
  }

  return (
    <div className='contenedorDetail'>
      <div className='contenedorTitle'>
        <Link className='link' to='/home'><h1>Henry Countries</h1></Link>
      </div>
      <h1>Detalles de pais</h1>
      {
        countryDetail ?
        <div className='infoContainer'>
          <div className='countryDetail'>
            <div className='card'>
              <div className='infoPrincipal'>
                <img className='flag' src={countryDetail.flag} alt={countryDetail.name} />
                <h1>{countryDetail.name} - {countryDetail.id}</h1>
                <h1>{countryDetail.continent}</h1>
                <div className='voltear'>
                  <p>Girar para detalles</p>
                  <img className="reverso" src={imgReverse} alt="asdsad" />
                </div>
              </div>
              <div className='infoSecundaria'>
                <h1>Detalles</h1>
                <h3>Capital: {countryDetail.capital}</h3>
                <h3>Subregion: {countryDetail.subregion}</h3>
                <h3>Area: {formatNumber(countryDetail.area)} km².</h3>
                <h3>Poblacion: {formatNumber(countryDetail.population)} hab.</h3>
                <Link to='/activities'> <button className='buttonCard'>Crear actividad</button> </Link>
              </div>
            </div>       
          </div>
          <div className='infoActividad'>
              <h1>Actividades: </h1>              
                {
                countryDetail.activities.length > 0? 
                  countryDetail.activities.map(a => 
                    <ul>
                      <h2>{a.name}</h2>
                    </ul>
                  )
                  :
                  <h2>Sin actividades aun</h2>
                }
            </div>
        </div>
        :
        <div>
          <img src={imgLoading} alt='Loading'/>
        </div>
      }
      
    </div>
  )
}

export default CountryDetail
