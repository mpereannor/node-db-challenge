

// - [ ] Design the data model and use _knex migrations_
//  to create the database and tables.
// - [ ] Build an API with endpoints for:
//   - [ ] adding resources.
//   - [ ] retrieving a list of resources.
//   - [ ] adding projects.
//   - [ ] retrieving a list of projects.
//   - [ ] adding tasks.
//   - [ ] retrieving a list of tasks.

const db = require('../data/db.config');

module.exports = { 
    addResources,
    getResources,
    addProjects,
    getProjects,
    addTasks,
    getTasks
};

function addResources(){
    
/* insert into resources
     (resource_name, resource_description)
   values
    ( "transport", "helps with logistics");
*/
    db('resources')
    .insert(resourceData)
    // .then(ids => {
    //     return findById(ids[0])
   // })
}

function getResources(){
    return db('resources')
}

// function getResourceById(id){ 
//     return db('resources')
//     .where({id}).first()
// }
function addProjects(){

    db('projects')
    .insert(project)
    // .then(ids => {
    //     return findById(ids[0])
   // })
}

function getProjects(){
    return db('projects')
}

function addTasks(){
    db('tasks')
    .insert(task)
    // .then(ids => {
    //     return findById(ids[0])
   // })
}

function getTasks(){
    return db('tasks')
}