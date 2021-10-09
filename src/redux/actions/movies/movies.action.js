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
      'x-rapidapi-key': 'b4aeee3b75msh751306c9d9aaf5cp181842jsne875bf5aecea'
    }
  };
  
  return axios.request(options)
    .then(response => dispatch(getSuccess(response.data.d)))
    .catch(error => dispatch(getFailure(error)));
};
