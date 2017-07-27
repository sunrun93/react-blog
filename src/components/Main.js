require('normalize.css/normalize.css');
require('styles/App.less');

import React,{Component} from 'react';

import Header from './Header'
import Nav from './Nav'
import Section from './Section'
import Footer from './Footer'

import AppStore from '../stores/AppStore'

let AppComponent = React.createClass({
     navToFun: function (a) {
        this.setState({articleIndex: a});
    },
     getInitialState:function(){
        return {
            articleIndex: 1
        }
    },
    render:function() {
        const data = AppStore.data;
        const headerData = data.header;
        return (
            <div className = "index" >
              <Header data={headerData}/>
              <Nav navTo={this.navToFun}/>
              <Section targetIndex={this.state.articleIndex}/>
              <Footer/>
            </div>
        );
    }

})

export default AppComponent;