import { render } from 'react-dom';
import { App } from './Components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./constants";
import { store } from "./redux/store";

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
