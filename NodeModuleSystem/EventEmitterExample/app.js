const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLoggedEvent', function (emitArg) {
    console.log('app::', emitArg);
})

logger.log('Log this message');