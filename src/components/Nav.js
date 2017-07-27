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
        this.props.navTo(this.props.data[i].id);
        this.setState({bgColor:this.state.bgColor ==='blue'?'green':'blue'});
    },
    getInitialState:function(){
        //初始化取值也可以通过intialData取值
        return {bgColor:'blue'}
    },
    render: function () {
        const data = this.props.data;
        const navItems = data.map(function(item,i){
            return (
                <li className='navItem' onClick={this.handleClick.bind(this,i)} style={{color:this.state.bgColor}} key={i}>{item.name}</li>
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