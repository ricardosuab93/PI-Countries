import './SearchBar.css'

import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../../Redux/actions';

const SearchBar = ({setCurrentPage}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  //React.useEffect(() => { dispatch(actions.getCountryDetail(id)) }, [id, dispatch] ) //asdad
  React.useEffect(() => { 
    dispatch(getCountryByName(name))
    setCurrentPage(1)
  }, [name,setCurrentPage, dispatch] ) //asdad


  return (
    <div className='search'>
      <input className='inputSearch' type='text' value={name} placeholder='Busca tu pais...' 
        onChange={handleInputChange} />
      {/* <button type='submit' onClick={handleSubmit}>Buscar</button> */}
    </div>
  )
}

export default SearchBar
