const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userroutes = require('./user/user-router');
const postroutes = require('./posts/post-router')

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

server.use('/api', userroutes)
server.use('/api', postroutes)

module.exports = server;

