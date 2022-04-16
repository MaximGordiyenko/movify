import { userConstants } from '../../constants/user.constants';
import { alertAction } from './alert.action';
import { userService } from "../../services/user.service";

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

const getAll = () => dispatch => {
  dispatch(request());
  userService.getAll()
    .then(
      users => dispatch(success(users)),
      error => {
        dispatch(failure(error));
        dispatch(alertAction.error(error));
      }
    );
};

export const usersAction = {
  getAll,
};