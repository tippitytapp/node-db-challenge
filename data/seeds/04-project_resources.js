
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {id: 1, project_id: 1, resource_id: 1},
        {id: 2, project_id: 1, resource_id: 2},
        {id: 3, project_id: 1, resource_id: 3},
        {id: 4, project_id: 1, resource_id: 4},
        {id: 5, project_id: 2, resource_id: 1},
        {id: 6, project_id: 2, resource_id: 2},
        {id: 7, project_id: 2, resource_id: 3},
        {id: 8, project_id: 2, resource_id: 4},
        {id: 9, project_id: 3, resource_id: 1},
        {id: 10, project_id: 3, resource_id: 2},
        {id: 11, project_id: 3, resource_id: 3},
        {id: 12, project_id: 3, resource_id: 4},
        {id: 13, project_id: 4, resource_id: 1},
        {id: 14, project_id: 4, resource_id: 2},
        {id: 15, project_id: 4, resource_id: 3},
        {id: 16, project_id: 4, resource_id: 4},
        {id: 17, project_id: 1, resource_id: 5},
        {id: 18, project_id: 1, resource_id: 6},
        {id: 19, project_id: 2, resource_id: 5},
        {id: 20, project_id: 2, resource_id: 6},
        {id: 21, project_id: 3, resource_id: 5},
        {id: 22, project_id: 3, resource_id: 6},
        {id: 23, project_id: 4, resource_id: 5},
        {id: 24, project_id: 4, resource_id: 6},
        {id: 25, project_id: 4, resource_id: 7},
        {id: 26, project_id: 2, resource_id: 8},
        {id: 27, project_id: 1, resource_id: 9},
        {id: 28, project_id: 2, resource_id: 9},
        {id: 29, project_id: 3, resource_id: 9}
      ]);
    });
};
