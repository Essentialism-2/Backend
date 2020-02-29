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
    console.log(req.body)
    Values.addValue(req.body)
        .then(value => {
            res.status(200).json(value);
        })
        .catch(err => {
            res.status(500).json({ error: "could not add value" })
        })

})


router.get('/user/:id', (req, res) => {
    console.log(req.params.id)
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

module.exports = router;