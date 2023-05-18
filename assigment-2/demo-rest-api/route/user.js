const { userPostController, userGetController } = require('../controller/user');
const { writeFile } = require('../utils/db');

const route = require('express').Router();

route.get('/user', userGetController);

route.post('/user', userPostController)

module.exports = route;