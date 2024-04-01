import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import './reet.css'
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);

//without redux persist
{/* <Provider store={store}>
    <App />
  </Provider>, */}

//without redux
{/* <React.StrictMode>
<App />
</React.StrictMode>, */}