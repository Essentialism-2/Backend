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
    const { password, email, name } = req.body;

    const hash = bcrypt.hashSync(password, 8);
    user.password = hash;

    Users.addUser(user)
        .then(added => {
            Users.findBy({email})
            .first()
            .then(user => {
              if(user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({
                  id: user.id,
                  message: `Welcome ${name}`,
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
            res.status(500).json({ error: "Could not add user" })
        })
})

router.post('/login', (req, res) => {
    // implement login
    let { email, password } = req.body;
  
    Users.findBy({email})
      .first()
      .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({
            id: user.id,
            message: `Welcome ${user.name}`,
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

  router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
      .then(deleted => {
        if(deleted = 1) {
          res.status(200).json({ message: `User ${req.params.id} successfully deleted`})
        } else {
          res.status(200).json({ message: `User does not exist`})
        }
      })
      .catch(err => {
        res.status(500).json({ error: "Could not delete user" })
      })
  })

module.exports = router;

function generateToken(user){
    const payload = {
        subject: user.id,
        email: user.email
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, jwtSecret, options);
}