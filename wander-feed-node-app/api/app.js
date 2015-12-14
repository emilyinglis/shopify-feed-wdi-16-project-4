var express        = require('express');
var cors           = require('cors');
var path           = require('path');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var cookieParser   = require("cookie-parser");
var methodOverride = require("method-override");
var app            = express();


// Connect to database
mongoose.connect("mongodb://localhost:27017/shopify-feed"); //previously (config.data) but Movies API had this

var routes = require('./config/routes');

app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000);
