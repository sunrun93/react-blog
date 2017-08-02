import {EventEmitter} from 'events';
import _ from 'lodash';
let jsData = require('./javascript.json');
let htmlData = require('./html.json');
let reactData = require('./react.json');
let gojsData = require('./gojs.json');
let es6Data = require('./ES6.json');
let totalData = jsData.concat(htmlData, reactData, gojsData, es6Data);

export default _.extend({}, EventEmitter.prototype, {

    data: {
        header: {
            title: 'React-Blog',
            desp: 'Try to build a blog with react',
            navItems:['Web Basic','Demos','Favorites','Others']
        },
        totalData:totalData
    },

    emitChange: function () {
        this.emit('change')
    },

    // Add change listener
    addChangeListener: function (callback) {
        this.on('change', callback)
    },

    // Remove change listener
    removeChangeListener: function (callback) {
        this.removeListener('change', callback)
    }
})