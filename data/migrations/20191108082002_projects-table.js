
exports.up = function(knex) {
    return knex.schema
  
    .createTable('projects', table => { 
        table.increments()
        table.string('project_name', 128)
        .notNullable()
        table.string('project_description', 128)
        table.boolean('completed').default(false)
        .notNullable()
    })

    .createTable('resources', table => { 
        table.increments()
        table.string('resource_name', 128)
        .unique()
        .notNullable()
        table.string('resource_description', 128)
    })

    .createTable('tasks', table => { 
        table.increments()
        table.string('tasks_description', 128)
        .notNullable()
        table.string('notes', 128)
        table.boolean('completed').default(false)
        .notNullable()
    })
};

exports.down = function(knex) {
  
};
