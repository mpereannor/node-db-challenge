
exports.up = function(knex) {
    return knex.schema
  
    .createTable('projects', table => { 
        table.increments()
        table.string('project_name', 128)
        .notNullable()
        table.string('project_description', 128)
        table.boolean('completed').default(0)
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
        table.boolean('completed').default(0)
        .notNullable()
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })

    .createTable('project_resource', table => {
        table.increments()
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
