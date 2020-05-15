
exports.up = function(knex) {
  return knex.schema.createTable('projects', projects => {
        projects.increments();
        projects
            .text('project_name')
            .notNullable();
        projects
            .text('project_description');
        projects
            .boolean('project_complete')
            .defaultTo(false);    
  })
    .createTable('tasks', tasks => {
        tasks.increments();
        tasks
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tasks
            .text('task_description')
            .notNullable();
        tasks
            .text('task_notes')
        tasks
            .boolean('task_complete')
            .defaultTo(false);
    })
    .createTable('resources', resources => {
        resources.increments()
        resources
            .text('resource_name')
            .notNullable();
        resources
            .text('resource_description')
    })
    .createTable('project_resources', project_resources => {
        project_resources.increments()
        project_resources
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        project_resources
            .integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
