const router = require('express').Router();


const Projects = require('./model');



router.get('/', (req, res) => {
    Projects.all(req.decodedToken.subject)
        .then( projects => {
            Projects.projectsValues(req.decodedToken.subject)
                .then( values => {
                    
                    
                    // res.status(200).json({...projects, values: values});
                    res.status(200).json(projects.map(project => project = {...project, values: values.filter(value => value.project_id === project.id)}));
                })

        })
        .catch(err => {
            res.status(500).json({ error: "Could not get projects" })
        })
    });

router.get('/value/:id', (req, res) => {
    let project = req.params.id;
    Projects.projectsValues(req.decodedToken.subject, project)
        .then(values => {
            res.status(200).json(values);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not get project values" })
        })
    });

router.post('/', (req, res) => {
    Projects.addProject(req.decodedToken.subject, req.body)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not add project", err })
        })
    });

router.put('/', (req, res) => {
    Projects.editProject(req.decodedToken.subject, req.body)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not edit project", err })
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

router.post('/value', (req, res) => {
    const {project_id, values_id, relevant } = req.body;

    Projects.addValueToProject(project_id, values_id, relevant)
        .then(projectValueAdded => {
            res.status(200).json({ message: `Successfully added value to project` })
        })
        .catch(err => {
            res.status(500).json({ error: "Could not add value to project", err })
        })
})

router.put('/value', (req, res) => {
    const {project_id, values_id, relevant } = req.body;

    Projects.editValueToProject(project_id, values_id, relevant)
        .then(projectValueAdded => {
            res.status(200).json({ message: `Successfully edited value to project relationship` })
        })
        .catch(err => {
            res.status(500).json({ error: "Could not edit value to project relationship", err })
        })
})

router.delete('/value', (req, res) => {
    const {project_id, values_id } = req.body;

    Projects.removeValueFromProject(project_id, values_id)
        .then(removed => {
            res.status(200).json({ message: `Successfully removed value from project`, removed })
        })
        .catch(err => {
            res.status(500).json({ error: "Could not remove value from project", err })
        })
})


module.exports = router;