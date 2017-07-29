require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';
import AppStore from '../stores/AppStore';

let data = AppStore.data.totalData;

function mapTag() {
    let totalTag = [];
    data.forEach((item) => {
        if (totalTag.indexOf(item.tag) === -1) {
            totalTag.push(item.tag);
        }
    });
    return totalTag;
};

let NavItem = React.createClass({
    handleClick: function (title) {
        this.props.targetItem(title);
    },
    render: function () {
        let detail = data.filter((item)=>{return item.tag === this.props.tagID})
        const navItem = detail.map(function (item) {
            return(
                <li className='navItem' key={item.title} onClick={this.handleClick.bind(this, item.title)}>{item.title}</li>
            )
        },this)
        return (
            <ul>{navItem}</ul>
        )
    }

});
let Nav = React.createClass({
    navToItem:function(i){
        this.props.navTo(i)
    },

    render: function () {
        const tags = mapTag().map(function (item) {
            return (
                <div key={item}>{item}<NavItem targetItem={this.navToItem} tagID={item}/></div>
            );
        },this);
    return(
        <div className="nav">
            <span className="navIcon"></span>
            <div>{tags}</div>
        </div>
    )}
    
})
export default Nav;