require('normalize.css/normalize.css');
require('styles/App.less');

import React,{Component} from 'react';

import Header from './Header'
import Nav from './Nav'
import Section from './Section'
import Footer from './Footer'

import AppStore from '../stores/AppStore'


let navToFun = function (a) {
    console.log(a);
}

export default class AppComponent extends Component {

    render() {
        const data = AppStore.data;
        const headerData = data.header;
        const navData = data.nav;
        const sectionData = data.article;
        return (
            <div className = "index" >
              <Header data={headerData}/>
              <Nav navTo={navToFun} data={navData}/>
              <Section data={sectionData}/>
              <Footer/>
            </div>
        );
    }
}