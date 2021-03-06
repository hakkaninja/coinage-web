import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss, Route } from 'react-router-dom';
import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

const Root = () => (
    <BrowserRouter>
        <Route exact={true} path='/' render={() => (<App />)} />
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
