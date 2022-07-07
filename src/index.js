import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Login } from './Login';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import App from "./App"
import reportWebVitals from './reportWebVitals';
import { extendTheme, ChakraProvider, Switch } from '@chakra-ui/react';
import { MoralisProvider } from "react-moralis";
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  }
})
const serverUrl = "https://ngip98jujd94.usemoralis.com:2053/server";
const appId = "MRqxEl9hmtliTwkUqO3uwv1GgJlqFCtakLhQAEIM";
root.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/App" element={<App />} />
          </Routes>
          {/* <Login /> */}
          {/* <App/> */}
        </Router>
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>
);

reportWebVitals();
