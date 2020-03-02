
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('users').truncate()
    // .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'testing1@gmail.com', password: 'password1', name:"Test Fred"},
        {id: 2, email: 'testing2@gmail.com', password: 'password2', name:"Test Jamie"},
        {id: 3, email: 'testing3@gmail.com', password: 'password3', name:"Test Harrison"}
      ]);
    // });
};
