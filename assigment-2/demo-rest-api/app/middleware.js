const express = require('express')
const morgan = require('morgan');
const cors = require('cors')
const middleware = [
    express.json(),
    morgan('dev'),
    cors(),
    express.static('public')
];

module.exports = middleware;