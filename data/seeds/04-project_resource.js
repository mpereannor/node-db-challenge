
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resource').insert([
        {id: 1, project_id: 2, resource_id: 1 },
        {id: 2, project_id: 1, resource_id: 2 },
        {id: 3, project_id: 1, resource_id: 1 }
      ]);
    });
};
