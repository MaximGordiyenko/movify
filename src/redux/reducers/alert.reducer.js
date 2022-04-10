import { alertConstants } from '../../constants/alert.constants';

const alertState = {
  type: 'alert-success',
  message: 'Is everything ok'
};

export const alert = (state = alertState, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
};