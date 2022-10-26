export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';


export const getAllCountries = () => {
    return async function (dispatch){
        return (fetch('http://localhost:3001/countries')
        .then(response => response.json())
        .then(response => dispatch({type: GET_ALL_COUNTRIES, payload: response})));
    }
};