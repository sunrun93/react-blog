import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//import {Route,Router,hashHistory} from 'react-router';
import {HashRouter, Route} from 'react-router-dom';
import App from './components/Main';
import RouterTest from './components/RouterTest';

// Render the main component into the dom
ReactDOM.render((
    <HashRouter>
        <div>
            <Route path='/' component={App} />
            <Route path='/test' component={RouterTest} />
        </div>
    </HashRouter>
    ), document.getElementById('app'));
