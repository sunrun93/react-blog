require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

let Nav = React.createClass({
    handleClick:(index)=>{
        alert(index);
    },
    render:()=>{
    const data = this.props.data;
    const nav_items = data.map((item,index)=>{
        return(
            <li className='navItem' onClick={this.handleClick(index)} key={item.id}> {item.name} </li>
        )
    })
    return(
        <div className="nav">
            <span className="navIcon"></span>
            <ul>{nav_items}</ul>
        </div>
    )}
    
})
export default Nav;