
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


function addProjects(project){

    return db('projects')
    .insert(project)

}

function getProjects(){
    return db('projects')
}

function addTasks(task){
    return db('tasks')
    .insert(task)
  
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

