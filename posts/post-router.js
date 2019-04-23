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


router.get(`/post`, (req, res) => {
    

    db
    .getPost().where({public: 0})
    .then(user => {
        res.status(200).json(
            user
        )
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
        
        res.status(201).json({
            ...info
        })
    })
    .catch(err => {
        res.status(500).json(error)
    })

})


router.delete('/post/delete/:id', (req, res) => {
    let id = req.params.id;

    db
    .remove(id)
    .then(users => {
        res.status(204).end();
    })
    .catch(err => {
        res.status(500).json({
            error: "cannot be removed"
        })
    })
})


router.get('/post/:username', (req, res) => {
        let username = req.params.username

        db
        .getByUsername(username)
        .then(posts => {
            res.status(201).send(posts)
        })
        .catch(err => {
            res.status(401).json({ error: "user does not exist" })
        })
})


router.put('/post/update/:id', (req, res) => {

    const id = req.params.id
    const actionbod = req.body

    db
    .update(id, actionbod)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        res.status(500).json({
            error: "The information could not be modified"
        })
    })

})


module.exports = router