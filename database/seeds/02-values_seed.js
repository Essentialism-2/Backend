
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {id: 1, name: 'Athletic ability', description: 'Get your heartrate up!'},
        {id: 2, name: 'Family', description: 'Focus on the family.'},
        {id: 3, name: 'Career', description: 'Never stop growing, keep the grind strong.'},
        {id: 4, name: 'Art and literature'},
        {id: 5, name: 'Creativity', description: 'Creating, discovering, or inventing things to make a difference in the world'},
        {id: 6, name: 'Independence'},
      ]);
    });
};
