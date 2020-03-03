const router = require('express').Router();


const Values = require('./model');

router.get('/', (req, res) => {
    Values.all()
        .then(values => {
            res.status(200).json(values);
        })
        .catch(err => {
            res.status(500).json({ error: "could not get all values" })
        })

})

router.get('/:id', (req, res) => {
    Values.findValue(req.params.id)
        .then(value => {
            res.status(200).json(value);
        })
        .catch(err => {
            res.status(500).json({ error: "could not that value" })
        })

})

router.post('/', (req, res) => {

    Values.addValue(req.body)
        .then(value => {
            res.status(200).json(value);
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})


router.get('/user/:id', (req, res) => {

    Values.valuesForUser(req.params.id)
        .then(usersValues => {
            res.status(200).json(usersValues)
        })
        .catch(err => {
            res.status(500).json({ error: "Could not get users values"})
        })
})

router.post('/user/:id', (req, res) => {
    const { value_id, description } = req.body;

    Values.addValueToUser(req.params.id, value_id, description)
        .then(userValueAdded => {
            res.status(200).json(req.body)
        })
        .catch(err => {
            res.status(500).json({ error: "Could not add value to user" })
        })
})

router.delete('/:id', (req, res) => {

    Values.remove(req.params.id)
        .then(deleted => {
            if(deleted = 1) {
                res.status(200).json({ message: `Value ${req.params.id} successfully deleted`})
              } else {
                res.status(200).json({ message: `Value does not exist`})
              }
            res.status(200).json(deleted);
        })
        .catch(err => {
            res.status(500).json({  message: "Could not delete Value", error: err })
        })
})

module.exports = router;