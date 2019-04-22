const router = require('express').Router()
const db = require('./post-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const secret = 'secret'

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: "1d"
    }

    return jwt.sign(payload, secret, options)
}



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



router.get(`/post/home`, (req, res) => {
    

    db
    .getPost()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({message: "there was an error"})
    })
})


router.post('/post/create', (req, res) => {
    let user = req.body;
    
    
    db
    .add(user)
    .then(info => {
        
        res.status(201).json({info})
    })
    .catch(err => {
        res.status(500).json(error)
    })

})






module.exports = router