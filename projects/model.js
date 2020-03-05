const db = require('../database/db-config');

module.exports = {
    all,
    projectsValues,
    addProject,
    editProject,
    removeProject,
    addValueToProject,
    editValueToProject,
    removeValueFromProject
}

function all(id) {
    return db('projects')
    // .join('projects_values as v','v.project_id','p.id')
    .where({user_id: id})
}

function projectsValues(id, project) {
    return db('projects as p')
    .join('projects_values as v','v.project_id','p.id')
    .where({user_id: id})
}


function addProject(id, project){
    project.user_id = id;
    return db('projects')
    .insert(project, "id");
}

function editProject(id, project){
    return db('projects')
    .where({user_id: id, id: project.id})
    .update({description: project.description, name: project.name})
}

function removeProject(user, project_id) {
    return db('projects')
    .where({id: project_id, user_id: user})
    .del()
}

function addValueToProject(project_id, values_id, relevant){
    return db('projects_values')
        .insert({
            project_id: project_id,
            values_id: values_id,
            relevant: relevant
        })
}

function editValueToProject(project_id, values_id, relevant){
    return db('projects_values')
        .where({project_id: project_id, values_id: values_id})
        .update({
            relevant: relevant
        })
}

function removeValueFromProject(project_id, values_id){
    return db('projects_values')
        .where({project_id: project_id, values_id: values_id})
        .del()
}