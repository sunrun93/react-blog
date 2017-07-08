require('normalize.css/normalize.css');
require('styles/App.less');

import React,{Component} from 'react';

import Header from './Header'
import Nav from './Nav'
import Section from './Section'
import Footer from './Footer'

import AppStore from '../stores/AppStore'

export default class AppComponent extends Component {
    render() {
        const data = AppStore.data;
        const headerData = data.header;
        const navData = data.nav;
        return (
            <div className = "index" >
              <Header data={headerData}/>
              <Nav data={navData}/>
              <Section/>
              <Footer/>
                
            </div>
        );
    }
}