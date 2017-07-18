require('normalize.css/normalize.css');
require('styles/App.less');

import React,{Component} from 'react';

import Header from './Header'
import Nav from './Nav'
import Section from './Section'
import Footer from './Footer'

import AppStore from '../stores/AppStore'


let navToFun = function () {
    console.log('aaaaaa');
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
              <Nav data={navData} navTo={navToFun}/>
              <Section data={sectionData}/>
              <Footer/>
            </div>
        );
    }
}