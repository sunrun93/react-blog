require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

let jsData = require('../stores/javascript.json');
let htmlData = require('../stores/html.json');
let reactData = require('../stores/react.json');
let gojsData = require('../stores/gojs.json');
let es6Data = require('../stores/ES6.json');
let totalData = jsData.concat(htmlData, reactData, gojsData, es6Data);


let Section = React.createClass({
    getInitialState:function(){
        return {articleIndex:this.props.targetIndex}
    },
    render:function(){
    const currentArticle = totalData.filter((item)=>{return item.title ===this.props.targetIndex})[0];
  
    const section_item = ()=>{
        return(
            <div>
                <h3 key={currentArticle.index}>{currentArticle.title}</h3>
                <h6>{currentArticle.tag}</h6>
                <section>{currentArticle.content}</section>
            </div>
        )
    };
    return(
        <div className="section">
            <section>{section_item()}</section>
        </div>
    )}

});

export default Section;
