require('dotenv').config();


const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authenticate = require('./authenticate-middleware');

const usersRouter = require('../users/router');
const valuesRouter = require('../values/router');
const projectsRouter = require('../projects/router');

const server = express();


var whitelist = ['http://localhost:3000', 'https://essentialism.teagueteam.now.sh/', 'https://buildweek-essentialism.herokuapp.com/']
var corsOptionsDelegate = function (req, callback) {
	var corsOptions;
	if (whitelist.indexOf(req.header('Origin')) !== -1) {
		corsOptions = { credentials: true, origin: true } // reflect (enable) the requested origin in the CORS response
	} else {
		corsOptions = { origin: false } // disable CORS for this request
	}
  		callback(null, corsOptions) // callback expects two parameters: error and options
}
// server.use(cors(corsOptionsDelegate));

//middleware
server.use(express.json());
server.use(cors(corsOptionsDelegate)); 
server.use(helmet());
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://essentialism.teagueteam.now.sh/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


//routes
server.use('/api/users', usersRouter);
server.use('/api/values', authenticate, valuesRouter);
server.use('/api/projects', authenticate, projectsRouter);
server.use('/api/projects', authenticate, projectsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "up"})
})

module.exports = server;