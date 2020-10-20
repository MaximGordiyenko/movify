import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import configureStore from '../src/store/store';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
