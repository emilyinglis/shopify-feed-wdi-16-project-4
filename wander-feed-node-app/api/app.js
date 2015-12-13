var express        = require('express');
var cors           = require('cors');
var path           = require('path');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var cookieParser   = require("cookie-parser");
var methodOverride = require("method-override");
var app            = express();

mongoose.connect(config.database);

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));


// ---------------------

// Do we require the below considering no login?

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(morgan('dev'));
// app.use(cors());
// app.use(passport.initialize());

// app.use('/api', expressJWT({ secret: secret })
//   .unless({
//     path: [
//       { url: '/api/login', methods: ['POST'] },
//       { url: '/api/register', methods: ['POST'] }
//     ]
//   }));

// app.use(function (err, req, res, next) {
//   if (err.name === 'UnauthorizedError') {
//     return res.status(401).json({message: 'Unauthorized request.'});
//   }
//   next();
// });

var routes = require('./config/routes');
app.use("/api", routes);

app.listen(3000);