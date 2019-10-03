import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BackEnd from './BackEnd';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

//ReactDOM.render(<App />, document.getElementById('root'));


import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <BackEnd />
    </BrowserRouter>, 
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
