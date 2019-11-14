
const db = require('../data/db.config');

module.exports = { 
    addResources,
    getResources,
    getResourceById,

    addProjects,
    getProjects,
    getProjectById,

    addTasks,
    getTasks

};

//resources helpers
function addResources(resource){
    
    return db('resources')
    .insert(resource)
}

function getResources(){
    return db('resources')
}

function getResourceById(id){
        return db('resources')
          .where({id })
          .first();
}

//project helpers
function addProjects(project){

    return db('projects')
    .insert(project)

}

function getProjects(){
    return db('projects')
}

function getProjectById(id){
    //select *
    //from projects 
    //join tasks on tasks.project_id = projects.id;


    return db('projects')
    .join('tasks', 'tasks.project_id', 'projects.id')
    .join('project_resource as pr','pr.project_id', 'projects.id')
    .select(
       'projects.project_name',
       'projects.project_description',
       'projects.completed',
       'tasks.tasks_description ',
        'tasks.notes',
        'tasks.completed',
        )
    .where('projects.id', id)
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

