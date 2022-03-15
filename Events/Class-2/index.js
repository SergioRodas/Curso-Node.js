const { EventEmitter } = require('events')
const { SAVE } = require('./event-names')

const emitter = new EventEmitter();

emitter.on('save', () => {
    console.log('On save activated 1');
})

emitter.on('save', () => {
    console.log('On save activated 2');
})

emitter.emit(SAVE);