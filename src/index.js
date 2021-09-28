import { render } from 'react-dom';
import { App } from './Components/App';
import { Provider } from 'react-redux';
import configureStore from '../src/store/store';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./constants";

const store = configureStore();

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
