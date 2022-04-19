import axios from "axios";
import { rapidApi, imdbURL } from '../../config/keys';
import { commonConstants } from "../../constants/common.constants";
import { errorAction } from "./errors.action";

export const success = api => ({
  type: commonConstants.GET_SUCCESS,
  api,
});

export const gameOfThrones = () => dispatch => {
  const options = {
    method: 'GET',
    url: `${imdbURL}`,
    params: { q: 'game of thr' },
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': `${rapidApi}`
    }
  };
  
  return axios.request(options)
    .then(response => dispatch(success(response.data.d)))
    .catch(error => dispatch(errorAction.failure(error)));
};