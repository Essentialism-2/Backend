const router = require('express').Router();

const bcrypt = require('bcryptjs');
const Users = require('./model');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets');


router.get('/', (req, res) => {

    Users.getUsers()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ error: "Could not get users" })
    })
})

router.post('/register', (req, res) => {
    let user = req.body
    const { password, username } = req.body;

    const hash = bcrypt.hashSync(password, 8);
    user.password = hash;

    Users.addUser(user)
        .then(added => {
            Users.findBy({username})
            .first()
            .then(user => {
              if(user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({
                  message: `Welcome ${username}`,
                  token: generateToken(user)
                })
              } else {
                res.status(500).json({ message: "Invalid Credentials" });
              }
            })
            .catch(err => {
              res.status(500).json({ error: "Could not login" });
            })
        })
        .catch(err => {
            res.status(500).json({ error: "could not add user" })
        })
})

router.post('/login', (req, res) => {
    // implement login
    let { username, password } = req.body;
  
    Users.findBy({username})
      .first()
      .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({
            message: `Welcome ${username}`,
            token: generateToken(user)
          })
        } else {
          res.status(500).json({ message: "Invalid Credentials" });
        }
      })
      .catch(err => {
        res.status(500).json({ error: "Could not login" });
      })
  });

module.exports = router;

function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, jwtSecret, options);
}