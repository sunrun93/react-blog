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
        console.log(a);
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
        const navData = data.nav;
        const sectionData = data.article;
        return (
            <div className = "index" >
              <Header data={headerData}/>
              <Nav navTo={this.navToFun.bind(this)} data={navData}/>
              <Section data={sectionData} targetIndex={this.state.articleIndex}/>
              <Footer/>
            </div>
        );
    }

})

export default AppComponent;