import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../../Redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getCountryByName(name));
    setName('');
  }
  //React.useEffect(() => { dispatch(actions.getCountryDetail(id)) }, [id, dispatch] ) //asdad
  React.useEffect(() => { dispatch(getCountryByName(name)) }, [name, dispatch] ) //asdad


  return (
    <div>
      <input type='text' value={name} placeholder='Busca tu pais...' onChange={handleInputChange} />
      {/* <button type='submit' onClick={handleSubmit}>Buscar</button> */}
    </div>
  )
}

export default SearchBar
