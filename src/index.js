import { render } from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from "./redux/store";
import { theme } from "./constants";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();