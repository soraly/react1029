import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './css/reset.css';
import App from './App';
import utilities from './utilities'

window.utilities = utilities;

ReactDOM.render(
    <App
    />
    , document.getElementById('root'))

