import { 
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_BY_NAME,
  SORT_COUNTRIES_ALPH, 
  FILTER_BY_CONTINENT, 
  SORT_COUNTRIES_POP, 
  POST_ACTIVITY,
  GET_ACTIVITIES,
  FILTER_BY_ACTIVITY
} from '../actions';

const initialState = {
  countries: [],
  countryDetail: [],
  sortCountries: [],
  activities: [],
  sortActivities: []
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        sortCountries: action.payload,
        countryDetail: [],
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

    case SORT_COUNTRIES_ALPH:
      console.log('payloadAlph: ' +action.payload)
      const sorted =
        action.payload === 'asc' ? 
        state.sortCountries.sort((a, b) => a.name.localeCompare(b.name)) : 
        state.sortCountries.sort((a, b) => b.name.localeCompare(a.name))

      console.log(sorted)
      return { 
        ...state, 
        sortCountries: action.payload === 'All' ? state.countries : sorted 
      }
    
    case SORT_COUNTRIES_POP:
      console.log('payloadPop: ' +action.payload)      
      return { 
        ...state, 
        countries :  action.payload === 'asc' ? state.countries.sort((a, b) => a.population - b.population) : state.countries.sort((a, b) => b.population - a.population),
      }
    
    case FILTER_BY_CONTINENT:
      console.log('payloadCont: ' +action.payload)

      let filtered; 
      if(action.payload !== 'All') filtered  = state.sortCountries.filter((c) => c.continent === action.payload)
      return { 
        ...state, 
        countries: action.payload === 'All' ? state.sortCountries : filtered
      }
    
    case POST_ACTIVITY:
      console.log('payload post:' + action.payload)
      return {
        ...state,
      }

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        sortActivities: action.payload
      }
    
    
    case FILTER_BY_ACTIVITY:
      console.log('payloadAct: ' +action.payload)
      
      const countriesAct = state.sortCountries.filter((pais) => pais.activities.length > 0);  

      let array = [];

      for (let i = 0; i < countriesAct.length; i++) {
        for (let j = 0; j < countriesAct[i].activities.length; j++) {
          if (countriesAct[i].activities[j].name === action.payload) {
            array.push(countriesAct[i]);
          }
        }
      }

      return {
        ...state,
        countries:  action.payload === "All" ? state.sortCountries : array
      }
    
    default:
      return state

  }
};



export default rootReducer;