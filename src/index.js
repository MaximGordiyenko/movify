import { render } from 'react-dom';
import { App } from './Components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from "./redux/store";
import { theme } from "./constants";
import { ThemeProvider } from "@material-ui/core";

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
