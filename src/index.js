const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    bodyParser = require('body-parser');
    cors = require('cors');

const config = require('./config/config');

// importing routes
const indexRoutes = require('./routes/index');

app.use(bodyParser.json());

// settings
app.set('port', process.env.PORT || 4000);

app.use(cors());

// middlewares
app.use(morgan('dev'));

// routes
app.use('/', indexRoutes);

// error handler
app.use(function(err, req, res, next){
    res.status(400).json({error: err, message: err.message});
});

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
