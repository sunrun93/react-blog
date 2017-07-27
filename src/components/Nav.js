require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';
import AppStore from '../stores/AppStore';
let articleData = require('../stores/article.json');

const navData = articleData;
let Nav = React.createClass({
    handleClick: function(i){
        this.props.navTo(i);
    },
   
    render: function () {
        const navItems = navData.map(function(item,i){
            return (
                <li className='navItem' onClick={this.handleClick.bind(this,i)} key={i}>{item.title}</li>
            )
        },this)
    return(
        <div className="nav">
            <span className="navIcon"></span>
            <ul>{navItems}</ul>
        </div>
    )}
    
})
export default Nav;