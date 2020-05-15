
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: "Web Unit 1", project_description: "Web Fundamentals", project_complete: true},
        {id: 2, project_name: "Web Unit 2", project_description: "Web Applications 1", project_complete: true},
        {id: 3, project_name: "Web Unit 3", project_description: "Web Applications 2", project_complete: true},
        {id: 4, project_name: "Web Unit 4", project_description: "Web API 2", project_complete: false}
      ]);
    });
};
