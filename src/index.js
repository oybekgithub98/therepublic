import React, {Suspense} from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import "./i18n";

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback="...Loading">
      <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
reportWebVitals();
