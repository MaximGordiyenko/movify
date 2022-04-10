import { usersConstants } from '../../constants/users.constants';

export const users = (state = {}, action) => {
  switch (action.type) {
    case usersConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case usersConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case usersConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
};