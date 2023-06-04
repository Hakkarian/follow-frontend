import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import '@fontsource/montserrat/500.css';

import App from './components/App';
import { persistor, store } from 'redux/store';
import { ThemeProvider } from '@emotion/react';
import theme from 'constants/theme';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
        {/* </PersistGate> */}
      </Provider>
  </React.StrictMode>
);

