import axios from "axios";
import { localhost, port } from '../../config/keys';
import { commonConstants } from "../../constants/common.constants";
import { errorAction } from "./errors.action";

export const success = api => ({
  type: commonConstants.GET_SUCCESS,
  api,
});

export const multiCurrencies = () => dispatch => {
  return axios.get(`${localhost}:${port}/cryptos`)
    .then(res => dispatch(success(res.data)))
    .catch(error => dispatch(errorAction.failure(error)));
};