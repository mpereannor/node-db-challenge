
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'roads',project_description: 'build rods', completed: 1},
        {id: 2, project_name: 'space',project_description: 'build space cities',  completed: 1},
        {id: 3, project_name: 'interstellar',project_description: 'go to alpha centauri', completed: 1}
      ]);
    });
};
