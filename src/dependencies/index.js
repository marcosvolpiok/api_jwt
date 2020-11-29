const jwt=require('jsonwebtoken');
const config = require('../config/config');
const fetch = require('node-fetch');

const authController = require('../controllers/authController');
const authService = require('../services/authService');
const authServiceOb = new authService(jwt, config);
const authControllerOb = new authController(authServiceOb);


const photoController = require('../controllers/photoController');
const photoService = require('../services/photoService');
const photoServiceOb = new photoService(fetch);
const photoControllerOb = new photoController(photoServiceOb);

module.exports = {
    jwt, config, fetch, authControllerOb, photoControllerOb
};