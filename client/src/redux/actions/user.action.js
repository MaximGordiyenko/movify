import { userConstants } from '../../constants/user.constants';
import { userService } from '../../services/user.service';
import { alertAction } from './alert.action';

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

const login = (username, password) => dispatch => {
  dispatch(request({ username }));
  userService.SignIn(username, password)
    .then(
      user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertAction.error(error));
      }
    );
};

const logout = () => {
  userService.SignOut();
  return {
    type: userConstants.LOGOUT
  };
};

export const userAction = {
  login,
  logout,
}