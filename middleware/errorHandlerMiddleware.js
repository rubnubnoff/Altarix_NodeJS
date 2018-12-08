const winston = require('winston');

module.exports = function(err, req, res, next) {
    winston.error(err.status || 500, err.message);

    res.status(err.status || 500).send('Something failed.');
}