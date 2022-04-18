import axios from "axios";
import { setAuthToken } from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { authConstants } from "../../constants/auth.constants";
import { localhost, port } from '../../config/keys';

const success = user => {
  return {
    type: authConstants.USER_REGISTER,
    user,
  };
};

const failure = error => {
  return {
    type: authConstants.GET_ERRORS,
    error,
  };
};

// Register User
const registerUser = userData => dispatch => {
  axios.post(`${localhost}:${port}/api/users/register`, userData)
    .then(res => dispatch(success(res.data)))
    .catch(err => dispatch(failure(err?.response?.data)));
};


// Set logged in user
const setUserLogin = jwt => {
  return {
    type: authConstants.USER_LOGIN,
    jwt,
  };
};

// Login - get user token
const loginUser = userData => dispatch => {
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
      dispatch(setUserLogin(decoded));
    })
    .catch(err => dispatch(failure(err?.response?.data)));
};

// Log user out
const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setUserLogin({}));
};

export const authAction = {
  registerUser,
  loginUser,
  setCurrentUser: setUserLogin,
  logoutUser,
};