
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id:1, project_id: 1, task_description: "User Interface and Git", task_notes: "week 1", task_complete: true},
        {id:2, project_id: 1, task_description: "Advanced CSS and Intro JavaScript", task_notes: "week 2", task_complete: true},
        {id:3, project_id: 1, task_description: "JavaScript Fundamentals", task_notes: "week 3", task_complete: true},
        {id:4, project_id: 1, task_description: "WEB Unit 1 Build Week", task_notes: "week 4", task_complete: true},
        {id:5, project_id: 2, task_description: "Applied JavaScript", task_notes: "week 5", task_complete: true},
        {id:6, project_id: 2, task_description: "Intro To React", task_notes: "week 6", task_complete: true},
        {id:7, project_id: 2, task_description: "Single Page Applications", task_notes: "week 7", task_complete: true},
        {id:8, project_id: 2, task_description: "WEB Unit 2 Build Week", task_notes: "week 8", task_complete: true},
        {id:9, project_id: 3, task_description: "Advanced React", task_notes: "week 9", task_complete: true},
        {id:10, project_id: 3, task_description: "Advanced State Management", task_notes: "week 10", task_complete: true},
        {id:11, project_id: 3, task_description: "Advanced Web Applications", task_notes: "week 11", task_complete: true},
        {id:12, project_id: 3, task_description: "WEB Unit 3 Build Week", task_notes: "week 12", task_complete: true},
        {id:13, project_id: 4, task_description: "Build A Web API", task_notes: "week 13", task_complete: true},
        {id:14, project_id: 4, task_description: "Adding Data Persistence", task_notes: "week 14", task_complete: false},
        {id:15, project_id: 4, task_description: "Authentication and Testing", task_notes: "week 15", task_complete: false},
        {id:16, project_id: 4, task_description: "WEB Unit 4 Build Week", task_notes: "week 16", task_complete: false}
        
      ]);
    });
};
