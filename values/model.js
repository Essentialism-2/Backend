const db = require('../database/db-config');

module.exports = {
    all,
    findValue,
    addValue,
    valuesForUser,
    addValueToUser,
    removeValueFromUser,
    editUsersValues,
    remove
}

function all() {
    return db('values')
}

function findValue(id) {
    return db('values')
    .where({id})
}

function addValue(value){
    return db('values')
    .insert(value, "id")
}

function valuesForUser(id){
    return db('values as v')
    .select('v.id as Value_Id', 'v.name as Value_name','v.description as Value_description', 'u.user_id as User_id','u.top_three as Top_Three','u.description as User_Description')
    .join('users_values as u','u.value_id','v.id')
    .where({user_id: id})
}

function addValueToUser(id, value_id, description, top_three){
    return db('users_values')
        .insert({
            user_id: id,
            value_id: value_id,
            description: description,
            top_three: top_three
        })
}

function removeValueFromUser(id, value_id) {
    return db('users_values')
        .where({user_id: id, value_id: value_id})
        .del()
}

function editUsersValues(id, value_id, top_three, description) {
    return db('users_values')
    .where({ user_id: id, value_id: value_id })
    .update({top_three: top_three, description: description})
}

function remove(id) {
    return db('values')
        .where({id})
        .del()
}

