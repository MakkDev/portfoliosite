import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    h8: {
      fontFamily:"Montserrat", fontWeight:"600", fontSize:"10px", textAlign:"center"  
    },
    h7: {
      fontFamily:"Montserrat", fontWeight:"600", fontSize:"15px", textAlign:"center"  
    },
    h6: {
      fontFamily:"Montserrat", fontWeight:"600",  
    },
    h5: {
      fontFamily:"Montserrat", fontWeight:"600", textAlign:"center",color:"#06000C"
    },
    h4:{
      fontFamily:"Montserrat", fontWeight:"500", textAlign:"center",color:"#06000C"
    },
    h3:{
      fontFamily:"Montserrat", fontWeight:"500", textAlign:"center", 
    },    
    h2:{
     fontSize:"400%", fontFamily:"Cormorant, serif", fontWeight:"600", textAlign:"center",
    },    
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

