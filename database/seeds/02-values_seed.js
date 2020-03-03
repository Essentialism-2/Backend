
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('values').truncate()
    // .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {id: 1, name: 'Athletic ability', description: 'Get your heartrate up!'},
        {id: 2, name: 'Relationships with friends and family'},
        {id: 3, name: 'Career', description: 'Never stop growing, keep the grind strong.'},
        {id: 4, name: 'Art and literature'},
        {id: 5, name: 'Creativity', description: 'Creating, discovering, or inventing things to make a difference in the world'},
        {id: 6, name: 'Independence'},
        {id: 7, name: 'Kindness and generosity'},
        {id: 8, name: 'Living in the moment'},
        {id: 9, name: 'Membership in a social group', description: 'such as your community, racial group, or school club'},
        {id: 10, name: 'Music'},
        {id: 11, name: 'My community'},
        {id: 12, name: 'My moral principles'},
        {id: 13, name: 'Nature and the environment'},
        {id: 14, name: 'Sense of humor'}
      ]);
    // });
};
