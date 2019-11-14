
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'gasoline',resource_description: 'drain the universe of gasoline'},
        {id: 2, resource_name: 'mine from titan moon ',resource_description: 'build space cities'},
        {id: 3, resource_name: 'protogen',resource_description: 'mine inside of phoebe'}
      ]);
    });
};
