// server.js

// Import Modules
// ------------------------------------------------------------ 
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

// Morgan Logger
app.use(morgan('combined'));

// Configuration
// ------------------------------------------------------------
// var db = require('./config/db');

// Set PORT
// ------------------------------------------------------------
var port = process.env.PORT || 3333;

// Connect to MongoDB Database
// ------------------------------------------------------------
// mongoose.connect(db.url);

// BodyParser Configuration
app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(__dirname + '/public'));

// Routes
require('./app/routes')(app); // configure our routes

// Start server
app.listen(port);
console.log("Magic Happening at : " + port);

// Morgan Log

//expose app
exports = module.exports = app;