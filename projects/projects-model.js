
const db = require('../data/db.config');

module.exports = { 
    addResources,
    getResources,
    addProjects,
    getProjects,
    addTasks,
    getTasks
};

function addResources(resource){
    
/* insert into resources
     (resource_name, resource_description)
   values
    ( "transport", "helps with logistics");
*/
    db('resources')
    .insert(resource)
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