require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

export default class Nav extends Component{
render(){
    const data = this.props.data;
    const nav_items = data.map((item)=>{
        return(
            <li className='navItem' key={item.id}> {item.name} </li>
        )
    })
    return(
        <div className="nav">
            <span className="navIcon"></span>
            <ul>{nav_items}</ul>
        </div>
    )}

}