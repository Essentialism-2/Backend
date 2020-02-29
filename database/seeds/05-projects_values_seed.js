
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('projects_values').truncate()
    // .then(function () {
      // Inserts seed entries
      return knex('projects_values').insert([
        {project_id: 1, values_id: 1, relevant: false},
        {project_id: 1, values_id: 2, relevant: false},
        {project_id: 1, values_id: 3, relevant: true},
        {project_id: 2, values_id: 1, relevant: false},
        {project_id: 2, values_id: 2, relevant: true},
        {project_id: 2, values_id: 3, relevant: false},
        {project_id: 3, values_id: 1, relevant: false},
        {project_id: 3, values_id: 2, relevant: true},
        {project_id: 3, values_id: 3, relevant: true},
        {project_id: 4, values_id: 1, relevant: true},
        {project_id: 4, values_id: 6, relevant: true},
        {project_id: 4, values_id: 5, relevant: false},
        {project_id: 5, values_id: 1, relevant: false},
        {project_id: 5, values_id: 6, relevant: true},
        {project_id: 5, values_id: 5, relevant: true},
        {project_id: 6, values_id: 1, relevant: false},
        {project_id: 6, values_id: 6, relevant: true},
        {project_id: 6, values_id: 5, relevant: true},
        {project_id: 7, values_id: 6, relevant: false},
        {project_id: 7, values_id: 4, relevant: true},
        {project_id: 7, values_id: 3, relevant: false},
        {project_id: 8, values_id: 6, relevant: true},
        {project_id: 8, values_id: 4, relevant: false},
        {project_id: 8, values_id: 3, relevant: true},
      ]);
    // });
};
