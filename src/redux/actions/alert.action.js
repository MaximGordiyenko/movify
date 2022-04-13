import { alertConstants } from '../../constants/alert.constants';

const success = message => {
  return {
    type: alertConstants.SUCCESS,
    message,
  };
};

const error = message => {
  return {
    type: alertConstants.ERROR,
    message,
  };
};

const clear = message => {
  return {
    type: alertConstants.CLEAR,
    message,
  };
};

export const alertAction = {
  success,
  error,
  clear,
};