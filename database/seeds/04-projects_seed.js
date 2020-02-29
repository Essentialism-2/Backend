
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('projects').truncate()
    // .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, user_id: 3, name: 'Calculator App', description: 'side project for portfolio'},
        {id: 2, user_id: 3, name: 'Build a birdhouse', description: 'project with my son'},
        {id: 3, user_id: 3, name: 'Save money'},
        {id: 4, user_id: 2, name: 'Workout Daily', description: 'P90X'},
        {id: 5, user_id: 2, name: 'Go to More Meetups'},
        {id: 6, user_id: 2, name: 'Fix my truck', description: 'Somethings up with the radiator'},
        {id: 7, user_id: 1, name: 'Paint a picture', description: 'Finish my self portrait'},
        {id: 8, user_id: 1, name: 'Studying Business & Entrepreneurship', description: 'Read the E-Myth & Conferences'},
      ]);
    // });
};
