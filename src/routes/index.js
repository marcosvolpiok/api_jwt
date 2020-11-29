const router = require('express').Router();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
/*
const {
    serverRepositoryOb,
    serverControllerOb,
    messageControllerOb
} = require('../dependencies/');
*/

const authController = require('../controllers/authController');
const authControllerOb = new authController();

const photoController = require('../controllers/photoController');
const photoControllerOb = new photoController();




router.use((req, res, next) => {
    const token = req.headers['access-token'];
    console.log('header token: ', token);

    if(req.path=='/login/'){
        next();
    }else{
        if (token) {
            jwt.verify(token, config.key, (err, decoded) => {      
                if (err) {
                    return res.json({ mensaje: 'Token inválida' });    
                } else {
                    req.decoded = decoded; 
                    console.log('Decoded: ', decoded);   
                    next();
                }
            });
            } else {
                res.send({ 
                    mensaje: 'Token no proveída.' 
                });
            }
    }
    
});


router.post('/login/', login, authControllerOb.login);
router.get('/photos/', photoControllerOb.list);




function login(req, res, next){
    const schema = Joi.object({
        user: Joi.string().required(),
        pwd: Joi.string().required() 
    });
    validateRequest(req, next, schema);
}


function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    let params;

    if(Object.keys(req.body).length>0){
        params=req.body;

    }else{
        params=req.params;
    }

    const { error, value } = schema.validate(params, options);

    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}





module.exports = router;