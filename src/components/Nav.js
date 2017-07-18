require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

let Nav = React.createClass({
    handleClick: function(event){
        console.log(event.target);
        this.props.navTo();
        this.setState({bgColor:this.state.bgColor ==='pink'?'green':'pink'});
    },
    getInitialState:function(){
        return {bgColor:'pink'}
    },
    render: function () {
        const data = this.props.data;
        const navItems = data.map(function(item, index){
            return (
                <li className='navItem' onClick={this.handleClick} style={{backgroundColor:this.state.bgColor}} key={item.id}>{item.name}</li>
            )
        }.bind(this))
    return(
        <div className="nav">
            <span className="navIcon"></span>
            <ul>{navItems}</ul>
        </div>
    )}
    
})
export default Nav;