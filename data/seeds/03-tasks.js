
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, tasks_description: 'initiate immolation', notes: 'build rods', completed: 1, project_id: 1},
        {id: 2, tasks_description: 'grant klignons amnesty',notes: 'build space cities',  completed: 1, project_id: 2},
        {id: 3, tasks_description: 'deep space survey',notes: 'go to alpha centauri', completed: 1, project_id: 1}
      ]);
    });
};
