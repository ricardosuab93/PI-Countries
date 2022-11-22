import './Home.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import * as actions from '../../Redux/actions';
import CountryCard from '../CountryCard/CountryCard3.jsx';

import SearchBar from '../SearchBar/SearchBar.jsx';
import SortAlph from '../Barra/SortAlph.jsx';
import SortPop from '../Barra/SortPop.jsx';
import FilterCont from '../Barra/FilterCont.jsx';
import Pagination from '../PaginationComp/Pagination';
import FilterAct from '../Barra/FilterAct.jsx';
import GifLoading from '../../Images/globe-15.webp';
import Broken from '../../Images/mapa roto.jpg';
//import CreateForm from '../CreateForm/CreateForm';


const Home = () => {
  const dispatch = useDispatch();

  // PARA RENDERIZAR CARDS
  const countries = useSelector((state) => state.countries)
  useEffect(() => { dispatch(actions.getAllCountries()) }, [dispatch] ) //asdad
  console.log(countries)

  // PARA ACTIVITIES
  const activities = useSelector((state) => state.activities);
  useEffect(() => { dispatch(actions.getActivities()) }, [dispatch] ) //asdad
  //console.log(activities)

  // PARA PAGINACION
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  let indexOfLastCountry;
  let indexOfFirstCountry;
  if (currentPage === 1){
    indexOfLastCountry = 9;
    indexOfFirstCountry = 0
  }else{
    indexOfFirstCountry = ((currentPage - 1) * 10) - 1
    indexOfLastCountry = ((currentPage - 1) * 10) + 9
  }
  // indexOfLastCountry = currentPage * countriesPerPage; //20
  // indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //10
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginated = (pageNumber) => setCurrentPage(pageNumber);
  // console.log(paginated);

  // ORDENAMIENTO
  const [ option, setOption ]  = useState('');
  console.log('option '+option)

  function sortCountriesAlph(e){
    dispatch(actions.sortCountriesAlph(e.target.value))
    setOption(e.target.value);
    setCurrentPage(1)
    //console.log('sortCountriesAlphe '+e.target.value)
  }

  function sortCountriesPop(e){
    dispatch(actions.sortCountriesPop(e.target.value))
    setOption(e.target.value);
    setCurrentPage(1)
    //console.log('sortCountriesPop '+e.target.value)
  }

  // FILTROS
  function filterCountriesCont(e){
    dispatch(actions.filterByContinent(e.target.value))
    setOption(e.target.value);
    setCurrentPage(1)
    //console.log('filterCountriesCont '+e.target.value)
  }
  function filterCountriesAct(e){
    e.preventDefault()
    dispatch(actions.filterByActivity(e.target.value))
    setOption(e.target.value)
    setCurrentPage(1)
    console.log('filterCountriesAct '+e.target.value)
  }



  return (
    <div className='containerPrincipal'>
      {
        countries[0] === 'Ningun pais coincide' ?
          (<div className='errorContainer'>
            <h2>Ningun pais encontrado</h2>
            <h3 onClick={() => window.location.reload()}>Por favor refresca la pagina</h3>
            <img src={Broken}alt='not found' />
            {/*<button onClick={() => window.location.reload()}>refresca la pagina</button>*/}            
          </div>)
      :(
      <>
        <div className='headerContainer'>
          <h1>Henry Countries</h1>
          <Link className='linkCreate' to = '/activities'> <h2>Crear activididad</h2> </Link>
        </div>
        <div className='contentContainer'>
          <div className='filterContainer'>
            <SortAlph handleSortCountries = {sortCountriesAlph} /> 
            <SortPop handleSortCountries = {sortCountriesPop} />
            <FilterCont handleFilterContinent = {filterCountriesCont} />
            <FilterAct activities={activities} handleFilterActivity={filterCountriesAct} />
          </div>
          <div className='centerContainer'>
            <div className='navigationContainer'>
              <SearchBar 
                setCurrentPage={setCurrentPage}
              />
              <Pagination
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                paginate={paginated}
                page={currentPage}
              />
            </div>
            <div className='cardsContainer'>        
              {        
                currentCountries.length > 0 ? 
                currentCountries.map((country) => (            
                  <CountryCard
                    key={country.id}
                    id={country.id}
                    flag={country.flag}
                    name={country.name}
                    continent={country.continent}
                  />
                ))
                :
                  <div className="homeLoading">
                    <img src={GifLoading} alt="Loading" />
                  </div>
                
              }
            </div>
          
          </div>
        </div>
      </>
      )}
    </div>
  )
}

export default Home