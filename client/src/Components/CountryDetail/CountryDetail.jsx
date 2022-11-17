import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import './CountryDetail.css';
import imgLoading from '../../Images/a2d9a-mapamundi.webp'
import * as actions from '../../Redux/actions';

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
      <h1>Detalles de pais</h1>
      {
        countryDetail ?
        <div className='infoContainer'>
          <div className='countryDetail'>
            <div className='card'>
              <div className='infoPrincipal'>
                <img src={countryDetail.flag} alt={countryDetail.name} />
                <h1>{countryDetail.name} - {countryDetail.id}</h1>
                <h1>{countryDetail.continent}</h1>
              </div>
              <div className='infoSecundaria'>
                <h1>Detalles</h1>
                <h3>Capital: {countryDetail.capital}</h3>
                <h3>Subregion: {countryDetail.subregion}</h3>
                <h3>Area: {formatNumber(countryDetail.area)} km²</h3>
                <h3>Poblacion: {formatNumber(countryDetail.population)}</h3>
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
                  <h1>Sin actividades aun</h1>
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
