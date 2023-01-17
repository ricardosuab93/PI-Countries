import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const SORT_COUNTRIES_ALPH = "SORT_COUNTRIES_ALPH";
export const SORT_COUNTRIES_POP = "SORT_COUNTRIES_POP";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const SORT_COUNTRIES_AREA = "SORT_COUNTRIES_AREA ";

//const baseUrl = 'http://localhost:3001'
const baseUrl = "https://pi-countries-back-production-93e2.up.railway.app";

export const getAllCountries = () => {
  return async function (dispatch) {
    return fetch(`${baseUrl}/countries`)
      .then((response) => response.json())
      .then((response) =>
        dispatch({ type: GET_ALL_COUNTRIES, payload: response })
      );
  };
};

export const getCountryDetail = (id) => {
  return async function (dispatch) {
    return fetch(`${baseUrl}/countries/${id}`)
      .then((response) => response.json())
      .then((response) =>
        dispatch({ type: GET_COUNTRY_DETAIL, payload: response })
      );
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    return fetch(`${baseUrl}/countries?name=${name}`)
      .then((response) => response.json())
      .then((response) =>
        dispatch({ type: GET_COUNTRY_BY_NAME, payload: response })
      );
    //.catch(error => dispatch({type: GET_ERROR_NAME, payload:error})))
  };
};

export const sortCountriesPop = (order) => {
  return {
    type: SORT_COUNTRIES_POP,
    payload: order,
  };
};

export const sortCountriesAlph = (order) => {
  return {
    type: SORT_COUNTRIES_ALPH,
    payload: order,
  };
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const sortCountriesArea = (order) => {
  return {
    type: SORT_COUNTRIES_AREA,
    payload: order,
  };
};

export const postActivity = (payload) => {
  return async function (dispatch) {
    const response = await axios.post(`${baseUrl}/activities`, payload);
    console.log(response);
    return response;
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const response = await axios.get(`${baseUrl}/activities/`);
    dispatch({ type: GET_ACTIVITIES, payload: response.data });
  };
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
};
