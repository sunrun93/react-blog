require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import Nav from './Nav';
import Section from './Section';

let jsData = require('../stores/javascript.json');


let Content = React.createClass({
     navToFun: function (a) {
        this.setState({articleTitle: a});
    },
     getInitialState:function(){
        return {
            articleTitle: jsData[0].title
        }
    },
    render:function(){ 
    return(
            <div className="mainContent">
                <Nav navTo={this.navToFun} />
                <Section targetIndex={this.state.articleTitle} />
               
            </div>
        )
    }

});

let BasicContent = new React.createClass({
    render:function(){
        return(
            <div>
                <Nav navTo={this.navToFun} />
                <Section targetIndex={this.state.articleTitle} />
            </div>
        )
    }
});

let DemosContent = new React.createClass({
    render: function () {
        return (
            <div className="demosPane"></div>
        )
    }
});

let FavoriteContent = new React.createClass({
    render: function () {
        return (
            <div className="favoritePane"></div>
        )
    }
});

let OtherContent = new React.createClass({
    render: function () {
        return (
            <div className="otherPane"></div>
        )
    }
})

export default Content;
