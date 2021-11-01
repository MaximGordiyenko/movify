import axios from "axios";
import { GET_FAILURE, GET_SUCCESS } from "../types";

export const getSuccess = api => ({
  type: GET_SUCCESS,
  payload: api,
});

export const getFailure = error => ({
  type: GET_FAILURE,
  payload: error,
});

export const gameOfThrones = () => dispatch => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: { q: 'game of thr' },
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API
    }
  };
  
  return axios.request(options)
    .then(response => dispatch(getSuccess(response.data.d)))
    .catch(error => dispatch(getFailure(error)));
};