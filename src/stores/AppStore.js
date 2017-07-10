import {EventEmitter} from 'events'
import _ from 'lodash'

export default _.extend({}, EventEmitter.prototype, {

    data: {
        header: {
            title: 'React-Blog',
            desp: 'Try to build a blog with react'
        },
        nav: [
            { id: '1', name: 'first Line' },
            { id: '2', name: 'second Line' },
            { id: '3', name: 'third Line' }
        ],
        article: [
            { id: '1', tag: 'article1', content: '111111111111111111111111111111111' },
            { id: '2', tag: 'article2', content: '222222222222222222222222222222222' },
            { id: '3', tag: 'article3', content: '333333333333333333333333333333333' }
        ]
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