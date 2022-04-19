import { history } from "./history";

export const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        //redirect
        history.push('/error');
      }
      
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    
    return data;
  });
};