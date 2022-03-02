import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alli from './components/Alli'
import Header from './components/Header'
import Body from './components/Body'

render(
 
    <Header />,
 
  document.getElementById('root')
);
render(
 
  <Body />,

document.getElementById('facebook')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
