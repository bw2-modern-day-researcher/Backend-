const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userroutes = require('./user/user-router');
const postroutes = require('./posts/post-router')
const jwt = require('jsonwebtoken')
const secret = 'secret'

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


function tokenCheck(req, res, next) {
    const token = req.headers.authorization

    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "You are not authorized" })
            } else {
                next();
            }
        })
    } else {
        res.status(401).json({ message: "You need a token to log in" })
    }
}


// Sanity check 
server.get('/', (req, res) => {
    res.send(
        `<h1>working</h1>`
    )
 })

server.use('/api', userroutes)
server.use('/api', tokenCheck, postroutes)

module.exports = server;

