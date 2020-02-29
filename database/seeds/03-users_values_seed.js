
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('users_values').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('users_values').insert([
        {user_id: 1, value_id: 6, top_three: true, description: 'I want to be my own man!!!'},
        {user_id: 1, value_id: 4, top_three: true, description: 'I feel like if i look at painting i will get smarter'},
        {user_id: 1, value_id: 3, top_three: true, description: 'Get those 6 digits!!!'},
        {user_id: 2, value_id: 1, top_three: true, description: 'I wanna get ripped so ill have a girlfriend.'},
        {user_id: 2, value_id: 3, top_three: false, description: 'I wanna get into the tech industry. Lambda Help ME!!!'},
        {user_id: 2, value_id: 6, top_three: true, description: 'I want to move out of my moms house before 2021.'},
        {user_id: 2, value_id: 5, top_three: true},
        {user_id: 3, value_id: 1, top_three: true, description: 'I want to lose 20 lbs'},
        {user_id: 3, value_id: 2, top_three: true, description: 'I want to spend more time with my kids & be closer to my wife'},
        {user_id: 3, value_id: 3, top_three: true, description: 'I want to get a raise before the end of 2020.'},
        {user_id: 3, value_id: 6, top_three: false, description: 'I hope to have all my loans paid off by 2025'},
      ]);
    // });
};
