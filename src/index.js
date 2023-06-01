import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthLayout>
        <BrowserRouter basename="/">
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </AuthLayout>
    </PersistGate>
  </Provider>
);
