const router = require('express').Router();


const Projects = require('./model');



router.get('/', (req, res) => {
    Projects.all(req.decodedToken.subject)
        .then( projects => {
            Projects.projectsValues(req.decodedToken.subject)
                .then( values => {
                    Projects.topThreeValuesForUser(req.decodedToken.subject)
                        .then( topThreeValues => {
                            let topThreeValuesData;
                            let testingValues;
                            let projectValues;
                            topThreeValuesData = topThreeValues;
                            projectValues = values;
                            for(var i = 0; i < projectValues.length; i++){
                                let matches = false;
                                for(var j = 0; j < topThreeValues.length; j++){
                                    if(projectValues[i].values_id === topThreeValues[j].Value_Id) {
                                        matches = true
                                    }
                                }
                                projectValues[i] = {...projectValues[i], matchesTopThree: matches}
                            }

                            res.status(200).json(projects.map(project => project = {...project, testThing: testingValues,  projectValues: projectValues.filter(value => value.project_id === project.id)}));

                        })
                        .catch(err => {
                            res.status(500).json({ error: "didnt work dude 😳"})
                        })
                })

        })
        .catch(err => {
            res.status(500).json({ error: "Could not get projects" })
        })
    });

router.get('/values/', (req, res) => {
    // let project = req.params.id;
    Projects.projectsValues(req.decodedToken.subject, req.params.id)
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
        res.status(200).json({ message: 'it deleted', deleted})
    })
    .catch(err => {
        Projects.removeAllProjectsValues(req.body.project_id)
            .then(removed => {
                Projects.removeProject(req.decodedToken.subject, req.body.project_id)
                    .then(secondTryDelete => {
                        res.status(200).json({message: 'deleted'});
                    })
                    .catch(err => {
                        res.status(500).json(err)
                    })
            })
            .catch(err => {
                res.status(500).json(err)
            })

            // res.status(500).json({ error: "Could not delete project"})
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


// router.get('/topthree', (req, res) => {
//     Projects.topThreeValuesForUser(req.decodedToken.subject)
//         .then( projects => {
           
//                     res.status(200).json(projects);

//         })
//         .catch(err => {
//             res.status(500).json({ error: "didnt work bro. 😳" })
//         })
//     });

module.exports = router;