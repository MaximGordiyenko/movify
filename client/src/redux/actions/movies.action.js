import axios from "axios";
import { commonConstants } from "../../constants/common.constants";

export const getSuccess = api => ({
  type: commonConstants.GET_SUCCESS,
  api,
});

export const getFailure = error => ({
  type: commonConstants.GET_FAILURE,
  error,
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