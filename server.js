const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const routes = require('./User Backend/user-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


// Sanity check 
server.get('/', (req, res) => {
    res.send(
        `<h1>working</h1>`
    )
 })

// server.use('/api', routes)

module.exports = server;
