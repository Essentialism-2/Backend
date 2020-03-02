require('dotenv').config();


const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authenticate = require('./authenticate-middleware');

const usersRouter = require('../users/router');
const valuesRouter = require('../values/router');

const server = express();

//middleware
server.use(express.json());
server.use(cors()); 
server.use(helmet());


//routes
server.use('/api/users', usersRouter);
server.use('/api/values', authenticate, valuesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "up"})
})

module.exports = server;