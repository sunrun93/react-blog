require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

let Section = React.createClass({
    getInitialState:function(){
        return {articleIndex:this.props.targetIndex}
    },
    render:function(){
    const data = this.props.data;
    const currentArticle = data[this.props.targetIndex-1];
  
    const section_item = ()=>{
        return(
            <div>
                <h3 key={currentArticle.id}>{currentArticle.tag}</h3>
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
