import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL,GET_COUNTRY_BY_NAME,SORT_COUNTRIES_ALPH, FILTER_BY_CONTINENT, SORT_COUNTRIES_POP, GET_ERROR_NAME } from '../actions';

const initialState = {
  countries: [],
  countryDetail: [],
  sortCountries: [],
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        sortCountries: action.payload
      }
      
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload
      }

    case GET_COUNTRY_BY_NAME:
      return{
        ...state,
        countries: action.payload
      }
    // case GET_ERROR_NAME:
    //   return{
    //     ...state,
    //     countries: action.payload
    // }

    case SORT_COUNTRIES_ALPH:
      console.log('payloadAlph: ' +action.payload)
      const sorted =
        action.payload === 'asc' ? 
        state.sortCountries.sort((a, b) => a.name.localeCompare(b.name)) : 
        state.sortCountries.sort((a, b) => b.name.localeCompare(a.name))

      console.log(sorted)
      return { 
        ...state, 
        sortCountries: action.payload === 'all' ? state.countries : sorted 
      }
    
    case SORT_COUNTRIES_POP:
      console.log('payloadPop: ' +action.payload)      
      return { 
        ...state, 
        countries :  action.payload === 'asc' ? state.countries.sort((a, b) => a.population - b.population) : state.countries.sort((a, b) => b.population - a.population),
      }
    
    case FILTER_BY_CONTINENT:
      console.log('payloadCont: ' +action.payload)
      //const allCountries2 = state.countries;
      //console.log(allCountries)
      let filtered; 
      if(action.payload !== 'All') filtered  = state.sortCountries.filter((c) => c.continent === action.payload)
      
        console.log(filtered)

    return { ...state, countries: action.payload === 'All' ? state.sortCountries : filtered}
      
    default:
      return state

  }
};



export default rootReducer;