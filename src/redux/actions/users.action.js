import { usersConstants } from '../../constants/users.constants';
import { alertActions } from './alert.actions';

const request = () => {
  return {
    type: usersConstants.GETALL_REQUEST,
  };
};

const success = users => {
  return {
    type: usersConstants.GETALL_SUCCESS,
    users,
  };
};

const failure = error => {
  return {
    type: usersConstants.GETALL_FAILURE,
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