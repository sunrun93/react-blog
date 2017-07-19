require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';
import AppStore from '../stores/AppStore'

const navData = AppStore.data;
let Nav = React.createClass({
    handleClick: function(event){
        console.log(event.target);
        this.props.navTo();
        this.setState({bgColor:this.state.bgColor ==='pink'?'green':'pink'});
    },
    getInitialState:function(){
        //初始化取值可以通过intialData取值
        return {bgColor:'pink',navItem:navData.nav}
    },
    render: function () {
       // const data = this.props.data;
        const navItems = this.state.navItem.map(function(item, index){
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