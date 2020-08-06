const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({ filename: 'combined.log', level: 'debug'}),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ],
    format: winston.format.simple()
});

module.exports = logger;