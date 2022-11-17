import s from './CreateForm.module.css'

import React from 'react';

import{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { getAllCountries, postActivity } from '../../Redux/actions';

function validate(input){
  let errors = {}
  let duracion = Number(input.duration);
  let dificultad = Number(input.difficulty);

  if(!input.name) errors.name = 'Campo Necesario'
  else if (/[^A-Za-z]+/g.test(input.name)) errors.name = 'Nombre solo puede tener letras'

  if(!input.difficulty) errors.difficulty  = 'Campo Necesario'
  else if (dificultad <= 0 || dificultad > 5) errors.difficulty = 'Debe ser entre 1 y 5'
      
  if(!input.duration) errors.duration  = 'Campo Necesario'
  else if (/[^0-9]+/g.test(input.duration)) errors.duration = 'Debe ser solo números'
  else if (duracion <= 0 || duracion > 24) errors.duration = 'Debe ser entre 1 y 24'

  if(!input.season || input.season === '---') errors.season  = 'Campo Necesario'

  if(!input.countries || input.countries.length === 0) errors.countries  = 'Campo Necesario'

  return errors;
}

const CreateForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries.sort((a, b) => a.name.localeCompare(b.name)))

  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!input.name || !input.difficulty || !input.duration || !input.season || !input.countries) {
      //console.log(input.name, input.difficulty, input.duration, input.season, input.countries)
      return alert ('Complete correctamente el formulario antes de enviarlo')
    }
    dispatch(postActivity(input));
    alert("Actividad Creada Exitosamente");
    setInput({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: []
    })
    history.push('/home')
  }

  const handleCountriesSelected = (e) => {
    setInput({
      ...input,
      //countryId: [state.countryId.concat(e.target.value)]
      countries: [...input.countries, e.target.value]
      // input.countries.includes(e.target.value)?alert('Ya existe'):
    })
    setErrors(validate({
      ...input,
      countries: [...input.countries, e.target.value]
    }))

    //console.log(input.countries)
  }

  function handleDelete(e) {
    setInput({
        ...input,
        countries: input.countries.filter( con => con !== e)
    })
}
  
  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])
  
  return (
    <div className={s.mainContainer}>
      <div className={s.header}>
        <Link className={s.link} to='/home'>
          {/* <h2>Atras</h2> */}
          <h1>Henry Countries</h1>
        </Link>
      </div>
      <div className={s.formContainer}>
        <h2>Nueva Actividad Turistica</h2>
        <form onSubmit={handleOnSubmit}>
          <div className={s.fieldContainer}>
            <label className={s.label}>Nombre: </label>
            <input className={s.inputForm} type='text' value= {input.name} name='name' placeholder='Name here...' onChange={handleChange} />
            {errors.name && (<p className={s.error}>{errors.name}</p>)}
          </div>
          <div className={s.fieldContainer}>
            <label className={s.label}>Dificultad: </label>
            {/*
            <select name="difficulty" onChange={handleChange}>
              <option value="---">Select difficulty</option>
              <option value="1">Very Easy</option>
              <option value="2">Easy</option>
              <option value="3">Medium</option>
              <option value="4">Hard</option>
              <option value="5">Very Hard</option>
            </select>          
            */}
            <input className={s.inputForm} type='number' name='difficulty' value={input.difficulty} placeholder='Difficulty here...' onChange={handleChange} />
            {errors.difficulty && (<p className={s.error}>{errors.difficulty}</p>)}

          </div>
          <div className={s.fieldContainer}>
            <label className={s.label}>Temporada: </label>
            <select className={s.selectForm} name='season' onChange={handleChange} >
              <option value='---'>Select season</option>
              <option value='Summer'>Verano</option>
              <option value='Autumn'>Otoño</option>
              <option value='Winter'>Invierno</option>
              <option value='Spring'>Primavera</option>
            </select>
            {errors.season && (<p className={s.error}>{errors.season}</p>)}
          </div>
          <div className={s.fieldContainer}>
            <label className={s.label}> Duracion (horas): </label>
            <input className={s.inputForm} type='text' value={input.duration} name='duration' placeholder='Duration here...' onChange={handleChange} />
            {errors.duration && (<p className={s.error}> {errors.duration} </p>) }
          </div>
          <div className={s.fieldContainer}>
            <label className={s.label}>Paises: </label>
            <select className={s.selectForm} name='countries' onChange={handleCountriesSelected} >
              <option >Select the countries of the activity...</option>
              {countries?.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}   
            </select>
            {errors.countries && (<p className={s.error}> {errors.countries}</p>)}          
          </div>
          <button className={s.buttonForm} type='submit' disabled= {Object.keys(errors).length === 0 ? false : true} >Crear actividad</button>
          <div className={s.selectedContainer}>
            <label className={s.label}>Paises Elegidos</label>
            <div className={s.selected}>
              {
                input.countries && input.countries.map( (e) => 
                  (<div className={s.selectedS} >
                    <button className={s.buttonS} onClick={()=> handleDelete(e)}>x</button>
                    <p className={s.pS} > {e} </p>
                  </div>) 
                )
              }
            </div>
          </div>
        </form>
      </div>      
    </div>
  )
}

export default CreateForm
