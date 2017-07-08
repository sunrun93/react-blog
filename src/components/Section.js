require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

export default class Section extends Component{
render(){
    return(
        <div className="section">
            <h1>Section</h1>
        </div>
    )}

}