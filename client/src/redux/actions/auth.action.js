import axios from "axios";
import { setAuthToken } from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { authConstants } from "../../constants/auth.constants";
import { localhost, port } from '../../config/keys';
import { errorAction } from "./errors.action";

const success = user => ({
  type: authConstants.USER_REGISTER,
  user,
});

// Register User
const register = userData => dispatch => {
  axios.post(`${localhost}:${port}/api/users/register`, userData)
    .then(res => dispatch(success(res.data)))
    .catch(error => dispatch(errorAction.failure(error)));
};


// Set logged in user
const setUser = jwt => ({
  type: authConstants.USER_LOGIN,
  jwt,
});

// Login - get user token
const login = userData => dispatch => {
  axios.post(`${localhost}:${port}/api/users/login`, userData)
    .then(res => {
      // Save to localStorage & Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setUser(decoded));
    })
    .catch(error => dispatch(errorAction.failure(error)));
};

// Log user out
const logout = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setUser({}));
};

export const authAction = {
  register,
  login,
  setUser,
  logout,
};