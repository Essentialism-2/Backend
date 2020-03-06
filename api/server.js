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
server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://essentialism.teagueteam.now.sh');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
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