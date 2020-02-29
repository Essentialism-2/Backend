const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: "You made it to /api/users" });
})

module.exports = router;