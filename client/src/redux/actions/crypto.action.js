import axios from "axios";
import { commonConstants } from "../../constants/common.constants";
import { errorAction } from "./errors.action";

export const getSuccess = api => ({
  type: commonConstants.GET_SUCCESS,
  api,
});

export const multiCurrencies = () => dispatch => {
  return axios.get(`${process.env.REACT_APP_SERVER_API}/cryptos`)
    .then(res => dispatch(getSuccess(res.data)))
    .catch(error => dispatch(errorAction.failure(error)));
};