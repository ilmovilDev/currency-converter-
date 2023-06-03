import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material';
import CurrencyProvider from './context/CurrencyContext.jsx';
import AppTheme from './theme/AppTheme.jsx';

import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <AppTheme>
      <CurrencyProvider>
        <CssBaseline />
        <App />
      </CurrencyProvider>
    </AppTheme>
  //</React.StrictMode>,
)
