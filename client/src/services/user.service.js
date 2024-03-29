import { authHeader } from '../helpers/auth-header';
import { history } from '../helpers/history';

const SignIn = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };
  
  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      
      return user;
    });
};

const SignOut = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};

const getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  
  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
};



export const userService = {
  SignIn,
  SignOut,
  getAll,
}