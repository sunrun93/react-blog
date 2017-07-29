require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';

import Header from './Header'
import Nav from './Nav'
import Section from './Section'
import Footer from './Footer'

import AppStore from '../stores/AppStore'
let jsData = require('../stores/javascript.json');

let AppComponent = React.createClass({
     navToFun: function (a) {
        this.setState({articleTitle: a});
    },
     getInitialState:function(){
        return {
            articleTitle: jsData[0].title
        }
    },
    render:function() {
        const data = AppStore.data;
        const headerData = data.header;
        return (
            <div className = "index" >
              <Header data={headerData}/>
              <Nav navTo={this.navToFun}/>
              <Section targetIndex={this.state.articleTitle}/>
              <Footer/>
            </div>
        );
    }

})

export default AppComponent;