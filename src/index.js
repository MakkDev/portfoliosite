import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    h6: {
      color:"#E1F9FF"
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <ThemeProvider theme={theme}> 
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

