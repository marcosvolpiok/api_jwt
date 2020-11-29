const jwt=require('jsonwebtoken');
const config = require('../config/config');
const fetch = require('node-fetch');

const authController = require('../controllers/authController');
const authControllerOb = new authController(jwt, config);

const photoController = require('../controllers/photoController');
const photoControllerOb = new photoController(fetch);

module.exports = {
    jwt, config, fetch, authControllerOb, photoControllerOb
};