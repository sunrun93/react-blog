import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink,hashHistory } from 'react-router'
import App from './components/Main';
import RouterTest from './components/RouterTest';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

// Render the main component into the dom
ReactDOM.render((
    <Router history={history}>
        <div>
            <Route path='/' component={App} />
            <Route path='/test' component={RouterTest} />
        </div>
    </Router>
), document.getElementById('app'));
