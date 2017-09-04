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

export default Content;
