require('normalize.css/normalize.css');
require('styles/App.less');

import React,{ Component } from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';

export default class Section extends Component{
render(){
    const data = this.props.data;
    const section_item = data.map((item)=>{
        return(
            <div>
                <h3 key={item.id}>{item.tag}</h3>
                <section>{item.content}</section>
            </div>
        )
    })
    return(
        <div className="section">
            <section>{section_item}</section>
        </div>
    )}

}