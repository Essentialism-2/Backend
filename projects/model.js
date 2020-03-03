const db = require('../database/db-config');

module.exports = {
    all,
    addProjects,
    removeProject
}

function all(id) {
    return db('projects')
    .where({user_id: id})
}

function addProjects(id, project){
    project.user_id = id;
    return db('projects')
    .insert(project, "id");
}

function removeProject(user, project_id) {
    console.log(user)
    console.log(project_id)
    return db('projects')
    .where({id: project_id, user_id: user})
    .del()
}