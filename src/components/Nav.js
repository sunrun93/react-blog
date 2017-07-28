require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';
import AppStore from '../stores/AppStore';
let jsData = require('../stores/javascript.json');
let htmlData = require('../stores/html.json');


let Nav = React.createClass({
    handleClick: function(i){
        this.props.navTo(i);
    },
   
    render: function () {
        const jsNavItems = jsData.map(function(item,i){
            return (
                <li className='navItem' onClick={this.handleClick.bind(this,i)} key={i}>{item.title}</li>
            )
        },this);
        const htmlNavItems = htmlData.map(function(item,i){
            return (
                <li className='navItem' key={i}>{item.title}</li>
            )
        },this)
    return(
        <div className="nav">
            <span className="navIcon"></span>
            <span>javascript基础</span>
            <ul>{jsNavItems}</ul>
            <span>HTML简介</span>
            <ul>{htmlNavItems}</ul>
        </div>
    )}
    
})
export default Nav;