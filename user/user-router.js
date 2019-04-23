const router = require('express').Router()
const db = require('./user-model')
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



router.get(`/user/:id`, tokenCheck, (req, res) => {
    const ID = req.params.id

    db
    .getById(ID)
    .then(user => {


        res.status(200).json({
            ...user,

        })


    })
    .catch(err => {
        res.status(500).json({message: "there was an error"})
    })

})



router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 4)
    user.password = hash

    db
    .add(user)
    .then(info => {
        const token = generateToken(info)
        res.status(201).json({...info, token})
    })
    .catch(err => {
        res.status(500).json(err)
    })

})


router.post('/login', (req, res) => {
    let { username, password} = req.body;

    db
    .getBy({username})
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            
            const token = generateToken(user); 

            res.status(200).json({ ...user , message: `Welcome ${user.username}`, token })
        } else {
            res.status(401).json({ 
                message: 'YOU SHALL NOT PASS' 
             })
        }
    })
    .catch( error => {
        res.status(500).json(error)
    })
})


router.get('/logout', (req, res) => {
    if (token) {
        token.destroy(err => {
            if (err) {
                res.status(500).json({ message: 'Logout failed' })
            } else {
                res.status(200).json({ message: 'Bye, thanks for visiting' })
            }
        })
    } else {
        res.status(200).json({ message: "Bye, thanks for visiting" })
    }
})




module.exports = router