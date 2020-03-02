const db = require('../database/db-config');

module.exports = {
    getUsers,
    addUser,
    findBy,
    remove
}

function getUsers() {
    return db('users');
}

function addUser(user) {
    return db('users')
    .insert(user, "id");
}

function findBy(email) {
    return db('users')
    .where(email)
}

function remove(id) {
    return db('users')
    .where({id})
    .del()
}
