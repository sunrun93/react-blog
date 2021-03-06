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
    handleClick: function (index,title) {
        this.props.targetItem(title);
        this.setState({
            showIndex:index
        })
    },
     getInitialState:function(){
        return {
            showIndex:0
        
        }
    },
    render: function () {
        let detail = data.filter((item)=>{return item.tag === this.props.tagID});//filter nav item through tagID
        const navItem = detail.map(function (item,index) {
            return(
                <li key={item.title} onClick={this.handleClick.bind(null,index,item.title)} className={'navItem'+(this.props.active ? 'Full' : 'Hidden')+' '+(this.state.showIndex==index?'focusNavItem':'')}>{item.title}</li>
            )
        },this);
        return (
            <ul>{navItem}</ul>
        )
    }

});
let Nav = React.createClass({
    navToItem:function(title){
        this.props.navTo(title);//main function set state to update section
    },
    handleClick:function(index,ev){
        this.setState({
                index : index
            })
    },
    getInitialState:function(){
        return {
            index:0
        }
    },

    render: function () {
        const tags = mapTag().map(function (item,index) {
            return (
                <div key={item} className="navTagPane" >
                    <span onClick={this.handleClick.bind(null,index)} className={this.state.index==index?'focusNav':'hiddenNav'}>{item}</span>
                    <NavItem targetItem={this.navToItem} focusItem={this.state.index} tagID={item} active={this.state.index==index} key={index}/>
                </div>
            );
        },this);
    return(
        <div className="nav">
            <div className="navPane">{tags}</div>
        </div>
    )}
    
})
export default Nav;