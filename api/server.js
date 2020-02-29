const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const usersRouter = require('../users/router');


//middleware
server.use(express.json());
server.use(cors()); 
server.use(helmet());

//routes
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "up"})
})

module.exports = server;