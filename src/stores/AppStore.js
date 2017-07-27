import {EventEmitter} from 'events'
import _ from 'lodash'

export default _.extend({}, EventEmitter.prototype, {

    data: {
        header: {
            title: 'React-Blog',
            desp: 'Try to build a blog with react',
            navItems:['JavaScript','HTML','React','GoJS','ES6']
        }
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