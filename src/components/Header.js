require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

let NavBar = React.createClass({
    handleClick:function(index){
        this.setState({
            activeIndex:index
        })
    },
    getInitialState: function () {
        return {
            activeIndex: 0
        }
    },
    render:function(){
        const data=this.props.data;
        const navBarItems=data.map(function(item,index){
            return(
                <li onClick={this.handleClick.bind(null,index)} className={this.state.activeIndex==index?'active_nav_bar_item':'nav_bar_item'} key={item}>{item}</li>
            )
        },this);
        return(
            <ul className="nav_bar">{navBarItems}</ul>
        )
    }
});

export default class Header extends Component{
render(){
    const data = this.props.data;
    return(
        <div className="header">
            <h1 className="header_title">{data.title}</h1>
            <h4 className="header_desp">{data.desp}</h4>
            <NavBar data={data.navItems}/>
        </div>
    )}

}