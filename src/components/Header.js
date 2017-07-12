require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

let NavBar = React.createClass({
    render:function(){
        const data=this.props.data;
        const navBarItems=data.map((item)=>{
            return(
                <li className="navBarItem">{item}</li>
            )
        });
        return(
            <ul className="navBar">
                <li>{navBarItems}</li>
            </ul>
        )
    }
});

export default class Header extends Component{
render(){
    const data = this.props.data;
    return(
        <div className="header">
            <h1>{data.title}</h1>
            <h4>{data.desp}</h4>
            <NavBar data={data.navItems}/>
        </div>
    )}

}