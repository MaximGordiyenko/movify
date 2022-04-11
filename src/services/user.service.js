import config from '../config.json';
import { authHeader } from '../helpers/auth-header';

export const SignIn = (username, password) => {
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

export const SignOut = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};

export const getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  
  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
};

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto SignOut if 401 response returned from api
        SignOut();
        // window.location.reload()
        window.location.reload(true);
      }
      
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    
    return data;
  });
};