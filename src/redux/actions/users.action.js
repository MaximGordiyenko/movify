import { userConstants } from '../../constants/user.constants';
import { alertActions } from './alert.actions';

const request = () => {
  return {
    type: userConstants.GETALL_REQUEST,
  };
};

const success = users => {
  return {
    type: userConstants.GETALL_SUCCESS,
    users,
  };
};

const failure = error => {
  return {
    type: userConstants.GETALL_FAILURE,
    error,
  };
};

export const getAll = () => dispatch => {
  dispatch(request());
  getAll()
    .then(
      users => dispatch(success(users)),
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
};