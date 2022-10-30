export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME';
export const SORT_COUNTRIES_ALPH = 'SORT_COUNTRIES_ALPH';
export const SORT_COUNTRIES_POP = 'SORT_COUNTRIES_POP';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const GET_ERROR_NAME = 'GET_ERROR_NAME'


export const getAllCountries = () => {
    return async function (dispatch){
        return (fetch('http://localhost:3001/countries')
        .then(response => response.json())
        .then(response => dispatch({type: GET_ALL_COUNTRIES, payload: response})));
    }
};

export const getCountryDetail = (id) => {
    return async function (dispatch){
        return (fetch(`http://localhost:3001/countries/${id}`)
        .then(response => response.json())
        .then(response => dispatch({type: GET_COUNTRY_DETAIL, payload: response})))
    }
};

export const getCountryByName = (name) => {
    return async function (dispatch){
        return (fetch(`http://localhost:3001/country?name=${name}`)
        .then(response => response.json())
        .then(response => dispatch({type: GET_COUNTRY_BY_NAME, payload: response})))
        //.catch(error => dispatch({type: GET_ERROR_NAME, payload:error})))
    }
};

export const sortCountriesPop = (order) => {
    return {
        type: SORT_COUNTRIES_POP,
        payload: order
    }
};

export const sortCountriesAlph = (order) => {
    return {
        type: SORT_COUNTRIES_ALPH,
        payload: order
    }
};

export const filterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
};
