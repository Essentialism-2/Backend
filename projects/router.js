const router = require('express').Router();


const Projects = require('./model');



router.get('/', (req, res) => {
    Projects.all(req.decodedToken.subject)
        .then(values => {
            res.status(200).json(values);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not get projects" })
        })
    });

router.post('/', (req, res) => {
    Projects.addProjects(req.decodedToken.subject, req.body)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not add project", err })
        })
    });

router.delete('/', (req, res) => {
    Projects.removeProject(req.decodedToken.subject, req.body.project_id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            res.status(500).json({ error: "Could not delete project"})
        })
})


module.exports = router;