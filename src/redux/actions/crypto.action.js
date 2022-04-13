import axios from "axios";
import { noteConstants } from "../../constants/note.constants";

export const getSuccess = api => ({
  type: noteConstants.GET_SUCCESS,
  payload: api,
});

export const getFailure = error => ({
  type: noteConstants.GET_FAILURE,
  payload: error,
});

export const multiCurrencies = () => dispatch => {
  return axios.get(`${process.env.REACT_APP_SERVER_API}/cryptos`)
    .then(res => dispatch(getSuccess(res)))
    .catch(error => dispatch(getFailure(error)))
}