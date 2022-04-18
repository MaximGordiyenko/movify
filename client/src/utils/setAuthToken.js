import axios from "axios";
// https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests
export const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};