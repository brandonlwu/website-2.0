import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Keysho } from "keysho";
import "keysho/dist/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Keysho 
      config_uuid='3c9ed494-f62c-11ec-9ceb-f2074a2bdc61' 
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
