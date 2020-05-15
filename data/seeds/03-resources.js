
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: "GitHub", resource_description: "where all your repositories are stored"},
        {id: 2, resource_name: "Visual Studio Code", resource_description: "Your favorite IDE"},
        {id: 3, resource_name: "Computer", resource_description: "your trusty computer, where all the magic happens"},
        {id: 4, resource_name: "Dual Monitor", resource_description: "cause without it, you would still be struggling"},
        {id: 5, resource_name: "Google", resource_description: "hello its google"},
        {id: 6, resource_name: "Slack", resource_description: "without slack you have no class"},
        {id: 7, resource_name: "Postman", resource_description: "api endpoint validation and testing"},
        {id: 8, resource_name: "Cypress", resource_description: "testing tool"},
        {id: 9, resource_name: "Axios", resource_description: "accessing data on the front end"}
      ]);
    });
};
