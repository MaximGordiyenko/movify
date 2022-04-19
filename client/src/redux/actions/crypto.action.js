import axios from "axios";
import { localhost, port } from '../../config/keys';
import { errorAction } from "./errors.action";
import { cryptoConstants } from "../../constants/crypto.constants";

const success = btcUsd => ({
  type: cryptoConstants.GET_BTC_SUCCESS,
  btcUsd,
});

export const getCandleBTC = () => dispatch => {
  return axios.get(`${localhost}:${port}/api/btc/candle`)
    .then(res => dispatch(success(res.data)))
    .catch(error => dispatch(errorAction.failure(error)));
};