import './Home.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import * as actions from '../../Redux/actions';
import CountryCard from '../CountryCard/CountryCard.jsx';

import SearchBar from '../SearchBar/SearchBar.jsx';
import SortAlph from '../Barra/SortAlph.jsx';
import SortPop from '../Barra/SortPop.jsx';
import FilterCont from '../Barra/FilterCont.jsx';
import Pagination from '../PaginationComp/Pagination';
import { Link } from 'react-router-dom';
//import CreateForm from '../CreateForm/CreateForm';


//import { sortCountriesAlph } from '../../Redux/actions'

const Home = () => {
  const dispatch = useDispatch();

  // PARA RENDERIZAR CARDS
  const countries = useSelector((state) => state.countries)
  useEffect(() => { dispatch(actions.getAllCountries()) }, [dispatch] ) //asdad

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

  // ORDENAMIENTO
  const [ option, setOption ]  = useState('');
  console.log(option)

  function sortCountriesAlph(e){
    dispatch(actions.sortCountriesAlph(e.target.value))
    setOption(e.target.value);
    setCurrentPage(1)
    console.log('sortCountriesAlphe '+e.target.value)
  }

  function sortCountriesPop(e){
    dispatch(actions.sortCountriesPop(e.target.value))
    setOption(e.target.value);
    setCurrentPage(1)
    console.log('sortCountriesPop '+e.target.value)
  }

  // FILTROS
  function filterCountriesCont(e){
    dispatch(actions.filterByContinent(e.target.value))
    setOption(e.target.value);
    setCurrentPage(1)
    console.log('filterCountriesCont '+e.target.value)
  }

  console.log(countries)

  return (
    <div className='containerPrincipal'>
      <div>
        <h1>Henry Countries</h1>
        <Link to = '/activities'> <h2>Create</h2> </Link>
      </div>
      <div >
        <SearchBar />
        <SortAlph handleSortCountries = {sortCountriesAlph} /> 
        <SortPop handleSortCountries = {sortCountriesPop} />
        <FilterCont handleFilterContinent = {filterCountriesCont}/>

      </div>
      {/* <NavBar /> */}
      <div className='paginationContainer'>
        <Pagination
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paginate={paginated}
        />
      </div>
      <div className='cardsContainer'>        
        {        
          currentCountries ? 
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
          <h3>Loading</h3> 
        }

      </div>
    </div>
  )
}

export default Home