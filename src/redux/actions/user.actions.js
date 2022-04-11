import { userConstants } from '../../constants/user.constants';
import { SignIn, SignOut } from '../../services/user.service';
import { alertActions } from './alert.actions';
import { history } from '../../helpers/history';

const request = user => {
  return {
    type: userConstants.LOGIN_REQUEST,
    user,
  };
};

const success = user => {
  return {
    type: userConstants.LOGIN_SUCCESS,
    user,
  };
};

const failure = error => {
  return {
    type: userConstants.LOGIN_FAILURE,
    error,
  };
};

export const login = (username, password) => dispatch => {
  dispatch(request({ username }));
  SignIn(username, password)
    .then(
      user => {
        dispatch(success(user));
        history.push('/');
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
};

export const logout = () => {
  SignOut();
  return {
    type: userConstants.LOGOUT
  };
};