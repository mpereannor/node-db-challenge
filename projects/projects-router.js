const express = require('express');
const Helpers = require('./projects-model');

const routerResource = express.Router();
const routerProject = express.Router();
const routerTask = express.Router();

//resource endpoints

routerResource.get('/', (req, res) => { 
    Helpers.getResources()
    .then(resource => { 
        res.json(resource);
    })
    .catch(error => { 
        res.status(500).json(
            'failed to get resoures ' + 
            error.message
        )
    })
})

routerResource.post('/', (req, res) => {
    const resourceData = req.body;

    Helpers.addResources(resourceData)
    .then(newResourceEntry => { 
        res.status(201).json(newResourceEntry);
    })
    .catch( error => { 
        res.status(500).json('failed to add resource' + error.message)
    })
})


//project endpoints

routerProject.get('/', (req, res) => { 
    Helpers.getProjects()
    .then(projects => {
        const projectPrettier = projects.map(project => {
          if (project.completed === 1) {
            return { ...project, completed: true };
          } 
          else {
            return { ...project, completed: false };
          }
        });       
        res.json(projectPrettier);
    })
    .catch(error => { 
        res.status(500).json(
            'failed to get projects ' + 
            error.message
        )
    })
})

routerProject.post('/', (req, res) => {
    const projectData = req.body;
  
    Helpers.addProjects(projectData)
    .then(newProjectEntry => { 
        res.status(201).json(newProjectEntry);
    })
    .catch( error => { 
        res.status(500).json('failed to add projects' + error.message)
    })
})

//tasks endpoints

routerTask.get('/', (req, res) => { 
    Helpers.getTasks()
    .then(tasks => { 
        const taskPrettier = tasks.map(task => {
            if (task.completionStatus) {
              return { ...task, completionStatus: true };
            } 
            else {
              return { ...task, completionStatus: false };
            }
          });       
          res.json(taskPrettier);
    })
    .catch(error => { 
        res.status(500).json(
            'failed to get resoures ' + 
            error.message
        )
    })
})

routerTask.post('/', (req, res) => {
    const taskData = req.body;
  
    Helpers.addTasks(taskData)
    .then(newTaskEntry => { 
        res.status(201).json(newTaskEntry);
    })
    .catch( error => { 
        res.status(500).json('failed to add projects' + error.message)
    })
})

module.exports = { 
    routerResource, 
    routerProject,
    routerTask,
};