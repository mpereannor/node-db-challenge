
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
    
    return db('resources')
    .insert(resource)
}

function getResources(){
    return db('resources')
}

// function getResourceById(id){ 
//     return db('resources')
//     .where({id}).first()
// }
function addProjects(project){

    return db('projects')
    .insert(project)
    // .then(ids => {
    //     return findById(ids[0])
   // })
}

function getProjects(){
    return db('projects')
}

function addTasks(task){
    return db('tasks')
    .insert(task)
    // .then(ids => {
    //     return findById(ids[0])
   // })
}

function getTasks(){
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select(
        't.tasks_description as tasksDescription',
        't.notes as tasksNotes',
        't.completed as completionStatus',
        'p.project_name as projectName',
        'p.project_description as projectDescription'
        )
}


// function getTasks(project_id){
//     return db('tasks')
//     .where({project_id})
// }