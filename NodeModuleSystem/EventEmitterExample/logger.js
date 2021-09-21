const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log('Logger::log', message);
        this.emit('messageLoggedEvent', { id: 1, url: 'http://localhost:8081' })
    }
}

module.exports = Logger;